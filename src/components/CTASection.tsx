"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

export function CTASection() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Sparkles background */}
      <SparklesCore particleColor="#f59e0b" particleDensity={40} className="opacity-30" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(245,158,11,0.06),transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-8">
          <Zap className="w-3.5 h-3.5" />
          <span>Limited Beta — Free for 2 years</span>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] mb-6">
          Stop paying{" "}
          <span className="line-through text-slate-600">$499</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
            for software that&apos;s
          </span>
          <br />
          built for someone else.
        </h2>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Cornerstone PM was built by a builder who got tired of wrestling with enterprise software.
          Request beta access today — no credit card, no catch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/beta"
            className="group inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
          >
            Request Beta Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/5 transition-all duration-200"
          >
            See Features
          </Link>
        </div>
      </div>
    </section>
  );
}
