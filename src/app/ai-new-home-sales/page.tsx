import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Users, FileText, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI for New Home Sales | Cornerstone PM",
  description:
    "Cornerstone PM's AI manages your entire new home sales pipeline — from first inquiry to contract. Foreman AI tracks every buyer, flags stalled deals, and generates MLS listings automatically.",
};

const prompts = [
  {
    prompt: "Show me all buyers in Coastal Ridge who've been in the negotiating stage for more than 14 days",
    result:
      "Flagged 3 buyers: Johnson family (18 days, last contact 4/12), Patel inquiry (21 days, agent Sarah), Chen lead (16 days, no follow-up logged). Recommend immediate outreach.",
    category: "Sales Pipeline Analysis",
  },
  {
    prompt: "Generate an MLS description for The Addison at Bayside Preserve, emphasize chef's kitchen and waterfront views",
    result:
      "250-word professional MLS description generated from real room data: chef\u2019s kitchen with 42-inch uppers, waterfront lot orientation, 10-ft ceilings, community amenities. Ready to publish.",
    category: "Sales Description Generator",
  },
  {
    prompt: "What's our average days-to-contract across all communities this quarter?",
    result:
      "Q1 average: 34 days pre-inquiry to contract. By community: Coastal Ridge 28 days, Bayside Preserve 41 days, Oak Creek 31 days. Bayside trending longer — 2 stalled deals in negotiation.",
    category: "Pipeline Analysis",
  },
  {
    prompt: "List all sales tasks due this week across every home",
    result:
      "14 tasks due across 9 homes: 4 follow-up calls, 3 design center appointments to schedule, 4 contract reviews pending, 3 buyer portal invites unsent. Assigned agents listed.",
    category: "Sales Task Management",
  },
];

const pipelineStages = [
  {
    stage: "Pre-Inquiry",
    color: "text-slate-400",
    dot: "bg-slate-500",
    desc: "Lead captured, community interest tracked, lot preferences noted",
  },
  {
    stage: "Active Prospect",
    color: "text-blue-400",
    dot: "bg-blue-500",
    desc: "Tours scheduled, floorplan options presented, buyer questions tracked",
  },
  {
    stage: "Design Center",
    color: "text-violet-400",
    dot: "bg-violet-500",
    desc: "Selections in progress, upgrade pricing, option deadlines tracked",
  },
  {
    stage: "Negotiating",
    color: "text-amber-400",
    dot: "bg-amber-500",
    desc: "Contract terms, incentives, stalled deal detection, follow-up tasks",
  },
  {
    stage: "Under Contract",
    color: "text-emerald-400",
    dot: "bg-emerald-500",
    desc: "Contract executed, milestone notifications, construction updates to buyer",
  },
  {
    stage: "Closed",
    color: "text-green-400",
    dot: "bg-green-500",
    desc: "Closed home data, margin analysis, referral tracking",
  },
];

const features = [
  {
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Full Pipeline Visibility",
    desc: "Every buyer across every community in one place. Know exactly where each deal stands without digging through spreadsheets or calling your sales agent.",
  },
  {
    icon: TrendingUp,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Stalled Deal Detection",
    desc: "Foreman AI flags buyers who've been stuck in a stage too long. No more deals falling through the cracks because nobody followed up.",
  },
  {
    icon: FileText,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "MLS Listings on Demand",
    desc: "Generate professional MLS descriptions from your real floorplan data. Room dimensions, finishes, community amenities — auto-populated and ready to publish.",
  },
  {
    icon: BarChart3,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Sales Task Automation",
    desc: "Assign follow-up tasks, track completion, and get a cross-community task list every morning. Your sales team always knows what's due today.",
  },
];

export default function AiNewHomeSalesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(139,92,246,0.08),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            AI NEW HOME SALES &middot; FOREMAN AI &middot; PRO PLAN
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            AI That Runs Your<br />
            <span className="text-violet-400">New Home Sales Pipeline</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Most builders track their sales pipeline on a whiteboard or in Excel. They lose buyers in negotiation, miss follow-ups, and can&apos;t answer &ldquo;where are we with the Johnsons?&rdquo; without making three calls. Foreman AI fixes that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-violet-500 text-white font-bold text-lg hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <a
              href="#pipeline"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "100%", label: "Pipeline visibility", sub: "Every buyer, every community" },
            { num: "0", label: "Missed follow-ups", sub: "AI flags stalled deals" },
            { num: "30s", label: "MLS description", sub: "Generated from real data" },
            { num: "∞", label: "Communities tracked", sub: "No per community limits" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-violet-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-8 sm:p-12">
            <h2 className="text-3xl font-black text-white mb-6">The pipeline problem every builder knows</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                You&apos;re managing 15 active homes, 8 prospects in various stages, and 3 communities with different floorplan options. Your sales agent keeps a spreadsheet. You keep a whiteboard. Your office manager keeps notes in her head.
              </p>
              <p>
                Then the Johnsons go quiet for three weeks. Nobody noticed. The Patels signed with a competitor because your follow-up fell through the cracks. And you have no idea what your average days-to-contract is because nobody has ever added that up.
              </p>
              <p className="text-white font-semibold">
                That&apos;s not a sales problem. That&apos;s a visibility problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foreman prompts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Plain English. Real results.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              This is what Foreman AI can do with your actual sales data right now.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {prompts.map((ex) => (
              <div
                key={ex.prompt}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 border-b border-slate-800/60">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-violet-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                    <p className="text-white font-medium italic">&ldquo;{ex.prompt}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 font-black text-sm leading-none flex-shrink-0 mt-0.5">🪖</span>
                    <p className="text-slate-300 text-sm">{ex.result}</p>
                  </div>
                </div>
                <div className="px-5 py-2.5">
                  <span className="text-violet-400/60 text-xs font-semibold">{ex.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Everything your sales pipeline needs</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Built for residential home builders — not generic CRM software adapted for construction.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className={`rounded-2xl border ${f.border} p-8`}>
                  <div className={`w-12 h-12 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${f.color} mb-3`}>{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pipeline stages */}
      <section id="pipeline" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">The full sales pipeline, tracked</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From first inquiry to closed home — every stage is visible, every buyer is tracked.
            </p>
          </div>
          <div className="space-y-4">
            {pipelineStages.map((stage, i) => (
              <div key={stage.stage} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 flex-shrink-0 w-48">
                  <div className={`w-3 h-3 rounded-full ${stage.dot} flex-shrink-0`} />
                  <span className={`font-bold text-sm ${stage.color}`}>{stage.stage}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-violet-500/5 border border-violet-500/20 p-10 sm:p-14 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Stop losing buyers to <span className="text-violet-400">bad follow-up</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Foreman AI tracks every buyer, flags every stalled deal, and generates your MLS listings automatically. Beta is free for 2 years — limited to 100 builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-500 text-white font-bold text-lg hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/25"
              >
                Get Beta Access <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/foreman"
                className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                See all 47 Foreman skills
              </Link>
            </div>
            <p className="text-slate-600 text-sm mt-6">Pro plan · $499/mo · Unlimited users · 2 years free in beta</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
