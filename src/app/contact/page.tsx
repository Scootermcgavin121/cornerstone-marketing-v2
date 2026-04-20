"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Mail, MessageSquare, ArrowRight, Zap } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <BackgroundBeams />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 w-full">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">Get in touch</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Questions, partnership inquiries, or just want to say hi — we&apos;re real people who
              actually read our email.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left — info cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="font-bold text-white">Contact Us</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Use the form to reach us directly. We respond within one business day.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="font-bold text-white">Beta Support</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Beta users get direct Slack access to our team.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-amber-400 text-sm">Beta — Limited to 100 builders</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sign up now and get 2 years free. Beta slots are finite — when they&apos;re gone, standard pricing applies.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-slate-400">We&apos;ll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>

                  {/* Honeypot */}
                  <input type="text" name="website" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="Rick Harmon"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                        placeholder="rick@harmonbuilds.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="Harmon Custom Homes"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder="What's on your mind?"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 hover:from-cyan-400 hover:to-teal-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : (
                      <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    No spam. We respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
