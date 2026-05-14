import Link from "next/link";
import { ArrowRight, Check, Workflow, Layers, Bot } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Home Builder Project Management Software | Cornerstone PM™",
  description:
    "Home builder project management software with AI agents. Scheduling, sales pipeline, purchasing, design center, permitting, and Blueprint AI takeoffs &mdash; one platform from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/home-builder-project-management-software" },
};

const modules = [
  { name: "Construction Scheduling", href: "/construction", desc: "Auto-cascading dependencies, Gantt charts, foundation-aware templates, vendor email confirmations.", color: "amber" },
  { name: "New Home Sales Pipeline", href: "/sales", desc: "Floorplan pricing matrix, structural options engine, 60-second new home sale workflow.", color: "cyan" },
  { name: "Purchasing & Bids", href: "/purchasing", desc: "Parts catalog, scope-item bid drill-down, community-assigned vendor wins, lock-after-acceptance, no-login vendor portal (magic-link access, vendors confirm tasks + edit scope items without an account), 7-wave bidding pipeline.", color: "emerald" },
  { name: "Design Center", href: "/design", desc: "Room-by-room selections, allowance tracking, options engine with real-time price rollup.", color: "violet" },
  { name: "Permitting", href: "/permitting", desc: "Permit gates, phase blocking, inspection tracking, automated reminders across the build.", color: "orange" },
  { name: "Foreman AI", href: "/foreman", desc: "100+ AI skills across 11 categories. Plain-English commands against live builder data.", color: "blue" },
  { name: "Blueprint AI Takeoff", href: "/ai-takeoff", desc: "Upload PDF floor plans, get 130+ material scopes and quantities in under 60 seconds.", color: "fuchsia" },
  { name: "REST API + BYOA", href: "/api-access", desc: "500+ endpoints (growing), 37+ named webhook events (growing catalog), scoped Bearer-token auth. Bring your own AI agent.", color: "rose" },
];

const stats = [
  { num: "100+", label: "Foreman AI skills" },
  { num: "500+", label: "REST API endpoints" },
  { num: "8", label: "integrated modules" },
  { num: "$149", label: "starting price / mo" },
];

const faqItems: FAQItem[] = [
  {
    q: "What is home builder project management software?",
    a: "Home builder project management software is an integrated platform that manages every stage of a residential home build &mdash; from lead capture through closing &mdash; including sales, purchasing, design center, scheduling, permitting, and warranty. Cornerstone PM™ is built specifically for home builders running multiple communities, with native AI agents (Foreman AI and Blueprint AI) and a full REST API.",
  },
  {
    q: "What's the difference between home builder PM software and general construction PM software?",
    a: "General construction PM software (Procore, Buildertrend, JobTread) is built for general contractors and remodelers. Home builder PM software is built around production homebuilding: lots, models, options, draws, design center, floorplan pricing matrices, and pre-sale workflows. Cornerstone PM™ is purpose-built for home builders, not adapted from commercial construction tools.",
  },
  {
    q: "What does home builder project management software cost?",
    a: "Cornerstone PM™ starts at $149/mo (Starter) with up to 30 users (60 on Pro+) and no implementation fees. Builder is $299/mo (adds purchasing, sales, design center). Pro is $499/mo (adds Foreman AI + Blueprint AI). Pro+ is $599/mo (adds REST API + BYOA). Compare to NEWSTAR or BuildPro at $25,000+ implementation and Buildertrend at $499+/mo.",
  },
  {
    q: "How does Cornerstone PM™ handle vendor bidding differently?",
    a: "Cornerstone PM™ uses scope-item drill-down bid review, community-assigned vendor awards (not lowest-bid auctions), and lock-after-acceptance to protect long-term vendor relationships. Vendors edit their own scope items in their portal; you review side-by-side, award based on relationship + scope coverage, and the winning bid locks down so there's no scope drift. Built around the way production builders actually run vendor pipelines.",
  },
  {
    q: "Does Cornerstone PM™ include AI agents?",
    a: "Yes. Cornerstone PM™ includes two native AI agents: Foreman AI (100+ skills across scheduling, sales, purchasing, design center, bids, vendor management, and reporting) and Blueprint AI (PDF floor plan reader that extracts 130+ material scopes per plan). Both are built into the platform and connected to live builder data &mdash; not bolt-on plugins.",
  },
  {
    q: "Can I replace Buildertrend, JobTread, or BuildPro with Cornerstone PM™?",
    a: "Yes &mdash; if you're a home builder. Cornerstone PM™ is a modern alternative to Buildertrend, JobTread, CoConstruct, NEWSTAR, BuildPro, and MarkSystems for builders managing 5-200+ homes per year across multiple communities. It includes the same core capabilities plus native AI agents and REST API access at a fraction of the implementation cost.",
  },
  {
    q: "How long does implementation take?",
    a: "Most builders are operational within a week. There are no implementation fees, no required consultants, and migration tools support imports from Buildertrend, CoConstruct, and any Excel-based system. White-glove onboarding is available on Pro and Pro+.",
  },
  {
    q: "Does it support multiple communities?",
    a: "Yes. Multi-community management is included from the Starter plan. Each community has its own lot inventory, floorplans, schedule templates, options pricing, and buyer pipelines &mdash; all rolling up into builder-level reporting.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders &mdash; no credit card, no contract, no implementation fee. After beta, you stay on whichever plan fits at the price you signed up at.",
  },
];

export default function HomeBuilderPMPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Layers className="w-4 h-4" /> Home Builder PM Platform
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Home builder project<br />
            <span className="text-cyan-400">management software.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            Cornerstone PM™ is the all-in-one platform for home builders. Sales pipeline, purchasing, design center,
            construction scheduling, permitting, and AI agents &mdash; integrated, with a public REST API.
            Starts at $149/mo. No implementation fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2">
              Get 2 Years Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/features" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See all features
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-white">{s.num}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Eight modules. One platform.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every module shares the same data &mdash; sales feeds purchasing, purchasing feeds the schedule,
              design feeds the budget. No double entry, no integrations to maintain.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="block p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all"
              >
                <div className={`text-${m.color}-400 font-bold text-sm uppercase tracking-widest mb-2`}>
                  {m.name}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-slate-500 text-xs hover:text-white">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4">
                <Bot className="w-3 h-3" /> Native AI Agents
              </div>
              <h2 className="text-3xl font-black mb-4">AI built into the platform &mdash; not bolted on.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Most home builder software treats AI as a chatbot bolt-on. Cornerstone PM™ ships two native AI agents wired
                directly to your live data: Foreman AI (100+ skills) and Blueprint AI (floor plan reader).
              </p>
              <p className="text-slate-400 leading-relaxed">
                Every action Foreman takes &mdash; updating a vendor bid, generating a PO, drafting an MLS listing,
                analyzing your sales pipeline &mdash; happens against your real homes, real budgets, and real vendors. Pro+
                adds BYOA so your own Claude or ChatGPT agent can read and write the same data via API.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "100+ Foreman AI skills across 11 categories",
                "Blueprint AI &mdash; PDF floor plan to material takeoff",
                "MLS Listing Agent &mdash; auto-generated from home data",
                "AI Support Agent &mdash; instant answers, every feature documented",
                "BYOA support &mdash; bring your own Claude/ChatGPT (Pro+)",
                "500+ endpoints REST API for custom AI integrations",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300" dangerouslySetInnerHTML={{ __html: point }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
                <Workflow className="w-3 h-3" /> Built for Home Builders
              </div>
              <h2 className="text-3xl font-black mb-4">Not adapted from commercial construction.</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Most construction PM tools were built for general contractors and remodelers, then marketed to home builders.
                Cornerstone PM™ was built from inside the residential building world &mdash; lots, models, options, design
                center, draws, plan repeats, and multi-community pipelines are first-class concepts, not workarounds.
              </p>
              <Link href="/compare" className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300">
                See how we compare <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-slate-300">Buildertrend</span>
                <span className="text-slate-500 line-through">$499+/mo</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-slate-300">CoConstruct</span>
                <span className="text-slate-500 line-through">$399+/mo</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                <span className="text-slate-300">NEWSTAR / BuildPro</span>
                <span className="text-slate-500 line-through">$25k+ implementation</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <span className="text-white font-semibold">Cornerstone PM™</span>
                <span className="text-cyan-400 font-bold">From $149/mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Home Builder PM Software FAQ"
        subtitle="Common questions about all-in-one home builder project management software."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to consolidate your stack?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Limited to 100 builders.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30">
          Request Early Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
