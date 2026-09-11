import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, DollarSign, FileSpreadsheet, Link2, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/awarded-bid-to-job-cost-budget-home-builders.png";
const heroImageAlt =
  "Construction job cost budget tracing accepted vendor bids through community awards and purchase orders";

const blogSchema = buildBlogPostSchema({
  title: "From Awarded Bid to Job-Cost Budget: Where Construction Costs Lose Their Source",
  slug: "awarded-bid-to-job-cost-budget-home-builders",
  description:
    "Trace accepted vendor pricing from bid award into community budgets and purchase orders without hidden defaults, rekeying, or unexplained cost drift.",
  datePublished: "2026-09-11",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Trace a Job-Cost Budget Back to Its Awarded Bid",
  description:
    "Follow one construction dollar from vendor response through comparison, community award, accepted pricing, the home budget, and the purchase order.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Collect vendor responses on the same scope",
      text: "Vendors respond to a scope-filtered bid request with pricing for the exact scope items they were invited to quote — no re-keying their numbers into a separate sheet.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Compare bids side-by-side",
      text: "Once two or more vendors submit, Cornerstone PM surfaces a side-by-side comparison for that scope so the builder can see every response in one place before deciding.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Award by community, not platform-wide",
      text: "The builder awards the bid to a specific community. The same scope item can go to a different vendor in a different community — awards are community-specific, not a single global winner.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lock the accepted price",
      text: "Once awarded, the price locks. Neither the builder nor the vendor can edit it after acceptance, so the number that flows forward is exactly the number that was agreed to.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Apply scope-first area costs to the home budget",
      text: "The accepted price attaches to its scope item and community, and Area Cost Pricing carries it into every home budget in that community — instead of a generic default cost standing in for real pricing.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Generate the purchase order from the same source",
      text: "The purchase order is generated from the accepted bid itself, so the PO amount, the vendor, the scope, and the community all trace back to one award — not a manually re-typed number.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "From Awarded Bid to Job-Cost Budget: Where Construction Costs Lose Their Source — Cornerstone PM™ Blog",
  description:
    "Trace accepted vendor pricing from bid award into community budgets and purchase orders without hidden defaults, rekeying, or unexplained cost drift.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/awarded-bid-to-job-cost-budget-home-builders",
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

const chainSteps = [
  { step: "01", title: "Vendor response", desc: "Pricing comes back on the exact scope items the vendor was invited to quote." },
  { step: "02", title: "Side-by-side comparison", desc: "Two or more submitted bids surface together, ready to evaluate without pulling numbers out of separate files." },
  { step: "03", title: "Community-specific award", desc: "The builder awards a vendor to one community. A different community can award the same scope to a different vendor." },
  { step: "04", title: "Accepted price locks", desc: "Once awarded, the number can't be edited by either side — what was agreed is what moves forward." },
  { step: "05", title: "Scope-first area cost", desc: "The accepted price attaches to its scope and flows into every home budget in that community automatically." },
  { step: "06", title: "Purchase order", desc: "The PO is generated straight from the award — vendor, scope, community, and price all trace back to one source." },
];

const breakpoints = [
  {
    icon: <FileSpreadsheet className="w-4 h-4 text-red-400" />,
    title: "Stale quotes copied forward",
    body: "A vendor's number from three months ago gets pasted into this quarter's budget because nobody wants to re-request pricing. The budget looks complete. It isn't current.",
  },
  {
    icon: <DollarSign className="w-4 h-4 text-red-400" />,
    title: "Default costs that look awarded",
    body: "A placeholder or catalog default fills a blank cell so the spreadsheet totals correctly. Nothing distinguishes it from a real accepted bid until someone asks where the number came from.",
  },
  {
    icon: <Link2 className="w-4 h-4 text-red-400" />,
    title: "Manual rekeying between systems",
    body: "Bid comparison lives in one file, the budget in another, and the purchase order in a third. Every hop is a chance for a typo, a dropped scope, or a number that quietly stops matching its source.",
  },
];

export default function AwardedBidToJobCostBudgetPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

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
            From Awarded Bid to Job-Cost Budget: Where Construction Costs Lose Their Source
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 11, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A job-cost budget is only trustworthy if every number in it can be traced back to a
            real, accepted vendor price. Cornerstone PM carries a dollar from vendor response
            through comparison, community award, accepted pricing, the home budget, and the
            purchase order — so a builder can always answer which vendor, which scope, and which
            award produced any given cost.
          </p>

          <p>
            Most purchasing teams can point at a total. Far fewer can explain where it came from.
            Somewhere between the bid inbox and the final budget, numbers get copied, rounded,
            defaulted, or rekeyed — and the traceability that would let anyone catch a mistake
            disappears with it. The{" "}
            <Link href="/purchasing" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              purchasing module
            </Link>{" "}
            in Cornerstone PM is built so that never has to happen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a construction cost actually move from a vendor bid to a budget?
          </h2>
          <p>
            It's a six-step chain, and each step hands the next one a number it can trust instead
            of a number it has to re-verify:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {chainSteps.map((s) => (
              <div key={s.step} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="text-3xl font-black mb-2 text-emerald-400">{s.step}</div>
                <h3 className="font-bold text-white mb-1.5 text-base">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p>
            Every step reuses the data the previous step produced. Nobody re-types the accepted
            price when the purchase order is generated — the PO is built directly from the award
            itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do most builders lose track of where a budget number came from?
          </h2>
          <p>
            Spreadsheet-based budgeting doesn't fail because anyone is careless. It fails because
            the tools force a break between where a price is decided and where it's used. A bid
            comparison lives in one tab, the community budget in another, and the purchase order in
            a completely separate document. Three common breakpoints show up almost every time:
          </p>

          <div className="not-prose space-y-3 my-6">
            {breakpoints.map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            None of these look wrong in the moment. The budget still totals correctly, the PO still
            gets sent, and the home still gets built. The cost only becomes visible when a number
            drifts far enough from reality that someone has to reconcile it by hand — and by then,
            nobody remembers which line items were real awards and which were filler.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM keep every dollar traceable?
          </h2>
          <p>
            Scope-first area costs mean pricing is attached to a specific scope item within a
            specific community, not typed loosely into a generic line. When a bid is awarded in
            Community A, that accepted price becomes the area cost for that scope in that
            community — and it carries forward into every home budget built on it. Award a
            different vendor in Community B, and Community B carries its own accepted price. There
            is no shared default sitting behind both.
          </p>
          <p>
            Because the award is the source of the area cost, and the area cost is the source of
            the home budget, and the home budget is the source of the purchase order, a builder can
            walk the chain backward from any dollar amount to the specific vendor and bid that
            produced it. That traceability is the difference between a budget that totals correctly
            and a budget a builder can actually defend.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens if a scope item doesn't have an awarded price yet?
          </h2>
          <p>
            Cornerstone PM leaves it at $0 with a needs-pricing state instead of quietly filling in
            a default that looks like a real number. A $0 line is visible and demands action. A
            default cost that happens to be close to reality is invisible — and invisible gaps are
            exactly what let budgets drift without anyone noticing until a home is under construction
            and the real vendor price shows up higher than what was budgeted.
          </p>
          <p>
            This connects directly to how bids get awarded in the first place. See{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              vendor bid requests and the no-login portal
            </Link>{" "}
            for how scope-filtered templates and side-by-side comparison feed the award step that
            starts this entire chain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does this replace a spreadsheet, or just make one more organized?
          </h2>
          <p>
            It replaces the need for one. A spreadsheet-based budget is a snapshot — accurate the
            moment someone finishes typing it, and stale the moment a vendor price changes. A
            connected chain from award to budget to purchase order stays current because there's
            only one place the price lives. Change the award, and every downstream number that
            depends on it reflects the change automatically instead of waiting for someone to
            remember to update three other files.
          </p>
          <p>
            For the full picture of how this fits into the rest of the platform — schedule,
            design selections, and job costing together — see{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>
            .
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">One source, not three copies</p>
                <p className="text-slate-400 text-sm">
                  The award, the area cost, and the purchase order all point back to the same
                  accepted bid — so there's exactly one place to check when a number looks off,
                  not three files that might disagree with each other.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does this add up to for a growing builder?
          </h2>
          <p>
            A builder running a handful of homes can usually reconstruct where a budget number came
            from by asking around. A builder running fifty homes across five communities can't — the
            chain has to hold that traceability on its own, without depending on someone's memory of
            which vendor won which scope six months ago. That's what Cornerstone PM's purchasing
            workflow is built to do: keep the line from award to budget to purchase order intact,
            every time, for every scope, in every community.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop guessing where your budget numbers came from.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM™ traces every dollar from vendor award to community budget to purchase
              order — no defaults, no rekeying, no unexplained drift.
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
