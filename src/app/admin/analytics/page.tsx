/**
 * /admin/analytics — Analytics Hub.
 *
 * ONE place to jump into every analytics surface we use:
 *   - Google Analytics 4 (GA4)         — high-level traffic + acquisition
 *   - PostHog                          — product analytics, funnels, session replay
 *   - Vercel Analytics                 — Web Vitals + audience by route
 *   - Internal Neon DB / Leads         — actual lead capture + form submits
 *
 * Plus quick stats + a recent-events feed pulled from our marketing DB.
 *
 * Gated by HTTP Basic Auth in src/middleware.ts (matcher: /admin/:path*).
 */
import Link from "next/link";
import { sql } from "@/lib/db/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Stats = {
  total_leads: number;
  leads_last_7d: number;
  leads_today: number;
  total_downloads: number;
  total_events: number;
  total_contact_msgs: number;
};

type RecentEvent = {
  id: string;
  event_type: string;
  source_page: string | null;
  utm_source: string | null;
  utm_campaign: string | null;
  email: string | null;
  created_at: string;
};

type SourceRow = { name: string; count: number };

type TrafficSources = {
  referrers: SourceRow[];
  utmSources: SourceRow[];
  utmCampaigns: SourceRow[];
  landingPages: SourceRow[];
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

async function loadStats(): Promise<Stats> {
  const rows = (await sql`
    SELECT
      (SELECT COUNT(*) FROM marketing_leads)::int                                                  AS total_leads,
      (SELECT COUNT(*) FROM marketing_leads WHERE created_at > now() - interval '7 days')::int     AS leads_last_7d,
      (SELECT COUNT(*) FROM marketing_leads WHERE created_at::date = CURRENT_DATE)::int            AS leads_today,
      (SELECT COUNT(*) FROM lead_events WHERE event_type = 'pdf_download')::int                    AS total_downloads,
      (SELECT COUNT(*) FROM lead_events)::int                                                      AS total_events,
      (SELECT COUNT(*) FROM lead_events WHERE event_type = 'contact_form_submit')::int             AS total_contact_msgs
  `) as Stats[];
  return rows[0];
}

async function loadTrafficSources(): Promise<TrafficSources> {
  // Last 30 days, grouped per dimension. Run in parallel.
  // For referrers, extract host portion server-side after query (more reliable than regex in SQL across edge cases).
  const [referrerRowsRaw, utmSourceRowsRaw, utmCampaignRowsRaw, landingPageRowsRaw] = await Promise.all([
    sql`
      SELECT referrer AS name, COUNT(*)::int AS count
      FROM marketing_leads
      WHERE created_at > now() - interval '30 days'
      GROUP BY referrer
      ORDER BY count DESC
      LIMIT 30
    `,
    sql`
      SELECT COALESCE(NULLIF(TRIM(utm_source), ''), '(none)') AS name, COUNT(*)::int AS count
      FROM marketing_leads
      WHERE created_at > now() - interval '30 days'
      GROUP BY name
      ORDER BY count DESC
      LIMIT 10
    `,
    sql`
      SELECT COALESCE(NULLIF(TRIM(utm_campaign), ''), '(none)') AS name, COUNT(*)::int AS count
      FROM marketing_leads
      WHERE created_at > now() - interval '30 days'
      GROUP BY name
      ORDER BY count DESC
      LIMIT 5
    `,
    sql`
      SELECT COALESCE(NULLIF(TRIM(source_page), ''), '(unknown)') AS name, COUNT(*)::int AS count
      FROM marketing_leads
      WHERE created_at > now() - interval '30 days'
      GROUP BY name
      ORDER BY count DESC
      LIMIT 10
    `,
  ]);

  const referrerRows = referrerRowsRaw as { name: string | null; count: number }[];
  const utmSourceRows = utmSourceRowsRaw as { name: string; count: number }[];
  const utmCampaignRows = utmCampaignRowsRaw as { name: string; count: number }[];
  const landingPageRows = landingPageRowsRaw as { name: string; count: number }[];

  // Normalize referrers: strip protocol + path, leave just the host. NULL/empty → "(direct)".
  const referrerAgg = new Map<string, number>();
  for (const row of referrerRows) {
    const raw = (row.name || '').trim();
    let host: string;
    if (!raw) {
      host = '(direct)';
    } else {
      try {
        host = new URL(raw).hostname.replace(/^www\./, '');
      } catch {
        // Not a parseable URL — fall back to a best-effort strip.
        host = raw.replace(/^https?:\/\//i, '').replace(/^www\./, '').split('/')[0] || '(direct)';
      }
    }
    referrerAgg.set(host, (referrerAgg.get(host) || 0) + row.count);
  }
  const referrers: SourceRow[] = [...referrerAgg.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    referrers,
    utmSources: utmSourceRows,
    utmCampaigns: utmCampaignRows,
    landingPages: landingPageRows,
  };
}

async function loadRecentEvents(limit = 20): Promise<RecentEvent[]> {
  return (await sql`
    SELECT
      e.id,
      e.event_type,
      e.source_page,
      e.utm_source,
      e.utm_campaign,
      l.email,
      e.created_at
    FROM lead_events e
    LEFT JOIN marketing_leads l ON l.id = e.lead_id
    ORDER BY e.created_at DESC
    LIMIT ${limit}
  `) as RecentEvent[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default async function AdminAnalyticsPage() {
  let stats: Stats | null = null;
  let recentEvents: RecentEvent[] = [];
  let traffic: TrafficSources | null = null;
  let loadError: string | null = null;

  try {
    [stats, recentEvents, traffic] = await Promise.all([
      loadStats(),
      loadRecentEvents(20),
      loadTrafficSources(),
    ]);
  } catch (err) {
    loadError = err instanceof Error ? err.message : String(err);
  }

  // Status detection for each service.
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-72275PNKR6";
  const hasPostHog = Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
  const hasDb = !loadError;

  // Build GA4 dashboard URL. We only know the measurement ID (G-72275PNKR6),
  // not the numeric property ID. Link to GA home and let it route — the
  // property picker handles the rest.
  // Deep-link straight to the Traffic Acquisition report on the cornerstonepm.ai property (538785549).
  const ga4Url =
    "https://analytics.google.com/analytics/web/#/p538785549/reports/explorer?params=_u..nav%3Dmaui&r=all-pages&ruid=all-pages,life-cycle,acquisition,acquisition-traffic";

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-100">Analytics Hub</h1>
        <p className="text-sm text-slate-400 mt-1">
          One place for every analytics surface wired into cornerstonepm.ai. Quick stats below pull live from the marketing DB.
        </p>
      </header>

      {loadError && (
        <div className="mb-6 rounded-xl border border-red-700/60 bg-red-950/40 p-4 text-sm text-red-200">
          <strong>DB error:</strong> {loadError}
        </div>
      )}

      {/* ─── Internal quick stats ───────────────────────────────────────── */}
      {stats && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">At a glance · internal DB</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <StatCard label="Total leads" value={stats.total_leads} accent="emerald" />
            <StatCard label="Last 7 days" value={stats.leads_last_7d} accent="cyan" />
            <StatCard label="Today" value={stats.leads_today} accent="violet" />
            <StatCard label="PDF downloads" value={stats.total_downloads} accent="amber" />
            <StatCard label="Contact msgs" value={stats.total_contact_msgs} accent="rose" />
            <StatCard label="Total events" value={stats.total_events} accent="slate" />
          </div>
        </section>
      )}

      {/* ─── Top Traffic Sources (last 30 days) ────────────────────────── */}
      {traffic && (
        <section className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Top traffic sources · last 30 days</h2>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            This shows where your <strong className="text-slate-200">leads</strong> came from (people who filled out forms). For total <strong className="text-slate-200">traffic</strong> including non-converters, use GA4 → Acquisition → Traffic acquisition (linked in the cards below).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <SourceMiniTable title="Top Referrers" rows={traffic.referrers} emptyLabel="No referrer data in the last 30 days." />
            <SourceMiniTable title="Top UTM Sources" rows={traffic.utmSources} emptyLabel="No UTM source data in the last 30 days." />
            <SourceMiniTable title="Top UTM Campaigns" rows={traffic.utmCampaigns} emptyLabel="No UTM campaign data in the last 30 days." />
            <SourceMiniTable title="Top Landing Pages" rows={traffic.landingPages} emptyLabel="No landing page data in the last 30 days." />
          </div>
        </section>
      )}

      {/* ─── External dashboard quick-links ─────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">External dashboards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ServiceCard
            name="Google Analytics 4"
            icon={<GoogleAnalyticsIcon />}
            description="Page views, sessions, geography, acquisition channels. Best for the high-level traffic story."
            status="active"
            statusReason={`Wired with measurement ID ${gaId}`}
            href={ga4Url}
            cta="Open GA4"
            note="Measurement ID is set in src/components/GoogleAnalytics.tsx (override with NEXT_PUBLIC_GA_MEASUREMENT_ID). If GA opens the property picker, pick the cornerstonepm.ai property."
          />

          <ServiceCard
            name="PostHog"
            icon={<PostHogIcon />}
            description="Product analytics — funnels, retention, session replay, feature flags, custom event firehose."
            status={hasPostHog ? "active" : "configured"}
            statusReason={
              hasPostHog
                ? "NEXT_PUBLIC_POSTHOG_KEY is set; client SDK initialized in PostHogProvider"
                : "Provider mounted but NEXT_PUBLIC_POSTHOG_KEY is missing — events won't fire"
            }
            href="https://us.posthog.com/project/443686"
            cta="Open PostHog"
            note="Env vars: NEXT_PUBLIC_POSTHOG_KEY, NEXT_PUBLIC_POSTHOG_HOST (default us.i.posthog.com)."
          />

          <ServiceCard
            name="Vercel Analytics"
            icon={<VercelIcon />}
            description="Visitors and page popularity by route, plus Web Vitals (LCP, CLS, INP). Zero-config once mounted."
            status="active"
            statusReason="<VercelAnalytics /> mounted in src/app/layout.tsx"
            href="https://vercel.com/scottbuescher-4945s-projects/cornerstone-marketing-v2/analytics"
            cta="Open Vercel Analytics"
            note="Lives inside the Vercel dashboard for this project; no extra dashboard URL outside Vercel."
          />

          <ServiceCard
            name="Internal Leads DB (Neon)"
            icon={<DatabaseIcon />}
            description="Every form submit, PDF download, contact message — the raw source of truth. Backed by Neon Postgres."
            status={hasDb ? "active" : "missing"}
            statusReason={
              hasDb
                ? "Connected via MARKETING_DATABASE_URL"
                : "MARKETING_DATABASE_URL missing or queries failing — see error above"
            }
            href="/admin/leads"
            cta="Open Leads dashboard"
            internal
            note="Tables: marketing_leads, lead_events, email_events. Direct console: https://console.neon.tech/app/projects/cool-glade-60615342"
          />
        </div>
      </section>

      {/* ─── Recent activity feed ───────────────────────────────────────── */}
      <section className="mb-10">
        <Card title={`Recent activity · last ${recentEvents.length} events`}>
          {recentEvents.length === 0 ? (
            <p className="text-sm text-slate-500 py-4">No events recorded yet.</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="text-left py-2 pr-3 font-semibold">When</th>
                    <th className="text-left py-2 pr-3 font-semibold">Event</th>
                    <th className="text-left py-2 pr-3 font-semibold">Source page</th>
                    <th className="text-left py-2 pr-3 font-semibold">Email</th>
                    <th className="text-left py-2 pr-3 font-semibold">UTM</th>
                  </tr>
                </thead>
                <tbody>
                  {recentEvents.map((e) => (
                    <tr key={e.id} className="border-b border-slate-900 hover:bg-slate-900/30">
                      <td className="py-2.5 pr-3 text-slate-400 whitespace-nowrap text-xs">{fmtDate(e.created_at)}</td>
                      <td className="py-2.5 pr-3"><EventBadge type={e.event_type} /></td>
                      <td className="py-2.5 pr-3 text-slate-300 font-mono text-xs">{e.source_page || "—"}</td>
                      <td className="py-2.5 pr-3">
                        {e.email ? (
                          <a href={`mailto:${e.email}`} className="text-cyan-400 hover:text-cyan-300">{e.email}</a>
                        ) : (
                          <span className="text-slate-500">anonymous</span>
                        )}
                      </td>
                      <td className="py-2.5 pr-3 text-slate-500 text-xs">
                        {e.utm_source || e.utm_campaign ? (
                          <span>{e.utm_source || "—"} / {e.utm_campaign || "—"}</span>
                        ) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </section>

      {/* ─── Help / docs ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">What gets tracked where</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Google Analytics 4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Sessions, page views, acquisition source/medium, country, device. <br />
              Best when you want to answer <em>“how many people visited /pricing this week and where did they come from?”</em>
              Custom events fire via <code className="text-emerald-400 text-xs">trackEvent()</code> in <code className="text-slate-400 text-xs">GoogleAnalytics.tsx</code>.
            </p>
            <p className="text-xs text-slate-500 mt-3">Env: <code className="text-slate-400">NEXT_PUBLIC_GA_MEASUREMENT_ID</code> (default <code className="text-slate-400">G-72275PNKR6</code>)</p>
          </Card>

          <Card title="PostHog">
            <p className="text-sm text-slate-300 leading-relaxed">
              Per-user behavior, funnels, retention, session replay, feature flags. <br />
              Identify by email after form submit (<code className="text-emerald-400 text-xs">posthog.identify(email, …)</code>). Best for <em>“did the people who downloaded the PDF come back?”</em>
            </p>
            <p className="text-xs text-slate-500 mt-3">Env: <code className="text-slate-400">NEXT_PUBLIC_POSTHOG_KEY</code>, <code className="text-slate-400">NEXT_PUBLIC_POSTHOG_HOST</code></p>
          </Card>

          <Card title="Vercel Analytics">
            <p className="text-sm text-slate-300 leading-relaxed">
              Real-user Web Vitals (LCP / CLS / INP) and visitor counts per route. <br />
              Best for <em>“is /foreman slow on mobile?”</em> Auto-mounted via <code className="text-slate-400 text-xs">@vercel/analytics</code>.
            </p>
            <p className="text-xs text-slate-500 mt-3">Env: none — enabled per-project in the Vercel dashboard.</p>
          </Card>

          <Card title="Internal DB (Neon)">
            <p className="text-sm text-slate-300 leading-relaxed">
              Authoritative lead capture. Form submits, PDF downloads, contact messages all land in <code className="text-slate-400 text-xs">marketing_leads</code> + <code className="text-slate-400 text-xs">lead_events</code>. <br />
              Use the <Link href="/admin/leads" className="text-cyan-400 hover:text-cyan-300">Leads dashboard</Link> for everything email-shaped.
            </p>
            <p className="text-xs text-slate-500 mt-3">Env: <code className="text-slate-400">MARKETING_DATABASE_URL</code> (pooled), <code className="text-slate-400">MARKETING_DIRECT_URL</code> (migrations only)</p>
          </Card>
        </div>
      </section>

      <footer className="text-xs text-slate-600 border-t border-slate-900 pt-4">
        Admin Basic-Auth credentials live in env vars <code className="text-slate-500">ADMIN_USERNAME</code> + <code className="text-slate-500">ADMIN_PASSWORD</code> (see <code className="text-slate-500">src/middleware.ts</code>).
      </footer>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UI primitives
// ─────────────────────────────────────────────────────────────────────────────

type ServiceStatus = "active" | "configured" | "missing";

function ServiceCard({
  name,
  icon,
  description,
  status,
  statusReason,
  href,
  cta,
  note,
  internal,
}: {
  name: string;
  icon: React.ReactNode;
  description: string;
  status: ServiceStatus;
  statusReason: string;
  href: string;
  cta: string;
  note?: string;
  internal?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-300 shrink-0">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-slate-100 truncate">{name}</h3>
            <StatusBadge status={status} />
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-3">{description}</p>
      <p className="text-xs text-slate-500 mb-4" title={statusReason}>{statusReason}</p>

      {note && (
        <p className="text-xs text-slate-600 italic mb-4 leading-relaxed">{note}</p>
      )}

      <div className="mt-auto">
        <Link
          href={href}
          {...(!internal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200 transition-colors text-sm font-semibold"
        >
          {cta} {internal ? "→" : "↗"}
        </Link>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: ServiceStatus }) {
  const cfg: Record<ServiceStatus, { dot: string; bg: string; text: string; label: string }> = {
    active:     { dot: "bg-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30", text: "text-emerald-300", label: "Active" },
    configured: { dot: "bg-amber-400",   bg: "bg-amber-500/10 border-amber-500/30",     text: "text-amber-300",   label: "Configured" },
    missing:    { dot: "bg-rose-400",    bg: "bg-rose-500/10 border-rose-500/30",       text: "text-rose-300",    label: "Missing" },
  };
  const c = cfg[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${c.bg} ${c.text} text-[10px] uppercase tracking-wider font-semibold mt-1`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h2 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wide">{title}</h2>
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: "emerald" | "cyan" | "violet" | "amber" | "rose" | "slate";
}) {
  const colorMap: Record<string, string> = {
    emerald: "text-emerald-400",
    cyan: "text-cyan-400",
    violet: "text-violet-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
    slate: "text-slate-400",
  };
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="text-xs uppercase tracking-wider text-slate-500 mb-1.5">{label}</div>
      <div className={`text-3xl font-bold ${colorMap[accent]}`}>{value.toLocaleString()}</div>
    </div>
  );
}

function SourceMiniTable({
  title,
  rows,
  emptyLabel,
}: {
  title: string;
  rows: SourceRow[];
  emptyLabel: string;
}) {
  const max = rows.length > 0 ? Math.max(...rows.map((r) => r.count)) : 0;
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h3 className="text-sm font-semibold text-slate-200 mb-3 uppercase tracking-wide">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-slate-500 py-2">{emptyLabel}</p>
      ) : (
        <ul className="space-y-2">
          {rows.map((r, i) => {
            const pct = max > 0 ? Math.max(4, Math.round((r.count / max) * 100)) : 0;
            return (
              <li key={`${r.name}-${i}`} className="text-sm">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <span className="text-slate-300 truncate font-mono text-xs" title={r.name}>{r.name}</span>
                  <span className="text-slate-400 tabular-nums shrink-0">{r.count.toLocaleString()}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500/70"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function EventBadge({ type }: { type: string }) {
  const map: Record<string, string> = {
    pdf_download: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    contact_form_submit: "bg-rose-500/10 border-rose-500/30 text-rose-300",
    agent_architecture_submit: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    agent_architecture_view: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  };
  const cls = map[type] || "bg-slate-700/30 border-slate-600/40 text-slate-300";
  return (
    <span className={`inline-block px-2 py-0.5 rounded-md border text-[11px] font-mono ${cls}`}>
      {type}
    </span>
  );
}

function fmtDate(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });
}

// ─────────────────────────────────────────────────────────────────────────────
// Inline SVG service marks (kept tiny — no extra deps)
// ─────────────────────────────────────────────────────────────────────────────

function GoogleAnalyticsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="10" width="4" height="11" rx="1.5" fill="#F9AB00" />
      <rect x="10" y="6" width="4" height="15" rx="1.5" fill="#E37400" />
      <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#F9AB00" />
    </svg>
  );
}

function PostHogIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13.5V21h7.5L3 13.5z" fill="#1D4AFF" />
      <path d="M3 6v6l9 9h6L3 6z" fill="#1D4AFF" opacity="0.6" />
      <circle cx="6.5" cy="17.5" r="1.5" fill="#fff" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 24 22" fill="none" aria-hidden>
      <path d="M12 1L23 21H1L12 1Z" fill="#fff" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#34d399" strokeWidth="1.7" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#34d399" strokeWidth="1.7" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#34d399" strokeWidth="1.7" />
    </svg>
  );
}
