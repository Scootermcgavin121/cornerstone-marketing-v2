import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  FileSpreadsheet,
  BarChart3,
  CheckCircle,
  ClipboardList,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/construction-purchasing-workflow-bid-to-purchase-order.png";
const heroImageAlt = "Construction purchasing workflow from bid request to purchase order";

const blogSchema = buildBlogPostSchema({
  title: "From Bid Request to Purchase Order: One Connected Purchasing Workflow",
  slug: "construction-purchasing-workflow-bid-to-purchase-order",
  description:
    "Follow a construction purchase from bid request to vendor award and purchase order without rekeying scope, pricing, community, or floorplan data again.",
  datePublished: "2026-09-04",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Move a Purchase From Bid Request to Purchase Order in Cornerstone PM",
  description:
    "Follow a construction purchase from bid request through vendor response, comparison, award, and purchase order without rekeying scope, pricing, community, or floorplan data.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send the bid request",
      text: "Select floorplans, vendors, and scope items in Purchasing → Bid Requests, then send. The scope and floorplan data you've already configured travels with the request automatically.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Collect vendor responses",
      text: "Vendors submit pricing through a no-login portal against the same scope items you sent. No vendor retypes your floorplan or community data — they only add their numbers.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Compare bids side-by-side",
      text: "Once two or more vendors respond, Cornerstone PM lines up their pricing against identical scope items so you're comparing apples to apples, not reconciling mismatched spreadsheets.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Award the bid",
      text: "Award your chosen vendor for the community and scope in question. The award locks the accepted pricing — no further edits from either side.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Accepted pricing flows into the budget",
      text: "Awarded pricing updates the master cost budget for the relevant floorplan and community automatically, without a separate data-entry step.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Generate the purchase order",
      text: "Create the purchase order directly from the accepted bid. Vendor, scope, community, and pricing carry over exactly as awarded — nothing is retyped.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "From Bid Request to Purchase Order: One Connected Purchasing Workflow — Cornerstone PM™ Blog",
  description:
    "Follow a construction purchase from bid request to vendor award and purchase order without rekeying scope, pricing, community, or floorplan data again.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-purchasing-workflow-bid-to-purchase-order",
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

const stages = [
  {
    step: "01",
    title: "Bid request",
    desc: "Floorplans, vendors, and scope items go out together. The request already carries the data your purchasing team configured — nothing gets typed twice.",
    color: "emerald",
  },
  {
    step: "02",
    title: "Vendor response",
    desc: "Vendors price the exact scope items you sent through a no-login portal. Their submission maps directly to your scope structure, not a freeform reply.",
    color: "cyan",
  },
  {
    step: "03",
    title: "Comparison",
    desc: "Two or more responses line up side-by-side against identical scope items — no manual reconciliation of differently formatted vendor quotes.",
    color: "violet",
  },
  {
    step: "04",
    title: "Award & purchase order",
    desc: "Award locks the accepted pricing, updates the budget, and the purchase order is generated from that same accepted bid — vendor, scope, and price intact.",
    color: "amber",
  },
];

const stepNumMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

export default function ConstructionPurchasingWorkflowPage() {
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
            From Bid Request to Purchase Order: One Connected Purchasing Workflow
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 4, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A construction purchase should move from bid request to vendor award to purchase
            order without anyone retyping scope, pricing, community, or floorplan data along the
            way. Cornerstone PM connects every step of that handoff so the numbers you accept are
            the numbers that land on the PO.
          </p>

          <p>
            Most builders don&apos;t lose money on a single bad bid. They lose it in the seams
            between tools — the moment a bid request gets typed into one spreadsheet, the vendor
            response gets pasted into another, the comparison happens in a third, and the purchase
            order gets built from whatever the buyer remembers about who won. Every retype is a
            chance for a price to drift, a scope item to get dropped, or a community assignment to
            get mixed up. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            treats the whole chain as one connected workflow instead of four disconnected tasks.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the connected purchasing workflow actually look like?
          </h2>
          <p>Four stages, one data thread running through all of them:</p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {stages.map((s) => (
              <div key={s.step} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className={`text-3xl font-black mb-2 ${stepNumMap[s.color]}`}>{s.step}</div>
                <h3 className="font-bold text-white mb-1.5 text-base">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p>
            The key detail is what carries forward between stages: the same scope items, the same
            floorplan context, and the same community assignment persist from the original bid
            request all the way to the finished purchase order. Nobody re-selects a floorplan or
            re-types a scope description at any point in the chain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where do disconnected purchasing tools force rekeying?
          </h2>
          <p>
            Ask a purchasing coordinator running Buildertrend, JobTread, or a spreadsheet-and-email
            process where they lose the most time, and the answer is rarely the bidding itself —
            it&apos;s the handoffs between stages:
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              {
                icon: <FileSpreadsheet className="w-4 h-4 text-emerald-400" />,
                title: "Bid request to vendor response",
                body: "Scope gets described in an email or a generic spreadsheet, and every vendor formats their reply differently — so the buyer retypes numbers into a comparison sheet before any real comparison can happen.",
              },
              {
                icon: <BarChart3 className="w-4 h-4 text-cyan-400" />,
                title: "Comparison to award",
                body: "The winning number lives in a comparison tab, but the tool that tracks the budget doesn't know about it until someone manually updates a separate cost sheet.",
              },
              {
                icon: <ClipboardList className="w-4 h-4 text-violet-400" />,
                title: "Award to purchase order",
                body: "The PO gets built from whatever the buyer remembers or copies over — vendor name, scope, price, and community assignment all re-entered by hand, with no guarantee they match what was actually awarded.",
              },
            ].map((item, i) => (
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
            Each of those handoffs is a place where a wrong price, a missing scope item, or a
            community mix-up can slip through. None of them are hard problems on their own — but
            they compound across a builder running dozens of floorplans and multiple communities at
            once.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM keep the scope and pricing consistent end to end?
          </h2>
          <p>
            The bid request, the vendor portal, the comparison view, and the purchase order all
            reference the same underlying scope items and floorplan records. When a vendor submits
            a bid, they&apos;re pricing the exact scope items the builder selected — not
            re-describing the work in their own words. When a builder compares bids, they&apos;re
            comparing prices against identical line items. And when the PO gets generated, it pulls
            directly from the accepted bid rather than a manually rebuilt summary.
          </p>
          <p>
            That&apos;s a meaningfully different architecture than stitching together a bid tool, a
            spreadsheet, and an accounting system that don&apos;t share a data model. Cornerstone PM&apos;s{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              no-login vendor bid portal
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/scope-filtered-excel-bid-templates-home-builders"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              scope-filtered bid templates
            </Link>{" "}
            both feed the same scope structure the purchase order eventually pulls from — the
            consistency isn&apos;t a manual process, it&apos;s how the data is modeled.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens to the budget when a bid gets awarded?
          </h2>
          <p>
            Awarding a bid isn&apos;t just a status change — it updates the master cost budget for
            that floorplan and community with the accepted pricing. The number the builder agreed
            to is the number that shows up in cost reporting, without a separate step where someone
            manually enters the awarded price into a budget spreadsheet after the fact.
          </p>
          <p>
            Award locks the pricing on both sides. Neither the builder nor the vendor can quietly
            adjust numbers after acceptance, which keeps the budget grounded in what was actually
            agreed to rather than what someone remembers agreeing to.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the purchase order get built from there?
          </h2>
          <p>
            The purchase order is generated directly from the accepted bid — vendor, community,
            scope items, and pricing all carry over as awarded. There&apos;s no intermediate step
            where a buyer manually assembles the PO from notes or a separate comparison document.
            That matters most at volume: a builder issuing purchase orders across a dozen floorplans
            and several communities in the same week doesn&apos;t want each one to be its own manual
            reconstruction of a decision that was already made during the award.
          </p>
          <p>
            The result is traceability in both directions. From a purchase order, a builder can see
            exactly which bid it came from and what scope it covers. From a bid request, a builder
            can see whether it ever converted into an actual purchase — useful for spotting where
            invited vendors declined, went unanswered, or lost the award without follow-through.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does fewer handoffs matter more as a builder scales?
          </h2>
          <p>
            A five-community builder juggling dozens of active floorplans sends far more bid
            requests, comparisons, and purchase orders in a given month than a single-community
            custom builder. Every manual handoff in that chain scales with volume — meaning the cost
            of rekeying data doesn&apos;t stay flat, it grows with the business. A connected workflow
            doesn&apos;t just save time on any one purchase; it keeps the error rate from climbing as
            purchase volume climbs.
          </p>
          <p>
            For a broader look at how Cornerstone PM&apos;s purchasing tools fit into the full
            platform, see the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview.
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">One thread, six stages</p>
                <p className="text-slate-400 text-sm">
                  Bid request, vendor response, comparison, award, budget update, and purchase
                  order — all referencing the same scope, floorplan, and community records instead
                  of six separate documents that have to agree with each other.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to run your purchasing workflow end to end?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              From bid request to purchase order, without rekeying scope, pricing, or community
              data at any step along the way.
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
