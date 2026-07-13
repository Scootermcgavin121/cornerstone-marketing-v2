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

const heroImage = "/blog/quickbooks-purchase-order-bill-accrual.png";
const heroImageAlt =
  "QuickBooks purchase order sync — a Cornerstone PO becomes a linked Bill that auto-closes in QuickBooks Online";

const blogSchema = buildBlogPostSchema({
  title: "Two-Stage QuickBooks Sync: How POs Become Bills Automatically",
  slug: "quickbooks-purchase-order-bill-accrual-home-builders",
  description:
    "A sent PO posts to QuickBooks as a commitment, then the matching Bill auto-creates and closes it on receipt — no dangling POs and no duplicate data entry.",
  datePublished: "2026-07-13",
  mentionsProduct: {
    name: "Cornerstone PM QuickBooks Online Integration",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Two-Stage QuickBooks Sync: How POs Become Bills Automatically — Cornerstone PM™ Blog",
  description:
    "A sent PO posts to QuickBooks as a commitment, then the matching Bill auto-creates and closes it on receipt — no dangling POs and no duplicate data entry.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/quickbooks-purchase-order-bill-accrual-home-builders",
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

type StageRow = {
  step: string;
  trigger: string;
  result: string;
  where: string;
};

const stages: StageRow[] = [
  {
    step: "Stage 1",
    trigger: "PO sent to vendor",
    result: "Purchase Order posted to QBO",
    where: "Commitment visible in QBO books immediately",
  },
  {
    step: "Stage 2",
    trigger: "PO marked received / complete",
    result: "Bill auto-created, PO auto-closed",
    where: "Accrual matches actual; no dangling open POs",
  },
];

const accrualRows = [
  {
    scenario: "Sent PO",
    qboRecord: "Purchase Order (commitment)",
    status: "Open in QBO",
    closedBy: "Stage 2 auto-close",
  },
  {
    scenario: "PO received",
    qboRecord: "Bill (auto-created, linked to PO)",
    status: "Due by AP schedule",
    closedBy: "Manual pay approval in QBO",
  },
  {
    scenario: "Change order approved",
    qboRecord: "Bill or revised PO line",
    status: "Rolled up to same job",
    closedBy: "Same manual pay gate",
  },
];

const comparisonRows = [
  { feature: "PO → QBO commitment on send", cornerstone: true, manual: false },
  { feature: "Bill auto-created on receipt", cornerstone: true, manual: false },
  { feature: "PO auto-closes when Bill is created", cornerstone: true, manual: false },
  { feature: "No dangling open POs", cornerstone: true, manual: false },
  { feature: "Human pay gate (never auto-pays)", cornerstone: true, manual: true },
  { feature: "Clean memos (lot, address, PO#, cost code)", cornerstone: true, manual: false },
  { feature: "Sync Events log with retry history", cornerstone: true, manual: false },
  { feature: "Cornerstone stays source of truth", cornerstone: true, manual: false },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the two-stage QuickBooks sync in Cornerstone PM?",
    a: "When a PO is sent in Cornerstone, it posts to QuickBooks Online as a Purchase Order — a commitment that shows up in the books right away. When the PO is later marked received or complete, the matching Bill auto-creates in QuickBooks, linked to that PO, and the PO closes automatically. That gives you a full accrual accounting lifecycle with no manual steps between commitment and payable.",
  },
  {
    q: "Does Cornerstone auto-pay bills when they're created in QuickBooks?",
    a: "Never. Cornerstone creates the Bill in QuickBooks when a PO is marked received, but payment always requires manual approval inside QuickBooks. The human pay gate is permanent and cannot be disabled. Cornerstone handles the commitment and the payable creation — the builder controls when money actually moves.",
  },
  {
    q: "What QuickBooks Online plan is required for the two-stage PO sync?",
    a: "QuickBooks Online Plus or Advanced is required for Purchase Order support. On Simple Start and Essentials, Cornerstone can still sync Bills and Vendors, but the Stage 1 PO-as-commitment step needs Plus or above because those tiers don't support QBO Purchase Orders.",
  },
  {
    q: "What happens if a PO isn't marked received — does it stay open forever?",
    a: "Yes, Stage 1 POs stay open as commitments in QuickBooks until Stage 2 completes. That's intentional — the open PO is an accurate reflection of an outstanding commitment. Builders can see all open POs via Accounting → Sync Events and can also review them in the QuickBooks Purchase Orders register.",
  },
  {
    q: "Is the QuickBooks sync one-way or two-way?",
    a: "One-way. Cornerstone pushes POs, Bills, change orders, and vendors to QuickBooks. Changes made in QuickBooks never overwrite Cornerstone. Cornerstone stays the source of truth for all job data — if something needs to change (vendor name, cost code, scope) you change it in Cornerstone and the next sync carries the update to QuickBooks.",
  },
  {
    q: "What do transaction memos look like in QuickBooks after a PO syncs?",
    a: "Every synced PO and Bill carries a structured memo: Community name, Lot number, street address, PO number, and cost code — all in one line. Your bookkeeper can pull any QBO transaction and know immediately which home and trade it belongs to, without opening Cornerstone.",
  },
  {
    q: "Where can I see what has synced to QuickBooks and what hasn't?",
    a: "Accounting → Sync Events in Cornerstone shows every push to QuickBooks, the timestamp, and the result. If a push fails due to a network issue or a QuickBooks rate limit, the retry history is visible there. You always know which records landed and which are still pending.",
  },
];

export default function QuickBooksPOBillAccrualPage() {
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
            Two-Stage QuickBooks Sync: How POs Become Bills Automatically
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 13, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            When a PO is sent in Cornerstone, it posts to{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              QuickBooks Online
            </Link>{" "}
            as a Purchase Order commitment. When the PO is marked received, the matching Bill
            auto-creates, links to the PO, and closes it — a complete accrual lifecycle with
            zero manual steps in between.
          </p>

          <p>
            Most builders who integrate their operations software with QuickBooks end up with
            one of two problems: either they re-enter every transaction by hand (slow, error-prone),
            or they sync bills only after the fact and lose committed-cost visibility in between.
            Neither gives a clean picture of where money is going until month-end.
          </p>

          <p>
            Cornerstone&apos;s two-stage QuickBooks sync solves both problems at once. The{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            runs entirely in Cornerstone — bid requests, vendor awards, PO generation — and QuickBooks
            stays current automatically at each stage, with no CSV exports and no bookkeeper touching
            transactions between the field and the close.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the two-stage sync work?
          </h2>

          <p>
            The flow maps cleanly onto the standard accrual accounting lifecycle that builders
            already understand. Stage 1 records the commitment when money is obligated.
            Stage 2 converts that commitment into a payable when work is delivered.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[90px_1fr_1fr] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Stage</span>
              <span>Trigger</span>
              <span>Result in QuickBooks</span>
            </div>
            {stages.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-[90px_1fr_1fr] border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 font-semibold text-emerald-400">{s.step}</div>
                <div className="px-5 py-3.5 text-slate-300">{s.trigger}</div>
                <div className="px-5 py-3.5 text-white text-sm">
                  {s.result}
                  <div className="text-slate-500 text-xs mt-0.5">{s.where}</div>
                </div>
              </div>
            ))}
          </div>

          <p>
            Stage 1 matters because committed costs are real costs. A framing PO you&apos;ve already
            sent to a vendor has already obligated that money — a QuickBooks that doesn&apos;t show it
            until the bill arrives is running on incomplete information. The Purchase Order commitment
            in QuickBooks means your accountant and your build team are looking at the same numbers
            from the moment a PO is sent.
          </p>

          <p>
            Stage 2 is what kills the reconciliation headache. When the PO is marked received in
            Cornerstone, the matching Bill lands in QuickBooks already linked to the open PO — so
            the PO closes automatically. No manual matching, no hunting for the original commitment,
            no duplicate entry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the full accrual picture look like?
          </h2>

          <p>
            Every record type in the purchasing cycle flows through its own QuickBooks equivalent,
            with the two-stage flow handling the commitment-to-payable conversion automatically:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Scenario</span>
              <span>QBO Record</span>
              <span>Status</span>
              <span className="hidden sm:block">Closed by</span>
            </div>
            {accrualRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr_1fr] border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 font-semibold text-white">{row.scenario}</div>
                <div className="px-5 py-3.5 text-emerald-300">{row.qboRecord}</div>
                <div className="px-5 py-3.5 text-slate-400 text-xs">{row.status}</div>
                <div className="px-5 py-3.5 text-slate-500 text-xs hidden sm:block">{row.closedBy}</div>
              </div>
            ))}
          </div>

          <p>
            One thing that doesn&apos;t change at any stage: Cornerstone never auto-pays. The Bill
            lands in QuickBooks with the due date set by your AP schedule, but payment always
            requires manual approval inside QuickBooks. The builder — not the software — decides
            when money moves.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What AP schedule sets the Bill due date?
          </h2>

          <p>
            When a Bill auto-creates at Stage 2, its due date isn&apos;t left blank or defaulted to
            today. Cornerstone computes the due date from your AP payment schedule and carries it
            into the QuickBooks Bill — so vendors see the right date and your payables register
            reflects your actual cash-flow plan.
          </p>

          <p>
            Five schedule types are available:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Net-X days</strong> — due X days after the invoice date
            </li>
            <li>
              <strong className="text-white">Weekly</strong> — any weekday you choose as the weekly payday
            </li>
            <li>
              <strong className="text-white">Monthly</strong> — Nth weekday of the month, including &ldquo;Last&rdquo;
            </li>
            <li>
              <strong className="text-white">Bi-weekly</strong> — every two weeks, anchored to a chosen payday
            </li>
            <li>
              <strong className="text-white">Semi-monthly</strong> — two paydays a month (e.g. the 1st and 15th), keyed off the invoice/bill date
            </li>
          </ul>

          <p>
            The result: every bill in QuickBooks shows the correct due date, and on payday your
            bookkeeper sees all bills due by that date in one place for one batch-pay approval.
            No hunting across individual bills, no missed vendors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What do transaction memos look like?
          </h2>

          <p>
            Every synced PO and Bill in QuickBooks carries a structured memo so any transaction is
            traceable without opening Cornerstone:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">Example QBO Purchase Order memo (Stage 1)</p>
            <p>Community: Maple Ridge | Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing</p>
            <p>Vendor: Precision Framing LLC</p>
          </div>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">Matching QBO Bill memo (Stage 2 — auto-created)</p>
            <p>Community: Maple Ridge | Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing | Bill from PO</p>
            <p>Vendor: Precision Framing LLC</p>
          </div>

          <p>
            Community, lot, address, PO number, and cost code travel with the record from Stage 1
            all the way through to the auto-created Bill at Stage 2. Your bookkeeper can pull any
            transaction from the QBO register and know exactly which home and trade it belongs to
            — without ever switching tabs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where can I see what has synced?
          </h2>

          <p>
            Accounting → Sync Events in Cornerstone shows every push to QuickBooks: the timestamp,
            the record type, and the result — success, pending, or failed with retry history. If a
            push fails due to a network issue or a QuickBooks rate limit, the retry is visible there.
            You always know what landed in QuickBooks and what is still queued, without logging into
            QBO to cross-check manually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one-way sync keeps your books clean
          </h2>

          <p>
            The sync is intentionally one-directional. Cornerstone pushes to QuickBooks — not the
            other way. Changes made in QuickBooks (vendor names, memo edits, account reassignments)
            never write back to Cornerstone. Cornerstone stays the single source of truth for all
            job data: POs, cost codes, vendor records, community and home hierarchy.
          </p>

          <p>
            Two-way sync creates a specific class of hard-to-detect bugs: a bookkeeper renames a
            vendor in QuickBooks to match their internal conventions, and the sync silently overwrites
            the vendor record in Cornerstone — breaking the 30 POs attached to it. One-way sync
            eliminates that category of error entirely. If something in QuickBooks looks wrong, you
            fix it in Cornerstone and the next push carries the correction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Two-stage sync vs. manual AP: what changes
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Capability</span>
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
            How this fits the full AP loop
          </h2>

          <p>
            The two-stage sync doesn&apos;t stand alone — it&apos;s the accounting backbone of the
            end-to-end{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            that starts from the moment a task is assigned:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Task assigned in the build schedule.</strong>{" "}
              Cornerstone auto-generates a PO and emails it to the assigned vendor.
            </li>
            <li>
              <strong className="text-white">PO sent → Stage 1 sync.</strong>{" "}
              The PO posts to QuickBooks as a Purchase Order commitment. Committed cost
              is visible in the books immediately.
            </li>
            <li>
              <strong className="text-white">Work completed → Stage 2 sync.</strong>{" "}
              PO marked received. The matching Bill auto-creates in QuickBooks, linked to the PO,
              and the PO closes. No manual steps.
            </li>
            <li>
              <strong className="text-white">AP schedule sets the due date.</strong>{" "}
              The Bill lands in QuickBooks with the correct due date from your AP schedule —
              Net-X, Weekly, Monthly, Bi-weekly, or Semi-monthly.
            </li>
            <li>
              <strong className="text-white">Builder batch-pays on payday.</strong>{" "}
              All bills due by a given date appear together in QuickBooks for one manual approval
              run. The vendor&apos;s only job was to send an invoice.
            </li>
          </ol>

          <p>
            For the complete picture — from bid requests and the vendor portal through to QuickBooks
            sync and AP automation — the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM purchasing page
            </Link>{" "}
            covers every step.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop managing commitments and payables separately.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s two-stage QuickBooks sync turns every sent PO into a commitment
              and every received PO into a linked Bill — automatically. No double-entry, no
              dangling open POs, no manual reconciliation between commitments and actuals.
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
        title="QuickBooks PO-to-Bill Sync: Common Questions"
        subtitle="What home builders ask about Cornerstone PM's two-stage QuickBooks accrual flow."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
