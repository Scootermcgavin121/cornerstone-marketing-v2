import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/quickbooks-transaction-memos.png";
const heroImageAlt =
  "QuickBooks job costing for home builders — synced transaction memo showing community, lot, address, PO number, and cost code";

const blogSchema = buildBlogPostSchema({
  title:
    'Your QuickBooks Register Says "Purchase Order 4471." That Tells You Nothing.',
  slug: "quickbooks-transaction-memos-job-costing-detail-home-builders",
  description:
    "Generic QuickBooks memos make job costing guesswork. How community, lot, address, PO number, and cost code on every synced transaction fix it.",
  datePublished: "2026-08-19",
  mentionsProduct: {
    name: "Cornerstone PM QuickBooks Sync",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    'Your QuickBooks Register Says "Purchase Order 4471." That Tells You Nothing. — Cornerstone PM™ Blog',
  description:
    "Generic QuickBooks memos make job costing guesswork. How community, lot, address, PO number, and cost code on every synced transaction fix it.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/quickbooks-transaction-memos-job-costing-detail-home-builders",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1536,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const memoRows = [
  {
    label: "Vendor",
    bad: "Precision Framing LLC",
    good: "Precision Framing LLC",
  },
  {
    label: "Memo (most tools)",
    bad: "Purchase Order 4471",
    good: "Community: Maple Ridge | Lot 14 | 847 Birchwood Ct | PO #1042 | Cost Code: Framing",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What information does Cornerstone include in every QuickBooks transaction memo?",
    a: "Every PO, Bill, and Change Order that syncs from Cornerstone to QuickBooks Online carries a structured memo with the community name, lot number, street address, PO number, and cost code. A bookkeeper can identify the exact home and trade from the QuickBooks register without opening Cornerstone.",
  },
  {
    q: "Is the QuickBooks sync one-way or two-way?",
    a: "One-way. Approved POs, change orders, bills, and vendors flow from Cornerstone to QuickBooks Online. Nothing in QuickBooks writes back to Cornerstone. Cornerstone stays the source of truth for all job data — changes made in QBO stay in QBO only.",
  },
  {
    q: "How does the Community-to-Customer mapping help with job costing?",
    a: "Each Community in Cornerstone maps to a QuickBooks Customer, and each Home maps to a Project (or a sub-customer Job on QBO tiers without Projects). That means every synced transaction lands under the right parent in QuickBooks automatically, giving builders per-home and per-community P&L without any manual categorization.",
  },
  {
    q: "Where can I see what has synced to QuickBooks?",
    a: "Accounting → Sync Events in Cornerstone shows every push to QuickBooks Online with a timestamp, record type, result status (synced, pending, or failed), and retry history. It is a full audit trail of every transaction that has flowed from Cornerstone to QuickBooks.",
  },
  {
    q: "Does Cornerstone ever auto-pay bills in QuickBooks?",
    a: "Never. Cornerstone creates the Bill in QuickBooks and sets the due date based on the vendor's AP schedule, but payment always requires manual approval by the builder inside QuickBooks. The human pay gate is permanent — Cornerstone never initiates a payment.",
  },
  {
    q: "What QuickBooks plan is required for the Cornerstone integration?",
    a: "Purchase Orders require QuickBooks Online Plus or Advanced (the PO feature is a higher-tier QBO capability). Bills, Vendors, Change Orders, and the one-click Chart of Accounts setup work on all QBO tiers. The Project-based job costing mapping (Home → Project) also requires QBO Plus or Advanced.",
  },
  {
    q: "How does the one-click Chart of Accounts setup work?",
    a: "When you connect Cornerstone to QuickBooks Online, it builds a construction-ready Chart of Accounts and cost-code items automatically. It reuses existing accounts by name so it never restructures books you already rely on — it only adds what is missing.",
  },
];

export default function QBOTransactionMemosPage() {
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
          width={1536}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Your QuickBooks Register Says &ldquo;Purchase Order 4471.&rdquo; That Tells You Nothing.
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 19, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Every PO, Bill, and Change Order that syncs from Cornerstone to{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              QuickBooks Online
            </Link>{" "}
            carries a structured memo — community, lot, address, PO number, cost code — so job costing is traceable inside QBO without opening Cornerstone.
          </p>

          <p>
            It is the last week of the month. Someone at your company is scrolling the QuickBooks register, trying to remember which lot a $14,200 bill belonged to. The memo line says the vendor name. The amount is correct. But which home? Which community? Which cost code?
          </p>

          <p>
            This is what job costing looks like when the accounting integration stops at the dollar amount. Most construction tools push a bare total across to QuickBooks and leave the context behind. The bookkeeper then becomes a reconstruction project, cross-referencing inboxes and PDFs to figure out what the number actually means.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does job costing break in QuickBooks?
          </h2>

          <p>
            QuickBooks is excellent accounting software. It is not a construction job ledger on its own — it depends on whatever context the integration sends it. When that context is &ldquo;Purchase Order 4471,&rdquo; the bookkeeper gets a number with no story. When it is &ldquo;Community: Maple Ridge | Lot 14 | 847 Birchwood Ct | PO #1042 | Cost Code: Framing,&rdquo; the number tells its own story without a phone call.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Memo comparison — same bill, two integrations
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-2 text-sm">
                <div className="px-5 py-3.5 text-slate-400 border-r border-slate-800/60 font-medium">Most tools send</div>
                <div className="px-5 py-3.5 text-slate-400 font-medium">Cornerstone sends</div>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <div className="px-5 py-3.5 text-slate-400 border-r border-slate-800/60">Precision Framing LLC<br /><span className="text-slate-500 text-xs">Purchase Order 4471</span></div>
                <div className="px-5 py-3.5 text-slate-300">Precision Framing LLC<br /><span className="text-emerald-400 text-xs">Community: Maple Ridge | Lot 14 | 847 Birchwood Ct | PO #1042 | Cost Code: Framing</span></div>
              </div>
            </div>
            <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-500">
              Same dollar amount. One memo is traceable without leaving QuickBooks; the other requires a phone call.
            </div>
          </div>

          <p>
            Cornerstone writes the full context — community name, lot number, street address, PO number, and cost code — on every synced PO, Bill, and Change Order. A bookkeeper can pull any QuickBooks transaction and read exactly which home and which trade it covers, without opening{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the job structure reinforce the memo detail?
          </h2>

          <p>
            Clean memos only go so far if the QuickBooks job structure is a flat list of transactions. Cornerstone&apos;s integration wires the hierarchy correctly: each Community maps to a QuickBooks Customer, and each Home maps to a Project (or a sub-customer Job on QBO tiers without the Projects feature).
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                QuickBooks job-costing mapping
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { cornerstone: "Community", qbo: "Customer (parent)", detail: "Per-community P&L rolls up to this level" },
                { cornerstone: "Home", qbo: "Project / sub-customer Job", detail: "Per-home P&L is visible at this level" },
                { cornerstone: "Cost Code", qbo: "Memo field + item", detail: "Trade-level detail on every transaction" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 text-sm">
                  <div className="px-5 py-3.5 text-emerald-400 border-r border-slate-800/60 font-medium">{row.cornerstone}</div>
                  <div className="px-5 py-3.5 text-slate-300 border-r border-slate-800/60">{row.qbo}</div>
                  <div className="px-5 py-3.5 text-slate-400 text-xs">{row.detail}</div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-500">
              Requires QuickBooks Online Plus or Advanced for Projects and Purchase Orders.
            </div>
          </div>

          <p>
            The memo detail and the job structure reinforce each other rather than fighting. The memo tells a bookkeeper which home a transaction belongs to; the QBO Project structure makes that home appear in the right P&amp;L report automatically. Change orders roll up to the correct job. Per-community margin is visible without a pivot table.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do you confirm every push actually landed?
          </h2>

          <p>
            Accounting → Sync Events in Cornerstone is the audit trail for every record pushed to QuickBooks Online. Each row shows the record type (PO, Bill, Change Order, Vendor), a timestamp, result status (synced, pending, or failed), and retry history if a push needed more than one attempt.
          </p>

          <p>
            When a sync fails — a network timeout, a QBO API hiccup, an unrecognized cost code — Cornerstone retries automatically and logs each attempt. Builders can see exactly which records are still pending without logging into QuickBooks to compare registers manually.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Accounting → Sync Events — example log
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                { type: "Purchase Order", record: "PO #1042 — Precision Framing", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                { type: "Bill", record: "Bill → PO #1042 (auto)", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                { type: "Change Order", record: "CO #7 — Lot 22 Electrical", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                { type: "Vendor", record: "Allied Mechanical — new", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
                { type: "Purchase Order", record: "PO #1061 — Summit Plumbing", status: "Pending", statusClass: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4 text-sm">
                  <span className="text-slate-500 text-xs w-28 shrink-0">{row.type}</span>
                  <span className="text-slate-300 flex-1">{row.record}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${row.statusClass}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800 text-xs text-slate-500">
              Failed syncs include retry timestamps and error codes — no silent failures.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one-way sync protects the books
          </h2>

          <p>
            Two-way sync creates a specific failure mode that production builders cannot afford: a bookkeeper edits a bill amount or description in QuickBooks, the change writes back to Cornerstone, and a cost that dozens of scope items and change orders hang off suddenly has a corrupted memo or a wrong number. Reconstructing that takes hours.
          </p>

          <p>
            Cornerstone syncs one direction only. Approved records — POs, bills, change orders, vendors — flow from Cornerstone to QuickBooks. Nothing in QuickBooks overwrites Cornerstone. Cornerstone stays the single source of truth. If a bookkeeper needs to note something in QBO, it lives in QBO only and does not touch the build records the purchasing team is working from.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What else rides on the sync?
          </h2>

          <p>
            Two additional details keep the books accurate before a transaction ever leaves Cornerstone.
          </p>

          <p>
            <strong className="text-white">Automatic sales tax on materials:</strong> Most construction jurisdictions tax materials and exempt labor. Cornerstone applies that split automatically on both POs and change orders, then carries the calculated tax into QuickBooks with the synced transaction. No manual splits, no re-keying tax amounts at month-end.
          </p>

          <p>
            <strong className="text-white">One-click Chart of Accounts:</strong> Connecting Cornerstone to QuickBooks builds a construction-ready Chart of Accounts plus cost-code items automatically. It reuses existing accounts by name and never restructures books the builder already relies on — it only fills in what is missing, so the books do not change shape mid-month.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-6 space-y-3">
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Every synced transaction carries community, lot, address, PO number, and cost code — traceable from the QBO register alone.</p>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Community → QBO Customer, Home → Project: per-home and per-community P&L appear automatically in the right places.</p>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Sync Events audit trail shows every push, every retry, every timestamp — no guessing whether a bill landed.</p>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">One-way sync only: Cornerstone pushes, QuickBooks never writes back. The source of truth stays in one place.</p>
            </div>
          </div>

          <p>
            Month-end reconciliation becomes a verification rather than a reconstruction project. The QuickBooks register reflects the actual build — not a delayed, partially-described approximation of it. Builders who want the full picture can read it in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing hub
            </Link>{" "}
            or in QuickBooks, and both will agree on what was committed, what was billed, and which home it belongs to.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Job costing that explains itself.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM stamps every synced QuickBooks transaction with community, lot, address, PO number, and cost code — so your bookkeeper can close the month without a single phone call to find out which lot a bill belonged to.
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
        title="QuickBooks Job Costing: Common Questions"
        subtitle="What home builders and bookkeepers ask about transaction memos, job mapping, and the one-way QuickBooks sync in Cornerstone PM."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
