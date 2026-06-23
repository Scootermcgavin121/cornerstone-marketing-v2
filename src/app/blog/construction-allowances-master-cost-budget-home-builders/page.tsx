import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle, DollarSign, RefreshCw } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/construction-allowances.png";
const heroImageAlt =
  "Construction allowances software — budget placeholders flowing into the Master Cost Budget for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Construction Allowances Done Right: Placeholder Budgets That Flow Into Your Real Cost Plan",
  slug: "construction-allowances-master-cost-budget-home-builders",
  description:
    "Stop guessing on un-bid line items. Cornerstone's allowance system sets budget placeholders that flow straight into your Master Cost Budget per floorplan or globally.",
  datePublished: "2026-06-23",
});

export const metadata: Metadata = {
  title:
    "Construction Allowances Done Right: Placeholder Budgets That Flow Into Your Master Cost Plan — Cornerstone PM™ Blog",
  description:
    "Stop guessing on un-bid line items. Cornerstone's allowance system sets budget placeholders that flow straight into your Master Cost Budget per floorplan or globally.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-allowances-master-cost-budget-home-builders",
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
    q: "What is a construction allowance in home building software?",
    a: "A construction allowance is a budget placeholder for a line item that hasn't been formally bid yet — appliances, landscaping, specialty lighting, or anything else where the builder needs a number in the budget before real vendor pricing is available. In Cornerstone PM, allowances are first-class budget items that flow directly into the Master Cost Budget per floorplan or globally across all plans.",
  },
  {
    q: "How does Cornerstone PM's allowance system work?",
    a: "Builders set an allowance amount for any non-bid scope item, then choose whether to apply it per floorplan (the 1,800 sqft Magnolia gets $1,500 appliance allowance; the 2,400 sqft Summit gets $2,000) or globally across all plans. The allowance flows into the Master Cost Budget immediately, holding a real dollar slot. When the actual bid lands, the allowance is replaced — not duplicated — so the budget stays clean.",
  },
  {
    q: "What happens to the allowance when the real bid comes in?",
    a: "When a vendor submits a bid that covers the allowance scope, the bid import replaces the allowance amount. There is no double-counting and no manual removal step. Cornerstone's Bid Import AI knows the difference between a placeholder and a bid, so re-importing a vendor's pricing update replaces instead of duplicating — the same anti-duplication logic that governs all bid imports.",
  },
  {
    q: "Can I set different allowance amounts per floorplan?",
    a: "Yes. Allowances can be applied per floorplan — different amounts for different plans — or set globally when the same dollar figure applies everywhere. Per-floorplan allowances make sense for items that scale with home size (appliance packages, interior paint, landscaping). Global allowances work well for flat-fee items like home warranties or survey costs.",
  },
  {
    q: "Why do most home builders still use spreadsheets for allowances?",
    a: "Most construction software treats allowances as an afterthought — a text note on a line item, a manual workaround, or simply absent from the budget model. Builders who can't trust their software to hold a placeholder go back to spreadsheets. The problem is that spreadsheets don't connect to the actual budget, so allowance variance (the difference between placeholder and real bid) never surfaces automatically. Cornerstone puts allowances in the same budget structure as real bids so variance is visible the moment the bid lands.",
  },
  {
    q: "How does the allowance system connect to the Master Cost Budget?",
    a: "Every allowance — per floorplan or global — shows up as a named line item in the Master Cost Budget alongside bid-backed scope items. The budget view distinguishes between allowances (placeholders) and confirmed bids so you can see at a glance what's locked pricing and what's still estimated. When real bids replace allowances, the Master Cost Budget updates automatically.",
  },
  {
    q: "Is the construction allowances feature available on all Cornerstone PM plans?",
    a: "Yes, the Allowances system is available on all paid Cornerstone PM plans. It's part of the core purchasing and budgeting infrastructure alongside bid templates, vendor bid requests, and the Master Cost Budget — not a premium add-on.",
  },
];

const allowancePainPoints = [
  {
    icon: <AlertCircle className="w-4 h-4 text-red-400" />,
    title: "The sticky-note workaround",
    body: "Builders write allowance amounts on a whiteboard or in a shared note, then someone has to manually subtract them from the formal budget. When the real bid lands, the note gets forgotten and the allowance stays in the spreadsheet.",
  },
  {
    icon: <DollarSign className="w-4 h-4 text-amber-400" />,
    title: "Fake bids to hold the slot",
    body: "Some platforms have no allowance concept at all, so builders create a placeholder 'bid' from a fake vendor just to get a number into the system. Managing fake vendor records and cleaning them up when real pricing arrives is busywork at scale.",
  },
  {
    icon: <RefreshCw className="w-4 h-4 text-orange-400" />,
    title: "Double-counted totals",
    body: "When the real bid arrives and gets added alongside the placeholder, both numbers end up in the budget total — inflating costs until someone catches and removes the duplicate. On a 50-home run, this happens constantly.",
  },
  {
    icon: <AlertCircle className="w-4 h-4 text-slate-400" />,
    title: "No visibility into allowance variance",
    body: "The gap between what you budgeted as an allowance and what the vendor actually bid is real margin data. Without a proper allowance system, that variance lives in a spreadsheet nobody checks — or nowhere at all.",
  },
];

const allowanceVsCompetitors = [
  { feature: "Native allowance placeholders", cornerstone: true, typical: false },
  { feature: "Per-floorplan allowance amounts", cornerstone: true, typical: false },
  { feature: "Global (all-plans) allowance amounts", cornerstone: true, typical: false },
  { feature: "Flows into Master Cost Budget automatically", cornerstone: true, typical: false },
  { feature: "Replaced (not duplicated) when real bid lands", cornerstone: true, typical: false },
  { feature: "Allowance vs. bid visibility in budget view", cornerstone: true, typical: false },
];

export default function ConstructionAllowancesPage() {
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
            Construction Allowances Done Right: Placeholder Budgets That Flow Into Your Real Cost Plan
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 23, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s allowance system lets builders set budget placeholder amounts
            for any non-bid line item — appliances, landscaping, specialty fixtures — apply them
            per floorplan or globally, and have them flow straight into the Master Cost Budget.
            When the real bid lands, the allowance is replaced automatically. No double-counting,
            no sticky notes, no fake vendor records.
          </p>

          <p>
            Every production builder has items in the budget that don&apos;t have real vendor pricing
            yet. Appliances get spec&apos;d before they get bid. Landscaping varies by lot and sits
            in rough estimates for months. Specialty lighting, window treatments, mailbox packages —
            there are always a handful of line items that need a dollar in the budget before a
            subcontractor has touched them. The question is: what does your software do with those
            numbers?{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s full purchasing system
            </Link>{" "}
            treats allowances as first-class budget items — not workarounds.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does construction allowance tracking break in most software?
          </h2>

          <p>
            The root problem is that most construction software was built around bids and purchase
            orders — confirmed numbers from real vendors. Allowances don&apos;t fit that model neatly,
            so they get handled with workarounds that create their own mess.
          </p>

          <div className="not-prose space-y-4 my-6">
            {allowancePainPoints.map((item, i) => (
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
            Multiply any of those by 50 or 100 homes a year, across 12 floorplans in three
            communities, and the allowance problem becomes a budget integrity problem. The Master
            Cost Budget stops being a source of truth and becomes a document you&apos;re constantly
            reconciling against notes and spreadsheets.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM&apos;s allowance system work?
          </h2>

          <p>
            Allowances in Cornerstone PM are native budget items — they live in the same data
            structure as bid-backed scope items, not in a separate notes field or a workaround
            vendor. Setting one up takes three steps:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Name the allowance and set the amount.</strong>{" "}
              Give it a clear label (e.g., &ldquo;Appliance Package Allowance,&rdquo; &ldquo;Landscaping Allowance —
              Standard Lot&rdquo;) and the dollar amount that reflects your best current estimate or
              your standard budget target.
            </li>
            <li>
              <strong className="text-white">Choose per-floorplan or global.</strong>{" "}
              Per-floorplan lets you set different amounts for different plans — the 1,800 sqft
              Magnolia gets a $1,500 appliance allowance while the 2,600 sqft Summit gets $2,200.
              Global applies the same number across every plan in the community when the item
              doesn&apos;t vary by size.
            </li>
            <li>
              <strong className="text-white">It flows into the Master Cost Budget immediately.</strong>{" "}
              No export, no manual entry into a separate budget sheet. The allowance shows up as a
              named line item in the budget view, clearly distinguished from bid-backed items so you
              can see what&apos;s confirmed pricing and what&apos;s still estimated.
            </li>
          </ol>

          <p>
            When the real bid arrives — whether through the{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor bid portal
            </Link>{" "}
            or a{" "}
            <Link
              href="/blog/bid-import-ai-takeoff-pricing-modes"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Bid Import AI upload
            </Link>{" "}
            — the allowance is replaced, not duplicated. The budget updates in place. You can see
            the variance between what you budgeted as a placeholder and what the vendor actually
            bid — which is real margin intelligence, not just an accounting detail.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does &quot;flows into the Master Cost Budget&quot; actually mean?
          </h2>

          <p>
            The Master Cost Budget in Cornerstone PM is a per-floorplan, community-aware budget
            that aggregates all scope items — auto-quantity scopes tied to square footage, vendor
            bid lines, design option pricing, and now allowances — into a single cost picture.
          </p>

          <p>
            When an allowance is in the budget, it&apos;s real money in that plan&apos;s cost model. Your
            total cost-to-build number is accurate because it includes the estimated cost of every
            item, not just the items that already have confirmed bids. That matters for:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Pricing decisions</strong> — you&apos;re setting home
              sale prices against a complete budget, not a partial one
            </li>
            <li>
              <strong className="text-white">Draw schedules</strong> — construction draws align
              to actual projected costs, including the placeholders
            </li>
            <li>
              <strong className="text-white">Variance tracking</strong> — when real bids land,
              the difference between the allowance and the actual number surfaces automatically in
              the budget view
            </li>
            <li>
              <strong className="text-white">Buyer transparency</strong> — allowances for
              buyer-selected items (appliances, certain finishes) can flow through to the design
              center pricing so buyers understand what&apos;s included vs. upgraded
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Allowances vs. bid-backed scope items: side by side
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white">
                Construction allowance features: Cornerstone PM vs. typical construction software
              </h3>
            </div>
            {allowanceVsCompetitors.map((row) => (
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
            How allowances fit with auto-quantity scope items
          </h2>

          <p>
            Cornerstone PM&apos;s purchasing system has two complementary tools for handling costs
            that don&apos;t come from a vendor bid:
          </p>

          <p>
            <strong className="text-white">Auto-quantity scope items</strong> handle costs that
            scale predictably with square footage — frame labor per sqft, paint per sqft, slab
            work per sqft. You define the rate once, and the system applies it automatically to
            every floorplan, every structural option, every community. These are calculated
            automatically from plan dimensions.
          </p>

          <p>
            <strong className="text-white">Allowances</strong> handle costs that don&apos;t scale from
            a formula — appliance packages, site-specific landscaping, specialty fixtures, lot
            premiums. You set a dollar amount (per floorplan or globally), and the system holds
            that slot in the budget until the real bid replaces it.
          </p>

          <p>
            Together, these two tools mean your Master Cost Budget is complete before a single
            bid comes back from a vendor. You&apos;re pricing homes against a real projected cost
            model — not a partial one with gaps where the bids haven&apos;t arrived yet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            A practical example: the appliance package on three floorplans
          </h2>

          <p>
            You&apos;re building three floorplans in a new community — the Magnolia (1,800 sqft),
            the Summit (2,200 sqft), and the Ridgeline (2,600 sqft). Appliances aren&apos;t bid yet
            but you need to price the homes today.
          </p>

          <p>
            In Cornerstone PM:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>Magnolia: Appliance Package Allowance → <strong className="text-white">$1,500</strong></li>
            <li>Summit: Appliance Package Allowance → <strong className="text-white">$1,900</strong></li>
            <li>Ridgeline: Appliance Package Allowance → <strong className="text-white">$2,400</strong></li>
          </ul>

          <p>
            All three flow into the Master Cost Budget for each plan immediately. You price your
            homes with complete cost models. Three weeks later, your appliance vendor submits
            actual pricing through the bid portal. Bid Import AI processes it, matches the scope,
            and replaces all three allowances with the real numbers. The Master Cost Budget updates.
            You can see exactly how much you were over or under your allowance estimates —
            per plan, per community.
          </p>

          <p>
            That variance data matters. Consistently running 20% under your appliance allowance
            means you&apos;re leaving margin on the table. Running 15% over means you need to revisit
            your allowance amounts before pricing the next community. Cornerstone surfaces that
            signal automatically instead of burying it in a reconciliation spreadsheet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where allowances fit in the full purchasing workflow
          </h2>

          <p>
            Allowances are one piece of{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s end-to-end purchasing system
            </Link>{" "}
            for production home builders. The full flow looks like this:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4">
            <li>Blueprint AI extracts 130+ material scopes from a floor plan PDF in under 60 seconds</li>
            <li>Auto-quantity scope items price formula-driven costs from square footage automatically</li>
            <li>Allowances hold budget slots for non-bid items while vendor pricing is collected</li>
            <li>Vendor bid requests go out via the no-login portal with scope-filtered Excel templates</li>
            <li>Bid Import AI processes returned bids, replaces allowances, and updates the Master Cost Budget</li>
            <li>Design center option pricing flows into the budget for buyer upgrades and selections</li>
          </ol>

          <p>
            The result is a single, connected cost model — no parallel spreadsheets, no manual
            reconciliation, no budget gaps. Every line item, whether it started as a takeoff scope,
            a square-footage formula, or a placeholder allowance, ends up in the same Master Cost
            Budget with confirmed or estimated status clearly marked.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop losing margin to allowance guesswork
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s Allowances system keeps every un-bid line item in your real
              Master Cost Budget — per floorplan or globally — and replaces them automatically
              when real pricing arrives. No spreadsheets, no double-counting, no surprises.
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
        title="Construction Allowances: Common Questions"
        subtitle="What builders ask about allowance tracking, budget placeholders, and how they flow into the Master Cost Budget."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
