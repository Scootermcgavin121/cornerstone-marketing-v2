import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, ArrowRight, Database, Zap, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/crm-migration-wizard.png";
const heroImageAlt =
  "AI construction software migration wizard importing data from Buildertrend and JobTread into Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title: "Switching Construction Software Without the Migration Tax",
  slug: "crm-migration-wizard-switch-construction-software",
  description:
    "Migration is the #1 reason builders stay locked in. Cornerstone's AI migration wizard imports from Buildertrend, JobTread, CoConstruct, or any CSV for about a penny.",
  datePublished: "2026-06-05",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Buildertrend, JobTread, or CoConstruct to Cornerstone PM",
  description:
    "Use Cornerstone PM's AI migration wizard to import your contacts, projects, vendors, and history from any construction software platform in minutes.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Export your data from the old platform",
      text: "In Buildertrend, JobTread, CoConstruct, or Procore, navigate to Settings → Export and download a full CSV or Excel export. For platforms without a native export, ask support for a data extract.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Open the Migration Wizard in Cornerstone PM",
      text: "In Cornerstone PM, go to Settings → Data Migration. Select your source platform from the dropdown (Buildertrend, JobTread, CoConstruct, Procore) or choose 'CSV / Excel' for custom exports.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Let the AI auto-detect your column mapping",
      text: "Upload your export file. The AI reads your headers and data patterns and auto-maps columns to Cornerstone PM fields. Review the mapping for any overrides — the wizard flags low-confidence matches for manual review.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Run a dry-run import and verify",
      text: "Click 'Preview Import' to run a dry-run that shows counts of records to be created without writing anything. Verify contacts, vendors, projects, and notes look correct.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Confirm and run the live import",
      text: "Click 'Import Now'. The wizard processes your records in the background. For most builder datasets, this takes under 60 seconds. You receive a summary of records created, skipped (duplicates), and any errors.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Verify your data and archive the old export",
      text: "Browse Contacts, Vendors, and Projects in Cornerstone PM to spot-check imported records. Archive the original export files to secure storage as a backup. Your migration is complete.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Switching Construction Software Without the Migration Tax — Cornerstone PM™ Blog",
  description:
    "Migration is the #1 reason builders stay locked in. Cornerstone's AI migration wizard imports from Buildertrend, JobTread, CoConstruct, or any CSV for about a penny.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/crm-migration-wizard-switch-construction-software",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
          height: 859,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "How long does it take to migrate from Buildertrend to Cornerstone PM?",
    a: "Most builder datasets migrate in under five minutes of active work: export your data from Buildertrend (a few clicks), upload to Cornerstone PM's migration wizard, review the AI's column mapping, and confirm. The actual import runs in the background in under 60 seconds for typical datasets. Total elapsed time for a 500-contact, 200-project Buildertrend database is usually under 10 minutes.",
  },
  {
    q: "What platforms does the Cornerstone PM migration wizard support?",
    a: "The wizard has native detection for Buildertrend, JobTread, CoConstruct, and Procore — it auto-recognizes the export format and pre-maps columns. For any other platform, select 'CSV / Excel' and the AI reads your headers and data patterns to build a mapping. If the source platform can export to CSV or Excel, the wizard can handle it.",
  },
  {
    q: "What data gets migrated?",
    a: "The migration wizard imports contacts (buyers, prospects, vendors), projects (homes, communities, lots), notes and history, vendor records, and custom field data where column mapping is available. Design center options, floorplan configurations, and scope items are production-builder-specific data structures that typically require a brief setup in Cornerstone PM after migration — those are your builder's intellectual property and are rarely exportable from competing platforms in a format that maps cleanly.",
  },
  {
    q: "How much does the migration cost?",
    a: "Cornerstone PM's AI migration wizard costs approximately $0.01 per migration — the AI API cost for reading and mapping your export file. There is no white-glove migration fee, no consulting engagement, no professional services invoice. That is by design: migration lock-in is the oldest trick in enterprise software, and we built the wizard specifically to remove it.",
  },
  {
    q: "Can I export my data from Cornerstone PM if I ever want to leave?",
    a: "Yes. Settings → Backups (Admin only) gives you a full database export in CSV or JSON at any time. Nightly auto-backups run for 7 days and manual backups are available on demand. Your data is yours — no hostage-taking, no export fees, no support ticket required.",
  },
  {
    q: "What if my construction software doesn't support data exports?",
    a: "Most platforms support CSV or Excel exports, even if the process is buried. If the platform genuinely has no export path, contact their support and request a data extract — GDPR and CCPA create legal obligations around data portability for platforms that handle personal data. Cornerstone PM's migration wizard accepts any well-structured CSV or Excel file, so even a manually assembled export will work.",
  },
  {
    q: "Do vendors need to be re-invited after migration?",
    a: "Vendor contact records are imported and available immediately in Cornerstone PM. Vendors do not need accounts in Cornerstone PM — the vendor portal is token-protected and no-login. If you use Cornerstone PM's bid request system, vendors receive email links to the portal automatically when you send a bid request. No re-registration required.",
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Export from your old platform",
    desc: "Buildertrend, JobTread, CoConstruct, Procore, or any CSV/Excel. Most exports live under Settings → Export.",
    color: "emerald",
  },
  {
    step: "02",
    title: "Open the Migration Wizard",
    desc: "Settings → Data Migration in Cornerstone PM. Select your source platform from the dropdown.",
    color: "cyan",
  },
  {
    step: "03",
    title: "AI auto-maps your columns",
    desc: "Upload your file. The AI reads headers and data patterns, pre-maps fields, and flags low-confidence matches for your review.",
    color: "violet",
  },
  {
    step: "04",
    title: "Preview, confirm, done",
    desc: "Run a dry-run to verify record counts, then click Import Now. Background processing completes in under 60 seconds.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

const stepNumMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

export default function CrmMigrationWizardPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
          height={859}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Platform
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Switching Construction Software Without the Migration Tax
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 5, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Migration is the #1 reason builders stay on software they hate. Cornerstone PM&apos;s
            AI migration wizard imports your contacts, vendors, and project history from
            Buildertrend, JobTread, CoConstruct, or any CSV for roughly $0.01 — and the whole
            process takes under ten minutes.
          </p>

          <p>
            The construction software market relies on switching costs. Platforms charge white-glove
            migration fees, lock data in proprietary formats, and make export deliberately painful —
            not because migration is hard, but because friction keeps paying customers from leaving.
            Cornerstone PM was built on the opposite premise. Read more about the full platform
            on the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview page — this post covers the migration story specifically.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why is migration the biggest hidden switching cost in construction software?
          </h2>
          <p>
            When a builder evaluates new software, they compare feature lists and monthly pricing.
            What rarely shows up in the comparison spreadsheet is the migration cost: the time to
            export, the consultant to map fields, the weeks of parallel-running two systems, and the
            risk that historical data arrives garbled or incomplete.
          </p>
          <p>
            For a typical 50-home/year builder running Buildertrend, that can mean:
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              { label: "Data export prep (internal staff time)", value: "4–8 hours" },
              { label: "Migration consultant (if platform requires one)", value: "$2,000–$8,000" },
              { label: "Parallel-running old + new platform", value: "4–12 weeks" },
              { label: "Staff re-training and productivity dip", value: "2–4 weeks" },
              { label: "Risk of incomplete or garbled history", value: "Unquantified" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3.5 text-sm"
              >
                <span className="text-slate-300">{row.label}</span>
                <span className="text-amber-400 font-semibold shrink-0 ml-4">{row.value}</span>
              </div>
            ))}
          </div>

          <p>
            That calculus keeps builders locked in. Not because the new platform is inferior — but
            because the cost and risk of the move looks larger than the pain of staying. Construction
            software vendors know this and exploit it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone PM&apos;s AI migration wizard works
          </h2>
          <p>
            The migration wizard uses AI to do the part that&apos;s traditionally manual: reading your
            export file, recognizing column semantics, and mapping your data to Cornerstone PM&apos;s
            fields. For the four most common source platforms — Buildertrend, JobTread, CoConstruct,
            and Procore — the wizard already knows the export format and pre-populates the field
            mapping before you see the screen.
          </p>
          <p>
            For any other platform, upload a CSV or Excel file and the AI reads your headers and data
            patterns, builds a mapping, and flags low-confidence matches for manual review. This
            eliminates the consultant. The AI does the column-mapping work in seconds; you spend five
            minutes reviewing it.
          </p>

          {/* HowTo steps */}
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {migrationSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className={`text-3xl font-black mb-2 ${stepNumMap[s.color]}`}>{s.step}</div>
                <h3 className="font-bold text-white mb-1.5 text-base">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p>
            The actual import runs in the background. For a typical builder dataset — 500 contacts,
            200 project records, 80 vendor records, notes history — the background job completes in
            under 60 seconds. You receive a summary: records created, records skipped (duplicates
            detected by the AI), and any errors that need attention.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What data migrates — and what needs a quick setup afterward
          </h2>
          <p>
            The migration wizard handles the portable, structured data: contacts (buyers, prospects,
            vendors), project and community records, notes and activity history, vendor information,
            and custom fields where your export includes the data.
          </p>
          <p>
            Production-builder-specific structures — floorplan configurations, design center option
            classes, Designer Package assignments, per-scope vendor pricing — are your intellectual
            property and live in a format specific to each platform. Those aren&apos;t typically
            exportable in a form that maps to another platform&apos;s data model. Setting them up in
            Cornerstone PM is a one-time configuration task, not a migration: you define your
            floorplans and options once, and they price and replicate across every home of that plan
            automatically.
          </p>
          <p>
            The{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            is worth reviewing before you start — Cornerstone PM&apos;s vendor and scope structure is
            different from Buildertrend&apos;s job-level model, and a brief orientation saves time during
            setup.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The $0.01 migration: why it costs almost nothing
          </h2>
          <p>
            The cost of Cornerstone PM&apos;s AI migration is the AI API inference cost: roughly $0.01
            per import run. That&apos;s the cost of the AI reading your CSV file and building a column
            mapping. There is no professional services fee, no white-glove migration package, no
            consulting engagement, and no minimum spend.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900/60 text-xs font-medium text-slate-400 uppercase tracking-wide">
              <div className="px-5 py-3.5">Platform</div>
              <div className="px-5 py-3.5 text-center">Migration cost</div>
              <div className="px-5 py-3.5 text-center">Timeline</div>
            </div>
            {[
              { platform: "NEWSTAR", cost: "$25k–$100k+", timeline: "3–12 months", bad: true },
              { platform: "BuildPro", cost: "$10k–$40k", timeline: "2–6 months", bad: true },
              { platform: "Buildertrend / JobTread", cost: "$0–$5k", timeline: "1–4 weeks", bad: false },
              { platform: "Cornerstone PM", cost: "~$0.01", timeline: "< 10 minutes", bad: false, highlight: true },
            ].map((row) => (
              <div
                key={row.platform}
                className={`grid grid-cols-3 border-b border-slate-800/60 text-sm ${row.highlight ? "bg-emerald-950/20" : ""}`}
              >
                <div className={`px-5 py-3.5 font-medium ${row.highlight ? "text-emerald-400" : "text-slate-300"}`}>
                  {row.platform}
                </div>
                <div className={`px-5 py-3.5 text-center ${row.bad ? "text-red-400" : row.highlight ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                  {row.cost}
                </div>
                <div className={`px-5 py-3.5 text-center ${row.highlight ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                  {row.timeline}
                </div>
              </div>
            ))}
          </div>

          <p>
            The migration cost gap matters most for builders looking at enterprise platforms. NEWSTAR
            and BuildPro typically require implementation budgets of $25,000 to $100,000+ before
            your first user logs in — most of that is migration and configuration consulting.
            Cornerstone PM has no implementation fee and no migration fee. The total cost to switch
            is your time to review the AI&apos;s column mapping.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Your data is always yours: backup and export
          </h2>
          <p>
            The same logic that makes migration in cheap also governs the exit door. Settings →
            Backups (Admin only) gives you a full database export in CSV or JSON at any time.
            Nightly auto-backups run for 7 days; manual backups are on-demand. The export is
            complete — not a summary, not a subset of records.
          </p>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                icon: <Database className="w-4 h-4 text-emerald-400" />,
                title: "Full database export — CSV or JSON",
                body: "Every record, every field, every note. Not a summary report — the actual data, in two formats that any developer or migration tool can read.",
              },
              {
                icon: <Shield className="w-4 h-4 text-cyan-400" />,
                title: "Nightly auto-backups, 7-day retention",
                body: "Backups run automatically every night. You have seven days of recovery points at all times, no configuration required.",
              },
              {
                icon: <Zap className="w-4 h-4 text-violet-400" />,
                title: "Manual backups on demand",
                body: "Export any time, as many times as you want. There is no export fee, no support ticket, no waiting period.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            “Your data is always yours” is a phrase that should be table stakes in software — but
            it isn&apos;t. Platforms that make exit painful can do so because builders accepted that
            migration and data portability are hard. They&apos;re not. The difficulty is manufactured,
            and it&apos;s manufactured in the vendor&apos;s interest.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What to export, what to verify, and what to skip
          </h2>
          <p>
            If you&apos;re planning a migration to Cornerstone PM from Buildertrend or JobTread, here&apos;s
            a practical checklist of what to export and what to verify post-import:
          </p>

          <div className="not-prose space-y-2 my-6">
            {[
              { label: "All contacts (buyers, leads, vendors, subs)", check: true },
              { label: "Project/community/lot records", check: true },
              { label: "Notes and activity history", check: true },
              { label: "Vendor contact details and trade categories", check: true },
              { label: "Design option selections (manual setup recommended)", check: false },
              { label: "Custom schedule templates (rebuild in Cornerstone's scheduler)", check: false },
              { label: "Historical financial reports (archive as PDFs)", check: false },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3.5 text-sm"
              >
                <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${row.check ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-500"}`}>
                  {row.check ? <Check className="w-3 h-3" /> : <span className="text-xs">–</span>}
                </div>
                <span className={row.check ? "text-slate-300" : "text-slate-500"}>{row.label}</span>
                {!row.check && (
                  <span className="ml-auto text-xs text-slate-600 shrink-0">Not via wizard</span>
                )}
              </div>
            ))}
          </div>

          <p>
            Design option selections and custom schedules are worth rebuilding from scratch in
            Cornerstone PM because the data model is meaningfully different — a one-time investment
            that gives you production-builder abstractions (floorplan-level options, plan repeats,
            Designer Package auto-locking, cascade scheduling) that don&apos;t exist in Buildertrend or
            JobTread. The CRM and vendor data is the part that&apos;s painful to recreate manually; the
            wizard handles that automatically.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Migration is not the end of the story
          </h2>
          <p>
            Switching software because migration is easy isn&apos;t a good enough reason on its own.
            The better question is what you get after the migration is done.
          </p>
          <p>
            Cornerstone PM is built specifically for production home builders — the segment that
            Buildertrend, JobTread, and CoConstruct were not designed for. The platform includes a
            full production design center with 64 curated Designer Packages, per-floorplan options
            reused across plan repeats, AI-powered material takeoff that extracts 130+ scopes from a
            floor plan PDF in under 60 seconds, and{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            — a construction agent with 396+ skills, per-user memory, and a company-wide knowledge
            base that gets smarter over time.
          </p>
          <p>
            The migration wizard removes the lock-in friction. What you find on the other side is
            a platform designed for the way production builders actually work — not adapted from a
            custom-builder tool or a generic project management product.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to switch — without the migration tax?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM imports your Buildertrend, JobTread, CoConstruct, or CSV data for
              about a penny. No consultant, no fee, no hostage-taking. Your data is yours
              going in and going out.
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
        title="Construction Software Migration: Common Questions"
        subtitle="What builders ask before switching platforms — and the honest answers."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
