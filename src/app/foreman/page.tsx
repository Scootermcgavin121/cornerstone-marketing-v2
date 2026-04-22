import React from "react";
import Link from "next/link";
import { Check, MessageSquare, Zap, Bot, Database, Globe, BarChart3, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreman AI — Your AI Construction Agent | Cornerstone PM",
  description:
    "Type a command. Foreman executes it. 18 skills covering parts, vendors, homes, budgets, and more. No dashboards, no reports to build.",
};

const skills = [
  "Search parts catalog",
  "Create single or bulk parts",
  "Update and delete parts",
  "Scrape any supplier website (Home Depot / Ferguson / 84 Lumber)",
  "Auto-create parts from scraped pricing",
  "List all vendors",
  "Create new vendors",
  "Search vendor bids",
  "List all homes with status",
  "View home budgets",
  "Update home status and assignments",
  "List communities and floorplans",
  "List scopes and option classes",
  "List all users",
  "View org stats",
  "MLS listing generation from live home data",
  "Persistent chat history with auto-titles",
  "Complete org data isolation",
  "Custom reports (coming soon)",
];

const examplePrompts = [
  {
    prompt: "Scrape Home Depot for GE Profile refrigerators and add them to our parts catalog",
    icon: <Globe className="w-5 h-5 text-amber-400" />,
  },
  {
    prompt: "Show me all homes in Coastal Ridge that are in progress with their budget totals",
    icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
  },
  {
    prompt: "How many parts do we have? Break it down by scope",
    icon: <Database className="w-5 h-5 text-amber-400" />,
  },
  {
    prompt: "Create a vendor called ABC Plumbing with scope Plumbing",
    icon: <Bot className="w-5 h-5 text-amber-400" />,
  },
  {
    prompt: "Generate an MLS listing for 1234 Oak Street",
    icon: <FileText className="w-5 h-5 text-amber-400" />,
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
            18-SKILL AI AGENT
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            Meet{" "}
            <span className="text-amber-400">Foreman AI</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-bold text-slate-300 mb-6">
            Your AI Construction Agent
          </p>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Type a command. Foreman executes it. No dashboards, no reports to build,
            no consultants to hire.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/25 transition-all duration-200"
            >
              Join Beta — Free
            </Link>
            <Link
              href="/ai-agents"
              className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              See All AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              18 Skills. One Agent.
            </h2>
            <p className="text-slate-400 text-lg">
              Foreman knows your entire operation — parts, vendors, homes, budgets, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-amber-500/30 transition-colors duration-200"
              >
                <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Prompts */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Just Say What You Need
            </h2>
            <p className="text-slate-400 text-lg">
              Natural language commands. Instant results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {examplePrompts.map((item, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-xl bg-slate-900 border border-slate-800 border-l-4 border-l-amber-500/70 hover:border-l-amber-400 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      &ldquo;{item.prompt}&rdquo;
                    </p>
                  </div>
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
                New Skill
              </div>
              <h2 className="text-3xl font-black text-white mb-4">MLS Listing Generator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                One command. Foreman pulls the home address, floorplan, square footage, all buyer selections, structural upgrades, and community info &mdash; then generates a polished, MLS-ready listing sheet.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                No other construction PM software can do this. What used to take an agent 2 hours now takes 10 seconds.
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
                "Spec level and included features",
                "Community amenities and builder info",
                "Professional formatting ready for MLS submission",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Available To</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {roles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Context */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
              <Zap className="w-3.5 h-3.5" />
              PRO PLAN
            </div>
            <div className="text-5xl font-black text-amber-400 mb-1">$499</div>
            <div className="text-slate-400 mb-4">/mo</div>
            <ul className="text-slate-300 text-sm space-y-2 mb-6 max-w-xs mx-auto text-left">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                Foreman AI (Claude Sonnet model)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                1,000 messages / month
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                Blueprint AI (5 takeoffs/mo)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                Everything in Builder plan
              </li>
            </ul>
            <div className="text-xs text-slate-500 mb-4">
              Need more? Add BYOK (Bring Your Own Key) for +$199/mo — unlimited messages.
            </div>
            <Link
              href="/beta"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-200"
            >
              Get Beta Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
