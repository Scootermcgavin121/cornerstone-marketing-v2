import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Download, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/data-export-backup.png";
const heroImageAlt =
  "Construction software data export and nightly backups in Cornerstone PM — CSV and JSON full database download, no vendor lock-in";

const blogSchema = buildBlogPostSchema({
  title: "Own Your Data: CSV/JSON Export and Nightly Backups in Construction Software",
  slug: "construction-software-data-export-backup-no-lock-in",
  description:
    "Most construction software holds your data hostage. Cornerstone PM offers one-click CSV/JSON exports and nightly auto-backups so your records are always yours.",
  datePublished: "2026-06-16",
});

export const metadata: Metadata = {
  title:
    "Own Your Data: CSV/JSON Export and Nightly Backups in Construction Software — Cornerstone PM™ Blog",
  description:
    "Most construction software holds your data hostage. Cornerstone PM offers one-click CSV/JSON exports and nightly auto-backups so your records are always yours.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-software-data-export-backup-no-lock-in",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "Does Cornerstone PM let me export all my data?",
    a: "Yes. Settings → Backups (Admin only) gives you a one-click full database export in either CSV or JSON. There is no export fee, no support ticket, and no waiting period. You can download a complete snapshot of your construction data — contacts, vendors, projects, communities, notes, and more — at any time.",
  },
  {
    q: "How does Cornerstone PM's nightly backup work?",
    a: "Cornerstone PM runs nightly auto-backups automatically, retaining the last 7 days of snapshots. You can also trigger a manual backup on demand from Settings → Backups. This means you have both a continuous safety net (nightly) and a self-serve recovery tool (manual) without any additional configuration.",
  },
  {
    q: "Why do most construction software platforms make data export difficult?",
    a: "Migration friction is a deliberate business strategy. When your data is hard to export, leaving is expensive — and expensive switches make unhappy customers stay paying. Platforms that charge for white-glove migration, require a support ticket to access CSV exports, or only output proprietary formats are explicitly using your data as a retention lever. It's not a technical limitation; it's a product decision made in the vendor's interest.",
  },
  {
    q: "What formats does Cornerstone PM export in?",
    a: "CSV and JSON. CSV is the universal format for importing into any other system, spreadsheet, or BI tool. JSON is useful for developers building custom integrations or migrating to a new platform programmatically. You choose at export time.",
  },
  {
    q: "How does data export connect to disaster recovery for home builders?",
    a: "Nightly backups mean that if something goes catastrophically wrong — accidental bulk delete, corrupted import, infrastructure failure — you have a restore point that is at most 24 hours old. The 7-day rolling window gives you enough lookback to catch problems that aren't noticed immediately. On-demand manual backups let you snapshot before any major data change, like a bulk import or a vendor pricing update.",
  },
  {
    q: "If I can export my data easily, doesn't that make it easier to leave Cornerstone PM?",
    a: "Yes, and that's the point. Cornerstone PM competes on product quality, not switching costs. If you can always leave cleanly, the relationship is honest: you stay because the platform delivers value, not because leaving is too painful. This is the same philosophy behind the AI migration wizard that gets you in for about a penny — easy in, easy out, no hostage-taking.",
  },
  {
    q: "What data is included in a full database export from Cornerstone PM?",
    a: "The full export includes contacts (buyers, leads, prospects), vendor and trade records, project and community data, notes and activity history, custom fields, and system configuration data. Production-builder-specific structures like Designer Package assignments and floorplan option configurations are included in the JSON export. You own everything you've built in the platform.",
  },
];

const hostagePlaybook = [
  {
    icon: <Download className="w-4 h-4 text-red-400" />,
    title: "Gated CSV access",
    body: "Some platforms require a support ticket or a paid plan tier to access CSV exports. Others technically offer export but bury it in a workflow that only a support rep can complete. The technical capability exists; the access is controlled.",
  },
  {
    icon: <Shield className="w-4 h-4 text-amber-400" />,
    title: "Proprietary export formats",
    body: "Exporting in a platform-specific format that requires paid conversion tooling to use elsewhere is another form of manufactured friction. Your data is technically 'available' but practically unusable without the vendor's help.",
  },
  {
    icon: <Clock className="w-4 h-4 text-orange-400" />,
    title: "Export delays and queues",
    body: "Platforms that process export requests over 24–72 hours are not experiencing technical constraints — they're creating a cooling-off period. A builder who has to wait three days for their data has three days to reconsider leaving.",
  },
  {
    icon: <Shield className="w-4 h-4 text-slate-400" />,
    title: "No backup infrastructure",
    body: "Platforms with no self-serve backup make disaster recovery a support interaction. When something goes wrong — and in software, things go wrong — your recovery timeline is a ticket queue, not a restore button.",
  },
];

const exportCompare = [
  { feature: "One-click full database export", cornerstone: true, typical: false },
  { feature: "CSV export format", cornerstone: true, typical: "Sometimes (paid tier)" },
  { feature: "JSON export format", cornerstone: true, typical: false },
  { feature: "No export fee", cornerstone: true, typical: false },
  { feature: "No support ticket required", cornerstone: true, typical: false },
  { feature: "Nightly auto-backups", cornerstone: true, typical: false },
  { feature: "7-day rolling backup window", cornerstone: true, typical: false },
  { feature: "On-demand manual backups", cornerstone: true, typical: false },
];

export default function DataExportBackupPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* ImageObject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
              description: heroImageAlt,
              creditText: "Cornerstone PM™",
            }),
          }}
        />

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1024}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Platform
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Own Your Data: CSV/JSON Export and Nightly Backups in Construction Software
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 16, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Your construction data — contacts, vendors, project history, option configurations —
            belongs to you. Cornerstone PM gives every Admin a one-click full database export in
            CSV or JSON, plus nightly auto-backups retained for 7 days and on-demand manual
            backups. No export fee, no support ticket, no waiting period.
          </p>

          <p>
            Data portability is the quietest question in any software evaluation, and it&apos;s often
            the most important one: <em>can you actually leave if you need to?</em> Most
            construction software platforms answer that question with friction by design.{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              The full home builder project management software landscape
            </Link>{" "}
            has a data portability problem — and it&apos;s not accidental. Cornerstone PM was built
            on the opposite principle: your data is yours, always, and getting it out should be as
            easy as getting it in.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does construction software hold your data hostage?
          </h2>
          <p>
            The word &ldquo;hostage&rdquo; sounds harsh, but it describes the dynamic accurately. When
            switching costs are high, renewal rates stay high — even for customers who are
            dissatisfied. Data lock-in is the highest-leverage switching cost a software company
            can manufacture, because the alternative to staying isn&apos;t just &ldquo;try a new platform,&rdquo;
            it&apos;s &ldquo;try a new platform and somehow recreate five years of vendor pricing, project
            history, and buyer records.&rdquo;
          </p>
          <p>
            The tactics vary, but the goal is the same: make your data technically accessible but
            practically hard to use anywhere else.
          </p>

          <div className="not-prose space-y-4 my-6">
            {hostagePlaybook.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM handle data export and backup?
          </h2>
          <p>
            Settings → Backups (Admin only). That&apos;s the whole path. From there, any Admin can:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Download a full database export</strong> in CSV or
              JSON — one click, no waiting, no fee
            </li>
            <li>
              <strong className="text-white">Trigger a manual backup on demand</strong> before
              any major data operation (import, bulk update, pricing change)
            </li>
            <li>
              <strong className="text-white">Access nightly auto-backups</strong> retained on a
              7-day rolling window for disaster recovery
            </li>
          </ul>

          <p>
            The export includes everything: contacts and buyers, leads and prospects, vendor and
            trade records, project and community data, notes and activity history, custom fields,
            and system configuration. In JSON format, production-builder-specific structures
            including option configurations are included — you own the intellectual property you
            built in the platform.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white">
                Data portability: Cornerstone PM vs. typical construction software
              </h3>
            </div>
            {exportCompare.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300 col-span-1">{row.feature}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.cornerstone === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {typeof row.typical === "string" ? (
                    <span className="text-xs text-amber-400">{row.typical}</span>
                  ) : row.typical === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 text-xs font-medium text-slate-500 uppercase tracking-wide bg-slate-900/60 border-t border-slate-800">
              <div className="px-5 py-3">Feature</div>
              <div className="px-5 py-3 text-center">Cornerstone PM</div>
              <div className="px-5 py-3 text-center">Typical platform</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Data portability as disaster recovery — not just anti-lock-in
          </h2>
          <p>
            The export and backup system solves two separate problems that builders often conflate
            until they need them:
          </p>
          <p>
            <strong className="text-white">Anti-lock-in:</strong> The ability to leave cleanly
            at any time means the vendor relationship is honest. You stay because the platform
            delivers value, not because leaving is too painful. This is the same philosophy behind{" "}
            <Link
              href="/blog/hidden-cost-switching-construction-software-migration"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              the AI CRM migration wizard
            </Link>{" "}
            — easy to come in, easy to get out, no hostage-taking.
          </p>
          <p>
            <strong className="text-white">Disaster recovery:</strong> Nightly backups with a
            7-day rolling window mean that if something goes wrong — an accidental bulk delete, a
            corrupted import, an infrastructure failure — your restore point is at most 24 hours
            old. On-demand manual backups let you snapshot before any operation that carries risk:
            a large vendor pricing update, a full option re-import, a team member experiment gone
            sideways.
          </p>
          <p>
            Most small and mid-size builders don&apos;t have a dedicated IT team managing database
            backups. A built-in, automatic backup system that requires zero configuration is not
            a luxury feature — it&apos;s risk management that should come standard.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What &ldquo;your data is always yours&rdquo; actually means in practice
          </h2>
          <p>
            Let&apos;s be concrete. You&apos;re a 75-home/year production builder. You&apos;ve been on
            Cornerstone PM for two years. Your vendor pricing database has 400+ line items across
            18 trade categories. Your design center has 64 Designer Packages across 7 categories,
            configured for three active communities.
          </p>
          <p>
            If you decide tomorrow that you want to leave — for any reason — you go to Settings →
            Backups, click Download, choose JSON, and within seconds you have a complete snapshot
            of every record in your account. No email to support. No waiting for an export queue
            to process. No fee charged. Your vendor pricing, your community data, your buyer
            history: in a structured format you can read, migrate, archive, or hand to a developer.
          </p>
          <p>
            That&apos;s what data ownership means in practice. Not a legal statement in a terms of
            service — an actual button in the actual interface, available to every Admin, every day.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How data portability fits the Cornerstone PM philosophy
          </h2>
          <p>
            Cornerstone PM&apos;s approach to data export is the same approach it takes to migration
            and pricing: remove the friction that platforms use as leverage and compete on product
            quality instead.
          </p>
          <p>
            The{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full production home builder platform
            </Link>{" "}
            — with a design center built around 64 curated Designer Packages, per-floorplan option
            pricing reused across plan repeats,{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            with 396+ construction skills and per-user memory, and AI-powered Blueprint takeoff
            that extracts 130+ material scopes from a PDF in under 60 seconds — is the reason
            builders stay. Not locked-down data. Not switching costs. Not friction.
          </p>
          <p>
            The export button is there because it should be there. And because the product is good
            enough that it doesn&apos;t need to hold your data to keep you around.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Construction software that competes on quality, not lock-in
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM gives every Admin one-click CSV/JSON exports, nightly backups, and
              the same no-friction philosophy on the way in — AI CRM migration for about a penny.
              Your data is always yours.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="Construction Software Data Export: Common Questions"
        subtitle="What builders ask about data portability, backups, and lock-in — and the honest answers."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
