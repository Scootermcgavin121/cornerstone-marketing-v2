import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/production-builder-software.png";
const heroImageAlt =
  "Production home builder software showing a multi-community options pricing engine and scheduling dashboard";

const blogSchema = buildBlogPostSchema({
  title:
    "What Is a Production Home Builder? The Five Workflows That Set Them Apart",
  slug: "what-is-a-production-home-builder",
  description:
    "A production home builder repeats floorplans across communities — and that repetition changes everything about scheduling, purchasing, and design. Here is what makes the model distinct.",
  datePublished: "2026-08-29",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/home-builder-project-management-software",
  },
});

export const metadata: Metadata = {
  title:
    "What Is a Production Home Builder? The Five Workflows That Set Them Apart — Cornerstone PM™ Blog",
  description:
    "A production home builder repeats floorplans across communities — and that repetition changes everything about scheduling, purchasing, and design. Here is what makes the model distinct.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/what-is-a-production-home-builder",
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

const workflows = [
  {
    number: "01",
    title: "Plan Repeats",
    summary:
      "The same Hawthorne plan sells 40 times across three communities. Takeoff, scope items, and design options are defined once at the plan level and reused on every home — no re-estimating each start.",
  },
  {
    number: "02",
    title: "Community Management",
    summary:
      "Different vendors, different lot configurations, and different upgrade pricing per community. The same floorplan can cost more to build in one community than another, and the software has to model that honestly.",
  },
  {
    number: "03",
    title: "Buyer-Facing Design Center",
    summary:
      "Buyers choose from pre-priced options — flooring, countertops, cabinets, structural upgrades — without the builder repricing each selection by hand. Spec levels define what is included; anything above is a paid upgrade.",
  },
  {
    number: "04",
    title: "Vendor Bidding and Community Awards",
    summary:
      "Vendors bid on scopes once, and wins are awarded per community. One framing contractor might win Community A; a different one wins Community B. Accepted pricing locks and flows into every downstream budget line.",
  },
  {
    number: "05",
    title: "Template-Driven Scheduling",
    summary:
      "Because production builders repeat the same sequence on every home, schedules come from a template. Apply it to a new start and a full critical path exists on day one — with cascade scheduling pushing downstream trades when one slips.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What is a production home builder?",
    a: "A production home builder sells homes from a set of pre-designed floorplans and builds the same designs repeatedly across one or more communities. Buyers choose from available plans, elevations, and options rather than starting from a blank slate. This repetition is what separates production building from custom or semi-custom construction — and it requires a fundamentally different set of software tools.",
  },
  {
    q: "What is the difference between a production builder and a custom builder?",
    a: "A custom builder designs each home from scratch for a specific buyer. A production builder reuses the same floorplans across dozens or hundreds of homes, allowing standardized purchasing, templated schedules, and a buyer-facing design center where options are pre-priced. The workflows are different enough that software built for custom builders typically fails production builders on key features: plan repeats, community-based vendor pricing, and design center depth.",
  },
  {
    q: "How many homes per year defines a production home builder?",
    a: "There is no single cutoff. The production model applies to any builder who repeats floorplans systematically — this can start as low as five or ten homes per year. The defining factor is workflow, not volume: if you are re-estimating each home from scratch, you are operating more like a custom builder regardless of how many you close.",
  },
  {
    q: "What software do production home builders use?",
    a: "Production home builders need software designed around plan repeats, community management, and a buyer-facing design center — categories that generic PM tools like Asana, Smartsheet, or monday.com cannot address. Purpose-built options include Cornerstone PM, NEWSTAR, BuildPro, and MarkSystems. Key differentiators are design center depth, community-based vendor pricing, AI takeoff, and accounting integration with QuickBooks or a built-in GL.",
  },
  {
    q: "What is a floorplan option in production home building?",
    a: "A floorplan option is an upgrade or customization a buyer can add to a base plan — a bonus room, a finished basement, a covered porch, a third-car garage, or a different elevation. Options are priced once at the plan level and reused every time that plan sells. This is how production builders avoid re-estimating every home.",
  },
  {
    q: "How does community-based pricing work for production builders?",
    a: "Vendor pricing is awarded per community rather than globally. One framing contractor might win Community A, and a different one wins Community B. This means the same floorplan carries different costs in different communities — which is correct, reflecting real vendor agreements, local material costs, and lot conditions. Software that stores one global price per scope cannot model this accurately and leads to margin leakage.",
  },
];

export default function WhatIsAProductionHomeBuilderPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Getting Started
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            What Is a Production Home Builder? The Five Workflows That Set Them
            Apart
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 29, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A production home builder sells homes from a fixed catalog of
            floorplans and builds the same designs repeatedly across one or more
            communities.{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Purpose-built home builder software
            </Link>{" "}
            for this model is organized around that repetition — because the
            moment you stop re-estimating every home from scratch, every
            workflow changes.
          </p>

          <p>
            The distinction matters most when choosing software. A custom
            builder designs each home for a specific buyer and operates much
            like a general contractor: one job, one estimate, one sequence. A
            production builder does the opposite — the Hawthorne plan sells 40
            times, the same framing scope goes out to bid once, and the schedule
            template applies to every start. Tools built for the custom model
            quietly fail production builders on the workflows that drive most of
            their efficiency.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a production builder differ from a custom builder?
          </h2>

          <p>
            The clearest way to see the difference is to watch what happens
            after a contract is signed. A custom builder opens a new estimate,
            prices the job from scratch, builds a schedule around the client's
            specific requirements, and manages the whole thing as a unique
            project.
          </p>

          <p>
            A production builder does none of that. The contract is signed on a
            plan that already exists, already has a scope of work, already has
            vendor pricing, and already has a schedule template. The new home
            gets the template applied, the{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            opens for buyer selections, and purchasing starts from accepted
            vendor bids — not a new round of quoting.
          </p>

          <p>
            That is the production model in one sentence: sell a plan, not a
            project.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The five workflows that define production home building
          </h2>

          <p>
            Production building is not just a volume story. It is a set of
            workflows that look nothing like custom construction — and software
            has to be built around each one.
          </p>

          <div className="not-prose space-y-4 my-8">
            {workflows.map((w) => (
              <div
                key={w.number}
                className="flex gap-5 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <span className="text-2xl font-black text-emerald-500 shrink-0 w-10">
                  {w.number}
                </span>
                <div>
                  <p className="text-base font-bold text-white mb-1">
                    {w.title}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {w.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter for software?
          </h2>

          <p>
            Each of those five workflows is a place where generic software
            forces a workaround. A floorplan is not a project in ClickUp. A
            design center option is not a spreadsheet row. Community-based
            vendor pricing cannot be modeled with a single global cost per
            scope. And a cascade schedule that adjusts automatically when
            framing slips is not a Gantt chart someone drags by hand.
          </p>

          <p>
            The gaps show up as compounding manual work: re-keying estimates,
            maintaining separate pricing spreadsheets by community, rebuilding
            schedules from scratch on every start, and tracking buyer selections
            outside the purchasing system so nobody knows what a change order
            actually costs until the invoice arrives.
          </p>

          <p>
            The right platform treats plan repeats as the organizing principle —
            not an edge case — and connects{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing
            </Link>
            ,{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              scheduling
            </Link>
            , and the design center into a single system where a buyer selection
            rolls up to a scope, a scope rolls up to a vendor bid, and a
            completed task generates a purchase order without anyone opening the
            purchasing screen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does production building scale?
          </h2>

          <p>
            The production model starts paying off early — as few as five to ten
            homes per year — and scales without proportional overhead because
            each plan repeat does not require starting from zero. A builder
            adding a second community does not hire a second estimator; they
            send bid requests to vendors in that community, award pricing there,
            and apply the same schedule template to every new start.
          </p>

          <p>
            AI takeoff accelerates that further. Instead of measuring a new
            elevation or structural option by hand each time a plan is revised,
            Blueprint AI reads the updated plan set and extracts the changed
            scopes. Quantities tied to square footage — framing, paint,
            cleaning, slab — adjust automatically across every configuration
            that references them.
          </p>

          <p>
            The result is a builder who can add communities and floorplans
            without adding proportional administrative load, which is why the
            production model has always been the most scalable way to build
            residential homes at volume.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does purpose-built production software look like?
          </h2>

          <p>
            The clearest test is whether the software has a real concept of a
            floorplan — not a project tagged &quot;Hawthorne,&quot; but an
            object that carries structural options, design options priced by
            spec level, auto-quantity scope items linked to square footage, and
            vendor bids awarded per community. If the data model does not have
            that, every production workflow becomes a workaround.
          </p>

          <p>
            Beyond the data model, purpose-built production software connects
            the full cycle: takeoff from the plan set, vendor bidding with
            scope-filtered templates, community-level award and lock, a
            buyer-facing design center where selections flow into the budget,
            template-driven scheduling with cascade updates, and one-way
            accounting sync that posts approved POs and bills to QuickBooks
            with community, lot, and cost-code detail on every transaction.
          </p>

          <p>
            That is the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              production home builder platform
            </Link>{" "}
            — and it looks nothing like a generic project management tool with a
            construction skin on it.
          </p>

          <div className="not-prose mt-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
            <p className="text-lg font-semibold text-white mb-2">
              Built for production home builders
            </p>
            <p className="text-slate-400 mb-6">
              Cornerstone PM is designed around plan repeats, community-based
              vendor pricing, and a buyer-facing design center — not retrofitted
              from a generic PM tool.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 transition-colors"
            >
              Get early access
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        items={faqs}
        title="Production Home Builder FAQ"
        subtitle="Common questions about the production building model and the software that supports it."
        accentTextClass="text-emerald-400"
      />

      <Footer />
    </main>
  );
}
