import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/planswift-stack-vs-cornerstone.png";
const heroImageAlt =
  "PlanSwift STACK takeoff alternative for home builders — digital measuring tool compared with an end-to-end AI takeoff and purchasing platform";

const blogSchema = buildBlogPostSchema({
  title: "PlanSwift and STACK vs Cornerstone: A Takeoff Tool Is Not a Build System",
  slug: "planswift-stack-takeoff-vs-cornerstone-ai-takeoff",
  description:
    "Digital takeoff tools measure fast and stop there. Where PlanSwift and STACK end and a production home builder platform has to begin.",
  datePublished: "2026-08-23",
  mentionsProduct: {
    name: "Cornerstone PM AI Takeoff",
    url: "https://www.cornerstonepm.ai/ai-takeoff",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Can PlanSwift or STACK replace home builder software?",
    a: "No. PlanSwift and STACK are measuring tools — they produce a quantity list from a plan set. That quantity list is the beginning of the production process, not the end. A home builder still needs scope items, vendor bid requests, community-level bid awards, auto-generated purchase orders, a buyer-facing design center, and QuickBooks job costing after the quantities exist. None of those live in a takeoff tool.",
  },
  {
    q: "What do PlanSwift and STACK do well?",
    a: "Both tools are mature, respected digital takeoff platforms. An experienced estimator can measure a plan set faster in PlanSwift or STACK than in any general-purpose tool. The click-to-measure workflow, scalable overlays, and assembly libraries are real strengths. The limitation is scope, not quality — they measure quantities and stop there.",
  },
  {
    q: "How does Cornerstone PM's AI takeoff differ from PlanSwift or STACK?",
    a: "Blueprint AI reads the plan set and extracts material scopes, room locations, and quantities in under 60 seconds without a human clicking on every wall. The output lands directly in Cornerstone's scope item and area cost structure — not in a standalone spreadsheet that someone then re-keys somewhere else. Quantities also auto-calculate against room-level floorplan square footage, so a plan revision or structural option update reprices without a new manual measure.",
  },
  {
    q: "What happens after the takeoff in Cornerstone PM?",
    a: "Quantities from the takeoff populate scope items, which drive bid request templates — scope-filtered Excel files that go to vendors automatically. Vendors submit through a token-protected portal with no login. Bids come back, get compared side-by-side, and get awarded per community rather than per job. Accepted pricing becomes the budget, and when a task completes, the purchase order generates itself and posts to QuickBooks Online as a commitment entry. The takeoff starts the chain; Cornerstone runs the rest of it.",
  },
  {
    q: "Why does community-level vendor awarding matter?",
    a: "A production home builder runs the same floorplan in multiple communities with different framing crews, different local suppliers, and different material costs. A single global quantity list from a takeoff tool cannot represent that — it gives you one number per item. Cornerstone awards vendor bids per community, so the Oakridge Estates framer and the Willowbrook Estates framer can have different accepted prices for the same scope item, and the budget for each community is correct.",
  },
  {
    q: "Should builders keep PlanSwift or STACK alongside Cornerstone PM?",
    a: "Some builders legitimately keep a dedicated takeoff tool for odd one-off work or complex commercial projects that fall outside the production floorplan model. The real question is where the system of record lives. If the production home business runs off quantities that exist only in a takeoff tool export, the rest of the platform — bidding, purchasing, budgets, accounting — has to be rebuilt from that export every time something changes. Cornerstone PM is the system of record; Blueprint AI is the takeoff layer inside it.",
  },
  {
    q: "How does the takeoff connect to QuickBooks in Cornerstone PM?",
    a: "Cornerstone syncs one-way to QuickBooks Online. Approved purchase orders, change orders, bills, and vendors post automatically with community, lot, address, PO number, and cost code in the memo. Each Community maps to a QuickBooks Customer and each Home to a Project, giving builders real per-home P&L without a separate export step. Cornerstone stays the source of truth; QuickBooks changes never overwrite it.",
  },
];

const gapRows = [
  { gap: "Scope items and area costs", inTakeoffTool: false, inCornerstone: true },
  { gap: "Scope-filtered vendor bid templates", inTakeoffTool: false, inCornerstone: true },
  { gap: "No-login vendor portal for bid submission", inTakeoffTool: false, inCornerstone: true },
  { gap: "Side-by-side bid comparison", inTakeoffTool: false, inCornerstone: true },
  { gap: "Community-level vendor bid awards", inTakeoffTool: false, inCornerstone: true },
  { gap: "Auto-generated POs on task completion", inTakeoffTool: false, inCornerstone: true },
  { gap: "One-way QuickBooks sync with job context", inTakeoffTool: false, inCornerstone: true },
  { gap: "Production design center with Designer Packages", inTakeoffTool: false, inCornerstone: true },
  { gap: "AI takeoff from plan set (< 60 seconds)", inTakeoffTool: false, inCornerstone: true },
  { gap: "Manual click-to-measure by estimator", inTakeoffTool: true, inCornerstone: false },
  { gap: "Quantity list as standalone output", inTakeoffTool: true, inCornerstone: false },
];

export const metadata: Metadata = {
  title:
    "PlanSwift and STACK vs Cornerstone: A Takeoff Tool Is Not a Build System — Cornerstone PM™ Blog",
  description:
    "Digital takeoff tools measure fast and stop there. Where PlanSwift and STACK end and a production home builder platform has to begin.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/planswift-stack-takeoff-vs-cornerstone-ai-takeoff",
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

export default function PlanSwiftStackVsCornerstonePage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-sky-400 bg-sky-500/10 border-sky-500/20 mb-4 inline-block">
            AI Takeoff
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            PlanSwift and STACK vs Cornerstone: A Takeoff Tool Is Not a Build System
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 23, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            PlanSwift and STACK are genuinely good at what they do. An experienced estimator can measure a
            plan set faster in either tool than in any spreadsheet or general-purpose platform. The question
            is what happens after the measure — and for production home builders, the answer is a lot of
            work those tools were never designed to handle. The{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM AI takeoff
            </Link>{" "}
            is not a competing measuring tool — it is takeoff built into the system that runs the rest of
            the build.
          </p>

          <p>
            The boundary matters. A takeoff tool outputs a quantity list. The quantity list is the beginning
            of the job, not the end of it. Everything downstream — bid requests, vendor awards, purchase
            orders, design center pricing, QuickBooks job costing — sits outside the takeoff tool and has
            to be rebuilt by hand every time the quantities change.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where does a digital takeoff tool end?
          </h2>

          <p>
            Walk through what a production builder actually does after an estimator finishes in PlanSwift
            or STACK. The output is a quantity spreadsheet — walls, windows, doors, square footages. From
            there, the quantities have to get onto scope items so vendors know what to price. Bid request
            templates have to be assembled and sent to subcontractors. Bids come back in different formats
            and get compared by hand. Someone awards a vendor, and that award has to live somewhere so the
            purchasing team can write a purchase order against it. The PO gets sent, the task completes,
            and someone updates QuickBooks.
          </p>

          <p>
            Every one of those steps is manual, and every one is a place a number can change without the
            rest of the chain knowing. The takeoff tool is not responsible for any of it — it just holds
            the original measures.
          </p>

          <p>
            For a custom builder running a handful of one-off projects, that workflow is manageable. For a
            production builder running the same floorplans across multiple communities and multiple starts
            per month, it compounds. Each plan revision means a new measure. Each new community means
            re-assembling bid templates for the vendors working that location. The manual steps that felt
            fine on project five feel different on project fifty.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does Cornerstone PM do differently with takeoff?
          </h2>

          <p>
            Blueprint AI reads the plan set and extracts material scopes — room locations, dimensions, and
            material assignments — in under 60 seconds. The output does not go to a spreadsheet. It lands
            directly into Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              scope item and area cost structure
            </Link>
            , which is the same structure that drives bid requests, purchase orders, and the Master Cost
            Budget.
          </p>

          <p>
            Quantities also auto-calculate against room-level floorplan square footage. When a buyer picks
            a bonus room structural option, the additional square footage feeds frame labor, insulation, and
            paint scope items automatically — without a new manual measure. When a plan revision changes a
            room size, the affected quantities update with it. The system of record is the floorplan in
            Cornerstone, not a snapshot export sitting in a file folder.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the rest of the chain look like?
          </h2>

          <p>
            After quantities land on scope items, Cornerstone generates scope-filtered bid request templates —
            Excel files with Base, Structural, and Designer tabs where each vendor only sees the trade they
            bid. Templates go out automatically; vendors receive a link in their email, click through to a
            token-protected portal that needs no account, download their template, upload their bid, and
            submit. No vendor app. No Cornerstone login.
          </p>

          <p>
            Submitted bids come back on the same scope-item lines, so comparison is apples-to-apples by
            default. Award is per community, not per job — one framing crew wins Oakridge Estates, a
            different crew wins Willowbrook Estates, and the budget for each community carries the right
            accepted price. Once awarded, the bid locks. Neither party edits the number quietly afterward.
          </p>

          <p>
            When a task on the schedule completes, Cornerstone generates the purchase order automatically
            and emails it to the vendor. The PO posts to QuickBooks Online as a commitment entry with
            community, lot, address, PO number, and cost code in the memo. When the work is done and the
            bill arrives, the matching bill auto-creates in QuickBooks and closes the PO — no dangling
            open commitments, no double-entry.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What lives where
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-3 gap-2 px-5 py-2.5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide"></p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-center">Takeoff Tool</p>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-center">Cornerstone PM</p>
              </div>
              {gapRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-2 px-5 py-3 items-center">
                  <p className="text-sm text-slate-300">{row.gap}</p>
                  <div className="flex justify-center">
                    {row.inTakeoffTool ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.inCornerstone ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Should builders keep both tools?
          </h2>

          <p>
            Some builders legitimately keep a dedicated takeoff tool for odd projects — a commercial
            renovation, a one-off custom home, something that does not fit the production floorplan model.
            That is a reasonable choice and not the argument being made here.
          </p>

          <p>
            The argument is about where the system of record lives for the production business. If quantities
            exist only in a PlanSwift or STACK export, and that export does not connect to bidding, purchasing,
            scheduling, or accounting, then every downstream team is working from a snapshot that may already
            be stale. When the plan changes, the snapshot changes, and every team that was working from it
            has to reconcile.
          </p>

          <p>
            A production builder doing 50 homes a year across three communities cannot run that reconciliation
            reliably. The takeoff tool becomes a bottleneck — the estimator holds the measure, and nothing
            downstream is confident until they export it and someone else manually enters it somewhere useful.
            Moving the system of record into Cornerstone removes that bottleneck because the measure, the
            bid, the award, and the purchase order are all in the same place.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about the design center?
          </h2>

          <p>
            Takeoff tools have no concept of a design center. They measure; they do not sell. But for a
            production home builder, the design center is where a significant part of the margin is set —
            upgrade pricing on flooring, countertops, cabinets, and structural options.
          </p>

          <p>
            In Cornerstone, the design center and the takeoff share the same floorplan model. A structural
            option that adds a bonus room triggers both an updated takeoff quantity and a priced design
            option at the right spec level for the right community. Sixty-four curated Designer Packages
            across seven categories let buyers lock a coordinated look in one decision. Exclusion groups
            prevent conflicting selections. Every option price traces back to accepted vendor pricing — not
            a placeholder number somebody will reconcile later.
          </p>

          <p>
            That connection is impossible in a standalone takeoff tool. The measure and the design selection
            live in separate systems, and linking them requires manual work or a custom integration that
            someone has to maintain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The honest split
          </h2>

          <p>
            PlanSwift and STACK are strong measuring tools that do what they say they do. Builders who have
            built speed in those environments are right to be careful about what they give up. The real
            question is not whether the measuring tool is good — it is whether the measuring tool is the
            right system of record for a production home building operation.
          </p>

          <p>
            For production builders repeating the same floorplans, the measure is the easy part. The hard
            part is getting from that measure to a correct budget, an awarded vendor, a generated purchase
            order, and an accurate QuickBooks entry — across fifty homes, in three communities, with plan
            revisions in flight. The{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM AI takeoff
            </Link>{" "}
            handles the measure as the first step in a chain that runs through purchasing and accounting
            without anyone re-keying a number.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Takeoff that connects to your whole build system.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Blueprint AI extracts material scopes from your plan set in under 60 seconds, landing quantities
              directly into scope items, vendor bid requests, and the Master Cost Budget — not a standalone
              spreadsheet somebody re-keys later.
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
        title="Frequently Asked Questions"
        subtitle="Common questions about digital takeoff tools and production home builder software."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
