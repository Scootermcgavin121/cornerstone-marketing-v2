import Link from "next/link";
import { Check, Zap, ArrowRight, Code, Globe, Shield, GitBranch } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "API Access & Bring Your Own Agent — Cornerstone PM",
  description:
    "REST API endpoints that let AI agents automate the entire subcontractor bidding pipeline. Create vendors, send bid requests, track responses — programmatically. No other homebuilder platform does this.",
};

const endpoints = [
  {
    method: "POST",
    path: "/api/ext/vendors",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    label: "Create Vendor",
    desc: "Create a subcontractor or supplier in Cornerstone programmatically. Your AI agent collects contact info from a phone call and writes it directly to the database.",
    example: `{
  "name": "ABC Plumbing LLC",
  "email": "bids@abcplumbing.com",
  "phone": "555-0192",
  "scopes": ["Plumbing", "HVAC"],
  "contacts": [{ "name": "Mike", "role": "Estimator" }]
}`,
  },
  {
    method: "POST",
    path: "/api/ext/bids/request",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    label: "Send Bid Request",
    desc: "Send a scoped bid request to one or more vendors with plans, specs, and deadline. Triggers automatic 7-day follow-up reminders.",
    example: `{
  "vendorIds": ["v_abc123", "v_def456"],
  "scope": "Plumbing",
  "dueDate": "2026-05-15",
  "plans": ["https://...floorplan.pdf"],
  "notes": "Rough-in only, 3 units"
}`,
  },
  {
    method: "GET",
    path: "/api/ext/bids",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    label: "Track Bids",
    desc: "Query all bids by status, scope, or vendor. Your agent monitors responses in real time and notifies you the moment a bid comes in.",
    example: `// GET /api/ext/bids?scope=Plumbing&status=received

{
  "bids": [
    {
      "vendor": "ABC Plumbing LLC",
      "total": 18400,
      "status": "received",
      "lineItems": [...]
    }
  ]
}`,
  },
];

const pipeline = [
  {
    wave: "01",
    title: "AI cold-calls subs",
    desc: "Your agent dials subcontractors, collects contact info, leaves voicemails, and sends texts. Every interaction recorded with full transcript.",
    stat: "200+ vendors in one afternoon",
  },
  {
    wave: "02",
    title: "Email blast to verified vendors",
    desc: "Automated email campaign to all vendors with confirmed email addresses. Includes project specs, plans, and bid deadline.",
    stat: "3 contact channels: call + voicemail + text",
  },
  {
    wave: "03",
    title: "Email agent processes responses",
    desc: "AI reads incoming emails, extracts vendor data, and creates vendor records in Cornerstone via the REST API. Zero manual data entry.",
    stat: "0 manual data entry",
  },
  {
    wave: "04",
    title: "One-click mass bid request",
    desc: "All verified vendors receive a scoped bid request with plans attached. Triggered programmatically or from inside Cornerstone.",
    stat: "Entire vendor list in one API call",
  },
  {
    wave: "05",
    title: "Automatic 7-day follow-ups",
    desc: "No response after 7 days? The system follows up automatically — by email, text, or another call — without anyone lifting a finger.",
    stat: "Configurable reminder cadence",
  },
  {
    wave: "06",
    title: "Bids received & compared",
    desc: "Bids flow into Cornerstone with line items. Side-by-side comparison across all vendors. Owner gets real-time notifications as bids arrive.",
    stat: "Real-time owner notifications",
  },
  {
    wave: "07",
    title: "Winners onboard instantly",
    desc: "Winning vendors get a magic link to self-register into Cornerstone — scheduling, POs, invoices, and document requirements handled automatically.",
    stat: "Magic link onboarding",
  },
];

export default function ApiAccessPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_10%,rgba(34,211,238,0.10),transparent)]" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-cyan-500/5 blur-3xl rounded-full" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
            <Code className="w-3.5 h-3.5" />
            BYOA &mdash; BRING YOUR OWN AGENT &mdash; INDUSTRY FIRST
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
            Your AI agent handles<br />
            <span className="text-cyan-400">the phone calls.</span>
          </h1>
          <p className="text-2xl text-slate-300 font-semibold mb-4">Cornerstone handles everything else.</p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            REST API endpoints that let any AI agent automate the entire subcontractor bidding pipeline &mdash; from cold call to signed contract. No manual data entry. No other homebuilder platform does this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              Request API Access &rarr;
            </Link>
            <a
              href="#pipeline"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See the pipeline
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "200+", label: "Vendors contacted", sub: "In a single afternoon" },
            { num: "0", label: "Manual data entry", sub: "End to end" },
            { num: "3", label: "Contact channels", sub: "Call + voicemail + text" },
            { num: "7", label: "Automated waves", sub: "Cold call to onboarding" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-4xl font-black text-cyan-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">Three endpoints.<br />Entire bidding pipeline automated.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Bearer token auth. JSON responses. Standard REST. Plug in any agent &mdash; custom-built, third-party, or Cornerstone&apos;s own Foreman AI.</p>
          </div>
          <div className="space-y-6">
            {endpoints.map((ep) => (
              <div key={ep.path} className={`rounded-2xl bg-slate-900/60 border ${ep.border} overflow-hidden`}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: description */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-black ${ep.bg} ${ep.color} border ${ep.border}`}>
                        {ep.method}
                      </span>
                      <code className="text-slate-300 text-sm font-mono">{ep.path}</code>
                    </div>
                    <h3 className={`text-2xl font-black ${ep.color} mb-3`}>{ep.label}</h3>
                    <p className="text-slate-400 leading-relaxed">{ep.desc}</p>
                  </div>
                  {/* Right: code example */}
                  <div className="bg-slate-950/80 border-t lg:border-t-0 lg:border-l border-slate-800/60 p-6">
                    <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {ep.example}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Auth callout */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: Shield, label: "Scoped API keys", desc: "Different permissions for different integrations. Read-only, write-only, or full access." },
              { icon: Globe, label: "Any agent", desc: "Custom-built, third-party, or Cornerstone's Foreman AI. If it can make an HTTP request, it works." },
              { icon: GitBranch, label: "Real-time webhooks", desc: "Get notified the moment a bid arrives, a vendor responds, or a status changes." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{f.label}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7-wave pipeline */}
      <section id="pipeline" className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
              Automated Bidding Pipeline
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              Cold call to signed contract.<br />
              <span className="text-cyan-400">Zero human touches.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Your AI agent runs all 7 waves automatically. Cornerstone tracks every interaction, every bid, every vendor &mdash; in real time.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {pipeline.map((step, idx) => (
                <div key={step.wave} className="relative flex items-start gap-6">
                  {/* Wave number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center z-10 hidden sm:flex">
                    <span className="text-cyan-400 font-black text-lg">{step.wave}</span>
                  </div>
                  {/* Content */}
                  <div className={`flex-1 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300 ${idx === 0 || idx === 6 ? "border-cyan-500/20 bg-cyan-500/5" : ""}`}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-cyan-400 text-xs font-bold sm:hidden">Wave {step.wave}</span>
                        </div>
                        <h3 className="text-white font-black text-lg mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                      <div className="flex-shrink-0 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold whitespace-nowrap">
                        {step.stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Plug in any agent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Foreman AI",
                badge: "Built-in",
                badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                desc: "Cornerstone&apos;s own 27-skill construction agent. Already wired to the API. No setup required.",
                link: "/foreman",
              },
              {
                title: "Custom agents",
                badge: "BYOA",
                badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
                desc: "Build your own agent with any framework (LangChain, AutoGen, Claude, GPT-4) and connect to our REST API with a Bearer token.",
                link: null,
              },
              {
                title: "Third-party tools",
                badge: "Coming soon",
                badgeColor: "bg-slate-700 text-slate-400 border-slate-600",
                desc: "Pre-built integrations with popular AI platforms. If it can make an HTTP call, it can talk to Cornerstone.",
                link: null,
              },
            ].map((item) => (
              <div key={item.title} className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-black text-lg">{item.title}</h3>
                  <span className={`px-2.5 py-1 rounded-full border text-xs font-bold ${item.badgeColor}`}>{item.badge}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: item.desc }} />
                {item.link && (
                  <Link href={item.link} className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-slate-900/60 border border-cyan-500/20 p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              Add-On Pricing
            </div>
            <div className="text-5xl font-black text-cyan-400 mb-2">$599<span className="text-xl text-slate-400 font-normal">/mo</span></div>
            <div className="text-white font-bold text-xl mb-6">Pro+ Plan</div>
            <div className="space-y-3 text-left mb-8">
              {[
                "Full REST API access (vendors, bids, homes, parts)",
                "Scoped API keys per agent/integration",
                "Bearer token auth, JSON responses",
                "Real-time webhooks on bid events",
                "Any AI agent can connect",
                "Includes everything in Pro, plus full API access",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Link
              href="/beta"
              className="block w-full text-center px-6 py-4 rounded-xl bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200"
            >
              Request API Access &rarr;
            </Link>
            <p className="text-slate-500 text-xs mt-3">Beta limited to 100 builders &middot; No credit card required</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          The first construction platform<br />
          <span className="text-cyan-400">built for AI agents.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Stripe made it possible to build a payment system in a weekend. We&apos;re doing the same for subcontractor bidding.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/30"
        >
          Request Early Access &rarr;
        </Link>
      </section>
    </div>
  );
}
