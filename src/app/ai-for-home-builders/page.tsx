import Link from "next/link";
import { ArrowRight, Brain, Check, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "AI for Home Builders | Cornerstone PM™",
  description:
    "Purpose-built AI for home builders. Foreman AI manages your scheduling, purchasing, vendor bids, design center, and sales pipeline — in plain English.",
};

const workflows = [
  {
    stage: "Pre-Sale",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    skills: [
      "Sales pipeline overview — all homes by stage, close probability, days in pipeline",
      "Buyer selections management — confirm, reject, or reset design center choices",
      "Options gap analysis — flag incomplete buyer decisions before cutoff",
      "Design center revenue analysis — top-selling options, margin by spec level",
      "AI-powered MLS descriptions from real floorplan data",
    ],
  },
  {
    stage: "Under Contract",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    skills: [
      "Spec level profitability — compare margin across Good/Better/Best tiers",
      "Bid request drafting — formatted invitations to all vendors in your system",
      "Bid comparison reports — normalize pricing, rank vendors, recommend best value",
      "SOW generator — professional Scope of Work documents with home counts and specs",
      "Parts catalog management — search, create, bulk import from web scraping",
    ],
  },
  {
    stage: "Construction",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    skills: [
      "Budget variance analysis — flag cost overruns across all homes in one command",
      "Home status tracking — all IN_PROGRESS homes with budget totals and timelines",
      "Vendor performance scoring — bid response rates, win rates, insurance tracking",
      "Punch list generator — room-by-room QC checklists by trade",
      "Excel and PDF exports — formatted with your company branding",
    ],
  },
  {
    stage: "Closing",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    skills: [
      "Profitability reports — margin analysis by community with upgrade revenue breakdown",
      "Design center summary PDF — full selections export with buyer signature line",
      "Sales stage reports — pipeline snapshot by community with next actions",
      "Room dimension sheets — detailed specs for sales team handouts",
      "MLS listing sheets — auto-generated from floorplan data and upgrades",
    ],
  },
];

const faqs = [
  {
    q: "What is homebuilder AI software?",
    a: "Homebuilder AI software is purpose-built AI that understands home construction workflows — floorplans, spec levels, design center selections, vendor bids, and sales pipeline stages — and acts directly on a builder's data. Unlike generic chatbots, it can create POs, draft bid requests, generate MLS listings, run profitability reports, and update home statuses. Cornerstone PM™ ships Foreman AI™ with 100+ purpose-built skills across pre-sale, under contract, construction, and closing workflows.",
  },
  {
    q: "What is the best AI software for home builders?",
    a: "The best AI software for home builders is one with construction vocabulary, direct access to your live data, and the ability to take real actions — not just answer questions. Cornerstone PM™ is the only home builder platform with five built-in AI agents: Foreman AI™ (100+ skills), Blueprint AI™ (floorplan reader), Bid Import AI (parses vendor bids from PDFs, Excel, or photos), AI MLS Listing Generator, and an AI Support Agent. Beta is free for 2 years, limited to 100 builders.",
  },
  {
    q: "How does Cornerstone PM compare to Buildertrend for AI?",
    a: "Buildertrend has forms and buttons; Cornerstone PM™ has AI agents. Buildertrend does not ship native AI agents that can read and write your data. Cornerstone PM™ includes five built-in agents — Foreman AI™ creates POs, generates SOWs, drafts bid requests, runs profitability reports, and exports design center PDFs in plain English. Pricing also differs significantly: Cornerstone starts at $149/mo with the full AI suite available on Pro plans, vs. Buildertrend at $499+/mo with per-user fees and no native AI.",
  },
  {
    q: "Can AI manage construction schedules, bids, and selections?",
    a: "Yes. Foreman AI™ manages construction schedules (cascade scheduling, vendor notifications, status tracking), vendor bids (drafts bid requests, compares submissions side-by-side, recommends best value), and buyer selections (confirm/reject design center choices, flag incomplete selections before cutoff, generate signed PDFs for lenders). It works in plain English and takes real actions on your live data — no integrations or setup required.",
  },
];

const prompts = [
  {
    prompt: "What's our margin on The Wellington floorplan across Coastal Ridge and Bayside Preserve?",
    result: "Margin breakdown by community: Coastal Ridge avg 18.2%, Bayside 21.4%. Upgrade revenue contributing $34k avg per home.",
    color: "text-violet-400",
  },
  {
    prompt: "Which design center options are buyers picking most often and which have the highest margin?",
    result: "Top 5 selections by frequency and margin displayed. Chef's kitchen upgrade: 78% selection rate, $8,400 avg margin.",
    color: "text-amber-400",
  },
  {
    prompt: "Show me all homes that have gone more than 30 days without a status update",
    result: "7 homes flagged across 3 communities. Last update dates shown. Recommended: schedule walk-throughs this week.",
    color: "text-blue-400",
  },
  {
    prompt: "Create a bid request for all Electrical vendors for the Pinecrest Commons community",
    result: "Bid request drafted with scope specs, timeline, and contact list. 9 electrical vendors in system notified.",
    color: "text-emerald-400",
  },
  {
    prompt: "Which of our buyers still have incomplete design center selections with a close date in the next 60 days?",
    result: "4 buyers flagged. Missing categories listed per buyer. Suggested outreach priority by close date.",
    color: "text-violet-400",
  },
  {
    prompt: "Generate a design center summary PDF for 1847 Lakeview Drive — the buyer needs it for their lender",
    result: "PDF generated with all confirmed selections, category totals, and buyer signature line. Download link provided.",
    color: "text-amber-400",
  },
];

export default function AiForHomeBuildersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(139,92,246,0.07),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold mb-6">
            <Brain className="w-3.5 h-3.5" />
            FOREMAN AI · 100+ skills · PURPOSE-BUILT FOR HOME BUILDERS
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            AI Built for How{" "}
            <span className="text-violet-400">Home Builders Actually Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Generic AI tools don&apos;t know what a floorplan is. They don&apos;t know what a spec level means. They don&apos;t understand the difference between a pre-sale workflow and a construction workflow. Foreman AI™ does.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            Purpose-built AI for home builders — managing scheduling, purchasing, vendor bids, design center, and sales pipeline in plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <Link
              href="/foreman"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See all 100+ skills
            </Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Why generic AI fails home builders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                problem: "No construction vocabulary",
                detail: "Generic AI doesn&apos;t know what a spec level is, what a punch list covers, or what &ldquo;under contract&rdquo; means in a home builder context. You spend more time explaining than working.",
              },
              {
                problem: "No access to your data",
                detail: "ChatGPT can&apos;t see your vendor list, your floorplans, your margin targets, or your buyer selections. Every session starts from zero. It&apos;s a search engine, not a business tool.",
              },
              {
                problem: "Can&apos;t take action",
                detail: "Generic AI can write text. Foreman AI can create a PO, update a home status, generate a PDF, draft a bid request, and export a design center summary. That&apos;s the difference.",
              },
            ].map((item) => (
              <div key={item.problem} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-red-400 font-bold text-sm mb-3">âœ— {item.problem}</div>
                <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.detail }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "100+", label: "Purpose-built skills", sub: "Across 11 categories" },
            { num: "4", label: "Workflow stages", sub: "Pre-Sale to Closing" },
            { num: "Plain English", label: "How you talk to it", sub: "No training required" },
            { num: "Real data", label: "What it accesses", sub: "Your actual records" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl font-black text-violet-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow stages */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              AI skills by builder workflow
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Foreman AI understands your entire pipeline — from the first buyer conversation to the day you hand over keys.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {workflows.map((wf) => (
              <div key={wf.stage} className={`rounded-2xl border ${wf.border} overflow-hidden`}>
                <div className={`${wf.bg} px-6 py-4 border-b ${wf.border}`}>
                  <h3 className={`text-lg font-black ${wf.color}`}>{wf.stage}</h3>
                </div>
                <div className="p-5 bg-slate-900/40 space-y-2.5">
                  {wf.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 ${wf.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example prompts */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Home-builder-specific intelligence
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These are real prompts that show what purpose-built AI for home builders looks like.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {prompts.map((ex) => (
              <div
                key={ex.prompt}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5 border-b border-slate-800/60">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                    <p className="text-white font-medium italic">&ldquo;{ex.prompt}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-black text-sm leading-none flex-shrink-0 mt-0.5">ðŸª–</span>
                    <p className="text-slate-300 text-sm">{ex.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gets smarter */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-violet-500/5 border border-violet-500/20 p-8 sm:p-12 text-center">
            <div className="text-5xl mb-6">ðŸ§ </div>
            <h2 className="text-3xl font-black text-white mb-4">Gets smarter over time.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Foreman learns how YOU work. Tell it the name you want to be greeted by, your role, your go-to subcontractors for each scope, your margin targets by community, your reporting preferences — it remembers everything and gets more intuitive every session. <strong>Custom-coded into Cornerstone, not a generic chatbot bolt-on.</strong> The more you use it, the more it understands your specific business and habits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Remembers your vendors", detail: "Knows which subs you prefer for each scope" },
                { label: "Learns your margins", detail: "Uses your actual targets in reports and analysis" },
                { label: "Knows your communities", detail: "Understands each project&apos;s context and status" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-violet-400 font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Frequently asked questions
            </h2>
            <p className="text-slate-400">
              Common questions about AI for home builders.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/20 transition-all duration-200 overflow-hidden"
              >
                <summary className="cursor-pointer p-6 flex items-start justify-between gap-4 list-none">
                  <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                  <span className="text-violet-400 text-2xl leading-none flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          The AI built for how{" "}
          <span className="text-amber-400">you actually work.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Beta access is open now. 2 years free for early adopters. Limited to 100 builders.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-xl hover:bg-amber-300 transition-all duration-200 shadow-xl shadow-amber-500/30"
        >
          Get Beta Access <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-600 text-sm mt-4">No credit card required · 2 years free · Limited to 100 builders</p>
      </section>

      <Footer />
    </div>
  );
}
