"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Calendar,
  ShoppingCart,
  TrendingUp,
  Palette,
  FileText,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Construction Scheduling",
    description:
      "Visual Gantt-style scheduling with subcontractor assignment and automated conflict detection. Never double-book a framer again.",
    icon: <Calendar className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-600/10 border border-cyan-500/20 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-5 gap-1 p-3 w-full">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="h-3 rounded-sm"
              style={{
                background: i % 3 === 0 ? "rgba(6,182,212,0.6)" : i % 2 === 0 ? "rgba(6,182,212,0.3)" : "rgba(51,65,85,0.5)",
                width: `${Math.random() * 60 + 40}%`,
              }}
            />
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Purchasing & Budgets",
    description:
      "Track every PO, invoice, and budget line in real time. Know your margin before the slab is poured.",
    icon: <ShoppingCart className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/20 flex items-end justify-between px-4 pb-3">
        {[65, 80, 45, 90, 70, 85, 55].map((h, i) => (
          <div
            key={i}
            className="w-5 rounded-t-sm bg-gradient-to-t from-emerald-600 to-emerald-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "Sales Pipeline",
    description:
      "From lead to signed contract — track every prospect, proposal, and signed buyer in one clean view.",
    icon: <TrendingUp className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 border border-violet-500/20 flex items-center px-4 gap-2">
        {["Lead", "Proposal", "Review", "Signed"].map((stage, i) => (
          <div key={stage} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-lg text-xs font-medium py-1.5 text-center"
              style={{
                background: i === 3 ? "rgba(139,92,246,0.4)" : "rgba(139,92,246,0.15)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: i === 3 ? "rgb(167,139,250)" : "rgb(107,70,193)",
                fontSize: "0.6rem",
              }}
            >
              {stage}
            </div>
            <div className="text-xs text-slate-500 font-bold">{[4, 2, 3, 1][i]}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Design Center",
    description:
      "Capture buyer selections, manage upgrades, and price them in real time. No more spreadsheets for flooring choices.",
    icon: <Palette className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-600/10 border border-rose-500/20 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2 p-3">
          {["bg-slate-700", "bg-stone-600", "bg-amber-700", "bg-slate-500", "bg-neutral-600", "bg-stone-800", "bg-amber-600", "bg-slate-800"].map(
            (color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg ${color} ${i === 2 ? "ring-2 ring-rose-400 ring-offset-1 ring-offset-slate-900" : ""}`}
              />
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Permitting",
    description:
      "Track every permit status, expiry date, and inspection from one dashboard. Stop chasing city hall.",
    icon: <FileText className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20 flex flex-col justify-center px-4 gap-2">
        {[
          { label: "Foundation Permit", status: "Approved", color: "text-emerald-400" },
          { label: "Framing Inspection", status: "Pending", color: "text-amber-400" },
          { label: "Electrical Rough-in", status: "Scheduled", color: "text-cyan-400" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="text-xs text-slate-400">{item.label}</span>
            <span className={`text-xs font-semibold ${item.color}`}>{item.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Buyer Portal",
    description:
      "Give your buyers a professional portal to view progress, approve selections, and communicate — they'll feel like VIPs.",
    icon: <Users className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/20 flex flex-col justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
          <div>
            <div className="text-xs font-semibold text-slate-200">Sarah & Mike Johnson</div>
            <div className="text-xs text-slate-500">Lot 14 — The Reserve</div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Construction Progress</span>
            <span className="text-sky-400 font-bold">68%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-sky-500 to-blue-400 rounded-full" />
          </div>
        </div>
      </div>
    ),
    className: "md:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-4">
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Everything a builder needs.
            <br />
            <span className="text-cyan-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Six integrated modules — from first lead to final walkthrough.
            Built by builders who got tired of paying $499/mo for software that does too much.
          </p>
        </div>

        <BentoGrid className="gap-4">
          {features.map((feature) => (
            <BentoGridItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
