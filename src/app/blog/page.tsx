import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog &mdash;€” Cornerstone PM",
  description: "Insights for home builders on scheduling, technology, and running a smarter building operation.",
};

const posts = [
  {
    slug: "migrating-from-buildertrend-to-cornerstone",
    title: "Migrating from Buildertrend to Cornerstone PM: Step-by-Step Guide",
    excerpt:
      "Most production home builders can migrate from Buildertrend to Cornerstone PM in 3–5 business days. Here's the full step-by-step: data export, community setup, schedule templates, vendor migration, and team onboarding.",
    date: "May 3, 2026",
    readTime: "7 min read",
    tag: "Migration Guide",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "home-builder-software-buyer-guide-2026",
    title: "Home Builder Software Buyer's Guide (2026)",
    excerpt:
      "Complete 2026 decision framework for home builder software. Compare NEWSTAR, BuildPro, Buildertrend, and Cornerstone PM across features, AI capabilities, implementation cost, and fit for your builder size.",
    date: "May 1, 2026",
    readTime: "9 min read",
    tag: "Buyer's Guide",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "design-center-home-builder",
    title: "Why Your Design Center Process Is Leaking Options Revenue",
    excerpt:
      "The design center appointment is one of the highest-margin moments in a home sale. Most builders are leaving money on the table through inconsistent presentations, untracked allowances, and selections that never make it to purchasing.",
    date: "April 29, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  },
  {
    slug: "new-home-sales-pipeline",
    title: "Your Home Builder Sales Pipeline Is Losing You Buyers",
    excerpt:
      "Most home builders don't have a real sales pipeline — they have a spreadsheet and a gut feeling. Here's how tracking prospects the right way closes more contracts and wastes less time.",
    date: "April 27, 2026",
    readTime: "6 min read",
    tag: "Sales Pipeline",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    slug: "jobtread-alternative",
    title: "Looking for a JobTread Alternative? Here's What Home Builders Should Know",
    excerpt:
      "JobTread is built for general contractors. Cornerstone PM is built for home builders. Here's the honest difference &mdash;€” lot management, design center, sales pipeline, and AI that actually works with your data.",
    date: "April 1, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "subcontractor-scheduling-software",
    title: "Subcontractor Scheduling Software: What Home Builders Actually Need",
    excerpt:
      "Your best subs are evaluating you as a client. Clear schedules, advance notice, and clean communication aren't just nice to have &mdash;€” they're how you keep the crews that keep your builds on schedule.",
    date: "March 25, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "construction-purchase-order-software",
    title: "Construction Purchase Order Software for Home Builders (2026 Guide)",
    excerpt:
      "Managing construction POs in Excel is costing home builders time and margin. Here's what modern purchase order software should actually do &mdash;€” and how AI is changing the equation.",
    date: "April 8, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "homebuilding-ai",
    title: "Homebuilding AI: How AI is Changing Residential Construction in 2026",
    excerpt:
      "Homebuilding is one of the last industries to get purpose-built AI &mdash;€” that&apos;s changing fast. Here's where AI is making the biggest impact in residential construction and what's coming next.",
    date: "March 3, 2026",
    readTime: "6 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "builder-ai-software",
    title: "Builder AI Software: Why Home Builders Need Purpose-Built AI (Not Generic Tools)",
    excerpt:
      "\"Builder AI software\" is a new search &mdash;€” people are looking for AI built specifically for builders. Here's why generic AI fails home builders and what purpose-built looks like.",
    date: "March 18, 2026",
    readTime: "5 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "ai-construction-management-software",
    title: "AI Construction Management Software: What Home Builders Need to Know (2026)",
    excerpt:
      "AI is everywhere in construction marketing but most tools are generic. Here's what real AI construction management software looks like for home builders &mdash;€” and how to evaluate what you're buying.",
    date: "March 10, 2026",
    readTime: "7 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "job-cost-tracking-home-builders",
    title: "Where Your Margin Goes: How Home Builders Lose Money Without Knowing It",
    excerpt:
      "Most builders don't find out they lost margin until the home closes. Here's how real-time job cost tracking &mdash;€” budgets, POs, and change orders in one place &mdash;€” stops the leak before it starts.",
    date: "April 25, 2026",
    readTime: "6 min read",
    tag: "Budgeting",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    slug: "subcontractor-management-home-builders",
    title: "Why Your Best Subs Are Choosing Other Builders Over You",
    excerpt:
      "Good subcontractors have options. If your scheduling is chaotic and your communication is reactive, they'll quietly prioritize builders who make their lives easier &mdash;€” here's how to be that builder.",
    date: "April 23, 2026",
    readTime: "6 min read",
    tag: "Vendor Management",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "permitting-delays-home-builders",
    title: "Why Permits Are Stalling Your Build Schedule",
    excerpt:
      "Permit delays are the silent schedule killer for home builders. Here's how to stop letting city hall derail your close dates &mdash;€” and what connected software changes about the equation.",
    date: "April 21, 2026",
    readTime: "5 min read",
    tag: "Permitting",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    slug: "buildertrend-vs-cornerstone",
    title: "BuilderTrend vs Cornerstone PM: The Honest Comparison",
    excerpt:
      "BuilderTrend is the big name in builder software. But is it worth $499/mo for a builder closing 10&mdash;€“30 homes a year? We break it down.",
    date: "April 14, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "spreadsheets-killing-schedule",
    title: "Your Spreadsheet Is Killing Your Schedule",
    excerpt:
      "Excel doesn't notify your framer when the foundation is ready. It doesn't catch double-booked subs. Here's what running your build schedule on spreadsheets is actually costing you.",
    date: "April 10, 2026",
    readTime: "5 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "60-second-home-sale",
    title: "The 60-Second Home Status Update Your Buyers Actually Want",
    excerpt:
      "Your buyers call twice a week asking for updates. Your team spends 20 minutes on each call. There's a better way &mdash;€” and your buyers will love you for it.",
    date: "April 7, 2026",
    readTime: "4 min read",
    tag: "Buyer Experience",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.06),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            The Builder&apos;s Blog
          </h1>
          <p className="text-xl text-slate-400">
            Real talk for home builders on software, scheduling, and growing a smarter operation.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-8 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-600">&mdash;·</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-1.5 text-sm text-cyan-500 group-hover:text-cyan-400 transition-colors">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
