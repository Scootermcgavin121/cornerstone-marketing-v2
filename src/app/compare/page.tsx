import Link from "next/link";
import { Check, X, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Cornerstone PM vs NEWSTAR, Buildertrend, CoConstruct — Compare Home Builder Software",
  description:
    "See how Cornerstone PM stacks up against NEWSTAR, BuildPro, Buildertrend, and CoConstruct. Less cost, faster setup, built specifically for production home builders.",
};

const competitors = ["Cornerstone PM", "NEWSTAR / BuildPro", "Buildertrend", "CoConstruct"];

const YES = "yes";
const NO = "no";
const PARTIAL = "partial";

type CellValue = typeof YES | typeof NO | typeof PARTIAL | string;

const rows: { category: string; features: { label: string; values: CellValue[] }[] }[] = [
  {
    category: "Pricing & Setup",
    features: [
      { label: "Monthly pricing (no enterprise contract)", values: [YES, NO, YES, YES] },
      { label: "Setup cost", values: ["Free beta", "$25,000+", "$0", "$0"] },
      { label: "Implementation time", values: ["Days", "6-12 months", "Weeks", "Weeks"] },
      { label: "Built for production home builders", values: [YES, YES, PARTIAL, PARTIAL] },
      { label: "Starting price", values: ["$149/mo", "$500+/mo", "$499/mo", "$399/mo"] },
    ],
  },
  {
    category: "Data Migration & Imports",
    features: [
      { label: "AI Migration Wizard (Live in Beta) — drop your files, the wizard does the rest", values: [YES, NO, NO, NO] },
      { label: "23 dedicated CSV import endpoints (vendors, homes, communities, templates, scopes, takeoffs, parts, budgets...)", values: [YES, NO, PARTIAL, PARTIAL] },
      { label: "AI-powered bid import (parse any vendor format — Excel, PDF, scanned, handwritten)", values: [YES, NO, NO, NO] },
      { label: "Self-serve migration (no consultant required)", values: [YES, NO, PARTIAL, PARTIAL] },
      { label: "Migration timeline", values: ["Days", "3-12 months", "1-2 weeks", "1-2 weeks"] },
      { label: "Migration cost", values: ["$0", "$5,000-$20,000", "$0-$2,500", "$0-$2,500"] },
    ],
  },
  {
    category: "Construction Scheduling",
    features: [
      { label: "Gantt charts", values: [YES, YES, YES, NO] },
      { label: "Auto-cascading task dependencies", values: [YES, YES, PARTIAL, NO] },
      { label: "Vendor confirmation via email (no login)", values: [YES, NO, PARTIAL, PARTIAL] },
      { label: "Template system per floorplan", values: [YES, YES, PARTIAL, NO] },
      { label: "Foundation-aware scheduling templates", values: [YES, YES, NO, NO] },
      { label: "Weekday-only scheduling", values: [YES, PARTIAL, YES, NO] },
      { label: "Permit gate system", values: [YES, YES, NO, NO] },
    ],
  },
  {
    category: "Sales Pipeline",
    features: [
      { label: "New home sale in under 60 seconds", values: [YES, PARTIAL, NO, NO] },
      { label: "Floorplan + elevation pricing matrix", values: [YES, YES, NO, NO] },
      { label: "Structural options with real-time pricing", values: [YES, YES, NO, NO] },
      { label: "Sales incentives & promotions", values: [YES, YES, PARTIAL, NO] },
      { label: "Auto-budget generation on sale creation", values: [YES, YES, NO, NO] },
      { label: "Built-in CRM", values: [YES, YES, YES, YES] },
    ],
  },
  {
    category: "Purchasing & Budgets",
    features: [
      { label: "Bid management", values: [YES, YES, YES, PARTIAL] },
      { label: "Purchase orders", values: [YES, YES, YES, PARTIAL] },
      { label: "Budget hierarchy (builder to home)", values: [YES, YES, PARTIAL, NO] },
      { label: "Auto-budget from structural options", values: [YES, YES, NO, NO] },
      { label: "Side-by-side bid comparison", values: [YES, YES, PARTIAL, NO] },
      { label: "Payments tracking (check/ACH/wire/card/cash)", values: [YES, YES, PARTIAL, NO] },
      { label: "Retainage tracking on POs", values: [YES, NO, PARTIAL, NO] },
      { label: "Cost type classifications (labor/material/subcontract)", values: [YES, YES, PARTIAL, NO] },
      { label: "QuickBooks sync fields (qboId)", values: [YES, NO, PARTIAL, YES] },
      { label: "Custom fields on any entity", values: [YES, YES, NO, NO] },
      { label: "REST API with scoped keys + webhooks", values: [YES, YES, NO, NO] },
    ],
  },
  {
    category: "Design Center & Options",
    features: [
      { label: "Room-by-room selections", values: [YES, YES, PARTIAL, YES] },
      { label: "Spec level management", values: [YES, YES, NO, PARTIAL] },
      { label: "Options engine with margin tracking", values: [YES, YES, NO, NO] },
      { label: "Selections PDF export", values: [YES, YES, PARTIAL, YES] },
      { label: "MLS listing sheet from live project data", values: [YES, NO, NO, NO] },
      { label: "Buyer online selections portal", values: [YES, PARTIAL, PARTIAL, YES] },
    ],
  },
  {
    category: "AI & Innovation",
    features: [
      { label: "AI bid import (upload any vendor format — Excel, PDF, scanned, handwritten)", values: [YES, NO, NO, NO] },
      { label: "AI Blueprint Takeoff (PDF to material list)", values: [YES, NO, NO, NO] },
      { label: "AI agent with 47 purpose-built construction skills", values: [YES, NO, NO, NO] },
      { label: "Standard REST API (no custom query language)", values: [YES, YES, NO, NO] },
      { label: "30 webhook event types with HMAC signing", values: [YES, YES, NO, NO] },
      { label: "Vendor self-registration portal", values: [YES, YES, NO, NO] },
      { label: "MLS listing sheet auto-generated by AI", values: [YES, NO, NO, NO] },
      { label: "File export (CSV, JSON, styled PDF) via AI command", values: [YES, NO, NO, NO] },
      { label: "AI chatbot support", values: [YES, NO, NO, NO] },
      { label: "Modern web app (no install required)", values: [YES, PARTIAL, YES, YES] },
      { label: "Mobile responsive", values: [YES, NO, YES, YES] },
    ],
  },
  {
    category: "Homeowner Experience",
    features: [
      { label: "Homeowner portal with milestones", values: [YES, PARTIAL, YES, YES] },
      { label: "Job site photo uploads", values: [YES, NO, YES, YES] },
      { label: "Warranty tracking", values: [YES, YES, NO, PARTIAL] },
      { label: "2-year warranty management", values: [YES, YES, NO, NO] },
    ],
  },
];

function Cell({ value, isCornerstone }: { value: CellValue; isCornerstone: boolean }) {
  if (value === YES) {
    return (
      <td className={`px-4 py-3 text-center ${isCornerstone ? "bg-cyan-500/5" : ""}`}>
        <Check className={`w-5 h-5 mx-auto ${isCornerstone ? "text-cyan-400" : "text-slate-400"}`} />
      </td>
    );
  }
  if (value === NO) {
    return (
      <td className={`px-4 py-3 text-center ${isCornerstone ? "bg-cyan-500/5" : ""}`}>
        <X className="w-5 h-5 mx-auto text-slate-700" />
      </td>
    );
  }
  if (value === PARTIAL) {
    return (
      <td className={`px-4 py-3 text-center ${isCornerstone ? "bg-cyan-500/5" : ""}`}>
        <Minus className="w-4 h-4 mx-auto text-slate-600" />
      </td>
    );
  }
  return (
    <td className={`px-4 py-3 text-center text-sm font-semibold ${isCornerstone ? "bg-cyan-500/5 text-cyan-400" : "text-slate-400"}`}>
      {value}
    </td>
  );
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Software Comparison
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Production builder software<br />
            <span className="text-cyan-400">without the price tag.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            NEWSTAR and BuildPro were built for large-volume national builders with 6-figure implementation budgets. Cornerstone gives you the same power &mdash; without the implementation nightmare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Request Early Access &rarr;
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>

      {/* JobTread callout */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900/60 border border-amber-500/20 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-black text-sm">vs</span>
              </div>
              <div>
                <h2 className="text-xl font-black text-white mb-1">What about JobTread?</h2>
                <p className="text-slate-400 text-sm">JobTread is great software &mdash; for contractors. It&apos;s not built for home builders.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">JobTread</div>
                {[
                  "$199/mo base + $20/user (10 users = $380/mo)",
                  "No lot or community management",
                  "No floorplan pricing engine",
                  "No pre-sale buyer workflow",
                  "Selections are change-order based (post-contract)",
                  "AI is \"bring your own ChatGPT\" middleware",
                  "Built for remodelers and general contractors",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <div className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-3">Cornerstone PM</div>
                {[
                  "$149/mo flat &mdash; unlimited users, no per-seat fees",
                  "Full lot, community &amp; multi-community management",
                  "Floorplan base price + options engine = contract price",
                  "Pre-sale workflow: lead &rarr; options &rarr; contract &rarr; close",
                  "Design Center selections built into the sale &mdash; not change orders",
                  "5 native AI agents — Foreman AI (47 skills), Blueprint AI, Bid Import AI, MLS Generator, Support (Pro plan, $499/mo flat)",
                  "Built exclusively for production home builders",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <p className="text-slate-500 text-sm italic">&ldquo;JobTread is for contractors. Cornerstone is for home builders. Different business model, different workflow, different software.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: "$149/mo", label: "Starting price", sub: "vs $499+ elsewhere" },
            { num: "Days", label: "Setup time", sub: "vs 6-12 months for NEWSTAR" },
            { num: "$0", label: "Implementation cost", sub: "vs $25,000+ for BuildPro" },
            { num: "110+", label: "Database tables", sub: "and growing — built for construction, not adapted" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-cyan-400 mb-1">{s.num}</div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto overflow-y-visible rounded-2xl border border-slate-800">
            <table className="w-full text-sm border-separate border-spacing-0">
              <thead className="sticky top-16 z-30">
                <tr>
                  <th className="px-4 py-4 text-left text-slate-400 font-semibold w-64 bg-slate-950 border-b border-slate-800 backdrop-blur-sm">Feature</th>
                  {competitors.map((c, i) => (
                    <th
                      key={c}
                      className={`px-4 py-4 text-center font-bold text-sm border-b border-slate-800 backdrop-blur-sm ${
                        i === 0
                          ? "bg-cyan-500/10 text-cyan-300 border-x border-cyan-500/20"
                          : "bg-slate-950 text-slate-400"
                      }`}
                    >
                      {i === 0 && (
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold mb-1 block">
                          Best Value
                        </div>
                      )}
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((section) => (
                  <>
                    <tr key={section.category} className="bg-slate-900/80">
                      <td colSpan={5} className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature, fi) => (
                      <tr
                        key={feature.label}
                        className={`border-t border-slate-800/60 hover:bg-slate-900/40 transition-colors ${
                          fi % 2 === 0 ? "" : "bg-slate-900/20"
                        }`}
                      >
                        <td className="px-4 py-3 text-slate-300">{feature.label}</td>
                        {feature.values.map((val, vi) => (
                          <Cell key={vi} value={val} isCornerstone={vi === 0} />
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-6 mt-4 text-xs text-slate-500 justify-center">
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-cyan-400" /> Included</span>
            <span className="flex items-center gap-1.5"><Minus className="w-3.5 h-3.5 text-slate-600" /> Partial / limited</span>
            <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5 text-slate-700" /> Not available</span>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to switch?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Beta is free for 2 years. Limited to 100 builders. No implementation fees, no long-term contracts.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30"
        >
          Request Early Access &rarr;
        </Link>
      </section>
    </div>
  );
}
