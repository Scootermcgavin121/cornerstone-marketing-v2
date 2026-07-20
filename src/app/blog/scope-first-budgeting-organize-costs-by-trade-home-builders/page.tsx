import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/scope-first-budgeting.png";
const heroImageAlt =
  "Scope-first construction budgeting — Cornerstone Area Costs filed by trade with scope-filtered parts and allowances";

const blogSchema = buildBlogPostSchema({
  title: "Scope-First Budgeting: Every Cost Filed Under Its Trade",
  slug: "scope-first-budgeting-organize-costs-by-trade-home-builders",
  description:
    "Area Costs in Cornerstone are scope-first: every part, scope item, and allowance is filed under the trade it belongs to, so nothing gets miskeyed or lost.",
  datePublished: "2026-07-20",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Scope-First Budgeting: Every Cost Filed Under Its Trade — Cornerstone PM™ Blog",
  description:
    "Area Costs in Cornerstone are scope-first: every part, scope item, and allowance is filed under the trade it belongs to, so nothing gets miskeyed or lost.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/scope-first-budgeting-organize-costs-by-trade-home-builders",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Scope-First Area Costs in Cornerstone PM",
  description:
    "Walk through creating a scope bucket, adding scope-filtered Parts and Scope Items priced from vendor bids, and using Allowances for un-bid placeholders.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pick or create your scope",
      text: "In Cornerstone PM, navigate to Purchasing → Area Costs and start a new area cost. The first action is always to select or create a scope (trade) — Framing, Plumbing, Electrical, HVAC, or any custom trade. The bucket title becomes the scope name, so every line you add is already filed under the right trade.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Add scope-filtered Parts",
      text: "Inside the scope bucket, use the Parts picker. Because the picker is scope-filtered to the current trade, it only surfaces materials that belong to that scope — no cross-trade miskeys. Parts carry pricing only from accepted vendor bids; a part with no awarded bid shows as $0 / needs pricing.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add Scope Items for labor or assemblies",
      text: "Add Scope Items for labor or trade-specific line items. Like Parts, Scope Items are scope-filtered to the current trade and priced only from accepted vendor pricing. No default costs, no estimator guesses — every dollar traces back to a real bid.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Use an Allowance for un-bid placeholders",
      text: "For line items that haven't been bid yet — appliances, fixtures, landscaping — add an Allowance. An Allowance is the only line type in a scope bucket that can carry a direct dollar amount as a budget placeholder. When the real bid arrives, replace the Allowance with the vendor-priced line and the budget updates automatically.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Review $0 / needs pricing lines before locking the budget",
      text: "Before finalizing the Master Cost Budget, scan for any lines showing $0 / needs pricing — those are Part or Scope Item lines that have no accepted vendor bid yet. Chase the missing bids or replace with an Allowance to hold a placeholder. Every line in the final budget should be either vendor-priced or explicitly an Allowance.",
    },
  ],
};

const scopeLineTypes = [
  {
    type: "Part",
    pricedFrom: "Accepted vendor bid only",
    canHoldDollar: false,
    scopeFiltered: true,
    noPriceState: "$0 / needs pricing",
  },
  {
    type: "Scope Item",
    pricedFrom: "Accepted vendor bid only",
    canHoldDollar: false,
    scopeFiltered: true,
    noPriceState: "$0 / needs pricing",
  },
  {
    type: "Allowance",
    pricedFrom: "Direct dollar entry (placeholder)",
    canHoldDollar: true,
    scopeFiltered: false,
    noPriceState: "N/A — always carries a number",
  },
];

export default function ScopeFirstBudgetingPage() {
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
            Scope-First Budgeting: Every Cost Filed Under Its Trade
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 20, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            In Cornerstone PM, you pick the trade first — then add costs to it. Every Part,
            Scope Item, and Allowance lives under the scope it belongs to, so a framing line
            can never end up inside an electrical bucket, and every dollar traces back to{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              real vendor pricing
            </Link>
            .
          </p>

          <p>
            Most construction budgets are flat lists. A builder opens a spreadsheet, adds a row
            for framing lumber, another for rough electrical, another for plumbing fixtures — and
            nothing stops those rows from landing in the wrong column, carrying a number pulled
            from three years ago, or disappearing into a tab nobody checks. The result is a budget
            that looks complete until a cost code gets the wrong trade, a lender draw doesn&apos;t
            match the job record, or a change order rolls up to the wrong scope.
          </p>

          <p>
            Cornerstone&apos;s Area Costs model flips the order of operations. You don&apos;t
            start with a line item. You start with a scope.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does &ldquo;scope-first&rdquo; mean in practice?
          </h2>

          <p>
            When you create an Area Cost in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Purchasing
            </Link>
            , the first decision is the scope — the trade this bucket belongs to: Framing,
            Plumbing, Electrical, Concrete, HVAC, or any custom scope your team uses. The
            bucket title IS the scope name. Everything you add to that bucket is, by definition,
            filed under that trade.
          </p>

          <p>
            That structure isn&apos;t cosmetic. The Parts picker and Scope Items picker inside
            a scope bucket are filtered to the current trade — so when you&apos;re inside the
            Framing bucket, the picker only shows framing-related materials and labor. You can&apos;t
            accidentally select a plumbing fixture from inside an electrical scope. The filter
            eliminates the miskey before it can happen.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Scope-first structure in Cornerstone Area Costs
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  step: "1",
                  action: "Pick or create a scope",
                  detail: "Framing, Plumbing, Electrical, HVAC, or custom — the bucket title is the scope name",
                },
                {
                  step: "2",
                  action: "Add scope-filtered Parts",
                  detail: "Picker surfaces only materials belonging to this trade; priced from accepted vendor bids only",
                },
                {
                  step: "3",
                  action: "Add scope-filtered Scope Items",
                  detail: "Labor and trade-specific lines, also filtered and vendor-priced only",
                },
                {
                  step: "4",
                  action: "Use an Allowance for un-bid placeholders",
                  detail: "The only line type that can carry a direct dollar — a budget placeholder until the real bid arrives",
                },
              ].map((row, i) => (
                <div key={i} className="px-5 py-4 flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0 mt-0.5">
                    {row.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{row.action}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Three line types — and only one can hold a placeholder number
          </h2>

          <p>
            Inside every scope bucket there are three kinds of lines: Parts, Scope Items, and
            Allowances. They look similar on the surface but behave differently around pricing.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[1fr_1.6fr_auto_auto] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3 gap-4">
              <span>Line Type</span>
              <span>Priced From</span>
              <span className="text-center">Scope-Filtered</span>
              <span className="text-center">No-Price State</span>
            </div>
            {scopeLineTypes.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1.6fr_auto_auto] border-b border-slate-800/60 text-sm last:border-b-0 gap-4"
              >
                <div className="px-5 py-3.5 font-semibold text-emerald-300">{row.type}</div>
                <div className="px-5 py-3.5 text-slate-400 text-xs leading-snug">{row.pricedFrom}</div>
                <div className="px-5 py-3.5 flex items-center justify-center">
                  {row.scopeFiltered ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <span className="text-slate-600 text-xs">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-xs text-slate-500 leading-snug">{row.noPriceState}</div>
              </div>
            ))}
          </div>

          <p>
            Parts and Scope Items can only get a price from an accepted vendor bid. If no bid
            has been awarded for that line, it shows as{" "}
            <strong className="text-white">$0 / needs pricing</strong> — an honest signal
            instead of a fabricated number. An Allowance is the exception: it&apos;s a true
            budget placeholder, the only line that can carry a direct dollar amount a builder
            enters by hand.
          </p>

          <div className="not-prose rounded-xl border border-amber-900/30 bg-amber-950/10 px-5 py-4 my-6 flex gap-3 items-start">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-300 mb-1">The Hard-Cost Rule</p>
              <p className="text-sm text-slate-400">
                Nothing in Cornerstone stores a default or made-up cost. All cost flows from
                accepted vendor pricing — or from an explicit Allowance the builder sets as a
                placeholder. A line with no awarded bid shows $0 / needs pricing rather than
                pulling from a default cost library. Every dollar is either real or explicitly flagged.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why scope-filtered pickers stop miskeying
          </h2>

          <p>
            Miskeyed costs — a framing line filed under plumbing, a labor item in a materials
            bucket — are more common than most builders realize because the error often doesn&apos;t
            surface until a draw request or a job cost report shows a trade wildly over or under
            budget.
          </p>

          <p>
            Scope-filtered pickers remove the opportunity. When you&apos;re inside the Plumbing
            scope bucket, the Parts list only shows plumbing materials. The Electrical bucket
            shows electrical materials. A builder can&apos;t misfile a HVAC part into a Concrete
            scope because the HVAC part simply doesn&apos;t appear in the Concrete picker.
          </p>

          <p>
            This also speeds up data entry. Instead of scrolling a full catalog of hundreds of
            parts, a superintendent sees only the 20-30 items relevant to the trade they&apos;re
            budgeting. The right options rise to the top.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Allowances: honest placeholders for un-bid line items
          </h2>

          <p>
            Not every line in a budget has a real bid behind it at plan-time. Appliances, finish
            fixtures, landscaping, builder fees — these often get quoted later. Most tools handle
            this one of two ways: they either force a fake bid entry or let the builder type a
            number that looks like a real cost but isn&apos;t traceable to anything.
          </p>

          <p>
            Cornerstone uses an Allowance: a line explicitly labeled as a placeholder. It sits
            in the same scope bucket as the vendor-priced lines, but it&apos;s clearly marked as
            an estimate. When the real bid arrives, the builder replaces the Allowance with a
            Part or Scope Item and the budget updates from the accepted vendor price — no
            double-counting, no leftover placeholder lines.
          </p>

          <p>
            The distinction matters at draw time. A lender or owner reviewing the Master Cost
            Budget can see which lines are confirmed (vendor-priced) and which are still
            estimates (Allowance). Nothing is presented as firm that isn&apos;t.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How scope-first Area Costs connect to the broader purchasing flow
          </h2>

          <p>
            Area Costs don&apos;t live in isolation. They sit at the end of a{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing flow
            </Link>{" "}
            that starts with vendor bids and ends with POs, change orders, and QuickBooks sync.
            The scope buckets in Area Costs define the cost structure; bid requests go out by
            scope so vendors get only the trades relevant to their work; awarded bids flow
            into the scope bucket as the priced Part or Scope Item lines.
          </p>

          <p>
            That connection is what makes the hard-cost rule enforceable. If a line in the
            Framing bucket shows $0 / needs pricing, a purchaser knows exactly what&apos;s
            missing: a framing bid hasn&apos;t been awarded yet. The budget structure and the
            bid workflow share the same scope vocabulary, so there&apos;s no translation layer
            between &ldquo;what we budgeted&rdquo; and &ldquo;what we bid.&rdquo;
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                From bid to budget — the scope stays consistent
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { step: "Bid request sent", detail: "Scoped to Framing — vendor only sees framing items" },
                { step: "Bid submitted & awarded", detail: "Accepted bid creates vendor pricing for Framing scope" },
                { step: "Part added to scope bucket", detail: "Framing bucket Part picks up the awarded price automatically" },
                { step: "PO generated", detail: "Framing PO carries the scope, lot, community, cost code" },
                { step: "QBO sync", detail: "PO and Bill memo: community · lot · address · PO# · Framing" },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 grid grid-cols-[1.2fr_2fr] gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white text-xs">{row.step}</span>
                  </div>
                  <div className="text-slate-400 text-xs">{row.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman AI can build scope-first Area Costs by chat
          </h2>

          <p>
            Builders who want to set up Area Cost structure without clicking through each
            picker manually can ask{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            to build it. Foreman creates area costs and adds scope-filtered Parts and Scope
            Items by chat — following the exact same scope-first, vendor-priced flow a
            purchaser would use by hand. The hard-cost rule holds whether a human or Foreman
            builds the structure: no default costs, prices pulled only from accepted vendor bids,
            and lines with no awarded bid left at $0 / needs pricing.
          </p>

          <p>
            This is particularly useful at the start of a new community build, when the cost
            structure needs to be replicated across multiple floorplans quickly. Ask Foreman to
            set up the standard scope buckets and it creates the skeleton — a purchaser then
            fills it in as bids come back from vendors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What this looks like vs. a flat budget
          </h2>

          <p>
            In a flat spreadsheet budget, a builder might have 80 rows of mixed trades, all
            in one tab. Costs get misrouted, totals don&apos;t roll up cleanly by trade, and
            changing a vendor price means hunting across rows that might not be clearly labeled.
          </p>

          <p>
            In Cornerstone, those same 80 lines are organized into scope buckets — 12 Framing
            lines, 9 Plumbing, 14 Electrical, and so on. Each bucket&apos;s total rolls up
            to the Master Cost Budget by trade. A draw request for the Framing scope produces
            exactly the right number without any manual aggregation. A cost code report for
            the month groups naturally by scope bucket.
          </p>

          <p>
            When a trade&apos;s vendor bid changes, the purchaser updates the accepted pricing
            for that scope and every Part in that bucket reprices from the new bid — one update,
            the whole scope reflects it.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Build budgets that trace every dollar back to a real bid.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s scope-first Area Costs keep every cost filed under its trade,
              priced from accepted vendor bids, and honest about what hasn&apos;t been bid yet.
              Request early access to see the purchasing workflow end-to-end.
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
