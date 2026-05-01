import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Your Best Subs Are Choosing Other Builders — Cornerstone PM Blog",
  description:
    "Good subcontractors have options. If your scheduling is a mess and communication is inconsistent, they'll quietly prioritize builders who make their lives easier. Here's how to be that builder.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/subcontractor-management.png", width: 1024, height: 1024, alt: "Subcontractor management for home builders with vendor portal and scope item tracking" }],
  }
};

export default function SubcontractorManagementPost() {
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

        <BlogHero src="/blog/subcontractor-management.png" alt="Subcontractor management for home builders with vendor portal and scope item tracking" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Vendor Management
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Your Best Subs Are Choosing Other Builders Over You
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 23, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            Here&apos;s something most home builders don&apos;t want to admit: your subcontractors are ranking
            you. Not out loud, and not in a spreadsheet — but in their heads, every week, they&apos;re
            deciding whose jobs to prioritize when things get tight.
          </p>

          <p>
            And if your scheduling is inconsistent, your communication is reactive, and your crews
            are regularly showing up to sites that aren&apos;t ready — you&apos;re losing that ranking
            competition to the builder down the street. Quietly. One rescheduled job at a time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Good subs have options. You might not.
          </h2>

          <p>
            In a tight labor market, skilled subcontractors — your electricians, framers, HVAC
            crews, concrete finishers — are not waiting around for work. The best ones are booked
            weeks out. They are choosing which builders to commit to based on one simple question:
            <em className="text-white"> who makes my job easier?</em>
          </p>

          <p>
            The builder who gives them clear start dates, notifies them promptly when the previous
            trade wraps up, and doesn&apos;t waste their time with site visits to unfinished lots — that
            builder gets the call-back. The builder with the chaotic schedule and the last-minute
            texts gets pushed to the bottom of the pile.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The four ways builders damage sub relationships without realizing it
          </h2>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Late or no-show notifications",
                body: "Your foundation passed inspection Thursday afternoon. Your framing crew finds out Monday morning — from you, in a scrambled phone call — that they&apos;re supposed to start Tuesday. They&apos;ve already committed that crew to a different job. You just lost a week.",
              },
              {
                title: "Sending crews to sites that aren't ready",
                body: "Nothing damages a sub relationship faster than wasted trips. When a concrete crew drives 40 minutes to a lot that isn&apos;t properly prepped, or an electrician shows up to rough-in before framing is done, you&apos;ve burned their time and your credibility.",
              },
              {
                title: "Unclear scope on each visit",
                body: "\"Come finish up the plumbing\" is not a work order. Subs need to know exactly what phase is expected, what the site conditions are, and what follows after them. Vague communication leads to incomplete work, callbacks, and frustration on both sides.",
              },
              {
                title: "Payment and paperwork delays",
                body: "Slow approvals, missing lien waivers, and unclear payment timelines are death by a thousand cuts. Subs talk to each other. If you&apos;re known as the builder who takes 60 days to pay, you&apos;ll only attract the subs no one else will hire.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What &ldquo;sub-friendly&rdquo; scheduling actually looks like
          </h2>

          <p>
            The builders who consistently attract and retain great subs don&apos;t do it with higher pay
            (though that helps). They do it with predictability. Their subs always know what&apos;s coming,
            when they&apos;re needed, and what the site will look like when they arrive.
          </p>

          <p>
            That means:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>
              <strong className="text-white">Automated notifications</strong> when the preceding trade is complete — not a phone call three days later.
            </li>
            <li>
              <strong className="text-white">Clear, phase-based scheduling</strong> that shows each sub their window, their dependencies, and what comes before and after them.
            </li>
            <li>
              <strong className="text-white">Conflict detection</strong> so you never double-book two trades on the same lot on the same day.
            </li>
            <li>
              <strong className="text-white">A single source of truth</strong> — not a spreadsheet on your desktop that nobody else can see.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The compounding advantage of a reliable sub network
          </h2>

          <p>
            When your subs trust you, something powerful happens: they start giving you priority.
            They call you when they have an opening. They push your jobs through faster because they
            know your sites are always ready. They recommend you to other subs who are looking for
            steady, well-organized work.
          </p>

          <p>
            Over time, the builder with the best sub relationships builds homes faster, with fewer
            defects, and at lower cost — because they&apos;re not paying premium rates to whoever is
            available last-minute. That&apos;s a real competitive advantage, and it starts with how you
            communicate and schedule today.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Start with the handoff
          </h2>

          <p>
            You don&apos;t have to overhaul everything at once. The single highest-leverage change most
            builders can make is improving the <em className="text-white">handoff notification</em> — the moment one
            trade finishes and the next one needs to know. If you can make that notification
            automatic, accurate, and immediate, you&apos;ll eliminate the most common source of schedule
            slip and sub frustration in a single step.
          </p>

          <p>
            Cornerstone PM&apos;s scheduling module automates exactly that. When a phase is marked
            complete, the next trade gets notified — no phone tag, no three-day delay. Your schedule
            moves forward on its own, and your subs start to notice that working with you is just
            easier than working with anyone else.
          </p>

          <p>
            That&apos;s how you become the builder they call first.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">Build a schedule your subs will actually follow</h3>
          <p className="text-slate-400 text-sm mb-4">
            Join the Cornerstone PM beta — free for 2 years for early adopters.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-bold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all duration-200"
          >
            Get Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
