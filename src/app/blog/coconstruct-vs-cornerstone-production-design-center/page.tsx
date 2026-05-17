import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X } from "lucide-react";

const heroImage = "/blog/vs-coconstruct.png";
const heroImageAlt =
  "Production home builder design center software comparing CoConstruct job-level selections to Cornerstone PM Designer Packages";

export const metadata: Metadata = {
  title:
    "CoConstruct vs Cornerstone PM: Production Builder Design Center \u2014 Cornerstone PM\u2122 Blog",
  description:
    "CoConstruct (now Buildertrend) builds for custom builders. Compare its job-level selections to Cornerstone PM\u2019s per-floorplan production design center model.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/coconstruct-vs-cornerstone-production-design-center",
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

const faqItems: FAQItem[] = [
  {
    q: "What happened to CoConstruct?",
    a: "CoConstruct was acquired by Buildertrend. The CoConstruct homepage now redirects to a migration landing page encouraging CoConstruct customers to move to Buildertrend. Both platforms are built for custom builders \u2014 job-level selections, allowances, and one-off project management \u2014 not production home builder workflows.",
  },
  {
    q: "What is the difference between CoConstruct and Cornerstone PM for design centers?",
    a: "CoConstruct handles selections at the job level: each homeowner gets a unique allowance negotiated per project. Cornerstone PM uses a plan-level model: options are priced once per floorplan and reused across every home of that plan in every community. Cornerstone PM also ships 64 curated Designer Packages that auto-lock category options when selected \u2014 CoConstruct has no equivalent abstraction.",
  },
  {
    q: "Can CoConstruct handle plan repeats across multiple communities?",
    a: "No. CoConstruct\u2019s data model is project-by-project, designed for custom builders who negotiate each home uniquely. It has no concept of a floorplan model, per-floorplan options priced once for reuse, community-assigned vendors, or multi-community lot management. Production builders selling the same plan across 3\u20135 communities need a fundamentally different platform.",
  },
  {
    q: "What are Designer Packages and does CoConstruct have them?",
    a: "Designer Packages are curated bundles of options (finishes, fixtures, upgrades) that auto-lock all category selections when a buyer chooses a package. Cornerstone PM ships 64 Designer Packages across 7 categories. CoConstruct has no Designer Package model \u2014 selections are allowance-based and manually configured per job.",
  },
  {
    q: "Is Cornerstone PM a CoConstruct alternative?",
    a: "Cornerstone PM is a production home builder platform, not a custom builder platform like CoConstruct. If you are a production builder doing plan repeats across multiple communities with a buyer-facing design center, Cornerstone PM is purpose-built for your workflow. If you are a custom builder managing one-off projects, CoConstruct or Buildertrend may be a closer fit \u2014 though you should verify your specific workflow needs.",
  },
  {
    q: "What does Cornerstone PM offer that CoConstruct doesn\u2019t?",
    a: "Cornerstone PM offers: 64 Designer Packages with auto-locking category options, per-floorplan options priced once and reused across plan repeats, multi-community vendor assignment, AI material takeoff from PDFs (130+ scopes in <60 seconds), Foreman AI with 100+ skills, Structural vs Designer scope separation for bid templates, Area Cost Pricing for community extras, and zero filler/default pricing. None of these production-residential workflows exist in CoConstruct.",
  },
  {
    q: "What does \u2018zero filler pricing\u2019 mean in Cornerstone PM?",
    a: "Every dollar displayed to a buyer or builder in Cornerstone PM traces back to actual vendor pricing \u2014 no synthetic estimates, no filler defaults, no estimator-inserted placeholders. Material costs come from real takeoff parts; labor costs from vendor bids. This means your design center pricing is always anchored to reality, not approximations that silently drift over time.",
  },
];

type CompareRow = {
  feature: string;
  coconstruct: boolean | "partial";
  cornerstone: boolean | "partial";
};

const compareRows: CompareRow[] = [
  { feature: "Plan-level options (priced once, reused across homes)", coconstruct: false, cornerstone: true },
  { feature: "Designer Packages (auto-lock category options)", coconstruct: false, cornerstone: true },
  { feature: "Multi-community lot and model management", coconstruct: false, cornerstone: true },
  { feature: "Community-assigned vendor wins per scope", coconstruct: false, cornerstone: true },
  { feature: "Structural vs Designer scope separation", coconstruct: false, cornerstone: true },
  { feature: "Area Cost Pricing for community extras", coconstruct: false, cornerstone: true },
  { feature: "Zero filler/default pricing (all costs from real data)", coconstruct: false, cornerstone: true },
  { feature: "AI material takeoff from floor plan PDF", coconstruct: false, cornerstone: true },
  { feature: "Foreman AI (100+ skills)", coconstruct: false, cornerstone: true },
  { feature: "Job-level custom selections (allowance model)", coconstruct: true, cornerstone: "partial" },
  { feature: "Custom builder project management", coconstruct: true, cornerstone: false },
  { feature: "Client portal for change orders", coconstruct: true, cornerstone: false },
  { feature: "Still an active, maintained product", coconstruct: false, cornerstone: true },
];

function CellIcon({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return <Check className="w-5 h-5 text-emerald-400 mx-auto" aria-label="Yes" />;
  if (value === false)
    return <X className="w-5 h-5 text-slate-600 mx-auto" aria-label="No" />;
  return (
    <span className="text-amber-400 text-sm font-medium mx-auto block text-center">
      Partial
    </span>
  );
}

export default function CoConstructVsCornerstonePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
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
              creditText: "Cornerstone PM\u2122",
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            CoConstruct vs Cornerstone PM: Production Builder Design Center
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 17, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            CoConstruct was built for custom home builders managing one-of-a-kind projects with
            negotiated allowances and job-level selections. Cornerstone PM&trade; is built for
            production home builders selling plan repeats across communities with a buyer-facing
            design center and 64 Designer Packages. These are different product categories
            solving different problems.
          </p>

          <p>
            CoConstruct&apos;s homepage now redirects to a Buildertrend migration landing page
            &mdash; the platform was acquired and customers are being moved to Buildertrend.
            If you&apos;re a production builder evaluating your next platform and CoConstruct
            came up in your search, this is the right time to ask whether either product was
            ever built for your business model. For the full category overview, start at{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is CoConstruct built for?
          </h2>
          <p>
            CoConstruct was designed for custom home builders and remodelers managing individual
            projects with unique scopes, client negotiations, and allowance-based selections.
            The core model is job-level: every home is treated as its own project with its own
            selection list, its own pricing negotiated with the homeowner, and its own change
            order log.
          </p>
          <p>
            For a custom builder who builds five completely different homes every year, each with
            a different client, different lot, and different finish package, this model makes
            sense. You are starting fresh on every project because every project genuinely is
            fresh.
          </p>
          <p>
            For a production builder selling the same Magnolia plan across three communities?
            Starting fresh on every home is the problem, not the workflow.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does the custom builder model break for production?
          </h2>
          <p>
            Production home building runs on a different set of economics. You sell plan
            repeats &mdash; the Magnolia plan gets sold 80 times across five communities. The
            kitchen upgrade package is the same product in Community A as it is in Community D.
            You configure it once; it should sell everywhere without re-entry.
          </p>
          <p>
            CoConstruct&apos;s job-level selection model requires per-home configuration by
            definition. There is no concept of a floorplan template with shared option pricing.
            There is no Designer Package abstraction that auto-locks a category when a buyer
            picks a bundle. There is no plan-level pricing that propagates across communities.
          </p>
          <p>
            Every home you sell under a job-level model is manual overhead. That overhead scales
            linearly with home count &mdash; which is exactly the wrong direction for a
            production builder trying to grow.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the Cornerstone PM&trade; design center actually work?
          </h2>
          <p>
            Cornerstone PM&trade; is built around a plan-level options model. Here is how it
            works in practice:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Per-floorplan options:</strong> The Magnolia
              plan&apos;s kitchen upgrade is priced once at the plan level. Every Magnolia
              sold in every community inherits those options automatically. When vendor pricing
              changes, you update one place and it propagates everywhere.
            </li>
            <li>
              <strong className="text-white">64 Designer Packages:</strong> Across 7 categories
              (flooring, cabinetry, countertops, fixtures, appliances, exterior, and more),
              buyers choose a package at their design center appointment. When a package is
              selected, all options in that category auto-lock to the package&apos;s selections.
              No manual per-option configuration. If they want to customize further, they unlock
              individual options &agrave; la carte.
            </li>
            <li>
              <strong className="text-white">Structural vs Designer scope separation:</strong>{" "}
              Bid templates sent to vendors automatically filter by scope type &mdash; structural
              subs see structural scopes, designer vendors see designer scopes. No manual
              filtering, no irrelevant line items cluttering vendor bids.
            </li>
            <li>
              <strong className="text-white">Option Classes tied to scope:</strong> Each option
              category links to a scope item for budget tracking. Selections flow directly into
              the Master Cost Budget with no separate data entry.
            </li>
            <li>
              <strong className="text-white">Area Cost Pricing:</strong> Community-level extras
              (lot premiums, community upgrades, regional cost adjustments) are managed
              separately from plan-level options and applied per-community or per-floorplan
              globally.
            </li>
          </ul>
          <p>
            None of these concepts exist in CoConstruct. They are not missing features &mdash;
            they are a different product model entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Feature comparison: CoConstruct vs Cornerstone PM&trade;
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Feature</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">CoConstruct</th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">
                    Cornerstone PM&trade;
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {compareRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-5 py-3.5 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5">
                      <CellIcon value={row.coconstruct} />
                    </td>
                    <td className="px-5 py-3.5">
                      <CellIcon value={row.cornerstone} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The forced migration opportunity: why now is the right time to switch
          </h2>
          <p>
            CoConstruct customers are being asked to migrate to Buildertrend. That migration
            friction creates a natural evaluation moment: if you are already moving your data,
            why move to a platform with the same custom-builder DNA as the one you&apos;re
            leaving?
          </p>
          <p>
            Buildertrend was built for the same market as CoConstruct &mdash; custom builders,
            remodelers, and single-project GCs. It has better tooling and a larger ecosystem
            than CoConstruct, but its core model is still job-level selections, not
            plan-level production. The community/lot/model abstraction production builders need
            is not in the Buildertrend product roadmap because it serves a different customer.
          </p>
          <p>
            A production builder being forced to migrate once is already open to the idea of
            migration. The question is whether you migrate sideways or migrate to a platform
            actually designed for your business model.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about the pricing and design center revenue opportunity?
          </h2>
          <p>
            The design center is the highest-margin interaction in a home sale. Buyers who
            engage with a well-designed options process spend more on upgrades &mdash; and
            they feel better about the purchase because they were in control of the choices.
          </p>
          <p>
            A job-level allowance model undermines that. When every home has negotiated
            allowances, you are essentially inviting a pricing conversation on every line item.
            When you have 64 curated Designer Packages, you are presenting a structured menu
            of upgrade paths with clear value at each tier. That is a fundamentally different
            revenue conversation.
          </p>
          <p>
            Cornerstone PM&trade; also eliminates filler pricing entirely &mdash; every dollar
            shown to a buyer traces back to real vendor pricing. Material costs come from AI
            takeoff parts matched to vendor quotes; labor costs come from accepted vendor bids.
            There are no synthetic estimates, no estimator-inserted placeholders, no defaults
            that silently drift out of date.
          </p>
          <p>
            For more on how vendor bidding integrates with the design center, see the{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM purchasing overview
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            AI capabilities: what Cornerstone PM&trade; adds to the design center workflow
          </h2>
          <p>
            CoConstruct has no AI agents. Cornerstone PM&trade; ships five purpose-built AI
            agents for residential production, with the design center workflow benefiting from
            three of them directly:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Blueprint AI</strong> &mdash; parses a floor plan
              PDF and extracts 130+ material scopes in under 60 seconds. Takeoff output flows
              directly into scope items and design option pricing, eliminating the manual
              estimation step that creates filler pricing.{" "}
              <Link
                href="/ai-takeoff"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                See Blueprint AI &rarr;
              </Link>
            </li>
            <li>
              <strong className="text-white">Foreman AI</strong> &mdash; an in-app agent with
              100+ skills that reads AND writes data. In the design center context, Foreman can
              generate scope-of-work documents, run profitability analysis on option pricing,
              detect gaps between options and scope coverage, and produce vendor scorecards for
              design-center-related trades.{" "}
              <Link
                href="/foreman"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Meet Foreman &rarr;
              </Link>
            </li>
            <li>
              <strong className="text-white">Bid Import AI</strong> &mdash; auto-maps vendor
              bid spreadsheets to your scope items. No manual column matching. Bids from
              cabinet vendors, countertop suppliers, and fixture distributors flow directly
              into option pricing.
            </li>
          </ul>
          <p>
            All five AI agents are bundled at no extra cost. There are no add-on subscriptions,
            no API key configuration, and no third-party accounts to manage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Who should use CoConstruct/Buildertrend, and who should use Cornerstone PM&trade;?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                CoConstruct / Buildertrend fits if you are&hellip;
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  A custom home builder or high-end remodeler
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Building fewer than 15 homes per year, each fully customized
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Negotiating unique allowances and selections per client
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Managing change orders at the individual project level
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-cyan-800/40 bg-cyan-950/20 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Cornerstone PM&trade; fits if you are&hellip;
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  A production builder doing 5&ndash;200 homes/year
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Selling plan repeats across one or more communities
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Running a buyer-facing design center with upgrade packages
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Managing multi-trade vendor bids across communities
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Wanting AI agents built for production, not custom one-offs
                </li>
              </ul>
            </div>
          </div>

          <p>
            The bottom line: CoConstruct was a capable platform for custom builders, and
            Buildertrend continues that model. Neither was designed for production home building
            &mdash; the plan-level options engine, Designer Packages, multi-community vendor
            management, and AI takeoff are not missing features waiting to be added. They
            require a fundamentally different data model. If you are a production builder being
            pushed to migrate from CoConstruct, this is the moment to ask whether you want to
            migrate to a production-first platform. Start with the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full home builder software category comparison
            </Link>{" "}
            to see the landscape, then evaluate specifics.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Built for production, not custom builds
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              See how Cornerstone PM&trade; handles plan-level options, Designer Packages, AI
              takeoff, and multi-community vendor management &mdash; the workflows CoConstruct
              and Buildertrend were never designed for.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access &rarr;
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="CoConstruct vs Cornerstone PM: Common Questions"
        subtitle="Answers to what production builders ask when evaluating their options after the CoConstruct migration."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
