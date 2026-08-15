import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/bulk-create-design-options.png";
const heroImageAlt =
  "Design center option catalog software — bulk creating design options from a parts catalog for a production home builder";

const blogSchema = buildBlogPostSchema({
  title: "Building a 400-Option Design Center Without Typing 400 Options",
  slug: "bulk-create-design-options-parts-catalog-home-builders",
  description:
    "Bulk-create design center options straight from your parts catalog and scope items. How production builders stand up a full option catalog in an afternoon.",
  datePublished: "2026-08-15",
  mentionsProduct: {
    name: "Cornerstone PM Design Center",
    url: "https://www.cornerstonepm.ai/design",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Bulk-Create a Design Center Option Catalog in Cornerstone PM",
  description:
    "Stand up a full production home builder design center option catalog in an afternoon using bulk creation from your parts catalog and scope items.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Set up your option classes and scope links",
      text: "In Cornerstone's Design Center, create an option class for each selection category — Flooring, Cabinetry, Countertops, Plumbing Fixtures, Lighting, and so on. Assign each option class a scope so that selections are filed under the correct trade. This is the foundation: a tile option under the Flooring class will never appear in an electrical bid template because the scope link keeps it in the right lane.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Bulk-create options from your parts catalog",
      text: "Open an option class and select 'Bulk Create from Parts Catalog.' Cornerstone filters the catalog to parts matching that option class's scope, so you only see relevant items. Select the parts that should become design options and confirm — each selected part becomes an option inheriting its name, unit, and scope identity from the part record. Prices are not invented; they pull from accepted vendor pricing only.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Bulk-create options from scope items",
      text: "For options that map to existing scope items rather than individual parts, use 'Bulk Create from Scope Items.' Select the scope and the relevant items; Cornerstone generates options from the scope-item records in the same one-step flow. Any scope item without accepted vendor pricing creates an option that shows $0 / needs pricing — a clear prompt to finish the bid cycle, not a fabricated number.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Assign Designer Packages to the populated option classes",
      text: "With the option catalog built, assign options to Designer Packages — curated bundles like Modern Farmhouse or Coastal that auto-lock coordinated choices across categories when a buyer picks the package. Because the option catalog was built from real catalog data rather than manual entry, the packages reflect actual products and real pricing from the start.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Let Foreman AI fill gaps and manage changes by chat",
      text: "For ongoing maintenance — adding new products, updating an option when a vendor changes their lineup, or expanding the catalog into a new scope — Foreman AI can create options and update scope items by chat. Ask Foreman to add a plumbing fixture option and it follows the same scope-first, vendor-priced flow a purchasing manager would use by hand.",
    },
  ],
};

const manualVsBulk = [
  {
    manual: "Type each option name, unit, and scope manually",
    bulk: "Bulk-create from parts catalog — inherits name, unit, scope automatically",
  },
  {
    manual: "Invent or estimate option prices to avoid blank fields",
    bulk: "Prices pull from accepted vendor pricing only — blank means $0 / needs pricing",
  },
  {
    manual: "Risk filing tile options in an electrical bid template",
    bulk: "Scope link on the option class keeps selections in the right trade lane",
  },
  {
    manual: "Re-enter the catalog when a vendor updates their lineup",
    bulk: "Update the part or scope item once — options inherit the change",
  },
  {
    manual: "Weeks to stand up a full catalog; team stalls out",
    bulk: "Full catalog across 7+ categories possible in an afternoon",
  },
];

const catalogBlocks = [
  {
    label: "Parts catalog source",
    detail:
      "Parts already in Cornerstone from takeoffs and vendor pricing become design options in one step — no retyping product names, units, or scope tags.",
  },
  {
    label: "Scope items source",
    detail:
      "Scope items with accepted vendor pricing generate options with real prices attached. Items without accepted pricing create options flagged as needing pricing.",
  },
  {
    label: "Scope-linked option classes",
    detail:
      "Every option is filed under an option class, and every option class is tied to a scope. A flooring option can only appear in flooring bid templates — never in plumbing.",
  },
  {
    label: "Hard cost rule enforced",
    detail:
      "Bulk creation never invents a cost. Every dollar in the catalog traces back to accepted vendor pricing or shows as needs pricing — no estimator fudging baked into the catalog.",
  },
  {
    label: "Foreman AI for ongoing changes",
    detail:
      "Ask Foreman to add, update, or reorganize catalog options by conversation. It follows the same scope-first, vendor-priced rules the manual flow uses.",
  },
];

export const metadata: Metadata = {
  title:
    "Building a 400-Option Design Center Without Typing 400 Options — Cornerstone PM™ Blog",
  description:
    "Bulk-create design center options straight from your parts catalog and scope items. How production builders stand up a full option catalog in an afternoon.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/bulk-create-design-options-parts-catalog-home-builders",
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

export default function BulkCreateDesignOptionsPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Building a 400-Option Design Center Without Typing 400 Options
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 15, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The biggest reason production builders stall out setting up a{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            isn&apos;t the software — it&apos;s the catalog. Bulk-create options
            directly from your parts catalog and scope items, and a full
            400-option catalog across seven categories becomes an afternoon&apos;s
            work rather than a month&apos;s.
          </p>

          <p>
            Most construction software treats the design center catalog as a data-entry
            project. Someone sits down and types every option: the name, the unit, the
            scope tag, the spec level, and hopefully a price — for every flooring
            material, every cabinet style, every countertop, every plumbing fixture,
            and every light fixture across every floorplan. At 400 options that is
            weeks of entry before the first buyer sees a selection screen. Teams start,
            stall, and the design center never goes live.
          </p>

          <p>
            The better path is to build the catalog from data that already exists in
            the platform rather than typing it in from scratch.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where do bulk-created options come from?
          </h2>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Design Center
            </Link>{" "}
            supports two bulk-creation sources: the parts catalog and scope items.
            Both paths skip the blank-field data entry problem because the option
            inherits its identity from a record that already carries the right name,
            unit, and scope tag.
          </p>

          <p>
            From the <strong className="text-white">parts catalog</strong>: open an
            option class, select &ldquo;Bulk Create from Parts Catalog,&rdquo; and
            Cornerstone filters the catalog to parts whose scope matches the option
            class. Select the parts that should become options, confirm, and
            Cornerstone generates them. A flooring tile from the catalog becomes a
            flooring option without a single field retyped.
          </p>

          <p>
            From <strong className="text-white">scope items</strong>: for options
            that map to existing scope items rather than individual parts — a framing
            labor line, a painting allowance, a fixture package — use &ldquo;Bulk
            Create from Scope Items.&rdquo; Cornerstone generates options from the
            scope-item records in the same one-step flow. Any scope item with accepted
            vendor pricing creates an option with that price attached. Any scope item
            without accepted pricing creates an option flagged as{" "}
            <em>needs pricing</em> — an honest prompt to finish the bid cycle, not a
            made-up number.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Manual catalog entry vs. bulk creation
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-2 text-xs font-semibold text-slate-500 uppercase tracking-wide px-5 py-2.5 bg-slate-900/40">
                <span>Without bulk create</span>
                <span className="text-emerald-500">With Cornerstone bulk create</span>
              </div>
              {manualVsBulk.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-slate-800/60 text-sm">
                  <div className="px-5 py-3.5 text-slate-400 border-r border-slate-800/60">
                    {row.manual}
                  </div>
                  <div className="px-5 py-3.5 text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.bulk}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do scope links matter for design options?
          </h2>

          <p>
            Every option in Cornerstone is filed under an option class, and every
            option class is tied to a scope. That scope link is what keeps a tile
            selection out of an electrical bid template and keeps a lighting fixture
            out of a plumbing comparison.
          </p>

          <p>
            When a vendor receives a bid request, the bid template is filtered to the
            vendor&apos;s scope — so a flooring vendor sees flooring options and
            nothing else. When a buyer makes a selection in the design center, the
            selected option flows to the right scope line in the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Master Cost Budget
            </Link>{" "}
            automatically. The design center and the budget never disagree because
            they share the same scope structure.
          </p>

          <p>
            Bulk creation preserves this structure. When you create options from
            a parts catalog filtered to the Flooring option class, every generated
            option inherits the Flooring scope. There is no step where a
            mis-scoped line slips through because someone was copying and pasting
            rows in a spreadsheet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about pricing — does bulk create invent costs?
          </h2>

          <p>
            No. Cornerstone enforces a platform-wide hard cost rule: nothing carries
            a stored or default cost, and bulk option creation follows the same rule.
            Options generated from parts with accepted vendor pricing carry that
            real price. Options generated from parts or scope items with no accepted
            pricing show as <em>$0 / needs pricing</em> — a visible gap that tells
            the purchasing team exactly where to go next in the bid cycle.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  Why &ldquo;needs pricing&rdquo; is better than a made-up number
                </p>
                <p className="text-sm text-slate-400">
                  Design-center tools that ship default cost libraries let builders
                  forget to update them. A tile option priced at a 2022 material cost
                  is worse than a tile option that clearly shows $0 — the second one
                  tells the truth. Every upgrade price a buyer sees in the
                  Cornerstone design center traces back to accepted vendor pricing,
                  not estimator guesses.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Foreman AI fit into catalog management?
          </h2>

          <p>
            For builders who would rather describe the catalog than click it —
            or who need to add, update, or reorganize options as the vendor lineup
            changes —{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            can manage catalog work by conversation.
          </p>

          <p>
            Ask Foreman to add a new plumbing fixture option to the Plumbing
            Fixtures class and it creates the option following the same scope-first,
            vendor-priced flow a purchasing manager would use by hand — no default
            cost invented, scope linked correctly, flagged as needs pricing until a
            real bid is accepted. Ask it to move an option from Standard to Upgrade I
            spec level and it makes the change in one step, which automatically
            moves that option out of the base price and into the buyer&apos;s paid
            upgrade column.
          </p>

          <p>
            This is the same read-and-write pattern that makes Foreman an agent
            rather than a chatbot: the options it creates are real records in the
            platform, not a chat transcript to copy out later.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What bulk creation gives you
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {catalogBlocks.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens after the catalog is built?
          </h2>

          <p>
            A populated option catalog is the foundation for the rest of the design
            center. Once options are in the platform, they can be grouped into
            Designer Packages — the 64 curated bundles across seven categories
            that auto-lock coordinated choices when a buyer picks a style. A buyer
            who selects the Modern Farmhouse package gets the right flooring, the
            right cabinet pull, and the right countertop automatically instead of
            being asked to assemble them one option at a time.
          </p>

          <p>
            Option classes link to scope, so selections feed the budget automatically.
            Exclusion groups make conflicting choices impossible — a buyer can pick
            Carpet, Tile, LVP, or Hardwood in the Flooring class, but picking one
            marks the category complete rather than asking them to pick all four.
            Spec levels let builders promote any standard finish to a paid upgrade
            with a single change, down to the individual option rather than the whole
            category.
          </p>

          <p>
            All of that functionality depends on the catalog being complete and
            correctly scoped. The fastest path to a working design center is building
            the catalog from data that already exists — then letting the platform&apos;s
            structure do the rest.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stand up a full design center this week.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone&apos;s bulk option creation, scope-linked option classes,
              and Foreman AI reduce a month-long catalog project to an afternoon.
              See the full production home builder design center in action.
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
