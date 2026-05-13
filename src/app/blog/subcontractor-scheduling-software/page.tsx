import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Subcontractor Scheduling Software for Home Builders &mdash; Cornerstone PM™ Blog",
  description:
    "The best subcontractors have options. If your scheduling is chaotic and your communication is reactive, they'll prioritize builders who make their lives easier. Here's how to be that builder.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/subcontractor-scheduling.png", width: 1024, height: 1024, alt: "Subcontractor scheduling software with Gantt visual timeline for production home builders" }],
  }
};

export default function SubcontractorSchedulingSoftwarePost() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <BlogHero src="/blog/subcontractor-scheduling.png" alt="Subcontractor scheduling software with Gantt visual timeline for production home builders" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Subcontractor Scheduling Software: What Home Builders Actually Need
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>March 25, 2026</span>
            <span>&mdash;·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Your framer doesn&apos;t care what software you use. He cares whether you tell him when the foundation is ready with enough notice to actually schedule his crew. Your electrician cares whether you call her twice to explain a change, or send a single clear update. Subcontractor scheduling software only matters if it makes those things better.
          </p>

          <p>
            Most builders manage subcontractor schedules through a combination of group texts, phone calls, and a master schedule in Excel that&apos;s usually a week out of date. It works &mdash; until it doesn&apos;t. A permit delay cascades into a framing delay into a plumbing delay, and suddenly you&apos;re three weeks behind and your best subs have filled their calendars with other builders&apos; work.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The subcontractor&apos;s perspective</h2>
          <p>
            Good subcontractors have more work than they can handle. When they choose who to prioritize, communication quality is a major factor. A builder who gives 10-day notice with clear specs gets first pick of crew. A builder who calls on Monday asking for a Wednesday start gets whoever&apos;s available.
          </p>
          <p>
            We&apos;ve talked to dozens of builders and their subcontractors. The complaints from subs are consistent:
          </p>

          <ul className="space-y-3 my-6">
            {[
              "Schedules change without notice &mdash; they show up and the site isn't ready",
              "Scope isn't clear &mdash; they have to call the PM to get basic specs",
              "Payment is slow because POs and invoices are a mess",
              "They can't see the full project schedule, so they can't plan their own crews",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">&mdash;œ—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            Every one of those is a scheduling and communication problem. And every one of them is solvable with the right software.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What subcontractor scheduling software needs to do</h2>
          <p>
            The baseline features are table stakes &mdash; most tools have them. The differentiators are where builders usually get burned:
          </p>

          <div className="space-y-5 my-6">
            {[
              {
                title: "Milestone-linked notifications",
                desc: "When framing is marked complete, plumbing should get automatic notice that they&apos;re up next. Not a text from your PM &mdash; an automated, reliable notification. This is the single biggest schedule protection you can buy.",
              },
              {
                title: "Scope clarity at scheduling time",
                desc: "The schedule entry should include what the sub needs to know: which home, what scope, any access notes, contact info. Subs shouldn&apos;t have to call to get the basics.",
              },
              {
                title: "Multi-home visibility",
                desc: "If a sub works across 6 of your homes, they should be able to see all 6 scheduled dates in one place. Most scheduling tools only show one project at a time.",
              },
              {
                title: "Delay propagation",
                desc: "When one trade slips, everything downstream needs to adjust. Good scheduling software re-sequences automatically and flags conflicts &mdash; instead of leaving you to manually update 40 tasks.",
              },
              {
                title: "AI-assisted schedule analysis",
                desc: "The emerging capability in 2025-2026 is AI that can look at your full schedule across 15 homes, identify bottlenecks before they happen, and surface the 2-3 things you need to act on today.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 not-prose">
                <p className="text-white font-bold mb-2">{item.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The AI scheduling difference</h2>
          <p>
            Traditional scheduling software is reactive: you update the schedule, it shows you the schedule. AI scheduling is proactive: it tells you what&apos;s about to go wrong before it does.
          </p>
          <p>
            With Foreman AI in Cornerstone PM™, a builder can ask plain-English questions like:
          </p>

          <div className="rounded-xl bg-slate-900 border border-slate-700 p-6 my-6 not-prose space-y-4">
            <div>
              <p className="text-amber-400 font-bold text-sm mb-1">You:</p>
              <p className="text-white italic text-sm">&ldquo;Which homes have construction that started more than 90 days ago and are still in progress?&rdquo;</p>
            </div>
            <div>
              <p className="text-slate-400 font-bold text-sm mb-1">ðŸª– Foreman:</p>
              <p className="text-slate-300 text-sm">4 homes flagged: 1421 Maple (97 days, framing complete, HVAC delayed), 33 Cedar Pt (103 days, drywall pending permit), 880 Lakeside (91 days, on track), 220 Summit (94 days, sub conflict next week). Summary table with days elapsed and current stage.</p>
            </div>
          </div>

          <p>
            That kind of cross-portfolio visibility &mdash; answered in seconds, in plain English &mdash; is what separates AI scheduling tools from traditional schedule management.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What to look for when evaluating</h2>
          <p>
            For residential home builders specifically, the evaluation criteria are different from commercial or remodeling contractors:
          </p>

          <ul className="space-y-3 my-6">
            {[
              "Designed for production home building &mdash; repeatable floorplans, community-based scheduling",
              "Subcontractor portal or access &mdash; subs see their schedule without you CC&apos;ing them on emails",
              "Integrated with purchasing &mdash; schedule milestones trigger bid requests and POs automatically",
              "Permit milestone tracking &mdash; the biggest wildcard in residential construction",
              "Flat-rate pricing &mdash; per-seat tools penalize you for including your subs and PMs",
              "AI that acts on your data &mdash; not just a chatbot that gives generic answers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold flex-shrink-0 mt-0.5">&mdash;†’</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The bottom line</h2>
          <p>
            Your best subcontractors are evaluating you as a client the same way you evaluate vendors. Clear schedules, advance notice, and clean communication aren&apos;t just nice to have &mdash; they&apos;re how you keep the crews that keep your builds on schedule.
          </p>
          <p>
            Subcontractor scheduling software is only valuable if it makes your subs&apos; lives easier and gives you the visibility to prevent problems before they cascade. That means milestone-linked notifications, integrated purchasing, AI-powered schedule analysis, and flat-rate pricing that doesn&apos;t punish you for including your whole team.
          </p>
          <p>
            Cornerstone PM™ is in beta now, and early adopters get 2 years free. If you&apos;re building 5&ndash;50 homes a year and managing subcontractors via text message, this is worth a look.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">See scheduling in Cornerstone PM™</h3>
          <p className="text-slate-400 text-sm mb-4">
            Beta access is open now. Includes scheduling, purchasing, AI, and the full platform &mdash; free for 2 years.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold text-sm hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
