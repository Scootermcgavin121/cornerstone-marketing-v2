import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/community-based-design-upgrade-pricing-home-builders.png";
const heroImageAlt =
  "Community based design upgrade pricing for home builders with neighborhood-specific option prices and spec levels";

const blogSchema = buildBlogPostSchema({
  title: "Why the Same Design Upgrade Should Not Cost the Same in Every Community",
  slug: "community-based-design-upgrade-pricing-home-builders",
  description:
    "Set community-specific design upgrade pricing so buyer selections reflect local vendor costs, margins, and included specifications without duplicate catalogs.",
  datePublished: "2026-09-09",
  mentionsProduct: {
    name: "Cornerstone PM Design Center",
    url: "https://www.cornerstonepm.ai/design",
  },
});

export const metadata: Metadata = {
  title:
    "Community-Based Design Upgrade Pricing for Home Builders — Cornerstone PM™ Blog",
  description:
    "Set community-specific design upgrade pricing so buyer selections reflect local vendor costs, margins, and included specifications without duplicate catalogs.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/community-based-design-upgrade-pricing-home-builders",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Community-Based Design Upgrade Pricing in Cornerstone PM",
  description:
    "Configure one option catalog while controlling what is included and what buyers pay for the same finish across different communities.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the option in Purchasing → Options",
      text: "Find the design option in your shared catalog — for example, a quartz countertop upgrade that already exists on every floorplan across every community.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Set the spec level per community",
      text: "Instead of duplicating the option, assign a Spec Level (Standard, Upgrade I/II, or Premium) to that option for each community individually. The same catalog row can be Included in one community and a paid Upgrade in another.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enter the community-specific upgrade price",
      text: "Where the option is priced as an upgrade, set the buyer-facing price for that community — reflecting the actual vendor cost and margin target for that market, not a blended average.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Save — the design center reflects it instantly",
      text: "Buyers in each community see the correct included-vs-upgrade status and price the next time they open their selections, with no separate catalog to maintain.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Track revenue against scope-linked budgets",
      text: "Every community's design upgrade revenue and matching construction scope cost stay linked to the same option and community, so margin reporting reflects reality instead of a spreadsheet reconciliation.",
    },
  ],
};

export default function CommunityDesignUpgradePricingPage() {
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

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

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
            Design
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why the Same Design Upgrade Should Not Cost the Same in Every Community
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 9, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM lets builders set community-specific design upgrade pricing on one shared
            option catalog — so the same quartz countertop can be included in one community and a
            $3,000 upgrade in another, without maintaining a duplicate catalog in{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              the design center
            </Link>
            .
          </p>

          <p>
            Vendor pricing is not the same in every market a builder operates in. A quartz slab that
            costs one price from a supplier serving Riverside Estates can cost meaningfully more from
            the vendor assigned to Oakwood Heights forty minutes away — different freight, different
            fabrication shop, different negotiated rate. Margin targets can differ too: a builder may
            protect thinner margins in a competitive new community and wider margins in an established
            one with less price sensitivity.
          </p>

          <p>
            Most design-center tools force a binary choice that ignores all of that: either build one
            price sheet and accept it is wrong somewhere, or copy the entire option catalog per
            community and accept the maintenance burden of keeping duplicates in sync every time a
            price changes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is community-based design upgrade pricing?
          </h2>

          <p>
            It is the ability to keep one organized option catalog — the same quartz countertop, the
            same tile pattern, the same cabinet pull — while controlling, per community, whether that
            option is included in the base price or sold as a paid upgrade, and exactly what it costs
            the buyer where it is an upgrade.
          </p>

          <p>
            The catalog entry itself does not change. What changes is the{" "}
            <strong className="text-white">spec level</strong> assigned to that option in each
            community: Standard, Upgrade I, Upgrade II, or Premium. A builder can mark quartz
            countertops as Included in Riverside Estates (where the base spec already covers it) and as
            a $3,000 Upgrade II in Oakwood Heights (where the base spec is laminate and quartz costs
            more to source locally) — using the exact same catalog row.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How granular is the control?
          </h2>

          <p>
            Down to a single option — not just a whole category. Most platforms only let a builder
            toggle an entire option class as included or excluded, which is too blunt for real pricing
            decisions. Cornerstone goes finer: open any individual option under{" "}
            <strong className="text-white">Purchasing → Options</strong>, change its Spec Level for that
            community, and save. One option moves from Standard to Upgrade without touching anything
            else in the category.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Option</span>
              <span>Riverside Estates</span>
              <span>Oakwood Heights</span>
            </div>
            {[
              { option: "Quartz Countertops", a: "Included (Standard)", b: "$3,000 (Upgrade II)" },
              { option: "LVP Flooring", a: "$1,800 (Upgrade I)", b: "Included (Standard)" },
              { option: "Matte Black Fixtures", a: "$650 (Upgrade I)", b: "$450 (Upgrade I)" },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-slate-800/60 text-sm last:border-b-0"
              >
                <div className="px-5 py-3.5 font-semibold text-emerald-300">{row.option}</div>
                <div className="px-5 py-3.5 text-slate-300">{row.a}</div>
                <div className="px-5 py-3.5 text-slate-300">{row.b}</div>
              </div>
            ))}
          </div>

          <p>
            Same three catalog rows, two communities, three independently correct outcomes — no
            duplicate option classes, no second price sheet to keep updated.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What if I need to exclude a whole category instead?
          </h2>

          <p>
            For that broader case, Cornerstone still has you covered with the Standard/Upgrade toggle on
            the Spec Levels page, which flips an entire option class at once. Community-based pricing and
            the category-level toggle work together: use the category toggle for a market-wide policy
            decision, and the per-option spec level for the exceptions that policy doesn&apos;t cover.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this connect to budgets and margin reporting?
          </h2>

          <p>
            Every design selection stays{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              scope-linked
            </Link>{" "}
            to the same construction cost data that drives job costing. When a buyer in Oakwood Heights
            pays $3,000 for the quartz upgrade, that revenue and the underlying vendor cost for that
            community both trace back to the same option and the same community — not a manually
            reconciled spreadsheet that drifts further from reality every month.
          </p>

          <p>
            That means a design manager can pull margin-per-option reporting by community and see, for
            example, that the quartz upgrade nets a thinner margin in Oakwood Heights because of freight
            costs — and adjust the buyer-facing price there without touching Riverside Estates at all.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter for multi-community builders?
          </h2>

          <p>
            Builders running several active communities at once are the ones who feel this problem
            first. A design team maintaining five communities in five separate price sheets is doing
            five times the update work every time a vendor changes a price, and errors compound —
            somebody eventually sells a $650 upgrade at the $450 rate from a different community because
            the sheets fell out of sync.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                One catalog vs. duplicate price sheets
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { cornerstone: "One shared option catalog", legacy: "Separate catalog per community" },
                { cornerstone: "Spec level set per community, per option", legacy: "Whole categories toggled or nothing" },
                { cornerstone: "Price update touches one option", legacy: "Price update touches every duplicate sheet" },
                { cornerstone: "Revenue traced to scope + community", legacy: "Margin reconciled manually in a spreadsheet" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="px-5 py-3.5 text-slate-300 border-r border-slate-800/60 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.cornerstone}
                  </div>
                  <div className="px-5 py-3.5 text-slate-400">{row.legacy}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            is built around a production-builder reality: the same finish, sold in multiple markets,
            at prices that reflect what it actually costs to deliver in each one. One catalog, correct
            pricing everywhere it&apos;s used, and margin reporting that matches what actually happened
            on the ground.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Price design upgrades by community, not by guesswork.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Keep one option catalog and control included-vs-upgrade status and pricing per community
              in Cornerstone PM&apos;s design center.
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
