import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vs-fieldwire.png";
const heroImageAlt =
  "Fieldwire alternative for home builders compared to Cornerstone PM production builder software platform";

const blogSchema = buildBlogPostSchema({
  title: "Fieldwire vs Cornerstone PM: Field App vs Production Builder Platform",
  slug: "fieldwire-vs-cornerstone-pm-home-builder",
  description:
    "Fieldwire is a punch-list and field-task app. Production home builders need floorplans, options, design center, and AI. See where each tool fits.",
  datePublished: "2026-05-31",
});

export const metadata: Metadata = {
  title:
    "Fieldwire vs Cornerstone PM: Field App vs Production Builder Platform \u2014 Cornerstone PM\u2122 Blog",
  description:
    "Fieldwire is a punch-list and field-task app. Production home builders need floorplans, options, design center, and AI. See where each tool fits.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/fieldwire-vs-cornerstone-pm-home-builder",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
          height: 884,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "Can Fieldwire be used as home builder software?",
    a: "Fieldwire can supplement field operations with punch lists, plan markups, and task assignments, but it is not home builder software. It has no floorplan model, no options engine, no design center, no per-floorplan pricing, and no community or lot abstraction. Production home builders need an entirely different category of tool.",
  },
  {
    q: "What is the difference between Fieldwire and Cornerstone PM?",
    a: "Fieldwire is a field-operations app for punch lists, plan markups, RFIs, and superintendent task management \u2014 strong for commercial and remodel superintendents. Cornerstone PM\u2122 is a production home builder platform with a full design center, per-floorplan options engine, 64 Designer Packages, AI material takeoff, Foreman AI with 396+ skills, and multi-community vendor management.",
  },
  {
    q: "Does Fieldwire have a design center for home buyers?",
    a: "No. Fieldwire has no buyer-facing design center, no Designer Packages, no option pricing engine, and no floorplan-level selections. These are production home builder concepts with no equivalent in a field-task application.",
  },
  {
    q: "What does Cornerstone PM offer that Fieldwire doesn\u2019t?",
    a: "Cornerstone PM\u2122 offers a production home builder design center with 64 curated Designer Packages, design-center exclusion groups (pick one from many), auto-quantity scope items that price every floorplan and structural option from sqft, multi-community vendor assignment, AI material takeoff from PDF, Foreman AI with 396+ skills, structured vendor bid workflows, and a REST API + BYOA on Pro+. None of these exist in Fieldwire.",
  },
  {
    q: "Who should use Fieldwire?",
    a: "Fieldwire is well-suited for commercial GC superintendents, remodelers, and specialty contractors who need field-level punch list management, drawing markup, and RFI workflows. It is purpose-built for field coordination, not production home building.",
  },
  {
    q: "Does Cornerstone PM have an MCP server for AI tools?",
    a: "Yes. Cornerstone PM\u2122 ships a built-in MCP server in app settings that lets external AI tools like Claude Desktop and Cursor connect directly to Foreman\u2019s full 396+ skill catalog. Builders generate API keys and get ready-to-paste config blocks. Fieldwire has no equivalent AI integration layer.",
  },
  {
    q: "Can I use Fieldwire and Cornerstone PM together?",
    a: "Potentially as complementary tools \u2014 Fieldwire for field punch lists and plan markups, Cornerstone PM\u2122 for the full production workflow (floorplans, options, design center, purchasing, scheduling, AI agents). That said, most production builders running Cornerstone PM\u2122 find the scheduling and task management built into the platform sufficient without a separate field app.",
  },
];

type CompareRow = {
  feature: string;
  fieldwire: boolean | "partial";
  cornerstone: boolean | "partial";
};

const compareRows: CompareRow[] = [
  { feature: "Floorplan / model home concept", fieldwire: false, cornerstone: true },
  { feature: "Per-floorplan options pricing", fieldwire: false, cornerstone: true },
  { feature: "Designer Packages (64 curated, auto-lock)", fieldwire: false, cornerstone: true },
  { feature: "Design center exclusion groups (pick one)", fieldwire: false, cornerstone: true },
  { feature: "Auto-quantity scope items (sqft-linked pricing)", fieldwire: false, cornerstone: true },
  { feature: "Multi-community lot management", fieldwire: false, cornerstone: true },
  { feature: "Community-assigned vendor wins", fieldwire: false, cornerstone: true },
  { feature: "Buyer-facing design center portal", fieldwire: false, cornerstone: true },
  { feature: "AI material takeoff from PDF", fieldwire: false, cornerstone: true },
  { feature: "Foreman AI (396+ skills, persistent memory)", fieldwire: false, cornerstone: true },
  { feature: "REST API + BYOA (Pro+)", fieldwire: false, cornerstone: true },
  { feature: "MCP server for AI tool integration", fieldwire: false, cornerstone: true },
  { feature: "Field punch list & task management", fieldwire: true, cornerstone: "partial" },
  { feature: "Plan markup & RFI workflows", fieldwire: true, cornerstone: false },
  { feature: "Sheet management & version control", fieldwire: true, cornerstone: false },
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

export default function FieldwireVsCornerstonePage() {
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
              creditText: "Cornerstone PM\u2122",
            }),
          }}
        />

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1024}
          height={884}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Fieldwire vs Cornerstone PM: Field App vs Production Builder Platform
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 31, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Fieldwire is a leading field-management app for punch lists, plan markups, and RFI
            workflows. Cornerstone PM™ is a production home builder platform with a full
            design center, AI agents, and multi-community workflows. They solve different
            problems for different types of construction businesses.
          </p>

          <p>
            If you&apos;re a production home builder who found Fieldwire in a “construction
            software” search, this post explains exactly where that tool ends and where a
            purpose-built production builder platform begins. For the full platform category
            overview, start at{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is Fieldwire built for?
          </h2>
          <p>
            Fieldwire is a field-operations app that earns its reputation among commercial GC
            superintendents, specialty contractors, and remodelers. Its core product revolves
            around:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>Punch list creation, assignment, and tracking across jobsite tasks</li>
            <li>Plan markups and drawing management with version control</li>
            <li>RFI workflows for documenting field questions against drawings</li>
            <li>Sheet-level task assignments tied to specific locations on a plan</li>
            <li>
              Mobile-first field coordination so superintendents can manage work from the
              jobsite
            </li>
          </ul>
          <p>
            These are genuinely useful tools for a superintendent walking a $15M commercial
            building or coordinating a complex remodel. Fieldwire invested in field UX and the
            result is a polished experience for that use case.
          </p>
          <p>
            The problem is that field punch lists and plan markups are not the core workflow
            bottleneck for a production home builder doing 50 homes a year. A production
            builder&apos;s biggest operational surface is pricing floorplans, managing design
            center selections, coordinating vendor bids across 20+ scopes, and repeating the
            same plan efficiently across multiple communities. Fieldwire has no data model for
            any of these. A floorplan, a Designer Package, a lot, a community, an options
            pricing engine — none of these concepts exist in the product.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does a production home builder actually need?
          </h2>
          <p>
            A production builder running 20–150 homes per year faces a completely different
            operational challenge than a field superintendent:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Plan repeats:</strong> The Magnolia floorplan sells
              50 times this year across four communities. Options need to be priced at the plan
              level — once — and reused for every home of that plan. Re-entering sqft
              per job is a workflow that shouldn&apos;t exist.
            </li>
            <li>
              <strong className="text-white">Design center:</strong> Buyers choose flooring,
              countertops, cabinets, and upgrade packages. Selections flow directly into
              purchasing without manual re-entry. Designer Packages auto-lock category choices
              when a package is selected.
            </li>
            <li>
              <strong className="text-white">Exclusion groups:</strong> When a buyer picks Tile
              flooring, the flooring category marks complete — they don&apos;t also need
              to pick Carpet, LVP, and Hardwood. Pick one from many, and you&apos;re done.
            </li>
            <li>
              <strong className="text-white">Auto-quantity scope items:</strong> Frame labor
              priced at $4.25/sqft links to Total Sqft — every floorplan and every
              structural option reprices automatically. Change the rate once and 60 line items
              update.
            </li>
            <li>
              <strong className="text-white">Multi-community vendor management:</strong> The
              concrete sub in Community A may be different from Community B. Vendor assignments
              are community-aware and bids are awarded per scope per community.
            </li>
          </ul>
          <p>
            These are not features Fieldwire is missing — they are concepts that exist in a
            completely different product category.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Feature comparison: Fieldwire vs Cornerstone PM™
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Feature</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">Fieldwire</th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">
                    Cornerstone PM™
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {compareRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-5 py-3.5 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5">
                      <CellIcon value={row.fieldwire} />
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
            What about Cornerstone PM™&apos;s AI capabilities?
          </h2>
          <p>
            Fieldwire has added AI-assisted features around task management and field reporting.
            These are appropriate for its field-coordination audience. They have no application
            to a whole-home builder&apos;s production workflows.
          </p>
          <p>
            Cornerstone PM™ ships five purpose-built AI agents, all bundled at no extra cost
            on the Pro+ plan:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Blueprint AI</strong> — parses a floor plan PDF
              and extracts 130+ material scopes in under 60 seconds.{" "}
              <Link
                href="/ai-takeoff"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                See Blueprint AI →
              </Link>
            </li>
            <li>
              <strong className="text-white">Foreman AI</strong> — 396+ skills covering
              purchasing, vendor management, schedule optimization, budget analysis, and
              profitability reporting. Foreman reads AND writes data — it takes real actions,
              not just answers questions. Persistent per-user and company-wide memory means it
              knows your vendors, your communication style, and your build patterns from day one.{" "}
              <Link
                href="/foreman"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Meet Foreman →
              </Link>
            </li>
            <li>
              <strong className="text-white">Bid Import AI</strong> — auto-maps vendor bid
              spreadsheets to your scope items with no manual column matching.
            </li>
            <li>
              <strong className="text-white">AI MLS Listing Generator</strong> — generates
              listing copy directly from your floorplan and options data.
            </li>
            <li>
              <strong className="text-white">AI Support Agent</strong> — answers platform
              questions in context without leaving your workflow.
            </li>
          </ul>
          <p>
            Cornerstone PM™ also ships a built-in MCP server (in app settings) that lets
            external AI tools like Claude Desktop and Cursor connect directly to Foreman&apos;s
            396+ skill catalog. Builders generate API keys and get ready-to-paste config blocks.
            It&apos;s the only construction management platform to offer MCP integration as a
            first-class feature — and it means every new Foreman skill you ship is
            instantly available to your external AI tools without any configuration changes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The REST API and BYOA story
          </h2>
          <p>
            Fieldwire offers integrations via Zapier and a public API for field data. Cornerstone
            PM™&apos;s{" "}
            <Link
              href="/api-access"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              REST API
            </Link>{" "}
            goes much further. Pro+ plan builders get:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              150+ API endpoints including 84 dedicated RESTful routes across 3 schema formats
              (Anthropic, OpenAI, OpenAPI 3.1)
            </li>
            <li>
              BYOA (Bring Your Own AI Agent) — every endpoint maps to one of Foreman&apos;s
              396+ skills. Ship a new Foreman skill and your BYOA agent gets it automatically
            </li>
            <li>
              37 named webhook events with typed payloads, HMAC signatures, delivery logs, and
              auto-retry
            </li>
            <li>
              Direct integration with external AI tools via MCP — no middleware required
            </li>
          </ul>
          <p>
            The compare page at{" "}
            <Link
              href="/compare"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              /compare
            </Link>{" "}
            shows how this API layer stacks up against Buildertrend, NEWSTAR, and JobTread, none
            of which offer a full REST API with BYOA agent support.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Who should use Fieldwire, and who should use Cornerstone PM™?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Use Fieldwire if you are…</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />A commercial GC
                  superintendent managing complex jobsites
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Running remodels or specialty trade work with heavy plan markup needs
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Managing field punch lists across large multi-phase commercial projects
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  Needing RFI documentation tied to drawing sheets
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-cyan-800/40 bg-cyan-950/20 p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                Use Cornerstone PM™ if you are…
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />A production home
                  builder (5–200 homes/year)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Selling the same floorplans across multiple communities
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Running a buyer-facing design center with upgrade packages and exclusion groups
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Managing multi-trade vendor bids across 20+ scopes
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Wanting AI agents built for home building, not bolted on
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  Needing a REST API + MCP server for external AI tool integration
                </li>
              </ul>
            </div>
          </div>

          <p>
            Fieldwire is excellent for what it was designed to do: field coordination on complex
            commercial and remodel projects. If you&apos;re a production home builder who found it
            in a “construction software” search, you&apos;ve hit a segment mismatch.
            Fieldwire&apos;s strengths have no overlap with the workflows that define production
            home building. Start with the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full home builder software category overview
            </Link>{" "}
            to find platforms purpose-built for floorplans, design centers, and multi-community
            operations, then evaluate specifics.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Built for production builders, not field apps
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              See how Cornerstone PM™ handles floorplans, Designer Packages, auto-quantity
              scope items, Foreman AI, and multi-community vendor management — the workflows
              Fieldwire was never designed for.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access →
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="Fieldwire vs Cornerstone PM: Common Questions"
        subtitle="Answers to what home builders ask when comparing Fieldwire to a production home builder platform."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
