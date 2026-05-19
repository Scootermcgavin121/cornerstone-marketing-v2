import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Brain, BookOpen, Calculator, Sparkles, Zap, Database, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Foreman's Brain - 24,500-word Construction Knowledge Base | Cornerstone PM\u2122",
  description:
    "Foreman AI is powered by a 183KB construction knowledge base spanning 24,500+ words across 30 chapters - App Knowledge (158KB / 2,300 lines), Estimating Formulas (8KB / 39 formulas), and a Prompt Library (16KB / 10 design center categories). The reason Foreman can chain 75 actions per turn when ChatGPT caps at 5.",
  openGraph: {
    title: "Foreman's Brain - 24,500 Words of Construction Expertise Baked Into the AI",
    description:
      "Three memory files. 183KB of construction knowledge. 39 estimating formulas. 10 design center setup prompts. This is what makes Foreman AI different from a generic chatbot.",
  },
};

const chapters = [
  { num: "01", title: "Getting Started", desc: "Account setup, role onboarding, navigation primer" },
  { num: "02", title: "User Roles &amp; Permissions", desc: "Admin, Builder, Sales, Designer, Vendor &mdash; what each can see and do" },
  { num: "03", title: "Communities &amp; Floorplans", desc: "Data model, plan-level options, multi-community vendor wiring" },
  { num: "04", title: "Homes &amp; Lifecycle", desc: "Stages from pre-sale through closing, cascading task triggers" },
  { num: "05", title: "Locations &amp; Rooms", desc: "Floorplan locations, room dimensions, location-aware takeoffs" },
  { num: "06", title: "Takeoffs &amp; Material Scopes", desc: "How Blueprint AI feeds the parts catalog, room-level part placement" },
  { num: "07", title: "Parts Catalog", desc: "Schema, bulk import, deduplication, smart linking to options" },
  { num: "08", title: "Design Center Architecture", desc: "OptionClasses, options, attribute groups, the multiplication model" },
  { num: "09", title: "Option Attributes", desc: "Door style \u00d7 wood species \u00d7 finish \u00d7 overlay matrix logic" },
  { num: "10", title: "Spec Levels &amp; Tier Access", desc: "Budget / Standard / Upgrade tiers and access locking" },
  { num: "11", title: "Buyer Configurator", desc: "Live pricing, compatibility rules, real-time selection flow" },
  { num: "12", title: "Designer Packages", desc: "Curated package model, override/unlock behavior" },
  { num: "13", title: "Structural Options", desc: "Patios, bonus rooms, structural upgrades with parts tracking" },
  { num: "14", title: "Allowances", desc: "Budget placeholders for non-bid items, floorplan vs global scope" },
  { num: "15", title: "Vendor Management", desc: "Vendor lifecycle, scorecards, multi-community assignment" },
  { num: "16", title: "Bid Requests &amp; Templates", desc: "Auto-generated Excel templates, vendor portal flow, attribute pricing" },
  { num: "17", title: "Bid Comparison &amp; Awards", desc: "Side-by-side comparison, lock-after-accept, community-level awards" },
  { num: "18", title: "Purchasing Workflow", desc: "PO generation, vendor notifications, fulfillment tracking" },
  { num: "19", title: "Scope Items", desc: "Labor / material / mixed buckets, pricing engine integration" },
  { num: "20", title: "Pricing Engine", desc: "Fallback chain: vendor bid \u2192 awarded \u2192 cost code \u2192 default" },
  { num: "21", title: "Budget &amp; Cost Tracking", desc: "Master cost budget, variance analysis, profitability by home" },
  { num: "22", title: "Scheduling &amp; Templates", desc: "Template-driven schedules, dependencies, cascade triggers" },
  { num: "23", title: "Sales Pipeline", desc: "Stages, tasks, agent assignment, MLS listing generation" },
  { num: "24", title: "Webhook Catalog", desc: "30 named events, payload schemas, HMAC signatures" },
  { num: "25", title: "REST API Surface", desc: "Endpoints, auth, response shapes, rate limits" },
  { num: "26", title: "Notifications &amp; Subscriptions", desc: "Per-user toggles, role subscriptions, email + in-app" },
  { num: "27", title: "Backup &amp; Export", desc: "CSV / JSON full-database export, nightly snapshots" },
  { num: "28", title: "Migration Wizard", desc: "AI-assisted import from Buildertrend, JobTread, CoConstruct, CSV" },
  { num: "29", title: "Permissions &amp; ACL", desc: "Org isolation, role enforcement, audit logging" },
  { num: "30", title: "Foreman AI Capabilities", desc: "Skill registry, system prompt, memory management, undo" },
];

const formulas = [
  "Drywall sheet count from sqft", "Drywall coverage with waste factor", "Paint gallons from wall sqft",
  "Paint coverage by sheen type", "Concrete cubic yards (slab)", "Concrete cubic yards (footing)",
  "Roofing squares from sqft", "Roof underlayment rolls", "Lumber board-feet (framing)",
  "Lumber linear-feet (trim)", "Stud count from wall length", "Plywood sheet count (subfloor)",
  "Plywood sheet count (sheathing)", "Insulation R-value by zone", "Insulation sqft to bag count",
  "Tile sqft with grout waste", "Tile linear-feet (trim)", "Carpet sqyd from sqft",
  "Hardwood board-feet", "Cabinet linear-feet from layout", "Countertop sqft from cabinet LF",
  "Window count from elevation", "Door count from floorplan", "Trim linear-feet (base)",
  "Trim linear-feet (crown)", "Electrical receptacle count by code", "Recessed can count by room sqft",
  "Plumbing fixture count by bath count", "HVAC tonnage from sqft + climate", "Ductwork linear-feet",
  "Gutter linear-feet from roof perimeter", "Driveway sqft + concrete yards", "Sidewalk sqft + concrete yards",
  "Excavation cubic yards", "Backfill cubic yards", "Sod sqft from lot - footprint",
  "Mulch cubic yards from bed sqft", "Sprinkler zone count", "Total rough cost from takeoff",
];

const promptCategories = [
  { name: "Lighting Package", count: "1 prompt", desc: "Full fixture-by-fixture lighting plan from your catalog" },
  { name: "Plumbing Package", count: "1 prompt", desc: "Toilets, faucets, showers per room from your catalog" },
  { name: "Cabinets Setup", count: "1 prompt", desc: "Series, door styles, wood species, finishes, attribute matrix" },
  { name: "Countertops Setup", count: "1 prompt", desc: "Granite / Quartz / Laminate with brand attribute values" },
  { name: "Flooring Setup", count: "1 prompt", desc: "Hardwood / Tile / Carpet with sqft pricing modifiers" },
  { name: "Tile Collections", count: "1 prompt", desc: "Bath, kitchen backsplash, floor with size matrix" },
  { name: "Appliances Setup", count: "1 prompt", desc: "Good / Better / Best tiers with brand attribute values" },
  { name: "Plumbing Fixtures", count: "1 prompt", desc: "Faucets, toilets, showerheads with finish attributes" },
  { name: "Carpet Collections", count: "1 prompt", desc: "Pile types, colors, padding tiers with sqft pricing" },
  { name: "Exterior Finishes", count: "1 prompt", desc: "Siding, trim, shutters with color attribute matrix" },
];

const skillCategoryBreakdown = [
  { name: "Design Center", count: 49 },
  { name: "Scheduling", count: 32 },
  { name: "Structural Options", count: 27 },
  { name: "Scope Items", count: 26 },
  { name: "Option Attributes", count: 23 },
  { name: "Locations &amp; Takeoffs", count: 22 },
  { name: "Parts Catalog", count: 21 },
  { name: "Vendor Management", count: 18 },
  { name: "Sales Pipeline", count: 17 },
  { name: "Document Generation", count: 16 },
  { name: "Budget &amp; Pricing", count: 15 },
  { name: "Home Management", count: 14 },
  { name: "Web &amp; Image", count: 13 },
  { name: "Bid Requests", count: 12 },
  { name: "Notifications", count: 11 },
  { name: "Backup &amp; Export", count: 10 },
  { name: "Reports &amp; Analytics", count: 25 },
  { name: "System Intelligence", count: 16 },
  { name: "User Memory", count: 15 },
  { name: "Misc Utilities", count: 16 },
];

export default function BrainPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(167,139,250,0.08),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-semibold mb-6">
            <Brain className="w-3.5 h-3.5" />
            FOREMAN&apos;S BRAIN &middot; 24,500+ WORDS OF CONSTRUCTION EXPERTISE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            The <span className="text-violet-400">183KB</span> knowledge base<br />
            powering Foreman AI<sup className="text-2xl sm:text-3xl lg:text-4xl align-super text-amber-400 ml-1">TM</sup>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            ChatGPT has 5 tools and zero construction context. Foreman has 396 skills, three memory files,
            and a 30-chapter manual on Cornerstone PM&apos;s data model baked into every conversation.
          </p>
          <p className="text-lg text-amber-400 font-semibold mb-10">
            This is why it actually works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/foreman" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5">
              See Foreman in action &rarr;
            </Link>
            <Link href="/blog/foreman-ai-75-action-loop" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              Read the technical deep-dive
            </Link>
          </div>
        </div>
      </section>

      {/* Top-line stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "24,500+", label: "Words of expertise", sub: "Construction-specific" },
            { num: "30", label: "Chapters", sub: "Every system documented" },
            { num: "39", label: "Estimating formulas", sub: "Real construction math" },
            { num: "10", label: "Setup prompts", sub: "Copy-paste ready" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-violet-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The 3 memory files - DEEP */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">Three memory files. One agent.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Every conversation Foreman has starts with all 183KB of this loaded into context.
              No vector search. No retrieval lag. No &ldquo;let me look that up&rdquo; pauses.
            </p>
          </div>

          {/* File 1: App Knowledge */}
          <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-900/60 to-slate-900/60 p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-3">📖</div>
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">File 1 of 3</div>
                <h3 className="text-2xl font-black text-white mb-2">App Knowledge</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">158 KB</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">2,300+ lines</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">30 chapters</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Every feature, workflow, role guide, and data model in Cornerstone PM &mdash; documented in
                  prose Foreman can reason over. When you say <em>&ldquo;cascade the schedule when the foundation
                  inspector confirms,&rdquo;</em> Foreman knows what a cascade is, how scheduling templates
                  work, which webhook fires, and which downstream tasks unlock. It&apos;s not guessing &mdash;
                  it&apos;s reading the manual.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">All 30 chapters</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {chapters.map((c) => (
                    <div key={c.num} className="rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2 hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-emerald-400 font-mono font-bold text-xs">{c.num}</span>
                        <span className="text-white font-semibold text-xs" dangerouslySetInnerHTML={{ __html: c.title }} />
                      </div>
                      <div className="text-slate-500 text-xs ml-7" dangerouslySetInnerHTML={{ __html: c.desc }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File 2: Estimating Formulas */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-slate-900/60 p-8 mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-3">📐</div>
                <div className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">File 2 of 3</div>
                <h3 className="text-2xl font-black text-white mb-2">Estimating Formulas</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">8 KB</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">39 formulas</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Construction math, baked into the agent. Give Foreman the dimensions and it returns
                  accurate quantities and rough cost &mdash; no calculator, no spreadsheet, no
                  <em>&ldquo;ChatGPT, what&apos;s a board-foot again?&rdquo;</em> detour.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">All 39 formulas</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {formulas.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 rounded bg-slate-950/40 border border-slate-800/60 px-2.5 py-1.5">
                      <Calculator className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* File 3: Prompt Library */}
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-900/60 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-3">🎯</div>
                <div className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-2">File 3 of 3</div>
                <h3 className="text-2xl font-black text-white mb-2">Prompt Library</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">16 KB</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">10 categories</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Pre-built setup prompts for the design center. Copy a prompt, swap in your vendor and
                  brand names, hit enter. Foreman builds your entire product catalog &mdash; OptionClasses,
                  attribute values, pricing modifiers, tier access &mdash; in one conversation turn.
                </p>
                <p className="text-amber-400 text-xs font-semibold mt-3">
                  This is what powers the 75-action chain.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">All 10 categories</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {promptCategories.map((p) => (
                    <div key={p.name} className="rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2.5 hover:border-amber-500/30 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-bold text-xs">{p.name}</span>
                        <span className="text-amber-400 text-xs">{p.count}</span>
                      </div>
                      <div className="text-slate-500 text-xs">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The skill registry */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> The Skill Registry
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
              <span className="text-violet-400">396</span> hardcoded skills. <span className="text-violet-400">20</span> categories.
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Not generated code. Not vibe-driven function calling. Every skill is a typed TypeScript function
              with input validation, ACL checks, and structured returns &mdash; sitting in our codebase
              waiting to be called.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
            {skillCategoryBreakdown.map((c) => (
              <div key={c.name} className="rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-3 text-center hover:border-violet-500/30 transition-colors">
                <div className="text-2xl font-black text-violet-400 mb-1">{c.count}</div>
                <div className="text-slate-300 text-xs font-semibold" dangerouslySetInnerHTML={{ __html: c.name }} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/foreman#skills" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              Browse all 396 skills on the Foreman page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Why this matters</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The knowledge base isn&apos;t a marketing flex. It&apos;s the reason Foreman can do things
              other construction AI tools can&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Cpu className="w-7 h-7 text-amber-400 mb-3" />
              <h3 className="text-white font-bold mb-2">75-action chains</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Generic AI caps at 3&ndash;5 tool calls per turn because it drifts after a few steps.
                Foreman doesn&apos;t drift &mdash; it knows the system. So we let it run 75.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Shield className="w-7 h-7 text-emerald-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Deterministic actions</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Skills are typed functions with input validation. The model picks from a menu;
                it doesn&apos;t write SQL. No <code className="text-rose-400">DELETE FROM homes</code> by accident.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Database className="w-7 h-7 text-cyan-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Millisecond execution</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Skills hit Prisma + Postgres directly. No HTTP middleman. 75 calls execute in
                under 4 seconds. The bottleneck is the model thinking, not the tools running.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 via-slate-900/60 to-slate-900/60 p-8 sm:p-10 text-center">
            <p className="text-slate-300 text-lg leading-relaxed mb-2">
              396 skills. 20 categories. 24,500 words of construction expertise. 39 estimating formulas. 3 memory files.
            </p>
            <p className="text-2xl sm:text-3xl font-black text-white">
              One AI that doesn&apos;t just talk &mdash; <span className="text-violet-400">it builds.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" /> Ready to try it
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
            See what 183KB of construction knowledge feels like.
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Cornerstone PM&trade; Beta is free for the first 100 builders.
            Foreman AI lives on Pro ($499/mo flat, up to 30 users).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5">
              Get Beta Access &rarr;
            </Link>
            <Link href="/foreman" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See all 396+ skills
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
