"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  {
    id: "hero-mockup",
    label: "Platform Overview",
    tag: "OVERVIEW",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    headline: "Your pipeline. Your pace.",
    description:
      "Every home. Every stage. Kanban board meets mobile dashboard — real-time visibility for your whole team, from the office or the job site.",
    screenshot: "/mockups/hero-mockup.png",
    accent: "from-cyan-500/20 to-slate-900/5",
    glow: "rgba(6,182,212,0.12)",
    border: "border-cyan-500/30",
    isHero: true,
  },
  {
    id: "sales-pipeline",
    label: "Sales Pipeline",
    tag: "SALES",
    tagColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    headline: "Track every deal from first contact to closed sale.",
    description:
      "Kanban-style pipeline with color-coded stages. See your full book of business at a glance — Sales, Permitting, Design, and Construction columns show exactly where every home stands.",
    screenshot: "/mockups/ss-sales-pipeline-2.png",
    aspect: "16/10",
    accent: "from-violet-500/20 to-purple-600/5",
    glow: "rgba(139,92,246,0.12)",
    border: "border-violet-500/30",
    isHero: false,
  },
  {
    id: "permitting-pipeline",
    label: "Permitting",
    tag: "PERMITTING",
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    headline: "Never miss a permit milestone again.",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times. Phase-based locking prevents downstream construction from starting until permits clear.",
    screenshot: "/mockups/ss-permitting.png",
    aspect: "16/10",
    accent: "from-amber-500/20 to-orange-600/5",
    glow: "rgba(245,158,11,0.12)",
    border: "border-amber-500/30",
    isHero: false,
  },
  {
    id: "construction-scheduling",
    label: "Construction Scheduling",
    tag: "SCHEDULING",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    headline: "Task-level scheduling with auto-cascade.",
    description:
      "3-tier dependency system — move one task and everything downstream adjusts. 17 pre-built templates, phase tracking, assigned vendors, and cascade email notifications to subs.",
    screenshot: "/mockups/ss-construction.png",
    aspect: "16/10",
    accent: "from-cyan-500/20 to-teal-600/5",
    glow: "rgba(6,182,212,0.12)",
    border: "border-cyan-500/30",
    isHero: false,
  },
  {
    id: "design-center",
    label: "Design Center",
    tag: "DESIGN",
    tagColor: "text-pink-400 border-pink-500/30 bg-pink-500/10",
    headline: "Room-by-room selections with real-time upgrade pricing.",
    description:
      "Buyers pick flooring, cabinets, countertops, and fixtures. Unlimited spec levels — Standard, Upgrade, Premium. Driven by takeoff quantities so pricing is always accurate.",
    screenshot: "/mockups/ss-design-center.png",
    aspect: "16/10",
    accent: "from-pink-500/20 to-rose-600/5",
    glow: "rgba(236,72,153,0.12)",
    border: "border-pink-500/30",
    isHero: false,
  },
  {
    id: "buyer-portal",
    label: "Homeowner Portal",
    tag: "PORTAL",
    tagColor: "text-teal-400 border-teal-500/30 bg-teal-500/10",
    headline: "Magic link access — no passwords needed.",
    description:
      "20-phase construction milestone carousel with real job site photos. Schedule visibility, document access, selection review, and direct messaging with PMs. Buyers stay informed without calling the office.",
    screenshot: "/mockups/ss-buyer-portal.png",
    aspect: "16/10",
    accent: "from-teal-500/20 to-cyan-600/5",
    glow: "rgba(20,184,166,0.12)",
    border: "border-teal-500/30",
    isHero: false,
  },
];

export function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const current = screens[active];

  return (
    <section id="screenshots" className="relative pt-8 pb-24 bg-slate-950 overflow-hidden">
      {/* Background glow that shifts per tab */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 60%, ${current.glow}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-4">
            SEE IT IN ACTION
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Built for how builders
            <br />
            <span className="text-cyan-400">actually work.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Real screens from a real product. No mockup smoke and mirrors — this is exactly what you get on day one.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                  : "bg-slate-800/50 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-600"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {current.isHero ? (
              /* Hero slide — full-width marketing image, no browser chrome */
              <div className="space-y-6">
                <div className={`rounded-2xl overflow-hidden border ${current.border} shadow-2xl`}>
                  <div className="relative w-full" style={{ aspectRatio: "3/2" }}>
                    <Image
                      src={current.screenshot}
                      alt="Cornerstone PM platform overview"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
                {/* Dot indicators */}
                <div className="flex justify-center gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === i ? "w-8 bg-cyan-400" : "w-3 bg-slate-700 hover:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              /* Standard slide — two-col with browser chrome */
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Left: description */}
                <div className="lg:col-span-2 space-y-5 order-2 lg:order-1">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold tracking-wider ${current.tagColor}`}>
                    {current.tag}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {current.headline}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base">
                    {current.description}
                  </p>
                  {/* Dot indicators */}
                  <div className="flex gap-2 pt-2">
                    {screens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          active === i ? "w-8 bg-cyan-400" : "w-3 bg-slate-700 hover:bg-slate-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: browser-frame screenshot */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <div className={`rounded-xl overflow-hidden border ${current.border} shadow-2xl bg-gradient-to-b ${current.accent}`}>
                    {/* Browser chrome bar */}
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                      <div className="flex-1 mx-3">
                        <div className="bg-slate-700/60 rounded text-slate-500 text-xs px-3 py-1 font-mono">
                          app.cornerstonepm.ai
                        </div>
                      </div>
                    </div>
                    {/* Screenshot */}
                    <div className="relative w-full" style={{ aspectRatio: "16/10", minHeight: "320px" }}>
                      <Image
                        src={current.screenshot}
                        alt={`${current.label} screenshot`}
                        fill
                        className="object-contain object-top bg-white"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority={active === 0}
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
