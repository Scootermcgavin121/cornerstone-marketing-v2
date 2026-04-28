import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Design Center & Options Engine",
  description: "Structured options let buyers personalize their home while you lock in profit. Every selection tracked, priced, and approved.",
};

const features = [
  { title: "Room-by-Room Selections", desc: "Organize all buyer selections by room &mdash; kitchen, baths, flooring, fixtures, paint." },
  { title: "Spec Level Management", desc: "Community Standard, Premium, Luxury &mdash; unlimited levels with included/upgrade pricing." },
  { title: "Designer Collections", desc: "Curated collections that buyers can browse and select from." },
  { title: "Options Engine", desc: "Structural and design options with real-time pricing, tied to budget automatically." },
  { title: "Buyer Selection Portal", desc: "Buyers make selections online, builder approves &mdash; no email chains." },
  { title: "Selections PDF Export", desc: "Generate a clean, branded selections PDF for every home." },
  { title: "Upgrade Tracking", desc: "Track every upgrade from selection to install with status updates." },
  { title: "Change Order Integration", desc: "Design changes flow directly into purchasing and budget." },
  { title: "Community-Level Pricing", desc: "Set base included items per community, overrides per floorplan." },
  { title: "Approval Workflow", desc: "Builder approves all selections before they're locked." },
  { title: "Revision History", desc: "Full audit trail of every selection change with timestamps." },
  { title: "Integration with Purchasing", desc: "Every selection ties to a line item &mdash; no manual entry." },
  { title: "Mobile-Friendly", desc: "Buyers can make selections from any device." },
  { title: "Branded Experience", desc: "Your logo, your colors on every buyer-facing page." },
  { title: "Unlimited Options per Room", desc: "No limits on how many options you configure per category." },
  { title: "Margin Lock-In", desc: "Lock options pricing before presenting to buyer &mdash; protect your margin." },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Design Center
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Turn upgrades into<br /><span className="text-violet-400">wider margin.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Structured options let buyers personalize their home while you lock in profit. Every selection tracked, priced, and approved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5">Request Early Access &rarr;</Link>
            <Link href="/features" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">See All Features</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything included</h2>
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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Builder Plan</div>
              <div className="text-4xl font-black text-violet-400 mt-1">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>Buildertrend Design</span><span className="line-through text-slate-600">$499+/mo</span></div>
              <div className="flex justify-between"><span>Cornerstone PM</span><span className="text-violet-400 font-bold">Free during beta</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-violet-400 text-slate-900 font-bold hover:bg-violet-300 transition-all duration-200">Get Early Access &rarr;</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &mdash;· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for design</h2>
            <p className="text-slate-400 leading-relaxed">Most design center tools are bolt-ons that don't talk to your budget or purchasing system. Cornerstone's Design Center was built as a first-class module &mdash; every selection automatically updates the budget and purchasing line items.</p>
            <p className="text-slate-400 leading-relaxed">Lock your options pricing before the buyer presentation and protect your margin every single time. No spreadsheets, no manual reconciliation, no surprises at closing.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to protect your margin?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30">Request Early Access &rarr;</Link>
      </section>
    </div>
  );
}
