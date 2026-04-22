"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    description: "Scheduling, permitting, and homeowner portal.",
    badge: null,
    bonusBadge: null,
    features: [
      "Construction Scheduling (Gantt + Task View)",
      "3-tier dependency auto-cascade",
      "17 pre-built templates",
      "Subcontractor assignment & notifications",
      "Permitting pipeline tracker",
      "Homeowner progress portal (magic link)",
      "FAQ Chatbot (AI help desk)",
      "Up to 1,000 active homes",
      "Email support",
    ],
    notIncluded: ["Sales Pipeline", "Purchasing & Budgets", "Design Center", "Foreman AI", "Blueprint AI"],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    name: "Builder",
    price: "$299",
    period: "/mo",
    description: "Full sales-to-construction workflow.",
    badge: "MOST POPULAR",
    bonusBadge: null,
    features: [
      "Everything in Starter, plus:",
      "Sales Pipeline (60-second home sale)",
      "Purchasing & Budgets",
      "Design Center selections & change orders",
      "Structural options with real-time pricing",
      "Budget auto-generated when a home sale is created",
      "Full PO lifecycle (Draft → Paid)",
      "Bid management & vendor comparison",
      "Priority support",
    ],
    notIncluded: ["Foreman AI", "Blueprint AI"],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$499",
    period: "/mo",
    description: "Everything plus the full AI agent suite.",
    badge: "NEW",
    bonusBadge: "Foreman AI + Blueprint AI included",
    features: [
      "Everything in Builder, plus:",
      "Foreman AI agent — chat in plain English, takes real actions in your app (parts, vendors, homes, supplier scraping). Sonnet, 1,000 msg/mo.",
      "Blueprint AI — upload any floor plan PDF, get 130+ material scopes in 60 seconds. 5 takeoffs/mo.",
      "Multi-community management",
      "Unlimited users & vendors",
      "Advanced analytics & reporting",
      "Priority onboarding support",
      "Early access to new features",
    ],
    notIncluded: [],
    cta: "Start Free Beta",
    ctaHref: "/beta",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Large teams, custom SLAs, and max AI power.",
    badge: null,
    bonusBadge: null,
    features: [
      "Everything in Pro, plus:",
      "Opus model (most powerful)",
      "5,000 AI agent messages/month",
      "Blueprint AI (25 takeoffs/mo)",
      "Dedicated SLA & onboarding",
      "Custom integrations",
      "SSO & advanced permissions",
    ],
    notIncluded: [],
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
  },
];

const competitors = [
  { name: "Cornerstone PM", price: "from $149/mo", note: "Full platform + AI agents. No implementation.", highlight: true },
  { name: "BuilderTrend", price: "$499+/mo", note: "No options pricing engine", highlight: false },
  { name: "CoConstruct", price: "$399+/mo", note: "No structural options", highlight: false },
  { name: "NEWSTAR / BuildPro / MarkSystems", price: "$2K–5K/mo", note: "+ $50K–150K implementation", highlight: false },
];

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
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            NEWSTAR and BuildPro cost $50K–150K to implement and $2K–5K/mo to run.
            Cornerstone starts at $149/mo. Everything included. No implementation fee.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
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
                  <span className={`px-4 py-1 text-xs font-bold rounded-full ${
                    plan.highlight
                      ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900"
                      : "bg-gradient-to-r from-slate-600 to-slate-500 text-white"
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}
              {(plan as {bonusBadge?: string}).bonusBadge && (
                <div className="mb-4 -mx-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-bold text-amber-400">{(plan as {bonusBadge?: string}).bonusBadge}</span>
                  </div>
                </div>
              )}

              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.06),transparent_60%)]" />
              )}

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>

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
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                  {plan.notIncluded.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <X className="w-4 h-4 text-slate-700 mt-0.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* BYOK pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-sm font-semibold">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>BYOK Add-On: +$199/mo — Bring Your Own Key, unlimited AI messages</span>
          </div>
        </div>

        {/* Beta callout */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Free during beta — limited to 100 builders
              </span>
            </div>
            <p className="text-xs text-slate-500">Beta slots are finite. When they&apos;re gone, standard pricing applies.</p>
          </div>
        </div>

        {/* Competitor comparison */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-2">
            How we compare
          </h3>
          <p className="text-center text-sm text-slate-500 mb-6">We&apos;re not a Buildertrend alternative. We&apos;re a NEWSTAR/BuildPro alternative — at 1/20th the price.</p>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  c.highlight
                    ? "bg-cyan-500/10 border-b border-cyan-500/20"
                    : i < competitors.length - 1
                    ? "border-b border-slate-800 bg-slate-900/50"
                    : "bg-slate-900/50"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {c.highlight && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                  )}
                  <div className="min-w-0">
                    <div className={`font-semibold ${
                      c.highlight ? "text-white" : "text-slate-400"
                    }`}>{c.name}</div>
                    {(c as {note?: string}).note && (
                      <div className={`text-xs mt-0.5 ${ c.highlight ? "text-cyan-400" : "text-slate-600" }`}>{(c as {note?: string}).note}</div>
                    )}
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <span className={`font-bold text-base ${
                    c.highlight ? "text-amber-400" : "text-slate-600 line-through"
                  }`}>{c.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
