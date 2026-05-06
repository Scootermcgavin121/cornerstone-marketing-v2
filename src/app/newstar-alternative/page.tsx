import Link from "next/link";
import { ArrowRight, Check, X, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "NEWSTAR Alternative for Small-to-Mid Home Builders | Cornerstone PM",
  description:
    "NEWSTAR alternative for small-to-mid production home builders. Options engine, sales pipeline, purchasing, and AI agents from $149/mo &mdash; no 6-figure implementation.",
  alternates: { canonical: "https://www.cornerstonepm.ai/newstar-alternative" },
};

const comparisonRows = [
  { feature: "Implementation cost", cornerstone: "$0", newstar: "$25k-$100k+", note: "NEWSTAR requires extensive consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Days", newstar: "3-12 months", note: "Cornerstone: import templates, go live in a week." },
  { feature: "Starting monthly price", cornerstone: "$149", newstar: "Enterprise quote", note: "NEWSTAR pricing is custom and not publicly listed." },
  { feature: "Per-user fees", cornerstone: "Unlimited users", newstar: "Per-seat", note: "Cornerstone: no per-seat pricing on any plan." },
  { feature: "Built for small-to-mid builders", cornerstone: true, newstar: false, note: "NEWSTAR is designed for top-100 enterprise home builders." },
  { feature: "Native AI agents", cornerstone: true, newstar: false, note: "Cornerstone: Foreman AI (47 skills) + Blueprint AI." },
  { feature: "AI floor plan takeoffs", cornerstone: true, newstar: false, note: "Blueprint AI: PDF to material takeoff in under 60 seconds." },
  { feature: "Public REST API", cornerstone: true, newstar: "limited", note: "Cornerstone: 59 endpoints, public docs. NEWSTAR: enterprise integrations only." },
  { feature: "Bring Your Own Agent (BYOA)", cornerstone: true, newstar: false, note: "Connect Claude or ChatGPT to your live data." },
  { feature: "Options engine", cornerstone: true, newstar: true, note: "Both ship a full structural and design options engine." },
  { feature: "Floorplan pricing matrix", cornerstone: true, newstar: true, note: "Per-community plan pricing." },
  { feature: "Multi-community management", cornerstone: true, newstar: true, note: "Both support multiple communities and divisions." },
  { feature: "Construction scheduling", cornerstone: true, newstar: true, note: "Both ship full scheduling modules." },
  { feature: "Purchasing & POs", cornerstone: true, newstar: true, note: "Cornerstone adds 7-wave automated bidding pipeline." },
  { feature: "Modern web-based UI", cornerstone: true, newstar: false, note: "NEWSTAR's UI is dated and Windows-centric." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best NEWSTAR alternative for small-to-mid home builders?",
    a: "Cornerstone PM is the closest functional NEWSTAR alternative for small-to-mid production home builders. It includes the same core capabilities &mdash; options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling &mdash; without NEWSTAR's $25,000-$100,000+ implementation cost. Cornerstone PM also adds native AI agents (Foreman AI, Blueprint AI) and a public REST API.",
  },
  {
    q: "Is Cornerstone PM a NEWSTAR replacement?",
    a: "For small-to-mid production builders, yes. Cornerstone PM covers NEWSTAR's core production builder workflows &mdash; lots, models, options, plan repeats, design center, draws, multi-community pipelines &mdash; in a modern web platform with native AI. For top-100 enterprise builders with deep custom integrations to their existing ERP, NEWSTAR may still be the right fit.",
  },
  {
    q: "How much does Cornerstone PM cost compared to NEWSTAR?",
    a: "Cornerstone PM starts at $149/mo with unlimited users and zero implementation cost. NEWSTAR pricing is enterprise-quoted and not publicly listed, but typical NEWSTAR implementations run $25,000-$100,000+ before monthly licensing. The full Cornerstone Pro+ plan ($599/mo) includes the REST API and BYOA &mdash; capabilities NEWSTAR offers only at the enterprise tier.",
  },
  {
    q: "Can Cornerstone PM handle production builder workflows?",
    a: "Yes. Cornerstone PM was built specifically for production builders &mdash; it's not adapted from custom builder or commercial construction software. Lot inventories, floorplan pricing matrices, structural options engines, design center allowances, draw schedules, and multi-community pipelines are first-class concepts in the platform.",
  },
  {
    q: "Does Cornerstone PM support BuildPro and MarkSystems migrations too?",
    a: "Yes. The same migration tooling that supports NEWSTAR exports also supports BuildPro, MarkSystems, and any Excel-based system using a smart column mapper. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "What about NEWSTAR's options engine? Does Cornerstone match it?",
    a: "Cornerstone PM's options engine handles the same core capabilities: structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup as buyers select. Foreman AI's Design Center domain (8 skills) adds plain-English option configuration and selection package generation that NEWSTAR doesn't offer.",
  },
  {
    q: "Will Cornerstone PM scale as we grow?",
    a: "Yes. The Pro plan supports up to 1,000 active homes and Pro+ has no home cap. For builders growing past 200+ homes per year, the REST API and webhook system on Pro+ enable custom integrations to accounting (Sage 300, QuickBooks Enterprise), warranty platforms, and CRM tools.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders &mdash; no credit card, no contract, no implementation fee. After beta, you stay on whichever plan fits at the price you signed up at.",
  },
];

function CheckOrX({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-emerald-400" />;
  if (value === false) return <X className="w-5 h-5 text-slate-600" />;
  if (value === "limited") return <span className="text-amber-400 text-xs font-semibold uppercase">Limited</span>;
  return <span className="text-white font-semibold text-sm">{value}</span>;
}

export default function NewstarAlternativePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" /> NEWSTAR / BuildPro Alternative
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            NEWSTAR power.<br />
            <span className="text-purple-400">Without 6-figure implementation.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Cornerstone PM is the modern NEWSTAR and BuildPro alternative for small-to-mid production home builders.
            Same core capabilities &mdash; options engine, floorplan pricing matrix, multi-community management &mdash; plus
            native AI agents and a public REST API. Starts at $149/mo. Operational in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-purple-400 text-slate-900 font-bold text-lg hover:bg-purple-300 transition-all duration-200 shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              Get 2 Years Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/compare" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See full comparison
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Cornerstone PM vs NEWSTAR</h2>
          <p className="text-center text-slate-400 mb-12">Side-by-side for small-to-mid production home builders.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold uppercase tracking-widest">Feature</th>
                  <th className="px-4 py-4 text-purple-400 text-sm font-bold text-center">Cornerstone PM</th>
                  <th className="px-4 py-4 text-slate-400 text-sm font-bold text-center">NEWSTAR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/30">
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">{row.feature}</div>
                      {row.note && <div className="text-slate-500 text-xs mt-1">{row.note}</div>}
                    </td>
                    <td className="px-4 py-4 text-center"><div className="flex justify-center"><CheckOrX value={row.cornerstone} /></div></td>
                    <td className="px-4 py-4 text-center"><div className="flex justify-center"><CheckOrX value={row.newstar} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Built for the builder NEWSTAR ignores</h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            NEWSTAR and BuildPro were built for top-100 enterprise builders with the budget for $50k+ implementations and
            dedicated IT teams. Cornerstone PM is built for the small-to-mid production builder running 5-200 homes per year.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Modern web platform", desc: "Cloud-native, mobile-friendly, no Citrix or VPN required. PMs update from the jobsite, vendors confirm from their phone." },
              { title: "AI agents native", desc: "47 Foreman AI skills + Blueprint AI floor plan reader ship with the platform. No third-party AI plugins, no separate subscriptions." },
              { title: "Public REST API", desc: "59 endpoints, 30 webhook events, scoped Bearer-token auth, full public documentation. NEWSTAR offers integrations at the enterprise tier only." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="text-purple-400 font-bold mb-3">{card.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="NEWSTAR Alternative FAQ"
        subtitle="Common questions about switching to Cornerstone PM from NEWSTAR or BuildPro."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to leave the implementation quagmire?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Operational in days, not months.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-purple-400 text-slate-900 font-bold text-lg hover:bg-purple-300 transition-all duration-200 shadow-lg shadow-purple-500/30">
          Request Early Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
