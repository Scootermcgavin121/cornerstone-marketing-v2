import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, Key, Shield, Zap, GitBranch } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/mcp-server-construction.png";
const heroImageAlt =
  "MCP server for construction software connecting Claude Desktop, Cursor, and Windsurf to Cornerstone PM Foreman AI skills";

const blogSchema = buildBlogPostSchema({
  title:
    "MCP Server for Construction Software: Connect Claude, Cursor, and Windsurf to Your Builder Data",
  slug: "mcp-server-construction-software-claude-cursor",
  description:
    "Cornerstone PM ships a built-in MCP server so AI tools like Claude Desktop, Cursor, and Windsurf connect directly to your construction data and 396+ Foreman skills.",
  datePublished: "2026-06-15",
});

export const metadata: Metadata = {
  title:
    "MCP Server for Construction Software: Connect Claude, Cursor, and Windsurf to Your Builder Data — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM ships a built-in MCP server so AI tools like Claude Desktop, Cursor, and Windsurf connect directly to your construction data and 396+ Foreman skills.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/mcp-server-construction-software-claude-cursor",
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
    q: "What is an MCP server and why does it matter for home builders?",
    a: "MCP stands for Model Context Protocol — an open standard that lets external AI tools (like Claude Desktop, Cursor, and Windsurf) securely call actions inside a connected application. For home builders, it means your favorite AI assistant can directly query your floorplans, vendors, budgets, and options — and take action — without copy-pasting data back and forth. Cornerstone PM is the first construction platform to ship a built-in MCP server, giving builders a no-code on-ramp to AI-native workflows.",
  },
  {
    q: "Which AI tools can connect to Cornerstone PM via MCP?",
    a: "Any MCP-compatible AI client works. Today that includes Claude Desktop (Anthropic), Cursor, and Windsurf. The Cornerstone PM app settings page generates a ready-to-paste JSON config block for each of these tools — you copy it in, authenticate with your cst_-prefixed API key, and the tools immediately see all of Foreman's 396+ skills as callable functions.",
  },
  {
    q: "How does role-based tool filtering work in the MCP server?",
    a: "Cornerstone PM's MCP server uses a denylist model tied to the account role of the API key owner. Admin and Owner roles get the full tool catalog — all 396+ Foreman skills. Project Manager and Member roles get most tools with a few sensitive operations excluded. Vendor roles get a limited set relevant to their work (bid submission, document access). This means you can generate a vendor-facing API key without worrying about accidental data exposure.",
  },
  {
    q: "What is a denylist permissions model and why does it matter?",
    a: "Most permissioned systems use an allowlist: every new capability is off by default until someone explicitly grants it. A denylist is the opposite — every new capability is on by default unless it's explicitly blocked. For Cornerstone PM, this means every new Foreman skill we ship is instantly available to your MCP-connected AI tools without any configuration change on your end. You never need to update your tool config to get new capabilities.",
  },
  {
    q: "Is the MCP server the same as the REST API?",
    a: "They are complementary, not the same. The REST API gives developers full programmatic access to 150+ endpoints and 84 dedicated routes for building integrations, automations, and custom applications. The MCP server is the no-code on-ramp: it exposes all of Foreman's 396+ skills as callable JSON-RPC functions, optimized for AI clients that reason about which tool to call rather than developers who write explicit API calls. REST API + BYOA is the full-control path. MCP is the conversational path.",
  },
  {
    q: "What plan is the MCP server available on?",
    a: "The MCP server is available on Pro+ ($599/month), which also includes the REST API and BYOA (Bring Your Own Agent). Pro+ is designed for builders who want to connect external tools and AI agents to their construction data. Starter, Builder, and Pro plans do not include MCP server access.",
  },
  {
    q: "How do I set up the MCP server in Claude Desktop?",
    a: "Navigate to Settings → MCP in your Cornerstone PM account. Generate an API key — you'll get a cst_-prefixed token. The page shows a ready-to-paste JSON config block for Claude Desktop, Cursor, and Windsurf. Copy the Claude Desktop block, paste it into Claude Desktop's model_context_protocol settings, and restart Claude. Your builder data and all 396+ Foreman skills appear as available tools immediately. The whole process takes under two minutes.",
  },
];

const clients = [
  {
    name: "Claude Desktop",
    maker: "Anthropic",
    icon: "🧠",
    tagline: "Chat with your construction data",
    description:
      "Ask Claude questions about your floorplans, options, and vendor bids. Claude calls Foreman skills directly — no copy-paste needed.",
  },
  {
    name: "Cursor",
    maker: "Cursor IDE",
    icon: "⚡",
    tagline: "Code against live builder data",
    description:
      "Build integrations and automations in Cursor with Foreman's skills as first-class functions your AI pair programmer can call.",
  },
  {
    name: "Windsurf",
    maker: "Codeium",
    icon: "🌊",
    tagline: "Agent-native development",
    description:
      "Windsurf's agentic workflows connect directly to Cornerstone PM — letting multi-step AI flows drive real construction actions.",
  },
];

const permissionTiers = [
  {
    role: "Admin / Owner",
    tools: "All 396+ skills",
    color: "text-emerald-400",
    border: "border-emerald-800/40",
    bg: "bg-emerald-950/20",
  },
  {
    role: "Project Manager / Member",
    tools: "Most skills (sensitive ops excluded)",
    color: "text-cyan-400",
    border: "border-cyan-800/40",
    bg: "bg-cyan-950/20",
  },
  {
    role: "Vendor",
    tools: "Limited (bids, documents)",
    color: "text-amber-400",
    border: "border-amber-800/40",
    bg: "bg-amber-950/20",
  },
];

const differentiators = [
  {
    icon: <Zap className="w-4 h-4 text-emerald-400" />,
    title: "All 396+ Foreman skills, instantly",
    body: "Every Foreman skill is exposed as a callable JSON-RPC function. Your connected AI tool can take material takeoffs, update vendor pricing, generate listing sheets, and run budget reports — without leaving its interface.",
  },
  {
    icon: <GitBranch className="w-4 h-4 text-cyan-400" />,
    title: "Denylist model — new skills ship automatically",
    body: "Every new Foreman skill we ship is live in your MCP server the moment it deploys — zero config changes on your end. Compare to platforms that require allowlist approval for every new capability.",
  },
  {
    icon: <Key className="w-4 h-4 text-amber-400" />,
    title: "Role-scoped cst_ tokens",
    body: "API keys are role-bound. An Owner key unlocks everything. A Vendor key is safely restricted to bid and document access. Share keys without worrying about surface area exposure.",
  },
  {
    icon: <Shield className="w-4 h-4 text-violet-400" />,
    title: "No other construction platform has this",
    body: "Most construction software has no AI integration at all. Cornerstone PM ships MCP as a first-class feature — the same architectural investment that powers BYOA and the REST API.",
  },
];

export default function McpServerConstructionPage() {
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
            MCP Server for Construction Software: Connect Claude, Cursor, and Windsurf to Your
            Builder Data
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 15, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM ships a built-in Model Context Protocol (MCP) server — a capability
            essentially no other construction platform has. Builders generate an API key in app
            settings, paste a ready-made config block into Claude Desktop, Cursor, or Windsurf,
            and those tools immediately connect to all 396+ Foreman skills over a secure
            JSON-RPC endpoint.
          </p>

          <p>
            If you&apos;re already using AI tools in your workflow,{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            is already the most capable construction-specific AI agent on the market. The MCP
            server is what makes Foreman&apos;s skills available to the AI tools you&apos;re already using
            outside Cornerstone PM — without writing a single line of integration code.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is MCP and why does it matter for home builders?
          </h2>
          <p>
            Model Context Protocol is an open standard developed by Anthropic that lets AI clients
            securely call actions inside connected applications. Think of it as a universal
            translation layer: your AI assistant says &ldquo;I need to look up vendor pricing for
            framing on the Magnolia plan&rdquo; and MCP routes that request to exactly the right Foreman
            skill, executes it against your real construction data, and returns the result — all
            within the conversation.
          </p>
          <p>
            For home builders, the practical upshot is this: you can ask Claude Desktop a question
            about your budget, get a real answer from live data, and have Claude draft a vendor
            email with those numbers — without leaving Claude, without copy-pasting, and without
            re-explaining your company structure every session.
          </p>
          <p>
            Most construction software has no AI integration at all. Cornerstone PM&apos;s MCP server is
            a first-class platform feature built on the same architectural foundation as the{" "}
            <Link
              href="/blog/api-operations-construction-software-ai-agents"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              238 API operations
            </Link>{" "}
            and BYOA system.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Which AI tools connect via MCP?
          </h2>
          <p>
            The Cornerstone PM app settings page generates a ready-to-paste JSON config block for
            each of the three major MCP clients. Pick your tool, copy the block, paste it in,
            authenticate with your{" "}
            <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">
              cst_
            </code>
            -prefixed API key, and restart.
          </p>

          <div className="not-prose grid gap-4 my-6 sm:grid-cols-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="text-3xl mb-3">{client.icon}</div>
                <p className="font-bold text-white mb-1">{client.name}</p>
                <p className="text-xs text-slate-500 mb-2">{client.maker}</p>
                <p className="text-xs font-medium text-cyan-400 mb-2">{client.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How setup works: under two minutes
          </h2>
          <p>
            Navigate to{" "}
            <strong className="text-white">Settings → MCP</strong> in your Cornerstone PM account.
            Generate an API key — you&apos;ll receive a{" "}
            <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">
              cst_
            </code>
            -prefixed Bearer token. The page displays a separate ready-to-paste config block for
            Claude Desktop, Cursor, and Windsurf.
          </p>
          <p>
            Copy the config block for your tool of choice. Paste it into that tool&apos;s MCP settings
            (Claude Desktop: Settings → Integrations → Model Context Protocol; Cursor and
            Windsurf have equivalent panels). Restart the tool. Foreman&apos;s full skill catalog
            appears as a named tool set — your AI assistant can now call any of the 396+ skills
            on your live construction data.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 p-5 my-6 font-mono text-sm overflow-x-auto">
            <p className="text-slate-500 text-xs mb-3">
              // Example: Claude Desktop MCP config (from Cornerstone PM Settings → MCP)
            </p>
            <pre className="text-slate-300 whitespace-pre-wrap">
{`{
  "mcpServers": {
    "cornerstone-pm": {
      "url": "https://app.cornerstonepm.ai/api/mcp",
      "transport": "http",
      "headers": {
        "Authorization": "Bearer cst_your_key_here"
      }
    }
  }
}`}
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Role-based tool filtering: share keys safely
          </h2>
          <p>
            Not every key should unlock every tool. Cornerstone PM&apos;s MCP server uses a denylist
            model tied to the role of the API key owner. Generate an Admin key and your Claude
            Desktop session gets everything. Generate a Vendor key for a subcontractor and they
            get a safely limited toolset — bid submission, document access, and nothing more.
          </p>

          <div className="not-prose space-y-3 my-6">
            {permissionTiers.map((tier) => (
              <div
                key={tier.role}
                className={`flex items-center justify-between rounded-xl border ${tier.border} ${tier.bg} px-5 py-3.5`}
              >
                <span className="text-slate-300 text-sm font-medium">{tier.role}</span>
                <span className={`text-sm font-semibold shrink-0 ml-4 ${tier.color}`}>
                  {tier.tools}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The denylist advantage: new skills ship automatically
          </h2>
          <p>
            Most permissioned systems use an allowlist: every new capability is off by default
            until someone explicitly grants access. Cornerstone PM uses a denylist: every new
            capability is on by default unless it&apos;s explicitly blocked.
          </p>
          <p>
            In practice, this means every new Foreman skill we ship — and we ship them
            continuously — appears in your MCP server the moment it deploys. Your Claude Desktop
            session picks up the new tool on next use. No config change, no re-authentication,
            no waiting for an admin to grant the new permission.
          </p>
          <p>
            This is the same architectural philosophy behind BYOA (Bring Your Own Agent): ship a
            Foreman skill, and it&apos;s instantly callable by every connected agent. The skill catalog
            is the API surface. The denylist model is what makes that compound automatically.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What makes Cornerstone PM&apos;s MCP server different
          </h2>

          <div className="not-prose space-y-4 my-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            MCP vs. REST API vs. BYOA: which path is right for you?
          </h2>
          <p>
            Cornerstone PM ships three ways to connect external systems to your construction data,
            and they complement each other:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              <strong className="text-white">MCP server</strong> — The no-code on-ramp. Point
              Claude Desktop, Cursor, or Windsurf at your data and use natural language. No
              development required. Best for builders who want to leverage existing AI tools
              without writing integrations.
            </li>
            <li>
              <strong className="text-white">REST API + BYOA</strong> — The full-control path.{" "}
              <Link
                href="/blog/api-operations-construction-software-ai-agents"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                238 total API operations
              </Link>{" "}
              give developers programmatic access to build custom integrations, automations, and
              bring their own AI agents. Best for technical teams building production workflows.
            </li>
            <li>
              <strong className="text-white">Foreman AI in-app</strong> — The zero-setup path.
              Already available inside Cornerstone PM, Foreman&apos;s 396+ skills are accessible in a
              purpose-built construction AI interface with per-user memory and company-wide context.
              No API key required.
            </li>
          </ul>
          <p>
            All three run on the same Foreman skill catalog. The difference is how you reach it:
            from within the app, via the REST API, or through your external AI tool via MCP.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What can a connected AI actually do?
          </h2>
          <p>
            Once Claude Desktop (or Cursor, or Windsurf) has an active MCP connection to
            Cornerstone PM, a builder running Pro+ can do things like:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>
              Ask Claude to pull the latest bid comparison for the Magnolia plan framing scope and
              draft a vendor award email — all in one message.
            </li>
            <li>
              Ask Cursor to write a custom report that queries floorplan square footage data and
              outputs a formatted budget summary — calling live Foreman skills as functions in the
              code it generates.
            </li>
            <li>
              Ask Windsurf to run a multi-step agentic workflow that checks open purchase orders,
              identifies overruns, and formats an alert for the superintendent — without leaving
              the IDE.
            </li>
          </ul>
          <p>
            This is the &ldquo;AI-agent-first&rdquo; design principle made concrete. Cornerstone PM doesn&apos;t
            just run AI inside its own UI — it exposes that AI capability to every agent and
            tool in your ecosystem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Available on Pro+
          </h2>
          <p>
            The MCP server is available on the Pro+ plan ($599/month), alongside the REST API
            and BYOA. It&apos;s part of the same tier designed for builders who want to build on top
            of Cornerstone PM — connecting external AI tools, custom automations, and third-party
            agents to their construction data.
          </p>
          <p>
            If you&apos;re already on Pro+ and want to try MCP today, navigate to{" "}
            <strong className="text-white">Settings → MCP</strong> in your Cornerstone PM account.
            If you&apos;re evaluating whether Pro+ is the right tier, the{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full Foreman AI overview
            </Link>{" "}
            covers what&apos;s included across all plans.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Connect your AI tools to your builder data
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM Pro+ includes the MCP server, REST API, and BYOA — the full
              agent-ready stack for production home builders. Request early access to see it live.
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
        title="MCP Server for Construction Software: Common Questions"
        subtitle="What builders ask about connecting Claude, Cursor, and Windsurf to Cornerstone PM."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
