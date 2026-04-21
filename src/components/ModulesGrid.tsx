"use client";
import React from "react";
import Link from "next/link";
import { Calendar, ShoppingCart, TrendingUp, Palette, FileText, Users, Zap, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Calendar,
    name: "Construction Scheduling",
    desc: "Gantt charts, auto-cascade dependencies, vendor notifications, 17 pre-built templates.",
    href: "/construction",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: ShoppingCart,
    name: "Purchasing & Budgets",
    desc: "Bid management, POs, auto-budget generation, design center integration.",
    href: "/purchasing",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: TrendingUp,
    name: "Sales Pipeline",
    desc: "New home sale in 60 seconds. Floorplan selection, options, incentives, buyer tracking.",
    href: "/sales",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: Palette,
    name: "Design Center",
    desc: "Room-by-room selections, spec levels, designer collections, selections PDF export.",
    href: "/design",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-500/40",
  },
  {
    icon: FileText,
    name: "Permitting",
    desc: "Permit sequences, PA workflow, status tracking, auto-notifications when permits clear.",
    href: "/features#permitting",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: Users,
    name: "Homeowner Portal",
    desc: "Real-time milestone updates, job site photos, warranty tracking, no inbox overload.",
    href: "/features#portal",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20 hover:border-pink-500/40",
  },
  {
    icon: Zap,
    name: "AI Blueprint Takeoff",
    desc: "Upload a floor plan PDF. AI extracts rooms, fixtures, and material scopes in under 60 seconds.",
    href: "/ai-takeoff",
    color: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/30 hover:border-violet-400/60",
    badge: "Full Bundle",
  },
];

export function ModulesGrid() {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Platform Modules
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            The complete platform
            <br />
            <span className="text-cyan-400">built for home builders.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six integrated modules — from first lead to final walkthrough. Everything NEWSTAR does, at a price that doesn&apos;t require a board approval.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <Link
                key={m.name}
                href={m.href}
                className={`group relative p-6 rounded-2xl bg-slate-900/60 border ${m.border} transition-all duration-300 hover:-translate-y-0.5`}
              >
                {m.badge && (
                  <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-bold">
                    {m.badge}
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl ${m.bg} border ${m.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{m.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{m.desc}</p>
                <div className={`flex items-center gap-1 text-sm font-semibold ${m.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            View all features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
