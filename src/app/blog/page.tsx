import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Cornerstone PM",
  description: "Insights for home builders on scheduling, technology, and running a smarter building operation.",
};

const posts = [
  {
    slug: "buildertrend-vs-cornerstone",
    title: "BuilderTrend vs Cornerstone PM: The Honest Comparison",
    excerpt:
      "BuilderTrend is the big name in builder software. But is it worth $499/mo for a builder closing 10–30 homes a year? We break it down.",
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
      "Your buyers call twice a week asking for updates. Your team spends 20 minutes on each call. There's a better way — and your buyers will love you for it.",
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
                  <span className="text-xs text-slate-600">·</span>
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
