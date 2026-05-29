import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/exclusion-groups.png";
const heroImageAlt =
  "Design center exclusion groups in Cornerstone PM letting home buyers pick one flooring option from carpet, tile, LVP, or hardwood";

const blogSchema = buildBlogPostSchema({
  title: "Design Center Exclusion Groups: Let Buyers Pick One From Many",
  slug: "design-center-exclusion-groups-pick-one",
  description:
    "Cornerstone PM's design center exclusion groups let home buyers choose between Carpet, Tile, LVP, or Hardwood — and selections mark complete after one pick.",
  datePublished: "2026-05-29",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Design Center Exclusion Groups in Cornerstone PM",
  description:
    "Create pick-one option groups in your design center so buyers can select exactly one flooring, roofing, or countertop option — and the category marks complete automatically.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Navigate to Design → Selection Rules → Exclusion Groups",
      text: "From your Cornerstone PM dashboard, open the Design Center and find Selection Rules. Click Exclusion Groups to see any groups you've already configured, or to create a new one.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Create a new Exclusion Group",
      text: "Click New Group and give it a descriptive name — for example, 'Flooring Type' or 'Roofing Material'. This name appears in builder-facing dashboards and buyer-facing selection progress views.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Drag in the Option Classes that are mutually exclusive",
      text: "Drag and drop the option classes that should be treated as pick-one into this group. For flooring, that might be Carpet, Tile, LVP, and Hardwood. For roofing, Asphalt Shingles and Metal Roof. For countertops, Granite and Quartz. Each class stays in its own category but now participates in the group's pick-one logic.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Set the rule to Pick One",
      text: "Select 'Pick One' as the group rule. This tells the design center that as soon as a buyer selects any option within any class in this group, all other classes in the group become satisfied — no further selection is needed from the buyer in that group.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Save and verify buyer experience",
      text: "Save the group. In the buyer-facing design center, test the experience: select Tile under the Flooring Type exclusion group and confirm the Carpet, LVP, and Hardwood option classes are no longer flagged as incomplete. The category progress bar should turn green. Selection reports will no longer show 'incomplete' for the skipped classes.",
    },
  ],
};

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
  description: heroImageAlt,
  creditText: "Cornerstone PM",
};

export const metadata: Metadata = {
  title:
    "Design Center Exclusion Groups: Let Buyers Pick One From Many — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM's design center exclusion groups let home buyers choose between Carpet, Tile, LVP, or Hardwood — and selections mark complete after one pick.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/design-center-exclusion-groups-pick-one",
  },
  openGraph: {
    title: "Design Center Exclusion Groups: Let Buyers Pick One From Many",
    description:
      "Cornerstone PM's design center exclusion groups let home buyers choose between Carpet, Tile, LVP, or Hardwood — and selections mark complete after one pick.",
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

export default function ExclusionGroupsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
            <span className="text-xs text-slate-500">May 29, 2026</span>
            <span className="text-xs text-slate-600">&mdash;·</span>
            <span className="text-xs text-slate-500">6 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Design Center Exclusion Groups: Let Buyers Pick One From Many
          </h1>

          {/* Lead paragraph */}
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Exclusion groups in{" "}
            <Link href="/design" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              Cornerstone PM&rsquo;s design center
            </Link>{" "}
            solve a specific problem that every builder hits when marking selections required: buyers shouldn&rsquo;t have to pick Carpet AND Tile AND LVP AND Hardwood — they pick one flooring type, and the category is done. One pick. Category complete. No more &ldquo;incomplete&rdquo; flags on every plan.
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
            Why Does This Problem Exist in the First Place?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most design center software treats &ldquo;required&rdquo; as a binary: either a selection is required or it isn&rsquo;t. That works fine when there&rsquo;s exactly one option per category. But real design centers have mutually exclusive choices — flooring types, roofing materials, countertop finishes. A buyer who picks Tile doesn&rsquo;t also need to pick Carpet, LVP, and Hardwood.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Without exclusion group logic, builders face two bad options:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Mark all flooring options as required → buyer must &ldquo;select&rdquo; every type to satisfy the completion check (broken UX, nonsensical selections)",
              "Leave flooring options as optional → the selection progress dashboard permanently shows &ldquo;incomplete&rdquo; for Carpet, LVP, and Hardwood even after the buyer chose Tile (useless progress tracking)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <p className="text-slate-300 leading-relaxed mb-6">
            Neither approach gives builders clean selection-progress reporting or buyers a sensible experience. Buildertrend, JobTread, and NEWSTAR all handle this the same way — per-item required flags with no option-class exclusivity modeling. The concept of &ldquo;pick exactly one from this set&rdquo; doesn&rsquo;t exist natively in any of those platforms.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How Exclusion Groups Work in Cornerstone PM
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            An exclusion group links multiple option classes under a single pick-one rule. When a buyer selects any option within any class in the group, all other classes in that group are automatically satisfied — no further input is needed from the buyer for that decision.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Here&rsquo;s what that looks like in practice for three common design center categories:
          </p>

          <div className="grid gap-4 mb-8">
            {[
              {
                category: "Flooring Type",
                classes: ["Carpet", "Tile", "LVP", "Hardwood"],
                example: "Buyer picks Tile → Carpet, LVP, and Hardwood auto-satisfy. Flooring category turns green.",
                color: "emerald",
              },
              {
                category: "Roofing Material",
                classes: ["Asphalt Shingles", "Metal Roof"],
                example: "Buyer picks Metal Roof → Asphalt Shingles auto-satisfies. Roofing category complete.",
                color: "cyan",
              },
              {
                category: "Countertop Finish",
                classes: ["Granite", "Quartz"],
                example: "Buyer picks Granite → Quartz auto-satisfies. Countertop category complete.",
                color: "violet",
              },
            ].map((item) => (
              <div
                key={item.category}
                className={`rounded-xl border p-5 ${
                  item.color === "emerald"
                    ? "border-emerald-500/20 bg-emerald-500/5"
                    : item.color === "cyan"
                    ? "border-cyan-500/20 bg-cyan-500/5"
                    : "border-violet-500/20 bg-violet-500/5"
                }`}
              >
                <h3
                  className={`font-bold text-sm mb-2 ${
                    item.color === "emerald"
                      ? "text-emerald-400"
                      : item.color === "cyan"
                      ? "text-cyan-400"
                      : "text-violet-400"
                  }`}
                >
                  {item.category}
                </h3>
                <p className="text-slate-400 text-sm mb-2">
                  Option classes:{" "}
                  <span className="text-slate-300 font-medium">
                    {item.classes.join(", ")}
                  </span>
                </p>
                <p className="text-slate-300 text-sm">{item.example}</p>
              </div>
            ))}
          </div>

          {/* Section 3 - HowTo steps */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How to Set Up an Exclusion Group (5 Steps)
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Configuring exclusion groups takes about 15 minutes for a complete{" "}
            <Link href="/design" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              design center
            </Link>{" "}
            setup. Here&rsquo;s the exact flow:
          </p>

          <div className="space-y-6 mb-10">
            {[
              {
                step: 1,
                title: "Navigate to Design → Selection Rules → Exclusion Groups",
                body: "From your Cornerstone PM dashboard, open the Design Center and find Selection Rules. Click Exclusion Groups to see existing groups or create a new one.",
              },
              {
                step: 2,
                title: "Create a new Exclusion Group",
                body: "Click New Group and give it a descriptive name — \"Flooring Type\", \"Roofing Material\", or \"Countertop Finish\". This name appears in builder dashboards and buyer-facing selection progress views.",
              },
              {
                step: 3,
                title: "Drag in the mutually exclusive Option Classes",
                body: "Drag and drop the option classes that should be treated as pick-one into this group. For flooring: Carpet, Tile, LVP, Hardwood. Each class stays in its own category but now participates in the group's pick-one rule.",
              },
              {
                step: 4,
                title: "Set the rule to Pick One",
                body: "Select \"Pick One\" as the group rule. This tells the design center that as soon as a buyer selects any option within any class in this group, all other classes in that group become automatically satisfied.",
              },
              {
                step: 5,
                title: "Save and verify the buyer experience",
                body: "Save the group. In the buyer-facing design center, test it: select Tile and confirm that Carpet, LVP, and Hardwood are no longer flagged incomplete. The category progress bar turns green. Selection reports clean up instantly.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            What Changes in Reporting and Buyer Experience?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The downstream effect on reporting is immediate. Before exclusion groups, a builder with four flooring option classes would see four separate &ldquo;incomplete&rdquo; entries in selection progress for every buyer who made any flooring choice. After configuring the exclusion group, a single flooring selection resolves all four — one completed entry, three auto-satisfied, zero noise.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For buyers, the experience is cleaner and more intuitive. They&rsquo;re not asked to interact with options they have no intention of choosing. The progress meter moves correctly when they make their pick, instead of stalling at &ldquo;3 of 7 complete&rdquo; because the system is waiting for them to also &ldquo;select&rdquo; three flooring types they&rsquo;ve already implicitly rejected.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For builders reviewing selection progress across a 50-home community, the dashboard difference is significant. Instead of scanning through 200+ &ldquo;incomplete&rdquo; flags that are really just &ldquo;buyer picked Tile instead of Carpet,&rdquo; you see actual incompletions — decisions the buyer genuinely hasn&rsquo;t made yet.
          </p>

          {/* What Competitors Don't Do */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Why Don&rsquo;t Buildertrend and JobTread Do This?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Both Buildertrend and JobTread were built primarily for custom builders, where design selections are negotiated job-by-job with individual allowances. In that workflow, the concept of &ldquo;option classes that are mutually exclusive at the category level&rdquo; rarely comes up — you&rsquo;re managing one buyer&rsquo;s unique selections, not a repeating design center with plan-level option logic.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Production builders have a fundamentally different structure: the same Magnolia plan sells 80 times across four communities, and buyers are choosing from a curated menu of option classes that were defined once at the plan level. That structure requires group-level exclusivity logic — not just per-item required flags.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            NEWSTAR has the data model for production builders but lacks the modern UI layer. Exclusion Groups are the kind of interaction design that comes from building a product ground-up for web in 2026 — not retrofitting selection logic onto a decades-old ERP.
          </p>

          {/* Callout box */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 mb-10">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">
              Design Center Features That Work Together
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Exclusion groups pair naturally with other Cornerstone PM design center capabilities:
            </p>
            <ul className="space-y-2">
              {[
                "64 curated Designer Packages that auto-lock all category options when a package is selected — buyers pick a package OR pick à la carte via exclusion groups",
                "Option Classes tied to scope items — a flooring selection can link to the Flooring Labor scope, ensuring vendor bid templates automatically include only the relevant trade",
                "Area Cost Pricing for community-level extras — add premiums for specific communities without disrupting the core exclusion group logic",
                "Selection progress dashboards that show real completion status across every buyer in every community",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal links section */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Is This the Right Platform for Your Design Center?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Exclusion groups are one feature in a broader production-builder{" "}
            <Link href="/design" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              design center
            </Link>{" "}
            that includes Designer Packages, option-scope linking, Structural vs. Designer scope separation in bid templates, and per-floorplan options reused across every home of that plan in every community.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you&rsquo;re comparing platforms, see how Cornerstone PM stacks up against the tools production builders typically consider on our{" "}
            <Link href="/home-builder-project-management-software" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              home builder project management software
            </Link>{" "}
            overview — including why custom-builder tools like Buildertrend and JobTread lack the plan-level design center model entirely.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Clean Up Your Selection Progress?
            </h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Set up exclusion groups, Designer Packages, and auto-quantity scope items in a design center built for production builders — not retrofitted from custom-builder roots.
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
