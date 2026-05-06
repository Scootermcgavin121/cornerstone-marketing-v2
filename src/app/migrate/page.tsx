import {
  Check,
  Brain,
  Upload,
  Wand2,
  Rocket,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  FileSpreadsheet,
  FileArchive,
  Database,
  Eye,
  Search,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "AI CRM Migration Wizard — Switch from Buildertrend in Minutes | Cornerstone PM",
  description:
    "Drag in your CSV, Excel, or full ZIP export. Our AI auto-detects the source CRM (Buildertrend, JobTread, CoConstruct), maps every column, and imports 7 data types in one click. Free, with dry-run preview. Beta.",
  alternates: { canonical: "https://www.cornerstonepm.ai/migrate" },
};

const supportedSources = [
  { name: "Buildertrend", desc: "Full platform export — vendors, jobs, leads, POs all auto-mapped." },
  { name: "JobTread", desc: "CRM, customer, and job exports recognized and routed automatically." },
  { name: "CoConstruct", desc: "Legacy CoConstruct exports parsed and mapped into Cornerstone's data model." },
  { name: "Generic spreadsheets", desc: "No source CRM? Drop any CSV or Excel file — the AI maps columns by content." },
];

const dataTypes = [
  { label: "Vendors", desc: "Subs and suppliers with trades, contacts, and pricing relationships intact.", icon: Database },
  { label: "Homes", desc: "Lots, addresses, models, and plan assignments — duplicate-detected by address + lot + community.", icon: Database },
  { label: "Communities", desc: "Subdivisions and developments with their full lot inventories.", icon: Database },
  { label: "Users", desc: "Team members and roles, deduped by email so you don't re-invite anyone.", icon: Database },
  { label: "Leads", desc: "Sales pipeline contacts with stage, source, and assigned salesperson.", icon: Database },
  { label: "Tasks", desc: "Open work items, assignments, and due dates carry over to the schedule.", icon: Database },
  { label: "Purchase Orders", desc: "Active and historical POs land linked to the right vendor and home.", icon: Database },
];

const features = [
  {
    title: "AI source detection",
    desc: "Drop a file and the wizard recognizes Buildertrend, JobTread, CoConstruct, or generic spreadsheet exports automatically. No \"select your platform\" friction.",
    icon: Brain,
  },
  {
    title: "Column mapping with confidence scores",
    desc: "Every column gets matched to a Cornerstone field with a visible confidence score. You see exactly what the AI is sure about and what to double-check.",
    icon: Wand2,
  },
  {
    title: "Editable preview before commit",
    desc: "The mapping is fully editable — override any column, skip a row, or remap a field. Nothing imports until you click commit.",
    icon: Eye,
  },
  {
    title: "Built-in duplicate detection",
    desc: "Vendors deduped by email/name. Homes by address + lot + community. Users by email. Re-running an import won't double up your data.",
    icon: Search,
  },
  {
    title: "Dry-run mode",
    desc: "Run the entire pipeline against your data without writing anything. Get the full preview — what would import, what would dedupe, what would fail — before you commit.",
    icon: ShieldCheck,
  },
  {
    title: "ZIP-aware multi-file import",
    desc: "Most CRM exports are ZIP archives with 5-15 CSVs inside. Drop the ZIP — the wizard splits it, classifies each file, and runs the right pipeline per data type.",
    icon: FileArchive,
  },
  {
    title: "Essentially free",
    desc: "Powered by GPT-4o-mini at roughly $0.002 per file. We don't charge for migration — your data is yours, getting it in shouldn't cost anything.",
    icon: DollarSign,
  },
  {
    title: "7 data types in one flow",
    desc: "Vendors, homes, communities, users, leads, tasks, purchase orders. One wizard, all of them — not seven different import tools.",
    icon: Rocket,
  },
];

const steps = [
  {
    num: "1",
    title: "Upload",
    desc: "Drag in your export — CSV, Excel, or full ZIP straight from your old platform. Up to 15 files per ZIP supported.",
    icon: Upload,
  },
  {
    num: "2",
    title: "AI maps it",
    desc: "Source CRM is auto-detected. Every column is mapped to the matching Cornerstone field with a confidence score. Review, edit, override anything.",
    icon: Wand2,
  },
  {
    num: "3",
    title: "One-click import",
    desc: "Run dry-run to preview, then commit. Duplicates are caught, relationships are stitched, and your team is in business.",
    icon: Rocket,
  },
];

const faq: FAQItem[] = [
  {
    q: "What CRMs can I migrate from?",
    a: "Buildertrend, JobTread, and CoConstruct are auto-detected today. The wizard also handles generic CSV and Excel files from any source — including spreadsheets you've been keeping internally. If your platform exports CSV or Excel, the AI can map it.",
  },
  {
    q: "What data types come over?",
    a: "Seven, in one flow: vendors, homes, communities, users, leads, tasks, and purchase orders. Each is duplicate-detected against your existing Cornerstone data so you can re-run the wizard safely if you discover missed records.",
  },
  {
    q: "How does duplicate detection work?",
    a: "Vendors are deduped by email, then by name when email is missing. Homes are deduped by the combination of address + lot + community. Users are deduped by email. The wizard surfaces duplicates in the preview so you can decide whether to skip, update, or import as new.",
  },
  {
    q: "Can I preview before importing?",
    a: "Yes. Dry-run mode runs the full pipeline against your data without writing anything to your tenant. You'll see exactly what would import, what would dedupe, and what (if anything) would fail — in full detail — before you commit. We strongly recommend running dry-run on every migration.",
  },
  {
    q: "What does it cost?",
    a: "Essentially nothing — about $0.002 per file in AI inference cost via GPT-4o-mini, which we absorb. Cornerstone does not charge for data migration, ever. Your data is yours; getting it in shouldn't be a profit center.",
  },
  {
    q: "Is the AI Migration Wizard ready for production data?",
    a: "It's Live in Beta. The wizard is in production today — builders are running migrations through it as we speak — and we've tested it extensively on real Buildertrend, JobTread, and CoConstruct exports. We recommend running dry-run mode first on any migration and reviewing the preview carefully before committing. Report anything weird and we'll fix it fast.",
  },
  {
    q: "Where do I find the AI Migration Wizard?",
    a: "Inside the app at /admin/migrate, available to admin users. If you don't have an account yet, request beta access — migration is included in every plan, including the free tier.",
  },
  {
    q: "How does this compare to the 23 CSV import endpoints?",
    a: "The AI Migration Wizard is the AI-powered front door. Under the hood, Cornerstone has 23 dedicated CSV import endpoints (vendors, homes, communities, templates, scopes, takeoffs, parts, budgets, and more) that you can also hit directly via the REST API. The wizard wraps the most common 7 data types in a one-click flow; the API is there for engineering teams that want full programmatic control.",
  },
];

export default function MigratePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12)_0%,transparent_65%)]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold uppercase tracking-widest">
              <Brain className="w-4 h-4" />
              AI-Powered Migration
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live in Beta
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Switch from Buildertrend?<br />
            <span className="text-violet-400">Drag it in. AI does the rest.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold max-w-3xl mx-auto mb-3">
            Export your data. Drop the file. AI maps every column. One click to import.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Our CRM Migration Wizard auto-detects the source platform, maps your columns with confidence scores, dedupes against your existing data, and imports 7 data types — all in a single 3-step flow. Free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 text-slate-900 font-bold text-lg hover:from-violet-400 hover:to-violet-300 shadow-lg shadow-violet-500/25 transition-all duration-200"
            >
              Request Beta Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/buildertrend-alternative"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              Buildertrend Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Beta disclaimer banner */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5 sm:p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-amber-300 font-bold uppercase text-xs tracking-widest mb-1">
                Beta feature
              </div>
              <p className="text-slate-200 leading-relaxed">
                The AI Migration Wizard is currently <strong>Live in Beta</strong>. We've tested it
                extensively on real Buildertrend, JobTread, and CoConstruct exports, but we strongly
                recommend running <strong>dry-run mode</strong> first to preview the full import
                before committing anything to your tenant. Found something weird? Email{" "}
                <a href="mailto:support@cornerstonepm.ai" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">
                  support@cornerstonepm.ai
                </a>{" "}
                and we'll fix it fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-step flow */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">
              How it works
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Three steps. No spreadsheet wrangling. No consultants.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 font-black">
                      {step.num}
                    </div>
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="font-bold text-lg mb-2">{step.title}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported sources */}
      <section className="py-16 px-4 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">
              Supported sources
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">
              Coming from any of these? You're good.
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Auto-detected on upload. The AI knows which platform exported the file and routes it through the right pipeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {supportedSources.map((src) => (
              <div
                key={src.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FileSpreadsheet className="w-5 h-5 text-violet-400" />
                  <div className="text-xl font-bold">{src.name}</div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{src.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 data types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">
              7 data types, one wizard
            </div>
            <h2 className="text-3xl sm:text-4xl font-black">Everything that matters, mapped.</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              One pipeline handles all the core records you need to start operating in Cornerstone on day one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataTypes.map((dt) => {
              const Icon = dt.icon;
              return (
                <div
                  key={dt.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-violet-400" />
                    <div className="font-bold text-lg">{dt.label}</div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{dt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.10),transparent)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold mb-6">
                <Rocket className="w-3.5 h-3.5" />
                THE PITCH
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Other platforms charge $5,000–$20,000 for migration.
                <br />
                <span className="text-violet-400">We charge zero. AI does the work.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-2">
                Buildertrend onboarding is months long. Newstar implementation runs into 5 figures. Our AI Migration Wizard runs in minutes — and it's free.
              </p>
              <p className="text-slate-400 text-base max-w-2xl mx-auto">
                Export from your old platform → drop in the file → AI maps it → click import. Hours, not months. No consultants. No data hostages.
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
            <p className="text-slate-400 max-w-2xl mx-auto">
              Eight capabilities that make this work for real production data — not just demo CSVs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="font-bold mb-2">{f.title}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost callout */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-5">
            <DollarSign className="w-3.5 h-3.5" />
            COST TO YOU
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-emerald-400">$0.</span> That's it.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-2">
            The wizard runs on GPT-4o-mini at roughly <strong className="text-slate-200">$0.002 per file</strong>.
            We absorb that cost. You pay nothing for migration — ever.
          </p>
          <p className="text-slate-500 text-sm">
            Your data is yours. Getting it in shouldn't be a profit center.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="CRM Migration FAQ"
        subtitle="Common questions about migrating from Buildertrend, JobTread, CoConstruct, or generic spreadsheets."
        items={faq}
      />

      {/* CTA */}
      <section className="py-24 px-4 text-center border-t border-slate-800/60">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Beta — dry-run before you commit
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Stop being a hostage to your old CRM.
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Request beta access, drag in your export, and be operating in Cornerstone the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 text-slate-900 font-bold text-lg hover:from-violet-400 hover:to-violet-300 shadow-lg shadow-violet-500/25 transition-all duration-200"
            >
              Request Beta Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See Full Platform Comparison
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
