"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, ArrowRight } from "lucide-react";
import {
  PLANS,
  COMPETITORS,
  ADDONS,
  FOREMAN_SKILL_COUNT,
  WEBHOOK_EVENT_COUNT,
  API_ENDPOINT_COUNT,
  formatPrice,
  annualTotal,
} from "@/lib/pricing";

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-24 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(6,182,212,0.06),transparent)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-4">
            PRICING
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Enterprise power.
            <br />
            <span className="text-amber-400">Not enterprise pricing.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            NEWSTAR and BuildPro cost $50K&ndash;150K to implement and $2K&ndash;5K/mo to run.
            Cornerstone starts at $149/mo. No implementation fee. No per-seat surprises.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-slate-800 border border-slate-700">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                annual
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs font-bold text-emerald-400">2 months free</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500/50 shadow-xl shadow-amber-500/10"
                  : "bg-slate-800/60 border border-slate-700/60 hover:border-slate-600"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span
                    className={`px-4 py-1 text-xs font-bold rounded-full ${
                      plan.highlight
                        ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900"
                        : "bg-gradient-to-r from-slate-600 to-slate-500 text-white"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              {plan.bonusBadge && (
                <div className="mb-4 -mx-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-amber-400">
                      {plan.bonusBadge}
                    </span>
                  </div>
                </div>
              )}

              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.06),transparent_60%)]" />
              )}

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-0.5">{plan.name}</h3>
                <p className="text-xs text-slate-500 mb-1">{plan.target}</p>
                <p className="text-sm text-slate-400 mb-4">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-black text-white">
                    {formatPrice(plan.price, annual)}
                  </span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
                {annual && (
                  <p className="text-xs text-emerald-400 mb-4">
                    {annualTotal(plan.price)}/yr &mdash; save {`$${plan.price * 2}`}
                  </p>
                )}
                {!annual && <div className="mb-4" />}

                <Link
                  href={plan.ctaHref}
                  className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 mb-6 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                  {plan.notIncluded.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <X className="w-4 h-4 text-slate-700 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Rates link */}
        <div className="text-center mb-4">
          <Link
            href="/usage-rates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>See AI usage rates &amp; daily limits by plan</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Add-on pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-sm font-semibold">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>{ADDONS.powerUserSeat.label}: +${ADDONS.powerUserSeat.monthly}/seat/mo &mdash; elevated AI limits (Pro &amp; Pro+ only)</span>
          </div>
        </div>

        {/* BYOA Callout — Pro+ exclusive (Option C, no add-on) */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900/80 to-violet-950/40 border border-cyan-500/30 p-7 sm:p-9 overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[11px] font-black uppercase tracking-widest w-fit">
                  <Zap className="w-3.5 h-3.5" />
                  BYOA &mdash; Bring Your Own Agent
                </div>
                <span className="text-slate-500 text-xs">Included with Pro+ ($599/mo) &middot; Not available on lower tiers</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                Wire <span className="text-cyan-300">your own AI agent</span> to your live builder data.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                Already running Claude, ChatGPT, n8n, Make, or Zapier? Use a voice provider like Twilio,
                Bland, or Retell to text and call subs? <span className="text-white font-semibold">Point them at Cornerstone.</span>{" "}
                Pro+ unlocks <span className="text-cyan-300 font-semibold">the same toolbox Foreman AI uses internally</span> &mdash;
                every one of <span className="text-white font-semibold">Foreman&apos;s {FOREMAN_SKILL_COUNT}+ skills</span> is exposed as a REST endpoint, plus {WEBHOOK_EVENT_COUNT}+ named webhook events.
                We built the API on top of Foreman: every time we ship a new skill, your BYOA agent gets it automatically.
                Read homes, schedule tasks, send bid requests, update POs, fire SMS to subs, notify homebuyers the moment a milestone hits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-cyan-300 text-xs font-black uppercase tracking-wider mb-2">What you get</div>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" /><span><span className="text-white font-semibold">{FOREMAN_SKILL_COUNT}+ Foreman skills</span> exposed as API</span></li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />{API_ENDPOINT_COUNT}+ REST API endpoints (84 dedicated routes + generic execute)</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />3 schema formats: Anthropic, OpenAI, OpenAPI 3.1</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />{WEBHOOK_EVENT_COUNT}+ named webhook events</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />New skills auto-added to your API</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />HMAC signatures + delivery logs</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />Auto-retry with backoff</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />Scoped API keys</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-violet-300 text-xs font-black uppercase tracking-wider mb-2">Bring your agent</div>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-violet-400 mt-1 flex-shrink-0" />Claude / Anthropic</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-violet-400 mt-1 flex-shrink-0" />ChatGPT / OpenAI</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-violet-400 mt-1 flex-shrink-0" />n8n / Make / Zapier</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-violet-400 mt-1 flex-shrink-0" />Custom Python / Node scripts</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-violet-400 mt-1 flex-shrink-0" />In-house enterprise agents</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
                  <div className="text-amber-300 text-xs font-black uppercase tracking-wider mb-2">Bring your voice/SMS</div>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" />Twilio (SMS + voice)</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" />Bland AI (voice agent)</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" />Retell AI (voice agent)</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" />Vapi / ElevenLabs</li>
                    <li className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-amber-400 mt-1 flex-shrink-0" />Any HTTP webhook receiver</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 max-w-3xl">
                <span className="text-white font-semibold">Why this matters:</span> JobTread, Buildertrend, and CoConstruct
                will tell you &ldquo;webhooks exist.&rdquo; We ship the full event catalog with typed payloads <em>and</em> the
                full skill catalog as endpoints &mdash; <span className="text-white">your agent inherits everything Foreman can do, and grows automatically as we ship new skills.</span>
                Nobody else in homebuilder software does this.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link
                  href="/api-access"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-bold hover:from-cyan-400 hover:to-violet-400 transition-all shadow-lg shadow-cyan-500/20"
                >
                  See the full API &amp; webhook catalog
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/api-docs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:border-cyan-500/40 hover:text-white transition-all"
                >
                  Browse developer docs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Beta callout */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Free during beta &mdash; limited to 100 builders
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Beta slots are finite. When they&apos;re gone, standard pricing applies.
            </p>
          </div>
        </div>

        {/* Competitor comparison */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-2">
            How we compare
          </h3>
          <p className="text-center text-sm text-slate-500 mb-6">
            We&apos;re not a Buildertrend alternative. We&apos;re a NEWSTAR/BuildPro
            alternative &mdash; at 1/20th the price.
          </p>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            {COMPETITORS.map((c, i) => (
              <div
                key={c.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  c.highlight
                    ? "bg-cyan-500/10 border-b border-cyan-500/20"
                    : i < COMPETITORS.length - 1
                    ? "border-b border-slate-800 bg-slate-900/50"
                    : "bg-slate-900/50"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {c.highlight && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div
                      className={`font-semibold ${
                        c.highlight ? "text-white" : "text-slate-400"
                      }`}
                    >
                      {c.name}
                    </div>
                    {c.note && (
                      <div
                        className={`text-xs mt-0.5 ${
                          c.highlight ? "text-cyan-400" : "text-slate-600"
                        }`}
                      >
                        {c.note}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span
                    className={`font-bold text-base ${
                      c.highlight
                        ? "text-amber-400"
                        : "text-slate-600 line-through"
                    }`}
                  >
                    {c.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
