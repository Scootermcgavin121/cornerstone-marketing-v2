import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Package, ShoppingCart, DollarSign, FileText, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Construction Purchasing Software for Home Builders | Cornerstone PM",
  description:
    "Automate your construction purchasing with AI. Cornerstone PM handles vendor bids, purchase orders, budget tracking, and subcontractor management — all in plain English.",
};

const prompts = [
  {
    prompt: "Create a bid request for all Plumbing vendors for Bayshore Commons community",
    result:
      "Bid request drafted with community specs, scope details, plan set reference, and submission deadline. Portal invites sent to 8 active plumbing vendors in your system.",
    category: "Bid Request Drafter",
  },
  {
    prompt: "Scrape Home Depot for GE Profile refrigerators and add them to our parts catalog",
    result:
      "Found 6 GE Profile models. Added to parts catalog with SKUs, current prices, dimensions, and specs. Ready to link to design center options.",
    category: "Web Scraping + Parts Catalog",
  },
  {
    prompt: "Flag any homes where actual costs are more than 10% over budget",
    result:
      "3 homes flagged: 1421 Maple (framing +14%), 880 Lakeside (HVAC +11%), 33 Cedar Point (plumbing +18%). Breakdown by scope with recommended actions.",
    category: "Budget Variance Analysis",
  },
  {
    prompt: "Generate a Scope of Work for framing at 1234 Oak Street",
    result:
      "Professional SOW generated with home specs, lumber counts, structural notes, and completion timeline. Exported as PDF — ready to send to subs.",
    category: "SOW Generator",
  },
  {
    prompt: "Show me vendor performance — which subs have the best bid response rate?",
    result:
      "Scorecard across 24 vendors: Apex Framing 94% response rate (8/8 bids), City Plumbing 62% (5/8), Roberts Electric 100% (6/6). Win rates and avg bid amounts included.",
    category: "Vendor Performance Analysis",
  },
];

const purchasingAreas = [
  {
    icon: Package,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Parts Catalog",
    desc: "Search, create, bulk import, and update parts. Web scraping to pull current pricing from Home Depot, Ferguson, 84 Lumber, and more. Auto-linked to your design center.",
  },
  {
    icon: ShoppingCart,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "Vendor Management",
    desc: "Full vendor directory with performance scorecards. Bid response rates, win rates, insurance tracking, and contact history — all in one place.",
  },
  {
    icon: FileText,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Bid Management",
    desc: "Draft bid requests, send portal invites, compare normalized bids, and generate bid comparison reports. Foreman ranks vendors and recommends best value.",
  },
  {
    icon: DollarSign,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "Budget Tracking",
    desc: "Real-time budget vs. actual across all homes. Variance flags, scope-level breakdowns, and profitability reports by community — generated in plain English.",
  },
  {
    icon: BarChart3,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    title: "PO Generation",
    desc: "Generate professional purchase orders and Scope of Work documents from your real project data. Excel exports with company branding, ready to sign.",
  },
];

export default function AiConstructionPurchasingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(251,191,36,0.07),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
            <Package className="w-3.5 h-3.5" />
            AI CONSTRUCTION PURCHASING &middot; FOREMAN AI &middot; PRO PLAN
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            AI Construction Purchasing.<br />
            <span className="text-amber-400">No More PO Chaos.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Managing POs, vendor bids, and budgets across 15+ active homes is chaos. Things fall through the cracks. You don&apos;t know where money is going until the home closes. Foreman AI changes that — in plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <a
              href="#purchasing"
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
            { num: "15+", label: "Homes tracked", sub: "Budget vs. actual, real-time" },
            { num: "0", label: "Budget surprises", sub: "AI flags variances early" },
            { num: "60s", label: "Bid request", sub: "Draft and send in under a minute" },
            { num: "100%", label: "Vendor scorecard", sub: "Response rates, win rates" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-amber-400 mb-1">{s.num}</div>
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
            <h2 className="text-3xl font-black text-white mb-6">The purchasing mess every builder knows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  problem: "You don't know where POs stand",
                  detail: "Bids come in via email, text, and phone. Nobody has a complete picture of what's been sent, received, or awarded.",
                },
                {
                  problem: "Budget overruns surprise you",
                  detail: "By the time you notice framing went 15% over, it's too late to react. The damage is already done.",
                },
                {
                  problem: "Parts pricing is stale",
                  detail: "Your parts catalog has prices from 18 months ago. You're estimating based on old data and eating the difference.",
                },
                {
                  problem: "Vendor performance is guesswork",
                  detail: "You know which subs you prefer — but you can't actually tell your PM who responds to bids and who ghosts them.",
                },
              ].map((item) => (
                <div key={item.problem} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.problem}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foreman prompts */}
      <section id="purchasing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Plain English. Real results.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              This is what Foreman AI can do with your actual purchasing data right now.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {prompts.map((ex) => (
              <div
                key={ex.prompt}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 border-b border-slate-800/60">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                    <p className="text-white font-medium italic">&ldquo;{ex.prompt}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 font-black text-sm leading-none flex-shrink-0 mt-0.5">🪖</span>
                    <p className="text-slate-300 text-sm">{ex.result}</p>
                  </div>
                </div>
                <div className="px-5 py-2.5">
                  <span className="text-amber-400/60 text-xs font-semibold">{ex.category}</span>
                </div>
              </div>
            ))}
            {/* Fifth prompt spans full width on large screens */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/20 transition-all duration-300 overflow-hidden lg:col-span-2">
              <div className="p-5 border-b border-slate-800/60">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-amber-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                  <p className="text-white font-medium italic">&ldquo;{prompts[4]?.prompt}&rdquo;</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-slate-400 font-black text-sm leading-none flex-shrink-0 mt-0.5">🪖</span>
                  <p className="text-slate-300 text-sm">{prompts[4]?.result}</p>
                </div>
              </div>
              <div className="px-5 py-2.5">
                <span className="text-amber-400/60 text-xs font-semibold">{prompts[4]?.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What purchasing covers */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Everything purchasing covers</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Not a generic PO tool. Purpose-built for residential home builders managing multiple communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchasingAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className={`rounded-2xl border ${area.border} p-7`}>
                  <div className={`w-11 h-11 rounded-xl ${area.bg} border ${area.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${area.color} mb-3`}>{area.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-10 sm:p-14 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Stop losing margin to <span className="text-amber-400">purchasing chaos</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Foreman AI handles your bids, budgets, vendor tracking, and POs — in plain English. Beta is free for 2 years. Limited to 100 builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/25"
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
