import Link from "next/link";
import { ArrowRight, Check, X, Calendar, Zap, Bell } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "AI Construction Scheduling for Home Builders | Cornerstone PM",
  description:
    "AI construction scheduling for home builders. Auto-cascading dependencies, vendor email confirmations, and Foreman AI scheduling agent &mdash; built for home builders.",
  alternates: { canonical: "https://www.cornerstonepm.ai/ai-scheduling" },
};

const schedulingSkills = [
  { name: "Home Status Tracking", detail: "View all IN_PROGRESS homes with current stage, days in construction, and next scheduled trade" },
  { name: "Budget Variance Flags", detail: "Catch cost overruns that signal schedule problems before they compound" },
  { name: "Vendor Performance Analysis", detail: "Track which subs show up on time, which ones create delays, and adjust scheduling accordingly" },
  { name: "Punch List Generator", detail: "Room-by-room QC checklists by trade — no more verbal handoffs" },
  { name: "Scope of Work Generator", detail: "Professional SOW documents per trade per home — clear expectations = fewer delays" },
  { name: "Bid Request Drafter", detail: "Formatted bid invitations with schedule requirements built in" },
  { name: "Sub Performance Scorecards", detail: "Bid response rates, schedule compliance, insurance status — all in one report" },
  { name: "Community-level Pipeline View", detail: "See all homes across a community by stage — where are you bottlenecked?" },
];

const comparison = [
  { task: "Notify a sub their start date changed", spreadsheet: "Text message, hope they read it", cornerstone: "Foreman sends the update — logged, timestamped, confirmed" },
  { task: "Know which homes are behind schedule", spreadsheet: "Manual review of each row", cornerstone: "Ask Foreman: \"Which homes haven't had a status update in 14 days?\"" },
  { task: "Schedule the next trade after inspection passes", spreadsheet: "Phone call + calendar update", cornerstone: "Foreman flags the milestone, prompts next trade assignment" },
  { task: "Track sub performance over time", spreadsheet: "Doesn't happen", cornerstone: "Vendor scorecards: on-time rate, bid win rate, insurance status" },
  { task: "Spot a double-booked sub", spreadsheet: "Found out when they don't show", cornerstone: "Conflict detection before it becomes a delay" },
];

const prompts = [
  {
    prompt: "Show me all homes that haven't had a status update in more than 14 days",
    result: "8 homes flagged across 4 communities. Last update dates shown. Longest gap: 23 days on Lot 14 at Pinecrest Commons.",
  },
  {
    prompt: "Which of our subs have the worst on-time rate over the last 6 months?",
    result: "Bottom 3 vendors by schedule compliance listed. Framing sub at 61% on-time. Electrical at 74%. Recommend review before next bid cycle.",
  },
  {
    prompt: "Generate punch lists for all finishing trades at 1234 Oak Street — closing is in 3 weeks",
    result: "5 punch lists generated: Paint, Flooring, Trim, Fixtures, Final Clean. PDF exports ready. Room-by-room QC format.",
  },
  {
    prompt: "Show me a community-level view of Bayside Preserve — where are we bottlenecked?",
    result: "16 homes shown by stage. 4 homes stalled at drywall inspection. 2 homes waiting on cabinet delivery. Bottleneck flagged at electrical trim.",
  },
];

export default function AiSchedulingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(6,182,212,0.07),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6">
            <Calendar className="w-3.5 h-3.5" />
            AI SCHEDULING · HOME BUILDER FOCUSED · PLAIN ENGLISH COMMANDS
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            AI That Keeps Your Subs{" "}
            <span className="text-cyan-400">on Schedule</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Managing 15 homes across 8 trades via text messages and spreadsheets isn&apos;t a scheduling system — it&apos;s controlled chaos. Cornerstone PM&apos;s AI scheduling keeps every home visible, every sub accountable, and every delay caught before it cascades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Get Beta Access &rarr;
            </Link>
            <Link
              href="/foreman"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See all 45+ skills
            </Link>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              The chaos of managing 15 homes across 8 trades
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              You already know what this feels like. Here&apos;s what it&apos;s actually costing you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: "📱",
                title: "Scheduling by text",
                desc: "You text the framer. He reads it Thursday. Foundation was ready Monday. Three days of idle time.",
              },
              {
                icon: "📊",
                title: "Spreadsheet blind spots",
                desc: "Your Excel schedule doesn&apos;t know when your drywaller is already booked at another site. You find out when he doesn&apos;t show.",
              },
              {
                icon: "🔁",
                title: "No accountability layer",
                desc: "When a sub falls behind, there&apos;s no record. No paper trail. Just he-said-she-said when the close date slips.",
              },
              {
                icon: "🏚️",
                title: "Cascade delays",
                desc: "One trade runs late and the next three have to reschedule. You don&apos;t know it happened until the inspector shows up.",
              },
              {
                icon: "🔍",
                title: "No community-level view",
                desc: "You can see one home at a time. You can&apos;t see that 4 homes in the same community are all stuck at the same stage.",
              },
              {
                icon: "📞",
                title: "Status updates take an hour",
                desc: "A buyer calls for an update. You spend 20 minutes looking through texts and spreadsheets before you can answer.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              How Cornerstone AI scheduling works
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              No training. No complex setup. Plain English to your scheduling AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Bell,
                color: "text-cyan-400",
                bg: "bg-cyan-500/10",
                border: "border-cyan-500/20",
                step: "01",
                title: "Visibility, instantly",
                desc: "Ask Foreman what&apos;s happening across all your homes right now. Every home, every stage, every delay — one conversation.",
              },
              {
                icon: Zap,
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
                step: "02",
                title: "Delay detection",
                desc: "Foreman flags homes that haven&apos;t had status updates, subs with poor performance records, and schedule bottlenecks by community.",
              },
              {
                icon: Check,
                color: "text-emerald-400",
                bg: "bg-emerald-500/10",
                border: "border-emerald-500/20",
                step: "03",
                title: "Accountability built in",
                desc: "Every status update is logged. Vendor scorecards track on-time rates over time. When a sub falls behind, there&apos;s a record.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`p-6 rounded-2xl border ${item.border} bg-slate-900/60`}>
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className={`text-xs font-black ${item.color} mb-2`}>{item.step}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scheduling skills */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Scheduling-relevant Foreman skills
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These are the skills that keep your homes moving.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {schedulingSkills.map((skill) => (
              <div key={skill.name} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold text-sm mb-0.5">{skill.name}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{skill.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Plain English scheduling</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Real prompts that keep your build schedule on track.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            {prompts.map((ex) => (
              <div
                key={ex.prompt}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                    <p className="text-white font-medium italic">&ldquo;{ex.prompt}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-black text-sm leading-none flex-shrink-0 mt-0.5">🪖</span>
                    <p className="text-slate-300 text-sm">{ex.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Spreadsheets vs Cornerstone AI scheduling
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <div className="grid grid-cols-3 px-6 py-3 bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <div>Task</div>
              <div className="text-center">Spreadsheet</div>
              <div className="text-center text-amber-400">Cornerstone PM</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.task}
                className={`grid grid-cols-3 px-6 py-4 items-start gap-4 ${i < comparison.length - 1 ? "border-b border-slate-800/60" : ""} bg-slate-900/60`}
              >
                <div className="text-white text-sm font-medium">{row.task}</div>
                <div className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-500 text-xs">{row.spreadsheet}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs">{row.cornerstone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          Stop scheduling by text.<br />
          <span className="text-amber-400">Start scheduling with AI.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Beta access is open now. 2 years free for early adopters. Limited to 100 builders.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-xl hover:bg-amber-300 transition-all duration-200 shadow-xl shadow-amber-500/30"
        >
          Get Beta Access <ArrowRight className="w-5 h-5" />
        </Link>
        <p className="text-slate-600 text-sm mt-4">No credit card required · 2 years free · Limited to 100 builders</p>
      </section>

      <Footer />
    </div>
  );
}
