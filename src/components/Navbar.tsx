"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

// Top-nav links — keep this list short. Anything more specific lives
// inside the Features dropdown so the navbar never wraps.
const navLinks = [
  { label: "Features", href: "/features", hasDropdown: true },
  { label: "Pricing", href: "/#pricing", hasDropdown: false },
  { label: "AI Agents", href: "/ai-agents", hasDropdown: false },
  { label: "Developers", href: "/api-docs", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

const featureLinks = [
  { label: "All Features", href: "/features", desc: "Everything included in every plan" },
  { label: "Construction Scheduling", href: "/construction", desc: "Gantt charts, vendors, notifications" },
  { label: "Purchasing & Budgets", href: "/purchasing", desc: "Takeoffs, POs, bid management" },
  { label: "Sales Pipeline", href: "/sales", desc: "60-second home sale, buyer tracking" },
  { label: "MLS Listing Generator", href: "/listing-sheet", desc: "AI-written MLS listings from live project data" },
  { label: "Design Center", href: "/design", desc: "Room-by-room selections, spec levels" },
  { label: "Permitting & Inspections", href: "/permitting", desc: "Permit sequences, phase gates, auto notifications" },
  { label: "Buyer Portal", href: "/features#portal", desc: "Milestone journey, photo gallery" },
  { label: "⚡ AI Blueprint Takeoff", href: "/ai-takeoff", desc: "Upload PDF — instant material takeoff", highlight: true },
  { label: "🤖 Foreman AI", href: "/foreman", desc: "47-skill AI agent, natural language commands" },
  { label: "✨ AI Agents Overview", href: "/ai-agents", desc: "Three AI agents built for builders" },
  { label: "⚙️ API Access (BYOA)", href: "/api-access", desc: "REST API for AI agents — automate bidding pipeline", highlight: true },
  { label: "📚 API Docs", href: "/api-docs", desc: "Full endpoint reference, webhooks, code examples" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-slate-950/50"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo-new.png"
              alt="Cornerstone PM"
              className="h-16 sm:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop links — only render at lg+ to avoid wrapping at narrow widths */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 inline-flex items-center gap-1 whitespace-nowrap"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-[560px] bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    <div className="grid grid-cols-2">
                      {featureLinks.map((fl) => (
                        <Link key={fl.href} href={fl.href} className={`block px-4 py-2.5 hover:bg-white/5 transition-colors ${'highlight' in fl && fl.highlight ? 'border-t border-slate-800 mt-1 pt-3' : ''}`}>
                          <div className={`text-sm font-medium ${'highlight' in fl && fl.highlight ? 'text-violet-400' : 'text-white'}`}>{fl.label}</div>
                          <div className="text-xs text-slate-500">{fl.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA — same lg breakpoint as desktop links */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="https://app.cornerstonepm.ai/login"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              href="/beta"
              className="px-5 py-3 text-sm font-semibold rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 whitespace-nowrap leading-tight text-center"
            >
              Get Beta Access
            </Link>
          </div>

          {/* Mobile/tablet hamburger — shows below lg breakpoint */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 opacity-50 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {featuresOpen && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l border-slate-800 pl-3">
                      {featureLinks.map((fl) => (
                        <Link
                          key={fl.href}
                          href={fl.href}
                          className="block px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => { setMobileOpen(false); setFeaturesOpen(false); }}
                        >
                          <div className={`text-sm font-medium ${'highlight' in fl && fl.highlight ? 'text-violet-400' : 'text-slate-200'}`}>{fl.label}</div>
                          <div className="text-xs text-slate-500">{fl.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-1 border-t border-slate-800 mt-3 space-y-2">
              <Link
                href="/beta"
                className="block w-full px-4 py-3 text-center font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950"
                onClick={() => setMobileOpen(false)}
              >
                Get Beta Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
