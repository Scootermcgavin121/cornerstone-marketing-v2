import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X, Minus } from "lucide-react";

const heroImage = "/blog/migrating-from-buildertrend.png";
const heroImageAlt =
  "Buildertrend vs Cornerstone PM™ home builder software feature comparison";

export const metadata: Metadata = {
  title:
    "Buildertrend vs Cornerstone PM™: Feature-by-Feature Comparison — Cornerstone PM™ Blog",
  description:
    "Feature-by-feature comparison of Buildertrend and Cornerstone PM™. Scheduling, AI agents, options engine, REST API, and pricing for production home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/buildertrend-vs-cornerstone-feature-comparison",
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

type FeatureRow = {
  feature: string;
  bt: "yes" | "no" | "partial";
  cp: "yes" | "no" | "partial";
};

type FeatureCategory = {
  label: string;
  rows: FeatureRow[];
};

const categories: FeatureCategory[] = [
  {
    label: "Scheduling",
    rows: [
      { feature: "Construction schedule templates", bt: "yes", cp: "yes" },
      { feature: "Community-level schedule inheritance", bt: "no", cp: "yes" },
      { feature: "Sub & vendor schedule push notifications", bt: "yes", cp: "yes" },
      { feature: "Auto-reschedule on upstream delay", bt: "partial", cp: "yes" },
      { feature: "Gantt / critical path view", bt: "yes", cp: "yes" },
      { feature: "AI-assisted schedule optimization", bt: "no", cp: "yes" },
    ],
  },
  {
    label: "Sales",
    rows: [
      { feature: "Prospect CRM & pipeline", bt: "yes", cp: "yes" },
      { feature: "Buyer portal", bt: "yes", cp: "yes" },
      { feature: "Lot & floor plan assignment to prospect", bt: "partial", cp: "yes" },
      { feature: "AI MLS listing generator", bt: "no", cp: "yes" },
      { feature: "Contract management", bt: "yes", cp: "partial" },
    ],
  },
  {
    label: "Purchasing",
    rows: [
      { feature: "Purchase orders", bt: "yes", cp: "yes" },
      { feature: "Vendor bid requests", bt: "partial", cp: "yes" },
      { feature: "Auto-generated Excel bid templates", bt: "no", cp: "yes" },
      { feature: "Vendor portal — magic links, no login required (confirm tasks + bids)", bt: "no", cp: "yes" },
      { feature: "Bid tracking (Invited → Submitted → Declined)", bt: "no", cp: "yes" },
      { feature: "Side-by-side bid comparison", bt: "no", cp: "yes" },
      { feature: "Community-level vendor assignments", bt: "no", cp: "yes" },
      { feature: "Take your data with you anytime (one-click CSV/JSON)", bt: "no", cp: "yes" },
    ],
  },
  {
    label: "Design Center",
    rows: [
      { feature: "Buyer option selections", bt: "yes", cp: "yes" },
      { feature: "Per-floorplan design options", bt: "no", cp: "yes" },
      { feature: "Designer packages curated by an interior designer", bt: "no", cp: "yes" },
      { feature: "Selections → purchasing auto-flow", bt: "partial", cp: "yes" },
      { feature: "Area cost pricing (community-level extras)", bt: "no", cp: "yes" },
    ],
  },
  {
    label: "AI Agents",
    rows: [
      { feature: "AI material takeoff from floor plan PDF", bt: "no", cp: "yes" },
      { feature: "AI bid import (vendor doc parsing)", bt: "no", cp: "yes" },
      { feature: "AI scheduling assistant (Foreman AI™)", bt: "no", cp: "yes" },
      { feature: "AI MLS listing generator", bt: "no", cp: "yes" },
      { feature: "AI support agent", bt: "no", cp: "yes" },
    ],
  },
  {
    label: "API & Data",
    rows: [
      { feature: "Public REST API", bt: "yes", cp: "yes" },
      { feature: "Public API documentation", bt: "partial", cp: "yes" },
      { feature: "Webhook integrations", bt: "yes", cp: "yes" },
      { feature: "Full database export on demand", bt: "no", cp: "yes" },
      { feature: "Nightly auto-backups (7-day retention)", bt: "no", cp: "yes" },
    ],
  },
];

function StatusIcon({ val }: { val: "yes" | "no" | "partial" }) {
  if (val === "yes")
    return <Check className="w-4 h-4 text-emerald-400 mx-auto" />;
  if (val === "partial")
    return <Minus className="w-4 h-4 text-amber-400 mx-auto" />;
  return <X className="w-4 h-4 text-slate-600 mx-auto" />;
}

const faqs: FAQItem[] = [
  {
    q: "Is Buildertrend good for production home builders?",
    a: "Buildertrend works for production builders but was designed primarily for custom and semi-custom contractors. It lacks native features like community-level vendor assignments, per-floorplan design options, AI material takeoff, and automated bid templates that production builders need to scale efficiently.",
  },
  {
    q: "Does Cornerstone PM™ have a REST API like Buildertrend?",
    a: "Yes. Cornerstone PM™ ships a public REST API with full documentation. All core data — schedules, vendors, lots, options, bids — is accessible and exportable. You can also export your full database in CSV or JSON at any time from Settings → Backups.",
  },
  {
    q: "What does Buildertrend cost compared to Cornerstone PM™?",
    a: "Buildertrend starts at $499/month. Cornerstone PM™ is currently in free beta — early adopters get two years free. After beta, pricing starts at $149/month for the base plan.",
  },
  {
    q: "Does Cornerstone PM™ have vendor bidding?",
    a: "Yes, and it goes further than most platforms. Cornerstone PM™ includes bid requests, auto-generated Excel bid templates scoped to each trade, a vendor portal where subs confirm tasks, accept schedule changes, and submit bids via secure email magic links — no account, no app, no password — bid status tracking (Invited → Viewed → Submitted → Declined), and side-by-side comparison when multiple vendors respond.",
  },
  {
    q: "Can I migrate from Buildertrend to Cornerstone PM™?",
    a: "Yes. Most production builders complete migration in 3–5 business days. See the full step-by-step guide at /blog/migrating-from-buildertrend-to-cornerstone.",
  },
  {
    q: "Does Buildertrend have AI features?",
    a: "Buildertrend has added some AI-assisted tools over time, but does not ship purpose-built AI agents for material takeoff, bid import, scheduling, or support the way Cornerstone PM™ does natively.",
  },
  {
    q: "Which is better for a builder doing 20–80 homes per year?",
    a: "For production builders in that range, Cornerstone PM™ is purpose-built for your workflow: communities, floor plan libraries, schedule templates, AI takeoff, vendor bidding, and design center options are all designed from the ground up for repeatable production builds.",
  },
];

export default function BuildertrendVsCornerstoneFeatureComparisonPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Buildertrend vs Cornerstone PM™: Feature-by-Feature Comparison
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 6, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Buildertrend and Cornerstone PM™ both serve home builders — but their feature sets reflect
            fundamentally different priorities. Buildertrend is a general-purpose construction platform
            built for custom contractors. Cornerstone PM™ is purpose-built for production home builders
            who run the same floor plans across multiple communities.
          </p>

          <p>
            This post breaks down the comparison across six categories: Scheduling, Sales, Purchasing,
            Design Center, AI Agents, and API &amp; Data. For the broader strategic picture, see the{" "}
            <Link
              href="/buildertrend-alternative"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full Buildertrend alternative overview
            </Link>
            . If you&apos;re closer to a buying decision, start there — it covers pricing, migration path,
            and the workflow mismatch that drives most switches.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where does Buildertrend still win?
          </h2>
          <p>
            Buildertrend has 18 years of development behind it. It has depth in areas Cornerstone PM™
            doesn&apos;t prioritize: warranty management, commercial construction modules, and a large
            ecosystem of third-party integrations with enterprise accounting platforms. If you&apos;re a
            semi-custom or custom builder, or if you depend on QuickBooks Enterprise with a custom
            integration, Buildertrend is still the bigger toolbox.
          </p>
          <p>
            For production builders — those running repeating floor plans across communities — the
            calculus changes. The features that matter most for a production workflow are either absent
            or half-built in Buildertrend. The table below shows where.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-2">
            Feature-by-feature breakdown
          </h2>
          <p className="text-sm text-slate-400">
            <Check className="inline w-3.5 h-3.5 text-emerald-400 mr-1" />
            = Full support &nbsp;
            <Minus className="inline w-3.5 h-3.5 text-amber-400 mr-1" />
            = Partial / workaround needed &nbsp;
            <X className="inline w-3.5 h-3.5 text-slate-600 mr-1" />
            = Not available
          </p>
        </div>

        {/* Feature comparison tables */}
        <div className="space-y-8 mt-6">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded bg-cyan-500 inline-block" />
                {cat.label}
              </h3>
              <div className="rounded-2xl overflow-hidden border border-slate-800">
                <div className="grid grid-cols-[1fr_auto_auto] px-5 py-2.5 bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <div>Feature</div>
                  <div className="w-28 text-center">Buildertrend</div>
                  <div className="w-28 text-center">Cornerstone PM™</div>
                </div>
                {cat.rows.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-[1fr_auto_auto] px-5 py-3 items-center bg-slate-900/60 ${
                      i < cat.rows.length - 1
                        ? "border-b border-slate-800/60"
                        : ""
                    }`}
                  >
                    <div className="text-slate-300 text-sm pr-4">{row.feature}</div>
                    <div className="w-28 flex justify-center">
                      <StatusIcon val={row.bt} />
                    </div>
                    <div className="w-28 flex justify-center">
                      <StatusIcon val={row.cp} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing footer */}
        <div className="mt-4 rounded-2xl overflow-hidden border border-slate-700">
          <div className="grid grid-cols-[1fr_auto_auto] px-5 py-4 items-center bg-slate-900">
            <div className="text-white font-bold text-sm">Starting Price</div>
            <div className="w-28 text-center text-slate-500 line-through text-sm">
              $499/mo
            </div>
            <div className="w-28 text-center text-amber-400 font-bold text-sm">
              Free Beta → $149/mo
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed mt-10">

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The AI gap is the biggest difference
          </h2>
          <p>
            The category where Cornerstone PM™ most outpaces Buildertrend is AI. Cornerstone ships five
            purpose-built AI agents:{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI™
            </Link>{" "}
            for scheduling,{" "}
            <Link
              href="/ai-takeoff"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Blueprint AI for material takeoff
            </Link>
            , Bid Import AI for parsing vendor documents, an AI MLS listing generator, and an AI
            support agent. None of these require separate tools or subscriptions — they&apos;re native.
          </p>
          <p>
            For production builders, Blueprint AI alone changes the unit economics. A floor plan that
            previously took 4–8 hours to estimate manually runs in under 60 seconds. Across 50–100
            homes per year, that&apos;s months of estimator time recovered annually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Purchasing: the vendor bid workflow is different in kind
          </h2>
          <p>
            Buildertrend has basic purchase order management. Cornerstone PM™ extends this into a full
            vendor bid workflow: send a bid request to multiple vendors, auto-generate scoped Excel
            templates, let vendors self-serve via a no-login portal, track bid status per vendor,
            and compare side-by-side before awarding. Once awarded, the bid locks — neither side can
            edit — protecting your accepted pricing from drift.
          </p>
          <p>
            Community-level vendor assignments are another production-specific feature Buildertrend
            lacks. The framing crew for Oak Ridge isn&apos;t the same as the crew for Maple Creek.
            Cornerstone tracks vendor relationships at the community level, so scope-based assignments
            cascade correctly when you open a new lot — not just when you write a PO.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Which platform should you choose?
          </h2>
          <p>
            If you&apos;re a <strong className="text-white">custom or semi-custom builder</strong> with
            complex change order workflows, cost-plus contracts, and a need for enterprise accounting
            integrations — Buildertrend is the more mature product for your use case.
          </p>
          <p>
            If you&apos;re a <strong className="text-white">production builder running repeating floor plans
            across communities</strong> — 5 to 200 homes per year — Cornerstone PM™ is purpose-built
            for your workflow. The community model, floor plan library, AI takeoff, vendor bid engine,
            and design center options exist specifically for the way you build.
          </p>
          <p>
            See a full breakdown of how both platforms position in the market:{" "}
            <Link
              href="/buildertrend-alternative"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Buildertrend alternative: what production builders are choosing instead
            </Link>
            .
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See the production builder difference for yourself.
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Cornerstone PM™ is in free beta. Two years free for early adopters — no credit card, no
            obligation. Communities, floor plans, AI takeoff, vendor bidding, design center.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold text-sm hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      {/* FAQ Section */}
      <FAQSection
        title="Buildertrend vs Cornerstone PM™: FAQs"
        subtitle="Common questions from production home builders comparing the two platforms."
        items={faqs}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
