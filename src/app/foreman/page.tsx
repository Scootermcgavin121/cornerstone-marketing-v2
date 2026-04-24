import React from "react";
import Link from "next/link";
import { Check, MessageSquare, Zap, Bot, Database, Globe, BarChart3, FileText, ShoppingCart, Home, Users, Layers } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreman AI — Your AI Construction Agent | Cornerstone PM",
  description:
    "27 purpose-built skills. Not a generic chatbot — Foreman reads and writes real data in your account. Parts, vendors, homes, budgets, MLS listings, exports, and more.",
};

const skillGroups = [
  {
    label: "Parts & Catalog",
    icon: ShoppingCart,
    count: 7,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    skills: [
      "Search parts catalog",
      "Create a single part",
      "Bulk-create multiple parts at once",
      "Update existing parts",
      "Delete parts",
      "Suggest design center options from unlinked parts",
      "Generate files (CSV, PDF, styled reports)",
    ],
  },
  {
    label: "Design Center",
    icon: Layers,
    count: 5,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    skills: [
      "List all design options",
      "List option categories",
      "Create a single option",
      "Bulk-create multiple options",
      "Suggest options from parts catalog (auto-link)",
    ],
  },
  {
    label: "Homes & Budgets",
    icon: Home,
    count: 3,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: [
      "List all homes with status",
      "Update home status and assignments",
      "View home budget totals",
    ],
  },
  {
    label: "Vendors & Bids",
    icon: Users,
    count: 3,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    skills: [
      "List all vendors",
      "Create a new vendor",
      "Search vendor bids",
    ],
  },
  {
    label: "Sales & Marketing",
    icon: FileText,
    count: 3,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: [
      "Generate AI-written MLS listing descriptions",
      "Update floorplan details",
      "Generate PDFs, CSVs, and styled reports",
    ],
  },
  {
    label: "Data Intelligence",
    icon: Database,
    count: 6,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: [
      "List communities",
      "List floorplans",
      "List scopes",
      "List option classes",
      "List users",
      "View org stats",
    ],
  },
  {
    label: "Utility",
    icon: Globe,
    count: 3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: [
      "Scrape any website (Home Depot, Ferguson, suppliers)",
      "Save notes to persistent org memory",
      "Screenshot analysis — paste an image, get answers",
    ],
  },
];

const examplePrompts = [
  {
    prompt: "Scrape Home Depot for GE Profile refrigerators and add them to our parts catalog",
    icon: <Globe className="w-5 h-5 text-amber-400" />,
    result: "Fetches product names, SKUs, and prices — creates parts automatically",
  },
  {
    prompt: "Scan our parts catalog and suggest design center options we should create",
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    result: "Finds unlinked parts and bulk-creates matching design options",
  },
  {
    prompt: "Show me all homes in Coastal Ridge that are in progress with their budget totals",
    icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
    result: "Chains listHomes + getHomeBudget, returns a formatted table",
  },
  {
    prompt: "Generate an MLS listing for 1234 Oak Street",
    icon: <FileText className="w-5 h-5 text-amber-400" />,
    result: "Pulls community info, room dimensions, upgrades, selections — writes the listing",
  },
  {
    prompt: "Create a vendor called ABC Plumbing with scope Plumbing",
    icon: <Bot className="w-5 h-5 text-amber-400" />,
    result: "Creates the vendor record in your account instantly",
  },
  {
    prompt: "Export all parts in the Appliances scope to a CSV",
    icon: <Database className="w-5 h-5 text-amber-400" />,
    result: "Searches parts, generates a downloadable CSV file",
  },
];

const roles = ["Admin", "Purchasing Manager", "Sales Manager"];

export default function ForemanPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(251,191,36,0.12),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" />
            37-skill AI AGENT &middot; PURPOSE-BUILT FOR CONSTRUCTION
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            Meet{" "}
            <span className="text-amber-400">Foreman AI</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-slate-300 mb-6">Your AI Construction Agent</p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            Type a command. Foreman executes it. Not a generic chatbot &mdash; 27 purpose-built skills that read and write real data in your account.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            No other construction platform has an AI agent that actually creates parts, vendors, and options &mdash; or generates MLS listings from live project data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5">
              Request Early Access &rarr;
            </Link>
            <Link href="/ai-agents" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See All 3 AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Key angles */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Reads AND writes", desc: "Creates parts, options, vendors, and listings — it doesn't just answer questions, it takes action." },
            { title: "27 purpose-built skills", desc: "Every skill is a custom tool designed for construction workflows. Not a generic chatbot with a system prompt." },
            { title: "Persistent memory", desc: "Remembers your preferences, notes, and context across sessions. Gets smarter the more you use it." },
          ].map((a) => (
            <div key={a.title} className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-center">
              <h3 className="text-amber-400 font-black text-lg mb-2">{a.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grouped skills */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">37 skills. One Agent.</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Every skill is a purpose-built tool — not a prompt. Foreman knows your entire operation: parts, vendors, homes, budgets, design center, MLS listings, and more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className={`p-5 rounded-2xl bg-slate-900/60 border ${group.border} hover:border-opacity-60 transition-all duration-300`}>
                  <div className={`w-10 h-10 rounded-xl ${group.bg} border ${group.border} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${group.color}`} />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-black ${group.color}`}>{group.label}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${group.bg} ${group.color}`}>{group.count}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {group.skills.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className={`w-3.5 h-3.5 ${group.color} flex-shrink-0 mt-0.5`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example prompts with results */}
      <section className="py-16 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">See it in action</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Real commands. Real results. Foreman chains multiple tools together to answer complex questions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {examplePrompts.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 transition-all duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-200 text-sm font-medium italic">&ldquo;{item.prompt}&rdquo;</p>
                  </div>
                </div>
                <div className="ml-8 flex items-start gap-2">
                  <span className="text-amber-400 text-xs font-bold flex-shrink-0 mt-0.5">RESULT</span>
                  <p className="text-slate-500 text-xs">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MLS Spotlight */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                <FileText className="w-3.5 h-3.5" />
                Standout Skill
              </div>
              <h2 className="text-3xl font-black text-white mb-4">MLS Listing Generator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Ask Foreman to generate an MLS listing for any home. It pulls community info, room dimensions (from Blueprint AI), lot size, structural upgrades, and design selections &mdash; then writes polished, professional copy.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                No other construction PM software can do this. What used to take 2 hours of copy-pasting now takes 10 seconds.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 border-l-4 border-l-amber-500">
                <p className="text-slate-300 text-sm italic">&ldquo;Generate an MLS listing for 1234 Oak Street&rdquo;</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">What gets included:</p>
              {[
                "Property description with all upgrades called out",
                "Design center selections (flooring, countertops, cabinets, fixtures)",
                "Structural options (tray ceilings, bonus rooms, extended driveway)",
                "Room dimensions extracted by Blueprint AI",
                "Community amenities and builder info",
                "Professional formatting ready for MLS submission",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-2">
                <Link href="/listing-sheet" className="text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
                  See the full MLS feature &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Available To</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {roles.map((role) => (
              <span key={role} className="px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold">
                {role}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="rounded-2xl bg-slate-900/60 border border-amber-500/20 p-8 space-y-4">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Pro Plan</div>
              <div className="text-4xl font-black text-amber-400 mt-1">$499<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-4 space-y-2 text-sm text-slate-400">
              <div className="flex justify-between"><span>Model</span><span className="text-white">Claude Sonnet</span></div>
              <div className="flex justify-between"><span>AI agent messages</span><span className="text-white">1,000/month</span></div>
              <div className="flex justify-between"><span>BYOK add-on</span><span className="text-amber-400 font-semibold">+$199/mo, unlimited</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-all duration-200">
              Request Early Access &rarr;
            </Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &middot; No credit card required</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
