"use client";

import { useState, useRef, FormEvent } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function ArchitectureForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formStartTime = useRef(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/agent-architecture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          role: data.get("role"),
          website: data.get("website"), // honeypot
          _t: formStartTime.current,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Try again?");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Try again?");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4">
          <CheckCircle2 className="w-7 h-7 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Check your inbox</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          The PDF is on its way. If you don't see it in 60 seconds, check spam — and if it's still missing, email{" "}
          <a href="mailto:scott@cornerstonepm.ai" className="text-emerald-400 hover:underline">
            scott@cornerstonepm.ai
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
          Name <span className="text-emerald-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
          Work email <span className="text-emerald-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
          placeholder="you@company.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
            placeholder="Your builder"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
            Role
          </label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className="w-full px-4 py-2.5 bg-slate-950/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition"
            placeholder="CEO, VP Ops, IT..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Email me the PDF <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400 mt-2">{errorMsg}</p>
      )}

      <p className="text-xs text-slate-500 pt-2 leading-relaxed">
        We'll only email you the deck plus one short follow-up. No drip campaign. Unsubscribe by replying "unsubscribe."
      </p>
    </form>
  );
}
