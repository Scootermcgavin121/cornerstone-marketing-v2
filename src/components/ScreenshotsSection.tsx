"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const screens = [
  {
    id: "sales-pipeline",
    label: "Sales Pipeline",
    tag: "SALES",
    tagColor: "text-violet-400 border-violet-500/30 bg-violet-500/10",
    headline: "Track every deal from first contact to closed sale.",
    description:
      "Kanban-style pipeline with color-coded stages. See your full book of business at a glance — Sales, Permitting, Design, and Construction columns show exactly where every home stands.",
    mockup: "/mockups/sales-pipeline-mockup.png",
    accent: "from-violet-500/20 to-purple-600/5",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    id: "permitting-pipeline",
    label: "Permitting Pipeline",
    tag: "PERMITTING",
    tagColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    headline: "Never miss a permit milestone again.",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times. Phase-based locking prevents downstream construction from starting until permits clear.",
    mockup: "/mockups/permitting-pipeline-mockup.png",
    accent: "from-amber-500/20 to-orange-600/5",
    glow: "rgba(245,158,11,0.15)",
  },
  {
    id: "construction-home",
    label: "Construction Hub",
    tag: "PLATFORM",
    tagColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
    headline: "Your entire operation in one place.",
    description:
      "Homes & Scheduling, Team & Vendors, Permitting, Field & Documents — every module connected. 65 homes, 60 vendors, 10 communities, all managed from a single dashboard.",
    mockup: "/mockups/construction-home-mockup.png",
    accent: "from-cyan-500/20 to-teal-600/5",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    id: "sales-home",
    label: "Sales Dashboard",
    tag: "DASHBOARD",
    tagColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    headline: "Real-time KPIs the moment you log in.",
    description:
      "Active pipeline count, homes sold this month, total buyers, and community performance — all surfaced front and center so you can run your business without digging through reports.",
    mockup: "/mockups/sales-home-mockup.png",
    accent: "from-emerald-500/20 to-teal-600/5",
    glow: "rgba(16,185,129,0.15)",
  },
];

export function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const current = screens[active];

  return (
    <section id="screenshots" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${current.glow}, transparent)`,
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

        {/* Content area */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-2 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold tracking-wider mb-4 ${current.tagColor}`}
                >
                  {current.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                  {current.headline}
                </h3>
                <p className="text-slate-400 leading-relaxed">{current.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Step indicators */}
            <div className="flex gap-2 pt-2">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    active === i ? "w-8 bg-cyan-400" : "w-4 bg-slate-700 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: mockup image */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${current.accent} border border-slate-700/50 p-2`}
              >
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
                  <Image
                    src={current.mockup}
                    alt={`${current.label} screenshot`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={active === 0}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
