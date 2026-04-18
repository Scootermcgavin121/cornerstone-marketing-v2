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
      "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system with auto-cascade — move one task and everything downstream adjusts automatically. 17 pre-built templates including 7 foundation types. Cascade email notifications to subs in 4 tiers.",
    icon: <Calendar className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-600/10 border border-cyan-500/20 flex items-center justify-center overflow-hidden">
        <div className="w-full px-3 space-y-1.5">
          {[
            { label: "Foundation", width: "85%", color: "rgba(6,182,212,0.7)" },
            { label: "Framing", width: "60%", color: "rgba(6,182,212,0.5)" },
            { label: "Rough-Ins", width: "40%", color: "rgba(6,182,212,0.35)" },
            { label: "Finishes", width: "20%", color: "rgba(51,65,85,0.5)" },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2">
              <span className="text-[9px] text-slate-500 w-14 shrink-0">{row.label}</span>
              <div className="flex-1 h-3 rounded-sm bg-slate-800/60 overflow-hidden">
                <div className="h-full rounded-sm" style={{ width: row.width, background: row.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Purchasing & Budgets",
    description:
      "200+ part catalog with real pricing. Auto-generate ~97 budget lines from floorplan takeoffs when structural options are locked. Full PO lifecycle: Draft → Sent → Acknowledged → Invoiced → Paid. Bid management with side-by-side vendor comparison.",
    icon: <ShoppingCart className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/20 flex flex-col justify-center px-4 gap-1.5">
        {[
          { label: "Base Budget", val: "$187,400", color: "text-emerald-400" },
          { label: "Change Orders", val: "+$8,200", color: "text-amber-400" },
          { label: "POs Generated", val: "$152,300", color: "text-cyan-400" },
          { label: "Variance", val: "-$26,900", color: "text-slate-400" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="text-[10px] text-slate-500">{item.label}</span>
            <span className={`text-[10px] font-bold ${item.color}`}>{item.val}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Sales Pipeline",
    description:
      "New home sale in under 60 seconds — select community, floorplan, elevation, buyer info, structural options, and submit. Auto-generates a 9-step sales checklist and a full budget from takeoffs. Real-time pricing matrix with promotions and branded PDF price sheets.",
    icon: <TrendingUp className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 border border-violet-500/20 flex items-center px-3 gap-1.5">
        {["Contract", "Deposit", "Options", "Budget", "Permit"].map((stage, i) => (
          <div key={stage} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded text-center py-1.5"
              style={{
                background: i < 3 ? "rgba(139,92,246,0.4)" : i === 3 ? "rgba(139,92,246,0.2)" : "rgba(51,65,85,0.3)",
                border: "1px solid rgba(139,92,246,0.25)",
                fontSize: "0.55rem",
                color: i < 3 ? "rgb(196,181,253)" : "rgb(107,70,193)",
              }}
            >
              {stage}
            </div>
            <div className="text-[9px] text-slate-500 font-bold">{i < 3 ? "✓" : i === 3 ? "→" : "…"}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Design Center",
    description:
      "Room-by-room selection walkthrough driven by takeoff quantities. Unlimited spec levels — Standard, Upgrade, Premium, or custom tiers. Buyers pick flooring, cabinets, countertops, and fixtures with real-time upgrade pricing. Designer collections with curated bundles.",
    icon: <Palette className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-600/10 border border-rose-500/20 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2 p-3">
          {[
            { bg: "bg-slate-700", ring: false },
            { bg: "bg-stone-600", ring: false },
            { bg: "bg-amber-700", ring: true },
            { bg: "bg-slate-500", ring: false },
            { bg: "bg-neutral-600", ring: false },
            { bg: "bg-stone-800", ring: false },
            { bg: "bg-amber-600", ring: false },
            { bg: "bg-slate-800", ring: false },
          ].map((swatch, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg ${swatch.bg} ${swatch.ring ? "ring-2 ring-rose-400 ring-offset-1 ring-offset-slate-900" : ""}`}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Permitting",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times. Phase-based locking prevents downstream construction from starting until permits clear. PA workflow, permit gate toggle, and buyer portal invite. Track every permit status from one dashboard.",
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
      "Magic link access — no passwords needed. 20-phase construction milestone carousel with real job site photos. Schedule visibility, document access, selection review, and direct messaging with PMs. Buyers stay informed and excited from contract to keys.",
    icon: <Users className="w-5 h-5" />,
    header: (
      <div className="h-32 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/20 flex flex-col justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
          <div>
            <div className="text-xs font-semibold text-slate-200">Sarah &amp; Mike Johnson</div>
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
            Built for home builders who got tired of paying $499/mo for software that does too much.
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
