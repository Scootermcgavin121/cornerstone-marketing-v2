"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, FileSearch, ClipboardList, Home, MessageSquare, Sparkles, Code2 } from "lucide-react";

/* ------------------------------------------------------------------
 * AIHubDiagram
 * Hub-and-spoke hero showing Cornerstone's real AI agents.
 * Inspired by GrowBro's "One agent. Every channel." pattern but rebuilt
 * with our Cornerstone brand (dark theme, emerald/cyan/violet/amber).
 * ------------------------------------------------------------------ */

type Agent = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  color: string; // tailwind text class
  bg: string;    // tailwind bg class for icon chip
  border: string;// tailwind border class for left rail
  glow: string;  // hex for the SVG gradient stop
  icon: React.ComponentType<{ className?: string }>;
  /** Position relative to hub. We render a 2x3 grid on desktop, vertical stack on mobile. */
  side: "left" | "right";
  row: 0 | 1 | 2;
};

const AGENTS: Agent[] = [
  {
    id: "blueprint",
    name: "Blueprint AI",
    tagline: "AI Floor Plan Reader",
    description: "Plan analyzed in under 60 seconds — 3,284 parts, fixtures & rooms extracted.",
    href: "/ai-takeoff",
    color: "text-emerald-300",
    bg: "bg-emerald-500/15",
    border: "border-emerald-400/40",
    glow: "#34d399",
    icon: FileSearch,
    side: "left",
    row: 0,
  },
  {
    id: "foreman",
    name: "Foreman AI™",
    tagline: "Your AI Construction Agent",
    description: "“Hey Foreman, who's behind on Lot 12?” — plain-English scheduling & status.",
    href: "/ai-construction-management",
    color: "text-cyan-300",
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/40",
    glow: "#22d3ee",
    icon: Hammer,
    side: "right",
    row: 0,
  },
  {
    id: "bid-import",
    name: "Bid Import AI",
    tagline: "AI Vendor Bid Parser",
    description: "Spreadsheet, PDF, email — even a back-of-napkin photo. Parts created in the system automatically.",
    href: "/bid-import-ai",
    color: "text-violet-300",
    bg: "bg-violet-500/15",
    border: "border-violet-400/40",
    glow: "#a78bfa",
    icon: ClipboardList,
    side: "left",
    row: 1,
  },
  {
    id: "mls",
    name: "AI MLS Listing Generator",
    tagline: "AI Real Estate Listing Writer",
    description: "MLS listing drafted in 12 seconds — Magnolia plan, 4BR, 2,400 sqft → ready to publish.",
    href: "/ai-new-home-sales",
    color: "text-amber-300",
    bg: "bg-amber-500/15",
    border: "border-amber-400/40",
    glow: "#fbbf24",
    icon: Home,
    side: "right",
    row: 1,
  },
  {
    id: "support",
    name: "AI Support Agent",
    tagline: "Instant Answers, Zero Wait Time",
    description: "Buyer asked about Camden floorplan — answered with current pricing + availability.",
    href: "/support-ai",
    color: "text-rose-300",
    bg: "bg-rose-500/15",
    border: "border-rose-400/40",
    glow: "#fb7185",
    icon: MessageSquare,
    side: "left",
    row: 2,
  },
  {
    id: "api",
    name: "Full REST API",
    tagline: "Build Your Own AI Agents",
    description: "Phone agent texts vendors when bids are due — 47 skills exposed via Bearer token. Connect Claude, GPT, Twilio, anything.",
    href: "/api-access",
    color: "text-sky-300",
    bg: "bg-sky-500/15",
    border: "border-sky-400/40",
    glow: "#38bdf8",
    icon: Code2,
    side: "right",
    row: 2,
  },
];

/** Outline for the SVG path between hub center and a card anchor. */
function curvePath(from: { x: number; y: number }, to: { x: number; y: number }, side: "left" | "right") {
  const dx = (to.x - from.x) * 0.55;
  const c1 = { x: from.x + dx, y: from.y };
  const c2 = { x: to.x - dx * (side === "left" ? -1 : 1), y: to.y };
  return `M ${from.x} ${from.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${to.x} ${to.y}`;
}

export default function AIHubDiagram() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [paths, setPaths] = useState<Record<string, string>>({});
  const [size, setSize] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      const hub = hubRef.current;
      if (!container || !hub) return;
      const cb = container.getBoundingClientRect();
      setSize({ w: cb.width, h: cb.height });
      const hubBox = hub.getBoundingClientRect();
      const hubCenter = {
        x: hubBox.left + hubBox.width / 2 - cb.left,
        y: hubBox.top + hubBox.height / 2 - cb.top,
      };
      const next: Record<string, string> = {};
      for (const agent of AGENTS) {
        const el = cardRefs.current[agent.id];
        if (!el) continue;
        const cardBox = el.getBoundingClientRect();
        const anchor =
          agent.side === "left"
            ? { x: cardBox.right - cb.left, y: cardBox.top + cardBox.height / 2 - cb.top }
            : { x: cardBox.left - cb.left, y: cardBox.top + cardBox.height / 2 - cb.top };
        next[agent.id] = curvePath(hubCenter, anchor, agent.side);
      }
      setPaths(next);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  const leftAgents = AGENTS.filter((a) => a.side === "left").sort((a, b) => a.row - b.row);
  const rightAgents = AGENTS.filter((a) => a.side === "right").sort((a, b) => a.row - b.row);

  return (
    <section className="relative w-full bg-slate-950 py-20 sm:py-28 overflow-hidden">
      {/* soft radial glow — matches AgentsSection for cohesion */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.05)_0%,transparent_60%)]"
      />
      {/* faint grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs uppercase tracking-widest text-cyan-200 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by Foreman AI™</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-none">
            <span className="italic font-serif text-emerald-300/90">One AI.</span>{" "}
            <span className="text-white">Every workflow.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            <span className="text-cyan-300 font-semibold">Foreman AI™</span> is the brain behind Cornerstone — 47 skills, 5 specialized agents, and a full REST API. Build your own phone agent, vendor SMS bot, or workflow automation on top of the same engine that runs your jobs.
          </p>
        </div>

        {/* Diagram */}
        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-y-6 gap-x-6 lg:gap-x-12 items-center justify-items-stretch">
          {/* SVG layer */}
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox={`0 0 ${size.w} ${size.h}`}
            preserveAspectRatio="none"
          >
            <defs>
              {AGENTS.map((agent) => (
                <linearGradient
                  key={agent.id}
                  id={`grad-${agent.id}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="0"
                  x2={size.w}
                  y2="0"
                >
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="60%" stopColor={agent.glow} stopOpacity="0.65" />
                  <stop offset="100%" stopColor={agent.glow} stopOpacity="0.95" />
                </linearGradient>
              ))}
            </defs>
            {AGENTS.map((agent) => (
              <g key={agent.id}>
                {paths[agent.id] && (
                  <>
                    <path
                      d={paths[agent.id]}
                      stroke={`url(#grad-${agent.id})`}
                      strokeWidth={1.5}
                      fill="none"
                      opacity={0.9}
                    />
                    {/* traveling dot */}
                    <circle r={3} fill={agent.glow}>
                      <animateMotion
                        dur={`${3 + agent.row * 0.4}s`}
                        repeatCount="indefinite"
                        path={paths[agent.id]}
                      />
                    </circle>
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Left column */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {leftAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} side="left" cardRefs={cardRefs} />
            ))}
          </div>

          {/* Hub */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div ref={hubRef} className="relative w-32 h-32">
              {/* Mid ring — ambient counter-rotation */}
              <motion.div
                aria-hidden
                className="absolute rounded-full border border-dashed border-white/15 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{ width: 210, height: 210, left: -41, top: -41 }}
              />

              {/* Outer ring — ambient drift */}
              <motion.div
                aria-hidden
                className="absolute rounded-full border border-dashed border-emerald-400/20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ width: 290, height: 290, left: -81, top: -81 }}
              />

              {/* Thick rotating gradient ring — sits right on the hub edge.
                  Asymmetric conic gradient (bright arc + dim tail) so rotation is obvious. */}
              <motion.div
                aria-hidden
                className="absolute rounded-full pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  width: 152,
                  height: 152,
                  left: -12,
                  top: -12,
                  background:
                    "conic-gradient(from 0deg, rgba(52,211,153,0) 0deg, rgba(52,211,153,0.15) 30deg, #34d399 90deg, #22d3ee 130deg, #a78bfa 180deg, rgba(167,139,250,0.2) 230deg, rgba(255,255,255,0.05) 280deg, rgba(52,211,153,0) 360deg)",
                  WebkitMask:
                    "radial-gradient(circle, transparent 67px, black 68px, black 75px, transparent 76px)",
                  mask:
                    "radial-gradient(circle, transparent 67px, black 68px, black 75px, transparent 76px)",
                  filter: "drop-shadow(0 0 14px rgba(34,211,238,0.55))",
                }}
              />

              {/* Bright leading dot — unmistakable rotation cue */}
              <motion.div
                aria-hidden
                className="absolute pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  width: 152,
                  height: 152,
                  left: -12,
                  top: -12,
                }}
              >
                <span
                  aria-hidden
                  className="absolute rounded-full"
                  style={{
                    width: 10,
                    height: 10,
                    top: 67,
                    left: 142,
                    background: "#22d3ee",
                    boxShadow:
                      "0 0 12px 3px rgba(34,211,238,0.85), 0 0 24px 6px rgba(34,211,238,0.4)",
                    transform: "translate(-50%, 0)",
                  }}
                />
              </motion.div>

              <div className="relative w-32 h-32 rounded-full bg-black/90 ring-1 ring-white/10 shadow-[0_0_60px_-10px_rgba(52,211,153,0.55)]">
                <div className="w-full h-full rounded-full flex flex-col items-center justify-center">
                  <Sparkles className="w-7 h-7 text-emerald-300" />
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-2">Cornerstone</div>
                  <div className="text-sm font-bold text-white">AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 order-3">
            {rightAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} side="right" cardRefs={cardRefs} />
            ))}
          </div>
        </div>

        {/* CTA pill — API is now its own spoke; this points to the live docs */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/api-docs"
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm text-white/80"
          >
            <span className="text-white/50">See every skill the API exposes</span>
            <span className="font-semibold text-white">Open the API docs</span>
            <span className="text-emerald-300 group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AgentCard({
  agent,
  side,
  cardRefs,
}: {
  agent: Agent;
  side: "left" | "right";
  cardRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}) {
  const Icon = agent.icon;
  return (
    <Link href={agent.href} className="block group">
      <div
        ref={(el) => {
          cardRefs.current[agent.id] = el;
        }}
        className={[
          "relative rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-white/10",
          "border-l-2", agent.border,
          "p-4 sm:p-5 transition group-hover:bg-white/[0.07] group-hover:border-white/20",
        ].join(" ")}
      >
        {/* status dot */}
        <span
          aria-hidden
          className={[
            "absolute top-3 right-3 w-2 h-2 rounded-full",
            agent.bg.replace("/15", "/80"),
          ].join(" ")}
        />
        <span
          aria-hidden
          className={[
            "absolute top-3 right-3 w-2 h-2 rounded-full animate-ping",
            agent.bg.replace("/15", "/60"),
          ].join(" ")}
        />

        <div className="flex items-start gap-3">
          <div className={`shrink-0 w-10 h-10 rounded-xl ${agent.bg} flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${agent.color}`} />
          </div>
          <div className="min-w-0">
            <div className={`text-[10px] uppercase tracking-[0.18em] ${agent.color}`}>{agent.tagline}</div>
            <div className="text-white font-bold text-base sm:text-lg leading-tight mt-0.5 truncate">{agent.name}</div>
            <div className="text-white/60 text-sm mt-1.5 leading-snug">{agent.description}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
