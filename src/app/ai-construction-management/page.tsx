import Link from "next/link";
import { ArrowRight, Brain, Zap, Check, Building2, Cpu, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Foreman AI — AI Construction Management for Home Builders | Cornerstone PM",
  description:
    "Foreman AI is the AI agent built into Cornerstone PM — 83 purpose-built skills for home builder scheduling, purchasing, sales pipeline, and design center. Not a chatbot. Not bolted on.",
};

const skills = [
  {
    prompt: "Flag any homes where actual costs are more than 10% over budget",
    result: "3 homes flagged. Breakdown by scope category with variance amounts and recommended actions.",
    category: "Budget Variance Analysis",
  },
  {
    prompt: "Scrape Home Depot for GE Profile refrigerators and add them to our parts catalog",
    result: "Found 6 models, added to catalog with SKUs, prices, and specs. Ready to link to design options.",
    category: "Web Scraping + Parts",
  },
  {
    prompt: "Write an MLS description for The Addison at Bayside Preserve, emphasize the chef's kitchen",
    result: "250-word professional description generated from real room dimensions, upgrades, and community data.",
    category: "Document Generation",
  },
  {
    prompt: "Show me all homes in Coastal Ridge that are IN_PROGRESS with budget totals",
    result: "14 homes returned with budget summary, committed vs budgeted, and timeline — formatted as a table.",
    category: "Home Management",
  },
  {
    prompt: "Generate a punch list for the finishing trades at 1234 Oak Street",
    result: "Room-by-room QC checklist for Paint, Flooring, Trim, and Fixtures — exported as PDF.",
    category: "Document Generation",
  },
  {
    prompt: "Show me vendor performance — who's winning our bids and who's falling behind on insurance",
    result: "Vendor scorecard generated: bid response rates, win rates, insurance expiry alerts for 3 vendors.",
    category: "Vendor Performance Analysis",
  },
];

const capabilities = [
  {
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    title: "AI-Powered Analysis",
    count: 13,
    desc: "Budget variance detection, profitability reports, vendor performance scoring, pipeline analysis — Foreman reads your real data and gives you answers, not dashboards.",
  },
  {
    icon: Cpu,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Data Management",
    count: 17,
    desc: "Parts catalog, design center options, vendor management, home status, sales pipeline — all readable and writable in plain English.",
  },
  {
    icon: FileText,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "Document Generation",
    count: 11,
    desc: "SOWs, bid invitations, punch lists, MLS listing sheets, Excel exports, design center PDFs — professional documents in seconds.",
  },
  {
    icon: Zap,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    title: "System Intelligence",
    count: "6+",
    desc: "Persistent memory, bulk operations, duplicate prevention, smart data linking — the behaviors that make AI actually useful in a real building operation.",
  },
];

export default function AiConstructionManagementPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(59,130,246,0.07),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6">
            <Brain className="w-3.5 h-3.5" />
            FOREMAN AI · BY CORNERSTONE PM · 83+ skills
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Meet{" "}
            <span className="text-blue-400">Foreman AI™</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-300 max-w-3xl mx-auto mb-6 font-semibold">
            The AI construction agent built for home builders.
          </p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            <span className="text-white font-semibold">Foreman AI</span> is the brain inside Cornerstone PM — not a chatbot, not a project tool with AI bolted on. It reads and writes your real construction data, runs your schedule, generates documents, and answers in plain English.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            83 purpose-built skills. Knows what a floorplan is, what a spec level means, and what a punch list looks like for a home under construction. Built for home builders specifically — not adapted from generic commercial PM tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <Link
              href="/foreman"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See all 83+ skills
            </Link>
          </div>
        </div>
      </section>

      {/* What AI construction management actually means */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              What &ldquo;AI construction management&rdquo; actually means
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most tools calling themselves &ldquo;AI construction management software&rdquo; are generic project management platforms with a ChatGPT button stapled to the side. That&apos;s not AI construction management — that&apos;s AI theater.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">❌ AI bolted on</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">×</span>
                  Generic AI assistant with no access to your data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">×</span>
                  Has to be re-trained every session on who you are
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">×</span>
                  Can&apos;t create a PO, update a home status, or generate a real document
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">×</span>
                  Doesn&apos;t know your vendors, floorplans, or communities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">×</span>
                  &ldquo;Smart Gantt chart&rdquo; that still requires manual updates
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-6">
              <h3 className="text-lg font-bold text-emerald-400 mb-4">✓ AI built in</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Reads and writes your real construction data — parts, vendors, homes, budgets
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Persistent memory — learns your preferences, vendors, and margin targets over time
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Creates SOWs, bid requests, punch lists, and MLS sheets from real project data
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  Knows your communities, floorplans, spec levels, and subcontractor list
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  83 purpose-built skills — not generic AI features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why home builders specifically */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Why home builders specifically
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Commercial construction software manages projects. Home builder software manages lots, buyers, floorplans, options, and a pre-sale pipeline — and those are completely different problems.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Building2,
                color: "text-amber-400",
                title: "Lot tracking",
                desc: "Each home is a lot with a floorplan, spec level, buyer, and construction stage. Generic PM tools treat it like a generic task. We track it as a home.",
              },
              {
                icon: Zap,
                color: "text-blue-400",
                title: "Pre-sale workflow",
                desc: "Design center selections, option pricing, buyer decisions, and sales tasks happen before a shovel hits the ground. That pipeline is invisible to generic tools.",
              },
              {
                icon: Brain,
                color: "text-violet-400",
                title: "Subcontractor coordination",
                desc: "Scheduling 15 homes across 8 trades with rotating subcontractors isn&apos;t project management. It&apos;s a specialized workflow that requires purpose-built tools.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
                >
                  <Icon className={`w-8 h-8 ${item.color} mb-4`} />
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              83+ skills across 11 categories
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every skill is purpose-built for construction. Not adapted from a generic AI assistant.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className={`p-6 rounded-2xl border ${cap.border} bg-slate-900/60`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl ${cap.bg} border ${cap.border} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${cap.color}`} />
                    </div>
                    <div>
                      <div className="text-white font-bold">{cap.title}</div>
                      <div className={`text-xs ${cap.color} font-semibold`}>{cap.count} skills</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example prompts */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Plain English. Real results.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These are actual things you can say to Foreman AI right now.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {skills.map((ex) => (
              <div
                key={ex.prompt}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
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
                  <span className="text-blue-400/60 text-xs font-semibold">{ex.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "83", label: "Purpose-built skills", sub: "Not generic AI features" },
            { num: "4", label: "Skill categories", sub: "Data, Analysis, Docs, Intelligence" },
            { num: "110+", label: "Database tables", sub: "Full access to real data" },
            { num: "Plain English", label: "How you talk to it", sub: "No SQL. No configuration." },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-blue-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          Stop searching for &ldquo;AI construction management software.&rdquo;<br />
          <span className="text-amber-400">You found it.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Beta access is open now. Free for 2 years for early adopters. Limited to 100 builders.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-xl hover:bg-amber-300 transition-all duration-200 shadow-xl shadow-amber-500/30"
        >
          Get Beta Access <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-600 text-sm mt-4">No credit card required · 2 years free · Limited to 100 builders</p>
      </section>

      <Footer />
    </div>
  );
}
