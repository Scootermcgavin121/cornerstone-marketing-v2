import { Check, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Sales Pipeline — Cornerstone PM",
  description:
    "Create a new home sale in under 60 seconds. Floorplan selection, structural options, incentives, and buyer tracking — all in one streamlined workflow.",
};

const bullets = [
  "New home sale in under 60 seconds",
  "9-step auto-generated sales checklist",
  "Auto-budget generation when structural options are locked",
  "12+ structural options per floorplan with real-time pricing",
  "Real-time pricing matrix per floorplan × community",
  "Active promotions & incentives with expiration countdowns",
  "Branded PDF price sheets (per community or all)",
  "Net price calculator with stacked promotions",
  "Auto-handoff to permitting when sales tasks complete",
  "Excel/CSV export of pricing matrix",
];

const steps = [
  {
    num: "01",
    title: "Buyer & Lot",
    desc: "Enter buyer info, contract date, and select community + lot. Everything links automatically.",
  },
  {
    num: "02",
    title: "Floorplan & Elevation",
    desc: "Pick from your active floorplans. Base price and elevation upgrades calculate instantly from your pricing matrix.",
  },
  {
    num: "03",
    title: "Options & Incentives",
    desc: "Structural options preloaded from your database. Click to add margin. Apply sales promotions in one click.",
  },
  {
    num: "04",
    title: "Review & Submit",
    desc: "Full summary — buyer, lot, floorplan, options, incentive, total contract price. One button to create.",
  },
];

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <TrendingUp className="w-4 h-4" />
            Sales Pipeline
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            New home sale.<br />
            <span className="text-cyan-400">Under 60 seconds.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Select community, floorplan, elevation, enter buyer info, pick structural options, apply incentives, and submit. The system auto-generates a 9-step sales checklist and full budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Request Early Access →
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

      {/* Workflow video */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 text-xs text-slate-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Live Workflow Demo
            </div>
            <video
              src="/video/sale-workflow.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            />
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            Muted by default — click speaker icon to enable audio
          </p>
        </div>
      </section>

      {/* 4-step workflow */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            The 4-step workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-black text-cyan-400/30 mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature bullets + pricing context */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black mb-8">Everything included</h2>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Starter Plan</div>
              <div className="text-4xl font-black text-cyan-400 mt-1">$149<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between">
                <span>NEWSTAR / BuildPro</span>
                <span className="line-through text-slate-600">$25,000+ setup</span>
              </div>
              <div className="flex justify-between">
                <span>Cornerstone PM</span>
                <span className="text-cyan-400 font-bold">Free during beta</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all duration-200"
            >
              Get Early Access →
            </Link>
            <p className="text-center text-slate-500 text-xs">
              Beta limited to 100 builders · No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to close faster?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Limited to 100 builders.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30"
        >
          Request Early Access →
        </Link>
      </section>
    </div>
  );
}
