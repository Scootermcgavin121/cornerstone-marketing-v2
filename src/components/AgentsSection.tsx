"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const agents = [
  {
    emoji: "🪖",
    name: "Foreman AI",
    tagline: "Your AI Construction Agent",
    desc: "Type a command in plain English. Foreman executes it — scraping suppliers, managing parts, pulling reports, updating homes. 18 skills and counting.",
    href: "/foreman",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/50",
    badge: "Pro",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    prompts: [
      "Scrape Home Depot for GE refrigerators and add to parts catalog",
      "Generate an MLS listing for 1234 Oak Street",
    ],
  },
  {
    emoji: "📐",
    name: "Blueprint AI",
    tagline: "AI Floor Plan Reader",
    desc: "Upload a floor plan PDF. Blueprint AI extracts every room, fixture, and material scope in under 60 seconds. One click imports 134+ scopes into your budget.",
    href: "/ai-takeoff",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/50",
    badge: "Pro",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    prompts: [
      "Upload PDF &rarr; 22 rooms, 134 scopes extracted",
      "One-click import to budget &amp; design center",
    ],
  },
  {
    emoji: "💬",
    name: "FAQ Chatbot",
    tagline: "Always-On Help Desk",
    desc: "GPT-4o-mini chatbot on every page. Knows every feature, workflow, and permission. Built-in documentation that actually talks back.",
    href: "/contact",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    badge: "All Plans",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    prompts: [
      "How do I set up a vendor in Cornerstone?",
      "What roles have access to the options engine?",
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
            Three AI agents.<br />
            <span className="text-cyan-400">Zero other platforms have one.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            ChatGPT doesn&apos;t know what a takeoff scope is. Ours do &mdash; and they&apos;re wired directly to your data. No integrations, no setup, no consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`group relative p-7 rounded-2xl bg-slate-900/60 border ${agent.border} transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{agent.emoji}</span>
                <span className={`px-2.5 py-1 rounded-full border text-xs font-bold ${agent.badgeColor}`}>
                  {agent.badge}
                </span>
              </div>
              <h3 className={`text-xl font-black ${agent.color} mb-1`}>{agent.name}</h3>
              <p className="text-white font-semibold text-sm mb-3">{agent.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{agent.desc}</p>

              <div className="space-y-2 mb-6">
                {agent.prompts.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <span className={`font-bold ${agent.color} flex-shrink-0`}>&rsaquo;</span>
                    <span className="text-slate-400 italic" dangerouslySetInnerHTML={{ __html: `&ldquo;${p}&rdquo;` }} />
                  </div>
                ))}
              </div>

              <Link
                href={agent.href}
                className={`flex items-center gap-1.5 text-sm font-semibold ${agent.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Moat callout */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center">
          <p className="text-2xl font-black text-white mb-3">
            Buildertrend has forms. CoConstruct has buttons.{" "}
            <span className="text-cyan-400">Cornerstone has agents.</span>
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            No other construction platform gives builders natural language access to their own data. This isn&apos;t a chatbot bolted on &mdash; these are purpose-built agents that understand construction workflows, supplier catalogs, and production builder operations.
          </p>
          <Link
            href="/ai-agents"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all duration-200"
          >
            See all three agents &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
