import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Construction Scheduling Software for Home Builders | Cornerstone PM",
  description: "AI construction scheduling for home builders. Auto-cascading dependencies, vendor notifications, and Gantt charts &mdash; built for home builders running multiple communities.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is construction scheduling software for home builders?",
    a: "Construction scheduling software for home builders is a tool that lets home builders plan, sequence, and notify subcontractors across every home in every community. Cornerstone PM's scheduling module includes Gantt charts, 3-tier auto-cascading dependencies, foundation-aware templates, and one-click vendor email confirmations &mdash; designed specifically for builders managing 10-200+ homes per year, not general contractors.",
  },
  {
    q: "How does AI construction scheduling for home builders work?",
    a: "Cornerstone PM's AI scheduling watches your live build data and surfaces problems before they cascade: vendor no-shows, missed dependencies, slipping milestones, and weather-blocked tasks. Foreman AI can also reschedule tasks, notify vendors, and rebuild downstream timelines from a plain-English request. Schedules update in real time as conditions change.",
  },
  {
    q: "What is auto-cascading dependency scheduling?",
    a: "Auto-cascading means when one task moves &mdash; say framing slips three days &mdash; every downstream task automatically shifts to match, vendors get re-notified, and the homeowner portal updates. Cornerstone PM uses a 3-tier dependency system (hard, soft, vendor-driven) so the cascade respects which tasks can run in parallel versus which must wait.",
  },
  {
    q: "Does Cornerstone PM replace Buildertrend for scheduling?",
    a: "Yes &mdash; for production home builders. Buildertrend was built for custom builders and remodelers; Cornerstone PM was built specifically for production builders managing lot inventories, plan repeats, and multi-community pipelines. Cornerstone PM's scheduling starts at $149/mo (vs $499+/mo for Buildertrend) and includes 17 pre-built schedule templates and 7 foundation templates out of the box.",
  },
  {
    q: "How are subcontractors notified of schedule changes?",
    a: "Vendors receive automated emails when tasks are ready, when timelines shift, or when permits clear. Every email contains a secure magic link &mdash; one click confirms or declines the task. No app to download, no account to create, no password to remember. Cornerstone PM also sends daily and weekly digest emails so vendors and PMs stay aligned without checking the dashboard. This is the biggest friction-killer for trade partners in the industry: most subs never log into other platforms because they don't want to make an account, so PMs end up texting and calling them anyway. We removed that wall.",
  },
  {
    q: "Can I import my existing schedule from Buildertrend or CoConstruct?",
    a: "Yes. Cornerstone PM supports schedule import from Buildertrend, CoConstruct, and any Excel-based system using a smart column mapper. Migration typically takes under an hour for a single community.",
  },
  {
    q: "What's a permit gate in construction scheduling?",
    a: "A permit gate automatically blocks dependent tasks until the permit is approved. Cornerstone PM's permit gate prevents framing from being scheduled before the permit clears, prevents inspections from being booked before required preceding work, and notifies the PM when the gate opens.",
  },
  {
    q: "Does Cornerstone PM include a homeowner portal?",
    a: "Yes, on every plan. The homeowner portal is synced in real time with the construction schedule — when framing moves three days, buyers see it instantly, no follow-up call needed. Plus: (1) builder and PM upload job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row, captured straight from the field), (2) built-in messaging app between builder and customer with a permanent searchable record of every conversation — no more lost text threads or 'wait, what did we agree on?', and (3) one-click ZIP download of all job photos so buyers can save their whole build history. Warranty information and design selections are also visible. Included in Starter at $149/mo with no per-user, per-buyer fees.",
  },
];

const features = [
  { title: "Smart Scheduling", desc: "Interactive Gantt charts, drag-and-drop task management, 3-tier dependency system, auto-cascade on completion." },
  { title: "Task Dependencies with Auto-Cascade", desc: "Move one task and everything downstream adjusts automatically. No manual re-dating, no broken timelines." },
  { title: "Gantt Charts with Critical Path", desc: "Visual timeline with critical path highlighting. Drag-and-drop rescheduling with instant dependency recalculation." },
  { title: "Milestone Tracking", desc: "Define key milestones &mdash; permit approved, dry-in complete, final inspection &mdash; and track progress across all homes." },
  { title: "Calendar & List Views", desc: "Switch between calendar view for the big picture and list view for detail. Filter by vendor, phase, community, or status." },
  { title: "17 Pre-Built Templates", desc: "Reusable schedule templates for every home type. 270+ build combinations out of the box." },
  { title: "7 Foundation Templates", desc: "Slab, Monolithic, Stem Wall, Crawl Space, Full Basement, Pier & Beam, and Helical Pile &mdash; each pre-sequenced." },
  { title: "Smart Foundation Logic", desc: "Select a home type and the correct foundation template auto-attaches. No manual matching." },
  { title: "4 Modular Template Types", desc: "Construction, Foundation, Permitting, and Inspection &mdash; four template categories that snap together." },
  { title: "Template Copy & Clone", desc: "Clone any template and customize per community. Changes never affect the original." },
  { title: "Vendor Management", desc: "Full vendor directory with trade categories, contacts, insurance tracking, and expiry alerts." },
  { title: "Smart Cascade Notifications (Magic Links)", desc: "Automated scheduling emails when tasks are ready, when timelines shift, or when permits clear. Every email contains a secure magic link &mdash; vendors confirm or decline tasks in one click. No app, no account, no password. Biggest friction-killer for trade partners in the industry." },
  { title: "Daily & Weekly Digests", desc: "Automated summary emails for builders and vendors. Stay informed without checking the app." },
  { title: "In-App Messaging", desc: "Per-task messaging thread visible to all stakeholders. No more scattered texts." },
  { title: "Jobsite Notes & Photos", desc: "Photo and note uploads per task, timestamped. PMs upload, buyers see in real time." },
  { title: "Permit Gate System", desc: "Tasks auto-blocked until permit is approved. No framing before permits clear." },
  { title: "Phase-Based Scheduling", desc: "Organize tasks by construction phase &mdash; foundation, framing, MEP, finishes." },
  { title: "Weekday-Only Scheduling", desc: "Auto-skip weekends and holidays. Dates stay realistic." },
  { title: "Multi-Role Access", desc: "Builder, PM, vendor, and homeowner roles with scoped permissions." },
  { title: "Mobile Responsive", desc: "Full functionality on any device. Your PMs can update from the jobsite." },
  { title: "Import from Any Platform", desc: "Migrate from Buildertrend, CoConstruct, or any Excel-based system with smart column mapping." },
  { title: "Vendor Insurance Expiry Alerts", desc: "Auto-alert when vendor insurance expires. Stay compliant without the manual tracking." },
  { title: "Document Management", desc: "Attach plans, specs, and contracts to any task or home." },
  { title: "2-Year Warranty Tracking", desc: "Track warranty items by category and resolution status post-closing." },
  { title: "Employee Timesheets", desc: "Track labor hours per task and home with manager approval workflow." },
  { title: "Closing Workflow", desc: "Auto-trigger closing checklist when construction tasks complete." },
];

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.07)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Construction Scheduling
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Schedule subs.<br /><span className="text-amber-400">Hit every deadline.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Auto-cascading dependencies, vendor notifications, and Gantt charts &mdash; built for home builders who run multiple communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5">Request Early Access &rarr;</Link>
            <Link href="/features" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">See All Features</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Starter Plan</div>
              <div className="text-4xl font-black text-amber-400 mt-1">$149<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>Buildertrend</span><span className="line-through text-slate-600">$499+/mo</span></div>
              <div className="flex justify-between"><span>Cornerstone PM</span><span className="text-amber-400 font-bold">Free during beta</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-all duration-200">Get Early Access &rarr;</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders &mdash;· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for scheduling</h2>
            <p className="text-slate-400 leading-relaxed">Most scheduling tools were built for general contractors. Cornerstone was built specifically for home builders running 10&mdash; 200+ homes a year across multiple communities.</p>
            <p className="text-slate-400 leading-relaxed">The 3-tier dependency system, foundation-aware templates, and vendor email confirmation flow were designed around how home builders actually work &mdash; not adapted from commercial construction software.</p>
          </div>
        </div>
      </section>

      <FAQSection
        title="Construction Scheduling FAQ"
        subtitle="Common questions about scheduling software built for home builders."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to stop chasing subs?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30">Request Early Access &rarr;</Link>
      </section>
    </div>
  );
}
