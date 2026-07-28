import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/change-order-management-home-builders.png";
const heroImageAlt =
  "Construction change order management — approved change orders syncing to QuickBooks with vendor-priced line items in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "Change Order Management for Production Home Builders",
  slug: "change-order-management-production-home-builders",
  description:
    "Change orders shouldn't live in email threads. How production builders price, approve, and sync change orders to QuickBooks without re-keying a single line.",
  datePublished: "2026-07-28",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Change Order Management for Production Home Builders — Cornerstone PM™ Blog",
  description:
    "Change orders shouldn't live in email threads. How production builders price, approve, and sync change orders to QuickBooks without re-keying a single line.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/change-order-management-production-home-builders",
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

const coSteps = [
  {
    step: "1",
    label: "Priced from accepted vendor bids",
    detail:
      "Every line item pulls cost from awarded vendor pricing — no stored defaults, no estimator fudging. A line with no accepted bid shows $0 / needs pricing.",
  },
  {
    step: "2",
    label: "Sales tax applied automatically",
    detail:
      "Material lines are taxed; labor lines stay exempt. The split happens automatically on every PO and change order — no manual tax calculation.",
  },
  {
    step: "3",
    label: "Approved in-platform",
    detail:
      "Builder approves the change order inside Cornerstone. Drafts stay private until approval, so nothing goes out until it's deliberate.",
  },
  {
    step: "4",
    label: "Auto-posted to QuickBooks",
    detail:
      "The approved CO syncs one way to QuickBooks carrying community, lot, address, PO number, and cost code in the memo — no re-keying.",
  },
  {
    step: "5",
    label: "Rolls into per-home P&L",
    detail:
      "Because each Community maps to a QuickBooks Customer and each Home to a Project, the CO hits the right job automatically.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What is construction change order management software?",
    answer:
      "Construction change order management software tracks scope changes to a home or project — pricing them against accepted vendor bids, routing them for approval, and syncing the approved numbers into accounting. The goal is a single source of truth where every approved dollar is traceable and the books match the field paperwork without manual re-entry.",
  },
  {
    question: "How does Cornerstone price change orders?",
    answer:
      "Cornerstone follows the hard-cost rule platform-wide: every line item in a change order is priced from accepted vendor pricing only. A line with no awarded bid shows as $0 / needs pricing rather than pulling a stored default. This means every change order dollar is defensible — it traces back to an actual bid a vendor submitted and you accepted.",
  },
  {
    question: "Does Cornerstone sync change orders to QuickBooks?",
    answer:
      "Yes, one direction only: Cornerstone → QuickBooks. Approved change orders post automatically to QuickBooks Online carrying community, lot, address, PO number, and cost code in the memo. Each Community maps to a QuickBooks Customer and each Home to a Project, so change orders roll into per-home and per-community P&L without a journal entry. Changes made in QuickBooks never overwrite Cornerstone — Cornerstone is always the source of truth.",
  },
  {
    question: "Does Cornerstone auto-pay change orders?",
    answer:
      "No. Cornerstone never auto-pays anything. The sync posts the approved change order to QuickBooks as a Bill, but payment approval always stays a manual step inside QuickBooks. The human pay gate is permanent by design.",
  },
  {
    question: "How is sales tax handled on change orders?",
    answer:
      "Cornerstone applies sales tax to material lines only and keeps labor exempt — automatically, on every PO and change order. The calculated tax carries into the QuickBooks sync, so the books match the field paperwork exactly without manual tax splits.",
  },
  {
    question: "What information appears in the QuickBooks memo for a change order?",
    answer:
      "Every synced change order memo includes community name, lot number, address, PO number, and cost code. A bookkeeper can trace any QuickBooks transaction back to the exact home and trade without leaving QBO.",
  },
  {
    question: "Can I see which change orders have synced to QuickBooks?",
    answer:
      "Yes. The Accounting → Sync Events log in Cornerstone shows every push to QuickBooks Online, including the status of each sync and any retries. Builders can verify exactly what synced and when, so there's no black-box guessing about whether the books are current.",
  },
];

export default function ChangeOrderManagementPage() {
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
            Change Order Management for Production Home Builders
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 28, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Change orders shouldn&apos;t live in email threads. In{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM
            </Link>
            , every change order is priced from accepted vendor bids, approved
            in-platform, and synced one-way to QuickBooks automatically —
            no re-keying, no CSV exports, and one honest source of truth.
          </p>

          <p>
            A change order is one of the most financially dangerous documents
            in residential construction. It changes scope after the contract is
            signed. Every number in it needs to be defensible — the buyer will
            ask, the bookkeeper will reconcile, and the lender may audit. Yet
            most production builders run change orders through email threads,
            whiteboard tallies, and copy-pasted spreadsheet rows that get
            re-entered by hand into QuickBooks at month-end.
          </p>

          <p>
            That gap between the field approval and the accounting entry is
            where margin disappears. A CO that doesn&apos;t make it into the
            books is revenue you never collect. A CO priced from memory instead
            of vendor data is a number you can&apos;t defend. And a CO that gets
            double-entered — once in the build system, once in QuickBooks — is
            a reconciliation problem waiting to happen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone handle the change order lifecycle?
          </h2>

          <p>
            Cornerstone&apos;s change order flow is wired into the same
            purchasing and accounting stack as everything else on the platform.
            From pricing to approval to QuickBooks sync, nothing requires a
            manual handoff:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Change order flow — start to books
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {coSteps.map((row) => (
                <div key={row.step} className="px-5 py-4 flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-emerald-400">{row.step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The result: the moment a change order is approved in Cornerstone,
            QuickBooks has the right number, in the right job, with the right
            memo — without anyone opening a second screen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why every dollar has to trace back to a vendor bid
          </h2>

          <p>
            Cornerstone follows a platform-wide hard-cost rule:{" "}
            <strong className="text-white">
              nothing carries a stored or default cost
            </strong>
            . All cost flows from accepted vendor pricing. A line with no
            awarded bid shows as <em>$0 / needs pricing</em> instead of
            pulling a synthetic estimate from a cost library.
          </p>

          <p>
            This matters most on change orders. When a buyer asks why basement
            finishing costs $18,400, the right answer is &quot;because ABC
            Drywall submitted that number in their bid and you accepted it&quot;
            — not &quot;because that&apos;s what our cost library says.&quot;
            Vendor-priced change orders are defensible. Estimated change orders
            are guesses.
          </p>

          <p>
            The same rule applies to the auto-quantity scope items that drive
            material and labor costs across{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              floorplan budgets
            </Link>
            . A change order for a structural option — a finished basement, a
            third-car garage — pulls its pricing from the same accepted vendor
            rates as the base home. The math is consistent across every line,
            not re-estimated per CO.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Automatic sales tax: materials taxed, labor exempt
          </h2>

          <p>
            Most construction jurisdictions tax materials but exempt labor.
            Getting that split right by hand on every change order is tedious
            and error-prone — the wrong tax rate applied to labor looks like
            fraud to an auditor, and forgetting to tax materials leaves money
            on the table with the state.
          </p>

          <p>
            Cornerstone applies sales tax to material lines only and keeps
            labor exempt, automatically, on every purchase order and change
            order. The calculated tax carries into the QuickBooks sync, so the
            amount in QuickBooks matches the amount on the field paperwork
            exactly — no manual tax splits, no reconciliation gymnastics at
            year-end.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            One-way sync: Cornerstone to QuickBooks, never back
          </h2>

          <p>
            Once a change order is approved, it posts itself to QuickBooks
            Online. Because{" "}
            <Link
              href="/blog/quickbooks-online-sync-home-builder-construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s QuickBooks sync is one-directional
            </Link>
            , there&apos;s no risk of a QuickBooks-side edit silently
            overwriting the approved number in Cornerstone. The construction
            platform stays the source of truth — QuickBooks reflects it, not
            the other way around.
          </p>

          <p>
            Every synced change order memo carries community name, lot number,
            address, PO number, and cost code. A bookkeeper looking at a
            QuickBooks bill can trace that transaction back to the exact home
            and trade in seconds, without opening Cornerstone or asking
            the superintendent.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What the QuickBooks sync carries for every change order
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "Community → QuickBooks Customer",
                  detail: "Per-community P&L rolls up automatically",
                },
                {
                  label: "Home → QuickBooks Project",
                  detail: "Per-home margin visible inside QBO without a journal entry",
                },
                {
                  label: "Transaction memo",
                  detail: "Community · Lot · Address · PO# · Cost Code on every synced record",
                },
                {
                  label: "Material sales tax",
                  detail: "Calculated and synced — labor stays exempt, no manual split",
                },
                {
                  label: "Sync Events log",
                  detail: "Accounting → Sync Events shows every push and retry — no black box",
                },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The Sync Events log: audit trail for every push
          </h2>

          <p>
            Most accounting integrations are a black box. Data leaves the
            construction system and bookkeepers pray it showed up correctly
            in QuickBooks.
          </p>

          <p>
            Cornerstone makes the sync visible. The{" "}
            <strong className="text-white">Accounting → Sync Events</strong>{" "}
            log shows every push to QuickBooks Online — including the status
            of each sync and any retries — so builders can verify exactly what
            synced and when. If a record failed to sync, it shows up in the
            log with enough context to diagnose. No more month-end mystery
            variances between the build system and the books.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Cornerstone never auto-pays — the human pay gate is permanent
          </h2>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  Payment approval always stays in QuickBooks
                </p>
                <p className="text-sm text-slate-400">
                  Cornerstone posts the approved change order as a Bill in
                  QuickBooks, but it never initiates payment. The builder reviews
                  and pays manually in QuickBooks on whatever payment schedule
                  they&apos;ve configured. The human pay gate is intentional and
                  permanent — no change order auto-pays in this platform.
                </p>
              </div>
            </div>
          </div>

          <p>
            This is part of the broader{" "}
            <Link
              href="/blog/auto-bill-batch-pay-construction-accounts-payable"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              AP loop
            </Link>{" "}
            Cornerstone runs: approved POs post to QuickBooks as commitments,
            bills auto-create on completion, and builders batch-pay on payday
            — but the pay button never presses itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How change orders fit the full purchasing picture
          </h2>

          <p>
            Change orders don&apos;t exist in isolation. In Cornerstone they
            sit inside the same{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            as purchase orders, vendor bids, scope items, and the Master Cost
            Budget. A change order for additional framing updates the
            Master Cost Budget for that home, surfaces in the per-home P&L
            inside QuickBooks, and can be initiated by{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            — Cornerstone&apos;s 396+ skill construction agent — if you prefer
            to manage purchasing by chat.
          </p>

          <p>
            Because the same hard-cost rule applies everywhere — the base
            contract, POs, and change orders all pull from accepted vendor
            pricing — there&apos;s no inconsistency between what was budgeted
            and what the change order charged. The buyer-facing design center,
            the vendor bids, and the accounting entries all reference the same
            underlying numbers.
          </p>

          <p>
            For builders running 20, 50, or 100 homes a year across multiple
            communities, that consistency compounds. A change order that takes
            30 seconds to approve and zero seconds to enter into QuickBooks
            isn&apos;t just a convenience — it&apos;s the difference between a
            close that reconciles cleanly and a month-end scramble.
          </p>

          <FAQSection faqs={faqs} />

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Change orders that close the loop — not open a spreadsheet.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM prices change orders from real vendor bids,
              routes them for approval, and syncs them to QuickBooks
              automatically — with every dollar traced and the books
              updated before you close the tab.
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

      <Footer />
    </main>
  );
}
