"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Upload, FileText } from "lucide-react";

export function AiTakeoffSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            AI-Powered &middot; Full Bundle
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-4">
            Material takeoff.{" "}
            <span className="text-violet-400">Under 60 seconds.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Upload a floor plan PDF. AI extracts every room, fixture, and material scope automatically &mdash; replacing hours of manual counting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-2xl shadow-violet-500/10 overflow-hidden border border-violet-500/20">
              <div className="relative w-full" style={{aspectRatio: '1429/1306'}}>
                <Image src="/mockups/ai-takeoff-2.png" alt="AI Takeoff Results" fill className="object-contain" />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-violet-500 text-white text-sm font-bold shadow-lg shadow-violet-500/40">
              47 seconds
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Upload,
                title: "Upload your CAD PDF",
                desc: "Any digital floor plan up to 25MB. Rooms need text labels and visible dimension lines.",
              },
              {
                icon: Zap,
                title: "AI reads the plan",
                desc: "Claude AI Vision extracts rooms, fixtures, flooring, baseboard, drywall, roofing, and more across 3 result tabs.",
              },
              {
                icon: FileText,
                title: "Edit & import",
                desc: "Adjust any quantity, assign option classes, then import directly into your floorplan budgets and design center.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            <Link
              href="/ai-takeoff"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-500 text-white font-bold text-lg hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
            >
              <Zap className="w-5 h-5" />
              See AI Takeoff in Action &rarr;
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-slate-800/60">
          {[
            { num: "< 60s", label: "Per takeoff" },
            { num: "134+", label: "Scopes per plan" },
            { num: "3", label: "Result tabs" },
            { num: "22", label: "Rooms detected" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-violet-400 mb-1">{s.num}</div>
              <div className="text-slate-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
