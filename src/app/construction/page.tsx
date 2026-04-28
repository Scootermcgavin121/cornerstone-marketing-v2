import { Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Construction Scheduling Software for Home Builders",
  description: "Auto-cascading dependencies, vendor notifications, and Gantt charts built for production home builders.",
};

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
  { title: "Smart Cascade Notifications", desc: "Automated scheduling emails when tasks are ready. Vendors confirm or decline in one click &mdash; no login needed." },
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
            Auto-cascading dependencies, vendor notifications, and Gantt charts &mdash; built for production home builders who run multiple communities.
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
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders Â· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for scheduling</h2>
            <p className="text-slate-400 leading-relaxed">Most scheduling tools were built for general contractors. Cornerstone was built specifically for production home builders running 10â - 200+ homes a year across multiple communities.</p>
            <p className="text-slate-400 leading-relaxed">The 3-tier dependency system, foundation-aware templates, and vendor email confirmation flow were designed around how home builders actually work &mdash; not adapted from commercial construction software.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to stop chasing subs?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30">Request Early Access &rarr;</Link>
      </section>
    </div>
  );
}
