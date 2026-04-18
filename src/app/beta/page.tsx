"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { Check, Zap, ArrowRight } from "lucide-react";

const perks = [
  "Free access for 5 years",
  "All 6 modules included",
  "Priority onboarding support",
  "Lock in beta pricing forever",
  "Direct input on new features",
  "No credit card required",
];

export default function BetaPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    homes: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (form.website) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <BackgroundBeams />
        <SparklesCore particleColor="#f59e0b" particleDensity={30} className="opacity-40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
                <Zap className="w-3.5 h-3.5" />
                <span>Free Beta Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                Be the first.
                <br />
                <span className="text-amber-400">Build with us.</span>
              </h1>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                We&apos;re opening beta access to a limited number of home builders.
                Join now and get 5 years free — your input shapes the product.
              </p>

              <ul className="space-y-3 mb-8">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                <p className="text-sm text-amber-400/80">
                  <strong className="text-amber-400">Early adopter guarantee:</strong> Beta users
                  lock in free access for 5 years. No payment ever required during beta.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent rounded-3xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-8">
                {status === "success" ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
                    <p className="text-slate-400 mb-6">
                      We&apos;ll reach out soon with your beta access. Welcome to the early crew.
                    </p>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-white mb-6">Request Beta Access</h2>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 focus:bg-slate-800 transition-colors"
                          placeholder="Rick Harmon"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                          placeholder="rick@harmonbuilds.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="Harmon Custom Homes"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Homes Built Per Year *
                      </label>
                      <select
                        required
                        value={form.homes}
                        onChange={(e) => setForm({ ...form, homes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                      >
                        <option value="">Select range...</option>
                        <option value="1-5">1–5 homes/year</option>
                        <option value="6-15">6–15 homes/year</option>
                        <option value="16-30">16–30 homes/year</option>
                        <option value="31-50">31–50 homes/year</option>
                        <option value="50+">50+ homes/year</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Anything else you&apos;d like us to know?
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                        placeholder="What software are you currently using? What's your biggest pain point?"
                      />
                    </div>

                    {status === "error" && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:from-amber-400 hover:to-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        "Submitting..."
                      ) : (
                        <>
                          Request Beta Access
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-600">
                      No credit card. No spam. Just beta access.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
