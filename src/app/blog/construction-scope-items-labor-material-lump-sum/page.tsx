import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, Package, Layers, FileStack } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/construction-scope-items-labor-material-lump-sum.png";
const heroImageAlt =
  "Construction scope items dashboard comparing labor, material, mixed, and lump-sum vendor quote structures";

const blogSchema = buildBlogPostSchema({
  title: "Labor, Material, Mixed, or Lump Sum: Scope Items That Match Real Vendor Quotes",
  slug: "construction-scope-items-labor-material-lump-sum",
  description:
    "Model labor, material, mixed, and lump-sum vendor quotes without forcing every construction scope into a rigid parts-only estimating structure at scale.",
  datePublished: "2026-09-08",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Why can't every scope item just use a parts list like a material catalog?",
    a: "Because most trades don't price their work that way. A framing crew quotes an hourly labor rate, a drywall supplier quotes a material rate per square foot, an electrician often bundles labor and material into one blended rate, and a roofer typically hands over a single lump-sum number for the whole job. Forcing all four into a parts-only catalog means either fabricating fake unit breakdowns that don't match the actual quote, or maintaining a separate spreadsheet outside the system to track the real number.",
  },
  {
    q: "What is the difference between a mixed scope item and a lump sum?",
    a: "A mixed scope item still carries a unit — a rate per hour, per square foot, or per linear foot — but that rate is understood to include both labor and material combined, the way an electrician or plumber often quotes. A lump-sum scope item has no unit at all: it's a single flat number for the entire job, the way a roofer or a concrete crew commonly bids. Mixed scopes still multiply against a takeoff quantity; lump-sum scopes don't.",
  },
  {
    q: "How does this affect vendor bid comparison?",
    a: "Each scope item keeps its quote type when it goes out in a bid request, so vendors are asked to quote in the format they actually use. A framing crew sees an hourly labor line, a roofer sees a lump-sum line. When bids come back, Cornerstone PM compares vendors within the same scope and quote type rather than trying to normalize a lump-sum roof quote against an hourly framing quote — comparisons that were never apples-to-apples in the first place.",
  },
  {
    q: "What happens if a scope item doesn't have an accepted vendor price yet?",
    a: "It stays visibly unpriced. Cornerstone PM does not backfill a missing price with a default, an estimate, or a company-wide average. A scope with no accepted bid shows a needs-pricing status in the budget and purchase order flow, so nobody mistakes a placeholder number for a real cost. The price only becomes real once a vendor's bid is accepted and locked.",
  },
  {
    q: "Does the quote type change how a scope item flows into a purchase order?",
    a: "The scope item's structure carries through automatically. A labor or mixed scope multiplies its accepted rate against the relevant quantity for the home or floorplan; a material scope does the same against a takeoff-derived quantity; a lump-sum scope carries its flat accepted price straight into the PO with no multiplication step. The purchasing team never has to manually convert one quote format into another.",
  },
  {
    q: "Can a scope item's quote type change after it's set up?",
    a: "Yes. If a trade that used to quote hourly labor switches to a blended mixed rate, or a builder starts getting lump-sum bids on a scope that used to be priced by the unit, the scope item's quote type can be updated. Existing accepted bids and locked pricing tied to the prior structure stay intact as historical records; new bids follow the updated quote type going forward.",
  },
];

const quoteTypes = [
  {
    icon: <Clock className="w-4 h-4 text-emerald-400" />,
    title: "Labor",
    body: "Priced per hour, per square foot, or another unit — no material cost bundled in. Common for framing crews and finish trades billing their time separately from supplied material.",
  },
  {
    icon: <Package className="w-4 h-4 text-cyan-400" />,
    title: "Material",
    body: "Priced per unit for the product itself — drywall per sheet, lumber per board foot. Ties cleanly to takeoff-derived quantities pulled straight from the floorplan.",
  },
  {
    icon: <Layers className="w-4 h-4 text-violet-400" />,
    title: "Mixed",
    body: "A single blended rate that already includes both labor and material, the way electricians and plumbers commonly quote — still multiplies against a real quantity.",
  },
  {
    icon: <FileStack className="w-4 h-4 text-amber-400" />,
    title: "Lump Sum",
    body: "One flat number for the entire scope, no unit and no multiplication. Common for roofing, concrete, and other trades that bid the whole job as a package.",
  },
];

export const metadata: Metadata = {
  title:
    "Labor, Material, Mixed, or Lump Sum: Scope Items That Match Real Vendor Quotes — Cornerstone PM™ Blog",
  description:
    "Model labor, material, mixed, and lump-sum vendor quotes without forcing every construction scope into a rigid parts-only estimating structure at scale.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-scope-items-labor-material-lump-sum",
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

export default function ConstructionScopeItemsPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Labor, Material, Mixed, or Lump Sum: Scope Items That Match Real Vendor Quotes
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 8, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Not every trade quotes work the same way. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            lets a single scope item represent labor, material, a blended mixed rate, or a flat
            lump sum &mdash; so vendor bid templates match the way subcontractors actually price
            their work instead of forcing every trade into one rigid parts-only structure.
          </p>

          <p>
            Most construction estimating tools were built around a catalog of priced parts:
            one SKU, one unit price, one quantity. That works fine for materials. It breaks down
            the moment a framing crew wants to quote an hourly labor rate, an electrician wants to
            bundle labor and material into one number, or a roofer wants to bid the whole job as a
            single flat price with no unit at all.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why don&apos;t all vendor quotes fit one structure?
          </h2>
          <p>
            Every trade has its own pricing convention, shaped by how the work is actually
            performed and billed. A framing crew bills hours. A lumber supplier bills board feet.
            An electrician or plumber often blends labor and material into a single rate per
            fixture or per linear foot because separating the two doesn&apos;t reflect how they
            actually cost the job. A roofer or a concrete crew frequently skips per-unit pricing
            entirely and hands over one number for the whole scope. None of those are wrong &mdash;
            they&apos;re just different, and a platform that only supports one structure forces
            builders to either misrepresent the quote or manage it somewhere else.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {quoteTypes.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How is this different from just adding a &ldquo;notes&rdquo; field?
          </h2>
          <p>
            A notes field lets someone describe a quote in text, but it doesn&apos;t change how
            the platform calculates a cost. A lump-sum scope item isn&apos;t a labor line with a
            comment explaining it&apos;s actually flat &mdash; it&apos;s structurally different: no
            unit, no quantity multiplication, just one accepted number that flows straight through
            to the budget and the purchase order. A mixed scope item still multiplies against a
            real quantity, the same way a labor or material scope does, but the resulting rate
            already accounts for both cost components in one number. The structure matches the
            math the vendor actually used to arrive at their price.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does quote type affect vendor bid comparison?
          </h2>
          <p>
            When a bid request goes out, each scope item carries its quote type into the vendor
            bid template, so a framing crew is asked for an hourly rate and a roofer is asked for
            a lump sum &mdash; not the same generic line for both. When bids come back, comparison
            happens within the same scope and the same quote type. That matters because comparing
            an hourly framing rate against a lump-sum roofing bid was never a real comparison to
            begin with; keeping the structures distinct means the numbers that get compared were
            actually priced the same way.
          </p>
          <p>
            This is the same discipline covered in{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s vendor bid request workflow
            </Link>
            : scope-filtered templates that ask each vendor for exactly what they need to quote,
            in the format they&apos;re used to quoting it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens to a scope item with no accepted price yet?
          </h2>
          <p>
            It stays visibly unpriced. Cornerstone PM never fills a gap with a default, a company
            average, or an estimate dressed up as a real number. A scope without an accepted
            vendor bid shows a needs-pricing status all the way through the budget and purchase
            order flow &mdash; so a builder always knows the difference between a real cost and an
            open question. That&apos;s the same hard-cost rule that governs{" "}
            <Link
              href="/blog/awarded-bid-to-job-cost-budget-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              how awarded bids become job-cost budgets
            </Link>{" "}
            elsewhere in the platform.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the quote type flow into the purchase order?
          </h2>
          <p>
            Once a bid is accepted, the scope item&apos;s structure decides how its price reaches
            the purchase order. Labor and material scopes multiply their accepted rate against the
            relevant quantity &mdash; hours, square footage, or a takeoff-derived count. Mixed
            scopes do the same, since the blended rate still needs a quantity to apply against.
            Lump-sum scopes skip multiplication entirely and carry their flat accepted price
            straight to the PO. Purchasing never has to manually convert one vendor&apos;s pricing
            convention into another&apos;s just to keep the numbers consistent on paper.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter at the scale of a full plan set?
          </h2>
          <p>
            A single mismatched scope item is a minor annoyance. A production builder running a
            dozen floorplans across several communities, with dozens of trades each quoting their
            own way, turns that mismatch into either a pile of misrepresented numbers or a shadow
            spreadsheet tracking the &ldquo;real&rdquo; pricing outside the system. Letting each scope item
            keep its actual quote structure &mdash; labor, material, mixed, or lump sum &mdash;
            means the vendor bid templates, the comparisons, and the budgets all stay accurate at
            scale, without anyone reverse-engineering a fake unit price to make a lump-sum roofing
            bid fit a parts-only mold.
          </p>
          <p>
            For the full picture of how bids move from request to award to budget, see{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s purchasing module
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop forcing every vendor quote into the same mold.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s scope items match how trades actually price work &mdash;
              labor, material, mixed, or lump sum &mdash; and keep bid comparison and budgets
              accurate at every scale.
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
        title="Scope Items FAQ"
        subtitle="Common questions about modeling labor, material, mixed, and lump-sum vendor quotes."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
