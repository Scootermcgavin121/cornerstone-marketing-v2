import { Check, Zap, Upload, FileText, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { VideoPlayer } from "@/components/VideoPlayer";

export const metadata = {
  title: "AI Material Takeoff for Home Builders | Cornerstone PM",
  description:
    "AI material takeoff for home builders. Upload a PDF floor plan and get 130+ material scopes &mdash; rooms, fixtures, flooring, drywall, roofing &mdash; extracted in under 60 seconds.",
  alternates: { canonical: "https://www.cornerstonepm.ai/ai-takeoff" },
};

const tabs = [
  {
    icon: LayoutGrid,
    title: "Rooms",
    desc: "Every room detected with square footage and auto-detected room names pulled directly from your floor plan labels.",
  },
  {
    icon: FileText,
    title: "Room Scopes",
    desc: "Per-room material extraction — fixtures, flooring (tile, LVP, carpet), baseboard linear feet, countertops, cabinets, crown molding.",
  },
  {
    icon: FileText,
    title: "Whole House",
    desc: "Whole-house quantities: drywall board count, painting coverage, insulation, gutters, siding, roofing squares — all in one pass.",
  },
];

const metrics = [
  "Total living square footage",
  "Footprint square footage",
  "Perimeter (linear feet)",
  "Garage square footage",
  "Porch square footage",
  "Slab concrete (cubic yards)",
  "Roofing (squares)",
  "Drywall (boards)",
];

const features = [
  { title: "Upload Any CAD PDF", desc: "Digital CAD floor plans up to 25MB. Drop it in and the AI gets to work — no manual setup." },
  { title: "Room Detection", desc: "AI reads room labels from the plan and maps every space automatically. Primary Bedroom, Kitchen, Bath — all detected." },
  { title: "Fixture Extraction", desc: "Toilets, faucets, lights, doors, hardware, appliances — counted per room from the plan itself." },
  { title: "Flooring Quantities", desc: "Tile and LVP for all rooms, carpet for dry rooms only. Square footage calculated from dimension lines." },
  { title: "Baseboard & Trim", desc: "Linear feet of baseboard, crown molding, and countertops extracted per room." },
  { title: "Whole-House Scopes", desc: "Drywall, painting, insulation, cleaning, gutters, siding, and roofing quantities in a single analysis." },
  { title: "Edit Before Import", desc: "Review and adjust any quantity the AI extracted. Change units, assign option classes, correct anything before it hits your budget." },
  { title: "Direct Budget Integration", desc: "One click imports rooms and material scopes directly into your floorplan budgets, selections, and design center." },
  { title: "Option Class Assignment", desc: "Assign option classes to scopes during review so selections feed straight into the design center." },
  { title: "Plan at a Glance", desc: "Key metrics panel: living sqft, footprint, perimeter, garage, porch, slab concrete, roofing, drywall — all on one screen." },
  { title: "Under 60 Seconds", desc: "What used to take hours of manual counting is done before your coffee gets cold." },
  { title: "Powered by Anthropic AI Vision", desc: "Built on Claude's vision model — the same AI that reads and understands complex technical drawings." },
];

export default function AiTakeoffPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12)_0%,transparent_65%)]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered &middot; Full Bundle Feature
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            AI material takeoff for home builders.<br />
            <span className="text-violet-400">Under 60 seconds.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Upload a floor plan PDF. AI extracts every room, fixture, flooring scope, and whole-house quantity automatically. What used to take hours now takes less than a minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-violet-500 text-white font-bold text-lg hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
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

      {/* Video */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer src="/video/ai-takeoff.mp4" label="AI Blueprint Takeoff Demo" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">How it works</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Three steps. No manual counting. No spreadsheets.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {[
              { step: "01", icon: Upload, title: "Upload your PDF", desc: "Drop in any digital CAD floor plan up to 25MB. Labeled rooms and visible dimensions required." },
              { step: "02", icon: Zap, title: "AI analyzes the plan", desc: "Claude AI Vision reads room labels, dimension lines, fixtures, and whole-house scopes in under 60 seconds." },
              { step: "03", icon: FileText, title: "Review & import", desc: "Edit any quantity, assign option classes, then import directly into your budgets and design center." },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <div className="text-5xl font-black text-violet-400/20 mb-2">{s.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          {/* 3 tabs with real screenshots */}
          <h2 className="text-2xl font-black text-center mb-8">Results across 3 tabs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { num: "Tab 1", title: "Rooms", desc: "22 locations detected with square footage and auto-detected names from your plan labels.", img: "/mockups/ai-takeoff-2.png" },
              { num: "Tab 2", title: "Room Scopes", desc: "130 per-room scopes — fixtures, flooring, baseboard, countertops, cabinets, crown molding.", img: "/mockups/ai-takeoff-3.png" },
              { num: "Tab 3", title: "Whole House", desc: "10 whole-house quantities: drywall, painting, roofing, insulation, gutters, siding, concrete.", img: "/mockups/ai-takeoff-4.png" },
            ].map((tab) => (
              <div key={tab.title} className="rounded-2xl bg-slate-900/60 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 overflow-hidden">
                <div className="relative w-full h-48 bg-white">
                  <Image src={tab.img} alt={tab.title} fill className="object-contain object-top" />
                </div>
                <div className="p-5">
                  <div className="text-violet-400 font-black text-sm mb-1">{tab.num}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{tab.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tab.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Plan at a glance */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8">
            <h2 className="text-2xl font-black mb-2">Plan at a Glance</h2>
            <p className="text-slate-400 mb-6">Key metrics extracted automatically from every plan:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((m) => (
                <div key={m} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full feature list */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything it does</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-1">{f.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + requirements */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Full Bundle</div>
              <div className="text-4xl font-black text-violet-400 mt-1">$399<span className="text-lg text-slate-400 font-normal">/mo</span></div>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold">
                $150 value FREE with bundle
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>Traditional takeoff software</span><span className="line-through text-slate-600">$200&ndash;500/mo</span></div>
              <div className="flex justify-between"><span>Manual takeoff (labor)</span><span className="line-through text-slate-600">4&ndash;8 hrs/plan</span></div>
              <div className="flex justify-between"><span>Cornerstone AI Takeoff</span><span className="text-violet-400 font-bold">Included in Full Bundle</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-violet-500 text-white font-bold hover:bg-violet-400 transition-all duration-200">Get Early Access &rarr;</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &middot; No credit card required</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black">Requirements</h2>
            <div className="space-y-3">
              {[
                { ok: true, text: "Digital CAD PDFs only (no scans or photos)" },
                { ok: true, text: "Rooms must have text labels (e.g. \"Primary Bedroom\")" },
                { ok: true, text: "Visible dimension lines for accurate square footage" },
                { ok: false, text: "Hand-drawn sketches not supported" },
                { ok: false, text: "Low-resolution scans won't work well" },
              ].map((r) => (
                <div key={r.text} className="flex items-start gap-3 text-sm">
                  <span className={`font-bold ${r.ok ? "text-violet-400" : "text-slate-600"}`}>{r.ok ? "Yes" : "No"}</span>
                  <span className={r.ok ? "text-slate-300" : "text-slate-500"}>{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Stop counting manually.</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Limited to 100 builders.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-500 text-white font-bold text-lg hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/30"
        >
          Request Early Access &rarr;
        </Link>
      </section>
    </div>
  );
}
