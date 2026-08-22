import React from "react";
import Link from "next/link";
import {
  Bot,
  Ruler,
  Brain,
  ClipboardCheck,
  FileText,
  MessageCircle,
  RefreshCw,
  Eye,
  Plug,
  Palette,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildFeatureSchema } from "@/lib/schema-helpers";
import {
  FOREMAN_SKILL_COUNT,
  WEBHOOK_EVENT_COUNT,
  API_ENDPOINT_COUNT,
  STYLESMITH_THEME_COUNT,
} from "@/lib/pricing";

const aiFeaturesSchema = buildFeatureSchema({
  pageName: "AI Features for Home Builders — Cornerstone PM",
  pagePath: "/ai-features",
  description:
    `Every AI feature in Cornerstone PM in one place: Foreman AI (${FOREMAN_SKILL_COUNT}+ skills), AI Blueprint Takeoff, Bid Import AI, Punchlist AI, AI MLS Listing Generator, AI Support Agent, CRM Migration Wizard, and Bring-Your-Own-AI via a built-in MCP server and REST API. Native AI built into the platform for home builders — not bolted on.`,
  applicationSubCategory: "AI Construction Software for Home Builders",
  keywords:
    "AI features home builders, construction AI, AI construction software, AI takeoff, AI bid import, punchlist AI, AI MLS listing, AI support agent, Foreman AI, MCP server construction, bring your own AI agent, AI-native construction management",
  featureList: [
    `Foreman AI — ${FOREMAN_SKILL_COUNT}+ skill construction agent with real read/write`,
    "AI Blueprint Takeoff — PDF floor plan to 134+ material scopes in under 60 seconds",
    "Bid Import AI — parses Excel, PDF, scans, and handwritten quote photos",
    "Punchlist AI — walkthrough video OR home inspection PDF to a structured, vendor-assigned punch list",
    `StyleSmith AI™ — AI interior design agent that composes a whole-home selection set across ${STYLESMITH_THEME_COUNT} style themes`,
    "AI MLS Listing Generator — print-ready listing PDF in one click",
    "AI Support Agent — 24/7 in-app answers on every feature and workflow",
    "CRM Migration Wizard — AI maps a Buildertrend / JobTread export to Cornerstone",
    `Bring Your Own AI — built-in MCP server + ${API_ENDPOINT_COUNT}+ REST endpoints and ${WEBHOOK_EVENT_COUNT}+ webhooks`,
  ],
});

export const metadata: Metadata = {
  title: "AI Features for Home Builders | Cornerstone PM™",
  description:
    `Every AI feature in one place — Foreman AI (${FOREMAN_SKILL_COUNT}+ skills), AI Blueprint Takeoff, Bid Import AI, Punchlist AI, AI MLS Listing Generator, AI Support Agent, and Bring-Your-Own-AI via a built-in MCP server + REST API. AI built for home builders, not bolted on.`,
  alternates: { canonical: "https://www.cornerstonepm.ai/ai-features" },
};

type Capability = {
  name: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
  badge: string;
  highlights: string[];
};

const capabilities: Capability[] = [
  {
    name: "Foreman AI™",
    tagline: "Your AI construction agent",
    description:
      "Type what you need in plain English and Foreman does it — searches, creates, and manages parts, vendors, homes, budgets, and schedules across your whole operation. It reads and writes real data, not canned answers.",
    icon: <Bot className="w-7 h-7" />,
    color: "amber",
    href: "/foreman",
    badge: "Core agent · Pro",
    highlights: [
      `${FOREMAN_SKILL_COUNT}+ skills across every module`,
      "Drag-drop PDFs, Excel & images into chat",
      "Full undo + dry-run on every write",
      "Builds profitability & vendor reports on demand",
    ],
  },
  {
    name: "StyleSmith AI™",
    tagline: "Your AI interior designer",
    description:
      `Name a home and a look, and StyleSmith AI™ composes the complete design-selection set for that house — flooring, tile, cabinets, counters, plumbing, lighting, hardware — from your own catalog at your own retail pricing, then writes it into the Design Center on command.`,
    icon: <Palette className="w-7 h-7" />,
    color: "violet",
    href: "/stylesmith",
    badge: "New · Pro+",
    highlights: [
      `${STYLESMITH_THEME_COUNT} style themes, every option auto-scored nightly`,
      "One palette + one finish family for the whole house",
      "Spec-level guardrails — honest gaps, never silent upgrades",
      "Buyer style quiz feeds the look before the appointment",
    ],
  },
  {
    name: "AI Blueprint Takeoff",
    tagline: "Upload a PDF, get a takeoff",
    description:
      "Drop in a PDF floor plan and Blueprint AI populates 134+ material scopes in under a minute — no manual line-item entry, no missed quantities. Review and adjust before it commits to the budget.",
    icon: <Ruler className="w-7 h-7" />,
    color: "violet",
    href: "/ai-takeoff",
    badge: "Pro",
    highlights: [
      "PDF → material takeoff in under 60 seconds",
      "134+ scope categories auto-populated",
      "Quantities from real plan dimensions",
      "Review before it hits the budget",
    ],
  },
  {
    name: "Bid Import AI",
    tagline: "Any vendor bid, parsed",
    description:
      "Upload vendor bids in any format — Excel, PDF, scans, even photos of handwritten quotes. AI extracts every line item, fuzzy-matches your parts catalog and scopes, and imports in one click.",
    icon: <Brain className="w-7 h-7" />,
    color: "orange",
    href: "/bid-import-ai",
    badge: "Pro+",
    highlights: [
      "Reads Excel, PDF, scans & handwritten photos",
      "Fuzzy-matches your parts catalog & scopes",
      "Color-coded confidence — review before commit",
      "One-click import to Bid, Pricing, or Takeoff",
    ],
  },
  {
    name: "Punchlist AI",
    tagline: "Walkthrough video OR inspection PDF",
    description:
      "Two ways to build a punch list fast: record a phone walkthrough, or upload a home inspector's PDF report. AI reads every page, extracts each finding — room, trade, and severity — pulls the inspector's embedded photos, and auto-assigns each item to the right vendor.",
    icon: <ClipboardCheck className="w-7 h-7" />,
    color: "cyan",
    href: "/punchlist-ai",
    badge: "New",
    highlights: [
      "Walkthrough video → punch list in seconds",
      "Upload a 40–60 page inspection PDF → assigned list in ~a minute",
      "4-level severity + embedded inspector photos extracted",
      "Auto-assigned by trade — one email per vendor",
    ],
  },
  {
    name: "AI MLS Listing Generator",
    tagline: "Listings write themselves",
    description:
      "One click turns your live home data — room dimensions, upgrades, community details, lot size — into a professional MLS description and a print-ready PDF. Steer it with a custom prompt and a word-count slider.",
    icon: <FileText className="w-7 h-7" />,
    color: "emerald",
    href: "/listing-sheet",
    badge: "Builder+",
    highlights: [
      "Pro descriptions from live project data",
      "Custom prompts: \"emphasize the pool\"",
      "Word-count slider for any MLS board",
      "One-click PDF with a smart filename",
    ],
  },
  {
    name: "AI Support Agent",
    tagline: "Answers, zero wait",
    description:
      "Every feature, workflow, and permission is documented and trained on Cornerstone PM. The AI Support Agent answers buyer and team questions in plain English, 24/7, so your team doesn't field the same questions all day.",
    icon: <MessageCircle className="w-7 h-7" />,
    color: "cyan",
    href: "/support-ai",
    badge: "All plans",
    highlights: [
      "Trained on every feature & workflow",
      "Plain-English answers, any device",
      "Available around the clock",
      "Cuts repetitive support load",
    ],
  },
  {
    name: "CRM Migration Wizard",
    tagline: "Switch without the pain",
    description:
      "Drop in a Buildertrend or JobTread export and the AI maps every column to the right Cornerstone field — vendors, jobs, budgets, and contacts — so switching platforms is a file upload, not a data-entry project.",
    icon: <RefreshCw className="w-7 h-7" />,
    color: "violet",
    href: "/migrate",
    badge: "Live in beta",
    highlights: [
      "AI maps every column automatically",
      "Buildertrend & JobTread exports supported",
      "Review the mapping before import",
      "Move years of data in minutes",
    ],
  },
  {
    name: "Bring Your Own AI",
    tagline: "Plug in Claude, GPT, or your own agent",
    description:
      `A built-in MCP server plus a full REST API gives outside AI tools the same toolbox Foreman uses. Point Claude Desktop, Cursor, or your own agent at your construction data — ${API_ENDPOINT_COUNT}+ endpoints and ${WEBHOOK_EVENT_COUNT}+ webhook events.`,
    icon: <Plug className="w-7 h-7" />,
    color: "emerald",
    href: "/api-access",
    badge: "Pro+",
    highlights: [
      "Built-in MCP server — connect in ~30 seconds",
      `${API_ENDPOINT_COUNT}+ REST endpoints, ${WEBHOOK_EVENT_COUNT}+ webhooks`,
      `Run any of the ${FOREMAN_SKILL_COUNT}+ Foreman skills via API`,
      "Anthropic, OpenAI & OpenAPI schema formats",
    ],
  },
  {
    name: "Jobsite AI™",
    tagline: "The schedule updates itself",
    description:
      "Jobsite AI detects vendor arrivals from any camera, doorbell, gate, GPS, or check-in app and auto-flips the matching scheduled task to In Progress — no phone calls, no manual check-ins.",
    icon: <Eye className="w-7 h-7" />,
    color: "slate",
    href: "/jobsite-ai",
    badge: "Coming soon",
    highlights: [
      "Auto task-start the second a vendor arrives",
      "Works with any camera, doorbell, gate or GPS",
      "No-show alerts before the day is lost",
      "Photo evidence attached to the task log",
    ],
  },
];

const colorMap: Record<
  string,
  { border: string; icon: string; badge: string; glow: string; link: string }
> = {
  amber: {
    border: "border-amber-500/40",
    icon: "text-amber-400 bg-amber-500/10",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    glow: "shadow-amber-500/10",
    link: "text-amber-400 hover:text-amber-300",
  },
  violet: {
    border: "border-violet-500/40",
    icon: "text-violet-400 bg-violet-500/10",
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    glow: "shadow-violet-500/10",
    link: "text-violet-400 hover:text-violet-300",
  },
  cyan: {
    border: "border-cyan-500/40",
    icon: "text-cyan-400 bg-cyan-500/10",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    glow: "shadow-cyan-500/10",
    link: "text-cyan-400 hover:text-cyan-300",
  },
  emerald: {
    border: "border-emerald-500/40",
    icon: "text-emerald-400 bg-emerald-500/10",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    glow: "shadow-emerald-500/10",
    link: "text-emerald-400 hover:text-emerald-300",
  },
  orange: {
    border: "border-orange-500/40",
    icon: "text-orange-400 bg-orange-500/10",
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    glow: "shadow-orange-500/10",
    link: "text-orange-400 hover:text-orange-300",
  },
  slate: {
    border: "border-slate-500/40",
    icon: "text-slate-300 bg-slate-500/10",
    badge: "border-slate-400/40 bg-slate-500/15 text-slate-200",
    glow: "shadow-slate-500/10",
    link: "text-slate-300 hover:text-white",
  },
};

const faqItems: FAQItem[] = [
  {
    q: "What AI features does Cornerstone PM include?",
    a: `Cornerstone PM ships AI across the whole build: Foreman AI (a ${FOREMAN_SKILL_COUNT}+ skill agent that reads and writes your real data), StyleSmith AI™ (an interior design agent that composes a whole-home selection set), AI Blueprint Takeoff, Bid Import AI, Punchlist AI (from a walkthrough video or a home inspection PDF), the AI MLS Listing Generator, an AI Support Agent, and a CRM Migration Wizard. Pro+ also opens a built-in MCP server and REST API so you can plug in Claude, ChatGPT, or your own agent.`,
  },
  {
    q: "Is the AI actually built in, or bolted on?",
    a: "It's native. Every agent works on your live Cornerstone data — parts, vendors, homes, budgets, schedules — and can create and update records, not just answer questions. There's nothing to integrate; it's part of the platform.",
  },
  {
    q: "Which plans include the AI features?",
    a: "The AI Support Agent is on every plan. AI MLS Listing generation comes with Builder. Foreman AI and AI Blueprint Takeoff come with Pro. Bid Import AI, StyleSmith AI™, and Bring-Your-Own-AI (REST API + MCP server) are Pro+ — and Enterprise includes all of it in every division. See the pricing page for the full breakdown.",
  },
  {
    q: "Can I use my own AI agent with Cornerstone?",
    a: `Yes — on Pro+. A built-in MCP server lets you connect Claude Desktop, Cursor, or Windsurf in about 30 seconds, and a full REST API (${API_ENDPOINT_COUNT}+ endpoints, ${WEBHOOK_EVENT_COUNT}+ webhook events) gives any external agent the same toolbox Foreman uses.`,
  },
  {
    q: "Does the AI make up numbers?",
    a: "No. Cornerstone follows a hard-cost rule — every dollar traces back to accepted vendor pricing, and AI-generated takeoffs and reports pull from your real data. Nothing carries a made-up or default cost.",
  },
];

export default function AiFeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <JsonLd json={aiFeaturesSchema} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(99,102,241,0.10),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            AI FEATURES FOR HOME BUILDERS
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Every AI feature,
            <br />
            <span className="text-white">one platform.</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Built for builders.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold max-w-2xl mx-auto mb-4">
            Not a chatbot bolted onto the side.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            From blueprint to punch list, AI runs inside the workflow you already
            use — reading and writing your real data, purpose-built for home
            builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25 transition-all duration-200"
            >
              Join Beta — Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/foreman"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-200 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              Meet Foreman AI
            </Link>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { n: `${FOREMAN_SKILL_COUNT}+`, l: "Foreman skills" },
              { n: "9", l: "AI capabilities" },
              { n: "<60s", l: "PDF → takeoff" },
              { n: `${API_ENDPOINT_COUNT}+`, l: "API endpoints" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 py-5 px-3"
              >
                <div className="text-3xl font-black text-white">{s.n}</div>
                <div className="text-xs text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              AI in every corner of the build
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Each one is a real feature you can use today — tap any card for the
              full breakdown.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const c = colorMap[cap.color];
              return (
                <Link
                  key={cap.name}
                  href={cap.href}
                  className={`group relative rounded-2xl p-7 bg-slate-900/60 border ${c.border} shadow-xl ${c.glow} hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${c.icon}`}
                    >
                      {cap.icon}
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-bold ${c.badge}`}
                    >
                      {cap.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">{cap.name}</h3>
                  <div className={`text-sm font-semibold mb-3 ${c.link}`}>
                    {cap.tagline}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {cap.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {cap.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold ${c.link}`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foreman spotlight */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-amber-500/30 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold mb-5">
                <Bot className="w-3.5 h-3.5" /> THE ENGINE
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Foreman AI is the brain behind it all
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Most of these features run on the same {FOREMAN_SKILL_COUNT}+ skill
                engine. Ask Foreman to build a takeoff, price a scope, generate a
                profitability report, or spin up a bid request — in plain English —
                and it does the work on your live data, with a full undo on every
                change.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Reads and writes real records — not canned replies",
                  "Built-in estimating formulas (drywall, roofing, concrete, lumber, paint)",
                  "Profitability, budget & vendor scorecard reports on demand",
                  "Dry-run preview and full undo on every destructive action",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-slate-300">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/foreman"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200"
              >
                Explore Foreman AI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 font-mono text-sm">
              <div className="text-slate-500 mb-4"># Just type what you need</div>
              {[
                "build a takeoff from this floor plan.pdf",
                "price the plumbing scope for Maple Ridge",
                "which vendors are over budget this month?",
                "generate the MLS listing for lot 214",
              ].map((cmd) => (
                <div key={cmd} className="flex items-start gap-2 mb-3">
                  <span className="text-amber-400 select-none">›</span>
                  <span className="text-slate-200">{cmd}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 text-emerald-400 mt-4">
                <Sparkles className="w-4 h-4" /> Foreman handled it.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bring your own AI */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-emerald-500/25 bg-emerald-500/[0.05] p-8 sm:p-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 mb-6">
            <Plug className="w-7 h-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Or bring your own AI
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            On Pro+, a built-in MCP server and a full REST API give Claude, ChatGPT,
            n8n, or your own agent the same {FOREMAN_SKILL_COUNT}+ skills Foreman
            uses — {API_ENDPOINT_COUNT}+ endpoints and {WEBHOOK_EVENT_COUNT}+ webhook
            events, in Anthropic, OpenAI, and OpenAPI formats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/api-access"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all duration-200"
            >
              API Access &amp; BYOA
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/api-docs"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              Read the API docs
            </Link>
          </div>
        </div>
      </section>

      <FAQSection
        title="AI Features FAQ"
        subtitle="Common questions about AI for home builders in Cornerstone PM."
        items={faqItems}
      />

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Put the AI to work</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get every AI feature built for home builders — free
          during beta.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/30 transition-all duration-200"
        >
          Request Early Access
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
