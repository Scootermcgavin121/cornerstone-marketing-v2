import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Foreman AI Now Has 83 Skills Across 11 Categories &mdash; Cornerstone PM™ Blog",
  description:
    "Foreman AI just crossed 83 purpose-built construction skills across 11 categories. Full CRUD on takeoffs, vendor scorecards, bid comparisons, budget variance, profitability reports, sales pipeline analysis, MLS descriptions, image vision &mdash; all from plain English commands. Here&apos;s what the latest milestone means for builders running on Cornerstone PM™.",
  openGraph: {
    title: "Foreman AI Hits 83 Skills &mdash; The Fastest-Growing AI Agent in Home Building",
    description:
      "83 purpose-built construction skills. 11 categories. Full CRUD on takeoffs, vendor scorecards, bid comparisons, profitability analysis, image vision, anti-bot web scraping. The Foreman AI toolkit just keeps growing.",
    images: [
      {
        url: "https://www.cornerstonepm.ai/blog/foreman-ai-skills.png",
        width: 1024,
        height: 1024,
        alt: "Foreman AI construction agent with 83 skills across 11 categories",
      },
    ],
  },
};

export default function ForemanAi83SkillsPost() {
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

        <BlogHero
          src="/blog/foreman-ai-skills.png"
          alt="Foreman AI construction agent with 83 skills across 11 categories"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Product Update
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Foreman AI Now Has 83 Skills Across 11 Categories
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 12, 2026</span>
            <span>&mdash;</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Six weeks ago Foreman AI shipped with 45 skills across 7 categories.
            Today it ships with <strong className="text-white">83 skills across 11 categories</strong>. That&apos;s a
            +84% jump in capability in 42 days &mdash; and the count keeps climbing.
          </p>

          <p>
            For builders running on Cornerstone PM™, the math is simple: every skill is one more job that doesn&apos;t
            need a spreadsheet, a separate tool, or a phone call. Foreman doesn&apos;t describe what should happen.
            It does the work.
          </p>

          <div className="not-prose my-10 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
                Where Foreman Is Now
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-3xl font-black text-amber-400">83</div>
                <div className="text-slate-400 text-xs font-semibold">Purpose-built skills</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400">11</div>
                <div className="text-slate-400 text-xs font-semibold">Capability categories</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400">110+</div>
                <div className="text-slate-400 text-xs font-semibold">Live database tables</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400">0</div>
                <div className="text-slate-400 text-xs font-semibold">Bolt-ons or plugins</div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What got added since the last milestone
          </h2>

          <p>
            The newest batch of skills lives across <strong className="text-white">11 categories</strong>: Design
            Center, Parts, Scope Items, Homes, Vendors, Bidding, Sales, Selections, Reports, Utility, and Undo.
            A few of the standouts:
          </p>

          <ul className="list-disc list-outside pl-6 space-y-3 marker:text-amber-400">
            <li>
              <strong className="text-white">Full CRUD on takeoffs.</strong> Foreman can now list, create,
              update, and remove takeoff line items as well as adjust quantities &mdash; in plain English, against
              the same live data your team is editing. Cleanup that used to mean a CSV round-trip now happens in
              one prompt.
            </li>
            <li>
              <strong className="text-white">Vendor scorecards on demand.</strong> Ask &ldquo;who&apos;s our most
              reliable plumbing vendor this year?&rdquo; Foreman pulls bid response rates, win rates, and on-time
              metrics from the underlying data &mdash; not opinions, not vibes.
            </li>
            <li>
              <strong className="text-white">Spec-level profitability and design center revenue analysis.</strong>{" "}
              Find out which spec tier and which categories are actually driving margin. Useful before you sign off
              on next quarter&apos;s package mix.
            </li>
            <li>
              <strong className="text-white">Sales pipeline analysis.</strong> Stalled deals, average days per
              stage, close rates by agent or by community &mdash; in one prompt instead of three reports.
            </li>
            <li>
              <strong className="text-white">Options gap analysis.</strong> Surface buyers who haven&apos;t made
              their picks in any given category before you hit the cutoff. The kind of thing that quietly causes
              schedule slip if nobody catches it.
            </li>
            <li>
              <strong className="text-white">Undo + action history.</strong> When Foreman takes action on your
              data, you can roll it back. The trust ladder for letting an AI agent touch production data starts
              with a working Undo button.
            </li>
          </ul>

          <p className="mt-6">
            That&apos;s on top of what was already there: parts catalog management, design center options,
            full-stack bid comparison and competitive analysis, SOW generation, MLS listing descriptions, punch
            list generation, image vision (paste any screenshot &mdash; product photo, vendor quote, supplier page
            &mdash; and Foreman reads it), anti-bot web scraping for Home Depot / Ferguson / Lowe&apos;s pricing,
            persistent per-user memory, and built-in memory compaction for marathon sessions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why &ldquo;more skills&rdquo; isn&apos;t just a vanity number
          </h2>

          <p>
            Most construction AI tools are chatbots. They retrieve information. They paraphrase your docs. They
            describe what you should do. Foreman is a <strong className="text-white">construction agent</strong>:
            it reads your real Cornerstone data and writes back to it. Create a PO. Update a design option. Draft
            a bid request to twelve vendors. Generate an SOW. Compare three quotes side-by-side and flag the
            cheapest qualified bid.
          </p>

          <p>
            Every new skill is a new action Foreman can take on your behalf without you opening another tab. The
            jump from 45 to 83 is the difference between &ldquo;answers questions about my data&rdquo; and
            &ldquo;runs entire workflows against my data while I&apos;m on a call.&rdquo;
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The compaction advantage (still nobody else has it)
          </h2>

          <p>
            Every other construction AI runs into the same wall: a long session with a few thousand messages
            either crashes, forgets the early context, or quietly starts hallucinating because it can&apos;t hold
            the conversation anymore. Foreman has <strong className="text-white">built-in memory compaction</strong>{" "}
            &mdash; it auto-summarizes older messages mid-session so the recent context stays word-for-word intact
            and you can keep working through a 200-option cleanup or a full catalog import without restarting.
          </p>

          <p>
            That&apos;s not a feature you appreciate the first time you use Foreman. It&apos;s the feature you
            notice the third hour into a marathon session when everyone else&apos;s AI is dropping context and
            yours is still tracking everything you said at the start.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What&apos;s next
          </h2>

          <p>
            The skill catalog grows every week. New tools shipping in the queue include deeper sales analytics,
            additional report generators, and richer vendor workflows. The number on this page will be wrong again
            soon &mdash; in the right direction.
          </p>

          <p>
            If you want Foreman working on your build pipeline, the Pro plan ($499/mo flat, unlimited users)
            includes every skill listed here. The 2-year free beta is open for the first 100 home builders.
          </p>

          <div className="not-prose mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-3">Try Foreman AI</h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed">
              See Foreman manage real builder data &mdash; parts, vendors, homes, design center, sales pipeline
              &mdash; from plain English commands. Beta access is free for 2 years for the first 100 home builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-bold text-sm hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30"
              >
                Get Beta Access &rarr;
              </Link>
              <Link
                href="/foreman"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                See the full skill catalog
              </Link>
            </div>
          </div>

          <p className="text-sm text-slate-500 italic mt-10">
            Foreman AI is part of Cornerstone PM™ &mdash; home builder software built for production, semi-custom,
            and custom builders running 5&ndash;200 homes a year. Flat pricing from $149/mo with unlimited users.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
