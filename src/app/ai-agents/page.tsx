import React from "react";
import Link from "next/link";
import { Bot, FileText, MessageCircle, Check, Zap, ArrowRight, Brain } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents for Home Builders | Cornerstone PM",
  description:
    "5 AI agents for home builders: Foreman AI (47 skills), Blueprint AI (PDF takeoffs), Bid Import AI (parses any vendor bid), AI MLS Listing Generator, Support AI. Native AI built into the platform — not bolted on.",
  alternates: { canonical: "https://www.cornerstonepm.ai/ai-agents" },
};

const agents = [
  {
    name: "Foreman AI",
    tagline: "Your AI Construction Agent",
    description:
      "Natural language commands to search, create, and manage your entire operation. Parts, vendors, homes, budgets — just type what you need.",
    icon: <Bot className="w-8 h-8" />,
    color: "amber",
    href: "/foreman",
    highlights: [
      "47-skills covering parts, vendors, homes & budgets",
      "Chat with your data, execute real actions",
      "Persistent history with auto-titles",
      "Complete org data isolation",
    ],
    badge: "Pro Plan",
  },
  {
    name: "Blueprint AI",
    tagline: "AI Floor Plan Reader",
    description:
      "Upload a PDF floor plan. Get 134+ scopes populated in under 60 seconds. No manual data entry, no missed line items.",
    icon: <FileText className="w-8 h-8" />,
    color: "violet",
    href: "/ai-takeoff",
    highlights: [
      "Upload PDF → instant material takeoff",
      "134+ scope categories auto-populated",
      "Results in under 60 seconds",
      "Review and adjust before committing",
    ],
    badge: "Pro Plan",
  },
  {
    name: "AI MLS Listing Generator",
    tagline: "AI Real Estate Listing Writer",
    description:
      "Claude Sonnet writes professional MLS descriptions from your live home data. Room dimensions, upgrades, community details, lot size — all pulled automatically. One click to PDF.",
    icon: <FileText className="w-8 h-8" />,
    color: "emerald",
    href: "/listing-sheet",
    highlights: [
      "AI writes compelling 2-3 paragraph descriptions",
      "Custom prompt: \"emphasize the pool\" or \"mention schools\"",
      "Word count slider (50-1,000) for any MLS board",
      "One-click PDF download with smart filename",
    ],
    badge: "Builder+",
  },
  {
    name: "Support AI",
    tagline: "Instant Answers, Zero Wait Time",
    description:
      "Every feature, workflow, and permission documented and trained on Cornerstone PM. Answers buyer and team questions 24/7 so you don't have to.",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "cyan",
    href: "/support-ai",
    highlights: [
      "Every feature documented and searchable",
      "Answers in plain English",
      "Available 24/7 on any device",
      "Reduces support load on your team",
    ],
    badge: "All Plans",
  },
  {
    name: "Bid Import AI",
    tagline: "AI-Powered Vendor Bid Parser",
    description:
      "Upload vendor bids in any format — Excel, PDFs, scanned documents, even photos of handwritten quotes. AI extracts every line item, fuzzy-matches your parts catalog and scopes, and imports as a Bid, Vendor Pricing, or Takeoff in one click. No more hours of manual data entry from vendor spreadsheets.",
    icon: <Brain className="w-8 h-8" />,
    color: "orange",
    href: "/purchasing#bid-import",
    highlights: [
      "Reads Excel, PDF, scans, even handwritten quote photos",
      "Fuzzy-matches your parts catalog & scope items",
      "Color-coded confidence table — review before commit",
      "One-click import to Bid, Vendor Pricing, or Takeoff",
    ],
    badge: "Pro+",
  },
];

const colorMap: Record<string, { border: string; icon: string; badge: string; glow: string; button: string }> = {
  amber: {
    border: "border-amber-500/40",
    icon: "text-amber-400 bg-amber-500/10",
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    glow: "shadow-amber-500/10",
    button: "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-amber-500/20",
  },
  violet: {
    border: "border-violet-500/40",
    icon: "text-violet-400 bg-violet-500/10",
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    glow: "shadow-violet-500/10",
    button: "bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:from-violet-500 hover:to-violet-400 shadow-violet-500/20",
  },
  cyan: {
    border: "border-cyan-500/40",
    icon: "text-cyan-400 bg-cyan-500/10",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    glow: "shadow-cyan-500/10",
    button: "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white hover:from-cyan-500 hover:to-cyan-400 shadow-cyan-500/20",
  },
  emerald: {
    border: "border-emerald-500/40",
    icon: "text-emerald-400 bg-emerald-500/10",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    glow: "shadow-emerald-500/10",
    button: "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-500/20",
  },
  orange: {
    border: "border-orange-500/40",
    icon: "text-orange-400 bg-orange-500/10",
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    glow: "shadow-orange-500/10",
    button: "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 shadow-orange-500/20",
  },
};

const pricingTiers = [
  {
    name: "Starter",
    price: "$149",
    agents: ["Support AI"],
    color: "text-slate-300",
  },
  {
    name: "Builder",
    price: "$299",
    agents: ["Support AI", "AI MLS Listing"],
    color: "text-emerald-400",
    note: "Includes AI MLS Listing Generator",
  },
  {
    name: "Pro",
    price: "$499",
    agents: ["Support AI", "AI MLS Listing", "Foreman AI", "Blueprint AI"],
    color: "text-amber-400",
    highlight: true,
  },
  {
    name: "Pro+",
    price: "$599",
    agents: ["All agents", "Bid Import AI", "BYOA API Access", "7-wave bidding pipeline", "Opus model", "5,000 msg/mo"],
    color: "text-cyan-400",
    note: "Full API + automation",
  },
];

export default function AiAgentsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(99,102,241,0.10),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-semibold mb-6">
            AI AGENTS FOR HOME BUILDERS
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            5 AI agents for home builders.
            <br />
            <span className="text-white">Zero setup.</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              47 skills out of the box.
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold max-w-2xl mx-auto mb-4">
            ChatGPT doesn&apos;t know what a takeoff scope is.
          </p>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Ours do. Every agent is purpose-built for home builders — trained on your data,
            integrated with your workflow.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25 transition-all duration-200"
          >
            Join Beta — Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => {
            const c = colorMap[agent.color];
            return (
              <div
                key={agent.name}
                className={`relative rounded-2xl p-8 bg-slate-900/60 border ${c.border} shadow-xl ${c.glow} hover:shadow-2xl transition-all duration-300 flex flex-col`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${c.icon} mb-5`}>
                  {agent.icon}
                </div>
                <div className={`inline-flex items-center self-start px-2.5 py-1 rounded-full border text-xs font-bold mb-4 ${c.badge}`}>
                  {agent.badge}
                </div>
                <h2 className="text-2xl font-black text-white mb-1">{agent.name}</h2>
                <p className="text-sm font-semibold text-slate-400 mb-3">{agent.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{agent.description}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {agent.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={agent.href}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm shadow-lg transition-all duration-200 ${c.button}`}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Moat */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(99,102,241,0.07),transparent)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold mb-6">
                THE MOAT
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Buildertrend has forms.
                <br />
                CoConstruct has buttons.
                <br />
                <span className="text-violet-400">Cornerstone has agents.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                No other construction platform gives builders natural language access to
                their own data. Ask anything. Get answers. Take action. All without leaving
                a chat window.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">AI Agents by Plan</h2>
            <p className="text-slate-400">Every plan includes Support AI. AI MLS Listing Generator on Builder+. Foreman AI + Blueprint AI on Pro. Bid Import AI + full API automation on Pro+.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-5 gap-3 ${
                  tier.highlight
                    ? "bg-amber-500/8 border-b border-amber-500/20"
                    : i < pricingTiers.length - 1
                    ? "border-b border-slate-800 bg-slate-900/60"
                    : "bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-4">
                  {tier.highlight && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  )}
                  <div>
                    <div className={`font-bold text-lg ${tier.color}`}>{tier.name}</div>
                    <div className="text-slate-500 text-sm">{tier.price}/mo</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tier.agents.map((a) => (
                    <span
                      key={a}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tier.highlight
                          ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}
                    >
                      {a}
                    </span>
                  ))}
                  {tier.note && (
                    <span className="px-3 py-1 rounded-full text-xs text-slate-600 bg-slate-900 border border-slate-800">
                      {tier.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add-on pill */}
          <div className="mt-5 flex items-center justify-center">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-sm font-semibold">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>BYOK Add-On: +$199/mo &mdash; Bring Your Own Key, unlimited AI messages (Pro &amp; above)</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200"
            >
              Get Beta Access — Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
