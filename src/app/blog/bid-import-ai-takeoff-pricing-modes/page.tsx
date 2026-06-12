import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, RefreshCw, Layers } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/bid-import-ai.png";
const heroImageAlt =
  "Bid import software for home builders — Cornerstone Bid Import AI scope matching with takeoff and pricing modes";

const blogSchema = buildBlogPostSchema({
  title: "Bid Import AI: Takeoff-Only, Pricing-Only, or Both — Without Duplicates",
  slug: "bid-import-ai-takeoff-pricing-modes",
  description:
    "Cornerstone's Bid Import AI matches scopes accurately and replaces instead of duplicating on re-import. Choose takeoff-only, pricing-only, or takeoff+pricing modes.",
  datePublished: "2026-06-12",
});

export const metadata: Metadata = {
  title:
    "Bid Import AI: Takeoff-Only, Pricing-Only, or Both — Without Duplicates — Cornerstone PM™ Blog",
  description:
    "Cornerstone's Bid Import AI matches scopes accurately and replaces instead of duplicating on re-import. Choose takeoff-only, pricing-only, or takeoff+pricing modes.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/bid-import-ai-takeoff-pricing-modes",
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

const importModes = [
  {
    mode: "Takeoff-Only",
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    bgColor: "bg-emerald-500/10",
    desc: "Pulls scope quantities and line items from the vendor&apos;s submission — without touching any existing pricing. Use this when you&apos;re establishing your initial scope structure and aren&apos;t ready to lock in pricing yet.",
  },
  {
    mode: "Pricing-Only",
    icon: <RefreshCw className="w-4 h-4 text-cyan-400" />,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/10",
    desc: "Updates pricing on existing scope items without altering quantities or structure. Use this every time a vendor re-bids — numbers change, the scope stays exactly as it was.",
  },
  {
    mode: "Takeoff + Pricing",
    icon: <CheckCircle className="w-4 h-4 text-violet-400" />,
    color: "text-violet-400",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/10",
    desc: "Imports everything — quantities, line items, and pricing — in a single pass. Use this for a first-time bid on a new scope or when a vendor resubmits a comprehensively revised bid.",
  },
];

export default function BidImportAiTakeoffPricingModesPage() {
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
            Bid Import AI: Takeoff-Only, Pricing-Only, or Both — Without Duplicates
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 12, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s Bid Import AI gives you three surgical import modes — takeoff-only,
            pricing-only, or takeoff+pricing — so you pull exactly what you need from a vendor
            submission without duplicating line items or scrambling scope into the wrong trade
            category.
          </p>

          <p>
            Every production builder re-imports vendor bids. Pricing changes mid-cycle.
            A framer resubmits after lumber costs shift. A plumber adjusts their fixture pricing
            before the deadline. In most platforms, re-importing means one of two outcomes: you
            either end up with duplicate line items bloating your Master Cost Budget, or you blow
            away existing scope structure to start over. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            fixes both problems with a targeted import model that replaces what changed and
            leaves everything else intact.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are the three bid import modes?
          </h2>
          <p>
            Each mode is designed for a specific point in the bid lifecycle. Using the wrong one
            at the wrong moment is what creates duplicates — so Cornerstone PM surfaces the choice
            explicitly before every import.
          </p>

          <div className="not-prose space-y-4 my-8">
            {importModes.map((m) => (
              <div
                key={m.mode}
                className={`rounded-xl border ${m.borderColor} bg-slate-900/40 p-5`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`shrink-0 w-8 h-8 rounded-full ${m.bgColor} border ${m.borderColor} flex items-center justify-center`}>
                    {m.icon}
                  </div>
                  <span className={`font-bold text-base ${m.color}`}>{m.mode}</span>
                </div>
                <p
                  className="text-slate-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: m.desc }}
                />
              </div>
            ))}
          </div>

          <p>
            The distinction matters most for pricing-only imports. When a vendor sends revised
            numbers on a bid you already awarded scope structure to, you want the pricing cells
            updated — not a second set of line items appended below the first. Pricing-only mode
            finds the matching scope items by AI scope matching, updates the numbers in place,
            and surfaces any items it couldn&apos;t confidently match for manual review.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does AI scope matching prevent &ldquo;Drywall&rdquo; landing in &ldquo;Electrical&rdquo;?
          </h2>
          <p>
            Cross-scope contamination — where a line item from one trade ends up categorized
            under another trade — is one of the most common errors in manual bid entry and
            in naive import tools that rely purely on keyword matching. A bid template that
            lists &ldquo;Drywall finishing&rdquo; can be misread as a finish carpenter line if the
            matcher only looks at the word &ldquo;finishing.&rdquo;
          </p>
          <p>
            Cornerstone PM&apos;s Bid Import AI uses cross-scope penalty scoring. When the AI is
            evaluating where a line item belongs, it doesn&apos;t just look for the best match
            globally — it penalizes matches that would land the item in a trade category that
            doesn&apos;t fit the surrounding context. A drywall line surrounded by other drywall
            and insulation items scores much higher against the Drywall scope category than
            against Electrical, even if both categories technically contain the word &ldquo;finish.&rdquo;
          </p>

          <div className="not-prose rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 my-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-amber-300 font-semibold text-sm mb-1">
                  The problem with keyword-only matching
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Legacy import tools match line items to scope categories based on surface-level
                  keyword overlap. &ldquo;Finish&rdquo; matches Finish Carpentry, Paint, and Drywall
                  simultaneously. Without penalty scoring, the highest raw match wins — and it&apos;s
                  often wrong. Cornerstone&apos;s contextual matching with cross-scope penalties
                  uses the surrounding trade cluster to resolve ambiguity instead of guessing
                  on isolated tokens.
                </p>
              </div>
            </div>
          </div>

          <p>
            Any line items the AI isn&apos;t confident about are flagged for builder review before the
            import completes. You don&apos;t discover a misplaced scope item two weeks later when
            a budget number doesn&apos;t reconcile — you see the flagged items at import time and
            decide how to route them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does &ldquo;replace instead of duplicate&rdquo; matter for your Master Cost Budget?
          </h2>
          <p>
            The Master Cost Budget is a live document in Cornerstone PM. It aggregates scope
            item pricing across every vendor, every floorplan, and every community into a single
            source of truth for what each home costs to build. If bid re-imports append new rows
            instead of updating existing ones, the budget doubles up on every re-bid cycle —
            and the totals become meaningless.
          </p>
          <p>
            Pricing-only and takeoff+pricing imports both write to existing scope items rather
            than creating new ones. The AI matches the incoming line items to your existing
            scope structure, updates the pricing in place, and preserves the item&apos;s
            position in the budget hierarchy. The Master Cost Budget reflects the latest
            accepted pricing — not a running history of every number a vendor has ever
            submitted.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {[
              {
                label: "Before re-import",
                items: ["Frame Labor — $4.25/sqft", "Frame Labor — $4.25/sqft (v1)", "Frame Labor — $4.50/sqft (v2)"],
                note: "Legacy tools append. Budget totals triple.",
                color: "border-red-500/20 bg-red-500/5",
                noteColor: "text-red-400",
              },
              {
                label: "After Cornerstone pricing-only import",
                items: ["Frame Labor — $4.50/sqft"],
                note: "One line. Updated in place. Budget stays clean.",
                color: "border-emerald-500/20 bg-emerald-500/5",
                noteColor: "text-emerald-400",
              },
            ].map((col) => (
              <div key={col.label} className={`rounded-xl border p-5 ${col.color}`}>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">
                  {col.label}
                </p>
                <ul className="space-y-1.5 mb-3">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-slate-300 font-mono">{item}</li>
                  ))}
                </ul>
                <p className={`text-xs font-medium ${col.noteColor}`}>{col.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this connect to the vendor bid portal?
          </h2>
          <p>
            Bid Import AI is the back half of a workflow that starts with Cornerstone PM&apos;s{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              no-login vendor bid portal
            </Link>
            . When you send a bid request, vendors receive a scope-filtered Excel template with
            three tabs (Base, Structural, Designer) and submit through a portal that requires no
            Cornerstone PM account. Once they submit, their bid is locked.
          </p>
          <p>
            The locked bid becomes the source file for Bid Import AI. Because you controlled
            the template structure on the way out, the AI has a well-formatted input to work
            with on the way back in. Scope categories in the template correspond directly to
            scope categories in your purchasing module — which is why the cross-scope penalty
            matching is so accurate. The import AI isn&apos;t trying to parse a free-form PDF;
            it&apos;s reading a structured Excel file your system generated.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about items that weren&apos;t bid? Where do allowances fit?
          </h2>
          <p>
            Not every line item has a vendor bid behind it — especially early in the sales
            cycle. Appliances, landscaping, and other owner-provided items often sit as budget
            placeholders while the home sells and design selections finalize.
          </p>
          <p>
            Cornerstone PM&apos;s allowances system handles these. You add a budget placeholder
            allowance to the scope — either per-floorplan or globally — and it flows into the
            Master Cost Budget alongside your bid-backed scope items. When a vendor bid comes in
            later, a pricing-only import replaces the allowance placeholder with real pricing.
            The budget tracks the distinction: you always know which line items are bid-backed
            and which are still running on allowances.
          </p>
          <p>
            This matters for production builders managing large option catalogs where some
            scopes are locked in early and others trail behind. The Master Cost Budget doesn&apos;t
            have to be a placeholder-riddled mess — allowances give you a clean number to work
            with at every stage, and Bid Import AI replaces them cleanly when real bids arrive.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this compare to bid import in Buildertrend or JobTread?
          </h2>
          <p>
            Buildertrend&apos;s bid request system is designed around the custom builder&apos;s workflow:
            one project, one set of vendor negotiations, managed manually per job. There&apos;s no
            native three-tab scope structure that separates Base, Structural, and Designer scope,
            no AI scope matching, and no replace-in-place logic for re-bids on the same scope
            structure. JobTread handles vendor quotes at the project level as well — a production
            builder running the same scope across five communities and twelve floorplans will
            spend significant manual effort keeping pricing current.
          </p>
          <p>
            Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            was built for the production model: one scope structure priced once and applied
            across every plan repeat in every community. Bid Import AI keeps that structure
            clean through every re-bid cycle without requiring a rebuild.
          </p>
          <p>
            For a full platform comparison, the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview covers where Cornerstone PM sits relative to Buildertrend, NEWSTAR,
            BuildPro, and JobTread.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The clean bid cycle
          </h2>
          <p>
            The three import modes, AI scope matching, and replace-in-place logic are all
            aimed at the same outcome: a Master Cost Budget that reflects reality at every
            point in the bid cycle — not a graveyard of superseded numbers your team has to
            manually reconcile before every job release.
          </p>
          <p>
            Builders who run 50-200 homes per year can&apos;t afford to spend a purchasing
            coordinator&apos;s week fixing scope contamination and deleting duplicate lines after
            every re-bid round. Bid Import AI compresses that cleanup to near-zero so your
            team can focus on evaluating vendor pricing instead of maintaining spreadsheet hygiene.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to clean up your bid cycle?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Scope-filtered templates out, AI-matched pricing in — without duplicates, without
              cross-scope contamination, without manual cleanup.
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
