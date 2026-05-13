"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, ArrowRight } from "lucide-react";

interface Plan {
  name: string;
  price: number;
  description: string;
  target: string;
  badge: string | null;
  bonusBadge: string | null;
  maxUsers: number;
  features: string[];
  notIncluded: string[];
  cta: string;
  ctaHref: string;
  highlight: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 149,
    description: "Core scheduling for small builders.",
    target: "1\u201310 homes/yr",
    badge: null,
    bonusBadge: null,
    maxUsers: 30,
    features: [
      "Construction Scheduling (Gantt + Task View)",
      "3-tier dependency auto-cascade",
      "17 pre-built schedule templates",
      "Subcontractor assignment & smart notifications",
      "Permitting pipeline tracker",
      "Homeowner progress portal (magic link)",
      "Customer portal with progress photos",
      "Document management",
      "Punchlist AI (5/day)",
      "MLS Listing AI (5/day)",
      "Up to 30 users",
    ],
    notIncluded: [
      "Purchasing & Budgets",
      "Sales Pipeline",
      "Design Center",
      "Foreman AI\u2122",
      "Blueprint AI",
      "REST API",
    ],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    name: "Builder",
    price: 299,
    description: "Full sales-to-construction workflow.",
    target: "5\u201320 homes/yr",
    badge: null,
    bonusBadge: null,
    maxUsers: 30,
    features: [
      "Everything in Starter, plus:",
      "Purchasing module (POs, budgets, floorplans)",
      "Sales Pipeline (60-second home sale)",
      "Design Center selections & change orders",
      "Structural options with real-time pricing",
      "Budget auto-generated on home sale",
      "Full PO lifecycle (Draft \u2192 Paid)",
      "Bid management & vendor comparison",
      "Punchlist AI (10/day)",
      "MLS Listing AI (10/day)",
      "Up to 30 users",
      "Priority support",
    ],
    notIncluded: [
      "Foreman AI\u2122",
      "Blueprint AI",
      "Bid Import AI",
      "REST API",
    ],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    name: "Pro",
    price: 499,
    description: "Everything plus the full AI suite.",
    target: "20\u201350 homes/yr",
    badge: "MOST POPULAR",
    bonusBadge: "Full AI suite included",
    maxUsers: 30,
    features: [
      "Everything in Builder, plus:",
      "Foreman AI\u2122 \u2014 83+ skills, takes real actions (20/day)",
      "Blueprint AI \u2014 upload plans, get 130+ scopes in 60s (5/day)",
      "Bid Import AI \u2014 parse vendor bids from PDF (20/day)",
      "AI Support Agent (250 queries/day org-wide)",
      "3\u00d7 AI limits for first 30 days",
      "REST API available as $200/mo add-on",
      "Up to 30 users",
      "Priority onboarding support",
    ],
    notIncluded: [],
    cta: "Start Free Beta",
    ctaHref: "/beta",
    highlight: true,
  },
  {
    name: "Pro+",
    price: 599,
    description: "Volume builders. Full API. Priority everything.",
    target: "50+ homes/yr",
    badge: "FULL PLATFORM",
    bonusBadge: "REST API + Webhooks included",
    maxUsers: 60,
    features: [
      "Everything in Pro, plus:",
      "REST API + 30 Webhooks INCLUDED",
      "Foreman AI\u2122 (30/day, Opus model)",
      "Blueprint AI (10/day)",
      "Bid Import AI (40/day)",
      "AI Support Agent (500 queries/day org-wide)",
      "60 user seats (2\u00d7 Pro)",
      "3\u00d7 AI limits for first 60 days",
      "Automated bidding pipeline",
      "Priority support & dedicated onboarding",
      "SSO & advanced permissions",
    ],
    notIncluded: [],
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
  },
];

const competitors = [
  {
    name: "Cornerstone PM\u2122",
    price: "from $149/mo",
    note: "Full platform + AI agents. No implementation.",
    highlight: true,
  },
  {
    name: "BuilderTrend",
    price: "$499+/mo",
    note: "No native AI agents. Per-user fees.",
    highlight: false,
  },
  {
    name: "NEWSTAR / BuildPro / MarkSystems",
    price: "$2K\u20135K/mo",
    note: "+ $50K\u2013150K implementation",
    highlight: false,
  },
  {
    name: "JobTread",
    price: "$179+/mo",
    note: "No AI. No design center engine.",
    highlight: false,
  },
];

function formatPrice(monthly: number, annual: boolean): string {
  if (annual) {
    const yearlyTotal = monthly * 10; // 2 months free
    const perMonth = Math.round(yearlyTotal / 12);
    return `$${perMonth}`;
  }
  return `$${monthly}`;
}

function annualTotal(monthly: number): string {
  return `$${(monthly * 10).toLocaleString()}`;
}

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
            <span>Power User Seat: +$149/seat/mo &mdash; elevated AI limits (Pro &amp; Pro+ only)</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/60 text-slate-300 text-sm font-semibold">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>REST API + Webhooks: +$200/mo add-on (Pro only, included in Pro+)</span>
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
