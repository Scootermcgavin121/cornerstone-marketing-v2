import Link from "next/link";
import { ArrowRight, Check, X, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "BuildPro Alternative for Production Home Builders | Cornerstone PM",
  description:
    "BuildPro alternative built for production home builders. Native AI agents, options engine, public REST API, and modern web UI from $149/mo &mdash; no enterprise implementation fees.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildpro-alternative" },
};

const comparisonRows = [
  { feature: "Implementation cost", cornerstone: "$0", buildpro: "$25k-$75k+", note: "BuildPro requires consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Days", buildpro: "3-9 months", note: "Cornerstone: import templates, go live in a week." },
  { feature: "Modern web UI", cornerstone: true, buildpro: false, note: "BuildPro's UI is dated and Windows-centric." },
  { feature: "Native AI agents", cornerstone: true, buildpro: false, note: "Cornerstone: Foreman AI (47 skills) + Blueprint AI." },
  { feature: "Mobile-friendly", cornerstone: true, buildpro: "limited", note: "Cornerstone is fully responsive; BuildPro mobile is limited." },
  { feature: "Public REST API", cornerstone: true, buildpro: "limited", note: "Cornerstone: 59 endpoints, public docs." },
  { feature: "Bring Your Own Agent (BYOA)", cornerstone: true, buildpro: false, note: "Connect Claude or ChatGPT to live data." },
  { feature: "Construction scheduling", cornerstone: true, buildpro: true, note: "Both ship full scheduling modules." },
  { feature: "Options engine", cornerstone: true, buildpro: true, note: "Both ship options engines." },
  { feature: "Multi-community", cornerstone: true, buildpro: true, note: "Both support multi-community pipelines." },
  { feature: "Bid management", cornerstone: true, buildpro: true, note: "Cornerstone adds 7-wave automated bidding pipeline." },
  { feature: "Per-user fees", cornerstone: "Unlimited", buildpro: "Per-seat", note: "Cornerstone: no per-seat pricing." },
  { feature: "Starting price", cornerstone: "$149/mo", buildpro: "Enterprise quote", note: "BuildPro pricing is custom and not publicly listed." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best BuildPro alternative for small-to-mid home builders?",
    a: "Cornerstone PM is the closest functional BuildPro alternative for small-to-mid production home builders. It includes the same core capabilities &mdash; options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling &mdash; plus native AI agents and a public REST API, without BuildPro's enterprise implementation cost.",
  },
  {
    q: "How is Cornerstone PM different from BuildPro?",
    a: "Three key differences: (1) Cornerstone PM is a modern, web-based, mobile-friendly platform &mdash; BuildPro's UI is dated and Windows-centric; (2) Cornerstone ships native AI agents (Foreman AI, Blueprint AI) that BuildPro doesn't offer at any tier; (3) Cornerstone is operational in days at $149/mo with unlimited users, while BuildPro requires $25k-$75k+ implementation budgets.",
  },
  {
    q: "Can Cornerstone PM replace BuildPro for a production builder?",
    a: "Yes &mdash; for small-to-mid production builders. Cornerstone PM covers BuildPro's core production builder workflows: lots, models, options, plan repeats, design center, draws, multi-community pipelines. For top-100 enterprise builders with deep custom integrations to existing ERPs, BuildPro may still be the right fit.",
  },
  {
    q: "How long does migration from BuildPro take?",
    a: "Most BuildPro migrations to Cornerstone PM complete in under a week. Cornerstone's import tooling supports BuildPro exports, NEWSTAR, MarkSystems, and any Excel-based system using a smart column mapper. White-glove migration is available on the Pro and Pro+ plans.",
  },
  {
    q: "What about BuildPro's options engine? Does Cornerstone match it?",
    a: "Yes. Cornerstone PM's options engine handles the same capabilities &mdash; structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup. Foreman AI's 8-skill Design Center domain adds plain-English option configuration that BuildPro doesn't offer.",
  },
  {
    q: "Is Cornerstone PM mobile-friendly?",
    a: "Yes. Cornerstone PM is fully responsive on any device &mdash; PMs update from the jobsite, vendors confirm from their phone, sales counselors present floorplans on a tablet. BuildPro's mobile experience is limited and largely Windows-desktop focused.",
  },
  {
    q: "Does Cornerstone PM have a public API like BuildPro?",
    a: "Cornerstone PM offers a fully public REST API on the Pro+ plan ($599/mo): 59 endpoints, 22 webhook event types, scoped Bearer-token auth, public documentation at app.cornerstonepm.ai/developers. BuildPro offers enterprise integrations only, typically on a custom contract basis.",
  },
  {
    q: "Is there a free trial or beta?",
    a: "Yes. Cornerstone PM offers a 2-year free beta to the first 100 production builders &mdash; no credit card, no contract, no implementation fee. After beta, you stay on whichever plan fits at the price you signed up at.",
  },
];

function CheckOrX({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-emerald-400" />;
  if (value === false) return <X className="w-5 h-5 text-slate-600" />;
  if (value === "limited") return <span className="text-amber-400 text-xs font-semibold uppercase">Limited</span>;
  return <span className="text-white font-semibold text-sm">{value}</span>;
}

export default function BuildProAlternativePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" /> BuildPro Alternative
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            BuildPro power.<br />
            <span className="text-purple-400">Modern UI. Native AI.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Cornerstone PM is the modern BuildPro alternative for small-to-mid production home builders.
            Same core capabilities &mdash; options engine, multi-community pipelines, purchasing, construction scheduling &mdash;
            on a web-native platform with built-in AI agents and a public REST API. Starts at $149/mo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-purple-400 text-slate-900 font-bold text-lg hover:bg-purple-300 transition-all duration-200 shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              Get 2 Years Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/newstar-alternative" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              Also a NEWSTAR alternative
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Cornerstone PM vs BuildPro</h2>
          <p className="text-center text-slate-400 mb-12">Side-by-side for production builders evaluating modern alternatives.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold uppercase tracking-widest">Feature</th>
                  <th className="px-4 py-4 text-purple-400 text-sm font-bold text-center">Cornerstone PM</th>
                  <th className="px-4 py-4 text-slate-400 text-sm font-bold text-center">BuildPro</th>
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
                    <td className="px-4 py-4 text-center"><div className="flex justify-center"><CheckOrX value={row.buildpro} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection
        title="BuildPro Alternative FAQ"
        subtitle="Common questions about switching to Cornerstone PM from BuildPro."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready for a modern platform?</h2>
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
