import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, X, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "BuilderTrend vs Cornerstone PM — Cornerstone PM Blog",
  description:
    "BuilderTrend starts at $499/mo. Cornerstone PM starts at $149/mo. Here's what you actually get for the difference.",
};

const comparison = [
  { feature: "Construction Scheduling", buildertrend: true, cornerstone: true },
  { feature: "Purchasing & Budgets", buildertrend: true, cornerstone: true },
  { feature: "Sales Pipeline (CRM)", buildertrend: true, cornerstone: true },
  { feature: "Buyer Portal", buildertrend: true, cornerstone: true },
  { feature: "Design Center", buildertrend: true, cornerstone: true },
  { feature: "Permitting Tracker", buildertrend: true, cornerstone: true },
  { feature: "Commercial Construction Features", buildertrend: true, cornerstone: false },
  { feature: "Price for small builders", buildertrend: false, cornerstone: true },
  { feature: "Simple, builder-first UX", buildertrend: false, cornerstone: true },
  { feature: "2-year Free Beta", buildertrend: false, cornerstone: true },
];

export default function BuildertrendPost() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            BuilderTrend vs Cornerstone PM: The Honest Comparison
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 14, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            BuilderTrend is the 800-pound gorilla of builder software. It&apos;s been around since 2006,
            it has a giant feature list, and it has a sales team that will happily get you on a demo.
            It also starts at $499 a month.
          </p>

          <p>
            If you&apos;re a builder closing 10–30 homes a year, that&apos;s $6,000 a year — before you even
            hire your first framer. For a lot of small builders, that&apos;s not just a software expense.
            That&apos;s a meaningful chunk of their operating budget.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What you get with BuilderTrend</h2>
          <p>
            BuilderTrend is genuinely comprehensive. Scheduling, purchasing, sales, financial reporting,
            warranty management, daily logs, client communication — it&apos;s all there. If you need all
            of it, and you have the team to learn and use all of it, BuilderTrend is a solid product.
          </p>
          <p>
            The problem is that most small builders don&apos;t need all of it. And the complexity that
            makes it powerful for a national builder makes it overwhelming for a 15-home-a-year shop.
            We&apos;ve talked to dozens of builders who are paying $499/mo and using maybe 20% of the
            features — while still managing their subs via text and tracking POs in Excel because
            &ldquo;it&apos;s just easier.&rdquo;
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What you get with Cornerstone PM</h2>
          <p>
            Cornerstone PM was built for the builder who needs the core tools — scheduling, purchasing,
            sales pipeline, design center, permitting, and buyer portal — in a package that a real
            builder can actually use without a 3-day training session.
          </p>
          <p>
            We don&apos;t have every feature BuilderTrend has. We don&apos;t have warranty management modules
            or commercial construction features or a dozen integrations with enterprise accounting
            systems. We have the six things that matter most to residential home builders who are
            building 5–50 homes a year.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">Feature comparison</h2>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 my-8">
          <div className="grid grid-cols-3 px-6 py-3 bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <div>Feature</div>
            <div className="text-center">BuilderTrend</div>
            <div className="text-center">Cornerstone PM</div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-3.5 items-center ${
                i < comparison.length - 1 ? "border-b border-slate-800/60" : ""
              } bg-slate-900/60`}
            >
              <div className="text-slate-300 text-sm">{row.feature}</div>
              <div className="flex justify-center">
                {row.buildertrend ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="flex justify-center">
                {row.cornerstone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <X className="w-4 h-4 text-slate-600" />
                )}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 px-6 py-4 items-center bg-slate-900 border-t border-slate-700">
            <div className="text-white font-bold text-sm">Starting Price</div>
            <div className="text-center text-slate-500 line-through text-sm">$499/mo</div>
            <div className="text-center text-amber-400 font-bold text-sm">$149/mo</div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The bottom line</h2>
          <p>
            If you&apos;re a national homebuilder closing 300+ homes a year with a dedicated operations
            team — BuilderTrend might be worth $499/mo. They have the depth of features to justify it.
          </p>
          <p>
            If you&apos;re building 5–50 homes a year and you want powerful, usable tools without the
            enterprise price tag — Cornerstone PM was built for you. At $149/mo for the base plan
            and $179.98/mo for the full platform, you&apos;re getting everything you actually need.
          </p>
          <p>
            We&apos;re in beta right now, and early adopters get 2 years free. No credit card required.
            We think that&apos;s a pretty good deal.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-lg font-bold text-white mb-2">Try Cornerstone PM free</h3>
          <p className="text-slate-400 text-sm mb-4">
            Beta access is open now. 2 years free for early adopters.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-sm hover:from-amber-400 hover:to-amber-300 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
