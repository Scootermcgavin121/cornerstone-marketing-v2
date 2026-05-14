import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileCheck, Lock, GitBranch, Bell, Users, FolderOpen } from "lucide-react";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Permitting Software for Home Builders | Cornerstone PM™",
  description:
    "Permitting software for home builders. Permit gates, phase blocking, automated reminders, and inspection tracking from sale to final &mdash; built for home builders.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is permitting software for home builders?",
    a: "Permitting software tracks every permit and inspection a home requires &mdash; from foundation to final &mdash; and blocks dependent construction work until permits clear. Cornerstone PM™'s permitting module includes permit gates, phase blocking, automated reminders, and a full audit trail across the entire build pipeline.",
  },
  {
    q: "What is a permit gate?",
    a: "A permit gate is an automated rule that blocks downstream construction tasks until a specific permit is approved. In Cornerstone PM™, framing tasks won't be scheduled until the building permit clears, slab pours wait for foundation permits, and final inspections wait for required preceding work &mdash; preventing the costly rework that comes from building ahead of permits.",
  },
  {
    q: "How does Cornerstone PM™ handle inspection scheduling?",
    a: "Cornerstone PM™ tracks the full inspection pipeline per home: scheduled, in-progress, passed, failed, with rework. Inspectors are notified, PMs see the status across every home in flight, and failed inspections automatically generate the correction tasks and reschedule downstream work.",
  },
  {
    q: "Does the permitting module connect to the schedule?",
    a: "Yes. Permitting is wired directly to the construction schedule. When a permit is approved, the gate opens and dependent tasks become schedulable. When a permit is delayed, the schedule cascades automatically and the homeowner portal updates &mdash; no manual re-dating required.",
  },
  {
    q: "Can I track multiple permit types per home?",
    a: "Yes. Cornerstone PM™ tracks every permit type a home needs: building, electrical, plumbing, mechanical, septic, well, driveway, and any jurisdiction-specific permits. Each permit has its own status, expiry, gate logic, and document attachments.",
  },
  {
    q: "What happens when a permit expires?",
    a: "Cornerstone PM™ alerts the PM in advance of permit expiration, automatically blocks dependent tasks if a permit lapses, and tracks the renewal workflow. Expired permits show as a hard block in the dashboard until renewal is filed and approved.",
  },
  {
    q: "Is permitting software included in the base plan?",
    a: "Yes. Cornerstone PM™'s permitting module is included in the Starter plan at $149/mo with up to 30 users (60 on Pro+). Foreman AI on the Pro plan ($499/mo) can also handle permit-related tasks like generating permit application packages from home data and tracking jurisdiction-specific requirements.",
  },
];

const stats = [
  { value: "3", label: "Permit sequences", sub: "Foundation, Framing, Final" },
  { value: "0", label: "Permit gate bypasses", sub: "Construction can't start until permits clear" },
  { value: "100%", label: "Status visibility", sub: "Applied to Approved to Expired" },
  { value: "Auto", label: "Buyer portal invite", sub: "Triggered from permitting stage" },
];

const problems = [
  {
    title: "You don't know where permits stand",
    desc: "Permit status lives in someone's email or a Post-it. When your super asks, nobody knows.",
  },
  {
    title: "Construction starts before permits clear",
    desc: "A framer shows up, permits aren't approved, you scramble. Schedule slips 2 weeks.",
  },
  {
    title: "Inspections get missed",
    desc: "Final inspection wasn't on anyone's calendar. Certificate of occupancy delayed. Closing pushed.",
  },
  {
    title: "Buyers don't know what's happening",
    desc: "The permit stage is a black hole for buyers. They stop trusting your timeline.",
  },
];

const features = [
  {
    icon: FileCheck,
    color: "text-orange-400",
    border: "hover:border-orange-500/20",
    title: "Pre-Built Permit Sequences",
    desc: "Foundation, Framing, and Final permit sequences pre-loaded with correct order, dependencies, and lead times. Apply to any home in one click.",
  },
  {
    icon: Lock,
    color: "text-red-400",
    border: "hover:border-red-500/20",
    title: "Phase Gate Enforcement",
    desc: "Construction tasks are locked until permits clear. The gate can be toggled on/off per account, but when it's on, it's airtight.",
  },
  {
    icon: GitBranch,
    color: "text-amber-400",
    border: "hover:border-amber-500/20",
    title: "Status Tracking",
    desc: "Applied to Approved to Expired status per permit. Visible to your whole team. No more \"did that permit come in?\" conversations.",
  },
  {
    icon: Bell,
    color: "text-orange-400",
    border: "hover:border-orange-500/20",
    title: "Auto Notifications",
    desc: "Permit stage triggers automatic subcontractor and buyer notifications. Everyone finds out the moment permits clear.",
  },
  {
    icon: Users,
    color: "text-teal-400",
    border: "hover:border-teal-500/20",
    title: "Buyer Portal Invite",
    desc: "The permitting stage automatically triggers a buyer portal invite. Buyers get visibility into their home's progress from day one.",
  },
  {
    icon: FolderOpen,
    color: "text-blue-400",
    border: "hover:border-blue-500/20",
    title: "Document Storage",
    desc: "Store permit certificates, approved plans, and warranty docs directly on the home record.",
  },
];

const foremanExamples = [
  {
    prompt: "Which homes in Bayshore Commons are waiting on framing permits?",
    response:
      "4 homes flagged: 221 Tide Ct (Applied 14 days ago), 334 Coral Way (Applied 8 days), 118 Marina Blvd (not yet filed), 445 Gulf Rd (not yet filed). Recommended: follow up with county on 221 and 334.",
  },
  {
    prompt: "Apply the framing permit sequence to 1234 Oak Street",
    response:
      "Framing permit sequence applied. 3 tasks created: Submit Application (due in 2 days), Follow Up (due in 7 days), Confirm Approval (due in 14 days). Phase gate active &mdash; framing tasks locked until approval.",
  },
  {
    prompt: "Send a permit status update to the buyer at 445 Gulf Road",
    response:
      "Message drafted: 'Your foundation permit was approved today. Framing is scheduled to begin within the next 5-7 business days.' Sent via buyer portal.",
  },
];

const pipelineSteps = [
  { label: "Sale Complete", highlight: false },
  { label: "Permit Applications Filed", highlight: false },
  { label: "Permits Approved", highlight: true },
  { label: "Construction Starts", highlight: false },
  { label: "Final Inspection", highlight: false },
  { label: "Certificate of Occupancy", highlight: false },
  { label: "Close", highlight: false },
];

export default function PermittingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white" id="permitting">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Permitting &middot; All Plans
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Permits don&apos;t have to<br />
            <span className="text-orange-400">kill your schedule.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Most builders lose 2&ndash;4 weeks per home to permitting chaos &mdash; applications filed late, inspections missed, construction starting before approvals clear. Cornerstone PM™ brings permit tracking into your schedule so nothing falls through.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-orange-400 text-slate-900 font-bold text-lg hover:bg-orange-300 transition-all duration-200 shadow-lg shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <a
              href="#permitting-features"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/20 transition-all duration-300 text-center"
            >
              <div className="text-4xl font-black text-orange-400 mb-1">{s.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 sm:p-12">
            <h2 className="text-3xl font-black text-center mb-10">
              The permitting mess every builder knows
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {problems.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  <div>
                    <div className="font-bold text-white mb-1">{p.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4" id="permitting-features">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Every permit. Every stage. Tracked.
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            Six tools that bring permit tracking inside your schedule &mdash; so the whole team knows exactly where every home stands.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`p-6 rounded-2xl bg-slate-900/60 border border-slate-800 ${f.border} transition-all duration-300`}
                >
                  <Icon className={`w-6 h-6 ${f.color} mb-4`} />
                  <div className="font-bold text-white mb-2">{f.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foreman AI */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Ask Foreman. Get answers.
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            Foreman AI knows every permit, every status, every home. Ask in plain English.
          </p>
          <div className="space-y-6">
            {foremanExamples.map((ex, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/20 transition-all duration-300 overflow-hidden">
                <div className="p-5 border-b border-slate-800/60">
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">&#128105;&#8205;&#128187;</span>
                    <p className="text-slate-300 text-sm leading-relaxed">{ex.prompt}</p>
                  </div>
                </div>
                <div className="p-5 bg-slate-950/40">
                  <div className="flex gap-3 items-start">
                    <span className="text-lg">&#129302;</span>
                    <p
                      className="text-orange-300 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: ex.response }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline flow */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            Permitting fits inside your full pipeline.
          </h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
            One continuous flow from sale to close &mdash; with the permit gate holding the line.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    step.highlight
                      ? "bg-orange-500/20 border border-orange-500/40 text-orange-400 shadow-lg shadow-orange-500/10"
                      : "bg-slate-800/60 border border-slate-700 text-slate-300"
                  }`}
                >
                  {step.label}
                  {step.highlight && (
                    <span className="ml-2 text-xs text-orange-500/80 font-normal">gate clears</span>
                  )}
                </div>
                {i < pipelineSteps.length - 1 && (
                  <span className="text-slate-600 text-lg">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Stop letting permits{" "}
              <span className="text-orange-400">stall your schedule.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Cornerstone PM™ tracks every permit, enforces phase gates, and keeps your buyers informed automatically. Beta is free for 2 years. Limited to 100 builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/beta"
                className="px-8 py-4 rounded-full bg-orange-400 text-slate-900 font-bold text-lg hover:bg-orange-300 transition-all duration-200 shadow-lg shadow-orange-500/30"
              >
                Get Beta Access &rarr;
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                See all features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Permitting Software FAQ"
        subtitle="Common questions about permitting workflow software for home builders."
        items={faqItems}
      />

      <Footer />
    </div>
  );
}
