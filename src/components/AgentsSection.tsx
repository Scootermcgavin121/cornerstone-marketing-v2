"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    emoji: "🪖",
    name: "Foreman AI™",
    tagline: "AI Construction Agent",
    desc: "83 purpose-built construction skills. Reads AND writes your data — parts, vendors, homes, exports.",
    href: "/foreman",
    color: "text-amber-400",
    border: "border-amber-500/20 hover:border-amber-500/50",
    badge: "Pro",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    prompts: [
      "Scrape Home Depot for GE refrigerators",
      "Generate an MLS listing for 1234 Oak St",
    ],
  },
  {
    emoji: "📐",
    name: "Blueprint AI",
    tagline: "AI Floor Plan Reader",
    desc: "Upload a PDF floor plan. 134+ scopes extracted in under 60 seconds. One-click import to budget.",
    href: "/ai-takeoff",
    color: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/50",
    badge: "Pro",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    prompts: [
      "Upload PDF → 22 rooms, 134 scopes",
      "One-click import to design center",
    ],
  },
  {
    emoji: "📄",
    name: "AI MLS Listing Generator",
    tagline: "AI Real Estate Listing Writer",
    desc: "Claude Sonnet writes professional MLS descriptions from your live home data. One click to PDF.",
    href: "/listing-sheet",
    color: "text-emerald-400",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    badge: "Builder+",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    prompts: [
      "Generate MLS listing for 1234 Oak St",
      "Emphasize the pool & school district",
    ],
  },
  {
    emoji: "💬",
    name: "AI Support Agent",
    tagline: "Instant Answers, Zero Wait",
    desc: "AI knowledge agent on every page. Knows every feature, workflow, and permission.",
    href: "/support-ai",
    color: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    badge: "All Plans",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    prompts: [
      "How do I set up a vendor?",
      "What roles can edit the options engine?",
    ],
  },
  {
    emoji: "🧠",
    name: "Bid Import AI",
    tagline: "AI-Powered Bid Parser",
    desc: "Upload vendor bids in any format — Excel, PDF, scans, even photos of handwritten quotes.",
    href: "/bid-import-ai",
    color: "text-orange-400",
    border: "border-orange-500/20 hover:border-orange-500/50",
    badge: "Pro+",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    prompts: [
      "Upload Tibbetts Lumber PDF → 18 lines",
      "Photo of handwritten quote → bid in 30s",
    ],
  },
];

export function AgentsSection() {
  return (
    <section className="relative py-24 px-4 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Industry First
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Five AI agents.<br />
            <span className="text-cyan-400">Zero other platforms have one.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            ChatGPT doesn&apos;t know what a takeoff scope is. Ours do &mdash; and they&apos;re wired directly to your data. No integrations, no setup, no consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
          {agents.map((agent) => (
            <Link
              key={agent.name}
              href={agent.href}
              className={`group relative p-6 rounded-2xl bg-slate-900/60 border ${agent.border} transition-colors duration-300 sm:hover:-translate-y-0.5 sm:transition-all flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{agent.emoji}</span>
                <span className={`px-2.5 py-1 rounded-full border text-xs font-bold ${agent.badgeColor}`}>
                  {agent.badge}
                </span>
              </div>
              <h3 className={`text-lg font-black ${agent.color} mb-1 leading-tight`}>{agent.name}</h3>
              <p className="text-white font-semibold text-xs mb-3">{agent.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{agent.desc}</p>

              <div className="space-y-1.5 mb-4">
                {agent.prompts.map((p, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-xs">
                    <span className={`font-bold ${agent.color} flex-shrink-0`}>›</span>
                    <span className="text-slate-500 italic">&ldquo;{p}&rdquo;</span>
                  </div>
                ))}
              </div>

              <div className={`flex items-center gap-1.5 text-xs font-semibold ${agent.color} opacity-60 group-hover:opacity-100 transition-opacity mt-auto`}>
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Moat callout */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center">
          <p className="text-2xl font-black text-white mb-3">
            Buildertrend has forms. CoConstruct has buttons.{" "}
            <span className="text-cyan-400">Cornerstone has agents.</span>
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            No other construction platform gives builders natural language access to their own data. This isn&apos;t a chatbot bolted on &mdash; these are purpose-built agents that understand construction workflows, supplier catalogs, and home builder operations.
          </p>
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all duration-200"
          >
            See all five agents &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
