import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, Edit, FileText, Zap, Brain } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-ai-agent-takes-actions.png";
const heroImageAlt =
  "AI agent construction software — Foreman reads and writes data for home builders, not just a chatbot";

const blogSchema = buildBlogPostSchema({
  title: "It’s Not a Chatbot, It’s an Agent: AI That Actually Runs Your Build",
  slug: "foreman-ai-agent-takes-actions-not-chatbot",
  description:
    "Most construction AI just answers questions. Foreman reads and writes your data — editing options, updating pricing, and running purchasing workflows for you.",
  datePublished: "2026-06-29",
});

export const metadata: Metadata = {
  title:
    "It’s Not a Chatbot, It’s an Agent: AI That Actually Runs Your Build — Cornerstone PM™ Blog",
  description:
    "Most construction AI just answers questions. Foreman reads and writes your data — editing options, updating pricing, and running purchasing workflows for you.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-agent-takes-actions-not-chatbot",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 457,
          height: 416,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "What is the difference between a construction AI chatbot and an AI agent?",
    a: "A chatbot answers questions. An AI agent takes actions. Foreman AI can edit design options, update vendor pricing, generate bid templates, attach product images, and run multi-step purchasing workflows inside your Cornerstone PM account — not just tell you what to do next.",
  },
  {
    q: "What kinds of actions can Foreman AI take inside Cornerstone PM?",
    a: "Foreman uses 396+ skills across 20 construction categories to read and write your real data. It can edit design options, reprice floorplans, generate and send bid templates, create purchase orders, attach product images with permanent hosted URLs, draft SOW documents, score vendors, run profitability reports, and more.",
  },
  {
    q: "Do Buildertrend, JobTread, or CoConstruct have AI agents?",
    a: "Those platforms have AI features that primarily answer questions or summarize data. None of them ship an agent that reads and writes live construction records across a 396+ skill catalog. The distinction matters: a tool that tells you vendor pricing is stale is different from one that updates the pricing for you.",
  },
  {
    q: "Does Foreman AI learn my preferences over time?",
    a: "Yes. Foreman stores per-user memory across every conversation — your name, role, preferred vendors, communication style, and job-specific preferences. It also maintains company-wide memory for vendor scorecards and recurring scope patterns. You don’t re-introduce yourself; Foreman already knows you.",
  },
  {
    q: "What plan includes Foreman AI?",
    a: "Foreman AI is available on the Pro+ plan at $599/month. Pro+ includes the full 396+ skill catalog, per-user and company-wide memory, REST API access, and BYOA (Bring Your Own Agent). No add-on fees for Foreman features.",
  },
  {
    q: "Can Foreman AI handle long, multi-step workflows without losing context?",
    a: "Yes. Foreman uses built-in memory compaction to intelligently summarize older messages during long sessions, so it stays sharp through 200+ option cleanups, full catalog imports, and multi-step purchasing runs. The context health meter (green/yellow/red) lets you see how much working memory the session has consumed at a glance.",
  },
  {
    q: "How is Foreman AI different from using ChatGPT or Claude for construction questions?",
    a: "Generic AI tools answer from their training data and have no access to your Cornerstone PM account. Foreman is wired directly to your live data — it reads your real options, vendors, floorplans, and bids, and writes changes back to your account. It also carries a 24,500-word construction knowledge base and 39 estimating formulas built specifically for residential home builders.",
  },
];

const actions = [
  {
    icon: <Edit className="w-5 h-5 text-emerald-400" />,
    title: "Edit design options",
    desc: "Update option names, spec levels, prices, product images, and descriptions across multiple floorplans in a single instruction.",
  },
  {
    icon: <FileText className="w-5 h-5 text-cyan-400" />,
    title: "Generate bid templates and SOW documents",
    desc: "Foreman pulls your scope items and vendor assignments and produces a structured bid template or scope-of-work document — ready to send.",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-violet-400" />,
    title: "Run purchasing workflows",
    desc: "Reprice a floorplan after a vendor update, flag options missing vendor pricing, or walk through a full bid-to-PO flow — step by step, in the app.",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "Attach product images from supplier sites",
    desc: "Give Foreman a product name or model number. It searches the supplier page, saves the image to permanent hosted storage, and attaches it to the design option. No broken links.",
  },
  {
    icon: <Brain className="w-5 h-5 text-pink-400" />,
    title: "Score vendors and surface profitability data",
    desc: "Foreman compares vendor bids, generates vendor scorecards, and runs profitability and budget reports from live build data — in seconds, not spreadsheet-hours.",
  },
];

export default function ForemanAgentActionsPage() {
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
          width={457}
          height={416}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            It’s Not a Chatbot, It’s an Agent: AI That Actually Runs Your Build
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 29, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Most construction AI just answers questions. Foreman reads and writes your live
            Cornerstone PM data—editing design options, updating vendor pricing, and running
            multi-step purchasing workflows on your behalf.{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              That’s the difference between a chatbot and an agent.
            </Link>
          </p>

          <p>
            The construction software market has a habit of calling anything with a text box an
            “AI assistant.” A feature that surfaces your next-due task is not an AI agent.
            A search box that auto-completes a vendor name is not an AI agent. An AI agent takes
            real actions inside your system—reads your actual data, makes changes, and
            confirms what it did. Foreman AI does that across 396+ skills built specifically for
            home building workflows.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does “reads and writes your data” actually mean?
          </h2>
          <p>
            The most important distinction in construction AI right now is between tools that
            retrieve information and tools that can change it. Retrieval is useful—being able
            to ask “which vendor won the framing bid on the Magnolia plan?” and get a
            real answer is better than digging through a report. But the bigger operational
            opportunity is acting on that answer: updating the scope, sending the PO, flagging
            the discrepancy.
          </p>
          <p>
            Foreman AI is wired directly to your Cornerstone PM account. When you ask it to update
            a design option price, it updates the design option price. When you ask it to generate
            a bid template for a new community, it pulls your current scope items and vendor
            assignments and produces the template. When it runs a profitability report, it reads
            your live build data—not a stale export from last Thursday.
          </p>
          <p>
            This read-and-write access is what the{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI page
            </Link>{" "}
            calls agent-first design. Most software companies retrofitted AI onto existing
            products after the fact. Cornerstone was built to be AI-agent-native from the start.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What can Foreman actually do?
          </h2>
          <p>
            Foreman AI has 396+ skills across 20 construction categories. Here are the action
            categories builders use most:
          </p>

          <div className="not-prose space-y-4 my-8">
            {actions.map((action) => (
              <div
                key={action.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 flex gap-4"
              >
                <div className="mt-0.5 flex-shrink-0">{action.icon}</div>
                <div>
                  <h3 className="font-bold text-white mb-1 text-base">{action.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{action.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Every one of these is a real write operation into your Cornerstone PM account
            —not a suggested next step, not a copy-pasteable template you fill in yourself.
            Foreman completes the action and reports back what it changed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Foreman compare to AI features in Buildertrend, JobTread, and CoConstruct?
          </h2>
          <p>
            Buildertrend, JobTread, and CoConstruct all have AI features. They share a common
            pattern: they summarize, suggest, or surface. They answer questions about your data.
            They don’t edit the data. The distinction matters operationally: a tool that tells
            you your bid is missing a line item is helpful; a tool that adds the line item for
            you is a different category of capability.
          </p>
          <p>
            Beyond the read-vs-write gap, there’s the domain depth gap. Foreman runs on a
            24,500-word construction knowledge base, 39 estimating formulas, and a skill catalog
            built specifically for residential production building—floorplan-level option
            pricing, Structural vs. Designer scope separation, community-assigned vendor wins, and
            more. Generic AI tools that sit on top of a construction database don’t carry
            that domain layer. They answer from the data; Foreman answers from the data plus
            construction expertise.
          </p>
          <p>
            None of the major competitors have a skill catalog remotely close to 396+. Most have
            a handful of pre-built queries or a single summarization endpoint.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman learns your business, not just your commands
          </h2>
          <p>
            The agent capabilities compound over time because Foreman maintains two memory layers.
            Per-user memory stores your name, role, preferred vendors, and communication style.
            Company-wide memory builds vendor scorecards, captures recurring scope patterns, and
            holds builder-level defaults. Together they mean Foreman isn’t starting from zero
            every time you open a session.
          </p>
          <p>
            Practical examples: a superintendent who always orders plumbing fixtures from Ferguson
            doesn’t need to specify Ferguson every time. A purchasing manager who runs the
            Magnolia plan 40 times a year doesn’t re-explain what the Magnolia plan is. An
            owner who wants concise responses gets concise responses without coaching it every
            session.
          </p>
          <p>
            For more on how Foreman’s memory system works, see the{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI Memory deep-dive
            </Link>
            . For how it keeps working through marathon sessions, see{" "}
            <Link
              href="/blog/construction-ai-context-memory-long-sessions"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              why most construction AI forgets—and how Foreman doesn’t
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The 396+ skill catalog: what’s actually in it?
          </h2>
          <p>
            The 396+ skill count isn’t a marketing number padded with trivial queries. The
            skills span 20 categories and map to real purchasing, design, scheduling, and
            reporting workflows:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-3 my-6 text-sm">
            {[
              "Design option creation and editing",
              "Vendor pricing and bid management",
              "Scope item creation from takeoff data",
              "Purchase order generation",
              "Profitability and budget reports",
              "Vendor scorecards and bid comparison",
              "SOW document generation",
              "MLS listing copy from floorplan data",
              "Product image search and hosting",
              "Floor plan and image analysis (AI vision)",
              "Community and lot management",
              "Per-user and company-wide memory",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-start gap-2 rounded-lg border border-slate-800 bg-slate-900/30 px-4 py-2.5"
              >
                <span className="text-emerald-400 mt-0.5">&#10003;</span>
                <span className="text-slate-300">{skill}</span>
              </div>
            ))}
          </div>

          <p>
            Each skill connects to your live data. When Foreman generates a SOW document, it
            pulls your actual scope items. When it runs a profitability report, it reads your
            real bid numbers. The skill catalog isn’t running on examples—it’s running
            on your build.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman is a Pro+ capability—here’s why that matters for ROI
          </h2>
          <p>
            Foreman AI is available on the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Pro+ plan at $599/month
            </Link>
            . Pro+ is the plan that also includes the REST API and BYOA (Bring Your Own Agent
            access), making it the right tier for builders who want the full platform and the
            full automation layer.
          </p>
          <p>
            The ROI case is straightforward: if Foreman saves a purchasing manager two hours a
            week on option updates, bid template generation, and vendor lookups, it pays for
            itself in a month. If it catches a mispriced scope item before it goes to the
            homebuyer, it pays for itself in a day.
          </p>
          <p>
            For builders who want to connect external AI tools like Claude Desktop, Cursor, or
            Windsurf directly to their Cornerstone PM data, the{" "}
            <Link
              href="/blog/mcp-server-construction-software-claude-cursor"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              built-in MCP server
            </Link>{" "}
            exposes the full Foreman skill catalog to those tools as well.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-6 my-8">
            <p className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-emerald-500/40 pl-4">
              “The difference between a chatbot and an agent is the difference between advice
              and work. Foreman edits the design option, updates the vendor price, and generates
              the bid template. You review and approve. That’s a fundamentally different
              relationship with software than asking a question and manually doing what it
              tells you.”
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready for AI that actually does the work?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI reads and writes your live construction data across 396+ skills. Available
              on Pro+ as part of Cornerstone PM.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <FAQSection
          title="Frequently Asked Questions: AI Agent vs. Chatbot for Construction"
          items={faqItems}
        />
      </article>

      <Footer />
    </main>
  );
}
