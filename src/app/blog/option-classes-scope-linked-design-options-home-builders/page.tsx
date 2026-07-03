import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/option-classes-scope-linking.png";
const heroImageAlt =
  "Design option scope linking in construction software — Cornerstone Option Classes for home builders";

const blogSchema = buildBlogPostSchema({
  title:
    "Option Classes: Linking Design Selections to Scopes and Budgets Automatically",
  slug: "option-classes-scope-linked-design-options-home-builders",
  description:
    "Cornerstone's Option Classes link design selections to categories, scope items, and budget tracking — so every buyer choice updates the right scope and cost line.",
  datePublished: "2026-06-27",
});

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
  description: heroImageAlt,
  creditText: "Cornerstone PM",
};

export const metadata: Metadata = {
  title:
    "Option Classes: Linking Design Selections to Scopes and Budgets Automatically — Cornerstone PM™ Blog",
  description:
    "Cornerstone's Option Classes link design selections to categories, scope items, and budget tracking — so every buyer choice updates the right scope and cost line.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/option-classes-scope-linked-design-options-home-builders",
  },
  openGraph: {
    title:
      "Option Classes: Linking Design Selections to Scopes and Budgets Automatically",
    description:
      "Cornerstone's Option Classes link design selections to categories, scope items, and budget tracking — so every buyer choice updates the right scope and cost line.",
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1960,
          height: 1834,
        alt: heroImageAlt,
      },
    ],
  },
};

export default function OptionClassesScopeLinkingPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <JsonLd json={blogSchema} />
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
            <span className="text-xs text-slate-500">June 27, 2026</span>
            <span className="text-xs text-slate-600">&mdash;·</span>
            <span className="text-xs text-slate-500">6 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Option Classes: Linking Design Selections to Scopes and Budgets
            Automatically
          </h1>

          {/* Lead paragraph */}
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Cornerstone PM&rsquo;s Option Classes tie a design selection category
            directly to a scope item and your Master Cost Budget — so when a buyer
            upgrades to Premium Cabinets, the Cabinetry scope and the overall budget
            update automatically. No manual reconciliation, no silo between{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              the design center
            </Link>{" "}
            and the purchasing side of your project.
          </p>

          {/* Hero image */}
          <div className="mb-10">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1960}
          height={1834}
              priority
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Why Do Design Selections and Budgets Live in Different Silos?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In most construction software, design selections and cost tracking are
            completely disconnected systems. A buyer chooses Premium Cabinets in the
            design center. That choice sits in a selections spreadsheet or a portal.
            Separately, a project manager manually enters a line item into the budget
            for the cabinetry upgrade — if they remember to, and if they get the number
            right.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            The result is predictable: the design center says one thing, the budget says
            another, and the scope says a third. You&rsquo;re reconciling three systems
            instead of running one.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            This disconnect isn&rsquo;t a minor inconvenience on a 5-home community. On
            a 40-home subdivision with 25 buyer selections per plan, you&rsquo;re
            managing 1,000+ data points that were manually entered into two or three
            places. The error rate is high, the catch rate is low, and the margin leak
            is real.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            What Are Option Classes in Cornerstone PM?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            An Option Class is a category-level container for design options. Instead of
            floating options with no structural home, each option belongs to an Option
            Class — and each Option Class is linked to:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "A design category (Cabinetry, Flooring, Appliances, etc.) so options group correctly in the buyer-facing selection portal",
              "A scope item — the actual work item in the project scope that this design category drives, ensuring vendor bid templates know exactly which trade to include",
              "Budget tracking — when a buyer selects a paid upgrade option within the class, the cost delta flows into the Master Cost Budget automatically",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-slate-300 leading-relaxed mb-6">
            The result: a single buyer action in the design portal updates the correct
            scope, triggers the right vendor bid line item, and adjusts the project
            budget — without a project manager touching anything.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How Scope-Item Integration Actually Works
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The key technical connection is the Option Class → Scope Item link. When you
            configure an Option Class, you attach it to an existing scope item from your
            Scope Library. From that point on, any design option within that class knows
            which scope it belongs to.
          </p>

          <div className="grid gap-4 mb-8">
            {[
              {
                label: "Option Class: Cabinetry",
                detail:
                  "Linked to Scope Item: Kitchen Cabinetry Labor + Material. Options: Standard White Shaker (included), Premium Soft-Close (+$3,200), Custom Inset (+$7,800).",
                color: "emerald",
              },
              {
                label: "Option Class: Flooring — Main Level",
                detail:
                  "Linked to Scope Item: Flooring Installation — Main Floor. Options: Standard LVP (included), Upgraded Hardwood (+$4,100), Premium Herringbone (+$8,600).",
                color: "cyan",
              },
              {
                label: "Option Class: Appliance Package",
                detail:
                  "Linked to Scope Item: Appliances Supply. Options: Builder Standard (included), Stainless Upgrade (+$2,400), Pro Series (+$5,500).",
                color: "violet",
              },
            ].map((item) => (
              <div
                key={item.label}
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
                  {item.label}
                </h3>
                <p className="text-slate-300 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            When a buyer upgrades from Standard White Shaker to Premium Soft-Close, the
            +$3,200 delta hits the Cabinetry line in the Master Cost Budget. The
            cabinetry scope item is already linked, so your vendor bid template for the
            cabinet trade automatically reflects the correct spec. The project manager
            doesn&rsquo;t touch the budget. The purchasing coordinator doesn&rsquo;t
            need to manually re-enter the upgrade on the bid request.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Bulk-Creating Options From Scope Items or the Parts Catalog
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Setting up Option Classes from scratch across a 25-category design center
            would be tedious if you had to create every option by hand. Cornerstone PM
            solves this with two bulk-create paths:
          </p>

          <div className="space-y-5 mb-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">
                  Bulk create from scope items
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Pull directly from your existing Scope Library. If you already have
                  &ldquo;Kitchen Cabinetry Labor + Material&rdquo; as a scope item,
                  Cornerstone can generate an Option Class from it automatically — the
                  scope link is pre-populated, and you add your option tiers on top of
                  the structure that already exists.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">
                  Bulk create from the parts catalog
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you maintain a parts or materials catalog in Cornerstone PM, you can
                  generate options directly from catalog entries — pulling in pre-set
                  pricing, descriptions, and category assignments. A standard cabinet
                  line in your catalog becomes a Standard tier option with the price
                  already attached.
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">
            For a builder launching a new community with 20+ option categories, this
            compresses initial design center setup from days to hours.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Global Retail Pricing Mode
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            For builders who price upgrade options at retail (buyer-facing price, not
            cost), Option Classes support a Global Retail Pricing Mode. When enabled,
            option prices displayed to the buyer are the retail price, while the
            builder&rsquo;s internal cost records the cost basis separately.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            This matters for builders who want to present upgrade costs to buyers without
            exposing their vendor pricing or margin. The buyer sees &ldquo;Premium
            Soft-Close Cabinets: +$3,200.&rdquo; The project file tracks the underlying
            vendor cost and the margin on that upgrade — all through the same scope-linked
            Option Class.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            What This Means for the Master Cost Budget
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            The Master Cost Budget in Cornerstone PM is a live document — it reflects
            your actual scope, actual vendor bids, and actual buyer upgrade selections.
            Option Classes are the mechanism that makes the third input automatic.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Without scope-linked options, the Master Cost Budget is always behind. A
            buyer finalizes selections on Friday. A PM updates the budget Monday after
            manually reviewing the selection report. The budget is stale all weekend,
            and that&rsquo;s if the PM catches every line.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            With Option Classes tied to scope items, the Master Cost Budget updates at
            the moment of buyer selection. There&rsquo;s no manual reconciliation step
            because there&rsquo;s no silo to bridge. The design center IS the
            purchasing workflow.
          </p>

          {/* Callout */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 mb-10">
            <h3 className="text-lg font-bold text-emerald-400 mb-2">
              The Design + Purchasing Connection
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Option Classes are one part of Cornerstone PM&rsquo;s design-to-purchasing
              pipeline. Here&rsquo;s how the full connection works:
            </p>
            <ul className="space-y-2">
              {[
                "Option Class created → linked to scope item and category",
                "Buyer selects upgrade option → delta posts to Master Cost Budget automatically",
                "Vendor bid request generated → includes only the scope items relevant to the selected options",
                "Bid received → replaces allowance or placeholder cost in the same budget line",
                "Purchase order issued → tied to the finalized scope item and option selection",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 7 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How Does This Compare to Buildertrend and JobTread?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buildertrend has a selections module and a budget module. They do not share a
            live data connection. A buyer selection in Buildertrend triggers a change order
            process — which a PM has to approve and enter into the budget manually.
            That&rsquo;s by design in a custom-builder workflow, where every selection is
            negotiated. But in a production-builder context where selections come from a
            fixed menu, requiring manual change orders for every upgrade defeats the
            purpose of having a design center at all.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            JobTread doesn&rsquo;t have a buyer-facing design center in the same sense.
            It has a client portal and line-item approvals, but no concept of Option
            Classes, scope-item linking, or a structured upgrade pricing model built for
            production volumes.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            NEWSTAR has budget-to-selections integration, but the UX dates from an era
            when configuration meant calling a support rep. Cornerstone PM&rsquo;s Option
            Class setup takes a few minutes in a modern web UI — no implementation
            consultant required.
          </p>

          {/* Internal links */}
          <p className="text-slate-300 leading-relaxed mb-4">
            Option Classes are part of a broader{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Design Center
            </Link>{" "}
            that includes Designer Packages, Exclusion Groups for pick-one selections,
            Structural vs. Designer scope separation in bid templates, and per-floorplan
            options that replicate across every home of that plan in every community. On
            the purchasing side, the scope-item links connect directly to{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              vendor bid requests and purchase orders
            </Link>{" "}
            — so the design selection is also the purchasing instruction, not a separate
            step.
          </p>
          <p className="text-slate-300 leading-relaxed mb-8">
            If you&rsquo;re evaluating platforms, see the full feature comparison on our{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview — including why tools built for custom builders lack the scope-linked
            option model production builders need.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-slate-700 bg-slate-900 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Connect Your Design Center to Your Budget?
            </h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Option Classes, scope-item linking, and a live Master Cost Budget — built
              for production builders who can&rsquo;t afford a silo between selections
              and purchasing.
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
