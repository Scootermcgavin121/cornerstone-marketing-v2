import Link from "next/link";
import { Check, Shield, Zap, Globe, Code, Webhook, CreditCard, Building2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "API Documentation — Cornerstone PM Developers",
  description:
    "REST API reference for Cornerstone PM. Build integrations, automate workflows, and connect AI agents to vendors, bids, payments, and scheduling. Pro+ plan feature.",
};

const methodColor: Record<string, string> = {
  GET: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  POST: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  PATCH: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  DELETE: "text-red-400 bg-red-500/10 border-red-500/30",
};

const endpointGroups = [
  {
    label: "Vendors",
    icon: Building2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    endpoints: [
      { method: "GET", path: "/api/ext/vendors", desc: "List all vendors", detail: "Filters: scope, outreachStatus, active" },
      { method: "POST", path: "/api/ext/vendors", desc: "Create a vendor", detail: "companyName, scope, scopes[], contactName, email, phone, address, notes" },
      { method: "GET", path: "/api/ext/vendors/:id", desc: "Get single vendor", detail: "Returns full vendor record with outreach history" },
      { method: "PATCH", path: "/api/ext/vendors/:id", desc: "Update vendor", detail: "name, scope, scopes[], contactName, phone, email, address, notes, active, outreachStatus, leadTimeDays, isTaxable, qboId, externalId" },
      { method: "DELETE", path: "/api/ext/vendors/:id", desc: "Deactivate vendor", detail: "Soft delete — vendor record preserved" },
    ],
  },
  {
    label: "Bid Requests",
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    endpoints: [
      { method: "POST", path: "/api/ext/bids/request", desc: "Create bid request", detail: "vendorIds[], floorplanIds[], scope, message, deadline, communityId. Auto-sends portal emails with token-based access. Returns bidRequestId + skippedVendors warnings." },
    ],
  },
  {
    label: "Bids",
    icon: Code,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    endpoints: [
      { method: "GET", path: "/api/ext/bids", desc: "List bids", detail: "Filters: scope, status, vendorId" },
    ],
  },
  {
    label: "Payments",
    icon: CreditCard,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    endpoints: [
      { method: "GET", path: "/api/ext/payments", desc: "List payments", detail: "Filters: vendorId, homeId, poId, status, dateRange" },
      { method: "POST", path: "/api/ext/payments", desc: "Record payment", detail: "vendorId, purchaseOrderId, homeId, amountCents, method, reference, paidAt, notes" },
    ],
  },
  {
    label: "Reference Data",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    endpoints: [
      { method: "GET", path: "/api/ext/communities", desc: "List communities", detail: "Returns id, name, city, state, zip, description" },
      { method: "GET", path: "/api/ext/scopes", desc: "List scopes", detail: "Trade types available in your org" },
      { method: "GET", path: "/api/ext/floorplans", desc: "List floorplans", detail: "Returns id, name, sqft, beds, baths, stories, garage" },
      { method: "GET", path: "/api/ext/cost-types", desc: "List cost types", detail: "labor / material / subcontract / equipment / overhead" },
    ],
  },
  {
    label: "Webhooks",
    icon: Webhook,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    endpoints: [
      { method: "GET", path: "/api/ext/webhooks", desc: "List webhooks", detail: "Returns all configured webhook endpoints for your org" },
      { method: "POST", path: "/api/ext/webhooks", desc: "Create webhook", detail: "url, eventTypes[], secret. HMAC SHA-256 signature via X-Webhook-Signature header." },
    ],
  },
];

const webhookEvents = [
  "vendor.created", "vendor.updated",
  "bid_request.created", "bid.submitted", "bid.accepted", "bid.rejected",
  "payment.created", "payment.voided",
  "home.created", "home.status_changed",
  "task.completed", "task.status_changed",
  "po.created", "po.status_changed",
];

const codeExamples = [
  {
    title: "Create a vendor",
    lang: "bash",
    code: `curl -X POST https://app.cornerstonepm.ai/api/ext/vendors \\
  -H "Authorization: Bearer cspm_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "companyName": "ABC Plumbing LLC",
    "email": "bids@abcplumbing.com",
    "phone": "555-0192",
    "scopes": ["Plumbing"],
    "contactName": "Mike Johnson"
  }'`,
  },
  {
    title: "Send a bid request",
    lang: "bash",
    code: `curl -X POST https://app.cornerstonepm.ai/api/ext/bids/request \\
  -H "Authorization: Bearer cspm_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vendorIds": ["v_abc123", "v_def456"],
    "scope": "Plumbing",
    "deadline": "2026-05-15",
    "communityId": "c_xyz789",
    "message": "Please bid rough-in only for 3 units."
  }'`,
  },
  {
    title: "Record a payment",
    lang: "bash",
    code: `curl -X POST https://app.cornerstonepm.ai/api/ext/payments \\
  -H "Authorization: Bearer cspm_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "vendorId": "v_abc123",
    "purchaseOrderId": "po_789",
    "homeId": "h_456",
    "amountCents": 1840000,
    "method": "check",
    "reference": "CHK-1042",
    "paidAt": "2026-04-24T00:00:00Z"
  }'`,
  },
  {
    title: "Register a webhook",
    lang: "bash",
    code: `curl -X POST https://app.cornerstonepm.ai/api/ext/webhooks \\
  -H "Authorization: Bearer cspm_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-server.com/webhooks/cornerstone",
    "eventTypes": ["bid.submitted", "payment.created"],
    "secret": "your_webhook_secret"
  }'`,
  },
];

const integrations = [
  {
    emoji: "🪖",
    title: "Built for AI Agents",
    desc: "Foreman AI uses this API internally with 37+ skills. Any AI agent — LangChain, AutoGen, Claude, GPT-4o — can connect via Bearer token.",
  },
  {
    emoji: "📊",
    title: "QuickBooks Ready",
    desc: "qboId fields on vendors, homes, POs, and communities for seamless QuickBooks sync. Keep your books without double entry.",
  },
  {
    emoji: "⚡",
    title: "Zapier Compatible",
    desc: "Standard REST endpoints work with any Zapier webhook trigger or action. Connect to 5,000+ apps without writing code.",
  },
  {
    emoji: "📞",
    title: "Automated Bidding Pipeline",
    desc: "AI voice agent calls vendors &rarr; API creates records &rarr; vendor portal collects bids &rarr; you compare and award. Zero manual steps.",
  },
];

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_10%,rgba(34,211,238,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
            <Code className="w-3.5 h-3.5" />
            PRO+ PLAN FEATURE &middot; REST API
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            Cornerstone PM <span className="text-cyan-400">API</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Build integrations, automate workflows, and connect your tools to Cornerstone PM. REST endpoints for vendors, bids, payments, webhooks, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5">
              Request API Access &rarr;
            </Link>
            <a href="#endpoints" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              Browse endpoints
            </a>
          </div>
        </div>
      </section>

      {/* Auth */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-black text-white mb-4">Authentication</h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  All API requests require a Bearer token. Create scoped API keys in <strong className="text-white">Admin &rarr; API Keys</strong>. Each key has specific permissions so you can restrict what each integration can do.
                </p>
                <div className="space-y-2">
                  {["vendors:read", "vendors:write", "bids:read", "bids:write", "payments:write", "webhooks:write"].map((scope) => (
                    <div key={scope} className="inline-flex items-center gap-1.5 mr-2 mb-2 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                      {scope}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-950/70 border-t lg:border-t-0 lg:border-l border-slate-800 p-8 flex flex-col justify-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Example request</p>
                <pre className="text-sm font-mono text-slate-300 leading-relaxed bg-slate-900 rounded-xl p-4 border border-slate-800 overflow-x-auto">{`curl https://app.cornerstonepm.ai/api/ext/vendors \\
  -H "Authorization: Bearer cspm_your_key_here" \\
  -H "Content-Type: application/json"`}</pre>
                <div className="mt-4 p-3 rounded-lg bg-slate-800/60 border border-slate-700 flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm">Keys are scoped per integration — one key for your AI agent, another for QuickBooks sync, another for Zapier.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section id="endpoints" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">API Endpoints</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">All endpoints are prefixed with <code className="text-cyan-400 bg-slate-800 px-1.5 py-0.5 rounded text-sm">https://app.cornerstonepm.ai</code></p>

          <div className="space-y-8">
            {endpointGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className="rounded-2xl bg-slate-900/40 border border-slate-800 overflow-hidden">
                  <div className={`flex items-center gap-3 px-6 py-4 border-b border-slate-800 ${group.bg}`}>
                    <div className={`w-8 h-8 rounded-lg ${group.bg} border ${group.border} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${group.color}`} />
                    </div>
                    <h3 className={`font-black text-lg ${group.color}`}>{group.label}</h3>
                  </div>
                  <div className="divide-y divide-slate-800/60">
                    {group.endpoints.map((ep) => (
                      <div key={ep.path} className="px-6 py-4 hover:bg-slate-800/20 transition-colors">
                        <div className="flex items-start gap-3 flex-wrap">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-black border flex-shrink-0 font-mono ${methodColor[ep.method]}`}>
                            {ep.method}
                          </span>
                          <code className="text-slate-200 text-sm font-mono flex-shrink-0 mt-0.5">{ep.path}</code>
                          <span className="text-slate-400 text-sm mt-0.5">&mdash; {ep.desc}</span>
                        </div>
                        {ep.detail && (
                          <p className="text-slate-500 text-xs mt-2 ml-14 leading-relaxed">{ep.detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webhook events */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-pink-500/5 border border-pink-500/20 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <Webhook className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">14 Webhook Event Types</h2>
                <p className="text-slate-400 text-sm">HMAC SHA-256 signature verification via <code className="text-pink-400">X-Webhook-Signature</code> header. 10s timeout, auto-disable after 50 consecutive failures.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {webhookEvents.map((evt) => (
                <code key={evt} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-pink-300 text-xs font-mono">
                  {evt}
                </code>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code examples */}
      <section className="py-16 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Code Examples</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Copy-paste ready. Replace <code className="text-cyan-400">cspm_your_key_here</code> with your API key from Admin &rarr; API Keys.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {codeExamples.map((ex) => (
              <div key={ex.title} className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-800 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-slate-400 text-xs font-semibold ml-2">{ex.title}</span>
                </div>
                <pre className="p-5 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {ex.code}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate limits */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Rate Limits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: "100", label: "Requests / minute", sub: "Per API key" },
              { num: "10,000", label: "Requests / day", sub: "Per organization" },
              { num: "10s", label: "Webhook timeout", sub: "Auto-disable after 50 failures" },
            ].map((s) => (
              <div key={s.label} className="text-center p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="text-4xl font-black text-cyan-400 mb-2">{s.num}</div>
                <div className="text-white font-bold mb-1">{s.label}</div>
                <div className="text-slate-500 text-sm">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration partners */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Built to integrate</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Cornerstone PM is the connective layer between your AI agents, your accounting, and your subcontractors.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {integrations.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300 flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="text-white font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
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
              Pro+ Plan Feature
            </div>
            <div className="text-5xl font-black text-cyan-400 mb-2">$599<span className="text-xl text-slate-400 font-normal">/mo</span></div>
            <div className="text-white font-bold text-xl mb-6">Pro+ Plan</div>
            <div className="space-y-3 text-left mb-8">
              {[
                "Full REST API access (vendors, bids, payments, webhooks)",
                "Scoped API keys per integration",
                "14 webhook event types with HMAC signing",
                "100 req/min, 10,000 req/day rate limits",
                "Foreman AI (37+ skills, Sonnet model, 5,000 msg/mo)",
                "Blueprint AI (25 takeoffs/mo)",
                "Automated bidding pipeline",
                "Dedicated onboarding & SLA",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-4 rounded-xl bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200">
              Request API Access &rarr;
            </Link>
            <p className="text-slate-500 text-xs mt-3">Beta limited to 100 builders &middot; No credit card required</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          The first construction platform<br />
          <span className="text-cyan-400">built for AI agents.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Stripe made it possible to build a payment system in a weekend. We&apos;re doing the same for subcontractor bidding and construction management.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-xl hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/30">
          Request Early Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
