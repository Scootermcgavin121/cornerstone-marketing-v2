import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Zap, Clock, Users, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Usage Rates & AI Limits | Cornerstone PM\u2122",
  description:
    "Monthly AI usage limits by plan for Foreman AI, Blueprint AI, Bid Import AI, Punchlist AI, MLS Listing AI, and the REST API. Role-based access tiers and Power User add-on details.",
  alternates: { canonical: "https://www.cornerstonepm.ai/usage-rates" },
  openGraph: {
    title: "Usage Rates & AI Limits | Cornerstone PM\u2122",
    description:
      "See exactly what you get on each plan. Monthly AI limits, role-based access, onboarding boosts, and Power User details.",
    url: "https://www.cornerstonepm.ai/usage-rates",
    type: "website",
  },
};

/* ── data ───────────────────────────────────────────────── */

interface AIFeature {
  name: string;
  description: string;
  starter: string;
  builder: string;
  pro: string;
  proPlus: string;
  powerUser: string;
  scope: "user" | "org";
}

const aiFeatures: AIFeature[] = [
  {
    name: "Foreman AI\u2122",
    description:
      "In-app AI agent with 100+ construction management skills. Reads and writes real data \u2014 takes actions, not just chat.",
    starter: "\u2014",
    builder: "\u2014",
    pro: "600/mo",
    proPlus: "900/mo",
    powerUser: "3,000/mo",
    scope: "user",
  },
  {
    name: "Blueprint AI",
    description:
      "Automated blueprint/plan analysis. Upload a floor plan PDF and get 130+ material scopes in 60 seconds.",
    starter: "\u2014",
    builder: "\u2014",
    pro: "150/mo",
    proPlus: "300/mo",
    powerUser: "Unlimited",
    scope: "user",
  },
  {
    name: "Bid Import AI",
    description:
      "Parse vendor bids from PDF attachments automatically. Takeoff-only, pricing-only, or combined modes.",
    starter: "\u2014",
    builder: "\u2014",
    pro: "600/mo",
    proPlus: "1,200/mo",
    powerUser: "Unlimited",
    scope: "user",
  },
  {
    name: "Punchlist AI",
    description:
      "Voice-to-punchlist: speak your items, AI creates the structured list. Works on mobile in the field.",
    starter: "150/mo",
    builder: "300/mo",
    pro: "600/mo",
    proPlus: "1,200/mo",
    powerUser: "Unlimited",
    scope: "user",
  },
  {
    name: "MLS Listing AI",
    description:
      "Generate MLS listing descriptions from live home specs. One-click PDF download for agents.",
    starter: "150/mo",
    builder: "300/mo",
    pro: "600/mo",
    proPlus: "1,200/mo",
    powerUser: "Unlimited",
    scope: "user",
  },
  {
    name: "AI Support Agent",
    description:
      "24/7 customer-facing FAQ and help chatbot. Answers instantly from your project data.",
    starter: "\u2014",
    builder: "\u2014",
    pro: "7,500/mo",
    proPlus: "15,000/mo",
    powerUser: "Same",
    scope: "org",
  },
  {
    name: "REST API",
    description:
      "External API access for integrations and automation. 500+ endpoints, scoped API keys, HMAC-signed webhooks.",
    starter: "\u2014",
    builder: "\u2014",
    pro: "300K/mo",
    proPlus: "300K/mo",
    powerUser: "Same",
    scope: "org",
  },
];

interface RoleTier {
  tier: string;
  roles: string;
  access: string;
  color: string;
}

const roleTiers: RoleTier[] = [
  {
    tier: "Full",
    roles: "Admin, Purchasing, Construction Manager",
    access: "All AI features at plan limits",
    color: "text-emerald-400",
  },
  {
    tier: "Limited",
    roles: "Sales, Design, Design Center",
    access: "Support Agent + Punchlist AI + MLS Listing AI",
    color: "text-amber-400",
  },
  {
    tier: "Basic",
    roles: "PM, Permitting, Warranty, Service, Closing",
    access: "Support Agent + Punchlist AI",
    color: "text-cyan-400",
  },
  {
    tier: "External",
    roles: "Customer, Subcontractor, Vendor",
    access: "Support Agent only",
    color: "text-slate-400",
  },
];

/* ── helpers ─────────────────────────────────────────────── */

function cellClass(value: string): string {
  if (value === "\u2014") return "text-slate-600";
  if (value === "Unlimited") return "text-emerald-400 font-semibold";
  return "text-white";
}

/* ── page ────────────────────────────────────────────────── */

export default function UsageRatesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pricing
          </Link>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Usage Rates</span>{" "}
            <span className="text-cyan-400">&amp; AI Limits</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Transparent monthly limits for every AI feature, by plan. No surprises, no hidden caps. Monthly limits give you flexibility &mdash; burst when you need it on heavy setup days, use less on quiet days. No daily caps holding you back.
          </p>
        </div>
      </section>

      {/* AI Features Table */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl sm:text-3xl font-black">
              AI Feature Limits by Plan
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block rounded-2xl border border-slate-800 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900/80">
                  <th className="text-left px-6 py-4 font-semibold text-slate-300 w-[28%]">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-400">
                    Starter
                    <div className="text-xs font-normal text-slate-600">
                      $149/mo
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-400">
                    Builder
                    <div className="text-xs font-normal text-slate-600">
                      $299/mo
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-amber-400">
                    Pro
                    <div className="text-xs font-normal text-amber-400/60">
                      $499/mo
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-slate-300">
                    Pro+
                    <div className="text-xs font-normal text-slate-500">
                      $599/mo
                    </div>
                  </th>
                  <th className="text-center px-4 py-4 font-semibold text-violet-400">
                    Power User
                    <div className="text-xs font-normal text-violet-400/60">
                      +$149/seat
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {aiFeatures.map((f, i) => (
                  <tr
                    key={f.name}
                    className={
                      i % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/30"
                    }
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{f.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {f.description}
                      </div>
                      {f.scope === "org" && (
                        <span className="inline-block mt-1 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                          org-wide pool
                        </span>
                      )}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${cellClass(
                        f.starter
                      )}`}
                    >
                      {f.starter}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${cellClass(
                        f.builder
                      )}`}
                    >
                      {f.builder}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${cellClass(f.pro)}`}
                    >
                      {f.pro}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${cellClass(
                        f.proPlus
                      )}`}
                    >
                      {f.proPlus}
                    </td>
                    <td
                      className={`text-center px-4 py-4 ${cellClass(
                        f.powerUser
                      )}`}
                    >
                      {f.powerUser}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4 mb-4">
            {aiFeatures.map((f) => (
              <div
                key={f.name}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
              >
                <div className="font-bold text-white mb-1">{f.name}</div>
                <p className="text-xs text-slate-500 mb-3">{f.description}</p>
                {f.scope === "org" && (
                  <span className="inline-block mb-3 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-500 border border-slate-700">
                    org-wide pool
                  </span>
                )}
                <div className="grid grid-cols-5 gap-2 text-center text-xs">
                  <div>
                    <div className="text-slate-600 mb-1">Starter</div>
                    <div className={cellClass(f.starter)}>{f.starter}</div>
                  </div>
                  <div>
                    <div className="text-slate-600 mb-1">Builder</div>
                    <div className={cellClass(f.builder)}>{f.builder}</div>
                  </div>
                  <div>
                    <div className="text-amber-400/60 mb-1">Pro</div>
                    <div className={cellClass(f.pro)}>{f.pro}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-1">Pro+</div>
                    <div className={cellClass(f.proPlus)}>{f.proPlus}</div>
                  </div>
                  <div>
                    <div className="text-violet-400/60 mb-1">Power</div>
                    <div className={cellClass(f.powerUser)}>
                      {f.powerUser}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 text-center">
            Per-user limits are per individual user per month. Org-wide pools are shared across all users. All limits reset on the 1st of each month (UTC).
          </p>
        </div>
      </section>

      {/* Onboarding Boost */}
      <section className="py-16 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-black">
              Onboarding Boost
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Pro Plan
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                3&times; monthly limits for 30 days
              </h3>
              <p className="text-sm text-slate-400">
                Every AI feature runs at triple its normal monthly limit for your
                first 30 days. Import your data, train your team, set up your
                workflows &mdash; without hitting caps during the most
                critical window.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Pro+ Plan
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                3&times; monthly limits for 60 days
              </h3>
              <p className="text-sm text-slate-400">
                Double the onboarding runway. Volume builders migrating
                thousands of records get the full 60 days at 3&times; monthly limits.
                Our CRM Migration Wizard pairs perfectly with the
                extended boost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Power User Add-On */}
      <section className="py-16 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-violet-400" />
            <h2 className="text-2xl sm:text-3xl font-black">
              Power User Seat
            </h2>
          </div>
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <p className="text-sm text-slate-300 mb-4">
                  For the person who lives in the app all day. The Power User
                  add-on gives one seat dramatically elevated AI limits &mdash;
                  3,000 Foreman AI conversations/month, unlimited Blueprint AI and
                  Bid Import AI, and unlimited Punchlist &amp; MLS Listing AI.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#10003;</span>
                    Available on Pro and Pro+ plans only
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#10003;</span>
                    +$149/seat/month per Power User
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#10003;</span>
                    Stacks with onboarding boost (3&times; even the elevated limits)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">&#10003;</span>
                    Org-wide pools (Support Agent, REST API) are shared &mdash; not per-seat
                  </li>
                </ul>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <div className="text-4xl font-black text-violet-400">
                  +$149
                </div>
                <div className="text-sm text-slate-500">/seat/month</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Access */}
      <section className="py-16 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-black">
              Role-Based AI Access
            </h2>
          </div>
          <p className="text-sm text-slate-400 mb-8 max-w-2xl">
            Not every role needs every AI feature. Access is tiered by role so
            your team gets exactly what they need &mdash; and nothing they
            don&apos;t.
          </p>

          <div className="space-y-4">
            {roleTiers.map((tier) => (
              <div
                key={tier.tier}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col sm:flex-row sm:items-center gap-3"
              >
                <div className="sm:w-24 flex-shrink-0">
                  <span
                    className={`text-sm font-bold uppercase tracking-wider ${tier.color}`}
                  >
                    {tier.tier}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">
                    {tier.roles}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {tier.access}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 mt-6">
            * REST API access requires the $200/mo add-on on Pro, or is included with Pro+.
          </p>
        </div>
      </section>

      {/* AI Models & Cost Transparency */}
      <section className="py-16 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-black">
              AI Models &amp; Cost Transparency
            </h2>
          </div>
          <p className="text-sm text-slate-400 mb-8 max-w-2xl">
            Every AI feature runs on a specific model. We publish the approximate cost per use so you know
            exactly what powers your workflows. <strong className="text-white">You are never billed per use</strong> &mdash;
            your subscription covers everything within your daily limits.
          </p>

          <div className="space-y-3">
            {[
              { name: "Foreman AI\u2122", model: "Claude Sonnet 4 (Anthropic)", cost: "~$0.08/action" },
              { name: "Blueprint AI", model: "GPT-4o (OpenAI)", cost: "~$0.06/use" },
              { name: "Bid Import AI", model: "GPT-4o-mini (OpenAI)", cost: "~$0.01/use" },
              { name: "AI Support Agent", model: "GPT-4o-mini (OpenAI)", cost: "~$0.005/use" },
              { name: "Punchlist AI", model: "Whisper + GPT-4o-mini (OpenAI)", cost: "~$0.007/use" },
              { name: "MLS Listing AI", model: "GPT-4o-mini (OpenAI)", cost: "~$0.02/use" },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6"
              >
                <div className="sm:w-40 flex-shrink-0">
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                </div>
                <div className="flex-1 text-sm text-slate-400">{item.model}</div>
                <div className="sm:text-right flex-shrink-0">
                  <span className="text-xs font-mono text-emerald-400/80 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                    {item.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 text-center mt-6">
            Cost per use reflects our approximate infrastructure cost. Users pay only their subscription fee plus optional add-ons &mdash; never per-action charges.
          </p>
        </div>
      </section>

      {/* Limits Reset Note + CTA */}
      <section className="py-16 px-4 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>All monthly limits reset on the 1st of each month (UTC)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Ready to build smarter?
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Plans include up to 30 users (60 on Pro+), zero implementation cost, and
            a full database export anytime. Start free during beta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/beta"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-sm hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all"
            >
              Get Beta Access
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-white font-bold text-sm hover:bg-slate-700 transition-all"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
