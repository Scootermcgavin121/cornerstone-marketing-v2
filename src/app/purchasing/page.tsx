import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Home Builder Purchasing & Bid Management Software | Cornerstone PM",
  description: "AI construction purchasing for home builders. Bid-to-PO automation, parts catalog, structural options pricing, and auto-budget generation built for production builders.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is home builder purchasing software?",
    a: "Home builder purchasing software manages the bid-to-purchase-order flow: vendor bids, parts catalogs, purchase orders, payment scheduling, and budget tracking. Cornerstone PM's purchasing module connects directly to your sales pipeline and design center so structural options and design selections automatically feed the budget &mdash; no double entry, no spreadsheets.",
  },
  {
    q: "What is AI construction purchasing for home builders?",
    a: "AI construction purchasing uses agents to handle bid generation, vendor outreach, bid comparison, and PO creation. Cornerstone PM's Foreman AI includes a 4-skill Bid Pipeline domain plus a 7-wave automated bidding pipeline that contacts vendors, collects bids, normalizes pricing, and recommends an award &mdash; all inside one platform.",
  },
  {
    q: "How does the auto-budget feature work?",
    a: "When a sales counselor locks structural options on a new home sale, Cornerstone PM automatically generates the home's construction budget using the floorplan's base costs plus the option-specific deltas. Design center selections, change orders, and bid awards continue to flow into the same budget number throughout the build.",
  },
  {
    q: "Is Cornerstone PM a NEWSTAR or BuildPro alternative for purchasing?",
    a: "Yes. Cornerstone PM was built as a modern, affordable alternative to NEWSTAR and BuildPro for small-to-mid production home builders. It covers the same core purchasing functionality &mdash; parts catalog, budget hierarchy, bid management, POs, payments &mdash; without the 6-figure implementation cost. Starts at $299/mo on the Builder plan.",
  },
  {
    q: "Does Cornerstone PM track retainage?",
    a: "Yes. Cornerstone PM tracks retainage on payments, classifies cost types, manages payment schedules, and surfaces variance reports against the budget. Vendor 1099 totals are exportable.",
  },
  {
    q: "How does the parts catalog work?",
    a: "Cornerstone PM's parts catalog maintains SKUs, vendor pricing, and unit costs that sync across every job. Foreman AI's Parts Catalog domain (5 skills) handles SKU lookups, vendor pricing comparisons, material substitutions, catalog updates, and inventory alerts via plain-English requests.",
  },
  {
    q: "Can I use my own AI agent against Cornerstone purchasing data?",
    a: "Yes. The Pro+ plan ($599/mo) includes Bring Your Own Agent (BYOA) and full REST API access. You can connect Claude, ChatGPT, or any custom agent to live purchasing, bid, vendor, and budget data through 59 endpoints with scoped Bearer-token auth.",
  },
  {
    q: "What does purchasing software for home builders cost?",
    a: "Cornerstone PM's purchasing module is included in the Builder plan at $299/mo with unlimited users. The Pro plan at $499/mo adds Foreman AI's Bid Pipeline and Parts Catalog skills. Pro+ at $599/mo adds the REST API and BYOA. NEWSTAR and BuildPro typically require $25,000+ implementation budgets before monthly licensing.",
  },
];

const features = [
  { title: "Parts Catalog", desc: "Full parts and materials catalog with unit pricing, synced across all jobs." },
  { title: "Budget Hierarchy", desc: "Builder &mdash; Community &mdash; Floorplan &mdash; Home &mdash; budgets cascade and override at each level." },
  { title: "Base Budgets", desc: "Pre-built budget templates per floorplan, ready to apply at sale." },
  { title: "Auto-Budget Generation", desc: "When a home sale is created with structural options, the budget auto-generates instantly." },
  { title: "Structural Options Pricing", desc: "Every structural option tied to a line-item budget impact &mdash; no manual entry." },
  { title: "Active Homes Dashboard", desc: "All homes, budget status, and variance at a glance." },
  { title: "Apply Budget Flow", desc: "One-click flow to apply base budget + options to any home." },
  { title: "Design Center Integration", desc: "Room-by-room selections tied directly to purchasing budget." },
  { title: "Designer Collections", desc: "Group selections into curated collections for buyer presentations." },
  { title: "Unlimited Spec Levels", desc: "Community Standard, Premium, Luxury &mdash; unlimited spec levels with separate pricing." },
  { title: "Base Pricing Matrix", desc: "Floorplan &rarr; -  Community pricing matrix with per community overrides." },
  { title: "Change Orders", desc: "Buyer-requested changes with approval workflow and budget impact." },
  { title: "Bid Management", desc: "Send floorplan to bid to every vendor with one click, track responses, compare side-by-side." },
  { title: "Bid Comparison", desc: "Side-by-side vendor bid comparison with automatic low-bid highlighting." },
  { title: "Award & Budget Flow", desc: "Award a bid and it flows directly into the budget &mdash; no double entry." },
  { title: "Purchase Orders", desc: "Generate and send POs directly from approved bids." },
  { title: "Buildertrend Migration", desc: "Import existing budgets from Buildertrend with smart column mapping." },
];

export default function PurchasingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Purchasing &amp; Budgets
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Budget smarter.<br /><span className="text-emerald-400">Zero double entry.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            From bid to PO to budget &mdash; every dollar tracked automatically. Structural options, design selections, and change orders all feed the same number.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5">Request Early Access &rarr;</Link>
            <Link href="/features" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">See All Features</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
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
              <div className="text-4xl font-black text-emerald-400 mt-1">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>NEWSTAR / BuildPro</span><span className="line-through text-slate-600">$800+/mo</span></div>
              <div className="flex justify-between"><span>Cornerstone PM</span><span className="text-emerald-400 font-bold">Free during beta</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-emerald-400 text-slate-900 font-bold hover:bg-emerald-300 transition-all duration-200">Get Early Access &rarr;</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &mdash;· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for purchasing</h2>
            <p className="text-slate-400 leading-relaxed">Legacy purchasing software like NEWSTAR and BuildPro were built for enterprise builders with dedicated estimating teams. Cornerstone was built for growing builders who need the same power without the complexity or the price tag.</p>
            <p className="text-slate-400 leading-relaxed">The auto-budget generation, bid-to-PO flow, and structural options pricing were designed to eliminate the double entry that costs your team hours every week.</p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Home Builder Purchasing FAQ"
        subtitle="Common questions about purchasing and bid management software for production home builders."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to buy smarter?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/30">Request Early Access &rarr;</Link>
      </section>
    </div>
  );
}
