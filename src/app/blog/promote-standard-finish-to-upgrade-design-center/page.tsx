import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/standard-to-upgrade.png";
const heroImageAlt =
  "Design center upgrade pricing — promoting a standard finish to a paid upgrade via spec level change in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title:
    "How to Turn Any Standard Finish Into a Paid Upgrade in Your Design Center",
  slug: "promote-standard-finish-to-upgrade-design-center",
  description:
    "Cornerstone\u2019s Design Center lets builders control included-vs-upgrade down to a single option. Promote any standard finish to a paid upgrade with one spec-level change.",
  datePublished: "2026-06-11",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Promote a Standard Finish to a Paid Upgrade in Cornerstone PM",
  description:
    "Promote any individual option from a Standard (included) finish to a paid upgrade in Cornerstone PM\u2019s Design Center using a single spec-level change.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Navigate to the option",
      text: "In Cornerstone PM, go to Purchasing \u2192 Options and open the option you want to promote to an upgrade. This can be any Level 1 (Standard) option currently included in the base price.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Change the Spec Level",
      text: "Find the Spec Level field on the option detail page. Change it from Standard (Level 1) to Upgrade I, Upgrade II, or Premium depending on the pricing tier you want this option to belong to.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Save the option",
      text: "Click Save. The option immediately drops out of the base price and becomes a paid +$X upgrade. It will appear in the design center with its upgrade price shown to buyers.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Verify in the design center",
      text: "Open the affected plan in the design center to confirm the option now shows as a paid upgrade rather than an included finish. Verify the price delta is correct.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Exclude an entire option class (optional)",
      text: "If you want to exclude an entire category of options from the base budget rather than a single option, use the Standard/Upgrade toggle on the Spec Levels page instead of editing individual options.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "How to Turn Any Standard Finish Into a Paid Upgrade in Your Design Center \u2014 Cornerstone PM\u2122 Blog",
  description:
    "Cornerstone\u2019s Design Center lets builders control included-vs-upgrade down to a single option. Promote any standard finish to a paid upgrade with one spec-level change.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/promote-standard-finish-to-upgrade-design-center",
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

export default function PromoteStandardFinishToUpgradePage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            How to Turn Any Standard Finish Into a Paid Upgrade in Your Design
            Center
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 11, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&rsquo;s{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Design Center
            </Link>{" "}
            lets builders control included-vs-upgrade pricing down to a single
            option&mdash;not just whole categories. To promote any standard
            finish to a paid upgrade, open the option under Purchasing &rarr;
            Options, change its Spec Level to Upgrade I, II, or Premium, and
            save. That&rsquo;s it.
          </p>

          <p>
            Most design-center tools give you a binary choice: a category is
            either included in the base price or it&rsquo;s an upgrade. If you
            want to offer one specific cabinet pull as a paid upgrade while
            every other hardware option stays included, you&rsquo;re out of
            luck&mdash;unless you&rsquo;re on Cornerstone PM.
          </p>

          <p>
            Cornerstone operates at the individual option level. You can
            mark a single Level&nbsp;1 (Standard) finish as a paid upgrade
            without touching anything else in that category. It&rsquo;s the
            kind of granular margin control that production builders have
            wanted for years, and it&rsquo;s built directly into the{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              design center workflow
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why granular upgrade control matters
          </h2>
          <p>
            When builders set base prices, they make assumptions about which
            finishes buyers will accept as standard. But markets shift.
            Material costs change. A cabinet pull that cost $4 two years ago
            now costs $11&mdash;and it no longer makes sense to include it in
            the base.
          </p>
          <p>
            With most design-center platforms, your only option is to move the
            entire hardware category to &ldquo;upgrade,&rdquo; which forces
            buyers to pay for even the most basic pull. That creates friction
            in the sales process. Buyers who expected hardware to be included
            now feel nickel-and-dimed.
          </p>
          <p>
            Cornerstone&rsquo;s spec-level system solves this by letting you
            promote the expensive pull to Upgrade I (a paid add-on) while
            keeping the standard pull included in the base. The buyer still
            gets a clean experience&mdash;a default included option plus clear
            upgrade pricing for the premium version&mdash;and you protect your
            margin on the items that have gotten expensive.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to promote a single option to a paid upgrade
          </h2>

          {/* Step-by-step */}
          <div className="not-prose space-y-4 my-6">
            {[
              {
                step: "1",
                title: "Navigate to Purchasing \u2192 Options",
                body: "Open the option you want to promote. This can be any option currently sitting at Spec Level: Standard (Level\u00a01). It doesn\u2019t matter which category it belongs to\u2014hardware, flooring, countertops, appliances\u2014the workflow is the same.",
              },
              {
                step: "2",
                title: "Change the Spec Level",
                body: "Find the Spec Level field on the option detail page. Change it from Standard to Upgrade I, Upgrade II, or Premium. The tier you choose determines which upgrade bucket the option appears in and what price delta the buyer sees. Upgrade I is typically a light premium; Premium is a top-tier selection.",
              },
              {
                step: "3",
                title: "Save",
                body: "Click Save. The option immediately drops out of the base price and becomes a paid +$X upgrade. No bulk operation, no category-level toggle\u2014one option, one change.",
              },
              {
                step: "4",
                title: "Verify in the design center",
                body: "Open the affected plan in the design center to confirm the option now shows its upgrade price. The category still has its included Standard options; the promoted option now sits in the upgrade tier alongside any other upgrades you\u2019ve defined.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex-none w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {step}
                </div>
                <div>
                  <p className="text-base font-bold text-white mb-1">{title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What if you want to exclude an entire category?
          </h2>
          <p>
            If your goal is to exclude a whole option class from the base
            budget&mdash;say, countertops are never included, every selection
            is a paid upgrade&mdash;there&rsquo;s a faster path: the
            Standard/Upgrade toggle on the{" "}
            <strong className="text-white">Spec Levels page</strong>.
          </p>
          <p>
            Navigate to Settings &rarr; Spec Levels, find the option class you
            want to exclude, and flip the toggle from Standard to Upgrade. Every
            option in that class instantly moves out of the base budget and
            becomes a paid selection. You don&rsquo;t have to touch each
            individual option.
          </p>
          <p>
            The two mechanisms work in combination: use the Spec Levels toggle
            to set category-level defaults, then override individual options as
            needed to create exactly the right included-vs-upgrade structure for
            each community or plan.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            A concrete example: cabinet hardware
          </h2>
          <p>
            Say your hardware category has four options:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left text-slate-400 font-medium px-5 py-3">Option</th>
                  <th className="text-left text-slate-400 font-medium px-5 py-3">Spec Level (before)</th>
                  <th className="text-left text-slate-400 font-medium px-5 py-3">Spec Level (after)</th>
                  <th className="text-left text-slate-400 font-medium px-5 py-3">Buyer impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-5 py-3 text-white">Satin Nickel Bar Pull (standard)</td>
                  <td className="px-5 py-3 text-slate-300">Standard</td>
                  <td className="px-5 py-3 text-slate-300">Standard</td>
                  <td className="px-5 py-3 text-slate-400">Included in base</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-white">Matte Black Cup Pull</td>
                  <td className="px-5 py-3 text-slate-300">Standard</td>
                  <td className="px-5 py-3 text-emerald-400 font-medium">Upgrade I</td>
                  <td className="px-5 py-3 text-slate-400">+$420 upgrade</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-white">Brushed Gold Finger Pull</td>
                  <td className="px-5 py-3 text-slate-300">Standard</td>
                  <td className="px-5 py-3 text-emerald-400 font-medium">Upgrade I</td>
                  <td className="px-5 py-3 text-slate-400">+$560 upgrade</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-white">Unlacquered Brass Bin Pull</td>
                  <td className="px-5 py-3 text-slate-300">Standard</td>
                  <td className="px-5 py-3 text-violet-400 font-medium">Premium</td>
                  <td className="px-5 py-3 text-slate-400">+$1,100 upgrade</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Before the change: all four options were Standard, all included in
            the base price. You were giving away the Matte Black and Brushed
            Gold pulls&mdash;options that now cost significantly more to
            supply&mdash;for free.
          </p>
          <p>
            After three spec-level changes: the Satin Nickel pull stays
            included as the baseline. The other three are now paid upgrades at
            tiered price points. Buyers who want the standard finish get it;
            buyers who want the premium finishes pay for them. Your margin is
            protected without disrupting the base-price story.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Community-based upgrade pricing
          </h2>
          <p>
            The spec-level system pairs with Cornerstone&rsquo;s
            community-based upgrade pricing. Upgrade prices aren&rsquo;t
            global&mdash;you can set different +$X amounts per community. The
            Matte Black pull might be a +$420 upgrade in Meadowbrook but a
            +$380 upgrade in Riverstone, reflecting different community price
            points and buyer profiles.
          </p>
          <p>
            This means the same spec-level change applies everywhere, but the
            actual dollar amount buyers see is tuned per community. You get
            consistent included/upgrade logic across your entire catalog with
            flexible pricing per market.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this compares to Buildertrend and JobTread
          </h2>
          <p>
            Neither Buildertrend nor JobTread has a concept of option-level
            spec tiers for production builders. Their selection models are
            designed for custom and semi-custom builders where every job is
            negotiated individually from scratch&mdash;allowances per job, not
            a repeatable options engine.
          </p>
          <p>
            In those tools, promoting a single standard finish to a paid
            upgrade means editing your allowance template for every active job.
            On a production builder running 50 homes across 3 communities,
            that&rsquo;s manual work at scale. On Cornerstone, you make the
            spec-level change once, and it propagates to every plan in every
            community instantly.
          </p>
          <p>
            That&rsquo;s the core difference between a tool built for custom
            builders and a platform built for{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              production home builders
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            When to use this feature
          </h2>
          <p>
            There are a few common scenarios where the spec-level promotion
            workflow pays off immediately:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Material cost increases</strong>&mdash;a supplier
              raises prices on a previously inexpensive finish. Rather than raising the base
              price, pull that finish out and make it a paid upgrade. The included option
              stays budget-friendly; the upgraded version has the right price attached.
            </li>
            <li>
              <strong className="text-white">Community-specific positioning</strong>&mdash;a
              finish that makes sense as standard in a value community is a reasonable upgrade
              in a move-up community. Use spec level to differentiate without maintaining
              separate plan sets.
            </li>
            <li>
              <strong className="text-white">New year pricing resets</strong>&mdash;at the
              start of each model year, review your standard finishes and move anything that
              no longer fits your margin targets into an upgrade tier. It takes minutes, not
              days.
            </li>
            <li>
              <strong className="text-white">Responding to competitor design center
              changes</strong>&mdash;if a competitor is advertising a feature as &ldquo;included&rdquo;
              that you currently charge for, quickly reassign those options to Standard to
              match without opening the base price more broadly.
            </li>
          </ul>

          <p className="mt-8">
            The{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM Design Center
            </Link>{" "}
            is built for exactly this kind of granular, live pricing
            management. One spec-level change, propagated everywhere, in seconds.
            No spreadsheets, no bulk re-entry, no call to a support team.
          </p>

          <p>
            This level of control&mdash;down to a single option, not just
            entire categories&mdash;is part of what separates a purpose-built
            production builder platform from tools that were designed for
            custom work and retrofitted for volume. If your current design
            center software requires a manual update for every active job every
            time pricing changes, it&rsquo;s worth taking a look at how{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone handles purchasing and options
            </Link>{" "}
            end-to-end.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Take control of your design center pricing
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Promote any standard finish to a paid upgrade in seconds.
              Cornerstone PM gives production builders granular included-vs-upgrade
              control down to the individual option&mdash;across every plan and every
              community, all at once.
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

      <Footer />
    </main>
  );
}
