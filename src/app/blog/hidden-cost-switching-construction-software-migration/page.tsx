import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle, Clock, DollarSign } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/switching-cost-migration.png";
const heroImageAlt =
  "Hidden cost of switching construction software — Cornerstone PM AI CRM migration wizard importing from Buildertrend and JobTread";

const blogSchema = buildBlogPostSchema({
  title: "The Hidden Cost of Switching Construction Software (and How to Kill It)",
  slug: "hidden-cost-switching-construction-software-migration",
  description:
    "Migration is the #1 reason builders stay locked into the wrong software. Cornerstone's AI CRM Migration Wizard imports from Buildertrend, JobTread, and more for ~$0.01.",
  datePublished: "2026-06-14",
});

export const metadata: Metadata = {
  title:
    "The Hidden Cost of Switching Construction Software (and How to Kill It) — Cornerstone PM™ Blog",
  description:
    "Migration is the #1 reason builders stay locked into the wrong software. Cornerstone's AI CRM Migration Wizard imports from Buildertrend, JobTread, and more for ~$0.01.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/hidden-cost-switching-construction-software-migration",
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
    q: "What are the real hidden costs of switching construction software?",
    a: "The visible cost is the new subscription. The invisible costs are: data export labor (4–8 staff hours), a migration consultant if your platform requires one ($2,000–$8,000), weeks of running two systems in parallel, a productivity dip during staff retraining, and the risk that historical data arrives incomplete or garbled. For a 50-home/year builder, total switching friction can easily reach $10,000–$20,000 in absorbed labor and downtime — even before you write a check to anyone.",
  },
  {
    q: "How does Cornerstone PM's migration wizard eliminate migration costs?",
    a: "Cornerstone PM's AI migration wizard auto-detects the source platform (Buildertrend, JobTread, CoConstruct, Procore) and maps your column headers to Cornerstone PM fields automatically. You upload your export, review the AI's mapping for any low-confidence matches, run a dry-run to verify record counts, and confirm. The actual import completes in under 60 seconds for a typical builder dataset. The AI inference cost is roughly $0.01 per migration. There is no consultant, no professional services fee, and no implementation charge.",
  },
  {
    q: "Why do construction software platforms make migration so painful?",
    a: "Migration friction is a deliberate business strategy, not a technical limitation. Platforms invest heavily in making data export inconvenient, requiring proprietary formats, charging for CSV access, and offering 'white-glove migration' as a revenue line. When switching costs are high, renewal rates stay high — even for customers who are dissatisfied. The cost of the migration is real money in the vendor's pocket in the form of retained subscriptions.",
  },
  {
    q: "What data does the Cornerstone PM migration wizard import?",
    a: "The wizard imports contacts (buyers, prospects, vendors), project and community records, notes and activity history, vendor records, and custom field data where columns can be mapped. Production-builder-specific structures — floorplan configurations, design center option classes, Designer Package assignments — are your intellectual property and are rarely exportable from other platforms in a format that maps cleanly. Setting those up in Cornerstone PM is a one-time configuration, not a migration.",
  },
  {
    q: "Can I export my data from Cornerstone PM if I ever want to leave?",
    a: "Yes, always. Settings → Backups (Admin only) gives you a full database export in CSV or JSON at any time. Nightly auto-backups run for 7 days; manual backups are on-demand. There is no export fee, no support ticket required, and no waiting period. Data portability is a design principle, not an afterthought.",
  },
  {
    q: "How long does it actually take to switch to Cornerstone PM?",
    a: "For the CRM and vendor data: under 10 minutes active work (export from old platform, upload to wizard, review mapping, confirm import). For getting your production builder setup live — floorplans, option classes, Designer Packages, vendor bid templates — most builders complete initial configuration in one to two focused days. Cornerstone PM has no implementation timeline measured in months and no consulting prerequisite to go live.",
  },
  {
    q: "Is Cornerstone PM the right tool after migration — or just an easier place to land?",
    a: "Cornerstone PM is built specifically for production home builders: the segment that Buildertrend, JobTread, and CoConstruct were not designed for. After migration you get a full production design center with 64 curated Designer Packages, per-floorplan options reused across plan repeats, AI-powered material takeoff that extracts 130+ scopes from a PDF in under 60 seconds, and Foreman AI — a construction agent with 396+ skills, per-user memory, and a company-wide knowledge base. The migration wizard removes the lock-in wall. What's behind it is a platform built for how production builders actually work.",
  },
];

const hiddenCostRows = [
  { label: "Data export prep (internal staff time)", cost: "4–8 hours", flag: true },
  { label: "Migration consultant (enterprise platforms)", cost: "$2,000–$8,000", flag: true },
  { label: "Parallel-running old + new systems", cost: "4–12 weeks", flag: true },
  { label: "Staff retraining productivity dip", cost: "2–4 weeks", flag: true },
  { label: "Risk of incomplete or garbled historical data", cost: "Unquantified", flag: true },
  { label: "Cornerstone PM AI migration wizard", cost: "~$0.01", flag: false },
];

const lockInTactics = [
  {
    icon: <DollarSign className="w-4 h-4 text-amber-400" />,
    title: "White-glove migration fees",
    body: "Enterprise platforms like NEWSTAR and BuildPro bill $25k–$100k+ before your first user logs in — most of that is migration consulting. Custom-builder tools like Buildertrend and JobTread are cheaper but still charge for dedicated migration support.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
    title: "Proprietary data formats",
    body: "Keeping data in formats that other platforms can't read cleanly means exports require transformation work. The more complex the schema, the more transformation work — and the more transformation work, the more reason to charge you for it.",
  },
  {
    icon: <Clock className="w-4 h-4 text-orange-400" />,
    title: "Artificially long timelines",
    body: "A 3–12 month implementation isn't purely technical complexity — it's a contractual commitment window. The longer the onboarding, the longer you're paying before you see value, and the harder it is to reverse the decision.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-slate-400" />,
    title: "No self-serve export path",
    body: "Platforms that require a support ticket to download your own data are not protecting your data — they're controlling your access to it. GDPR and CCPA create legal obligations around data portability, but enforcement is slow and builders rarely pursue it.",
  },
];

export default function HiddenCostSwitchingPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Platform
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            The Hidden Cost of Switching Construction Software (and How to Kill It)
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 14, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The real cost of switching construction software isn&apos;t the new subscription — it&apos;s
            the migration: weeks of parallel systems, a consultant to map your data, and the
            nagging fear that your history arrives broken. Cornerstone PM&apos;s AI migration wizard
            collapses that entire process into ten minutes and about a penny.
          </p>

          <p>
            If you&apos;re evaluating construction software alternatives, you already know the product
            comparison is easy. Feature tables, pricing tiers, demo calls. What doesn&apos;t show up
            in the spreadsheet is the switching cost — the real friction that keeps builders paying
            for software they&apos;ve outgrown.{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              The full home builder project management software landscape
            </Link>{" "}
            is worth understanding, but this post is specifically about the switching cost — why
            it&apos;s high, why it&apos;s manufactured, and how Cornerstone PM eliminates it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are the actual hidden costs of switching construction software?
          </h2>
          <p>
            Walk through the real line items a 50-home/year builder faces when switching platforms:
          </p>

          <div className="not-prose space-y-3 my-6">
            {hiddenCostRows.map((row) => (
              <div
                key={row.label}
                className={`flex items-center justify-between rounded-xl border px-5 py-3.5 text-sm ${
                  row.flag
                    ? "border-slate-800 bg-slate-900/40"
                    : "border-emerald-800/40 bg-emerald-950/20"
                }`}
              >
                <span className={row.flag ? "text-slate-300" : "text-emerald-300 font-semibold"}>
                  {row.label}
                </span>
                <span
                  className={`font-semibold shrink-0 ml-4 ${
                    row.flag ? "text-amber-400" : "text-emerald-400"
                  }`}
                >
                  {row.cost}
                </span>
              </div>
            ))}
          </div>

          <p>
            The subscription delta between platforms — say, $200/month — looks manageable. But
            add 40 hours of internal staff time at $60/hour, a $4,000 migration consultant, and
            three weeks of reduced productivity during the transition, and a “simple” platform
            switch costs $10,000–$20,000 in absorbed costs before any explicit fee is paid.
          </p>
          <p>
            That&apos;s the number that freezes the decision. Not the monthly price. The one-time
            switching cost is the lock-in.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why migration friction is manufactured, not inevitable
          </h2>
          <p>
            Migration is technically straightforward. Contacts, project records, vendor data, notes
            — these are structured data that any competent developer can export as CSV and import
            into a new system. The difficulty is manufactured, and it&apos;s manufactured in the vendor&apos;s
            interest.
          </p>

          <div className="not-prose space-y-4 my-6">
            {lockInTactics.map((item, i) => (
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

          <p>
            The business logic is simple: a builder who is unhappy but can&apos;t afford to switch
            is still a paying customer. Every dollar of switching friction is a dollar of retained
            revenue. Platforms that have mastered this understand that making the exit painful is
            worth far more than making the product better.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone PM kills the migration tax
          </h2>
          <p>
            Cornerstone PM&apos;s AI migration wizard was built on the opposite premise: migration should
            be free, fast, and self-serve. For the four most common source platforms —
            Buildertrend, JobTread, CoConstruct, and Procore — the wizard already knows the export
            format and pre-populates the field mapping before you see the screen.
          </p>
          <p>
            For any other platform, select “CSV / Excel” and the AI reads your headers and data
            patterns, builds the mapping, and flags low-confidence matches for your review. The
            manual review step typically takes under five minutes. Then: dry-run to verify record
            counts, confirm, done. Background import completes in under 60 seconds for a typical
            builder dataset.
          </p>
          <p>
            The total AI inference cost is roughly $0.01. There is no consultant, no implementation
            fee, and no migration package. The full walkthrough lives in the{" "}
            <Link
              href="/blog/crm-migration-wizard-switch-construction-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              CRM migration wizard deep-dive
            </Link>
            , including the step-by-step flow and what to verify after import.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What migrates — and what to set up fresh
          </h2>
          <p>
            The migration wizard handles the portable, structured data: contacts (buyers, prospects,
            vendors), project and community records, notes and activity history, vendor information,
            and custom fields where your export includes the data. This is the data that&apos;s painful
            to recreate manually and impossible to ask someone to re-enter.
          </p>
          <p>
            Production-builder-specific structures — floorplan configurations, design center option
            classes, Designer Package assignments, per-scope vendor pricing — live in a data model
            that&apos;s unique to Cornerstone PM. Those don&apos;t migrate from Buildertrend or JobTread
            because those platforms don&apos;t have equivalent structures to export. Setting them up is
            a one-time configuration task, not a migration: you define your floorplans and options
            once, and they price and replicate automatically across every home of that plan in every
            community.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 border-b border-slate-800 bg-slate-900/60 text-xs font-medium text-slate-400 uppercase tracking-wide">
              <div className="px-5 py-3.5">Data type</div>
              <div className="px-5 py-3.5 text-center">Migration wizard</div>
              <div className="px-5 py-3.5 text-center">Quick setup</div>
            </div>
            {[
              { type: "Contacts, buyers, leads", wizard: true, setup: false },
              { type: "Vendors & trade records", wizard: true, setup: false },
              { type: "Projects, communities, lots", wizard: true, setup: false },
              { type: "Notes & activity history", wizard: true, setup: false },
              { type: "Floorplans & option classes", wizard: false, setup: true },
              { type: "Designer Packages", wizard: false, setup: true },
              { type: "Vendor bid templates", wizard: false, setup: true },
            ].map((row) => (
              <div key={row.type} className="grid grid-cols-3 border-b border-slate-800/60 text-sm">
                <div className="px-5 py-3.5 text-slate-300">{row.type}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.wizard ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {row.setup ? (
                    <CheckCircle className="w-4 h-4 text-cyan-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Your data is always yours — on the way in and on the way out
          </h2>
          <p>
            The same philosophy that makes switching into Cornerstone PM cheap also governs the
            exit. Settings → Backups (Admin only) delivers a full database export in CSV or JSON
            at any time. Nightly auto-backups run for 7 days; manual backups are on demand. No
            export fee, no support ticket, no waiting period.
          </p>
          <p>
            “Your data is always yours” should be table stakes in SaaS. In construction software,
            it still isn&apos;t. The platforms that make data export painful are explicitly betting that
            you&apos;ll stay because leaving is expensive. Cornerstone PM removes that bet entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            After the migration: what production builders find on the other side
          </h2>
          <p>
            Removing the migration tax is only worth it if the destination is the right platform.
            Cornerstone PM was built specifically for production home builders — the segment that
            Buildertrend, JobTread, and CoConstruct were not designed for.
          </p>
          <p>
            The full stack includes a production{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            with 64 curated Designer Packages, per-floorplan options reused across every home of
            that plan in every community, AI-powered material takeoff that extracts 130+ scopes
            from a floor plan PDF in under 60 seconds, and{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            — a construction agent with 396+ skills, per-user memory, and a company-wide knowledge
            base that gets smarter over time. The migration wizard removes the wall. What&apos;s behind
            it is a platform built for how production builders actually work.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to switch — without the migration tax?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM imports your contacts, vendors, and project history from Buildertrend,
              JobTread, CoConstruct, or any CSV for about a penny. No consultant, no fee, no
              hostage-taking.
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
        title="Switching Construction Software: Common Questions"
        subtitle="What builders ask before making the move — and the honest answers."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
