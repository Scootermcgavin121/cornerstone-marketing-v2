import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/same-floorplan-two-communities.png";
const heroImageAlt =
  "Community based pricing home builder software — the same floorplan priced differently across two communities";

const blogSchema = buildBlogPostSchema({
  title: "Same Floorplan, Two Communities, Two Different Costs",
  slug: "same-floorplan-two-communities-different-costs-home-builders",
  description:
    "The Hawthorne costs more in one community than the other and that is correct. How production builders price one floorplan across many communities.",
  datePublished: "2026-08-18",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/design",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Why does the same floorplan cost different amounts in different communities?",
    a: "The framing contractor who won one community may not have been the lowest bid in the next. Lot sizes differ. Local sales tax rates differ. Landscaping scopes vary by terrain. A single global cost per plan averages those differences into a number that is wrong in every community. Cornerstone PM awards vendor bids per community so each community carries its own accepted pricing for every trade.",
  },
  {
    q: "How does community-based pricing work in Cornerstone PM?",
    a: "When you send a bid request, you select the floorplans, scopes, and vendors. When a bid comes back and you award it, the award is recorded at the community level. The same Hawthorne plan in Riverdale carries Martinez Framing's rate; in Oakmont it carries Summit Framing Co's rate. The budgets never share a number they should not.",
  },
  {
    q: "Can the design center show different upgrade prices per community?",
    a: "Yes. Upgrade pricing in the design center is community-aware. An option that costs one amount as an upgrade in one community can be priced differently in another, while the option catalog itself stays shared across the whole floorplan. Buyers in each community see the correct upgrade price for where they are building.",
  },
  {
    q: "What happens to a scope with no awarded vendor bid?",
    a: "It shows as $0 / needs pricing rather than inheriting a number from another community or from a stored default. Cornerstone PM enforces a hard cost rule platform-wide: nothing carries a stored or invented cost. Every dollar traces back to accepted vendor pricing, and a scope without an awarded bid makes that gap visible instead of hiding it.",
  },
  {
    q: "How does per-community pricing show up in QuickBooks?",
    a: "Each community maps to a QuickBooks Online Customer and each home maps to a Project (or sub-customer Job on tiers without Projects). Purchase orders, bills, and change orders sync one-way from Cornerstone to QBO with community, lot, address, PO number, and cost code in every memo. The per-community P&L is visible inside QuickBooks without any manual journal entries.",
  },
  {
    q: "Can a builder run two different vendors for the same scope across communities?",
    a: "Yes — and this is deliberate. Cornerstone PM supports multiple accepted bids per scope so a builder can have one framing vendor in Community A and a different one in Community B, both at their respective awarded prices. The decision is recorded, locked after award, and flows into every downstream budget and PO.",
  },
  {
    q: "Does this mean every community needs its own bid round?",
    a: "Not necessarily. You can invite the same vendors to bid on multiple communities in one request and award them per community in the results. If the same vendor wins both, the same pricing applies. If different vendors win, each community gets its own rate. The system handles both outcomes without any workarounds.",
  },
];

const compareRows = [
  { feature: "Vendor bids awarded per community (not globally)", cpm: true, other: false },
  { feature: "Same floorplan reprices independently per community", cpm: true, other: false },
  { feature: "Community-aware design center upgrade pricing", cpm: true, other: false },
  { feature: "Scope-first area costs filed by trade", cpm: true, other: false },
  { feature: "Zero stored or default costs (hard cost rule)", cpm: true, other: false },
  { feature: "QuickBooks Community = Customer, Home = Project mapping", cpm: true, other: false },
  { feature: "Multiple accepted bids per scope across communities", cpm: true, other: false },
  { feature: "Global flat cost per plan (shared across all communities)", cpm: false, other: true },
];

export const metadata: Metadata = {
  title:
    "Same Floorplan, Two Communities, Two Different Costs — Cornerstone PM™ Blog",
  description:
    "The Hawthorne costs more in one community than the other and that is correct. How production builders price one floorplan across many communities.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/same-floorplan-two-communities-different-costs-home-builders",
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

export default function SameFloorplanTwoCommunitiesPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Same Floorplan, Two Communities, Two Different Costs
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 18, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The Hawthorne sells in Riverdale at one cost and in Oakmont at another —
            and that is not a mistake. The framer who won Riverdale lost Oakmont. The
            lots are different sizes. The sales tax rates are not the same.{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s production design center
            </Link>{" "}
            prices vendor awards per community, so each community carries the costs it
            actually earned — not an average inherited from somewhere else.
          </p>

          <p>
            A single global cost per plan is wrong in at least two of every three
            communities where it is used. The question is whether the software makes
            that visible or hides it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one number per plan doesn&apos;t work
          </h2>

          <p>
            Production home builders repeat the same floorplans across multiple
            communities, and that repetition is their competitive edge. The Hawthorne
            gets built many times because the scope is understood, the schedule is
            templated, and the trades know the work. But the pricing is not the same
            everywhere, and it should not be.
          </p>

          <p>
            A builder running three communities might see the same framing subcontractor
            bid $4.25 per square foot in one community and $4.75 in another — because
            the drive time is different, the site conditions differ, or a competitor bid
            more aggressively in one area. That $0.50 difference on a 2,400-square-foot
            plan is $1,200 per home before a single other scope is touched. Averaged
            across communities, that number is wrong in every community. Carried as a
            global cost, it silently overstates margin in one place and understates it
            in another.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How community-based vendor awards work
          </h2>

          <p>
            When a bid request goes out in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>
            , the builder selects the floorplans, scopes, vendors, and deadline.
            Vendors submit through a no-login portal — one click from the email, no
            account required. When the bids come back, they appear side-by-side for
            comparison, and the award is made per community.
          </p>

          <p>
            Martinez Framing wins Riverdale at $4.25 per square foot. Summit Framing
            Co wins Oakmont at $4.75. Both awards are accepted, both are locked, and
            neither can be quietly revised afterward. The Hawthorne plan now carries
            two different framing costs — one per community — and every home of that
            plan built in each community will be priced against the vendor who won
            there.
          </p>

          <p>
            Nothing carries a stored or default cost. Cornerstone enforces a
            hard cost rule platform-wide: a scope item with no accepted vendor bid
            shows as <strong className="text-white">$0 / needs pricing</strong> rather
            than inheriting a number from another community or from an estimator&apos;s
            memory. That visibility is the point — a gap in the budget is better than
            a confident wrong number.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Scope-first area costs, filed by trade
          </h2>

          <p>
            Area costs in Cornerstone are scope-first: you pick or create a scope
            first, then add scope-filtered parts, scope items, or allowances under
            it. The bucket title is the scope — Framing, Plumbing, Electrical,
            Landscaping — so every cost is filed under the trade it belongs to, and
            pickers are filtered to that trade to prevent miskeying.
          </p>

          <p>
            This structure exists at the community level. Riverdale carries its own
            framing scope with Martinez Framing&apos;s accepted pricing. Oakmont carries
            its own framing scope with Summit Framing Co&apos;s accepted pricing. The
            option catalog is shared at the floorplan level; the cost sources are
            independent per community.
          </p>

          {/* Comparison table */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Community pricing capabilities
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {compareRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-3.5"
                >
                  <span className="text-sm text-slate-300">{row.feature}</span>
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="flex flex-col items-center gap-0.5 w-16">
                      <span className="text-xs text-slate-500">Cornerstone</span>
                      {row.cpm ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-0.5 w-16">
                      <span className="text-xs text-slate-500">Global cost</span>
                      {row.other ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Design center upgrade pricing by community
          </h2>

          <p>
            The same per-community logic applies to the{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>
            . Upgrade pricing is community-aware: a kitchen countertop upgrade that
            costs one amount as an add-on in Riverdale can be priced differently in
            Oakmont. The option catalog — the 64 curated Designer Packages across
            7 categories, the flooring classes, the exclusion groups — stays shared
            at the floorplan level. Only the upgrade prices differ.
          </p>

          <p>
            This matters at the design center appointment. A buyer in Riverdale sees
            the Oakmont granite tier upgrade at the Riverdale price, not a community-average
            that is technically correct nowhere. The same spec-level control that lets
            builders promote any standard finish to a paid upgrade with one change
            applies per community, so the design center is honest about what things
            actually cost in the community where the home will be built.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What this looks like in QuickBooks
          </h2>

          <p>
            Each community in Cornerstone maps to a QuickBooks Online Customer — so
            Riverdale Community is a QBO Customer and Oakmont Community is a separate
            QBO Customer. Each home maps to a Project (or sub-customer Job on tiers
            without Projects) under the community Customer. Purchase orders, bills, and
            change orders sync one-way from Cornerstone to QuickBooks, carrying community,
            lot, address, PO number, and cost code in every memo.
          </p>

          <p>
            The result is real per-community P&amp;L inside QuickBooks without journal
            entries. The Riverdale margin and the Oakmont margin are distinct line items
            in the books, matching the distinct vendor costs on the build side. The
            builder does not need to reconstruct that picture at month end — it is
            already there.
          </p>

          <p>
            Cornerstone stays the source of truth and the sync runs one direction only.
            Changes made in QuickBooks never overwrite Cornerstone — the awarded
            pricing, the budget, and the community assignments live in the platform
            that manages the build.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The honest answer when a scope has no bid
          </h2>

          <p>
            A new community often has awarded pricing for framing and plumbing but
            nothing yet for landscaping. In most tools, that gap is filled with a
            number from somewhere — a prior community, an estimator&apos;s instinct,
            a default cost table. Cornerstone shows it as $0 / needs pricing.
          </p>

          <p>
            That is not a failure state. It is the correct answer until a vendor
            submits and a bid is awarded. An allowance — the only line that can carry
            a direct dollar as a budget placeholder — can hold the landscaping slot
            while the bid round runs. When the real bid lands, the allowance is
            replaced and the budget updates. The builder knows exactly what is priced
            and what is still open, without any number being quietly borrowed from
            a community where the terrain is different.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Price the plan right in every community.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Community-assigned vendor awards, scope-first area costs, and per-community
              design center pricing — all connected to QuickBooks with per-home P&amp;L
              built in.
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
        items={faqs}
        title="Community-Based Pricing — FAQ"
        subtitle="Common questions about pricing the same floorplan differently across communities in production home builder software."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
