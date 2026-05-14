import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Design Center Software for Home Builders | Cornerstone PM™",
  description: "Design center software for home builders with structured options engine, room-by-room selections, allowance tracking, and budget integration. Built for home builders.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is design center software for home builders?",
    a: "Design center software lets homebuyers select finishes, fixtures, and upgrades for their new home while builders track allowances, upgrade pricing, and margin per home. Cornerstone PM™'s Design Center is built as a first-class module integrated with sales, purchasing, and the construction budget &mdash; every selection updates pricing and PO line items automatically.",
  },
  {
    q: "What is an options engine?",
    a: "An options engine is the rules system that prices structural and design options per floorplan and per community. Cornerstone PM™'s options engine handles dependencies, incompatibilities, allowance overages, and per-community pricing &mdash; with real-time price rollup as the buyer makes selections. Foreman AI's Design Center domain (8 skills) can configure options, track allowances, and generate selection packages on request.",
  },
  {
    q: "How do design center allowances work?",
    a: "When a buyer locks structural options on a sale, Cornerstone PM™ auto-generates a per-room allowance schedule based on community spec levels (Standard, Premium, Luxury, etc.). The buyer's selections debit the allowance, overages flow to a change order, and savings can be applied as buyer credits &mdash; all tracked in real time.",
  },
  {
    q: "Does the design center connect to purchasing?",
    a: "Yes. The moment a design selection is locked, Cornerstone PM™ updates the purchasing line items and the construction budget. There's no separate spec sheet to reconcile and no risk of ordering the wrong fixture &mdash; design, purchasing, and the budget share one data source.",
  },
  {
    q: "How is this different from a generic configurator?",
    a: "Generic configurators (Hubspot CRM add-ons, standalone selection apps) collect buyer preferences but don't update your budget or purchasing system. Cornerstone PM™'s Design Center is wired to live builder data &mdash; selections immediately become PO line items, change orders, and budget updates with no double entry.",
  },
  {
    q: "Can buyers see their selections in their portal?",
    a: "Yes. The homeowner portal shows every selection, allowance status, and upgrade pricing in real time. Buyers can review, approve, and digitally sign-off on their selections before construction begins.",
  },
  {
    q: "What does design center software cost?",
    a: "Cornerstone PM™'s Design Center is included in the Builder plan at $299/mo with unlimited users. Foreman AI's 8-skill Design Center domain is included on the Pro plan at $499/mo. There are no per-seat fees and no implementation cost.",
  },
  {
    q: "Is this a NEWSTAR / BuildPro design center alternative?",
    a: "Yes. Cornerstone PM™ offers the same core options engine and design center capabilities as NEWSTAR and BuildPro &mdash; structured options, allowances, spec levels, change orders &mdash; without the 6-figure implementation cost. Built specifically for small-to-mid home builders.",
  },
];

const features = [
  { title: "Cross-Class Upgrades", desc: "Buyers can switch from carpet to hardwood, recessed lights to pendants, or any option to any other within the same category. One click, real-time price delta shown instantly." },
  { title: "Per-Room Selections with Sqft", desc: "'Pick your Kitchen flooring (180 sqft)' &mdash; upgrade pricing shown per room based on actual takeoff quantities. No manual area calculations." },
  { title: "Options Grouped by Type", desc: "Carpet, Hardwood, LVP, and Tile shown as collapsible groups &mdash; not a flat dropdown. Buyers see the full picture before choosing." },
  { title: "Real-Time Upgrade Pricing", desc: "Shows exact cost delta from base: '+$684 upgrade' or '-$200 credit'. Price flows from takeoff quantities automatically." },
  { title: "Designer Collections", desc: "64+ curated packages across 7 categories. Pick a package and all category options auto-lock to that collection. Remove the package to unlock individual picks." },
  { title: "Driven by Takeoffs", desc: "Quantities flow directly from takeoff data &mdash; zero double-entry. Change a room size in the takeoff and the design center pricing updates automatically." },
  { title: "Room-by-Room Selections", desc: "Organize all buyer selections by room &mdash; kitchen, baths, flooring, fixtures, paint." },
  { title: "Spec Level Management", desc: "Community Standard, Premium, Luxury &mdash; unlimited levels with included/upgrade pricing." },
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
            Cross-class upgrades, per-room pricing from real takeoff quantities, and 64+ designer packages. Every selection tracked, priced, and connected to your budget.
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
              <div className="flex justify-between"><span>Cornerstone PM™</span><span className="text-violet-400 font-bold">Free during beta</span></div>
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

      <FAQSection
        title="Design Center Software FAQ"
        subtitle="Common questions about design center and options engine software for home builders."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to protect your margin?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30">Request Early Access &rarr;</Link>
      </section>
    </div>
  );
}
