import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/quickbooks-sync-audit-trail.png";
const heroImageAlt =
  "QuickBooks sync construction accounting — Sync Events audit log and clean transaction memos in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "A QuickBooks Sync You Can Audit: Sync Events and Clean Transaction Memos",
  slug: "quickbooks-sync-audit-trail-construction-accounting",
  description:
    "Cornerstone logs every QuickBooks push in a Sync Events audit trail and stamps each PO, bill, and change order with community, lot, PO number, and cost code.",
  datePublished: "2026-07-24",
  mentionsProduct: {
    name: "Cornerstone PM QuickBooks Sync",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "A QuickBooks Sync You Can Audit: Sync Events and Clean Transaction Memos — Cornerstone PM™ Blog",
  description:
    "Cornerstone logs every QuickBooks push in a Sync Events audit trail and stamps each PO, bill, and change order with community, lot, PO number, and cost code.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/quickbooks-sync-audit-trail-construction-accounting",
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

const syncEventRows = [
  { type: "Purchase Order", record: "PO #1042 — Precision Framing", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { type: "Bill", record: "Bill → PO #1042 (auto)", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { type: "Change Order", record: "CO #7 — Lot 22 Electrical", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { type: "Vendor", record: "Allied Mechanical — new", status: "Synced", statusClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { type: "Purchase Order", record: "PO #1061 — Summit Plumbing", status: "Pending", statusClass: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the Cornerstone Sync Events log?",
    a: "Accounting → Sync Events in Cornerstone shows every push to QuickBooks Online with a timestamp, the record type (PO, Bill, Change Order, Vendor), result status (success, pending, or failed), and retry history if a push failed. It is a full audit trail of every accounting transaction that has flowed from Cornerstone to QuickBooks.",
  },
  {
    q: "What information appears in the QuickBooks transaction memo?",
    a: "Every synced PO, Bill, and Change Order carries a structured memo with the community name, lot number, street address, PO number, and cost code. A bookkeeper can trace any QuickBooks transaction back to the exact home and trade without opening Cornerstone.",
  },
  {
    q: "Is the QuickBooks sync one-way or two-way?",
    a: "One-way. Approved POs, change orders, bills, and vendors flow from Cornerstone to QuickBooks. Changes made in QuickBooks do not write back to Cornerstone. Cornerstone stays the source of truth for all job data, so there is no risk of a QuickBooks edit corrupting records that are attached to dozens of POs.",
  },
  {
    q: "What happens if a sync push to QuickBooks fails?",
    a: "Cornerstone retries failed pushes automatically and logs each retry attempt with a timestamp and result in the Sync Events screen. You can see exactly which records are still pending, which failed, and when Cornerstone will attempt to push again — no guessing, no silent failures.",
  },
  {
    q: "Does Cornerstone support both QuickBooks Plus and Advanced?",
    a: "Purchase Orders require QuickBooks Online Plus or Advanced (QBO's PO feature is a higher-tier capability). Bills, Vendors, Change Orders, and the one-click Chart of Accounts setup work on all QBO plan tiers. The job-costing mapping — Community → Customer, Home → Project — uses the Projects feature, which also requires QBO Plus or Advanced.",
  },
  {
    q: "How does the two-stage accrual flow work with the sync log?",
    a: "When a PO is sent, Cornerstone posts it to QuickBooks as a Purchase Order (committed cost) and logs the push in Sync Events. When the PO is marked received, Cornerstone auto-creates the matching Bill, linked to the PO so it closes automatically, and logs that Bill push separately. Both events appear in the audit trail with timestamps.",
  },
  {
    q: "Does Cornerstone ever auto-pay bills in QuickBooks?",
    a: "Never. Cornerstone creates the Bill in QuickBooks and sets the due date by the vendor's AP schedule — but payment always requires manual approval by the builder in QuickBooks. The human pay gate is permanent. Cornerstone never initiates a payment.",
  },
];

export default function QBOSyncAuditTrailPage() {
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
            A QuickBooks Sync You Can Audit: Sync Events and Clean Transaction Memos
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 24, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Every push from Cornerstone to QuickBooks Online is logged in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Accounting → Sync Events
            </Link>{" "}
            — timestamp, record type, result status, and retry history — so builders and bookkeepers know exactly what synced, when it synced, and what to do if something didn&apos;t.
          </p>

          <p>
            Most accounting integrations are a black box. Data goes in, bookkeepers pray it landed correctly, and nobody finds out there was a sync failure until month-end reconciliation surfaces a missing bill or a duplicated vendor. For a production builder running 30 active homes, a silent sync failure can mean hours of cleanup — and a QuickBooks register that disagrees with the job data everyone else is looking at.
          </p>

          <p>
            Cornerstone takes the opposite approach. The{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              QuickBooks integration
            </Link>{" "}
            is fully auditable: every push is logged, every retry is timestamped, and every synced transaction carries a structured memo so it&apos;s traceable inside QuickBooks without cross-referencing Cornerstone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the Sync Events log show?
          </h2>

          <p>
            <strong className="text-white">Accounting → Sync Events</strong> is the audit trail for every record Cornerstone has pushed to QuickBooks Online. Each row shows:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Sync Events — example log
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {syncEventRows.map((row, i) => (
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
              Failed syncs include retry timestamps and error codes so you know what to investigate.
            </div>
          </div>

          <p>
            If a push fails — network timeout, a QuickBooks API hiccup, an unrecognized vendor — Cornerstone retries automatically and logs each attempt. You can see exactly which records are still pending and when the next retry fires, without logging into QuickBooks to audit the register manually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do clean transaction memos matter?
          </h2>

          <p>
            A QuickBooks register without useful memos is a list of dollar amounts with vendor names attached. For a builder running 5 communities and 200+ annual homes, that&apos;s not enough information for a bookkeeper to trace a transaction or for an owner to understand a P&amp;L line without picking up the phone.
          </p>

          <p>
            Every PO, Bill, and Change Order that syncs from Cornerstone carries a structured memo:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-5 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans font-medium uppercase tracking-wide">
              Example memo on a synced QuickBooks Bill
            </p>
            <p className="text-emerald-300">Community: Maple Ridge</p>
            <p>Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing</p>
          </div>

          <p>
            Community name, lot number, street address, PO number, and cost code. A bookkeeper can pull any transaction from the QBO register, read the memo, and know exactly which home it belongs to and which trade it covers — without opening Cornerstone. That&apos;s what makes the books auditable instead of just reconcilable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this fit the two-stage accrual flow?
          </h2>

          <p>
            The Sync Events log captures both stages of Cornerstone&apos;s{" "}
            <Link
              href="/blog/auto-bill-batch-pay-construction-accounts-payable"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              two-stage AP flow
            </Link>
            . When a PO is sent, Cornerstone posts it to QuickBooks as a Purchase Order (committed cost) and logs the push. When the PO is marked received, Cornerstone auto-creates the matching Bill — linked to the PO so it closes automatically — and logs that Bill push separately. Two distinct events, two separate rows in Sync Events, both with their own timestamps and memos.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Two-stage sync — what gets logged
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              <div className="px-5 py-4 flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-semibold text-white text-sm">PO sent → Purchase Order logged</p>
                  <p className="text-slate-400 text-sm mt-1">
                    A committed cost appears in QuickBooks. Sync Events shows the record type, timestamp, and memo. Drafts never sync — only sent POs.
                  </p>
                </div>
              </div>
              <div className="px-5 py-4 flex gap-4 items-start">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-semibold text-white text-sm">PO received → Bill logged</p>
                  <p className="text-slate-400 text-sm mt-1">
                    The matching Bill auto-creates in QuickBooks, the PO closes, and a second Sync Events row records the Bill push with its own timestamp and memo.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-3 bg-amber-950/20 border-t border-amber-800/30 text-xs text-amber-400">
              <strong>Human pay gate:</strong> Cornerstone never auto-pays. Bills land in QuickBooks for manual builder approval on payday.
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one-way sync protects the books
          </h2>

          <p>
            Two-way sync creates a specific failure mode: a bookkeeper edits a Bill amount in QuickBooks, the change writes back to Cornerstone, and suddenly the PO that dozens of scope items and change orders hang off has a corrupted cost. Finding and fixing that kind of corruption in an active build takes hours.
          </p>

          <p>
            Cornerstone syncs one direction only. Approved records — POs, bills, change orders, vendors — flow from Cornerstone to QuickBooks. Nothing from QuickBooks overwrites Cornerstone. Cornerstone stays the single source of truth for all job data, and the Sync Events log shows every outbound push so builders can verify the books match without running a manual audit.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What flows in the sync — and what doesn&apos;t
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { flows: "Approved/sent Purchase Orders", direction: "Cornerstone → QuickBooks" },
                { flows: "Auto-created Bills on PO completion", direction: "Cornerstone → QuickBooks" },
                { flows: "Change Orders", direction: "Cornerstone → QuickBooks" },
                { flows: "New Vendors", direction: "Cornerstone → QuickBooks" },
                { flows: "QuickBooks bill edits", direction: "Stays in QuickBooks only" },
                { flows: "QuickBooks payment records", direction: "Stays in QuickBooks only" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="px-5 py-3.5 text-slate-300 border-r border-slate-800/60 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.flows}
                  </div>
                  <div className="px-5 py-3.5 text-slate-400 text-sm">{row.direction}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Automatic sales tax and cost code clarity
          </h2>

          <p>
            The memos that carry into QuickBooks are only as useful as the underlying data they describe. Two supporting features make the data cleaner before it ever syncs.
          </p>

          <p>
            <strong className="text-white">Automatic sales tax on materials:</strong> Cornerstone applies sales tax to material lines and keeps labor exempt — on both POs and change orders — then carries the calculated tax into QuickBooks with the synced transaction. No manual material/labor splits, no re-keying tax amounts, and no end-of-month reconciliation to figure out what taxed and what didn&apos;t.
          </p>

          <p>
            <strong className="text-white">Cost codes on every transaction:</strong> Because every PO and Bill is linked to a cost code in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>
            , that code appears in the QuickBooks memo automatically. Bookkeepers get immediate trade-level visibility — framing, plumbing, electrical — without any manual tagging inside QuickBooks.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What builders get from an auditable sync
          </h2>

          <p>
            For a builder running multiple communities, the combination of Sync Events visibility and structured memos replaces two manual processes: the weekly &quot;did everything sync?&quot; check, and the month-end cost-code reconciliation exercise. Both become near-automatic when the sync log is always current and every transaction is self-describing.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-6 space-y-3">
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Sync Events shows every push with timestamp and retry history — no silent failures.</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Every QuickBooks transaction carries community, lot, PO#, and cost code — traceable without opening Cornerstone.</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">One-way sync means QuickBooks edits never corrupt Cornerstone job records.</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">Automatic material sales tax and labor exemption carry into QBO without manual splits.</p>
            </div>
          </div>

          <p>
            The result is a QuickBooks register that reflects the actual build — not a delayed, partially-reconciled approximation of it. Builders who want to see the full picture, from PO commitment through bill payment, can read it in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing hub
            </Link>{" "}
            or in QuickBooks, and both will agree.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              See every sync. Trust every number.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM logs every QuickBooks push in a real-time Sync Events audit trail and stamps each transaction with community, lot, PO number, and cost code. Request early access to see the full purchasing-to-accounting workflow.
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
        title="QuickBooks Sync Audit Trail: Common Questions"
        subtitle="What home builders ask about Sync Events, transaction memos, and the one-way QuickBooks integration in Cornerstone PM."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
