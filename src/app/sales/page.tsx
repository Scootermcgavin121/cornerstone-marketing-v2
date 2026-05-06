import { Check, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { VideoPlayer } from "@/components/VideoPlayer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Home Builder Sales Pipeline Software | Cornerstone PM",
  description:
    "Home builder sales pipeline software with floorplan pricing matrix, structural options engine, and 60-second new home sale workflow. Built for production builders.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is home builder sales pipeline software?",
    a: "Home builder sales pipeline software is a system that tracks prospective buyers from first contact through contract, with built-in floorplan selection, structural options, incentives, and lot inventory. Cornerstone PM's sales pipeline is built specifically for production home builders &mdash; new home sale in under 60 seconds, auto-generated 9-step sales checklist, and auto-budget generation the moment structural options are locked.",
  },
  {
    q: "How is new home sales software different from a generic CRM?",
    a: "Generic CRMs (Salesforce, HubSpot, Pipedrive) track leads but don't understand homebuilding workflows: floorplan pricing matrix, options engine, lot status, design center allowances, or auto-budget generation when a buyer locks structurals. Cornerstone PM's sales module knows all of those because it's connected to your live build data &mdash; buyers, lots, plans, and budgets stay in sync automatically.",
  },
  {
    q: "What is a structural options engine?",
    a: "A structural options engine is the rules-based system that prices add-ons (3-car garage, bonus room, finished basement) per floorplan and per community. Cornerstone PM's options engine handles dependencies (you can't pick the gourmet kitchen without the larger pantry), incompatibilities, and per-community pricing &mdash; with real-time price rollup as the buyer makes selections.",
  },
  {
    q: "Can I create a new home sale in 60 seconds?",
    a: "Yes. Cornerstone PM's sales workflow lets a sales counselor pick a buyer, choose a lot and floorplan, lock structural options, apply incentives, and generate a contract-ready sale in under 60 seconds. The system automatically creates the buyer's design center allowance, generates the 9-step sales checklist, and builds the initial construction budget.",
  },
  {
    q: "Does Cornerstone PM replace BuildPro or NEWSTAR for sales?",
    a: "Yes. Cornerstone PM is built as a modern alternative to NEWSTAR and BuildPro for small-to-mid production home builders. It includes the same core sales features &mdash; floorplan pricing matrix, options engine, lot inventory, incentive management &mdash; without the 6-figure implementation budget. Starts at $299/mo on the Builder plan.",
  },
  {
    q: "How does the sales pipeline connect to construction?",
    a: "When a sale is locked, Cornerstone PM auto-generates the construction budget, attaches the correct schedule template, sets up the design center allowance, and notifies the PM. No double entry, no handoff meeting required. Sales, purchasing, design, and construction all share one source of truth.",
  },
  {
    q: "Is there a sales counselor portal?",
    a: "Yes. Cornerstone PM includes role-scoped access for sales counselors so they can manage prospects, build sales packages, and present floorplans without seeing construction or financial detail outside their scope.",
  },
  {
    q: "What does new home sales software cost?",
    a: "Cornerstone PM's sales pipeline is included in the Builder plan at $299/mo with unlimited users. There are no per-counselor seat fees. The Pro plan ($499/mo) adds Foreman AI, which can analyze your sales pipeline, draft buyer follow-ups, and generate MLS listings from live home data.",
  },
];

const bullets = [
  "New home sale in under 60 seconds",
  "9-step auto-generated sales checklist",
  "Auto-budget generation when structural options are locked",
  "12+ structural options per floorplan with real-time pricing",
  "Real-time pricing matrix per floorplan per community",
  "Active promotions & incentives with expiration countdowns",
  "Branded PDF price sheets (per community or all)",
  "MLS-ready listing sheet from live home data (selections, upgrades, room dimensions)",
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
    desc: "Full summary &mdash; buyer, lot, floorplan, options, incentive, total contract price. One button to create.",
  },
  {
    num: "05",
    title: "Workflow Auto-Generated",
    desc: "The moment the home is created, 16+ tasks auto-fire across Sales, Permitting, and Design Center &mdash; contract, deposit, structural approvals, budget, permits, design selections.",
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
              href="/beta"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
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

      {/* Workflow video */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer
            src="/video/sale-workflow.mp4"
            label="Live Workflow Demo"
            endCardHref="/beta"
            endCardStartSec={5}
          />
        </div>
      </section>

      {/* 4-step workflow */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            The 5-step workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* MLS Listing Sheet spotlight */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-cyan-500/5 border border-cyan-500/20 p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                Industry First
              </div>
              <h2 className="text-3xl font-black text-white mb-4">AI-Powered MLS Listing Generator</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                One click. Cornerstone pulls community info, room dimensions (from Blueprint AI), lot size, structural upgrades, and design selections &mdash; then AI writes a polished, MLS-ready listing description.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                No other builder platform can do this. Sales CRMs don&apos;t have construction data. Construction PM tools don&apos;t have sales data. We have both.
              </p>
              <Link href="/listing-sheet" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all duration-200">
                See how it works &rarr;
              </Link>
            </div>
            <div className="space-y-3">
              {[
                "Room dimensions from Blueprint AI floor plan analysis",
                "Community description, city, state, zip, amenities",
                "Lot size (acres + sqft) and lot number",
                "Structural upgrades and design selections",
                "Word count slider (50-1,000) for any MLS region",
                "Print-ready with company branding",
                "Also available via Foreman AI: \"Generate an MLS listing for 1234 Oak Street\"",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
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
              <div className="text-2xl font-black text-white">Builder Plan</div>
              <div className="text-4xl font-black text-cyan-400 mt-1">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
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
              href="/beta"
              className="block w-full text-center px-6 py-3.5 rounded-xl bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 transition-all duration-200"
            >
              Get Early Access &rarr; 
            </Link>
            <p className="text-center text-slate-500 text-xs">
              Beta limited to 100 builders &middot; No credit card required
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        title="New Home Sales Software FAQ"
        subtitle="Common questions about sales pipeline software for production home builders."
        items={faqItems}
      />

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to close faster?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Limited to 100 builders.
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
