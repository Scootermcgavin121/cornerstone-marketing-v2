import Link from "next/link";
import { Check, FileText, Zap, Building2, Ruler, MapPin, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "AI-Powered MLS Listing Generator — Cornerstone PM",
  description:
    "Generate professional, print-ready MLS listing sheets in one click — with room dimensions from Blueprint AI, community descriptions, structural upgrades, and AI-written copy. No other builder platform can do this.",
};

const whatItPulls = [
  { icon: Building2, label: "Community info", desc: "City, state, zip, amenities, schools, and your custom marketing description" },
  { icon: Ruler, label: "Room dimensions", desc: "Length x width per room, extracted by Blueprint AI from your actual floor plan PDF" },
  { icon: MapPin, label: "Lot details", desc: "Lot number, lot size in acres and sqft, address — pulled from your purchasing module" },
  { icon: Star, label: "Structural upgrades", desc: "Every option the buyer selected — tray ceilings, bonus rooms, extended driveway, and more" },
  { icon: FileText, label: "Design selections", desc: "Flooring, countertops, cabinets, fixtures — categorized from the design center" },
  { icon: Zap, label: "AI-written copy", desc: "Word count slider (50–1,000) for regional MLS requirements. Warm, professional prose — not a template." },
];

const noOneElse = [
  "Sales CRM platforms don't have construction data",
  "Construction PM tools don't have sales data",
  "No other platform has Blueprint AI room dimensions",
  "No other platform integrates community descriptions with live project data",
  "Manual process: copy-pasting from Word docs, calling PMs for measurements",
];

export default function ListingSheetPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(34,211,238,0.10),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" />
            SALES FEATURE &middot; INDUSTRY FIRST
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            MLS listings.<br />
            <span className="text-cyan-400">Written by your data.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Generate a print-ready MLS listing sheet in one click &mdash; with room dimensions, community details, structural upgrades, and AI-written copy &mdash; all from the same platform that manages your schedules, budgets, and vendor bids.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            No copy-pasting from Word docs. No separate MLS tools. No calling the PM to get room measurements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Request Early Access &rarr;
            </Link>
            <Link
              href="/sales"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See Sales Pipeline
            </Link>
          </div>
        </div>
      </section>

      {/* The pitch */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-8 sm:p-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black mb-4 text-white">Why no one else can do this</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Other platforms can&apos;t generate MLS listings because they only have half the picture. Sales CRM tools don&apos;t know room dimensions. Construction PM tools don&apos;t have buyer selections. Cornerstone PM has everything in one place &mdash; because we built it that way.
              </p>
              <div className="space-y-3">
                {noOneElse.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg leading-none mt-0.5">&#10005;</span>
                    <span className="text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <p className="text-cyan-400 font-bold mb-1">With Cornerstone PM:</p>
                <p className="text-white">One click. One listing sheet. Community details, room dimensions, structural upgrades, design selections, AI-written copy &mdash; all from your live project data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it pulls */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">What goes into every listing</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Every field is pulled from live project data &mdash; nothing to copy-paste or fill in manually.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItPulls.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Two ways to generate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-4xl mb-4">🖱️</div>
              <h3 className="text-xl font-black text-white mb-3">One-click in the app</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Open any home in the Sales sidebar, click &ldquo;Listing Sheet,&rdquo; adjust the word count slider for your region&apos;s MLS requirements, and hit Print or Save as PDF.
              </p>
              <div className="space-y-2">
                {["Available in Sales sidebar", "Word count slider (50-1,000 words)", "Print-ready with company branding", "Stats grid + room dimensions table"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <div className="text-4xl mb-4">🪖</div>
              <h3 className="text-xl font-black text-white mb-3">Via Foreman AI</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Ask Foreman AI in plain English. It pulls everything from your live data and generates the listing on demand.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/20 border-l-4 border-l-amber-500">
                <p className="text-slate-300 text-sm italic">&ldquo;Generate an MLS listing for 1234 Oak Street&rdquo;</p>
              </div>
              <p className="text-slate-500 text-xs mt-3">Available on Pro plan &middot; Foreman AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { num: "1 click", label: "To generate a listing", sub: "vs. hours of manual work" },
            { num: "50–1,000", label: "Word count range", sub: "Adjustable for any MLS" },
            { num: "0", label: "Copy-pasting required", sub: "All data from your project" },
            { num: "100%", label: "Live project data", sub: "Dimensions, selections, upgrades" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-cyan-400 mb-1">{s.num}</div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Your sales team will thank you.</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Beta is free for 2 years. Limited to 100 builders. No credit card required.
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
