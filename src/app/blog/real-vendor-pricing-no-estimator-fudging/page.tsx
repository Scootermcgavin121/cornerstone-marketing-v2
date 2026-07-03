import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/real-vendor-pricing-no-fudging.png";
const heroImageAlt =
  "Construction estimate accuracy software — real vendor pricing with no filler for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Every Line Item Is Real: Construction Budgets Without Estimator Fudging",
  slug: "real-vendor-pricing-no-estimator-fudging",
  description:
    "Filler pricing and fake labor splits hide the truth in construction budgets. See how Cornerstone traces every dollar to real vendor pricing and takeoff parts.",
  datePublished: "2026-07-01",
});

export const metadata: Metadata = {
  title:
    "Every Line Item Is Real: Construction Budgets Without Estimator Fudging — Cornerstone PM™ Blog",
  description:
    "Filler pricing and fake labor splits hide the truth in construction budgets. See how Cornerstone traces every dollar to real vendor pricing and takeoff parts.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/real-vendor-pricing-no-estimator-fudging",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 691,
          height: 385,
        alt: heroImageAlt,
      },
    ],
  },
};

const fillerProblems = [
  {
    icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    title: "The change order you can't justify",
    body: "When material cost is synthetic — a round number the estimator typed in — you can't prove to the buyer that a price increase reflects real conditions. The conversation becomes adversarial because neither side has a source to point to.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
    title: "Labor splits that drift silently",
    body: "Many tools require a material/labor split on every line item. Estimators invent one — 60/40, 70/30, whatever feels right — and never revisit it. Over dozens of homes, those invented splits accumulate into systematic margin error that nobody can trace back to a cause.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-orange-400" />,
    title: "The re-bid that overwrites everything",
    body: "When a vendor submits a new bid and the estimator imports it manually, filler lines get duplicated instead of replaced. The budget suddenly shows two plumbing scopes, one real and one stale, and nobody is sure which to trust.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-slate-400" />,
    title: "Buyer-facing numbers that can't be explained",
    body: "A buyer asks why the cabinet upgrade is $4,800 more than the standard package. If the original cabinet number is filler, there is no honest answer. Builders in this position either absorb the question or absorb the upgrade cost.",
  },
];

const comparisonRows = [
  {
    aspect: "Material source",
    cornerstone: "Blueprint AI takeoff — traced to actual parts",
    typical: "Estimator-entered round numbers",
  },
  {
    aspect: "Labor rates",
    cornerstone: "Real vendor pricing from awarded bids",
    typical: "Synthetic material/labor split",
  },
  {
    aspect: "Re-import behavior",
    cornerstone: "Replacement — no duplicates",
    typical: "Duplication — stale lines persist",
  },
  {
    aspect: "Budget traceability",
    cornerstone: "Every dollar links to a vendor and a scope",
    typical: "No audit trail on manually entered lines",
  },
  {
    aspect: "Change order clarity",
    cornerstone: "Delta against confirmed bid is visible",
    typical: "No baseline to measure against",
  },
];

export default function RealVendorPricingPage() {
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
          width={691}
          height={385}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Every Line Item Is Real: Construction Budgets Without Estimator Fudging
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 1, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM removed filler pricing app-wide. Every material line traces to an actual
            takeoff part. Every labor line traces to a real vendor bid. When a number is in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              your Master Cost Budget
            </Link>
            , you can explain exactly where it came from.
          </p>

          <p>
            Most construction estimating software has a dirty secret: a significant share of the
            numbers in a typical budget were typed in by an estimator who was making an educated
            guess. Filler pricing — round numbers, synthetic material/labor splits, placeholder
            totals copied from last year&apos;s job — is so common that most builders have stopped
            noticing it. Until a change order surfaces, a margin report doesn&apos;t close, or a buyer
            asks a question that can&apos;t be answered honestly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is filler pricing, exactly?
          </h2>

          <p>
            Filler pricing is any budget number that doesn&apos;t trace back to an actual source. It
            takes several forms in production home building:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Placeholder totals</strong> — a scope line where the
              estimator typed &ldquo;$12,000 framing&rdquo; because that&apos;s roughly what it was last time
            </li>
            <li>
              <strong className="text-white">Synthetic labor splits</strong> — a tool requiring
              material/labor percentages that nobody measured, just invented
            </li>
            <li>
              <strong className="text-white">Copied estimates</strong> — last year&apos;s budget
              copy-pasted into this year&apos;s project with no reconciliation against current vendor
              pricing
            </li>
            <li>
              <strong className="text-white">Default pricing from the software</strong> — some
              platforms pre-populate cost lines with national averages that have never matched your
              market or your vendors
            </li>
          </ul>

          <p>
            Individually, any one filler line looks harmless. Across a 50-home year, the
            accumulated variance between filler numbers and reality is a meaningful margin problem
            — one that shows up at reconciliation when it&apos;s too late to fix.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does filler pricing cause real problems?
          </h2>

          <div className="not-prose space-y-4 my-6">
            {fillerProblems.map((item, i) => (
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

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM eliminate filler pricing?
          </h2>

          <p>
            The fix isn&apos;t disciplined estimating. It&apos;s a system that makes filler pricing
            structurally impossible because every number has a required source. Here&apos;s how
            the three layers work together:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            Layer 1: Blueprint AI supplies the material quantities
          </h3>

          <p>
            Blueprint AI reads your floor plan PDF and extracts 130+ material scopes — framing
            lumber, concrete, windows, fixtures, finishes — in under 60 seconds, mapped to{" "}
            <Link
              href="/blog/auto-quantity-scope-items-square-footage"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              auto-quantity scope items
            </Link>{" "}
            tied to square footage. The material quantity on every scope line isn&apos;t a guess. It
            is a calculated number drawn from the actual floor plan geometry and a real parts
            catalog. When you price the Magnolia plan, the lumber scope reflects what the Magnolia
            plan actually frames — not what a similar plan framed two years ago.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            Layer 2: Vendor bids supply the rates
          </h3>

          <p>
            Material quantities without real vendor rates are still filler. Cornerstone&apos;s{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor bid request system
            </Link>{" "}
            auto-generates scope-filtered Excel templates and sends them to your vendors. When a
            vendor submits a bid through the no-login portal, their pricing lands directly against
            the scope items in your budget. Labor rates and material unit costs come from an actual
            vendor submitting for actual work — not a synthetic split the estimator typed.
          </p>

          <p>
            And because awarded bids lock on acceptance, that vendor&apos;s rate is the number in
            your budget until a formal change goes through the system. No invoice creep. No silent
            revisions. The rate is traceable to a specific vendor and a specific bid date.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            Layer 3: Bid Import AI replaces, not duplicates
          </h3>

          <p>
            One of the ways filler creeps back in is through re-import. A vendor updates their
            pricing. The estimator imports the new bid. The old line stays in the budget alongside
            the new one, and suddenly there are two framing scopes. Cornerstone&apos;s{" "}
            <Link
              href="/blog/bid-import-ai-takeoff-pricing-modes"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Bid Import AI
            </Link>{" "}
            handles re-imports with replacement logic — it matches scope, replaces pricing, and
            doesn&apos;t leave stale lines behind. The budget stays clean through every bid round.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does traceability actually mean for your margins?
          </h2>

          <p>
            When every number traces to a source, three things become possible that aren&apos;t
            possible with filler budgets:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Honest change order conversations.</strong>{" "}
              When a scope cost changes, you can show the buyer exactly what the original bid was,
              who submitted it, and what the new number is. The conversation is about real
              conditions, not a defended guess.
            </li>
            <li>
              <strong className="text-white">Accurate plan-repeat pricing.</strong>{" "}
              When you build the Magnolia plan in a new community, the budget for that plan is built
              from confirmed vendor bids — not estimates carried forward from another community
              where labor and material costs might differ significantly.
            </li>
            <li>
              <strong className="text-white">Margin reports that close cleanly.</strong>{" "}
              Because every line traces to either a takeoff part or a vendor bid, reconciliation
              at close of construction isn&apos;t an archaeology project. The delta between budget
              and actual is a real number, and the source of any variance is findable.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Construction estimate accuracy: Cornerstone PM vs. typical software
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <span>Aspect</span>
              <span className="text-center">Cornerstone PM</span>
              <span className="text-center">Typical software</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300 font-medium">{row.aspect}</div>
                <div className="px-5 py-3.5 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">{row.cornerstone}</span>
                </div>
                <div className="px-5 py-3.5 flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  <span className="text-slate-500 text-xs leading-relaxed">{row.typical}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this connect to the Design Center?
          </h2>

          <p>
            Filler pricing doesn&apos;t only affect the cost budget — it contaminates the buyer-facing
            design center too. If the base cabinet cost is a filler number, the upgrade pricing
            for Premium Cabinets is calculated off a fiction. Buyers end up paying for the gap
            between the real cost and the filler, or builders absorb it quietly.
          </p>

          <p>
            Cornerstone removed filler pricing app-wide, which means{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            upgrade pricing traces to real vendor bids and real takeoff parts just like the cost
            budget does. A buyer who upgrades to a Premium cabinet package is paying a number
            grounded in actual material and labor pricing — not an estimator&apos;s round-number guess
            padded for safety.
          </p>

          <p>
            That integrity carries through to the spec-level control Cornerstone ships: builders
            can promote any standard finish to a paid upgrade by changing its spec level from
            Standard to Upgrade I, II, or Premium. The upgrade price is calculated from the same
            real cost foundation as everything else.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where does this fit in the full purchasing workflow?
          </h2>

          <p>
            Real vendor pricing is the confirmation step in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s end-to-end purchasing system
            </Link>
            . The full chain looks like this:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4">
            <li>Blueprint AI extracts real material quantities from the floor plan PDF</li>
            <li>
              Auto-quantity scope items calculate sqft-driven costs (frame labor, paint, cleaning)
              automatically across every floorplan and structural option
            </li>
            <li>
              <Link
                href="/blog/construction-allowances-master-cost-budget-home-builders"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Allowances
              </Link>{" "}
              hold placeholder budget for un-bid items so the Master Cost Budget stays complete
              without filler
            </li>
            <li>
              Vendor bid requests go out with scope-filtered Excel templates — each trade sees
              only their scope
            </li>
            <li>
              Vendors submit real pricing through the no-login portal; awarded bids lock and
              replace allowance placeholders in the budget
            </li>
            <li>
              Bid Import AI handles re-bids with replacement logic — no duplicate lines, no
              stale filler
            </li>
          </ol>

          <p>
            The result is a budget where you can click any line item and answer &ldquo;where did this
            number come from?&rdquo; — every time, with a real answer.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Every dollar. Every source. No filler.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM traces every budget line to a real vendor bid or a real takeoff part.
              Get the construction estimate accuracy your margins depend on.
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
