import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Where Your Margin Goes: How Home Builders Lose Money Without Knowing It — Cornerstone PM™ Blog",
  description:
    "Most home builders don't find out they lost margin until the home closes. Here's how job cost tracking works, why it matters, and how to catch budget overruns before they happen.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/job-cost-tracking.png", width: 1024, height: 1024, alt: "Job cost tracking dashboard for residential home builders showing area cost breakdowns" }],
  }
};

export default function JobCostTrackingPost() {
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

        <BlogHero src="/blog/job-cost-tracking.png" alt="Job cost tracking dashboard for residential home builders showing area cost breakdowns" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-green-400 bg-green-500/10 border-green-500/20 mb-4 inline-block">
            Budgeting
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Where Your Margin Goes: How Home Builders Lose Money Without Knowing It
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 25, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            You close the home. You do the math. And somehow — despite hitting your schedule and
            selling every option — the margin is thinner than it should be. Sound familiar?
          </p>

          <p>
            For most small-to-mid-sized home builders, job cost overruns aren&apos;t one big disaster.
            They&apos;re fifty small ones: a lumber change order here, a framing extra there, a
            forgotten allowance overage that nobody flagged until the final draw. By the time you
            notice, the money&apos;s gone and the house is already closed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The budget that only exists at the start
          </h2>

          <p>
            Every builder has a budget at contract time. The problem is what happens to it after
            that. Most builders track their estimated costs in one place — a spreadsheet, a
            QuickBooks job, a number in their head — and then spend the next six months approving
            invoices without ever comparing them back to the original estimate.
          </p>

          <p>
            By the time you run a job cost report, you&apos;re not managing a budget. You&apos;re writing
            a post-mortem.
          </p>

          <p>
            The builders who consistently protect their margin do something different: they track
            committed costs in real time, not retrospectively. Every purchase order issued against
            a lot is a commitment. Every approved change order is a budget adjustment. You need to
            see both — live — before the invoices land.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The four places margin quietly disappears
          </h2>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Untracked change orders",
                body: "Your framing sub added a beam you didn't plan for. Your plumber billed for an extra fixture the buyer requested verbally. These changes happen on every job. Without a system that ties change orders back to the original budget line, they accumulate silently until close.",
              },
              {
                title: "Allowance overages nobody flags",
                body: "You budgeted $8,500 for flooring. Your buyer picked $11,200 worth. Did that delta get priced into the contract? Did anyone tell purchasing? If your design selections and your budget system don't talk to each other, this gap lives in the dark until settlement.",
              },
              {
                title: "Duplicate or unchecked invoices",
                body: "When invoices come in as PDFs to your email, get printed, and get approved in a stack on your desk, errors slip through. Duplicate bills, incorrect quantities, and overbilled change orders are common — and almost impossible to catch without a line-item comparison to your PO.",
              },
              {
                title: "Scope creep on superintendent calls",
                body: "\"Just have them fix it while they're there\" is a phrase that costs builders thousands of dollars a year. Small field decisions that never make it into a PO or change order add up fast across a community. If it didn't get written up, it didn't get budgeted.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What real-time job cost tracking looks like
          </h2>

          <p>
            The goal isn&apos;t a better spreadsheet — it&apos;s a system where your budget, your purchase
            orders, and your actual invoices all live in the same place and stay in sync automatically.
          </p>

          <p>
            When a PO is issued, it commits against a budget line. When a change order is approved,
            the budget updates. When an invoice comes in, it matches against the PO — and if the
            numbers don&apos;t align, someone gets alerted before the check goes out. At any point during
            construction, you can open a lot and see exactly where you stand: budget, committed
            costs, invoiced to date, and projected variance.
          </p>

          <p>
            That visibility changes how you make decisions. Instead of approving a framing extra
            because it sounds reasonable, you approve it knowing exactly how much room you have in
            that trade line and whether the job can absorb it. That&apos;s the difference between
            managing margin and hoping for it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone PM™ handles purchasing and budgets
          </h2>

          <p>
            Cornerstone PM™&apos;s purchasing module is built around this workflow. Every lot has a
            budget broken down by trade and category. Purchase orders issue against those lines.
            Change orders flow through an approval process and update committed costs in real time.
            When an invoice arrives, it gets matched to a PO — and variances surface immediately,
            not at close.
          </p>

          <p>
            The same platform that manages your build schedule and your sales pipeline also tracks
            every dollar committed against every lot. No switching between systems, no manual
            reconciliation, no margin surprises at the end of the job.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Start protecting margin on the next home
          </h2>

          <p>
            The best time to implement job cost tracking was before you broke ground on your last
            community. The second best time is now. The data you capture on your next ten homes
            will tell you more about where your business actually makes money than any spreadsheet
            you&apos;ve ever built.
          </p>

          <p>
            Margin doesn&apos;t disappear all at once. It leaks, one small unapproved expense at a time.
            A purchasing system that tracks every commitment closes that leak — before it costs you.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See how Cornerstone PM™ tracks budgets, POs, and job costs in one place
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Join the beta — free for 2 years for early adopters.
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
