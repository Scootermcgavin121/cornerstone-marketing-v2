import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildFeatureSchema } from "@/lib/schema-helpers";
import { ArchitectureForm } from "./ArchitectureForm";
import { Layers, Bot, Phone, Database, CheckCircle2, FileText } from "lucide-react";

const schema = buildFeatureSchema({
  pageName: "Homebuilder AI Agent Architecture — Reference Deck",
  pagePath: "/agent-architecture",
  description:
    "A 4-page reference architecture for an AI-native home builder operating system. The 12-agent stack mapped to real platforms — Anthropic Claude, OpenAI GPT-5, LangGraph, CrewAI, Retell AI, Bland.ai, Twilio, Neon Postgres + pgvector. Includes the vendor-bid voice agent scenario and the memory architecture pattern. Drop your email to get the PDF.",
  applicationSubCategory: "Home Builder AI Architecture Reference",
  keywords:
    "homebuilder AI architecture, home builder AI agents, construction AI architecture, AI agent stack home builder, LangGraph home builder, CrewAI construction, Retell AI construction, agent architecture PDF, AI native construction OS, vendor bid AI workflow, construction company brain Postgres",
  featureList: [
    "4-page reference architecture for an AI-native homebuilder OS",
    "12-agent stack across 5 tiers (Human → Orchestrator → Specialists → Execution → Memory/Governance)",
    "Real platforms named: Anthropic, OpenAI, LangGraph, CrewAI, Retell AI, Bland.ai, Twilio, BlueBubbles",
    "AI voice agent roster for vendor bid workflow (outbound + inbound + 2-way SMS)",
    "Memory architecture on Neon Postgres + pgvector with audit + rollback",
    "Foundation stack: Next.js, Vercel, Prisma, Postgres",
  ],
});

export const metadata: Metadata = {
  title: "Homebuilder AI Agent Architecture (Free PDF) | Cornerstone PM",
  description:
    "A 4-page reference architecture for an AI-native home builder operating system. 12 agents across 5 tiers — Anthropic, OpenAI, LangGraph, CrewAI, Retell AI, Bland.ai, Twilio, Postgres + pgvector. Free PDF. Drop your email.",
  alternates: { canonical: "https://www.cornerstonepm.ai/agent-architecture" },
  openGraph: {
    title: "Homebuilder AI Agent Architecture — Free 4-Page Reference Deck",
    description:
      "12-agent stack across 5 tiers. Real platforms named: LangGraph, CrewAI, Retell AI, Bland.ai, Twilio, Neon Postgres + pgvector. The full vendor-bid voice scenario + the memory architecture pattern. Free PDF.",
    url: "https://www.cornerstonepm.ai/agent-architecture",
    siteName: "Cornerstone PM",
    type: "article",
    images: [
      {
        url: "https://www.cornerstonepm.ai/og-agent-architecture.png",
        width: 1536,
        height: 1024,
        alt: "Homebuilder AI Agent Architecture — free 4-page reference deck from Cornerstone PM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homebuilder AI Agent Architecture — Free 4-Page PDF",
    description: "12 agents, 5 tiers, real platforms named. The reference architecture for an AI-native home builder OS.",
    images: ["https://www.cornerstonepm.ai/og-agent-architecture.png"],
  },
};

const highlights = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Architecture mapped to reality",
    body: "8 architecture layers — accountability shell, purpose protocol, sensing, interpretation, decision, orchestration, learning, govern & assure — each mapped to a working implementation, not a slide-deck buzzword.",
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "The 12-agent stack",
    body: "5 tiers from Builder Principal (human) through Orchestrator, Specialist Decision agents (Schedule, Vendor/Bid, Selections, Customer, Finance, Permitting), Execution (Voice/SMS, BYOA, Migration), to Memory and Govern & Assure. Real platforms named.",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "AI voice + SMS agent roster",
    body: "8 voice/SMS agents wired to a webhook bus: vendor bid outreach, deadline reminders, award notifications, vendor hotline, jobsite check-in, buyer concierge, delivery confirmation, selection nudges. Built on Retell AI, Bland.ai, Twilio.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "The company brain on Postgres",
    body: "Memory architecture pattern: Neon Postgres + pgvector at the core, markdown as a regenerable bootstrap view, every write goes through a proposal → validate → dedupe → approval → audit pipeline. Full rollback. SOC2-friendly.",
  },
];

const platforms = [
  { label: "Anthropic Claude", group: "Models" },
  { label: "OpenAI GPT-5", group: "Models" },
  { label: "LangGraph", group: "Orchestration" },
  { label: "CrewAI", group: "Orchestration" },
  { label: "Retell AI", group: "Voice / SMS" },
  { label: "Bland.ai", group: "Voice / SMS" },
  { label: "Twilio", group: "Voice / SMS" },
  { label: "BlueBubbles", group: "Voice / SMS" },
  { label: "Neon Postgres", group: "Data" },
  { label: "pgvector", group: "Data" },
  { label: "Vercel", group: "Infra" },
  { label: "Next.js 15", group: "Infra" },
  { label: "Prisma", group: "Infra" },
  { label: "Make / n8n / Zapier", group: "BYOA" },
  { label: "MCP (Claude Desktop / Cursor / Windsurf)", group: "BYOA" },
];

const pages = [
  {
    n: 1,
    title: "Architecture mapping",
    body: "Eight architecture layers (Accountability Shell → Govern & Assure) each mapped to a real implementation. Includes the digital-twin pilot framework and the intelligence-moat thesis.",
  },
  {
    n: 2,
    title: "The 12-agent stack",
    body: "5 tiers, 12 agents, 396+ skills, 30 webhook events. Every row names the platform underneath: Claude, GPT-5, LangGraph, CrewAI, Postgres, Retell, Bland, Twilio.",
  },
  {
    n: 3,
    title: "AI voice + SMS roster",
    body: "8 voice/SMS agents in an outbound/inbound/2-way grid. Plus the end-to-end vendor-bid scenario: Day 0 → +24h → +5d → award → contract → day-of jobsite check-in. ~400 PM hours/yr saved on bid coordination alone.",
  },
  {
    n: 4,
    title: "Memory architecture",
    body: "The 4-layer memory stack. Real SQL schemas: agent_memories, memory_audit, workflow_rules, vendor_scorecards. Plus the write pipeline: propose → validate → dedupe → approve → write → embed → audit → regenerate.",
  },
];

export default function AgentArchitecturePage() {
  return (
    <>
      <JsonLd json={schema} />
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* === HERO === */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-slate-950 to-cyan-950/30 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(16,185,129,0.10),_transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(14,116,144,0.10),_transparent_50%)] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> Free 4-Page PDF
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Homebuilder AI Agent Architecture</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
              A reference architecture for an AI-native home builder operating system. <strong className="text-white">12 agents across 5 tiers</strong>, real platforms named — Anthropic, OpenAI, LangGraph, CrewAI, Retell AI, Bland.ai, Twilio, Neon Postgres + pgvector. The voice-agent vendor-bid scenario. The memory architecture pattern. <strong className="text-white">Get the PDF + join</strong> Cornerstone Field Notes — a short, no-fluff newsletter for builders going AI-native.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-400 mb-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free 4-page PDF, instantly</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cornerstone Field Notes newsletter</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Unsubscribe anytime</span>
            </div>
          </div>
        </section>

        {/* === FORM + HIGHLIGHTS === */}
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-slate-900/60 backdrop-blur border border-slate-800 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-2 text-white">Get the PDF + the newsletter</h2>
              <p className="text-slate-400 text-sm mb-6">
                The PDF hits your inbox instantly. You'll also join <strong className="text-emerald-400">Cornerstone Field Notes</strong> — a short, no-fluff newsletter on what's actually working for builders going AI-native. Unsubscribe in one click, anytime.
              </p>
              <ArchitectureForm />
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-emerald-400 mt-0.5">{h.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{h.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{h.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === WHAT'S IN THE DECK === */}
        <section className="px-4 py-16 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">What's in the 4 pages</h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              No fluff. No slideware. Real platforms, real tables, real SQL schemas, real workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {pages.map((p) => (
                <div key={p.n} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 text-white font-bold text-sm">
                      {p.n}
                    </div>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PLATFORM PILLS === */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Real platforms, named</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              Most "AI architecture" decks handwave at "AI-powered." This one names every platform in the stack — so you can actually evaluate, swap, or pilot.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {platforms.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-sm text-slate-200"
                  title={p.group}
                >
                  <span className="text-emerald-400 text-xs font-semibold">{p.group}</span>
                  <span className="text-slate-300">{p.label}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* === CLOSING === */}
        <section className="px-4 py-16">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-emerald-950/40 to-cyan-950/40 border border-emerald-500/20 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Most "AI architecture" decks are buzzwords.
            </h2>
            <p className="text-lg text-slate-300 mb-2">This one names every platform, every schema, every agent.</p>
            <p className="text-slate-400">Scroll up, drop your email, get the PDF.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
