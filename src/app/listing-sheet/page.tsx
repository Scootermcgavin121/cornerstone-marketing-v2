import Link from "next/link";
import { Check, FileText, Zap, Building2, Ruler, MapPin, Star, Download, Sparkles, Settings } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "MLS Listing Sheet Generator — AI-Powered | Cornerstone PM™",
  description:
    "Generate professional, print-ready MLS listing sheets in seconds. AI writes the description. Your live data fills the rest. One click to PDF. No other builder platform does this.",
};

const whatItPulls = [
  { icon: Building2, label: "Community info", desc: "Name, city, state, zip, and your custom marketing description — written once, flows into every listing." },
  { icon: Ruler, label: "Room dimensions", desc: "L x W x sqft for every room, imported from Blueprint AI floor plan analysis. No manual measuring." },
  { icon: MapPin, label: "Lot details", desc: "Lot size in acres and sqft (e.g. 0.457 ac / 19,907 sf), lot number, full address." },
  { icon: Star, label: "Structural upgrades", desc: "Every option the buyer selected — 10ft ceilings, tray ceilings, extended driveway, bonus rooms, and more." },
  { icon: FileText, label: "Design selections", desc: "Flooring, countertops, cabinets, fixtures — pulled from the design center with pricing." },
  { icon: Settings, label: "Floorplan specs", desc: "Square footage, beds, baths, stories, garage — straight from your floorplan database." },
];

const aiFeatures = [
  { title: "One-click AI generation", desc: "Click \"Generate with AI\" on any listing sheet. Claude Sonnet writes a compelling 2-3 paragraph sales description using your real home data — room dimensions, community character, lot size, upgrades." },
  { title: "Custom prompt input", desc: "Tell the AI what to emphasize: \"mention the school district\", \"highlight the pool\", \"focus on the open kitchen.\" It incorporates your direction naturally." },
  { title: "Word count control", desc: "Slider from 50 to 1,000 words. Different MLS boards have different requirements — dial it in for your market." },
  { title: "Saves to floorplan", desc: "The generated description saves to the floorplan and populates every home built on that plan. Write once, use everywhere." },
  { title: "Regenerate anytime", desc: "Not happy with the first draft? Hit Regenerate. Confirm dialog prevents accidental overwrites." },
  { title: "Foreman AI integration", desc: "Ask Foreman in plain English: \"Write an MLS description for The Addison at Bayside Preserve\" — same result, straight from the chat interface." },
];

export default function ListingSheetPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(34,211,238,0.10),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            SALES ENABLEMENT &middot; POWERED BY CLAUDE SONNET
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            MLS listings.<br />
            <span className="text-cyan-400">In seconds, not hours.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
            AI writes the description. Your live data fills the rest. One click to a print-ready PDF &mdash; with real room dimensions, community details, structural upgrades, and branded formatting.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-10">
            No copy-pasting from Word docs. No calling the PM for room measurements. No separate MLS tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5">
              Request Early Access &rarr;
            </Link>
            <Link href="/sales" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See Sales Pipeline
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "1 click", label: "To generate", sub: "vs. hours of manual work" },
            { num: "50–1,000", label: "Word count range", sub: "Adjustable per MLS board" },
            { num: "0", label: "Manual entry", sub: "All data from your project" },
            { num: "Claude", label: "Sonnet AI", sub: "Compelling, professional copy" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-cyan-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <h2 className="text-2xl font-black text-red-400 mb-4">The Problem</h2>
            <p className="text-slate-400 leading-relaxed">
              Sales teams waste hours manually typing room dimensions, copying specs from blueprints, and writing property descriptions for every listing. It&apos;s tedious, error-prone, and pulls your best people away from selling.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
            <h2 className="text-2xl font-black text-cyan-400 mb-4">The Solution</h2>
            <p className="text-slate-400 leading-relaxed">
              One click. Cornerstone PM™ pulls every detail from your existing data &mdash; room dimensions, structural upgrades, lot size, community features, floorplan specs &mdash; and generates a polished, branded MLS listing sheet instantly.
            </p>
          </div>
        </div>
      </section>

      {/* AI Description Feature — hero callout */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-cyan-500/5 border border-cyan-500/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI Description Generator
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Claude Sonnet writes it.<br />Your data makes it real.</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Click &ldquo;Generate with AI&rdquo; on any listing sheet. Claude reads your actual home data &mdash; room dimensions, community character, lot size, structural upgrades &mdash; and writes a compelling 2-3 paragraph description. Not a template. Not a fill-in-the-blank. A real listing description.
                </p>
                <div className="space-y-3">
                  {[
                    "Reads real room dimensions from Blueprint AI imports",
                    "Incorporates community description and amenities",
                    "Highlights structural upgrades and design selections",
                    "Custom prompt: \"emphasize the school district\" or \"mention the pool\"",
                    "Saves to floorplan — populates every home on that plan",
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-950/60 border-t lg:border-t-0 lg:border-l border-slate-800/60 p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Example output</p>
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 text-slate-300 text-sm leading-relaxed italic">
                  &ldquo;Welcome to The Addison at Bayside Preserve &mdash; a masterfully crafted 2,847 sq ft home where thoughtful design meets everyday livability. The open-concept great room flows into a gourmet kitchen featuring quartz countertops and custom cabinetry, while soaring 10-foot ceilings create an airy ambiance throughout. With 4 bedrooms, 3.5 baths, and a dedicated home office, this home is designed for how families actually live...&rdquo;
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-xs">
                    Word count: 250
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    ✨ Generated in 4 seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Everything the AI handles</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Six ways the AI description generator saves your sales team hours of work.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiFeatures.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero manual entry checklist */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
            <h2 className="text-3xl font-black text-white mb-2">Zero manual data entry.</h2>
            <p className="text-slate-400 mb-8">Everything pulls automatically from your project. Nothing to copy-paste.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Home address & lot number",
                "Lot size (0.457 ac / 19,907 sf format)",
                "Room-by-room dimensions (L x W x sqft)",
                "Structural options with pricing",
                "Design selections by category",
                "Community name, city, state",
                "Company logo (auto-centered)",
                "Floorplan specs (sqft, beds, baths, stories, garage)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <span className="text-emerald-400 font-black text-lg leading-none flex-shrink-0">&#10003;</span>
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Download */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4">One-click PDF download</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                No print dialog. No browser settings. Click &ldquo;Download PDF&rdquo; and get a real PDF file &mdash; multi-page support, always renders in light mode for clean printing, with your company logo auto-centered.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Smart filename format: <code className="text-cyan-400 bg-slate-800 px-2 py-0.5 rounded text-sm">5656_Ocean_Way-MLS-Sheet.pdf</code>
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Real PDF file — not a print screenshot",
                "Multi-page support for longer listings",
                "Always light mode for clean PDF output",
                "Company logo auto-centered (light/dark mode aware)",
                "Smart filename from home address",
                "Client-side generation — no server required",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What it pulls */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-4">Live data. Zero manual entry.</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">Every field is pulled from your live project data &mdash; nothing to copy-paste or fill in manually.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItPulls.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two ways to generate */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Two ways to generate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-4xl mb-4">🖱️</div>
              <h3 className="text-xl font-black text-white mb-3">One-click in the Sales sidebar</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Open any home, click &ldquo;Listing Sheet,&rdquo; pick a word count, hit &ldquo;Generate with AI.&rdquo; Download the PDF or print directly.
              </p>
              <div className="space-y-2">
                {["Available in Sales & Purchasing sidebars", "Home picker dropdown — any home in your org", "Word count slider (50–1,000 words)", "Regenerate with custom prompt"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <div className="text-4xl mb-4">🪖</div>
              <h3 className="text-xl font-black text-white mb-3">Via Foreman AI</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Ask Foreman in plain English. It pulls everything and generates the description conversationally.
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/20 border-l-4 border-l-amber-500">
                  <p className="text-slate-300 text-sm italic">&ldquo;Write an MLS description for The Addison at Bayside Preserve&rdquo;</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/20 border-l-4 border-l-amber-500">
                  <p className="text-slate-300 text-sm italic">&ldquo;Generate an MLS listing for 1234 Oak Street, emphasize the pool&rdquo;</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-3">Foreman AI &middot; Pro plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why no one else */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-cyan-500/20 p-8 sm:p-12">
            <h2 className="text-3xl font-black mb-4">Why no one else can do this</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              Sales CRM tools don&apos;t have room dimensions. Construction PM tools don&apos;t have buyer selections. No other platform has Blueprint AI floor plan analysis. Cornerstone has all of it &mdash; which is the only reason this feature is possible.
            </p>
            <p className="text-slate-500 text-sm mb-8">Built on 110+ database tables and growing. Every field on this listing sheet exists because we modeled it from day one &mdash; not bolted on later.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { bad: "Sales CRMs", issue: "No construction data — can't pull room dimensions or structural upgrades" },
                { bad: "Construction PM tools", issue: "No sales data — can't see buyer selections or contract price" },
                { bad: "Generic AI tools", issue: "No access to your live project data — would require manual copy-paste" },
                { bad: "Everyone else", issue: "No Blueprint AI — no real room dimensions from actual floor plan PDFs" },
              ].map((item) => (
                <div key={item.bad} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <span className="text-red-400 font-black text-lg leading-none mt-0.5 flex-shrink-0">&#10005;</span>
                  <div>
                    <span className="text-slate-300 font-semibold text-sm">{item.bad}: </span>
                    <span className="text-slate-500 text-sm">{item.issue}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <p className="text-cyan-400 font-bold mb-1">Cornerstone PM™:</p>
              <p className="text-white">One click. Real room dimensions. Live buyer data. AI-written copy. Print-ready PDF. All from the same platform that manages your schedules, budgets, and vendor bids.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Your sales team will thank you.</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Beta is free for 2 years. Limited to 100 builders. No credit card required.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/30">
          Request Early Access &rarr;
        </Link>
      </section>
      <Footer />
    </div>
  );
}