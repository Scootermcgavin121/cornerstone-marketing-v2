"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hammer, FileSearch, ClipboardList, Home, MessageSquare, Sparkles } from "lucide-react";

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
    name: "Foreman AI",
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
    description: "Vendor email parsed → bid logged. Spreadsheet, PDF, or call-in — extracted automatically.",
    href: "/ai-construction-purchasing",
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
    href: "/ai-agents",
    color: "text-rose-300",
    bg: "bg-rose-500/15",
    border: "border-rose-400/40",
    glow: "#fb7185",
    icon: MessageSquare,
    side: "left",
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
    <section className="relative w-full bg-black py-20 sm:py-28 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/70 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cornerstone AI</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight leading-none">
            <span className="italic font-serif text-emerald-300/90">One AI.</span>{" "}
            <span className="text-white">Every workflow.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Blueprint AI reads your plans. Foreman AI runs your schedule. Bid Import AI handles vendor quotes. All built into Cornerstone.
          </p>
        </div>

        {/* Diagram */}
        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-y-6 gap-x-6 lg:gap-x-12 items-center">
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
            <div ref={hubRef} className="relative">
              {/* dashed pulse rings */}
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full border border-dashed border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ width: 200, height: 200, left: -36, top: -36 }}
              />
              <motion.div
                aria-hidden
                className="absolute inset-0 rounded-full border border-dashed border-emerald-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ width: 260, height: 260, left: -66, top: -66 }}
              />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 p-[2px] shadow-[0_0_60px_-10px_rgba(52,211,153,0.55)]">
                <div className="w-full h-full rounded-full bg-black/90 flex flex-col items-center justify-center">
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

        {/* API pill */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/api-docs"
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm text-white/80"
          >
            <span className="text-white/50">Need something custom?</span>
            <span className="font-semibold text-white">Build it with our API</span>
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
          side === "right" ? "lg:ml-2" : "lg:mr-2",
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
