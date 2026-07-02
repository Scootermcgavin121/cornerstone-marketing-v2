import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, BarChart2, TrendingUp, Star, FileText } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-ai-profitability-reports.png";
const heroImageAlt =
  "AI job costing construction software — Foreman profitability reports and vendor scorecards for builders";

const blogSchema = buildBlogPostSchema({
  title: "AI Job Costing: Profitability Reports and Vendor Scorecards on Demand",
  slug: "foreman-ai-profitability-budget-reports-vendor-scorecards",
  description:
    "Stop building margin reports by hand. Foreman generates profitability reports, budget reports, and vendor scorecards from your live build data in seconds.",
  datePublished: "2026-07-02",
  mentionsProduct: { name: "Foreman AI", url: "https://www.cornerstonepm.ai/foreman" },
});

export const metadata: Metadata = {
  title:
    "AI Job Costing: Profitability Reports and Vendor Scorecards on Demand — Cornerstone PM™ Blog",
  description:
    "Stop building margin reports by hand. Foreman generates profitability reports, budget reports, and vendor scorecards from your live build data in seconds.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-profitability-budget-reports-vendor-scorecards",
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

const reportTypes = [
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    title: "Profitability reports",
    desc: "Foreman calculates gross margin per home or per community from your live Master Cost Budget and awarded vendor bids — no export, no spreadsheet, no waiting on the accountant.",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-cyan-400" />,
    title: "Budget reports",
    desc: "Budget vs. actual breakdowns at the scope level, across a single floorplan or rolled up to a community. Foreman pulls from the same data your purchasing team works in daily.",
  },
  {
    icon: <Star className="w-5 h-5 text-amber-400" />,
    title: "Vendor scorecards",
    desc: "Foreman compares submitted bids, on-time performance patterns, and awarded history across vendors to score each one. Know which subs are pricing fairly and which are slipping before the next bid cycle.",
  },
  {
    icon: <FileText className="w-5 h-5 text-violet-400" />,
    title: "Bid comparisons and SOW documents",
    desc: "When two or more vendors bid the same scope, Foreman lays them side by side and surfaces the delta. It can also generate scope-of-work documents from your existing scope items — ready to attach to a bid request.",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What is AI job costing software for home builders?",
    a: "AI job costing software uses an AI agent to generate profitability reports, budget vs. actual summaries, and vendor scorecards directly from your live project data — without requiring manual spreadsheet exports. Foreman AI in Cornerstone PM is an example: it reads your real records and produces job costing reports on demand.",
  },
  {
    q: "How does Foreman generate profitability reports from live data?",
    a: "Foreman is wired directly to your Cornerstone PM account. It reads your Master Cost Budget (built from real Blueprint AI takeoff parts and awarded vendor bids), compares actuals against the budget, and computes gross margin per home or per community. Because Foreman has read access to your live records, the profitability number is always current — not a snapshot from last month's export.",
  },
  {
    q: "What is a vendor scorecard and how does Foreman build one?",
    a: "A vendor scorecard is a comparative rating of each subcontractor based on bid pricing, historical performance, and awarded work patterns. Foreman pulls your vendor bid history, compares each vendor's submitted numbers against awarded bids and scope benchmarks, and summarizes which vendors are consistently competitive and which are outliers. It takes seconds instead of a manual pivot table.",
  },
  {
    q: "Can Foreman compare multiple vendor bids side by side?",
    a: "Yes. When two or more vendors submit bids on the same scope through Cornerstone PM's bid request system, Foreman can surface a side-by-side comparison — delta by line item, total delta, and a recommended award based on pricing and scorecard history. This is available as a natural-language request inside the Foreman chat.",
  },
  {
    q: "What plan includes Foreman AI reporting?",
    a: "Foreman AI — including profitability reports, budget reports, vendor scorecards, bid comparisons, and SOW generation — is available on the Pro+ plan at $599/month. Pro+ also includes the full 396+ skill catalog, per-user and company-wide memory, REST API access, and BYOA.",
  },
  {
    q: "How is this different from just exporting a spreadsheet?",
    a: "A spreadsheet export is a frozen snapshot. By the time you've formatted it, added formulas, and emailed it to a partner, the underlying data may have changed. Foreman generates reports from live data on demand — in a single prompt, without leaving the app. It also interprets the numbers, not just presents them: it can flag which scope is over budget, which vendor is pricing above benchmark, and which floorplan is dragging down community margin.",
  },
  {
    q: "Can Foreman generate a scope-of-work document automatically?",
    a: "Yes. Foreman can produce a structured SOW document from your existing scope items, floorplan selections, and vendor assignments. The output is ready to attach to a bid request or send to a new vendor — no drafting from scratch.",
  },
];

export default function ForemanProfitabilityReportsPage() {
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
            AI Job Costing: Profitability Reports and Vendor Scorecards on Demand
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 2, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Foreman AI generates profitability reports, budget reports, vendor scorecards, and
            bid comparisons from your live{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM
            </Link>{" "}
            data in seconds — because it reads and writes your real records, not a stale export.
            Stop building margin reports by hand.
          </p>

          <p>
            Most production home builders run job costing the same way: pull a budget export at
            month-end, paste it into a spreadsheet, manually add actual costs from the accounting
            system, build pivot tables, and email a PDF to whoever asked for it. By the time the
            report lands in an inbox, the underlying data has already moved. The framing sub
            submitted a revised bid. A vendor got awarded on a new community. An allowance got
            replaced by a real price.
          </p>

          <p>
            The problem isn&apos;t the spreadsheet skill. It&apos;s that the data lives in your
            construction platform but the analysis has to happen somewhere else. Foreman AI
            closes that gap: because it&apos;s directly wired to your live{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Master Cost Budget
            </Link>
            , it can generate any report you need in a single prompt — no export, no pivot table,
            no waiting.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What reports can Foreman generate on demand?
          </h2>

          <div className="not-prose space-y-4 my-6">
            {reportTypes.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Each of these pulls from your live Cornerstone PM records — the same vendor bids your
            purchasing team is working with today, the same Blueprint AI takeoff quantities, the
            same awarded pricing that locked when you accepted a bid. The reports aren&apos;t
            extrapolations or estimates. They&apos;re summaries of the data your platform is already
            tracking.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does live data access change what AI can do?
          </h2>

          <p>
            Generic AI tools — ChatGPT, Claude used as a standalone assistant — answer from
            training data. They can tell you what a profitability report should look like, but
            they have no idea what your Magnolia plan&apos;s framing scope cost, which vendor won
            Community B, or whether your paint contractor is pricing 12% above benchmark.
          </p>

          <p>
            Foreman&apos;s read-and-write access to your account is what makes the difference.{" "}
            <Link
              href="/blog/foreman-ai-agent-takes-actions-not-chatbot"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman is an agent, not a chatbot
            </Link>
            : it doesn&apos;t just describe what to look at, it goes and looks. A prompt like
            &ldquo;show me profitability across Community A broken down by scope&rdquo; returns an actual
            answer using your actual numbers — not a template you fill in yourself.
          </p>

          <p>
            That live connection also means the report is always current. Ask on Monday, ask again
            Friday after three more bids close, and you&apos;ll get two different answers — both
            accurate to that moment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How vendor scorecards work in practice
          </h2>

          <p>
            Most builders maintain vendor relationships informally: you know which framer you trust,
            which plumber prices aggressively, which HVAC sub tends to pad estimates. That
            institutional knowledge usually lives in the estimator&apos;s head — and walks out the door
            when they leave.
          </p>

          <p>
            Foreman can make that knowledge explicit. By reading your historical bid data and
            awarded history inside Cornerstone PM, it can surface patterns: which vendors are
            consistently within 5% of the winning bid, which ones price 20% over benchmark and
            never get awarded but keep submitting, which ones have won on multiple communities and
            delivered reliable pricing.
          </p>

          <p>
            The output is a vendor scorecard per trade — a structured summary you can share with a
            project manager, use to prequalify vendors on a new community, or reference when a
            sub asks why they weren&apos;t awarded. It takes a single Foreman prompt. The alternative
            is an afternoon in Excel.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this fits into the full purchasing system
          </h2>

          <p>
            Foreman&apos;s reporting skills sit at the end of a purchasing chain that starts with real
            data:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <Link
                href="/ai-takeoff"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Blueprint AI takeoff
              </Link>{" "}
              extracts real material quantities from your floor plan PDF — not estimator guesses
            </li>
            <li>
              <Link
                href="/blog/auto-quantity-scope-items-square-footage"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Auto-quantity scope items
              </Link>{" "}
              calculate sqft-driven costs across every floorplan and structural option automatically
            </li>
            <li>
              <Link
                href="/blog/vendor-bid-requests-portal-no-login"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Vendor bid requests
              </Link>{" "}
              go out with scope-filtered Excel templates; vendors submit through a no-login portal
            </li>
            <li>
              Awarded bids lock and flow into the Master Cost Budget — no filler, no synthetic
              splits, every dollar traced to a real vendor and a real scope
            </li>
            <li>
              Foreman reads that clean, real budget and generates profitability reports, vendor
              scorecards, and bid comparisons in seconds from live data
            </li>
          </ol>

          <p>
            The reporting is only as good as the data underneath it. Because Cornerstone PM{" "}
            <Link
              href="/blog/real-vendor-pricing-no-estimator-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              removed filler pricing app-wide
            </Link>
            , every number Foreman summarizes traces back to a real source. A profitability
            report from filler data is still a guess dressed up in a table. A profitability report
            from real vendor bids and real takeoff quantities is a number you can act on.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about long reports and multi-step analysis?
          </h2>

          <p>
            One risk with AI reporting tools is that the AI loses context mid-task — it starts a
            profitability summary across 12 floorplans and forgets the framing scope three plans
            in. Foreman&apos;s{" "}
            <Link
              href="/blog/construction-ai-context-memory-long-sessions"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              built-in memory compaction
            </Link>{" "}
            handles long sessions by intelligently summarizing older context as it goes. Combined
            with the{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              per-user memory
            </Link>{" "}
            that carries your name, role, and preferences across every conversation, Foreman stays
            sharp through analysis runs that would exhaust a standard AI tool.
          </p>

          <p>
            The context health meter (green / yellow / red) lets you see at a glance how much
            working memory the session has consumed, so you can start a fresh session before you
            hit a degradation point — not after.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman AI and the 396+ skill catalog
          </h2>

          <p>
            Profitability reports, vendor scorecards, and budget analysis are part of a 396+ skill
            catalog that Foreman draws on across 20 construction categories. The same agent that
            generates a vendor scorecard can also edit design options, update vendor pricing,
            generate bid templates, attach product images, and run multi-step purchasing workflows.
          </p>

          <p>
            Every time Cornerstone PM ships a new Foreman skill, it&apos;s immediately available —
            in the app, through the{" "}
            <Link
              href="/blog/mcp-server-construction-software-claude-cursor"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              MCP server
            </Link>{" "}
            for Claude Desktop and Cursor users, and through the{" "}
            <Link
              href="/blog/api-operations-construction-software-ai-agents"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              REST API
            </Link>{" "}
            for Pro+ subscribers building their own integrations. The skill catalog grows; your
            access to it doesn&apos;t require any configuration change.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">
            Frequently asked questions about AI job costing
          </h2>

          <div className="not-prose">
            <FAQSection items={faqItems} />
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop building margin reports by hand.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI generates profitability reports, vendor scorecards, and budget summaries
              from your live build data — in seconds, not spreadsheet-hours. Available on Pro+.
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
