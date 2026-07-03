import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Brain, MessageSquare, Star } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-memory.png";
const heroImageAlt =
  "Foreman AI construction assistant remembering builder preferences and vendor history across conversations";

const blogSchema = buildBlogPostSchema({
  title: "Foreman AI Memory: The First Construction AI That Doesn\u2019t Forget",
  slug: "foreman-ai-memory-construction-software",
  description:
    "Foreman AI remembers your role, favorite vendors, and preferences across every conversation. Per-user + company-wide memory in construction AI \u2014 only on Cornerstone PM.",
  datePublished: "2026-05-27",
});

export const metadata: Metadata = {
  title:
    "Foreman AI Memory: The First Construction AI That Doesn\u2019t Forget \u2014 Cornerstone PM\u2122 Blog",
  description:
    "Foreman AI remembers your role, favorite vendors, and preferences across every conversation. Per-user + company-wide memory in construction AI \u2014 only on Cornerstone PM.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-memory-construction-software",
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

const faqItems: FAQItem[] = [
  {
    q: "Does Foreman AI remember my preferences between conversations?",
    a: "Yes. Foreman AI stores per-user memory that persists across every conversation: your name, role, preferred vendors, communication style, and job-specific preferences. You don\u2019t need to re-introduce yourself or explain your workflow every time you open a new chat.",
  },
  {
    q: "What is the difference between per-user memory and company-wide memory in Foreman AI?",
    a: "Per-user memory is personal \u2014 it tracks your individual role, vendor preferences, and communication style. Company-wide memory captures shared business context: vendor scorecards built over time, recurring scope patterns, and builder-level defaults. Both layers are active simultaneously so Foreman answers like a colleague who knows you AND knows the company.",
  },
  {
    q: "What is the context health meter in Foreman AI?",
    a: "The context health meter is a green/yellow/red indicator that tells you how much working memory the current conversation has consumed. When it turns yellow or red, Foreman\u2019s built-in memory compaction automatically summarizes older parts of the conversation so the session keeps running without losing critical context. You\u2019ll never hit a wall mid-workflow.",
  },
  {
    q: "Can Foreman AI handle very long sessions without forgetting earlier context?",
    a: "Yes. Foreman AI uses intelligent memory compaction to summarize older messages while preserving the information that matters. This lets it run through marathon sessions \u2014 200+ option cleanups, full catalog imports, multi-step purchasing workflows \u2014 without crashing or forgetting what happened at the start of the session. No other construction AI does this.",
  },
  {
    q: "Does every construction AI tool offer memory features?",
    a: "No. Most generic AI tools and construction chatbots treat every conversation as a blank slate. Foreman AI is purpose-built with two persistent memory layers and automatic context compaction \u2014 a level of continuity that generic AI tools and competitor construction software do not offer.",
  },
  {
    q: "What plan includes Foreman AI?",
    a: "Foreman AI is available on the Pro+ plan at $599/month, which also includes the REST API and BYOA (Bring Your Own Agent) access. No add-ons or per-seat charges for Foreman features.",
  },
  {
    q: "How does Foreman AI memory compare to ChatGPT memory?",
    a: "ChatGPT\u2019s memory feature stores brief user facts globally, but it has no domain-specific knowledge about construction and no ability to take actions in your software. Foreman AI\u2019s memory is backed by a 24,500-word construction knowledge base, 396+ purpose-built skills for home building workflows, and direct database access \u2014 so remembered preferences translate into real purchasing decisions, schedule adjustments, and vendor assignments.",
  },
];

export default function ForemanAIMemoryPage() {
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
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Foreman AI Memory: The First Construction AI That Doesn’t Forget
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 27, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Foreman AI remembers who you are, which vendors you prefer, and how you like to work
            — and it carries that knowledge into every conversation, every time. It’s
            the only construction AI built with persistent per-user and company-wide memory.
          </p>

          <p>
            Every other AI tool you’ve tried — whether it’s a generic chatbot
            bolted onto construction software or a general-purpose assistant you’ve tried to
            adapt — starts each session with a blank slate. You re-explain your role. You
            remind it which vendor you prefer for plumbing. You specify again that you want short
            answers. Foreman AI’s memory architecture eliminates all of that. To see the
            full picture of what Foreman can do,{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              visit the Foreman AI overview
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does AI memory matter for home builders?
          </h2>
          <p>
            Construction is a relationship business. The superintendent who’s been working
            with Ferguson for fifteen years doesn’t want to specify “prefer Ferguson
            for plumbing” in every prompt. The sales agent who quotes in finished square
            footage doesn’t want to re-explain their vocabulary every morning. The owner
            who hates lengthy reports doesn’t want to ask for brevity each time.
          </p>
          <p>
            Generic AI tools have no way to hold that context. They treat each conversation as a
            completely isolated event. The result: every session feels like meeting the AI for the
            first time. That friction isn’t just annoying — it’s the reason most
            builders try an AI tool twice and give up. The cognitive overhead of re-establishing
            context cancels out the time savings.
          </p>
          <p>
            Foreman AI was designed to solve this at the architecture level, not as an
            afterthought feature.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Two memory layers: personal and company-wide
          </h2>

          <p>
            Foreman AI operates with two distinct persistent memory layers working simultaneously:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Per-User Memory</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">&#8250;</span>
                  Your name, role, and team
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">&#8250;</span>
                  Preferred vendors per trade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">&#8250;</span>
                  Communication style preferences (brief vs. detailed)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">&#8250;</span>
                  Vocabulary and units you work in
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">&#8250;</span>
                  Saved workflow shortcuts and recurring tasks
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Company-Wide Memory</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#8250;</span>
                  Vendor scorecards built over time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#8250;</span>
                  Community-level vendor assignments and history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#8250;</span>
                  Recurring scope patterns and material preferences
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#8250;</span>
                  Builder-level defaults across plans and communities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">&#8250;</span>
                  Historical bid data and pricing trends
                </li>
              </ul>
            </div>
          </div>

          <p>
            The combination means Foreman answers questions with the full context of your
            role AND your company. When a superintendent asks Foreman to draft a plumbing
            purchase order, it already knows which vendor they prefer, which community is
            active, and what the awarded pricing was the last time this scope ran. No setup
            prompt required.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Three scenarios where memory changes everything
          </h2>

          <div className="space-y-6 not-prose">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    The superintendent who always orders from Ferguson
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Without memory: every time Mike opens Foreman and asks for a plumbing PO, he
                    types “use Ferguson as the vendor.” With memory: Foreman already
                    knows Mike prefers Ferguson for all plumbing scopes. The PO drafts with Ferguson
                    pre-selected. If Ferguson’s bid wasn’t the awarded price, Foreman
                    flags it rather than silently overriding the awarded vendor.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    The sales agent who quotes in finished square footage
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Sarah works in finished square footage, not total square footage. Without memory:
                    she corrects Foreman’s outputs to the right unit every session. With
                    memory: Foreman learned during their first conversation that Sarah’s
                    vocabulary is “under air sqft.” Every report, every quote, every
                    comparison comes back in her units. No correction needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    The owner who hates lengthy responses
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The builder-owner wants direct answers: numbers, action items, nothing else.
                    Without memory: Foreman defaults to detailed explanations and the owner trims
                    the response manually every time. With memory: Foreman learned on day one that
                    this user wants one-line answers with a clear action. The next 200 conversations
                    stay concise automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is the context health meter?
          </h2>
          <p>
            Long working sessions are normal in construction — a 90-minute design center
            cleanup, a full catalog repricing run, a multi-step purchasing workflow that spans
            dozens of scope items. Generic AI tools quietly fail during long sessions: they hit
            their context limit, forget the first half of the conversation, and start giving
            answers that contradict what you established earlier.
          </p>
          <p>
            Foreman AI ships a built-in{" "}
            <strong className="text-white">context health meter</strong> — a green/yellow/red
            indicator visible in the UI that tells you how much working memory the current session
            has consumed. When the meter turns yellow or red, Foreman’s{" "}
            <strong className="text-white">automatic memory compaction</strong> kicks in: it
            intelligently summarizes older parts of the conversation, compresses them into a compact
            representation, and continues the session without losing any critical context.
          </p>
          <p>
            The result: Foreman can run through marathon sessions — 200+ option cleanups,
            full catalog imports, multi-step workflows spanning hours — without hitting a
            wall or forgetting what happened at the start. No other construction AI does this.
          </p>
          <p>
            For a deeper look at the technical architecture behind Foreman’s agentic loop
            and long-session handling, read{" "}
            <Link
              href="/blog/foreman-ai-75-action-loop"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              how Foreman chains 75 actions in a single prompt
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Foreman memory compares to ChatGPT and competitor AI tools
          </h2>
          <p>
            ChatGPT has a memory feature. It stores a few bullet points about you globally and
            surfaces them at the start of new conversations. It’s better than nothing, but
            it doesn’t know what framing labor costs in your market, which vendor won your
            last concrete bid, or how your design center is organized. It’s a generic
            notebook, not a construction brain.
          </p>
          <p>
            Foreman AI’s memory is backed by a{" "}
            <strong className="text-white">24,500-word construction knowledge base</strong>,{" "}
            <strong className="text-white">396+ purpose-built skills</strong> for home building
            workflows, and{" "}
            <strong className="text-white">direct database access</strong> to your actual
            Cornerstone PM data. When Foreman remembers that you prefer Ferguson, it can pull
            Ferguson’s current bids from your database and draft a real purchase order
            against real awarded pricing. That’s not note-taking — that’s an
            agent that knows your business.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-800 not-prose my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Capability</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">ChatGPT Memory</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">Competitor Construction AI</th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">Foreman AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {[
                  ["Remembers user preferences across sessions", "✓", "✗", "✓"],
                  ["Company-wide vendor & scope memory", "✗", "✗", "✓"],
                  ["Construction-specific knowledge base", "✗", "Partial", "✓ (24,500 words)"],
                  ["Direct access to your live data", "✗", "Partial", "✓"],
                  ["Takes real actions (POs, bids, schedules)", "✗", "✗", "✓"],
                  ["Context health meter + compaction", "✗", "✗", "✓"],
                  ["396+ construction skills", "✗", "✗", "✓"],
                ].map(([feature, chatgpt, competitor, foreman]) => (
                  <tr key={feature} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-5 py-3.5">{feature}</td>
                    <td className="px-5 py-3.5 text-center">{chatgpt}</td>
                    <td className="px-5 py-3.5 text-center">{competitor}</td>
                    <td className="px-5 py-3.5 text-center text-cyan-400 font-medium">{foreman}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What else can Foreman AI do?
          </h2>
          <p>
            Memory is the foundation, but it’s one layer of a much deeper system. Foreman
            AI ships with 396+ skills covering the full spectrum of home builder operations:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Purchasing:</strong> Draft POs, compare bids
              side-by-side, flag pricing anomalies, and send vendor messages directly
            </li>
            <li>
              <strong className="text-white">Design Center:</strong> Rebuild option categories,
              update Designer Package contents, apply bulk pricing changes across floorplans
            </li>
            <li>
              <strong className="text-white">Scheduling:</strong> Analyze schedule gaps, identify
              cascade risks, and generate subcontractor coordination summaries
            </li>
            <li>
              <strong className="text-white">Reporting:</strong> Generate profitability reports,
              vendor scorecards, and budget variance summaries on demand
            </li>
            <li>
              <strong className="text-white">Image analysis:</strong> Paste or drag in product
              photos, floor plan screenshots, or jobsite images and Foreman analyzes them in context
            </li>
          </ul>
          <p>
            Foreman reads AND writes data — it doesn’t just answer questions, it takes
            real actions in your platform. Combined with memory that knows your preferences and
            your business, it operates more like a knowledgeable colleague than a search engine.
            Explore everything Foreman can do at{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              the Foreman AI page
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Which plan includes Foreman AI?
          </h2>
          <p>
            Foreman AI is included on the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Pro+ plan at $599/month
            </Link>
            , which also includes the REST API and BYOA (Bring Your Own Agent) access —
            every Foreman skill is exposed as an API endpoint, so your external automation tools
            get the same memory-aware intelligence. There are no add-ons or per-seat charges for
            Foreman features.
          </p>
          <p>
            For builders running 20–200 homes per year, the math is straightforward: if
            Foreman saves one hour of purchasing work per day across a three-person team, the
            tool pays for itself before the end of the first week.
          </p>

          <p>
            If you’re evaluating construction AI tools and want to understand the full
            production home builder platform,{" "}
            <Link
              href="/ai-construction-management"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              see how AI fits into Cornerstone PM’s full construction management stack
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Meet the AI that actually knows your business
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI remembers your vendors, your preferences, and your workflow —
              and it has 396+ skills to put that knowledge to work. The first construction AI
              that doesn’t start from scratch every time.
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
        title="Foreman AI Memory: Common Questions"
        subtitle="How Cornerstone PM&apos;s Foreman AI remembers your preferences, vendors, and workflows across every session."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
