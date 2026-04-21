"use client";
import React from "react";
import Link from "next/link";
import { VideoPlayer } from "@/components/VideoPlayer";

export function VideoSection() {
  return (
    <section className="relative bg-slate-950 py-16">
      <div className="text-center mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">
          See It In Action
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          The full platform,{" "}
          <span className="text-cyan-400">in 60 seconds.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">
          From sales pipeline to homeowner portal â€” watch how Cornerstone runs your entire operation.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <VideoPlayer src="/video/cornerstone-demo.mp4" />

        <div className="text-center mt-8">
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            Request Early Access â†’
          </Link>
          <p className="text-slate-500 text-sm mt-3">Beta is limited to 100 builders. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
