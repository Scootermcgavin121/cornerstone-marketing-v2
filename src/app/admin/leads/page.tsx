/**
 * /admin/leads — internal lead dashboard.
 *
 * Gated by HTTP Basic Auth in src/middleware.ts (matcher: /admin/*).
 * Renders as a server component pulling from MARKETING_DATABASE_URL.
 */
import Link from "next/link";
import { sql } from "@/lib/db/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Lead = {
  id: string;
  email: string;
  name: string | null;
  company: string | null;
  role: string | null;
  source_page: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  country: string | null;
  created_at: string;
  download_count: string;          // bigint comes back as text
  last_event_at: string | null;
};

type Stats = {
  total_leads: number;
  leads_last_7d: number;
  leads_today: number;
  total_downloads: number;
  total_events: number;
  total_contact_msgs: number;
};

type ContactMessage = {
  id: string;
  lead_id: string | null;
  name: string | null;
  email: string | null;
  company: string | null;
  message: string;
  utm_source: string | null;
  utm_campaign: string | null;
  created_at: string;
};

async function loadStats(): Promise<Stats> {
  const rows = (await sql`
    SELECT
      (SELECT COUNT(*) FROM marketing_leads)::int  AS total_leads,
      (SELECT COUNT(*) FROM marketing_leads WHERE created_at > now() - interval '7 days')::int AS leads_last_7d,
      (SELECT COUNT(*) FROM marketing_leads WHERE created_at::date = CURRENT_DATE)::int        AS leads_today,
      (SELECT COUNT(*) FROM lead_events WHERE event_type = 'pdf_download')::int AS total_downloads,
      (SELECT COUNT(*) FROM lead_events)::int      AS total_events,
      (SELECT COUNT(*) FROM lead_events WHERE event_type = 'contact_form_submit')::int AS total_contact_msgs
  `) as Stats[];
  return rows[0];
}

async function loadContactMessages(limit = 10): Promise<ContactMessage[]> {
  return (await sql`
    SELECT
      e.id,
      e.lead_id,
      l.name,
      l.email,
      l.company,
      COALESCE((e.metadata->>'message'), '') AS message,
      e.utm_source,
      e.utm_campaign,
      e.created_at
    FROM lead_events e
    LEFT JOIN marketing_leads l ON l.id = e.lead_id
    WHERE e.event_type = 'contact_form_submit'
    ORDER BY e.created_at DESC
    LIMIT ${limit}
  `) as ContactMessage[];
}

async function loadLeads(limit: number, offset: number): Promise<Lead[]> {
  return (await sql`
    SELECT
      l.id,
      l.email,
      l.name,
      l.company,
      l.role,
      l.source_page,
      l.utm_source,
      l.utm_medium,
      l.utm_campaign,
      l.utm_content,
      l.utm_term,
      l.referrer,
      l.country,
      l.created_at,
      COALESCE((SELECT COUNT(*) FROM lead_events e WHERE e.lead_id = l.id AND e.event_type = 'pdf_download'), 0) AS download_count,
      (SELECT MAX(created_at) FROM lead_events e WHERE e.lead_id = l.id) AS last_event_at
    FROM marketing_leads l
    ORDER BY l.created_at DESC
    LIMIT ${limit}
    OFFSET ${offset}
  `) as Lead[];
}

async function loadBySource(): Promise<{ source_page: string; count: number }[]> {
  return (await sql`
    SELECT source_page, COUNT(*)::int AS count
    FROM marketing_leads
    GROUP BY source_page
    ORDER BY count DESC
    LIMIT 10
  `) as { source_page: string; count: number }[];
}

async function loadByCampaign(): Promise<{ utm_campaign: string | null; utm_source: string | null; count: number }[]> {
  return (await sql`
    SELECT utm_campaign, utm_source, COUNT(*)::int AS count
    FROM marketing_leads
    WHERE utm_campaign IS NOT NULL OR utm_source IS NOT NULL
    GROUP BY utm_campaign, utm_source
    ORDER BY count DESC
    LIMIT 10
  `) as { utm_campaign: string | null; utm_source: string | null; count: number }[];
}

function fmtDate(s: string | null): string {
  if (!s) return "—";
  return new Date(s).toLocaleString("en-US", { dateStyle: "short", timeStyle: "short" });
}

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; limit?: string }>;
}) {
  const params = await searchParams;
  const limit = Math.min(parseInt(params.limit || "50", 10) || 50, 200);
  const page = Math.max(parseInt(params.page || "1", 10) || 1, 1);
  const offset = (page - 1) * limit;

  let stats: Stats | null = null;
  let leads: Lead[] = [];
  let bySource: { source_page: string; count: number }[] = [];
  let byCampaign: { utm_campaign: string | null; utm_source: string | null; count: number }[] = [];
  let contactMsgs: ContactMessage[] = [];
  let loadError: string | null = null;
  try {
    [stats, leads, bySource, byCampaign, contactMsgs] = await Promise.all([
      loadStats(),
      loadLeads(limit, offset),
      loadBySource(),
      loadByCampaign(),
      loadContactMessages(10),
    ]);
  } catch (err) {
    loadError = err instanceof Error ? err.message : String(err);
  }

  const totalPages = stats ? Math.max(1, Math.ceil(stats.total_leads / limit)) : 1;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Leads Dashboard</h1>
            <p className="text-xs text-slate-400 mt-0.5">cornerstonepm.ai · marketing_leads</p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="https://us.posthog.com/project/443686" target="_blank" className="text-cyan-400 hover:text-cyan-300">PostHog →</Link>
            <Link href="https://vercel.com/scottbuescher-4945s-projects/cornerstone-marketing-v2/analytics" target="_blank" className="text-cyan-400 hover:text-cyan-300">Vercel Analytics →</Link>
            <Link href="https://console.neon.tech/app/projects/cool-glade-60615342" target="_blank" className="text-cyan-400 hover:text-cyan-300">Neon →</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {loadError && (
          <div className="mb-6 rounded-xl border border-red-700/60 bg-red-950/40 p-4 text-sm text-red-200">
            <strong>DB error:</strong> {loadError}
          </div>
        )}

        {stats && (
          <section className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            <StatCard label="Total leads" value={stats.total_leads} accent="emerald" />
            <StatCard label="Last 7 days" value={stats.leads_last_7d} accent="cyan" />
            <StatCard label="Today" value={stats.leads_today} accent="violet" />
            <StatCard label="PDF downloads" value={stats.total_downloads} accent="amber" />
            <StatCard label="Contact msgs" value={stats.total_contact_msgs} accent="rose" />
            <StatCard label="Total events" value={stats.total_events} accent="slate" />
          </section>
        )}

        <section className="grid md:grid-cols-2 gap-4 mb-8">
          <Card title="Leads by source page">
            {bySource.length === 0 ? (
              <p className="text-sm text-slate-500">No leads yet.</p>
            ) : (
              <ul className="space-y-1.5">
                {bySource.map((r) => (
                  <li key={r.source_page} className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-mono">{r.source_page}</span>
                    <span className="text-emerald-400 font-semibold">{r.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <Card title="Top campaigns (utm_campaign · utm_source)">
            {byCampaign.length === 0 ? (
              <p className="text-sm text-slate-500">No UTM-tagged traffic yet. Add ?utm_source=… to your ad/post links.</p>
            ) : (
              <ul className="space-y-1.5">
                {byCampaign.map((r, i) => (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-mono">
                      {r.utm_campaign || "—"} · {r.utm_source || "—"}
                    </span>
                    <span className="text-emerald-400 font-semibold">{r.count}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </section>

        {contactMsgs.length > 0 && (
          <section className="mb-8">
            <Card title={`Recent contact-form messages (${contactMsgs.length})`}>
              <ul className="divide-y divide-slate-800/60 -my-2">
                {contactMsgs.map((m) => (
                  <li key={m.id} className="py-4 first:pt-2 last:pb-2">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-slate-100 font-semibold">{m.name || "—"}</span>
                          {m.email && (
                            <a href={`mailto:${m.email}?subject=Re: your message at cornerstonepm.ai`} className="text-cyan-400 hover:text-cyan-300 text-sm">
                              {m.email}
                            </a>
                          )}
                          {m.company && (
                            <span className="text-slate-400 text-sm">· {m.company}</span>
                          )}
                        </div>
                        {(m.utm_source || m.utm_campaign) && (
                          <div className="text-xs text-slate-500 mt-0.5 font-mono">
                            via {m.utm_source || "—"} / {m.utm_campaign || "—"}
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap">{fmtDate(m.created_at)}</span>
                    </div>
                    {m.message && (
                      <blockquote className="text-sm text-slate-300 leading-relaxed border-l-2 border-rose-500/40 pl-3 whitespace-pre-wrap break-words">
                        {m.message.length > 600 ? m.message.slice(0, 600) + "…" : m.message}
                      </blockquote>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        )}

        <Card title={`Recent leads · page ${page} of ${totalPages}`}>
          {leads.length === 0 ? (
            <p className="text-sm text-slate-500 py-4">No leads yet. As soon as someone submits the /agent-architecture form they'll show up here.</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm">
                <thead className="text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="text-left py-2 pr-3 font-semibold">When</th>
                    <th className="text-left py-2 pr-3 font-semibold">Name</th>
                    <th className="text-left py-2 pr-3 font-semibold">Email</th>
                    <th className="text-left py-2 pr-3 font-semibold">Company</th>
                    <th className="text-left py-2 pr-3 font-semibold">Role</th>
                    <th className="text-left py-2 pr-3 font-semibold">Source</th>
                    <th className="text-left py-2 pr-3 font-semibold">UTM</th>
                    <th className="text-right py-2 pl-3 font-semibold">DLs</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l) => (
                    <tr key={l.id} className="border-b border-slate-900 hover:bg-slate-900/30">
                      <td className="py-2.5 pr-3 text-slate-400 whitespace-nowrap text-xs">{fmtDate(l.created_at)}</td>
                      <td className="py-2.5 pr-3 text-slate-100 font-medium">{l.name || "—"}</td>
                      <td className="py-2.5 pr-3"><a href={`mailto:${l.email}`} className="text-cyan-400 hover:text-cyan-300">{l.email}</a></td>
                      <td className="py-2.5 pr-3 text-slate-200">{l.company || "—"}</td>
                      <td className="py-2.5 pr-3 text-slate-400">{l.role || "—"}</td>
                      <td className="py-2.5 pr-3 text-slate-400 font-mono text-xs">{l.source_page}</td>
                      <td className="py-2.5 pr-3 text-slate-500 text-xs">
                        {l.utm_campaign || l.utm_source ? (
                          <span>{l.utm_source || "—"} / {l.utm_campaign || "—"}</span>
                        ) : "—"}
                      </td>
                      <td className="py-2.5 pl-3 text-right text-emerald-400 font-semibold">{l.download_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {stats && stats.total_leads > limit && (
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">{stats.total_leads.toLocaleString()} leads total</span>
              <div className="flex gap-2">
                {page > 1 && (
                  <Link href={`/admin/leads?page=${page - 1}&limit=${limit}`} className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200">← Prev</Link>
                )}
                {page < totalPages && (
                  <Link href={`/admin/leads?page=${page + 1}&limit=${limit}`} className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200">Next →</Link>
                )}
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
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

function StatCard({ label, value, accent }: { label: string; value: number; accent: "emerald" | "cyan" | "violet" | "amber" | "rose" | "slate" }) {
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
