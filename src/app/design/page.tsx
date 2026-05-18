import { Check, Grid3X3, ShieldCheck, FileSpreadsheet, Image as ImageIcon, DollarSign, Layers, Refrigerator, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Design Center Software for Home Builders | Cornerstone PM™",
  description: "Design center software for home builders with structured options engine, product configurator, room-by-room selections, allowance tracking, and budget integration. Built for home builders.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is design center software for home builders?",
    a: "Design center software lets homebuyers select finishes, fixtures, and upgrades for their new home while builders track allowances, upgrade pricing, and margin per home. Cornerstone PM™'s Design Center is built as a first-class module integrated with sales, purchasing, and the construction budget &mdash; every selection updates pricing and PO line items automatically. The built-in Product Configurator handles complex multi-attribute selections like cabinets and countertops with step-by-step guided flows.",
  },
  {
    q: "What is an options engine?",
    a: "An options engine is the rules system that prices structural and design options per floorplan and per community. Cornerstone PM™'s options engine handles dependencies, incompatibilities, allowance overages, and per-community pricing &mdash; with real-time price rollup as the buyer makes selections. Foreman AI's Design Center domain (8 skills) can configure options, track allowances, and generate selection packages on request.",
  },
  {
    q: "How do design center allowances work?",
    a: "When a buyer locks structural options on a sale, Cornerstone PM™ auto-generates a per-room allowance schedule based on community spec levels (Standard, Premium, Luxury, etc.). The buyer's selections debit the allowance, overages flow to a change order, and savings can be applied as buyer credits &mdash; all tracked in real time.",
  },
  {
    q: "Does the design center connect to purchasing?",
    a: "Yes. The moment a design selection is locked, Cornerstone PM™ updates the purchasing line items and the construction budget. There's no separate spec sheet to reconcile and no risk of ordering the wrong fixture &mdash; design, purchasing, and the budget share one data source.",
  },
  {
    q: "What are Options Attributes?",
    a: "Options Attributes let you define attribute groups (like Door Style, Wood Species, Finish) for a product category and then manage them independently instead of creating individual options for every combination. Five cabinet series with 23 door styles × 8 wood species × 38 finishes × 2 overlays × 3 door treatments = over 7,000 possible variations &mdash; all managed through just 5 options and 5 attribute groups. Compatibility rules prevent invalid combinations, and pricing modifiers are set per attribute value.",
  },
  {
    q: "How is this different from a generic configurator?",
    a: "Generic configurators (Hubspot CRM add-ons, standalone selection apps) collect buyer preferences but don't update your budget or purchasing system. Cornerstone PM™'s Design Center is wired to live builder data &mdash; selections immediately become PO line items, change orders, and budget updates with no double entry. Plus, the built-in Product Configurator lets buyers walk through complex selections (cabinets, countertops) step by step with smart compatibility rules, so only valid combinations are shown.",
  },
  {
    q: "Can buyers see their selections in their portal?",
    a: "Yes. The homeowner portal shows every selection, allowance status, and upgrade pricing in real time. Buyers can review, approve, and digitally sign-off on their selections before construction begins.",
  },
  {
    q: "What does design center software cost?",
    a: "Cornerstone PM™'s Design Center is included in the Builder plan at $299/mo with up to 30 users (60 on Pro+). Foreman AI's 8-skill Design Center domain is included on the Pro plan at $499/mo. There are no per-seat fees and no implementation cost.",
  },
  {
    q: "Is this a NEWSTAR / BuildPro design center alternative?",
    a: "Yes. Cornerstone PM™ offers the same core options engine and design center capabilities as NEWSTAR and BuildPro &mdash; structured options, allowances, spec levels, change orders &mdash; without the 6-figure implementation cost. Built specifically for small-to-mid home builders.",
  },
];

const features = [
  { title: "Cross-Class Upgrades", desc: "Buyers can switch from carpet to hardwood, recessed lights to pendants, or any option to any other within the same category. One click, real-time price delta shown instantly." },
  { title: "Per-Room Selections with Sqft", desc: "'Pick your Kitchen flooring (180 sqft)' &mdash; upgrade pricing shown per room based on actual takeoff quantities. No manual area calculations." },
  { title: "Options Grouped by Type", desc: "Carpet, Hardwood, LVP, and Tile shown as collapsible groups &mdash; not a flat dropdown. Buyers see the full picture before choosing." },
  { title: "Real-Time Upgrade Pricing", desc: "Shows exact cost delta from base: '+$684 upgrade' or '-$200 credit'. Price flows from takeoff quantities automatically." },
  { title: "Designer Collections", desc: "64+ curated packages across 7 categories. Pick a package and all category options auto-lock to that collection. Remove the package to unlock individual picks." },
  { title: "Product Configurator", desc: "Step-by-step guided configuration for complex selections like cabinets and countertops. Buyers pick door style → wood species → finish with smart compatibility rules ensuring only valid combinations. Pricing uses base price + attribute modifiers from vendor bids — no manual spreadsheet matrix needed." },
  { title: "Spec-Level Tier Gating", desc: "Control which product options are available at each upgrade level. Standard buyers see the curated list, Premium buyers unlock more — production builders and custom builders both covered." },
  { title: "Driven by Takeoffs", desc: "Quantities flow directly from takeoff data &mdash; zero double-entry. Change a room size in the takeoff and the design center pricing updates automatically." },
  { title: "Room-by-Room Selections", desc: "Organize all buyer selections by room &mdash; kitchen, baths, flooring, fixtures, paint." },
  { title: "Spec Level Management", desc: "Community Standard, Premium, Luxury &mdash; unlimited levels with included/upgrade pricing." },
  { title: "Options Engine", desc: "Structural and design options with real-time pricing, tied to budget automatically." },
  { title: "Buyer Selection Portal", desc: "Buyers make selections online, builder approves &mdash; no email chains." },
  { title: "Selections PDF Export", desc: "Generate a clean, branded selections PDF for every home." },
  { title: "Upgrade Tracking", desc: "Track every upgrade from selection to install with status updates." },
  { title: "Change Order Integration", desc: "Design changes flow directly into purchasing and budget." },
  { title: "Community-Level Pricing", desc: "Set base included items per community, overrides per floorplan." },
  { title: "Approval Workflow", desc: "Builder approves all selections before they're locked." },
  { title: "Revision History", desc: "Full audit trail of every selection change with timestamps." },
  { title: "Integration with Purchasing", desc: "Every selection ties to a line item &mdash; no manual entry." },
  { title: "Mobile-Friendly", desc: "Buyers can make selections from any device." },
  { title: "Margin Lock-In", desc: "Lock options pricing before presenting to buyer &mdash; protect your margin." },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Design Center
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Turn upgrades into<br /><span className="text-violet-400">wider margin.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Cross-class upgrades, per-room pricing from real takeoff quantities, 64+ designer packages, and a step-by-step Product Configurator for complex selections like cabinets and countertops. Every selection tracked, priced, and connected to your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5">Request Early Access &rarr;</Link>
            <Link href="/features" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">See All Features</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-1">{f.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OPTIONS ATTRIBUTES SHOWCASE ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <Grid3X3 className="w-4 h-4" /> Options Attributes
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              5 options.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                7,000+ variations.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Stop creating thousands of individual SKUs. Options Attributes let you define attribute groups once and manage every possible combination through simple multiplication &mdash; not manual data entry.
            </p>
          </div>

          {/* Math breakdown */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 border border-violet-500/20">
            <div className="text-center mb-6">
              <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-3">Real-world example: Cardell Cabinets</div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-center mb-6">
              {[
                { label: "Cabinet Series", count: "5" },
                { label: "Door Styles", count: "23" },
                { label: "Wood Species", count: "8" },
                { label: "Finishes", count: "38" },
                { label: "Overlays", count: "2" },
                { label: "Door Treatments", count: "3" },
              ].map((item, i, arr) => (
                <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-white">{item.count}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{item.label}</div>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-violet-400/60 text-xl font-bold">×</span>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-violet-400/60 text-xl font-bold">=</span>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">7,000+</div>
                  <div className="text-xs sm:text-sm text-slate-500">Variations</div>
                </div>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm">
              All managed through just <span className="text-violet-400 font-semibold">5 options</span> and <span className="text-violet-400 font-semibold">5 attribute groups</span> &mdash; not 7,000 individual line items.
            </p>
          </div>

          {/* Screenshot gallery with alternating layout */}
          <div className="space-y-20">
            {/* Row 1: Options view */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-violet-500/5">
                  <Image
                    src="/mockups/ss-options-attributes-options.png"
                    alt="Cornerstone PM Design Options showing 5 cabinet series organized by spec level from Standard to Premium"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <Layers className="w-3.5 h-3.5" /> Spec-Level Tiers
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Organize by spec level, not spreadsheet rows</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Five cabinet series &mdash; Standard through Premium &mdash; each with color-coded tier badges. Buyers see their included option and every upgrade path at a glance. Builders control which series each tier unlocks.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Create options from scope items or your parts catalog in one click. Import/export for bulk management.
                </p>
              </div>
            </div>

            {/* Row 2: Attribute groups */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <Grid3X3 className="w-3.5 h-3.5" /> Attribute Groups
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Define once, multiply everywhere</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Five attribute groups &mdash; Door Style (23), Wood Species (8), Finish (38), Overlay (2), Door Treatment (3) &mdash; each marked Required so buyers can&apos;t skip a step. Every group expands to show values, images, and status.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Add, reorder, or deactivate values without touching the options themselves. The math updates automatically.
                </p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/5">
                  <Image
                    src="/mockups/ss-options-attributes-groups.png"
                    alt="Options Attributes tab showing 5 attribute groups: Door Style, Wood Species, Finish, Overlay, Door Treatment"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Buyer-facing configurator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-violet-500/5">
                  <Image
                    src="/mockups/ss-design-center-attributes.png"
                    alt="Buyer-facing Cardell Cabinets configurator showing Door Style, Wood Species, Finish, Overlay, and Door Treatment selections with thumbnails and live per-attribute pricing totaling +$2,058"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <ImageIcon className="w-3.5 h-3.5" /> Buyer Experience
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">What your buyer actually sees</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Every attribute group rendered as a visual swatch grid with photos, descriptions, and a live price delta per choice. The buyer picks Door Style, Wood Species, Finish, Overlay, and Door Treatment &mdash; the running total updates instantly at the bottom.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No spreadsheets emailed back and forth. No &ldquo;let me get back to you on pricing.&rdquo; The buyer configures the upgrade, sees the exact dollar impact, and saves the selection &mdash; all in one flow.
                </p>
              </div>
            </div>

            {/* Row 4: Compatibility rules */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" /> Compatibility Rules
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Invalid combos never reach production</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Set per-value restrictions: &ldquo;Bressler door style is compatible with these wood species and these finishes.&rdquo; Unchecked values are blocked at selection time. No restrictions? Leave the group open.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No more field orders because someone picked Thermofoil with a stain finish. Compatibility rules catch it before the PO is cut.
                </p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-500/5">
                  <Image
                    src="/mockups/ss-options-attributes-rules.png"
                    alt="Compatibility rules editor showing per-value restrictions for Wood Species, Finish, Overlay, and Door Treatment"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Row 5: Vendor bid template - attribute pricing modifiers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-amber-500/5">
                  <Image
                    src="/mockups/ss-vendor-bid-template-attributes.png"
                    alt="Auto-generated vendor bid template in Excel titled 'Attribute Pricing Modifiers - Cabinets - Kitchen' with Door Style, Wood Species, and Finish sections, plus a yellow Price (+/-) column for the vendor to fill in per attribute value"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <FileSpreadsheet className="w-3.5 h-3.5" /> Vendor Bid Templates
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Send vendors an Excel template. Get real cost data back.</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Cornerstone auto-generates an Excel bid template for every attribute group &mdash; one tab per scope (Cabinets - Kitchen, Cabinets - Pantry, Cabinets - Laundry, etc.) with every door style, wood species, and finish pre-populated. Your vendor just fills the yellow <em className="text-amber-300 not-italic font-semibold">Price (+/-)</em> column.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Upload their completed sheet and every modifier imports back as a real cost &mdash; per attribute value, per scope item. The buyer-facing configurator on the previous screen pulls from <span className="text-violet-400 font-semibold">this exact data</span>. No price matrix in your head. No double-entry.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Multiple vendors bidding the same scope? Compare side-by-side and award the winning quote per community &mdash; pricing flows straight into your design center and budget.
                </p>
              </div>
            </div>

            {/* Row 6: Appliances - tiered buyer selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  <Refrigerator className="w-3.5 h-3.5" /> Tiered Appliance Packages
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Standard, Upgrade I, II, Premium &mdash; in one screen</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Microwave, dishwasher, range, refrigerator &mdash; every appliance category rendered as a four-tier card grid. Buyers see the included model, every upgrade path, and the exact incremental cost without clicking through screens.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Model numbers, photos, and pricing flow from your parts catalog and vendor bids &mdash; not a static brochure. Swap an entire appliance line across a community in minutes, not days.
                </p>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-500/5">
                  <Image
                    src="/mockups/ss-design-center-appliances.png"
                    alt="Buyer-facing Appliance selection screen with four categories (Microwave, Dishwasher, Range, Refrigerator) and four tiers per category (Upgrade I Standard, Upgrade II, Upgrade III, Premium) showing Samsung model numbers, photos, and incremental pricing"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Supporting feature pills */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: DollarSign, label: "Per-Value Pricing Modifiers", desc: "Retail and cost deltas per attribute choice — no separate price matrix" },
              { icon: ShieldCheck, label: "Cross-Attribute Validation", desc: "Compatibility rules prevent impossible combinations at selection time" },
              { icon: Layers, label: "Spec-Level Tier Gating", desc: "Control which options unlock at Standard, Upgrade, Premium, etc." },
              { icon: Refrigerator, label: "Tiered Appliance Packages", desc: "Microwave, dishwasher, range, refrigerator — four-tier card grid per category" },
              { icon: ImageIcon, label: "Visual Image Catalog", desc: "Thumbnails for every door style, finish, species, and appliance — not just text" },
              { icon: FileSpreadsheet, label: "Vendor Bid Templates", desc: "Auto-generated Excel sheets with attribute rows pre-populated — vendors just enter pricing" },
              { icon: Grid3X3, label: "Combinatorial Math", desc: "Multiply, don't duplicate — 5 groups create 7,000+ valid variations" },
              { icon: Sparkles, label: "Live Price Roll-Up", desc: "Buyer sees the running total update on every selection — no quote-back delay" },
            ].map((f) => (
              <div key={f.label} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-start gap-3">
                <f.icon className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white">{f.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Builder Plan</div>
              <div className="text-4xl font-black text-violet-400 mt-1">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>Buildertrend Design</span><span className="line-through text-slate-600">$499+/mo</span></div>
              <div className="flex justify-between"><span>Cornerstone PM™</span><span className="text-violet-400 font-bold">Free during beta</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-violet-400 text-slate-900 font-bold hover:bg-violet-300 transition-all duration-200">Get Early Access &rarr;</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &mdash;· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for design</h2>
            <p className="text-slate-400 leading-relaxed">Most design center tools are bolt-ons that don't talk to your budget or purchasing system. Cornerstone's Design Center was built as a first-class module &mdash; every selection automatically updates the budget and purchasing line items.</p>
            <p className="text-slate-400 leading-relaxed">Lock your options pricing before the buyer presentation and protect your margin every single time. No spreadsheets, no manual reconciliation, no surprises at closing.</p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Design Center Software FAQ"
        subtitle="Common questions about design center and options engine software for home builders."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to protect your margin?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30">Request Early Access &rarr;</Link>
      </section>
      <Footer />
    </div>
  );
}