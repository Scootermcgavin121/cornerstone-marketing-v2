"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap } from "lucide-react";

const plans = [
  {
    name: "Construction",
    price: "$79.99",
    period: "/mo",
    description: "Scheduling, permitting, and buyer portal.",
    badge: null,
    features: [
      "Construction Scheduling (Gantt)",
      "Subcontractor Assignment",
      "Permitting Tracker",
      "Buyer Progress Portal",
      "Up to 10 active projects",
      "Email support",
    ],
    notIncluded: ["Purchasing & Budgets", "Sales Pipeline", "Design Center"],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    name: "Full Platform",
    price: "$179.98",
    period: "/mo",
    description: "All 6 modules. Full builder lifecycle.",
    badge: "BEST VALUE",
    features: [
      "Everything in Construction, plus:",
      "Purchasing & Budget Tracking",
      "Sales Pipeline (CRM)",
      "Design Center & Selections",
      "Buyer Approval Workflows",
      "Priority support",
      "Unlimited projects",
    ],
    notIncluded: [],
    cta: "Start Free Beta",
    ctaHref: "/beta",
    highlight: true,
  },
];

const competitors = [
  { name: "Cornerstone PM", price: "$79.99", highlight: true },
  { name: "BuilderTrend", price: "$499+", highlight: false },
  { name: "Procore", price: "$700+", highlight: false },
  { name: "CoConstruct", price: "$399+", highlight: false },
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
            Priced for builders.
            <br />
            <span className="text-amber-400">Not for enterprise.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            BuilderTrend starts at $499/mo. We start at $79.99/mo.
            You do the math.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                  : "bg-slate-800/60 border border-slate-700/60 hover:border-slate-600"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900">
                    {plan.badge}
                  </span>
                </div>
              )}

              {plan.highlight && (
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_60%)]" />
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

        {/* Beta callout */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Beta users get 5 years free access — no credit card required
            </span>
          </div>
        </div>

        {/* Competitor comparison */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-slate-300 mb-6">
            How we compare
          </h3>
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
                <div className="flex items-center gap-3">
                  {c.highlight && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                  <span
                    className={`font-semibold ${
                      c.highlight ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {c.name}
                  </span>
                  {c.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      You are here
                    </span>
                  )}
                </div>
                <span
                  className={`font-bold text-lg ${
                    c.highlight ? "text-amber-400" : "text-slate-600 line-through"
                  }`}
                >
                  {c.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
