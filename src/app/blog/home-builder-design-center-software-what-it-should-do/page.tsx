import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/home-builder-design-center-software.png";
const heroImageAlt =
  "Home builder design center software — spec levels, designer packages, and vendor-priced upgrades in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "What Home Builder Design Center Software Should Actually Do",
  slug: "home-builder-design-center-software-what-it-should-do",
  description:
    "What should home builder design center software do? Spec levels, exclusion groups, designer packages, and vendor-priced upgrades that flow straight to budgets.",
  datePublished: "2026-07-27",
});

export const metadata: Metadata = {
  title:
    "What Home Builder Design Center Software Should Actually Do — Cornerstone PM™ Blog",
  description:
    "What should home builder design center software do? Spec levels, exclusion groups, designer packages, and vendor-priced upgrades that flow straight to budgets.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/home-builder-design-center-software-what-it-should-do",
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

const barItems = [
  {
    feature: "Spec-level control",
    description:
      "Included-vs-upgrade decisions down to a single option, not just whole categories. Promote any standard finish to a paid upgrade with one spec-level change.",
  },
  {
    feature: "Exclusion groups",
    description:
      "Conflicting selections made impossible. A buyer picks Carpet or LVP or Tile — one choice completes the category instead of leaving all others required.",
  },
  {
    feature: "Designer packages",
    description:
      "Curated bundles that auto-lock coordinated options when a package is chosen. Buyers get a confident starting point; builders get consistent selections cycles.",
  },
  {
    feature: "Options linked to scope items",
    description:
      "Every buyer selection lands automatically in the budget. No export, no re-keying — the design center and the Master Cost Budget stay in sync by design.",
  },
  {
    feature: "Vendor-priced upgrades",
    description:
      "Upgrade prices trace back to accepted vendor pricing, not estimator guesses. The design center and the cost budget always agree because they share the same source.",
  },
];

const comparisonRows = [
  {
    capability: "Granular included/upgrade control",
    cornerstone: "Per-option spec-level — promote a single finish to a paid upgrade",
    typical: "Toggle whole categories as included or not",
  },
  {
    capability: "Conflicting selections",
    cornerstone: "Exclusion groups — pick one, category completes",
    typical: "All options remain required, builders fix manually",
  },
  {
    capability: "Package selections",
    cornerstone: "64 Designer Packages auto-lock coordinated options across 7 categories",
    typical: "Flat option lists, no package abstraction",
  },
  {
    capability: "Budget connection",
    cornerstone: "Options linked to scope items — selections update the Master Cost Budget live",
    typical: "Design and budget live in separate silos",
  },
  {
    capability: "Upgrade pricing source",
    cornerstone: "Accepted vendor bids — every upgrade traces to a real awarded price",
    typical: "Estimator-entered numbers or synthetic splits",
  },
];

export default function DesignCenterSoftwarePage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            What Home Builder Design Center Software Should Actually Do
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 27, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A buyer-facing selections list is not a{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>
            . The difference is whether selections drive the budget automatically, whether
            conflicting choices are impossible, and whether upgrade prices trace back to
            real vendor pricing — not an estimator&apos;s guess.
          </p>

          <p>
            Most production builders inherit a selections tool that was built for custom
            builders or remodelers: a flat list of options, a shared allowance per category, and
            a spreadsheet somewhere that nobody fully trusts. The selections process works until
            a buyer picks two conflicting finishes, or the design center number disagrees with
            the Master Cost Budget, or a change order surfaces and nobody can explain where the
            upgrade price came from.
          </p>

          <p>
            This post lays out what production home builder design center software should
            actually do — and why each piece matters for margins, buyer experience, and
            schedule.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What&apos;s the bar?
          </h2>

          <div className="not-prose space-y-4 my-6">
            {barItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.feature}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does granular spec-level control matter?
          </h2>

          <p>
            Most design-center tools let you toggle entire option categories as included or
            excluded from the base price. That&apos;s too blunt. A production builder might want
            standard cabinet hardware included but a specific premium pull to be a paid upgrade —
            without bumping the entire cabinet category to optional.
          </p>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Design Center
            </Link>{" "}
            takes control down to the individual option. Open any option under
            Purchasing → Options, change its Spec Level from Standard to Upgrade I, Upgrade II,
            or Premium, and it drops out of the base price and becomes a paid +$X upgrade. The
            Standard/Upgrade toggle on the Spec Levels page handles category-wide exclusions
            when you want all options in a class to require an upgrade fee.
          </p>

          <p>
            The marketing angle is straightforward: builders protect margin on materials where
            buyers consistently choose up, while keeping the base price competitive on finishes
            that most buyers accept at standard.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why are exclusion groups necessary?
          </h2>

          <p>
            Without exclusion groups, a selection category like Flooring has a structural
            problem: if you mark it required, the buyer has to select all four options
            (Carpet, Tile, LVP, and Hardwood) before the category shows complete — which is
            obviously wrong. If you leave them all optional, the category never marks complete
            even after the buyer makes a real selection.
          </p>

          <p>
            Exclusion groups solve it: define the four flooring options as a &quot;pick one&quot; group,
            and the moment the buyer selects Tile, the Flooring category is done. The other
            three options grey out. Selection-progress dashboards stop showing &quot;incomplete&quot; on
            categories where the buyer has genuinely finished.
          </p>

          <p>
            Beyond flooring, the same logic applies anywhere a buyer makes a real choice between
            mutually exclusive options: roofing material (Asphalt or Metal), countertops
            (Granite or Quartz), exterior siding style. None of the leading competitor platforms
            — Buildertrend, JobTread, NEWSTAR — model option-class exclusivity natively.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do Designer Packages shorten the selections cycle?
          </h2>

          <p>
            A buyer handed 300 individual options across 12 categories will freeze. The
            decision fatigue is real, and it extends the selections cycle by weeks while
            the build schedule waits.
          </p>

          <p>
            Designer Packages solve the starting-point problem. Cornerstone ships 64 curated
            packages across 7 categories — Modern Farmhouse, Coastal Retreat, Urban
            Contemporary, and more. A buyer picks a package and every category option
            auto-locks to that coordinated look. If they want to customize, removing the
            package unlocks à la carte selections.
          </p>

          <p>
            From a builder&apos;s perspective, packages also protect consistency: you know
            exactly what the Modern Farmhouse finish schedule looks like across every home that
            chooses it, which makes purchasing and scheduling predictable. From a buyer&apos;s
            perspective, it&apos;s a confident starting point instead of a wall of isolated
            choices.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How should selections connect to the budget?
          </h2>

          <p>
            In most tools, the design center and the cost budget are separate. A buyer upgrades
            to Premium Cabinets in the design center. The project manager manually updates a
            spreadsheet line. The Master Cost Budget is right until someone forgets to update it.
          </p>

          <p>
            In Cornerstone, Option Classes tie a selection category to a scope — and design
            options link directly to scope items. When a buyer selects Premium Cabinets, the
            cabinetry scope in the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Master Cost Budget
            </Link>{" "}
            updates automatically. No export, no re-keying, no lag. The design center and the
            budget share the same data, not copies of it.
          </p>

          <p>
            You can also bulk-create options from scope items or the parts catalog, and set
            global retail pricing mode so buyer-facing prices calculate consistently across
            every plan and community.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does the upgrade pricing source matter so much?
          </h2>

          <p>
            The differentiator that ties everything together is the hard cost rule: upgrade prices
            in Cornerstone trace back to accepted vendor pricing, not estimator guesses. A line
            with no accepted price shows as $0 / needs pricing instead of a synthetic number
            that nobody can defend.
          </p>

          <p>
            This matters when a buyer asks why the Premium Cabinet upgrade is $8,500 more than
            the standard package. If the base cabinet cost is a filler number, there&apos;s no honest
            answer. If it&apos;s grounded in real vendor pricing, the answer is a specific bid from
            a specific vendor on a specific date.
          </p>

          <p>
            It also matters for change orders. When a buyer upgrades mid-build and the original
            selection cost is traceable to a real bid, the change order delta is real too — not a
            negotiated number that erodes margin.
          </p>

          <p>
            Foreman AI respects this rule too. When{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            manages options and packages by chat, it adds parts and scope items following the
            same scope-first, vendor-priced flow — no invented numbers, even when the AI is
            doing the work.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM compare?
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <span>Capability</span>
              <span className="text-center">Cornerstone PM</span>
              <span className="text-center">Typical tools</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300 font-medium">{row.capability}</div>
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
            What does this look like in practice?
          </h2>

          <p>
            A production builder running 80 homes per year across three communities sets up the
            Magnolia plan once: 64 Designer Packages auto-lock coordinated finishes, spec
            levels are configured per option so the base price is accurate, exclusion groups
            make conflicting flooring and roofing selections impossible, and every option class
            is wired to a scope item so buyer upgrades flow directly into purchasing.
          </p>

          <p>
            When the Magnolia plan sells in Community Oak Ridge, the buyer opens the design
            center, picks the Modern Farmhouse package, swaps one cabinet choice, and the
            selections are done in a single appointment. The upgrade delta updates the Master
            Cost Budget in real time. The change order, if one comes later, is priced off the
            same accepted vendor bid the original selection used.
          </p>

          <p>
            That&apos;s the bar. A buyer-facing selections list is a starting point. A real
            production home builder design center is what turns those selections into a
            trustworthy budget without anyone in the middle re-keying numbers.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              A design center that actually moves the build forward
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Spec levels, exclusion groups, Designer Packages, and vendor-priced upgrades —
              all wired into the budget automatically. See how Cornerstone PM&apos;s Design Center
              works for production builders.
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
