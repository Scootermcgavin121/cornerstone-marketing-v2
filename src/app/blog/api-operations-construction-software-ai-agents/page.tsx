import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import {
  API_OPERATION_COUNT,
  API_ENDPOINT_COUNT,
  API_DEDICATED_ROUTES,
  API_SCHEMA_FORMATS,
  FOREMAN_SKILL_COUNT,
  WEBHOOK_EVENT_COUNT,
} from "@/lib/pricing";

const heroImage = "/blog/api-operations-238.png";
const heroImageAlt =
  "Cornerstone PM API hub diagram showing 238 total API operations radiating out to external AI agents for construction automation";

const blogSchema = buildBlogPostSchema({
  title:
    "238 API Operations: Why Cornerstone PM Is the Most Agent-Ready Construction Platform",
  slug: "api-operations-construction-software-ai-agents",
  description:
    "Cornerstone PM exposes 238 total API operations to external AI agents \u2014 150+ REST endpoints, 84 dedicated routes, a generic execute surface for 396+ Foreman skills, and 37+ webhooks. Here is what that number actually means.",
  datePublished: "2026-06-05",
});

export const metadata: Metadata = {
  title:
    "238 API Operations: The Most Agent-Ready Construction Platform \u2014 Cornerstone PM Blog",
  description:
    "Cornerstone PM exposes 238 total API operations to external AI agents \u2014 150+ REST endpoints, 84 dedicated routes, a generic execute surface for 396+ Foreman skills, and 37+ webhooks. Here is what that number actually means for builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/api-operations-construction-software-ai-agents",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1960,
          height: 1308,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "How many API operations does Cornerstone PM expose to external agents?",
    a: `Cornerstone PM exposes ${API_OPERATION_COUNT} total API operations to external AI agents. That figure combines ${API_DEDICATED_ROUTES} dedicated RESTful routes, a generic execute surface that maps across all ${FOREMAN_SKILL_COUNT}+ Foreman AI skills, and ${WEBHOOK_EVENT_COUNT}+ named webhook events. It is the most complete "how much can my agent actually do" number \u2014 the route-level endpoint count is ${API_ENDPOINT_COUNT}+.`,
  },
  {
    q: "What is the difference between API operations and API endpoints?",
    a: `An endpoint is a route on the API surface \u2014 Cornerstone PM ships ${API_ENDPOINT_COUNT}+ of those across ${API_DEDICATED_ROUTES} dedicated RESTful routes plus a generic execute route. An operation is a discrete action an agent can invoke. Because the generic execute route fans out across the full Foreman skill catalog, the number of things an agent can actually do (${API_OPERATION_COUNT}) is higher than the raw route count. We publish the operation count because it answers the real question: what can my agent accomplish?`,
  },
  {
    q: "Which AI agents can connect to Cornerstone PM?",
    a: "Any agent or automation tool that can speak HTTP and read a tool schema. Cornerstone PM ships schemas in three formats \u2014 Anthropic tool format, OpenAI function calling, and OpenAPI 3.1 \u2014 so Claude, ChatGPT, n8n, Make, Zapier, Twilio, Bland, and Retell all connect against the same surface. The built-in MCP server also connects Claude Desktop, Cursor, and Windsurf in about 30 seconds with no code.",
  },
  {
    q: "Is the API available on every plan?",
    a: "No. The REST API, BYOA (Bring Your Own AI Agent) layer, webhooks, and MCP server are exclusive to the Pro+ plan ($599/mo). There is no add-on path on lower tiers \u2014 the route to the full API surface is upgrading to Pro+, which is $100/mo more than Pro and includes the entire 238-operation toolbox.",
  },
  {
    q: "How does this compare to webhooks-only construction software?",
    a: "JobTread, Buildertrend, and CoConstruct generally advertise that 'webhooks exist' \u2014 a handful of generic events with no published catalog. Cornerstone PM ships 37+ typed, signed webhook events for outbound automation AND a 238-operation API surface for inbound read/write control. Webhooks tell your stack what happened; the API lets your agent act on it. Together they form a full bidirectional automation layer.",
  },
  {
    q: "Does the operation count grow over time?",
    a: `Yes. The generic execute surface maps to the Foreman skill catalog, so every time Cornerstone ships a new Foreman skill, your BYOA agent inherits it automatically \u2014 no reconfiguration. The ${API_OPERATION_COUNT} figure is a snapshot; the surface grows with the platform.`,
  },
];

type Breakdown = {
  label: string;
  value: string;
  body: string;
  color: string;
};

const breakdown: Breakdown[] = [
  {
    label: "Dedicated RESTful routes",
    value: `${API_DEDICATED_ROUTES}`,
    body:
      "Hand-built endpoints for the core nouns of a home builder: homes, tasks, vendors, bids, purchase orders, payments, options, parts catalog, design center, and more.",
    color: "emerald",
  },
  {
    label: "Generic execute surface",
    value: `${FOREMAN_SKILL_COUNT}+`,
    body:
      "A single execute route that runs any Foreman skill by name. Every skill Foreman can run internally, your agent can run externally \u2014 and the list grows automatically.",
    color: "cyan",
  },
  {
    label: "Named webhook events",
    value: `${WEBHOOK_EVENT_COUNT}+`,
    body:
      "Typed, HMAC-signed outbound events with delivery logs and retry. The push half of the automation layer \u2014 your stack reacts the moment something happens in the field.",
    color: "violet",
  },
  {
    label: "Schema formats",
    value: `${API_SCHEMA_FORMATS}`,
    body:
      "Anthropic tool format, OpenAI function calling, and OpenAPI 3.1. Point Claude, ChatGPT, or any OpenAPI client at the same surface without translation.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

export default function ApiOperationsPage() {
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
          width={1960}
          height={1308}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            238 API Operations: The Most Agent-Ready Construction Platform
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 5, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM now exposes <strong className="text-white">{API_OPERATION_COUNT} total
            API operations</strong> to external AI agents. Not 238 marketing bullet points \u2014 238
            discrete things an agent like Claude, ChatGPT, or an n8n workflow can actually read,
            write, or trigger inside your construction platform. That is the number that matters
            when you are deciding whether your software can be automated, or just claims it can.
          </p>

          <p>
            For the full picture of how Cornerstone PM compares to other tools, start with the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software guide
            </Link>
            . This post zooms in on one thing: the API surface, what the 238 number is built from,
            and why it is the most honest way to measure how agent-ready a platform really is.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why “operations,” not just “endpoints”?
          </h2>
          <p>
            Most software brags about endpoint counts. An endpoint is a route \u2014 a URL your code can
            hit. Cornerstone PM ships {API_ENDPOINT_COUNT}+ of them across {API_DEDICATED_ROUTES}{" "}
            dedicated RESTful routes plus a generic execute route. But the endpoint count
            undersells what an agent can do, because one of those routes \u2014 the execute endpoint \u2014
            fans out across the entire Foreman AI skill catalog.
          </p>
          <p>
            An <em>operation</em> is a discrete action an agent can invoke. When we count every
            dedicated route plus every skill reachable through execute plus every webhook an agent
            can subscribe to, we get {API_OPERATION_COUNT}. That is the real answer to the question
            a developer or an AI agent actually asks: <em>what can I do here?</em>
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What the {API_OPERATION_COUNT} operations are built from
          </h2>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            {breakdown.map((b) => (
              <div
                key={b.label}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-white">{b.value}</span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${colorMap[b.color]}`}
                  >
                    {b.label}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>

          <p>
            Stack those together and you get a platform an external agent can fully operate: read a
            home record, generate a purchase order, send a bid request to five vendors, update a
            design-center option, fire an SMS to a sub, and listen for the webhook that confirms the
            sub acknowledged \u2014 all without a human clicking through the app.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            One execute route, the whole Foreman catalog
          </h2>
          <p>
            The architectural trick is the generic execute endpoint. Instead of hand-writing a
            separate route for every action, Cornerstone PM exposes the full{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI skill catalog
            </Link>{" "}
            through one execute surface. Your agent fetches the skill schemas from{" "}
            <code className="bg-slate-800 px-1 rounded text-sm">GET /api/ext/skills</code> and runs
            any skill by name through{" "}
            <code className="bg-slate-800 px-1 rounded text-sm">POST /api/ext/execute</code>.
          </p>
          <p>
            This is the BYOA \u2014 Bring Your Own AI Agent \u2014 philosophy in one design decision: every
            endpoint maps to a Foreman skill, so when Foreman ships a new skill, your agent inherits
            it automatically with zero configuration. The {API_OPERATION_COUNT} number is a
            snapshot. It only goes up.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Three schema formats means no translation layer
          </h2>
          <p>
            An API surface is only agent-ready if agents can read it. Cornerstone PM publishes its
            schemas in {API_SCHEMA_FORMATS} formats \u2014 Anthropic tool format, OpenAI function
            calling, and OpenAPI 3.1. That means you point Claude, ChatGPT, or any OpenAPI-aware
            tool (n8n, Make, Postman, custom code) at the same surface and it just works. No
            hand-written wrappers, no format conversion, no glue code to maintain.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this compares to the rest of the market
          </h2>

          <div className="not-prose overflow-x-auto rounded-xl border border-slate-800 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Capability</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">
                    Most platforms
                  </th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">
                    Cornerstone PM™
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Agent-invokable operations</td>
                  <td className="px-5 py-3.5 text-center text-red-400">A handful</td>
                  <td className="px-5 py-3.5 text-center text-emerald-400">
                    {API_OPERATION_COUNT} total
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Generic execute over full skill catalog</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Multi-format tool schemas</td>
                  <td className="px-5 py-3.5 text-center text-red-400">Usually none</td>
                  <td className="px-5 py-3.5 text-center text-emerald-400">
                    {API_SCHEMA_FORMATS} formats
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Typed, signed webhook catalog</td>
                  <td className="px-5 py-3.5 text-center text-red-400">1–3 generic</td>
                  <td className="px-5 py-3.5 text-center text-emerald-400">
                    {WEBHOOK_EVENT_COUNT}+ named
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Built-in MCP server</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">New capabilities auto-exposed</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            JobTread, Buildertrend, and CoConstruct tell you “webhooks exist” and maybe
            “an API is available.” Cornerstone PM ships the full skill catalog as
            endpoints, in three agent-readable formats, with a webhook catalog on the outbound side
            and an MCP server for no-code connection. The difference is the difference between a
            checkbox and a platform your AI agent can actually run.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where to find it
          </h2>
          <p>
            The REST API, BYOA layer, webhooks, and MCP server are exclusive to the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Pro+ plan
            </Link>{" "}
            ($599/mo). There is no add-on path on lower tiers \u2014 Pro+ includes the entire
            {" "}{API_OPERATION_COUNT}-operation surface, plus {FOREMAN_SKILL_COUNT}+ Foreman skills,
            60 user seats, and priority support. Full developer documentation lives at{" "}
            <span className="text-white">app.cornerstonepm.ai/developers</span>.
          </p>

          <div className="mt-14 rounded-2xl border border-cyan-800/40 bg-cyan-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Give your AI agent the same toolbox Foreman uses.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              {API_OPERATION_COUNT} API operations, {API_SCHEMA_FORMATS} schema formats,{" "}
              {WEBHOOK_EVENT_COUNT}+ webhooks, and an MCP server \u2014 the most agent-ready platform
              built for production home builders.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access →
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="Construction Software API: Common Questions"
        subtitle="Answers to what builders and developers ask when evaluating API and AI-agent support in home builder platforms."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
