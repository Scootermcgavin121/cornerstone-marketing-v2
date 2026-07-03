import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const blogSchema = buildBlogPostSchema({
  title:
    "Auto-Quantity Scope Items: How Cornerstone PM Saves Purchasing Agents Hours Per Floorplan",
  slug: "auto-quantity-scope-items-home-builder",
  description:
    "Set a quantity source once on a scope item and every floorplan auto-calculates. No manual entry, no stale numbers. ANSI Z765 compliant.",
  datePublished: "2026-05-26",
});

export const metadata: Metadata = {
  title:
    "Auto-Quantity Scope Items: How Cornerstone PM Saves Purchasing Agents Hours Per Floorplan | Cornerstone PM\u2122",
  description:
    "Set a quantity source once on a scope item \u2014 Under Air Sqft, Total Sqft, Exterior Perimeter, or Roof Squares \u2014 and every floorplan auto-calculates. No manual entry, no stale numbers. ANSI Z765 compliant.",
  openGraph: {
    title:
      "Auto-Quantity Scope Items: How Cornerstone PM Saves Purchasing Agents Hours Per Floorplan",
    description:
      "Set a quantity source once on a scope item and every floorplan auto-calculates. No manual entry, no stale numbers.",
    type: "article",
    publishedTime: "2026-05-26T00:00:00Z",
  },
};

export default function AutoQuantityBlogPost() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-32 pb-20">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs font-bold rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
              Product Update
            </span>
            <span className="text-slate-500 text-sm">May 26, 2026</span>
            <span className="text-slate-600 text-sm">&middot; 6 min read</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Auto-Quantity Scope Items: Set It Once,{" "}
            <span className="text-emerald-400">
              Every Floorplan Gets the Right Number
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Purchasing agents spend hours entering square footage across dozens
            of scope items for every new floorplan. Auto-Quantity eliminates that
            entirely. Set the quantity source once on the scope item —
            every floorplan auto-calculates from its dimensions.
          </p>
        </div>

        {/* Hero visual */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 mb-12 bg-slate-900/60 p-8 text-center">
          <div className="text-6xl mb-4">&#x1F4D0;</div>
          <div className="text-2xl font-black text-white mb-2">
            Electrical Rough → Under Air Sqft
          </div>
          <div className="flex justify-center gap-8 text-slate-400">
            <div>
              <div className="text-emerald-400 text-3xl font-black">2,400</div>
              <div className="text-sm">The Addison</div>
            </div>
            <div>
              <div className="text-emerald-400 text-3xl font-black">1,800</div>
              <div className="text-sm">The Magnolia</div>
            </div>
            <div>
              <div className="text-emerald-400 text-3xl font-black">3,200</div>
              <div className="text-sm">The Oakmont</div>
            </div>
          </div>
          <div className="text-slate-500 text-sm mt-4">
            One setting. Three floorplans. Zero manual entry.
          </div>
        </div>

        {/* Body */}
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-white">
          <h2>The Problem: 40+ Scope Items × Every Floorplan</h2>
          <p>
            Every scope item in your purchasing system — Electrical Rough,
            Insulation, Drywall, Paint Labor, HVAC, Framing — needs a
            quantity. For most builders, that quantity is square footage. And for
            most builders, entering that square footage is a manual process.
          </p>
          <p>
            Add a new floorplan to your portfolio? Open every scope item and type
            the number. Change the dimensions of an existing plan? Remember to
            update every scope item that references those dimensions. Forget one?
            Your POs are wrong. Your budget is wrong. Nobody catches it until
            field costs don&apos;t match.
          </p>
          <p>
            Multiply this across 10, 20, 50 floorplans. It&apos;s not
            complicated work — it&apos;s tedious, error-prone, and
            completely avoidable.
          </p>

          <h2>The Fix: Quantity Source</h2>
          <p>
            Every scope item now has a <strong>Quantity Source</strong> setting
            with five options:
          </p>
          <ul>
            <li>
              <strong>Manual</strong> — enter the quantity by hand (the
              old way, still available when you need it)
            </li>
            <li>
              <strong>Under Air Sqft</strong> — conditioned living space,
              excluding garage and porch
            </li>
            <li>
              <strong>Total Sqft (Under Roof)</strong> — everything under
              the roof, including garage and porch
            </li>
            <li>
              <strong>Exterior Perimeter</strong> — exterior perimeter in
              linear feet
            </li>
            <li>
              <strong>Roof Squares</strong> — roof area measured in
              roofing squares
            </li>
          </ul>
          <p>
            Set “Electrical Rough → Under Air Sqft” <em>once</em> on the
            scope item. From that point forward, The Addison automatically gets
            2,400 sqft, The Magnolia gets 1,800 sqft, The Oakmont gets 3,200
            sqft. You never type those numbers again.
          </p>

          <h2>It Works with Structural Options</h2>
          <p>
            This is where it gets powerful. When a home has structural options
            — a finished basement, a bonus room, an extended garage —
            the auto-quantity doesn&apos;t just use the base house dimensions. It
            <strong> aggregates</strong>.
          </p>
          <p>
            Base house: 2,400 sqft under air. Finished basement option: +800
            sqft. The PO for Electrical Rough automatically shows 3,200 sqft
            — the combined total. No manual addition, no separate line
            items to reconcile.
          </p>
          <p>
            Visual indicators on the scope item show which quantities are
            auto-linked vs. manually entered, so your team always knows where
            the number came from.
          </p>

          <h2>ANSI Z765 Compliant</h2>
          <p>
            The measurement calculations follow{" "}
            <strong>ANSI Z765</strong> standards — the same standard used
            by appraisers and real estate professionals. “Under Air”
            means conditioned living space. “Total Sqft” means
            everything under the roof. No ambiguity about what&apos;s included or
            excluded.
          </p>

          <h2>What This Means for Your Workflow</h2>
          <ul>
            <li>
              <strong>New floorplan?</strong> Enter the dimensions once. Every
              scope item auto-calculates.
            </li>
            <li>
              <strong>Dimensions change?</strong> Update them in one place. Every
              scope item, every PO, every budget line updates.
            </li>
            <li>
              <strong>Structural option added?</strong> Its quantities aggregate
              with the base house automatically.
            </li>
            <li>
              <strong>Stale numbers?</strong> Gone. The quantity is always
              derived from current floorplan data.
            </li>
          </ul>

          <h2>Also Shipped This Week</h2>
          <p>
            Auto-Quantity was the headline feature, but we also shipped several
            other updates:
          </p>
          <ul>
            <li>
              <strong>Multi-Tab Excel Import/Export</strong> — export an
              entire floorplan as a single multi-tab workbook (base house,
              locations, structural options, elevations). Import works the same
              way. One file, complete data.
            </li>
            <li>
              <strong>Exclusion Groups</strong> — “Pick One”
              rules in the design center. Set flooring as an exclusion group:
              buyer picks hardwood, carpet auto-locks. No conflicting
              selections.
            </li>
            <li>
              <strong>Design Center Settings</strong> — full admin control
              over selection rules, deadlines, and the buyer experience.
            </li>
            <li>
              <strong>100% Selection Confetti</strong> — when a buyer
              completes all design selections, they get a confetti celebration.
              Small touch, big moment.
            </li>
            <li>
              <strong>Neon Database Branching</strong> — instant
              full-copy demo environments for testing and staging. Deploy a
              complete copy of your production database in seconds.
            </li>
          </ul>

          <h2>Get Started</h2>
          <p>
            Auto-Quantity is live now for all Cornerstone PM users. Set your
            quantity sources from the Scope Items page — the change takes
            effect immediately across every floorplan in your portfolio.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/30 text-center">
          <h3 className="text-2xl font-black mb-3">
            Ready to stop typing square footage?
          </h3>
          <p className="text-slate-400 mb-6">
            Join the beta and see Auto-Quantity, Bid Import AI, and the full
            purchasing suite in action.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/30"
          >
            Request Early Access →
          </Link>
        </div>

        {/* Related links */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Related
          </h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/purchasing"
              className="flex-1 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors"
            >
              <div className="font-bold text-white text-sm">
                Purchasing &amp; Budgets
              </div>
              <div className="text-slate-500 text-xs mt-1">
                Full purchasing module overview
              </div>
            </Link>
            <Link
              href="/design"
              className="flex-1 p-4 rounded-xl border border-slate-800 hover:border-violet-500/30 transition-colors"
            >
              <div className="font-bold text-white text-sm">Design Center</div>
              <div className="text-slate-500 text-xs mt-1">
                Exclusion Groups, confetti, and more
              </div>
            </Link>
            <Link
              href="/features"
              className="flex-1 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors"
            >
              <div className="font-bold text-white text-sm">All Features</div>
              <div className="text-slate-500 text-xs mt-1">
                Seven modules, one platform
              </div>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
