import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Percent, ListChecks, SearchCheck, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/global-retail-markup-design-options-home-builders.png";
const heroImageAlt =
  "global retail markup for design options illustrated in a Cornerstone PM home builder workflow dashboard";

const blogSchema = buildBlogPostSchema({
  title: "Global Retail Markup: Set a Design Center Pricing Policy Without Editing Every Option",
  slug: "global-retail-markup-design-options-home-builders",
  description:
    "Set a global retail markup policy for design options while keeping vendor costs separate, reducing repetitive edits and checking buyer pricing before rollout.",
  datePublished: "2026-09-14",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set a Global Retail Markup for Design Center Options",
  description:
    "Apply an organization-wide retail markup policy to design center options instead of editing each option's price by hand.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Review your current catalog pricing",
      text: "Before turning on a global policy, look at how retail prices are set today — a mix of per-option manual entries, some at cost, some marked up inconsistently across categories.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose the global markup rate",
      text: "Set one markup rate that applies across the design center catalog, so builder-facing retail pricing moves with a single settings change instead of hundreds of individual edits.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm vendor cost stays separate",
      text: "The markup applies on top of the accepted vendor cost for each option. The underlying cost record does not change — only the retail number the buyer sees is calculated from it.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Spot-check representative options",
      text: "After enabling the policy, open a sample of options across different categories and spec levels to confirm the resulting retail price looks right before buyers see it.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Review included and $0 selections",
      text: "Options that are included at $0 in a spec level should stay at $0 — a global markup should not turn a standard inclusion into a priced line. Verify this behavior against your current settings before relying on it.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Roll out and monitor",
      text: "Once spot checks look correct, let the policy apply platform-wide and periodically re-check pricing after catalog updates or new vendor cost imports.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Global Retail Markup: Set a Design Center Pricing Policy Without Editing Every Option — Cornerstone PM™ Blog",
  description:
    "Set a global retail markup policy for design options while keeping vendor costs separate, reducing repetitive edits and checking buyer pricing before rollout.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/global-retail-markup-design-options-home-builders",
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

const before = [
  {
    icon: <Percent className="w-4 h-4 text-red-400" />,
    title: "One markup, typed hundreds of times",
    body: "A builder decides on a 35% markup and then has to open every design option — sometimes hundreds of them across categories — to type the same percentage in one at a time.",
  },
  {
    icon: <ListChecks className="w-4 h-4 text-red-400" />,
    title: "Drift between categories",
    body: "Cabinets get marked up correctly, but plumbing fixtures added last quarter never got the same treatment. Nobody decided that on purpose — it's just what happens when pricing is set option by option.",
  },
  {
    icon: <SearchCheck className="w-4 h-4 text-red-400" />,
    title: "Policy changes mean re-touching everything",
    body: "When the builder decides to move from 30% to 35% markup company-wide, the only way to apply it is to go back through the same catalog a second time.",
  },
];

const faqs = [
  {
    q: "Does a global retail markup change what I paid a vendor?",
    a: "No. The accepted vendor cost for an option is a separate, protected record. A global markup calculates the buyer-facing retail price from that cost — it never edits or overwrites the cost itself.",
  },
  {
    q: "Can I still price individual options differently?",
    a: "The global policy is meant to set a consistent baseline across the catalog rather than force every option to an identical formula forever. Review your current pricing settings to confirm which options are covered by the global rate and which retain independent pricing before you roll out a change.",
  },
  {
    q: "What happens to options that are included for free at a given spec level?",
    a: "Standard-level inclusions are meant to stay at $0 to the buyer regardless of markup settings. Spot-check a sample of your included options after enabling a global policy to confirm this behaves as expected in your catalog before buyers see pricing.",
  },
  {
    q: "Why not just set markup once when I first build the catalog?",
    a: "Catalogs change. New options get imported from vendor bids, categories get restructured, and spec levels shift. A one-time manual pass drifts the moment anything is added later. A standing global policy applies to new entries the same way it applied to the original catalog.",
  },
];

export default function GlobalRetailMarkupPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

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
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Global Retail Markup: Set a Design Center Pricing Policy Without Editing Every Option
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 14, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A global retail markup lets a builder set one org-wide pricing policy for design
            center options instead of typing a markup percentage into every option by hand.
            Vendor cost stays exactly where it was accepted — only the buyer-facing retail number
            is calculated from it.
          </p>

          <p>
            Most design centers get their pricing built the same way: one option at a time. Someone
            enters a cost, decides on a markup, and types a retail price. That works fine for the
            first fifty options. It breaks down at option two hundred, and it breaks down completely
            the day the builder decides the markup itself needs to change. The{" "}
            <Link href="/design" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              design center
            </Link>{" "}
            in Cornerstone PM now supports a global retail pricing mode built specifically for that
            second problem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does a global retail markup actually do?
          </h2>
          <p>
            Instead of setting a retail price on each individual design option, a builder sets one
            markup rate at the organization level. That rate applies across the catalog, so the
            buyer-facing price on an option is calculated from its accepted vendor cost plus the
            standing markup — not from a number someone typed in manually and then forgot about.
          </p>
          <p>
            The practical effect is that a pricing policy decision — "we mark up design options by
            X%" — gets made once, in one place, instead of being re-implemented option by option
            every time the catalog grows.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does option-by-option pricing break down as a catalog grows?
          </h2>
          <p>
            None of these problems come from carelessness. They come from a pricing model that
            requires the same manual step to be repeated correctly, every time, forever:
          </p>

          <div className="not-prose space-y-3 my-6">
            {before.map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            A builder running a handful of floorplans might not notice this drift. A builder running
            a full{" "}
            <Link
              href="/blog/promote-standard-finish-to-upgrade-design-center"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              design center with spec-level upgrade pricing
            </Link>{" "}
            across dozens of categories notices it constantly — usually when a buyer questions why
            two similar options carry different markup percentages for no visible reason.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does the markup ever touch vendor cost?
          </h2>
          <p>
            No. Vendor cost and retail price are kept as separate, distinct records. The accepted
            cost for an option — the number a vendor actually bid and the builder accepted — does
            not move when a global markup policy is enabled or changed. The markup is a calculation
            layer on top of that cost, used to produce the number a buyer sees. Keeping the two
            separate means a builder can adjust buyer-facing pricing strategy without ever touching
            the underlying cost data used for budgets and purchase orders.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How should a builder roll this out safely?
          </h2>
          <p>
            Turning on an org-wide pricing rule is not something to do blind. Before enabling it,
            review how pricing is currently set across the catalog — some options may already carry
            a manually entered retail price, and it's worth knowing which ones before a policy
            change reaches them. After enabling the global rate, spot-check a representative sample
            of options across different categories and spec levels to confirm the resulting price
            looks right. Pay particular attention to options that are meant to be included at $0 in
            a given spec level — a markup policy should never turn a standard inclusion into a
            priced line, and that behavior is worth verifying directly in your account rather than
            assuming.
          </p>
          <p>
            This pairs naturally with the way{" "}
            <Link
              href="/blog/design-center-exclusion-groups-pick-one"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              exclusion groups
            </Link>{" "}
            already keep category-level selection logic consistent — one is about which option a
            buyer can pick, the other is about what that option costs once picked.
          </p>

          <div className="not-prose space-y-3 my-6">
            <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">One policy, not one edit per option</p>
                <p className="text-slate-400 text-sm">
                  A global markup rate is a standing policy, not a one-time bulk edit. New options
                  added later inherit the same rule automatically, instead of needing their own
                  manual pricing pass.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Frequently asked questions
          </h2>
          <div className="not-prose space-y-4 my-6">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <p className="font-semibold text-white mb-1.5">{item.q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <p>
            For the full picture of how pricing, options, and spec levels fit together in the
            design center, see{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM's design center
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop re-typing your markup into every design option.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM™ lets you set one retail pricing policy for the whole catalog — vendor
              cost stays separate, buyer pricing stays consistent.
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
