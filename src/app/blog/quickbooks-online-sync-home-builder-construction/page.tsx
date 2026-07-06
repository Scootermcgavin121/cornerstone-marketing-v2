import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/quickbooks-online-sync-construction.png";
const heroImageAlt =
  "QuickBooks Online construction sync — Cornerstone posts POs, bills, and vendors to QuickBooks automatically";

const blogSchema = buildBlogPostSchema({
  title: "How Cornerstone Syncs to QuickBooks Online — Automatically, One Direction",
  slug: "quickbooks-online-sync-home-builder-construction",
  description:
    "Approved POs, change orders, bills, and vendors post themselves to QuickBooks Online. No CSV exports, no double entry. See how one-way sync keeps your books clean.",
  datePublished: "2026-07-06",
  mentionsProduct: {
    name: "Cornerstone PM QuickBooks Online Integration",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "How Cornerstone Syncs to QuickBooks Online — Automatically, One Direction — Cornerstone PM™ Blog",
  description:
    "Approved POs, change orders, bills, and vendors post themselves to QuickBooks Online. No CSV exports, no double entry. See how one-way sync keeps your books clean.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/quickbooks-online-sync-home-builder-construction",
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

type SyncItem = {
  label: string;
  cornerstoneSide: string;
  qboSide: string;
  note: string;
};

const syncItems: SyncItem[] = [
  {
    label: "Purchase Orders",
    cornerstoneSide: "Sent / Approved PO",
    qboSide: "Purchase Order (commitment)",
    note: "Drafts stay private — only sent POs sync",
  },
  {
    label: "Bills",
    cornerstoneSide: "PO marked received / complete",
    qboSide: "Bill auto-created, PO closed",
    note: "Optional toggle; human pay gate always in QBO",
  },
  {
    label: "Change Orders",
    cornerstoneSide: "Approved change order",
    qboSide: "Bill or revised PO line",
    note: "Rolls up to the same job in QBO",
  },
  {
    label: "Vendors",
    cornerstoneSide: "New vendor record",
    qboSide: "Vendor in QBO Vendor Center",
    note: "Reuses existing vendor by name if found",
  },
];

const jobCostingRows = [
  {
    cornerstone: "Community",
    qbo: "Customer (parent)",
    why: "Community-level P&L in QBO",
  },
  {
    cornerstone: "Home",
    qbo: "Project (or sub-customer Job)",
    why: "Per-home profit tracking",
  },
  {
    cornerstone: "Cost Code",
    qbo: "Item / Class",
    why: "Trade-level breakdown inside each job",
  },
];

const comparisonRows = [
  { feature: "Auto-sync approved POs to QBO", cornerstone: true, manual: false },
  { feature: "Auto-create linked Bill on receipt", cornerstone: true, manual: false },
  { feature: "Community → QBO Customer mapping", cornerstone: true, manual: false },
  { feature: "Home → QBO Project mapping", cornerstone: true, manual: false },
  { feature: "Clean memos (lot, address, PO#, cost code)", cornerstone: true, manual: false },
  { feature: "Sync Events log with retry", cornerstone: true, manual: false },
  { feature: "One-click Chart of Accounts build", cornerstone: true, manual: false },
  { feature: "Cornerstone stays source of truth", cornerstone: true, manual: "Sometimes" },
];

const faqItems: FAQItem[] = [
  {
    q: "Is the QuickBooks Online sync one-way or two-way?",
    a: "One-way. Cornerstone PM pushes data to QuickBooks Online — approved POs, change orders, bills, and vendors — but changes made in QuickBooks never overwrite Cornerstone. Cornerstone stays the source of truth. This is intentional: a two-way sync risks overwriting job data you set up deliberately in Cornerstone with edits made in QuickBooks by someone who didn't know they'd propagate back.",
  },
  {
    q: "Which QuickBooks Online plan is required?",
    a: "QuickBooks Online Plus or Advanced is required for Purchase Order support. Simple Start and Essentials do not support QBO Purchase Orders, so Cornerstone can still sync Bills and Vendors on those tiers, but the full two-stage PO → Bill accrual flow requires Plus or above.",
  },
  {
    q: "Does Cornerstone auto-pay bills in QuickBooks?",
    a: "Never. Cornerstone creates the bill in QuickBooks when a PO is marked received, but payment always stays in QuickBooks under manual builder approval. No payment fires automatically — the human pay gate is permanent and cannot be disabled.",
  },
  {
    q: "How does job costing work across communities and homes?",
    a: "Each Community in Cornerstone maps to a QuickBooks Customer (parent), and each Home maps to a Project (or a sub-customer Job on QBO tiers without Projects support). That gives you per-home and per-community P&L inside QuickBooks without any extra setup — change orders and revisions roll up to the correct job automatically.",
  },
  {
    q: "What information appears in transaction memos in QuickBooks?",
    a: "Every synced PO, Bill, and Change Order carries a structured memo with the community name, lot number, street address, PO number, and cost code. That makes QuickBooks transactions traceable back to the exact home and trade without digging through Cornerstone for context.",
  },
  {
    q: "Where can I see what has synced and what hasn't?",
    a: "Accounting → Sync Events in Cornerstone shows every push to QuickBooks, the timestamp, and the result status. If a push fails (e.g. due to a network blip or a QBO rate limit), the retry history is visible there. You always know what landed and what is pending.",
  },
  {
    q: "What happens if QuickBooks already has accounts set up?",
    a: "Cornerstone's one-click Chart of Accounts setup reuses existing accounts by name before creating new ones. It never restructures your existing books. If a matching account name already exists, it maps to it. If it doesn't exist, it creates one. You don't have to clean up duplicates after the connection.",
  },
];

export default function QuickBooksOnlineSyncPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            How Cornerstone Syncs to QuickBooks Online — Automatically, One Direction
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 6, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM syncs approved POs, change orders, bills, and vendors to{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              QuickBooks Online automatically
            </Link>{" "}
            — one direction only, with no manual entry, no CSV exports, and no double data entry
            for your bookkeeper.
          </p>

          <p>
            Most home builders run operations in one system and accounting in another. Every
            approved PO, every vendor credit, every change order gets re-entered by hand —
            or exported to a spreadsheet, cleaned up, and imported. On a busy week that&apos;s
            two to four hours of bookkeeper time that produces nothing new. It just moves
            data that already existed somewhere else.
          </p>

          <p>
            Cornerstone&apos;s QuickBooks Online integration ends that loop.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              The purchasing workflow
            </Link>{" "}
            runs in Cornerstone — POs go to vendors, bids come back, approvals happen — and
            when something is approved or sent, it posts to QuickBooks automatically. The books
            stay current without anyone touching them between job completion and month-end close.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What syncs from Cornerstone to QuickBooks Online?
          </h2>

          <p>
            Four categories of records post automatically when they reach an approved or sent
            state in Cornerstone. Drafts stay private in Cornerstone — only records that have
            been acted on make it to QuickBooks.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[1fr_1fr_1fr] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Record</span>
              <span>Cornerstone → QBO</span>
              <span className="hidden sm:block">Note</span>
            </div>
            {syncItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr] border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 font-semibold text-white">{item.label}</div>
                <div className="px-5 py-3.5 text-slate-300">
                  <span className="text-slate-400 text-xs">{item.cornerstoneSide}</span>
                  <span className="mx-2 text-emerald-500">→</span>
                  <span className="text-emerald-300 text-xs">{item.qboSide}</span>
                </div>
                <div className="px-5 py-3.5 text-slate-500 text-xs hidden sm:block">{item.note}</div>
              </div>
            ))}
          </div>

          <p>
            The two-stage accounting flow matters for accrual-basis builders. When a PO is sent,
            it posts to QuickBooks as a <strong className="text-white">Purchase Order</strong> —
            a commitment that shows up in your books as outstanding. When the work is received
            and the PO is marked complete, the matching{" "}
            <strong className="text-white">Bill auto-creates and closes the PO</strong> in one
            step. No dangling POs, no duplicates, no manual reconciliation between commitments
            and actuals.
          </p>

          <p>
            One important note: Cornerstone never auto-pays. The Bill lands in QuickBooks, due
            date set by your AP schedule, and payment always requires manual approval in
            QuickBooks. The human pay gate stays in place regardless of how the bill was created.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does job costing map between Cornerstone and QuickBooks?
          </h2>

          <p>
            The most valuable part of any accounting integration for a builder isn&apos;t the
            transaction sync — it&apos;s per-home and per-community P&amp;L without manual setup.
            Cornerstone maps its data hierarchy directly to QuickBooks&apos; project model:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>In Cornerstone</span>
              <span>In QuickBooks Online</span>
              <span>What it unlocks</span>
            </div>
            {jobCostingRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 font-semibold text-emerald-300">{row.cornerstone}</div>
                <div className="px-5 py-3.5 text-white">{row.qbo}</div>
                <div className="px-5 py-3.5 text-slate-400 text-xs">{row.why}</div>
              </div>
            ))}
          </div>

          <p>
            Every Community becomes a QuickBooks Customer (parent). Every Home becomes a Project
            under that Customer — or a sub-customer Job on QBO tiers that don&apos;t support Projects.
            Change orders and revisions roll up to the correct job automatically, so your per-home
            P&amp;L in QuickBooks reflects the full picture: original POs, change orders, and final
            bills all attributed to the right address.
          </p>

          <p>
            For builders running multiple communities, this gives you community-level profitability
            reporting inside QuickBooks without any additional configuration. The data model in
            Cornerstone and the data model in QuickBooks stay aligned from the first sync forward.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What do transaction memos look like in QuickBooks?
          </h2>

          <p>
            Every synced record carries a structured memo so transactions are traceable inside
            QuickBooks without having to cross-reference Cornerstone:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">Example QBO Bill memo</p>
            <p>Community: Maple Ridge | Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing</p>
            <p>Vendor: Precision Framing LLC</p>
          </div>

          <p>
            Community name, lot number, street address, PO number, and cost code — all in one
            line. Your bookkeeper can pull any transaction from the QBO register and immediately
            understand which home it belongs to and which trade it covers, without opening
            Cornerstone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the Chart of Accounts setup work?
          </h2>

          <p>
            When you first connect QuickBooks Online to Cornerstone, a one-click Chart of
            Accounts setup builds a construction-ready CoA and creates cost-code items ready
            for job costing. It reuses existing accounts by name — if &quot;Framing Labor&quot; already
            exists in your QBO books, Cornerstone maps to it. If it doesn&apos;t exist, it creates
            a new account.
          </p>

          <p>
            No accounts are restructured or renamed. No existing transaction history is touched.
            Builders who have already been using QuickBooks can connect Cornerstone without
            worrying about their chart getting reorganized.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why is one-way sync better than two-way for builders?
          </h2>

          <p>
            Two-way sync sounds more powerful in theory. In practice, it creates a class of
            bugs that are hard to detect and painful to undo: a bookkeeper edits a vendor name
            in QuickBooks to match their internal naming convention, and the sync writes that
            change back to Cornerstone — silently breaking the vendor record that 15 POs are
            attached to.
          </p>

          <p>
            Cornerstone&apos;s one-way design keeps it as the{" "}
            <strong className="text-white">source of truth for all job data</strong>. Anything
            you need to change — vendor details, PO scope, cost codes — you change in
            Cornerstone, and the next sync carries the update to QuickBooks. QuickBooks is for
            accounting, reporting, and payment. Cornerstone is for the build. The two systems
            never fight over who owns a record.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where can I see what has synced?
          </h2>

          <p>
            Accounting → Sync Events in Cornerstone shows every push to QuickBooks, the
            timestamp, and the result — success, pending, or failed with retry history. If
            a sync fails due to a network issue or a QuickBooks rate limit, the retry status
            is visible there. You always know what landed in QuickBooks and what is still
            pending, without logging into QBO and manually cross-checking transactions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            One-way sync vs. manual entry: a quick comparison
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Feature</span>
              <span className="text-center">Cornerstone + QBO</span>
              <span className="text-center">Manual double-entry</span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300">{row.feature}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.cornerstone === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {typeof row.manual === "string" ? (
                    <span className="text-xs text-amber-400">{row.manual}</span>
                  ) : row.manual === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does QBO sync fit the rest of the purchasing workflow?
          </h2>

          <p>
            The QuickBooks sync isn&apos;t a standalone feature — it&apos;s the accounting layer
            at the end of a complete{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            that starts the moment a task is assigned:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Task assigned in the build schedule.</strong>{" "}
              Cornerstone auto-generates a PO and emails it to the assigned vendor.
            </li>
            <li>
              <strong className="text-white">PO sent → posts to QuickBooks as a Purchase Order.</strong>{" "}
              The commitment appears in your books immediately.
            </li>
            <li>
              <strong className="text-white">Work completed → PO marked received.</strong>{" "}
              The matching Bill auto-creates in QuickBooks, linked to the PO, which closes.
            </li>
            <li>
              <strong className="text-white">AP schedule sets the due date.</strong>{" "}
              Net-X, Weekly, Monthly, Bi-weekly, or Semi-monthly — the due date computes
              automatically and carries into the QuickBooks Bill.
            </li>
            <li>
              <strong className="text-white">Builder batch-pays on payday.</strong>{" "}
              All bills due by a given date appear together in QuickBooks for one manual
              payment approval — no hunting across individual bills.
            </li>
          </ol>

          <p>
            The vendor&apos;s only job is to send an invoice. Everything else — the PO, the
            commitment in QuickBooks, the Bill on completion, the due date — happens without
            anyone re-entering a number.
          </p>

          <p>
            For builders ready to set up the integration or learn more about what the full
            purchasing workflow covers, the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM purchasing page
            </Link>{" "}
            has the complete picture — from bid requests and vendor portals through to
            QuickBooks sync and AP automation.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop re-keying POs into QuickBooks by hand.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM syncs approved POs, change orders, bills, and vendors to
              QuickBooks Online automatically — one direction, clean memos, real job costing.
              Your books stay current without a bookkeeper touching them between closes.
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
        title="QuickBooks Online Sync: Common Questions"
        subtitle="Answers to what home builders ask when setting up Cornerstone PM's QuickBooks Online integration."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
