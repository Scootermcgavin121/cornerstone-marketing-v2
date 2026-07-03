import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/auto-quantity-scope-items.png";
const heroImageAlt =
  "Auto-quantity scope items in Cornerstone PM showing Under Air Sqft, Total Sqft, and Roof Squares automatically calculating costs across home builder floorplans";

const blogSchema = buildBlogPostSchema({
  title: "Auto-Quantity Scope Items: Stop Re-Entering Sqft on Every Floorplan",
  slug: "auto-quantity-scope-items-square-footage",
  description:
    "Cornerstone PM's auto-quantity scope items calculate paint, slab, framing, and cleaning costs directly from floorplan square footage — across every plan and structural option.",
  datePublished: "2026-05-28",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Auto-Quantity Scope Items in Cornerstone PM",
  description:
    "Link scope items to floorplan square footage so costs auto-calculate across every plan and structural option. No manual re-entry required.",
  totalTime: "PT10M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Navigate to Purchasing → Scope Items",
      text: "From your Cornerstone PM dashboard, open Purchasing and select Scope Items. This is where labor and material scopes live — each one maps to a vendor trade and appears in bid templates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Create or edit the scope item you want to auto-quantity",
      text: "Choose the scope item that varies by square footage — Frame Labor, Slab Mason, Interior Paint, Final Clean, Trim Carpenter, Roof Labor, etc. Click Edit (or create a new one).",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set the Quantity Source",
      text: "In the Quantity Source dropdown, choose the measurement that drives this scope: Under Air Sqft (heated/cooled space), Total Sqft (full footprint including garage), or Roof Squares (roof surface area). Cornerstone pulls these values directly from each floorplan's recorded dimensions.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Enter your unit rate",
      text: "Enter your labor or material rate per unit — for example, $4.25 per sqft for Frame Labor or $0.85 per sqft for Interior Paint. This is the number you negotiate with your vendor and update when pricing shifts.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Save — every floorplan and structural option auto-calculates",
      text: "Hit Save. Cornerstone immediately applies the rate × quantity source to every floorplan in your catalog, AND to every structural option (bonus room, finished basement, 3-car garage) that changes that floorplan's footprint. Update the rate once and every plan reprices instantly.",
    },
  ],
};

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
  description: heroImageAlt,
  creditText: "Cornerstone PM",
};

export const metadata: Metadata = {
  title:
    "Auto-Quantity Scope Items: Stop Re-Entering Sqft on Every Floorplan — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM's auto-quantity scope items calculate paint, slab, framing, and cleaning costs directly from floorplan square footage — across every plan and structural option.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/auto-quantity-scope-items-square-footage",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

export default function AutoQuantityScopeItemsPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageObjectSchema) }}
      />

      <article className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
              Product Update
            </span>
            <span className="text-xs text-slate-500">May 28, 2026</span>
            <span className="text-xs text-slate-600">—·</span>
            <span className="text-xs text-slate-500">6 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
            Auto-Quantity Scope Items: Stop Re-Entering Sqft on Every Floorplan
          </h1>

          {/* Lead paragraph */}
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            Auto-quantity scope items in{" "}
            <Link href="/purchasing" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              Cornerstone PM
            </Link>{" "}
            link a scope item’s quantity directly to a floorplan measurement — Under Air
            Sqft, Total Sqft, or Roof Squares — so every plan and every structural option
            prices itself automatically. You define paint cost per sqft once. Cornerstone
            reprices every floorplan, every elevation, every structural option instantly. No
            manual re-entry. No stale numbers.
          </p>

          {/* Hero image */}
          <div className="mb-10">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              width={1024}
              height={1024}
              priority
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Why Are Purchasing Agents Re-Entering Sqft So Often?
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most construction software stores scope items at the job or floorplan level as
            fixed numbers. When a builder adds a new floorplan — or when a buyer picks a
            structural option that changes the footprint — someone has to open each affected
            scope, recalculate the quantity manually, and type it in again.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            For a builder running 12 floorplans with 4 structural options each, that’s
            60+ line items to touch every time framing labor rates change. Multiply that by
            every scope that’s driven by square footage — Frame Labor, Slab Mason, Interior
            Paint, Final Clean, Trim Carpenter, Roof Labor — and you have a data entry
            problem that eats hours per month and produces stale pricing between updates.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Buildertrend and JobTread handle this the same way most tools do: per-plan line
            items, entered manually, updated manually. The auto-quantity approach eliminates
            the manual step entirely.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            The Three Quantity Sources — and Which Scopes They Drive
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Cornerstone PM supports three measurement sources pulled directly from each
            floorplan’s recorded dimensions:
          </p>

          <div className="grid gap-4 mb-8">
            {[
              {
                source: "Under Air Sqft",
                description:
                  "Heated and cooled interior space (ANSI Z765 compliant). Drives interior-finish scopes that scale with livable area.",
                scopes: ["Interior Paint", "Final Clean", "Trim Carpenter", "Flooring Labor"],
                color: "emerald",
              },
              {
                source: "Total Sqft",
                description:
                  "Full building footprint including garage and covered porch. Drives structural and exterior-envelope scopes.",
                scopes: ["Frame Labor", "Slab Mason", "Waterproofing", "HVAC Rough-In"],
                color: "cyan",
              },
              {
                source: "Roof Squares",
                description:
                  "Roof surface area in squares (1 square = 100 sqft). Drives roofing labor and materials scopes directly off the pitch-adjusted area.",
                scopes: ["Roof Labor", "Roof Supplier", "Underlayment", "Ridge Vent"],
                color: "violet",
              },
            ].map((item) => (
              <div
                key={item.source}
                className={`p-5 rounded-xl border ${
                  item.color === "emerald"
                    ? "bg-emerald-500/5 border-emerald-500/20"
                    : item.color === "cyan"
                    ? "bg-cyan-500/5 border-cyan-500/20"
                    : "bg-violet-500/5 border-violet-500/20"
                }`}
              >
                <h3
                  className={`font-bold mb-1 ${
                    item.color === "emerald"
                      ? "text-emerald-400"
                      : item.color === "cyan"
                      ? "text-cyan-400"
                      : "text-violet-400"
                  }`}
                >
                  {item.source}
                </h3>
                <p className="text-sm text-slate-400 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.scopes.map((scope) => (
                    <span
                      key={scope}
                      className="text-xs text-slate-300 bg-slate-800/60 border border-slate-700/60 px-2 py-0.5 rounded-full"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Section 3 — HowTo steps */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How to Set Up Auto-Quantity Scope Items (5 Steps)
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Setup takes under 10 minutes per scope item. Once configured, the scope
            auto-calculates forever — no maintenance required until your unit rate changes.
          </p>

          <ol className="space-y-5 mb-8">
            {[
              {
                n: 1,
                title: "Navigate to Purchasing → Scope Items",
                body: "From your Cornerstone PM dashboard, open Purchasing and select Scope Items. Each scope maps to a vendor trade and appears in the bid templates you send to subs.",
              },
              {
                n: 2,
                title: "Open the scope item you want to auto-quantity",
                body: "Pick a scope driven by square footage — Frame Labor, Interior Paint, Final Clean, Roof Labor, etc. Click Edit.",
              },
              {
                n: 3,
                title: "Set the Quantity Source",
                body: 'In the Quantity Source dropdown, choose Under Air Sqft, Total Sqft, or Roof Squares. Cornerstone pulls that measurement directly from each floorplan\'s recorded dimensions — no spreadsheet math on your end.',
              },
              {
                n: 4,
                title: "Enter your unit rate",
                body: "Type your labor or material rate per unit: $4.25/sqft for Frame Labor, $0.85/sqft for Interior Paint, whatever your vendor pricing says. This is the one number you update when pricing shifts.",
              },
              {
                n: 5,
                title: "Save — every floorplan and structural option auto-calculates",
                body: "Hit Save. Cornerstone applies rate × quantity source across every floorplan in your catalog instantly. Change the rate later and all 12 plans reprice in seconds.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Section 4 — Structural options */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Structural Options: The Repricing That Happens Automatically
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            This is where auto-quantity earns its keep. Most builders know their Magnolia
            plan is 2,100 sqft Under Air. What they don’t track cleanly is how the Bonus
            Room option (adds 280 sqft Under Air) changes Frame Labor, Interior Paint, Final
            Clean, and Trim Carpenter costs simultaneously.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            With manual entry, each structural option needs its own priced-out line items —
            maintained separately for every plan it applies to. A builder with 12 floorplans
            and a bonus room structural option available on 8 of them has 8 separate line
            items to keep in sync.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            With auto-quantity scope items, the structural option just records its
            incremental sqft impact. Every auto-quantity scope picks that up automatically.
            The bonus room on the Magnolia plan prices itself: Frame Labor adds $4.25 ×
            280 = $1,190. Interior Paint adds $0.85 × 280 = $238. Final Clean adds $0.22 ×
            280 = $61.60. All without anyone touching a scope item.
          </p>

          {/* Section 5 — vs manual */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            How This Compares to Buildertrend and JobTread
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Buildertrend’s estimating module stores line items per job. You can build
            estimate templates, but quantity is still a field you fill in per plan —
            there’s no native “pull from floorplan sqft” link. When your framing
            subcontractor raises rates in March, you update the template and apply it to
            new jobs going forward. Existing jobs and existing plan templates need manual
            updates.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            JobTread uses a similar job-scoped estimating model. Quantity is entered at
            the line-item level per job. There is no production-builder concept of a
            floorplan-level scope that propagates to every home of that plan.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            The difference isn’t just convenience — it’s a structural model. Buildertrend
            and JobTread were built for custom builders pricing unique jobs. Auto-quantity
            scope items are designed for production builders running the same plans
            repeatedly across multiple communities, where repricing 60 line items manually
            is not a viable workflow.
          </p>

          {/* Callout */}
          <div className="my-8 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <p className="text-emerald-300 font-semibold text-lg mb-2">
              One rate change. Every plan repriced.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              When your framing sub raises rates in spring, update Frame Labor once in
              Cornerstone PM. Every floorplan — and every structural option on every
              floorplan — reprices instantly. No spreadsheet. No data entry marathon.
            </p>
          </div>

          {/* Section 6 — Related features */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">
            Works With the Rest of Your Purchasing Stack
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Auto-quantity scope items connect directly to the rest of{" "}
            <Link href="/purchasing" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              Cornerstone PM’s purchasing workflow
            </Link>
            . When you send a bid request to vendors, the auto-calculated quantities
            populate the bid template automatically — subs see the right sqft-based numbers
            without you preparing a custom spreadsheet for each trade.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you use{" "}
            <Link href="/ai-takeoff" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              Blueprint AI for material takeoff
            </Link>
            , the extracted floorplan dimensions feed directly into auto-quantity
            calculations. Blueprint reads your floor plan PDF, records Under Air Sqft,
            Total Sqft, and Roof Squares, and every auto-quantity scope item prices itself
            from the output — from PDF upload to fully priced scope in under 60 seconds.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            And when you need to ask questions about your purchasing data —
            “What’s frame labor for the Magnolia with bonus room across all
            5 communities?” —{" "}
            <Link href="/foreman" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
              Foreman AI
            </Link>{" "}
            can pull that number directly from your scope items and floorplan data.
            No export to Excel required.
          </p>

          {/* Key takeaways */}
          <div className="my-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/60">
            <h3 className="text-white font-bold text-lg mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              {[
                "Auto-quantity scope items link directly to Under Air Sqft, Total Sqft, or Roof Squares from each floorplan.",
                "Structural options (bonus room, finished basement, 3-car garage) inherit the auto-calculation automatically — no separate line items.",
                "Update one unit rate and every floorplan reprices instantly — 12 plans, 60 scope items, zero manual entry.",
                "Works with Blueprint AI takeoff (feeds dimensions) and Foreman AI (queries pricing data).",
                "Buildertrend and JobTread require manual quantity entry per plan — built for custom builders, not production repeats.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-none mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Stop Repricing Floorplans by Hand
            </h3>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Auto-quantity scope items are live in Cornerstone PM. Set up your sqft-linked
              scopes once, and every current and future floorplan prices itself.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-colors duration-200"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related posts */}
          <div className="mt-16 pt-10 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/auto-quantity-scope-items-home-builder",
                  title: "Auto-Quantity Scope Items: Set It Once, Every Floorplan Gets the Right Number",
                  tag: "Product Update",
                  tagColor: "text-emerald-400",
                },
                {
                  href: "/purchasing",
                  title: "Cornerstone PM Purchasing: Vendor Bids, Scope Items & POs",
                  tag: "Purchasing",
                  tagColor: "text-cyan-400",
                },
                {
                  href: "/blog/ai-takeoff-vs-manual-takeoff-cost",
                  title: "AI Takeoff vs Manual Takeoff: True Cost Analysis",
                  tag: "Cost Analysis",
                  tagColor: "text-amber-400",
                },
                {
                  href: "/blog/production-builder-vs-custom-builder-software",
                  title: "Production Builder vs Custom Builder Software: Which Do You Need?",
                  tag: "Platform Fit",
                  tagColor: "text-violet-400",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-600 transition-all"
                >
                  <span className={`text-xs font-medium ${link.tagColor} mb-2 block`}>
                    {link.tag}
                  </span>
                  <span className="text-sm text-white group-hover:text-cyan-400 transition-colors font-medium leading-snug">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
