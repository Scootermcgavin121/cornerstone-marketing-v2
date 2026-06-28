import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, FileText, Home, Zap, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/ai-mls-listing-generator.png";
const heroImageAlt =
  "AI MLS listing generator for home builders — Foreman AI creating home listings from floorplan data in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title:
    "MLS Listing Generator: How Foreman AI Writes Your Home Listings From Floorplan Data",
  slug: "ai-mls-listing-generator-home-builders",
  description:
    "Cornerstone PM's AI MLS Listing Generator creates compelling, accurate home listings from your floorplan specs, options, and community data — in seconds, not hours.",
  datePublished: "2026-06-28",
});

export const metadata: Metadata = {
  title:
    "MLS Listing Generator: How Foreman AI Writes Your Home Listings From Floorplan Data — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM's AI MLS Listing Generator creates compelling, accurate home listings from your floorplan specs, options, and community data — in seconds, not hours.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/ai-mls-listing-generator-home-builders",
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

const benefits = [
  {
    icon: <Clock className="w-5 h-5 text-emerald-400" />,
    title: "Seconds, not hours",
    desc: "A listing that takes a sales agent 45–90 minutes to draft from scratch takes Foreman AI under 60 seconds. Give it the plan name and community; it handles the rest.",
    color: "emerald",
  },
  {
    icon: <Home className="w-5 h-5 text-cyan-400" />,
    title: "Grounded in your actual floorplan data",
    desc: "Foreman pulls bedroom count, square footage, structural options, and designer finish packages directly from your Cornerstone PM account — no copy-paste, no guessing.",
    color: "cyan",
  },
  {
    icon: <FileText className="w-5 h-5 text-violet-400" />,
    title: "Consistent voice across every listing",
    desc: "Generic AI tools write differently every time. Because Foreman knows your builder's voice and community brand, listings stay consistent across 40 homes in the same subdivision.",
    color: "violet",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "Editable in one conversation",
    desc: "Listing too formal? Too long? Foreman refines on request — 'make it warmer' or 'cut to 150 words for Zillow' — without starting over.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

export default function AiMlsListingGeneratorPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />

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

      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

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
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            MLS Listing Generator: How Foreman AI Writes Your Home Listings From Floorplan Data
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 28, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s AI MLS Listing Generator creates accurate, compelling home listings
            from your existing floorplan data&mdash;bedroom count, square footage, designer packages,
            structural options, and community details&mdash;in under 60 seconds. No copy-paste from
            spreadsheets. No staring at a blank page. Just give Foreman the plan name and let it
            draft.
          </p>

          <p>
            Every production home builder runs the same silent time drain: a sales agent sits down
            to write the Zillow listing for the new Magnolia plan, stares at a spec sheet, and
            spends an hour turning raw data into marketing copy. Multiply that by 12 floorplans
            across 4 communities and you&apos;ve burned a week of sales bandwidth on a task that
            repeats every time you open a new phase. The{" "}
            <Link
              href="/listing-sheet"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              AI Listing Sheet Generator
            </Link>{" "}
            on Cornerstone PM exists to eliminate that work entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the MLS Listing Generator actually do?
          </h2>
          <p>
            The MLS Listing Generator is one of Cornerstone PM&apos;s five native AI agents&mdash;built
            into the platform alongside Foreman AI, Blueprint AI takeoff, Bid Import AI, and the
            AI Support Agent. When a sales agent opens a home listing, they can invoke the
            generator and Foreman AI drafts the complete listing copy from the data already in
            the account: bedroom and bathroom count, under-air square footage, structural
            options the buyer selected, designer finish packages, and community-level highlights.
          </p>
          <p>
            The output is ready-to-paste copy for MLS, Zillow, Realtor.com, or your own website.
            Agents refine it in the same conversation&mdash;&ldquo;make it warmer,&rdquo; &ldquo;shorten it for
            Zillow,&rdquo; &ldquo;emphasize the bonus room&rdquo;&mdash;without starting over. The draft is a
            starting point, not the final word; the sales agent owns the last pass.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter for production home builders specifically?
          </h2>
          <p>
            Custom builders write one listing per job. Production builders write the same plan
            dozens of times across multiple communities&mdash;and every listing still has to be
            slightly different: different lot premiums, different structural options, different
            designer packages, different community amenities. Generic AI tools like ChatGPT can
            draft a listing, but they require you to paste in all the spec data manually every
            time. They don&apos;t know the difference between the Magnolia 2BR and the Magnolia 3BR
            with finished basement. Foreman does, because the data lives in your Cornerstone PM
            account.
          </p>
          <p>
            The result is listings that are accurate by default&mdash;not because the sales agent
            manually double-checked every square footage number, but because the generator pulled
            it directly from the floorplan record.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className={`mb-3 ${colorMap[b.color]}`}>{b.icon}</div>
                <h3 className="font-bold text-white mb-2 text-base">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How is this different from pasting specs into ChatGPT?
          </h2>
          <p>
            The critical difference is data sourcing. When a sales agent pastes specs into a
            generic AI tool, they are manually bridging the gap between their construction
            platform and the AI. Every number has to come from somewhere&mdash;a spreadsheet, a
            print-out, a text thread&mdash;and every manual transfer is an error opportunity.
          </p>
          <p>
            Foreman AI reads directly from your Cornerstone PM account. The bedroom count comes
            from the floorplan record. The square footage comes from the same auto-quantity scope
            items that drive your bid templates. The designer package description comes from the
            selections your buyer already made. There is no manual bridging step, which means
            there is no opportunity to copy the wrong number or describe a finish that was removed
            last week.
          </p>
          <p>
            On top of accuracy, Foreman has memory. It knows your builder&apos;s voice, your community
            brand, and your typical buyer profile across conversations. A generic AI tool starts
            fresh every time; Foreman builds on what it already knows about your operation. For
            more on how Foreman&apos;s memory works, see the{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI Memory deep-dive
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What goes into a generated listing?
          </h2>
          <p>
            The generator pulls from every data layer in the account that&apos;s relevant to the
            listing:
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              {
                label: "Floorplan specs",
                detail:
                  "Bedrooms, bathrooms, garage bays, under-air square footage, total square footage, stories — pulled directly from the floorplan record, not typed in.",
              },
              {
                label: "Structural options",
                detail:
                  "Bonus room, finished basement, 3-car garage, covered porch — if the buyer selected them, they appear in the listing. If not, they don't. Accuracy without manual filtering.",
              },
              {
                label: "Designer packages",
                detail:
                  "The selected Designer Package — Modern Farmhouse, Coastal, Classic — and its key finish highlights inform the copy without requiring the agent to translate a spec sheet.",
              },
              {
                label: "Community details",
                detail:
                  "Community name, neighborhood amenities, and location highlights that make the same Magnolia plan in Riverstone feel different from the one in Pinebrook.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 flex gap-4"
              >
                <div className="flex-shrink-0 w-2 rounded-full bg-emerald-500/50 self-stretch" />
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where does the listing sheet fit in the sales workflow?
          </h2>
          <p>
            Cornerstone PM&apos;s{" "}
            <Link
              href="/sales"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>{" "}
            tracks prospects from first inquiry through contract. The listing sheet is the
            content layer that feeds that pipeline&mdash;the external-facing copy that gets a
            buyer from a Zillow search to a model home tour. When the listing is wrong or generic,
            it underperforms at the top of the funnel. When it accurately reflects the plan, the
            options, and the community, it qualifies buyers before they walk through the door.
          </p>
          <p>
            For builders managing the{" "}
            <Link
              href="/listing-sheet"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              listing sheet
            </Link>{" "}
            process at scale, the AI generator means every new phase gets polished listings
            the day lots go on sale&mdash;not two weeks later after the sales team finds bandwidth
            to write them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Part of the 396+ Foreman skill catalog
          </h2>
          <p>
            The MLS Listing Generator is one skill in Foreman AI&apos;s catalog of 396+ construction
            skills across 20 categories. The same agent that generates your listings can also
            compare bids, create purchase orders, analyze jobsite photos, generate scope of work
            documents, and run profitability reports&mdash;all in one conversation, reading and
            writing your actual Cornerstone PM data.
          </p>
          <p>
            That matters because the listing generator isn&apos;t a standalone tool. A sales agent
            who uses it to draft a listing can immediately ask Foreman to pull the budget summary
            for that plan, check which vendors are assigned to the community, or flag open bid
            requests. One agent, one conversation, the full operational picture.
          </p>
          <p>
            For a complete overview of Foreman&apos;s capabilities, see the{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI page
            </Link>
            . Foreman AI and the MLS Listing Generator are available on the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Pro+ plan
            </Link>
            .
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-6 my-8">
            <p className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-emerald-500/40 pl-4">
              &ldquo;Every production builder writes the same plan 40 times and writes the listing
              from scratch 40 times. The MLS Listing Generator closes that gap: the floorplan
              data you already captured in Cornerstone becomes the listing copy you&apos;d otherwise
              spend an afternoon writing.&rdquo;
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop writing listings from scratch
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI generates accurate, compelling MLS listings from your floorplan data —
              in seconds. Part of the 396+ skill catalog on Pro+.
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
