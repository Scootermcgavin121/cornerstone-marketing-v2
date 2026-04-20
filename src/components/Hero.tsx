"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import { SparklesCore } from "./ui/sparkles";
import { ArrowRight, Zap } from "lucide-react";

const words = ["Smarter.", "Faster.", "Confidently."];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(word.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-8">
      {/* Background effects */}
      <BackgroundBeams />
      <SparklesCore
        particleColor="#06b6d4"
        particleDensity={60}
        className="opacity-50"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>Free Beta — 5 Years Free for Early Adopters</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.9] mb-6">
          Build{" "}
          <span className="relative inline-block">
            <span
              className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent"
              style={{ minWidth: "4ch", display: "inline-block" }}
            >
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-light mb-4 leading-relaxed">
          Construction management for{" "}
          <span className="text-white font-semibold">home builders</span> — not for
          enterprise companies.
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Scheduling, purchasing, sales pipeline, and buyer portal — all in one platform.
          Starting at{" "}
          <span className="text-amber-400 font-semibold">$79.99/mo</span>.
          BuilderTrend starts at <span className="line-through text-slate-600">$499/mo</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/beta"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5"
          >
            Start Free Beta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/5 transition-all duration-200"
          >
            See All Features
          </Link>
        </div>

        {/* Social proof strip */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          {[
            { val: "84%", label: "cheaper than BuilderTrend" },
            { val: "5 yrs", label: "free for beta users" },
            { val: "6", label: "modules in one platform" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-white">{stat.val}</span>
              <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
