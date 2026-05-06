import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Buildertrend Alternative for Production Home Builders | Cornerstone PM",
  description:
    "Buildertrend alternative built for production home builders. Native AI agents, options engine, REST API, and multi-community management from $149/mo &mdash; not $499+.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildertrend-alternative" },
};

const comparisonRows = [
  { feature: "Built for production home builders", cornerstone: true, buildertrend: false, note: "Buildertrend is built for custom builders & remodelers." },
  { feature: "Native AI agents", cornerstone: true, buildertrend: false, note: "5 native AI agents including Foreman AI (47 skills) and Blueprint AI. Buildertrend has no native AI agents." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, buildertrend: false, note: "PDF blueprint to material takeoff in under 60 seconds." },
  { feature: "Structural options engine", cornerstone: true, buildertrend: false, note: "Pre-sale options pricing matrix per floorplan." },
  { feature: "Floorplan pricing matrix", cornerstone: true, buildertrend: false, note: "Per-community floorplan pricing." },
  { feature: "Multi-community management", cornerstone: true, buildertrend: "limited", note: "Multi-job, but not multi-community pipeline." },
  { feature: "Public REST API", cornerstone: true, buildertrend: "limited", note: "Cornerstone: 59 endpoints, public docs. Buildertrend: enterprise API only." },
  { feature: "Bring Your Own Agent (BYOA)", cornerstone: true, buildertrend: false, note: "Connect Claude or ChatGPT to your live data." },
  { feature: "Construction scheduling", cornerstone: true, buildertrend: true, note: "Both: Gantt charts, dependencies, vendor notifications." },
  { feature: "Homeowner portal", cornerstone: true, buildertrend: true, note: "Both: client portal with milestones." },
  { feature: "Purchasing & POs", cornerstone: true, buildertrend: true, note: "Both: PO generation and tracking." },
  { feature: "Bid management", cornerstone: true, buildertrend: true, note: "Cornerstone adds 7-wave automated bidding pipeline." },
  { feature: "Unlimited users on all plans", cornerstone: true, buildertrend: false, note: "Buildertrend charges per user above plan limits." },
  { feature: "Starting price", cornerstone: "$149/mo", buildertrend: "$499/mo", note: "Cornerstone is ~70% less at the starter tier." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best Buildertrend alternative for production home builders?",
    a: "For production home builders, Cornerstone PM is the closest functional Buildertrend alternative with key advantages: native AI agents (Foreman AI, Blueprint AI), an options engine, floorplan pricing matrix, multi-community management, and public REST API. Buildertrend was built for custom builders and remodelers; Cornerstone PM is purpose-built for production builders managing 5-200+ homes per year.",
  },
  {
    q: "How is Cornerstone PM different from Buildertrend?",
    a: "Three key differences: (1) Cornerstone is built for production builders, Buildertrend for custom and remodel; (2) Cornerstone includes 47 native AI skills via Foreman AI plus Blueprint AI floor plan takeoffs &mdash; Buildertrend has no native AI; (3) Cornerstone offers a structural options engine, floorplan pricing matrix, and multi-community pipelines that Buildertrend doesn't ship.",
  },
  {
    q: "Is Cornerstone PM cheaper than Buildertrend?",
    a: "Yes. Cornerstone PM starts at $149/mo with unlimited users; Buildertrend starts at $499/mo. The full Cornerstone Pro plan (with Foreman AI and Blueprint AI) is $499/mo &mdash; the same as Buildertrend's entry tier &mdash; and includes capabilities Buildertrend doesn't offer at any price.",
  },
  {
    q: "Can I migrate from Buildertrend to Cornerstone PM?",
    a: "Yes. Cornerstone PM includes a Buildertrend migration tool that imports schedules, vendors, jobs, and templates with smart column mapping. Most migrations complete in under a day. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM have everything Buildertrend has?",
    a: "Cornerstone PM covers the same core functions: scheduling, homeowner portal, purchasing, bid management, document storage, change orders, and time tracking. It adds an options engine, AI agents, Blueprint AI takeoffs, multi-community pipelines, and a public REST API that Buildertrend doesn't offer. The one Buildertrend feature Cornerstone doesn't ship is custom builder client invoicing &mdash; because Cornerstone is built for production builders who use draw schedules, not custom builder progress invoicing.",
  },
  {
    q: "Should I switch from Buildertrend if I'm a custom builder or remodeler?",
    a: "Probably not. Cornerstone PM is optimized for production home builders. If you're a custom builder or remodeler doing one-off jobs without floorplan repeats, lot management, or pre-sale design centers, Buildertrend is likely a better fit. Cornerstone's value compounds when you're running multi-community production with plan repeats.",
  },
  {
    q: "Does Cornerstone PM have a free trial like Buildertrend?",
    a: "Cornerstone PM offers a 2-year free beta to the first 100 production builders &mdash; no credit card, no contract, no implementation fee. After beta, builders stay on whichever plan fits at the price they signed up at.",
  },
  {
    q: "Is the API really included?",
    a: "The REST API (59 endpoints, 30 webhook events, scoped Bearer-token auth, public docs) is included on the Pro+ plan at $599/mo. BYOA &mdash; bringing your own Claude or ChatGPT agent against live builder data &mdash; is also included on Pro+.",
  },
];

function CheckOrX({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-emerald-400" />;
  if (value === false) return <X className="w-5 h-5 text-slate-600" />;
  if (value === "limited") return <span className="text-amber-400 text-xs font-semibold uppercase">Limited</span>;
  return <span className="text-white font-semibold text-sm">{value}</span>;
}

export default function BuildertrendAlternativePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Buildertrend Alternative
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Built for production builders.<br />
            <span className="text-cyan-400">Not custom and remodel.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Cornerstone PM is the Buildertrend alternative for production home builders. Native AI agents, options engine,
            floorplan pricing matrix, multi-community pipelines, and a public REST API &mdash; from $149/mo with unlimited users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
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
          <h2 className="text-4xl font-black text-center mb-4">Cornerstone PM vs Buildertrend</h2>
          <p className="text-center text-slate-400 mb-12">Side-by-side, focused on what matters for production builders.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold uppercase tracking-widest">Feature</th>
                  <th className="px-4 py-4 text-cyan-400 text-sm font-bold text-center">Cornerstone PM</th>
                  <th className="px-4 py-4 text-slate-400 text-sm font-bold text-center">Buildertrend</th>
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
                    <td className="px-4 py-4 text-center"><div className="flex justify-center"><CheckOrX value={row.buildertrend} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Why production builders switch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Production workflows native", desc: "Lots, models, options, plan repeats, design center, draws &mdash; first-class concepts, not workarounds. Buildertrend treats every job as one-off." },
              { title: "AI built in", desc: "Foreman AI (47 skills) and Blueprint AI ship with the platform. No bolt-on plugins, no third-party AI subscriptions, no setup." },
              { title: "REST API + BYOA", desc: "59 endpoints, 30 webhook events, scoped auth, public docs. Bring your own Claude or ChatGPT agent against your live data." },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
                <div className="text-cyan-400 font-bold mb-3">{card.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Buildertrend Alternative FAQ"
        subtitle="Common questions about switching to Cornerstone PM from Buildertrend."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to switch?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Migration tooling included.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30">
          Request Early Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
