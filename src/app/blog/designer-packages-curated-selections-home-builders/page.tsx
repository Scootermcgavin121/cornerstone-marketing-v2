import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Layers, Lock, Star } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/designer-packages.png";
const heroImageAlt =
  "Designer Packages in Cornerstone PM design center — curated, pre-priced selection bundles for home builders across multiple style categories";

const blogSchema = buildBlogPostSchema({
  title: "Designer Packages: Curated Selections That Sell Homes Faster",
  slug: "designer-packages-curated-selections-home-builders",
  description:
    "Cornerstone PM's Designer Packages give buyers curated, pre-priced design bundles instead of a spreadsheet of options — 64 packages across 7 categories, à la carte ready.",
  datePublished: "2026-06-20",
});

export const metadata: Metadata = {
  title:
    "Designer Packages: Curated Selections That Sell Homes Faster — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM's Designer Packages give buyers curated, pre-priced design bundles instead of a spreadsheet of options — 64 packages across 7 categories, à la carte ready.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/designer-packages-curated-selections-home-builders",
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

const packageCategories = [
  {
    icon: <Layers className="w-4 h-4 text-cyan-400" />,
    name: "Flooring",
    example: "The Modern Farmhouse package auto-selects wide-plank white oak LVP — no separate flooring decision required.",
  },
  {
    icon: <Layers className="w-4 h-4 text-violet-400" />,
    name: "Cabinetry & Hardware",
    example: "The Coastal package locks in shaker-style white cabinetry with brushed nickel pulls — one pick, entire kitchen coordinated.",
  },
  {
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    name: "Countertops",
    example: "The Urban Contemporary package selects honed concrete-look quartz — no countertop selection loop, no buyer indecision.",
  },
  {
    icon: <Layers className="w-4 h-4 text-amber-400" />,
    name: "Tile & Backsplash",
    example: "Subway tile or large-format porcelain — defined by the package the buyer already chose, not a separate decision.",
  },
  {
    icon: <Layers className="w-4 h-4 text-rose-400" />,
    name: "Fixtures & Plumbing",
    example: "Fixtures match the package finish — matte black for Urban Contemporary, brushed gold for the Transitional package.",
  },
  {
    icon: <Layers className="w-4 h-4 text-indigo-400" />,
    name: "Interior Paint",
    example: "Each package carries a curated paint palette — walls, trim, and accent — so the whole home feels designed, not assembled.",
  },
  {
    icon: <Layers className="w-4 h-4 text-teal-400" />,
    name: "Exterior Elevation",
    example: "Some packages extend to exterior color palettes and trim details, completing the look from curb to closet.",
  },
];

const comparisonRows = [
  {
    feature: "Curated design packages (pick one, everything coordinates)",
    cornerstone: true,
    generic: false,
  },
  {
    feature: "Auto-lock category options when a package is selected",
    cornerstone: true,
    generic: false,
  },
  {
    feature: "À la carte unlock if package is removed",
    cornerstone: true,
    generic: "Manual only",
  },
  {
    feature: "Real vendor pricing behind every option (no filler pricing)",
    cornerstone: true,
    generic: false,
  },
  {
    feature: "Per-floorplan options reused across plan repeats",
    cornerstone: true,
    generic: false,
  },
  {
    feature: "Exclusion groups (pick one, category marks complete)",
    cornerstone: true,
    generic: false,
  },
  {
    feature: "Scope-linked options (design selections trace to vendor scope)",
    cornerstone: true,
    generic: false,
  },
];

export default function DesignerPackagesPage() {
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
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Designer Packages: Curated Selections That Sell Homes Faster
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 20, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s Designer Packages let buyers choose a curated design bundle —
            &ldquo;Modern Farmhouse,&rdquo; &ldquo;Coastal,&rdquo; &ldquo;Urban Contemporary&rdquo; — and every
            option in every category auto-locks to that coordinated look. One decision. Zero
            spreadsheet. Real vendor pricing behind every item.
          </p>

          <p>
            The selections process is where buyer confidence either builds or collapses. Hand
            someone a spreadsheet of 300 raw options and you&apos;ve handed them a decision paralysis
            problem. Hand them six curated design styles with real photos and real pricing and
            you&apos;ve made your design studio a sales asset.{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s design center
            </Link>{" "}
            is built around exactly this insight: the way you present choices shapes how quickly
            — and how confidently — buyers make them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is a Designer Package?
          </h2>
          <p>
            A Designer Package is a named, curated collection of pre-priced design selections
            that spans every category in your design center — flooring, cabinetry, countertops,
            tile, fixtures, paint, and more. When a buyer picks a package, Cornerstone
            automatically locks every category option to the corresponding selection for that
            style. No separate flooring decision. No separate countertop decision. One package
            pick coordinates the whole home.
          </p>
          <p>
            Builders configure up to 64 packages across 7 categories. Each package has a name, a
            visual, and a real price tied to actual vendor bids — not estimator fudge factors or
            allowances. When you update vendor pricing, the packages update with it.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                How a package plays out across 7 categories
              </h3>
            </div>
            <div className="divide-y divide-slate-800/60">
              {packageCategories.map((cat) => (
                <div key={cat.name} className="flex gap-4 px-5 py-4">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mt-0.5">
                    {cat.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm mb-0.5">{cat.name}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{cat.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do packages shorten the selections cycle?
          </h2>
          <p>
            Decision fatigue is a documented sales killer. When buyers face an open-ended field
            of 50 flooring choices, 40 cabinet options, 30 countertop surfaces, and 25 tile
            patterns independently, two things happen: the process takes weeks longer than it
            should, and anxiety creeps in as buyers second-guess whether their individual picks
            actually go together.
          </p>
          <p>
            Packages solve both problems at once. A &ldquo;Coastal&rdquo; package is a promise: these
            finishes are curated to work together. The buyer is making one style decision, not 200
            isolated material decisions. The coordination work was done once, by your design team,
            when you configured the package — not repeated by every buyer who walks into your
            design studio.
          </p>
          <p>
            The result: faster selections appointments, fewer callbacks, fewer change requests
            after signatures, and a buyer who walks out feeling confident rather than
            overwhelmed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            À la carte is still available — and it&apos;s the right fallback
          </h2>
          <p>
            Packages aren&apos;t a cage. The moment a buyer removes a package, every category
            unlocks for individual selection. This is intentional: some buyers want to mix
            a Modern Farmhouse floor with an Urban Contemporary cabinet finish — and that&apos;s fine.
            The package is a starting point, not a locked contract.
          </p>
          <p>
            In practice, most buyers who start with a package end up keeping 70–90% of its
            defaults and swapping one or two items. That&apos;s exactly the behavior you want: fast
            package adoption, minimal individual decisions, a manageable number of custom changes
            to process.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Real pricing integrity: no filler, no allowances
          </h2>
          <p>
            This is where Cornerstone PM diverges sharply from most design center implementations.
            Many platforms let you enter an allowance — &ldquo;$8,500 flooring allowance&rdquo; — and call
            it a selection. The allowance is a placeholder, not a price. It tells the buyer almost
            nothing about what they&apos;re actually getting, and it creates a reconciliation headache
            at closing when actuals don&apos;t match the estimate.
          </p>
          <p>
            Cornerstone removed filler and default pricing across the entire platform. Every dollar
            in a Designer Package traces back to an actual vendor bid, a real takeoff part, and a
            confirmed scope item. When a buyer picks the Modern Farmhouse package, the flooring
            line in their contract reflects what your LVP vendor actually quoted for that plan —
            not an allowance you hope covers it.
          </p>
          <p>
            This pricing integrity flows directly from the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              production builder platform architecture
            </Link>
            : options link to scope items, scope items link to vendor bids, and vendor bids feed
            the Master Cost Budget. The design center and the purchasing module are one system,
            not two spreadsheets you reconcile at month end.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Plan repeats: configure once, sell across every community
          </h2>
          <p>
            Here&apos;s the production builder unlock that job-level selection tools miss entirely.
          </p>
          <p>
            In Buildertrend, CoConstruct, or a generic PM tool, every home is a fresh selections
            job. You set up the Magnolia plan&apos;s design options, then do it again for the next
            Magnolia, and again for the community after that. There is no concept of &ldquo;this plan&apos;s
            options are the same across every home of this plan in every community.&rdquo;
          </p>
          <p>
            Cornerstone is built around plan repeats. Configure the Magnolia plan&apos;s Designer
            Packages once. Assign the Magnolia plan to five communities. Every Magnolia sold in
            every community pulls from the same option configuration, with community-level pricing
            adjustments (Area Cost Pricing) where the market requires it. Selling 80 Magnolias a
            year means 80 design-center interactions, not 80 setup sessions.
          </p>
          <p>
            This is the difference between a design center and a{" "}
            <em>production</em> design center.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone&apos;s design center compares
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white">
                Designer Packages: Cornerstone PM vs. typical selections software
              </h3>
            </div>
            <div className="divide-y divide-slate-800/60">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 text-sm"
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
                    {typeof row.generic === "string" ? (
                      <span className="text-xs text-amber-400">{row.generic}</span>
                    ) : row.generic === true ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 text-xs font-medium text-slate-500 uppercase tracking-wide bg-slate-900/60 border-t border-slate-800">
              <div className="px-5 py-3">Feature</div>
              <div className="px-5 py-3 text-center">Cornerstone PM</div>
              <div className="px-5 py-3 text-center">Typical selections tool</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Exclusion groups: the detail that makes packages complete
          </h2>
          <p>
            Packages handle most of a buyer&apos;s decisions. But some categories are inherently
            pick-one choices even outside of a package: flooring material (carpet <em>or</em> LVP{" "}
            <em>or</em> tile, not all three), countertop surface (granite <em>or</em> quartz),
            roofing (asphalt <em>or</em> metal).
          </p>
          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/blog/design-center-exclusion-groups-pick-one"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              exclusion groups
            </Link>{" "}
            handle this cleanly: configure a group, drag in the relevant option classes, set
            &ldquo;Pick One,&rdquo; and the category marks complete the moment the buyer makes a single
            selection. Previously, marking a category &ldquo;required&rdquo; forced buyers to pick every
            option in it — which doesn&apos;t work for mutually exclusive choices. Exclusion groups
            fix the logic so selection-progress dashboards actually reflect reality instead of
            showing every carpet-vs-tile category as permanently incomplete.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Granular upgrade control: mark any option as a paid upgrade
          </h2>
          <p>
            Packages define what&apos;s included in the base price. But what if one finish in a
            package should be an upgrade rather than standard? Cornerstone gives builders
            granular control down to the individual option.
          </p>
          <p>
            Go to Purchasing → Options, open the option, change its Spec Level from Standard to
            Upgrade I, Upgrade II, or Premium, and save. That one option drops out of the base
            price and becomes a paid +$X line item. You don&apos;t have to promote an entire
            category — just the specific finish you want to monetize. This is the margin
            protection story that most design center tools leave on the table.
          </p>
          <p>
            Combined with community-based upgrade pricing, the same finish can be standard in
            one community and a $1,500 upgrade in a higher-margin community — all managed inside
            the same platform without separate price lists.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The Foreman AI connection: packages meet 396+ construction skills
          </h2>
          <p>
            Design center work doesn&apos;t live in isolation. When a buyer picks a Designer Package,
            the downstream purchasing workflow — vendor scope, bid templates, Master Cost Budget
            lines — updates automatically because options link to scope items.{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>
            , with 396+ construction skills and per-user memory, can run that chain: look up
            which vendor is assigned to a community for LVP installation, pull current pricing
            from the bid on file, flag any pricing gaps, and draft the purchase order — without
            you leaving the app.
          </p>
          <p>
            That&apos;s not a chatbot layered on top of a design center. That&apos;s a construction
            agent that reads and writes the same data your design center uses. The package a
            buyer picks in the design studio flows through to the purchasing module, the
            vendor&apos;s scope, and the job cost report — automatically.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 text-emerald-400" />
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              A design center that actually sells homes
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              64 Designer Packages across 7 categories. Real vendor pricing. Auto-lock on
              selection. Plan repeats across every community. Exclusion groups. Upgrade pricing
              down to the individual option. This is{" "}
              <span className="text-white font-semibold">
                what a production design center looks like
              </span>{" "}
              — not a spreadsheet with allowances.
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
