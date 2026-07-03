import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/structural-options-sqft.png";
const heroImageAlt =
  "Structural options pricing across 12 home builder floorplans using sqft-linked auto-quantity scope items in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title:
    "Pricing Structural Options Across 12 Floorplans Without 12 Spreadsheets",
  slug: "structural-options-pricing-floorplan-sqft",
  description:
    "How Cornerstone PM prices structural options (bonus rooms, finished basements, 3-car garages) across every floorplan automatically using sqft-linked scope items.",
  datePublished: "2026-05-30",
});

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
  description: heroImageAlt,
  creditText: "Cornerstone PM",
};

export const metadata: Metadata = {
  title:
    "Pricing Structural Options Across 12 Floorplans Without 12 Spreadsheets — Cornerstone PM™ Blog",
  description:
    "How Cornerstone PM prices structural options (bonus rooms, finished basements, 3-car garages) across every floorplan automatically using sqft-linked scope items.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/structural-options-pricing-floorplan-sqft",
  },
  openGraph: {
    title:
      "Pricing Structural Options Across 12 Floorplans Without 12 Spreadsheets",
    description:
      "How Cornerstone PM prices structural options (bonus rooms, finished basements, 3-car garages) across every floorplan automatically using sqft-linked scope items.",
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

export default function StructuralOptionsPricingPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      <article className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
              Product Update
            </span>
            <span className="text-xs text-slate-500">May 30, 2026</span>
            <span className="text-xs text-slate-600">—·</span>
            <span className="text-xs text-slate-500">6 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Pricing Structural Options Across 12 Floorplans Without 12
            Spreadsheets
          </h1>

          {/* Lead paragraph */}
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            With Cornerstone PM’s sqft-linked auto-quantity scope items,
            you define frame labor cost per square foot once — and every
            floorplan, every elevation, and every structural option reprices
            itself automatically. Change the rate, and 60 line items update in
            seconds. No spreadsheets. No per-plan re-entry. No surprises when
            framing quotes come in over budget.
          </p>

          {/* Hero image */}
          <div className="mb-10">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1024}
              height={1024}
              priority
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            What Does “Structural Options Pricing” Actually Mean?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you’re a production builder, structural options are the
            footprint-altering upgrades buyers can add to a base floorplan:
            a finished bonus room over the garage, a 3rd-car garage bay, a
            finished basement, a sunroom addition, a covered rear porch with
            framing. Each one changes square footage — and therefore changes the
            cost of every trade that bills per sqft.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The problem: a production builder with 12 floorplans and 5
            structural options per plan has 60 distinct footprint combinations to
            price. That’s 60 separate entries for frame labor. 60 for slab
            mason. 60 for paint. 60 for cleaning. Every time a trade changes
            their rate, every one of those 240+ scope line items needs updating.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Most builders solve this with a spreadsheet. The spreadsheet
            becomes the source of truth. The spreadsheet gets emailed around.
            Someone updates the wrong version. A bid goes out with a 2023 labor
            rate in 2026. You know how this story ends.
          </p>

          {/* The traditional way box */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 mb-8">
            <h3 className="text-base font-bold text-red-400 mb-3">
              The Spreadsheet Math (Before Cornerstone)
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400 mb-1">12 floorplans</p>
                <p className="text-slate-400 mb-1">× 5 structural options each</p>
                <p className="text-slate-300 font-semibold">= 60 footprint variants to price</p>
              </div>
              <div>
                <p className="text-slate-400 mb-1">× 4 sqft-based trades</p>
                <p className="text-slate-400 mb-1">(frame, slab, paint, cleaning)</p>
                <p className="text-slate-300 font-semibold">= 240 line items to update per rate change</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Average estimator rate: $65–$85/hr. Average re-price cycle: 2–4
              hours. Every time framing or labor costs shift.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How Sqft-Linked Scope Items Change the Math
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM’s purchasing system
            </Link>
            , auto-quantity scope items link directly to floorplan measurements
            instead of holding a static number. You set the quantity source to
            one of four options:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                label: "Under Air Sqft",
                uses: "Trim carpenter, cleaning, paint, flooring labor",
                color: "emerald",
              },
              {
                label: "Total Sqft",
                uses: "Frame labor, slab mason, insulation, HVAC",
                color: "cyan",
              },
              {
                label: "Roof Squares",
                uses: "Roof labor, felt underlayment, ridge cap",
                color: "violet",
              },
              {
                label: "Exterior Perimeter (ft)",
                uses: "Foundation forms, exterior paint, drainage",
                color: "amber",
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border p-4 ${
                  item.color === "emerald"
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : item.color === "cyan"
                    ? "border-cyan-500/20 bg-cyan-500/5"
                    : item.color === "violet"
                    ? "border-violet-500/20 bg-violet-500/5"
                    : "border-amber-500/20 bg-amber-500/5"
                }`}
              >
                <p
                  className={`text-sm font-bold mb-1 ${
                    item.color === "emerald"
                      ? "text-emerald-400"
                      : item.color === "cyan"
                      ? "text-cyan-400"
                      : item.color === "violet"
                      ? "text-violet-400"
                      : "text-amber-400"
                  }`}
                >
                  {item.label}
                </p>
                <p className="text-slate-400 text-xs">{item.uses}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-4">
            When you create a scope item and set the quantity source to{" "}
            <span className="text-white font-medium">Total Sqft</span>, the
            system reads that measurement directly from the floorplan record —
            including structural option footprints. Set the unit rate to{" "}
            <span className="text-white font-medium">$4.25/sqft</span> for frame
            labor, and Cornerstone automatically calculates the correct cost for:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "The 1,850 sqft Magnolia base plan → $7,862.50",
              "The Magnolia + Bonus Room structural option (2,140 sqft) → $9,095.00",
              "The Magnolia + 3rd Car Garage structural option (1,990 sqft) → $8,457.50",
              "All 12 floorplans, all structural options — simultaneously",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-300 leading-relaxed mb-6">
            When framing costs go up to{" "}
            <span className="text-white font-medium">$4.50/sqft</span>, you
            change one number. Every floorplan. Every structural option. Every
            community. Updated immediately.
          </p>

          {/* Section 3 - Before / After */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Before vs. After: The Same 12-Plan Portfolio
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Before */}
            <div className="rounded-xl border border-red-500/20 bg-slate-900 p-5">
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-4">
                Before (Spreadsheet)
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  12 tabs — one per floorplan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Structural options added as rows, manually cross-referenced
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Rate change = find-and-replace across 12 sheets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  Easy to miss one structural option variant
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  No audit trail — which version is current?
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✗</span>
                  ~3 hrs of estimator time per rate update cycle
                </li>
              </ul>
            </div>
            {/* After */}
            <div className="rounded-xl border border-emerald-500/20 bg-slate-900 p-5">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
                After (Cornerstone PM)
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  One scope item per trade (e.g., Frame Labor)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Quantity source = Total Sqft (read from each plan)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Rate change = edit one field, all 60 variants update
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Structural option sqft flows from the floorplan record
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Full audit trail — one source of truth
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  ~2 minutes per rate update cycle
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How Structural Option Sqft Flows Through the System
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            When a buyer adds a structural option — say, a finished bonus room —
            that option has its own sqft delta defined in the floorplan record.
            The Magnolia base is 1,850 sqft. The Bonus Room option adds 290 sqft.
            Cornerstone stores 2,140 as the structural option’s Total Sqft.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Every sqft-linked scope item tied to that floorplan picks up the
            correct measurement automatically:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Frame Labor (Total Sqft) → prices at 2,140 sqft for the Bonus Room option",
              "Paint (Under Air Sqft) → prices at the conditioned-space footprint for that option",
              "Roof Squares → prices at the updated roof area if the structural option adds roofline",
              "Cleaning (Under Air Sqft) → prices at the same conditioned footprint as paint",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-300 leading-relaxed mb-4">
            This means the vendor bid template for a Magnolia with a Bonus Room
            automatically contains the correct scope quantities — not a base-plan
            estimate with a manually typed adjustment note at the bottom.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            For deeper technical context on how structural options interact with
            the takeoff system, see how{" "}
            <Link
              href="/ai-takeoff"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Blueprint AI extracts material scopes
            </Link>{" "}
            directly from floor plan PDFs — including detecting structural option
            footprints from CAD geometry.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            What Buildertrend and JobTread Do Instead
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Both Buildertrend and JobTread are built primarily for custom
            builders, where each job is a unique estimate. There’s no
            concept of a shared floorplan record whose measurements propagate
            into scope items. Structural options are treated as separate line
            items negotiated job-by-job — the builder manually enters quantities
            each time.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            That works fine if you’re building 8 one-off custom homes a
            year. It collapses when you’re running 80 homes across five
            communities with 12 floorplans and structural options on every plan.
            You don’t want your purchasing manager doing takeoff math every
            time a buyer adds a bonus room to a Magnolia.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            NEWSTAR handles plan-level scope items, but the UI layer is dated and
            there’s no native web interface for the auto-quantity
            configuration Cornerstone exposes in a few clicks. BuildPro has
            similar structural primitives but requires Citrix desktop access and
            lacks the modern API layer. The gap is real — and it’s widest
            for builders in the 30–200 homes/year range where the spreadsheet
            starts breaking and enterprise ERP is overkill.
          </p>

          {/* Callout box */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 mb-10">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">
              Pairs Naturally With the Full Design Stack
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Sqft-linked structural option pricing connects directly to the rest
              of{" "}
              <Link
                href="/design"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Cornerstone’s design center
              </Link>
              :
            </p>
            <ul className="space-y-2">
              {[
                "Designer Packages auto-lock category options when selected — structural option pricing flows through without conflict",
                "Exclusion groups (Pick One flooring, roofing, countertops) work alongside structural pricing layers",
                "Bid templates filter by scope, so structural-option quantities go to the right trade vendors automatically",
                "Foreman AI (396+ skills) can pull current sqft data, compare vendor quotes, and flag scope pricing anomalies across floorplans",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Is This the Right Fit for Your Operation?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you’re a production builder running more than one floorplan
            and offering structural options to buyers, sqft-linked auto-quantity
            scope items will save your estimating and purchasing team material
            time — every time a trade rate changes, every time you add a
            floorplan, every time you launch a new community.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you’re a custom builder with unique scopes on every job,
            this system is more structure than you need. Cornerstone PM is
            purpose-built for{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              production home builders
            </Link>{" "}
            who repeat floorplans across communities — not for one-off custom
            work.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For a broader look at how Cornerstone PM compares to the platforms
            production builders typically evaluate — including Buildertrend,
            NEWSTAR, JobTread, and BuildPro — see the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stop Repricing 60 Line Items by Hand
            </h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Set up sqft-linked structural option pricing in a platform built
              for production builders — and reclaim the hours your estimating
              team spends on spreadsheet maintenance.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors text-sm"
            >
              Request Early Access
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
