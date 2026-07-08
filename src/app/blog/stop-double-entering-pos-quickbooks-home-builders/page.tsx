import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/stop-double-entry-quickbooks.png";
const heroImageAlt =
  "Double entry QuickBooks construction — end manual PO and bill re-keying with Cornerstone one-way sync";

const blogSchema = buildBlogPostSchema({
  title: "Stop Double-Entering POs into QuickBooks: The Hidden Cost of Manual AP",
  slug: "stop-double-entering-pos-quickbooks-home-builders",
  description:
    "Re-keying every PO, bill, and vendor into QuickBooks burns hours and breeds errors. See the real cost of manual double-entry and how one-way sync ends it.",
  datePublished: "2026-07-08",
  mentionsProduct: {
    name: "Cornerstone PM QuickBooks Online Integration",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to End Manual PO Double-Entry into QuickBooks",
  description:
    "Replace manual re-keying of POs, bills, and vendors into QuickBooks with Cornerstone PM's one-way automatic sync — from connection setup through to batch-pay on payday.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your current manual AP re-entry points",
      text: "List every place your team copies data between systems: PO numbers typed into QBO manually, vendor records maintained in two places, bills keyed from paper invoices, CSV exports cleaned and re-imported. These are the friction points the sync eliminates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Connect Cornerstone PM to QuickBooks Online",
      text: "In Cornerstone PM, go to Settings → Integrations → QuickBooks Online. Connect your QBO account. Run the one-click Chart of Accounts setup — it reuses existing accounts by name and creates new construction-ready cost-code items without restructuring your books.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set your AP payment schedule",
      text: "In Cornerstone, configure your AP payment schedule: Net-X days, Weekly (any weekday), Monthly (Nth weekday), Bi-weekly, or Semi-monthly (two paydays per month, e.g. 1st and 15th). Due dates compute automatically from the invoice or bill date and carry into every QuickBooks Bill — no manual calculation.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Send a PO — it auto-posts to QuickBooks as a commitment",
      text: "Assign a task to a vendor or approve a PO in Cornerstone. The sent PO posts to QuickBooks Online automatically as a Purchase Order — a committed liability visible in your books immediately, with a structured memo containing community name, lot number, address, PO number, and cost code.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Mark the PO received — Bill auto-creates and PO closes",
      text: "When the work is complete, mark the PO received in Cornerstone. The matching Bill auto-creates in QuickBooks, linked to the original PO, which then closes automatically. No dangling POs, no duplicate entries. Payment always requires manual approval in QuickBooks — Cornerstone never auto-pays.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Batch-pay on payday in QuickBooks",
      text: "All bills due by your scheduled payday appear together in QuickBooks for a single manual approval run. No hunting across individual bills, no mental math on what's due. The human pay gate is always in QuickBooks — Cornerstone only creates and closes records, never initiates payment.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Stop Double-Entering POs into QuickBooks: The Hidden Cost of Manual AP — Cornerstone PM™ Blog",
  description:
    "Re-keying every PO, bill, and vendor into QuickBooks burns hours and breeds errors. See the real cost of manual double-entry and how one-way sync ends it.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/stop-double-entering-pos-quickbooks-home-builders",
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

const costItems = [
  {
    item: "Bookkeeper re-entry time",
    estimate: "4–8 hrs/week",
    note: "POs, bills, vendor records keyed into QBO by hand",
  },
  {
    item: "Transposition errors",
    estimate: "1–3 per week",
    note: "Wrong amounts, misattributed cost codes, duplicate vendors",
  },
  {
    item: "Month-end reconciliation",
    estimate: "4–10 hrs/month",
    note: "Chasing discrepancies between the two systems",
  },
  {
    item: "CSV cleanup",
    estimate: "1–3 hrs/export",
    note: "Reformatting exports before import into QBO",
  },
  {
    item: "Audit trail gaps",
    estimate: "Ongoing risk",
    note: "Manual entries with no link back to the originating PO",
  },
];

const comparisonRows = [
  { feature: "POs auto-post to QBO on approval", cornerstone: true, manual: false },
  { feature: "Bills auto-create on PO completion", cornerstone: true, manual: false },
  { feature: "Vendors sync without separate entry", cornerstone: true, manual: false },
  { feature: "Clean memo on every transaction", cornerstone: true, manual: false },
  { feature: "Cost code auto-attributed", cornerstone: true, manual: false },
  { feature: "Source of truth never splits", cornerstone: true, manual: false },
  { feature: "AP due dates compute automatically", cornerstone: true, manual: false },
  { feature: "Sync Events log with retry visibility", cornerstone: true, manual: false },
];

const faqItems: FAQItem[] = [
  {
    q: "How many hours per week does manual QBO double-entry cost a typical builder?",
    a: "Builders running 20–100 homes per year commonly spend 4–8 hours per week on manual AP data entry: re-keying PO numbers and vendor names, entering bills from paper invoices, cleaning CSV exports before import, and reconciling discrepancies at month-end. The exact cost depends on build volume and AP complexity, but the re-entry itself adds no value — it's pure overhead.",
  },
  {
    q: "Does Cornerstone sync data both ways with QuickBooks Online?",
    a: "No — Cornerstone syncs one direction only, pushing approved POs, change orders, bills, and vendors to QuickBooks. Changes made inside QuickBooks never overwrite Cornerstone. Cornerstone stays the source of truth for all job data. This is intentional: two-way sync creates a class of hard-to-detect bugs where a QBO edit silently corrupts the Cornerstone record it came from.",
  },
  {
    q: "What information appears in the QuickBooks transaction memo?",
    a: "Every synced PO, Bill, and Change Order carries a structured memo with the community name, lot number, street address, PO number, and cost code. Your bookkeeper can identify the exact home and trade from inside QuickBooks without logging into Cornerstone.",
  },
  {
    q: "Will connecting Cornerstone restructure my existing QuickBooks accounts?",
    a: "No. The one-click Chart of Accounts setup reuses existing accounts by name before creating new ones. If 'Framing Labor' already exists in your QBO books, Cornerstone maps to it. If an account doesn't exist yet, it creates one. No existing accounts are renamed or reorganized, and no transaction history is touched.",
  },
  {
    q: "Does Cornerstone auto-pay bills in QuickBooks?",
    a: "Never. Cornerstone creates Bills in QuickBooks when a PO is marked received, but payment always requires manual approval inside QuickBooks. The human pay gate is permanent and cannot be disabled — Cornerstone only creates and closes records, it never initiates payment on your behalf.",
  },
  {
    q: "What happens when a PO has a change order?",
    a: "Approved change orders sync to QuickBooks automatically as revised PO lines or Bills, attributed to the same Community (QBO Customer) and Home (QBO Project) as the original PO. The per-home P&L stays accurate without any manual adjustment in QuickBooks.",
  },
];

export default function StopDoubleEntryQuickBooksPage() {
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

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Stop Double-Entering POs into QuickBooks: The Hidden Cost of Manual AP
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 8, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Re-keying every PO, bill, and vendor from{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing workflow
            </Link>{" "}
            into QuickBooks by hand burns hours every week and introduces errors that compound at
            month-end. Cornerstone&apos;s one-way QuickBooks sync ends it — approved POs, change
            orders, bills, and vendors post automatically with no manual step and no CSV cleanup.
          </p>

          <p>
            Most production home builders run two parallel systems: a construction management
            platform for operations, and QuickBooks for the books. Every approved PO becomes
            a task on someone&apos;s list — re-key the vendor, re-key the amount, pick the right
            cost code, double-check the community attribution. On a busy week with 10–15 POs
            going through, that&apos;s an afternoon of bookkeeper time that produces nothing except
            a copy of data that already existed somewhere else.
          </p>

          <p>
            And it&apos;s not just time. Manual re-entry is where transposed digits, wrong cost
            codes, and misattributed communities live. A bill posted to the wrong lot doesn&apos;t
            announce itself — it quietly distorts per-home profitability until someone catches
            the discrepancy at month-end.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does manual double-entry actually cost?
          </h2>

          <p>
            Most builders underestimate it because the cost is distributed across many small
            tasks rather than one obvious line item. Mapped out, it looks like this:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="flex items-center gap-2 px-5 py-3 bg-slate-900/60 border-b border-slate-800">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Hidden Cost of Manual AP</span>
            </div>
            {costItems.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_1fr] border-b border-slate-800/60 text-sm items-center"
              >
                <div className="px-5 py-3.5 text-slate-200 font-medium">{row.item}</div>
                <div className="px-5 py-3.5">
                  <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold text-xs whitespace-nowrap">
                    <Clock className="w-3.5 h-3.5" />
                    {row.estimate}
                  </span>
                </div>
                <div className="hidden sm:block px-5 py-3.5 text-slate-500 text-xs">{row.note}</div>
              </div>
            ))}
          </div>

          <p>
            For a builder doing 50 homes per year, rough math puts the annual overhead north
            of 300 hours — not counting the margin erosion from errors that never get caught.
            None of that is productive work. It&apos;s the tax you pay for running two disconnected systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to end manual AP re-entry in 6 steps
          </h2>

          <ol className="list-none space-y-6 my-6 not-prose">
            {[
              {
                n: 1,
                title: "Audit your current manual re-entry points",
                body: "List every place your team copies data between systems: PO numbers typed into QBO, vendor records maintained twice, bills keyed from paper invoices, CSV exports cleaned before import. These are the friction points the sync eliminates — knowing them upfront shows you the full time savings.",
              },
              {
                n: 2,
                title: "Connect Cornerstone PM to QuickBooks Online",
                body: "In Cornerstone PM, go to Settings → Integrations → QuickBooks Online. Connect your QBO account. Run the one-click Chart of Accounts setup — it reuses existing accounts by name, creates construction-ready cost-code items, and leaves your existing books untouched. No restructuring, no data loss.",
              },
              {
                n: 3,
                title: "Set your AP payment schedule",
                body: "Configure when bills come due: Net-X days, Weekly (any weekday), Monthly (Nth weekday), Bi-weekly, or Semi-monthly (two paydays per month, e.g. 1st and 15th). Due dates compute automatically from the invoice or bill date and carry into every QuickBooks Bill. No manual date calculation on every transaction.",
              },
              {
                n: 4,
                title: "Approve a PO — it posts to QuickBooks automatically",
                body: "The moment a PO is approved or sent in Cornerstone, it posts to QuickBooks Online as a Purchase Order with a structured memo: community name, lot number, street address, PO number, and cost code. Your bookkeeper can trace any QBO transaction back to the exact home without leaving QuickBooks.",
              },
              {
                n: 5,
                title: "Mark the PO received — the Bill auto-creates and PO closes",
                body: "When the work is complete, mark the PO received in Cornerstone. The matching Bill auto-creates in QuickBooks, linked to the original PO, which closes automatically — no dangling commitments, no manual reconciliation. Cornerstone never auto-pays; payment approval always stays manual in QuickBooks.",
              },
              {
                n: 6,
                title: "Batch-pay on payday in QuickBooks",
                body: "All bills due by your scheduled payday appear together in QuickBooks for a single approval run. No hunting across individual bills, no manual due-date arithmetic. One payday, one approval. The human pay gate is permanent — Cornerstone only moves records, it never initiates payment.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-sm flex items-center justify-center mt-0.5">
                  {step.n}
                </div>
                <div>
                  <p className="font-bold text-white text-base mb-1">{step.title}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one-way sync is safer than two-way for builders
          </h2>

          <p>
            Two-way sync sounds like more capability on paper. In practice, it introduces a
            specific failure mode that&apos;s hard to detect: a bookkeeper edits a vendor name or
            amount in QuickBooks to match an internal convention, and the sync writes that
            change back to Cornerstone — silently altering the record that 20 open POs are
            linked to.
          </p>

          <p>
            Cornerstone&apos;s one-way design keeps it as the{" "}
            <strong className="text-white">source of truth for all job data</strong>. Anything
            that needs to change — vendor details, PO scope, cost codes, amounts — changes in
            Cornerstone, and the next sync carries the update to QuickBooks. QuickBooks handles
            accounting, reporting, and payment. Cornerstone runs the build. The two systems
            never fight over a record because they never write to the same source.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Sync vs. manual entry: quick comparison
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Feature</span>
              <span className="text-center">Cornerstone + QBO</span>
              <span className="text-center">Manual double-entry</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300">{row.feature}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.cornerstone ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {row.manual ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where to see what&apos;s synced (and what isn&apos;t)
          </h2>

          <p>
            Accounting → Sync Events in Cornerstone shows every push to QuickBooks — timestamp,
            result, and retry history. If a sync fails due to a network issue or a QuickBooks
            rate limit, the status is visible there. You always know what landed in QuickBooks
            and what is pending, without logging into QBO to manually cross-check.
          </p>

          <p>
            For the full picture of what the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone purchasing workflow
            </Link>{" "}
            covers — from bid requests and vendor portals through to QuickBooks sync and AP
            automation — the purchasing page has the complete story. The sync is the last step
            in a workflow that starts the moment a task is assigned; every step before it also
            happens without anyone re-keying a number.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              End the double-entry loop.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM syncs approved POs, bills, change orders, and vendors to
              QuickBooks automatically — one direction, clean memos, zero re-keying. Your
              bookkeeper works with accurate books, not a second data-entry job.
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
        title="Manual AP Double-Entry: Common Questions"
        subtitle="What builders ask when switching from manual QBO entry to Cornerstone's one-way sync."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
