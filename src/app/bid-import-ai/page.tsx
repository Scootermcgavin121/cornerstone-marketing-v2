import { Check, Brain, FileText, Image as ImageIcon, FileSpreadsheet, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Bid Import AI — Parse Any Vendor Bid in Seconds | Cornerstone PM™",
  description:
    "Upload vendor bids in any format — Excel, PDFs, scanned documents, even photos of handwritten quotes. Bid Import AI extracts every line item, fuzzy-matches your parts catalog, and imports as a Bid, Vendor Pricing, or Takeoff in one click.",
  alternates: { canonical: "https://www.cornerstonepm.ai/bid-import-ai" },
};

const inputs = [
  { icon: FileSpreadsheet, label: "Excel", desc: "XLSX, XLS, CSV — vendor bid templates or their own spreadsheets" },
  { icon: FileText, label: "PDF", desc: "Vendor quote letters, scanned documents, multi-page bid packets" },
  { icon: ImageIcon, label: "Images", desc: "JPG, PNG, HEIC — even a phone photo of a handwritten quote on a napkin" },
];

const importModes = [
  {
    title: "Import as a Bid",
    desc: "Creates a Bid record with full BidLineItems. Use when a vendor responds to a bid request — line items lock to the bid for side-by-side comparison and award.",
    color: "violet",
  },
  {
    title: "Import as Vendor Pricing",
    desc: "Creates VendorPricing + PricingLineItems grouped by scope. Use to update a vendor's standing catalog so future budgets pull current rates.",
    color: "emerald",
  },
  {
    title: "Import as Takeoffs",
    desc: "Creates Takeoff records linked to a floorplan. Use when a vendor quote includes raw quantities you want to attach to a specific plan.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  violet: "border-violet-500/30 bg-violet-500/[0.04] text-violet-400",
  emerald: "border-emerald-500/30 bg-emerald-500/[0.04] text-emerald-400",
  amber: "border-amber-500/30 bg-amber-500/[0.04] text-amber-400",
};

const features = [
  { title: "Any Format, Any Mess", desc: "Excel, PDF, scans, photos of handwritten quotes — the AI reads them all. No template forced on the vendor." },
  { title: "Fuzzy Catalog Matching", desc: "Every extracted line item is matched against your parts catalog with a confidence score. \"6oz copper sheet\" → matches your existing copper SKU automatically." },
  { title: "Scope Item Mapping", desc: "Lines are auto-assigned to your scope items (Roof Labor, Roof Supplier, Plumbing Rough, etc.). The AI knows the difference between labor and material based on the line description." },
  { title: "Color-Coded Confidence Table", desc: "Green ≥90%, yellow 70-90%, red <70%. You see exactly what the AI is confident about and what needs your eyes — no black boxes." },
  { title: "Inline Edit Before Commit", desc: "Edit any line — description, quantity, unit price, scope, matched part — directly in the review table. Nothing imports until you approve." },
  { title: "Three Import Modes", desc: "Same parsed file can land as a Bid (vs a request), as Vendor Pricing (catalog update), or as Takeoffs (floorplan-linked quantities). One pipeline, three destinations." },
  { title: "90%+ Accuracy on Templates", desc: "If the vendor filled out your auto-generated bid template, mapping accuracy is 90%+ on first pass. Just review and click import." },
  { title: "Handwritten Quotes Work", desc: "Phone photo of a plumber's hand-written estimate? AI reads it, extracts line items, and maps scope. 30 seconds from photo to bid." },
  { title: "Per-Org Data Isolation", desc: "Your catalog, your scopes, your matches — completely isolated. AI never trains on your data; nothing leaves your tenant." },
  { title: "Powered by GPT-4o-mini", desc: "Fast, accurate, low cost per import. The same AI architecture that powers Blueprint AI's PDF takeoff." },
  { title: "Audit Trail", desc: "Every import logs what was extracted, what was matched, what you edited, and what was committed. Full chain of custody for your purchasing team." },
  { title: "Bulk-Friendly", desc: "Drop 5 vendor responses at once. Each gets parsed in parallel, reviewed in its own tab, and imported when ready." },
];

const faq: FAQItem[] = [
  {
    q: "What file formats does Bid Import AI accept?",
    a: "Excel (.xlsx, .xls, .csv), PDF, and images (JPG, PNG, HEIC). Literally any format a vendor might send back — including a phone photo of a handwritten quote on a napkin. The AI reads them all.",
  },
  {
    q: "How accurate is the line item extraction?",
    a: "If the vendor filled out your auto-generated bid template, accuracy is 90%+ on first pass. For free-form vendor PDFs and Excel sheets, accuracy is typically 75-90% — every line gets a confidence score so you know exactly what to verify before importing.",
  },
  {
    q: "Does Bid Import AI match line items to my parts catalog?",
    a: "Yes. Every extracted line is fuzzy-matched against your existing parts catalog and scope items. \"6oz copper sheet\" gets matched to your existing copper SKU automatically. You see the proposed match plus a confidence score, and you can override anything before importing.",
  },
  {
    q: "What happens after I import?",
    a: "Three options. Import as a Bid → creates a Bid record with BidLineItems (perfect for vendor responses to bid requests, ready for side-by-side comparison and award). Import as Vendor Pricing → updates the vendor's standing pricing catalog grouped by scope. Import as Takeoffs → creates floorplan-linked Takeoff records. Same parsed file, three possible destinations.",
  },
  {
    q: "Does this auto-trigger when vendors upload bids through the portal?",
    a: "Right now Bid Import AI runs on builder-side manual upload — drag the vendor's response into the import tool. Vendor portal auto-parsing is the next iteration: when a vendor submits files, Bid Import AI will automatically parse them and surface the results to the builder. Coming soon.",
  },
  {
    q: "What plan is this on?",
    a: "Pro+ ($599/mo). Bid Import AI uses GPT-4o-mini per-import similar to Blueprint AI, so it's bundled with the higher AI-included tiers. Pro+ also includes BYOA (Bring Your Own Agent), 7-wave automated bidding pipeline, and full REST API access.",
  },
  {
    q: "Can other construction platforms do this?",
    a: "No — and that's the point. BuilderTrend, CoConstruct, BuildPro all require manual line-item entry or, at best, CSV import with exact column matching. None of them accept arbitrary PDFs, scans, or photos. None of them fuzzy-match to your catalog. This is a genuine \"how does no one else have this?\" feature.",
  },
  {
    q: "Is my data used to train the AI?",
    a: "No. Bid Import AI uses GPT-4o-mini through OpenAI's API with training disabled. Your parts catalog, vendor quotes, and pricing never leave your tenant for training purposes. Each import runs against your isolated org data and the response is not retained beyond the active session.",
  },
];

export default function BidImportAiPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.12)_0%,transparent_65%)]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <Brain className="w-4 h-4" />
            AI-Powered &middot; Pro+
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Any vendor bid.<br />
            <span className="text-orange-400">Any format. Seconds.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold max-w-3xl mx-auto mb-3">
            Upload a vendor bid &mdash; any format, even a photo of a handwritten quote.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            AI extracts every line item, matches your parts catalog, and imports in seconds. Not hours. Seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-slate-900 font-bold text-lg hover:from-orange-400 hover:to-orange-300 shadow-lg shadow-orange-500/25 transition-all duration-200">
              Request Early Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ai-agents" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200">
              See All AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Inputs row */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Inputs</div>
            <h2 className="text-3xl sm:text-4xl font-black">Whatever your vendor sends, we read it.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {inputs.map((input) => {
              const Icon = input.icon;
              return (
                <div key={input.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-xl font-bold mb-2">{input.label}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{input.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 4-step flow */}
      <section className="py-16 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">How it works</div>
            <h2 className="text-3xl sm:text-4xl font-black">From vendor email to imported bid in 30 seconds.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "1", title: "Upload", desc: "Drag the vendor's file into the import tool. Excel, PDF, scan, photo — doesn't matter." },
              { num: "2", title: "Parse", desc: "AI extracts every line item with quantities, unit prices, part numbers, and scope assignments." },
              { num: "3", title: "Review", desc: "Color-coded confidence table. Edit any line that needs fixing, override matches, adjust scope." },
              { num: "4", title: "Import", desc: "Choose Bid, Vendor Pricing, or Takeoffs. One click commits everything to your real data." },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-orange-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black mb-4">
                  {step.num}
                </div>
                <div className="font-bold text-lg mb-2">{step.title}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three import destinations */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Three destinations, one pipeline</div>
            <h2 className="text-3xl sm:text-4xl font-black">Same parsed file, three places it can land.</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Choose how the imported data should hit your system. The same parser, three commit modes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {importModes.map((mode) => (
              <div key={mode.title} className={`rounded-2xl border p-6 ${colorMap[mode.color]}`}>
                <div className={`text-xl font-bold mb-3 ${mode.color === "violet" ? "text-violet-300" : mode.color === "emerald" ? "text-emerald-300" : "text-amber-300"}`}>
                  {mode.title}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(251,146,60,0.08),transparent)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                THE MOAT
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                BuilderTrend wants you to retype every line.
                <br />
                CoConstruct wants you to use their template.
                <br />
                <span className="text-orange-400">Cornerstone reads a napkin.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-2">
                No competing platform has AI bid parsing. They all require manual entry or rigid CSV imports with exact column matching.
              </p>
              <p className="text-slate-400 text-base max-w-2xl mx-auto">
                We accept literally anything. The AI does the column mapping, scope matching, and catalog lookup automatically — every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What's in the box</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Twelve capabilities shipped in v1. Vendor portal auto-trigger coming next.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-orange-500/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <Check className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div className="font-bold">{f.title}</div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-8">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faq} />

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Stop retyping vendor bids.</h2>
          <p className="text-xl text-slate-400 mb-10">Join the beta — Bid Import AI is included on Pro+.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-slate-900 font-bold text-lg hover:from-orange-400 hover:to-orange-300 shadow-lg shadow-orange-500/25 transition-all duration-200">
              Request Early Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/purchasing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200">
              See Purchasing & Budgets
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
