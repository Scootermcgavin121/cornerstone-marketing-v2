import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Foreman AI Hits 100 Skills &mdash; The First Construction AI to Cross Triple Digits | Cornerstone PM&trade; Blog",
  description:
    "Foreman AI just crossed 100 purpose-built construction skills across 11 categories. Skill #100 is learnBuilderPreferences &mdash; Foreman now learns YOUR build patterns from your own takeoff history. The more plans you set up, the smarter it gets for your org specifically.",
  openGraph: {
    title: "Foreman AI Hits 100 Skills &mdash; And Skill #100 Learns Your Build Patterns",
    description:
      "100 purpose-built construction skills. 11 categories. Skill #100 (learnBuilderPreferences) reads your existing floorplan takeoffs and learns YOUR org's defaults &mdash; no configuration required. The more you build, the smarter Foreman gets.",
    images: [
      {
        url: "https://www.cornerstonepm.ai/blog/foreman-ai-100-skills.png",
        width: 1024,
        height: 1024,
        alt: "Foreman AI hits 100 skills milestone for home builders",
      },
    ],
  },
};

export default function ForemanAi100SkillsPost() {
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
          src="/blog/foreman-ai-100-skills.png"
          alt="Foreman AI construction agent hits 100 skills milestone"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Milestone &middot; Product Update
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Foreman AI Hits 100 Skills &mdash; And Skill #100 Learns Your Build Patterns
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 12, 2026</span>
            <span>&mdash;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Six weeks ago Foreman AI shipped with 45 skills. Last week we crossed 83.
            Today Foreman crossed <strong className="text-white">100 purpose-built construction skills</strong>
            {" "}across 11 categories &mdash; and as far as we can tell, no other construction AI agent is in
            the same neighborhood.
          </p>

          <p>
            But the headline isn&apos;t the count. The headline is what skill #100 actually does.
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
                <div className="text-3xl font-black text-amber-400">100</div>
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
            Skill #100: <code className="text-amber-300 text-xl">learnBuilderPreferences</code>
          </h2>

          <p>
            Most AI features in construction software work the same way: a vendor ships you a generic
            tool with hardcoded defaults, and you spend the first six months trying to teach it your
            company&apos;s conventions through configuration screens that nobody on your team has time
            to fill out.
          </p>

          <p>
            Skill #100 flips that. <strong className="text-white">Foreman learns your build patterns
            from your own data &mdash; automatically.</strong>
          </p>

          <p>
            Here&apos;s the loop, in one example:
          </p>

          <div className="not-prose my-8 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center">1</div>
              <div className="text-slate-300 text-base leading-relaxed">
                You tell Foreman: <em className="text-slate-200">&ldquo;I always use recessed cans in bedrooms.&rdquo;</em>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center">2</div>
              <div className="text-slate-300 text-base leading-relaxed">
                Foreman scans your existing floorplan takeoffs. It sees that <strong className="text-white">The Addison</strong> bedrooms have recessed cans. <strong className="text-white">The Chesapeake</strong> bedrooms have recessed cans. Pattern confirmed.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center justify-center">3</div>
              <div className="text-slate-300 text-base leading-relaxed">
                Next time you set up a new plan, Foreman volunteers:{" "}
                <em className="text-slate-200">&ldquo;Bedrooms &rarr; Recessed Light (avg qty 4, typical part: Halo 6&Prime; LED).&rdquo;</em>
              </div>
            </div>
          </div>

          <p>
            <strong className="text-white">Your own data is the training set.</strong> Nobody has to
            sit through a configuration wizard. Nobody has to maintain a preferences document. Two
            builders running on Cornerstone PM&trade; have completely different defaults &mdash;
            because they have completely different historical data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The compounding effect: skill #99 just got smarter
          </h2>

          <p>
            What makes this skill structurally important is that it doesn&apos;t just live in
            isolation. <strong className="text-white">Other Foreman skills now check learned
            preferences before falling back to hardcoded defaults.</strong>
          </p>

          <p>
            Skill #99 was <code className="text-amber-300">setupLightingPackage</code> &mdash; Foreman
            building a complete fixture-by-fixture lighting plan for a home in one command (recessed
            cans in living areas, vanity bars over bathroom sinks, pendants over kitchen islands,
            exterior coach lights at entries). The hardcoded defaults are construction-savvy out of
            the box. But starting today, <code className="text-amber-300">setupLightingPackage</code>
            {" "}calls <code className="text-amber-300">learnBuilderPreferences</code> first. If your
            org&apos;s past takeoffs say bedrooms get ceiling fans with light kits instead of
            recessed cans, the package builds with ceiling fans. If your past takeoffs say
            kitchens get four pendants over the island instead of three, the package builds with
            four pendants.
          </p>

          <p>
            That&apos;s the whole point. Every new skill we ship that hits Foreman&apos;s domain layer
            &mdash; design center setup, scope assembly, vendor selection, option packaging &mdash;
            gets to ride on top of <code className="text-amber-300">learnBuilderPreferences</code>.
            The more you build inside Cornerstone PM&trade;, the more your defaults reflect{" "}
            <em>your</em> business.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What the other 99 skills look like
          </h2>

          <p>
            For builders running on Cornerstone PM&trade;, every Foreman skill is a job that
            doesn&apos;t need a spreadsheet, a separate tool, or a phone call. The catalog now
            covers:
          </p>

          <ul className="list-disc list-outside pl-6 space-y-3 marker:text-amber-400">
            <li>
              <strong className="text-white">Full CRUD on the core domain.</strong> Takeoffs, parts,
              vendors, homes, options, scope items, bids, POs, tasks, selections &mdash; Foreman
              reads and writes all of it in plain English.
            </li>
            <li>
              <strong className="text-white">AI-powered analysis.</strong> Vendor scorecards,
              profitability reports, budget variance, sales pipeline analysis, spec-level margin
              comparison, options gap detection.
            </li>
            <li>
              <strong className="text-white">Document generation.</strong> SOWs, bid invitations,
              comparison reports, punch lists, MLS sheets, full lighting packages, Excel exports,
              styled PDFs.
            </li>
            <li>
              <strong className="text-white">System intelligence.</strong> Persistent per-user
              memory, built-in memory compaction (the only construction AI that doesn&apos;t forget
              mid-session), smart data linking, dedup, anti-bot web scraping, image vision, error
              recovery, and now <code className="text-amber-300">learnBuilderPreferences</code>.
            </li>
            <li>
              <strong className="text-white">Undo + action history.</strong> Letting an AI agent
              touch production data only works if you can roll it back. Every Foreman action is
              reversible.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why 100 isn&apos;t a vanity number
          </h2>

          <p>
            Most &ldquo;AI&rdquo; in construction software is a chat box wired to ChatGPT. The
            vendor ships a generic LLM with a system prompt that says <em>&ldquo;you are a
            construction assistant&rdquo;</em> and calls it a day. The AI describes what should
            happen but can&apos;t do anything.
          </p>

          <p>
            Foreman is the opposite. 100 specific construction actions. Real data access. Real
            writes. Real undo. And now, real learning from your own historical work.
          </p>

          <p>
            The jump from 45 to 100 in roughly 60 days isn&apos;t a hiring spree &mdash; it&apos;s
            because Foreman is built <em>into</em> the platform. Every new endpoint we ship can
            become a new Foreman skill. No bolt-ons. No plugins. No third-party agent layer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What&apos;s next
          </h2>

          <p>
            The skill catalog grows every week. The number on this page will be wrong soon &mdash;
            in the right direction. And every skill that ships from here forward gets to lean on
            the learned-preferences layer, which means the gap between a fresh Foreman install and
            a Foreman install that&apos;s been running your business for six months keeps widening.
          </p>

          <p>
            That&apos;s the moat. Most AI tools are the same on day 1 and day 365. Foreman is a
            different product after a year of your data is in it.
          </p>

          <div className="not-prose mt-10 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-3">Try Foreman AI</h3>
            <p className="text-slate-400 mb-5 text-sm leading-relaxed">
              See Foreman manage real builder data &mdash; parts, vendors, homes, design center,
              sales pipeline &mdash; from plain English commands. Beta access is free for 2 years
              for the first 100 home builders.
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
            Foreman AI is part of Cornerstone PM&trade; &mdash; home builder software built for
            production, semi-custom, and custom builders running 5&ndash;200 homes a year. Flat
            pricing from $149/mo with unlimited users.
          </p>

          <p className="text-sm text-slate-500 mt-6">
            Part of the Foreman AI milestone series. Previous post:{" "}
            <Link href="/blog/foreman-ai-83-skills" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              Foreman AI Now Has 83 Skills Across 11 Categories
            </Link>
            .
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
