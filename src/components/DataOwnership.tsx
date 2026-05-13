"use client";

import Image from "next/image";
import { Database, Download, ShieldCheck, Lock, Clock, FileJson } from "lucide-react";

export function DataOwnership() {
  return (
    <section id="data-ownership" className="relative py-24 px-4 border-t border-slate-900">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            No Vendor Lock-In
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5">
            Your data is{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              always yours.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
            Take all your data with you, anytime. <strong className="text-white">No strings attached.</strong>{" "}
            One-click export to JSON or CSV. Every vendor, every home, every schedule, every option, every
            budget line. Nightly auto-backups. Zero exit fees. We don&apos;t hold your business hostage.
          </p>
        </div>

        {/* Screenshot + benefit grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Screenshot */}
          <div className="lg:col-span-3 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-emerald-500/10 to-amber-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/60">
              <Image
                src="/mockups/feature-backups.jpg"
                alt="Cornerstone PM™ Backups & Data Export interface — one-click JSON or CSV download of your entire database"
                width={1200}
                height={760}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-2 space-y-5">
            <BenefitRow
              icon={<Download className="w-5 h-5" />}
              title="One-click full export"
              desc="Download every record across 89+ tables in JSON or CSV. No support ticket. No 30-day waiting period."
              accent="amber"
            />
            <BenefitRow
              icon={<Clock className="w-5 h-5" />}
              title="Nightly auto-backups"
              desc="Snapshots run at 2:00 AM ET every night and stay available for 7 days. Your safety net runs while you sleep."
              accent="emerald"
            />
            <BenefitRow
              icon={<FileJson className="w-5 h-5" />}
              title="JSON or CSV — your choice"
              desc="JSON for full machine-readable data. CSV with one file per table — opens straight in Excel."
              accent="cyan"
            />
            <BenefitRow
              icon={<Lock className="w-5 h-5" />}
              title="Sensitive fields excluded"
              desc="Passwords, tokens, and secrets are stripped automatically. Safe to share with auditors, accountants, or migration teams."
              accent="violet"
            />
          </div>
        </div>

        {/* Trust banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-slate-900/40 to-emerald-500/5 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 backdrop-blur-sm">
            <div className="w-14 h-14 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
              <Database className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold text-white mb-1">
                The most important promise we make.
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                If Cornerstone ever stops working for you, walk away with a
                complete copy of your data. No exit fees. No data hostage.
                No 90-day extraction process. Just a download button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitRow({
  icon,
  title,
  desc,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent: "amber" | "emerald" | "cyan" | "violet";
}) {
  const accentClasses = {
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  };

  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-colors">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 ${accentClasses[accent]}`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-white text-base mb-1">{title}</div>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
