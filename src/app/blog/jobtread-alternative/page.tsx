import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "JobTread Alternative for Home Builders — Cornerstone PM Blog",
  description:
    "JobTread is built for general contractors. Cornerstone PM is built for home builders. Here's the honest difference — lot management, design center, sales pipeline, and AI that actually works with your data.",
};

const comparison = [
  { feature: "Scheduling", jobtread: true, cornerstone: true },
  { feature: "Purchasing & Budgets", jobtread: true, cornerstone: true },
  { feature: "Client Portal", jobtread: true, cornerstone: true },
  { feature: "Sales Pipeline (CRM)", jobtread: false, cornerstone: true },
  { feature: "Design Center / Options Engine", jobtread: false, cornerstone: true },
  { feature: "Lot & Community Management", jobtread: false, cornerstone: true },
  { feature: "MLS Listing Generator", jobtread: false, cornerstone: true },
  { feature: "AI Agent (reads & writes your data)", jobtread: false, cornerstone: true },
  { feature: "Blueprint Takeoff AI", jobtread: false, cornerstone: true },
  { feature: "Built for home builders (not remodelers)", jobtread: false, cornerstone: true },
  { feature: "Flat-rate pricing (unlimited users)", jobtread: false, cornerstone: true },
];

export default function JobtreadAlternativePost() {
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

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Comparison
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Looking for a JobTread Alternative? Here&apos;s What Home Builders Should Know
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 27, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            JobTread has built a solid reputation in the general contractor space. Good scheduling, decent financials, reasonable price. But a growing number of home builders are searching for alternatives &mdash; and the reason is almost always the same: JobTread is built for contractors, not home builders.
          </p>

          <p>
            That distinction matters more than it sounds. General contractors work on custom remodels, commercial projects, and one-off builds. Home builders work on communities &mdash; multiple lots, repeatable floorplans, sales pipelines, design center options, and buyer journeys that start before a shovel goes in the ground. Those workflows don&apos;t exist in JobTread.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">What JobTread does well</h2>
          <p>
            To be fair: JobTread is genuinely good at what it does. If you&apos;re a general contractor doing custom remodels, it&apos;s a strong product. Scheduling is well-designed. The budget tracking is clean. The client portal is solid.
          </p>
          <p>
            The pricing is also transparent: $199/mo base, $20/user. For a small team, that&apos;s manageable. For a builder with 6 PMs, 2 admins, and a sales team all needing access, the per-seat model adds up fast.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Where JobTread falls short for home builders</h2>
          <p>
            Here&apos;s where the friction shows up in practice:
          </p>

          <div className="space-y-5 my-6">
            {[
              {
                title: "No sales pipeline",
                desc: "Home builders manage prospects from first inquiry through contract. JobTread has no CRM. You&apos;re managing that in a separate tool, or a spreadsheet, or nothing.",
              },
              {
                title: "No design center / options engine",
                desc: "Managing buyer selections — Good/Better/Best options, design center appointments, upgrade pricing — requires purpose-built tooling. JobTread has none of this.",
              },
              {
                title: "No lot or community management",
                desc: "Home builders think in communities and lots, not individual projects. JobTread treats everything as a separate project, which breaks down when you&apos;re managing 6 homes in the same subdivision.",
              },
              {
                title: "No MLS or listing tools",
                desc: "Generating MLS descriptions, listing sheets, and room dimension documents from your real project data isn&apos;t something JobTread touches.",
              },
              {
                title: "AI is bring-your-own-ChatGPT",
                desc: "JobTread&apos;s &ldquo;AI&rdquo; is middleware that connects to ChatGPT. It doesn&apos;t read your actual data, it doesn&apos;t write to your database, and it doesn&apos;t understand construction workflows.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-slate-900/60 border border-red-500/10 p-5 not-prose">
                <p className="text-white font-bold mb-2">{item.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">Feature comparison</h2>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 my-8">
          <div className="grid grid-cols-3 px-6 py-3 bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <div>Feature</div>
            <div className="text-center">JobTread</div>
            <div className="text-center">Cornerstone PM</div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-3.5 items-center ${
                i < comparison.length - 1 ? "border-b border-slate-800/60" : ""
              } bg-slate-900/60`}
            >
              <div className="text-slate-300 text-sm">{row.feature}</div>
              <div className="flex justify-center">
                {row.jobtread ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
              </div>
              <div className="flex justify-center">
                {row.cornerstone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <X className="w-4 h-4 text-slate-600" />
                )}
              </div>
            </div>
          ))}
          <div className="grid grid-cols-3 px-6 py-4 items-center bg-slate-900 border-t border-slate-700">
            <div className="text-white font-bold text-sm">Starting Price</div>
            <div className="text-center text-slate-400 text-sm">$199/mo + $20/user</div>
            <div className="text-center text-amber-400 font-bold text-sm">$149/mo flat</div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The AI difference</h2>
          <p>
            Cornerstone PM includes Foreman AI &mdash; a 47-skill construction agent that reads and writes your real data. Not a general-purpose chatbot. An agent that knows your parts catalog, your vendor bids, your homes, your sales pipeline, and your budget data.
          </p>
          <p>
            You can ask it things like: <em>&ldquo;Flag homes where actual costs are over 10% of budget&rdquo;</em>, <em>&ldquo;Generate a bid request for all Electrical vendors at Oak Creek&rdquo;</em>, or <em>&ldquo;Write an MLS description for The Addison at Bayside Preserve.&rdquo;</em>
          </p>
          <p>
            That&apos;s not something JobTread&apos;s ChatGPT integration can do. It doesn&apos;t have access to your data.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Who should look at Cornerstone PM</h2>
          <p>
            Cornerstone PM is the right call if you&apos;re a home builder managing 5&ndash;50 homes a year and you need:
          </p>
          <ul className="space-y-2 my-4">
            {[
              "A full sales pipeline from inquiry to contract",
              "Design center and buyer selection management",
              "Lot and community organization (not just project-per-project)",
              "AI that actually reads and acts on your construction data",
              "Flat-rate pricing that doesn&apos;t charge per seat",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            If you&apos;re a general contractor doing custom remodels, JobTread is probably fine. If you&apos;re building homes in communities, selling to buyers before construction starts, and managing design center options &mdash; you need a tool built for that workflow, not adapted from it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The bottom line</h2>
          <p>
            JobTread is a good product for the customer it was built for. That customer isn&apos;t a home builder. Cornerstone PM is.
          </p>
          <p>
            We&apos;re in beta now with 2 years free for early adopters. No credit card, no sales call, no per-seat pricing that makes you think twice before adding your team.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-lg font-bold text-white mb-2">Try Cornerstone PM free</h3>
          <p className="text-slate-400 text-sm mb-4">
            Beta access is open now. 2 years free for early adopters. Built for home builders, not contractors.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-sm hover:from-amber-400 hover:to-amber-300 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
