import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, FileText, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/ai-mls-listing-sheet.png";
const heroImageAlt =
  "MLS listing generator for home builders — AI-written spec home listing sheet built from live room dimensions, upgrades, and design selections";

const blogSchema = buildBlogPostSchema({
  title: "Your Spec Home Already Wrote Its Own MLS Listing",
  slug: "ai-mls-listing-sheet-spec-homes-home-builders",
  description:
    "Room dimensions, upgrades, and finish selections already live in your build data. Here is how a one-click AI listing sheet turns them into MLS-ready copy.",
  datePublished: "2026-08-28",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/sales",
  },
});

export const metadata: Metadata = {
  title:
    "Your Spec Home Already Wrote Its Own MLS Listing — Cornerstone PM™ Blog",
  description:
    "Room dimensions, upgrades, and finish selections already live in your build data. Here is how a one-click AI listing sheet turns them into MLS-ready copy.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/ai-mls-listing-sheet-spec-homes-home-builders",
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

const listingFields = [
  {
    icon: "📐",
    label: "Room Dimensions",
    detail:
      "Extracted from the floor plan PDF by Blueprint AI — every room with actual square footage, not a number someone typed.",
  },
  {
    icon: "🏗️",
    label: "Structural Upgrades",
    detail:
      "Every structural option the buyer selected: bonus room, finished basement, 3-car garage, covered porch.",
  },
  {
    icon: "🎨",
    label: "Design Selections",
    detail:
      "Flooring, countertops, cabinets, plumbing, and lighting broken out by category from the Design Center.",
  },
  {
    icon: "📍",
    label: "Lot and Community Info",
    detail:
      "Lot number, lot size in acres and square feet, community name, city, schools, and amenities.",
  },
  {
    icon: "📋",
    label: "Home Specs",
    detail:
      "Beds, baths, garage bays, stories, and contract price — pulled from the home record, not typed again.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What is a MLS listing generator for home builders?",
    a: "An MLS listing generator for home builders pulls room dimensions, structural upgrades, design selections, and community details from your build data and writes the listing copy automatically — so an agent never has to re-measure a floor plan or re-type a selections sheet. Cornerstone's AI Listing Sheet is included from the Starter plan.",
  },
  {
    q: "What data does the AI listing sheet pull automatically?",
    a: "Community name, city, schools, and amenity details; room dimensions extracted by Blueprint AI from the actual floor plan PDF; lot number and size in both acres and square feet; every structural upgrade the buyer selected; design selections broken out by category (flooring, countertops, cabinets, plumbing, lighting); beds, baths, garage bays, stories, and contract price.",
  },
  {
    q: "Can we control the length of the AI-written listing copy?",
    a: "Yes. A word-count slider lets you generate copy from 50 to 1,000 words so the output fits your MLS region's character limits. Each home gets unique prose — it is not a fill-in-the-blank template.",
  },
  {
    q: "Does every home get unique listing copy or does it use a template?",
    a: "Every home generates unique AI-written prose. The copy is built from that specific home's room dimensions, selected structural options, and design-center selections, so two homes on the same floorplan in the same community produce meaningfully different descriptions.",
  },
  {
    q: "Where do I access the listing sheet in Cornerstone?",
    a: "There are two entry points: the Listing Sheet action in the Sales sidebar for any home, or by asking Foreman AI to generate a listing for a specific address. Both produce the same structured output and AI-written copy.",
  },
  {
    q: "Which Cornerstone plan includes the MLS listing generator?",
    a: "The AI MLS Listing Sheet is included from the Starter plan — it is not gated behind Pro+. Any builder on Cornerstone can generate listing sheets without upgrading.",
  },
  {
    q: "Are AI concept renderings or a buyer self-serve design flow included?",
    a: "Not yet. The listing sheet generates text copy and structured data from your existing build records. AI concept renderings and a buyer-facing 'Design My Home' self-serve flow are on the roadmap but are not currently shipped.",
  },
];

export default function AiMlsListingSheetPage() {
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
            Sales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Your Spec Home Already Wrote Its Own MLS Listing
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 28, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A one-click AI listing sheet generates MLS-ready copy directly
            from your{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder sales pipeline
            </Link>{" "}
            — room dimensions, structural upgrades, design selections, and
            community details pulled from the records you already maintain,
            with a word-count slider from 50 to 1,000 words and unique prose
            for every home.
          </p>

          <p>
            The absurdity is easy to miss until someone points it out. An
            agent retypes room dimensions off a plan PDF. Digs through a
            selections sheet for the finish list. Calls the design coordinator
            to confirm which countertop the buyer picked. Guesses at square
            footage. Writes listing prose from scratch. Then does all of it
            again for the next spec home — for a home whose every detail is
            already structured data in the builder&apos;s own system.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the AI listing sheet pull automatically?
          </h2>

          <p>
            Every field that an agent would otherwise have to track down by
            hand is already in the home&apos;s record. The listing sheet collects
            it in one pass:
          </p>

          <div className="not-prose space-y-3 my-6">
            {listingFields.map((field, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <span className="text-xl shrink-0">{field.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    {field.label}
                  </p>
                  <p className="text-sm text-slate-400">{field.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The room dimensions are the piece builders find most surprising.{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Blueprint AI
            </Link>{" "}
            extracts them from the actual floor plan PDF during takeoff — every
            room with real square footage, not a number an estimator typed into
            a cell once and nobody audited since. That same data powers the
            takeoff; the listing sheet just reads it back out in a format an
            agent can paste into the MLS.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the AI write unique copy for each home?
          </h2>

          <p>
            The listing sheet is not a fill-in-the-blank template. The AI reads
            the home&apos;s actual structural selections and design choices and
            generates prose specific to that home. Two specs on the same
            floorplan in the same community — one with a bonus room, Coastal
            Oak LVP, and Quartz counters; one with a finished basement, carpet,
            and Granite — produce meaningfully different descriptions.
          </p>

          <p>
            The word-count slider runs from 50 to 1,000 words. MLS regions
            differ on character limits — some cap descriptions at 250 words,
            others give you a full page. Setting the slider to the region&apos;s
            limit produces copy that fits without manual trimming.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why can&apos;t a generic AI writing tool do this?
          </h2>

          <p>
            A generic AI writing tool can produce listing copy — but it
            produces it from whatever you type into the prompt. That means
            someone still has to look up the room dimensions, pull the
            selections sheet, confirm which structural options the buyer chose,
            and paste all of it into a chat window. The research task does not
            disappear; it just moves upstream of the AI.
          </p>

          <p>
            The Cornerstone listing sheet has no research task because the data
            is already there. The design center, the AI takeoff, and the sales
            pipeline share one database. The listing sheet reads from that
            database rather than from a document someone assembled by hand.
            This is why the feature only works inside a platform where those
            three systems are the same system — a standalone CRM has no
            construction data to read.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Two ways to generate a listing sheet
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Listing Sheet action in the Sales sidebar
                </p>
                <p className="text-sm text-slate-400">
                  Open any home in the Sales module and click the Listing Sheet
                  action. The sheet populates instantly with all live data — no
                  prompting required.
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Ask Foreman AI by address
                </p>
                <p className="text-sm text-slate-400">
                  Tell{" "}
                  <Link
                    href="/foreman"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
                  >
                    Foreman AI
                  </Link>{" "}
                  to generate a listing for a specific address. It reads the
                  same home record and produces the same output — useful when
                  you are already in a Foreman session working on that home.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Which plan includes the MLS listing generator?
          </h2>

          <p>
            The AI MLS Listing Sheet is included from the Starter plan. It is
            not gated behind Pro+. Any builder on Cornerstone can generate
            listing sheets for every spec home without upgrading, which makes
            it one of the more immediately useful AI features for teams that
            are not yet ready for the full purchasing and API surface.
          </p>

          <p>
            A few things about what is and is not currently shipped: the
            listing sheet generates text copy and structured data from existing
            build records. AI concept renderings and a buyer-facing &quot;Design My
            Home&quot; self-serve flow are on the roadmap but are not yet available.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The argument that closes it
          </h2>

          <p>
            Sales CRMs have no construction data. Construction platforms have no
            listing output. The only reason the listing sheet works in one click
            is that the{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>
            , the design center, and the takeoff share one database — which
            means the research that used to take thirty minutes is already done
            by the time an agent needs it. Every spec home in Cornerstone has
            already written its own MLS listing. Someone just has to click
            Generate.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop re-keying data that already exists.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone&apos;s AI Listing Sheet pulls room dimensions, design
              selections, and community details from your live build data and
              writes unique MLS copy for every spec home — available from the
              Starter plan.
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

      <FAQSection
        items={faqs}
        title="MLS Listing Generator for Home Builders — FAQ"
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
