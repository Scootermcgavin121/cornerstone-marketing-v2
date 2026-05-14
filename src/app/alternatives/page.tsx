import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Software Alternatives â€” Compare to Cornerstone PMâ„¢",
  description:
    "See how Cornerstone PMâ„¢ compares to 17 construction software platforms â€” from NEWSTAR and Buildertrend to Procore, JobTread, Fieldwire, and more. Built specifically for production home builders.",
  alternates: { canonical: "https://www.cornerstonepm.ai/alternatives" },
};

const groups = [
  {
    label: "Production Builder Platforms",
    color: "text-cyan-400",
    competitors: [
      { name: "NEWSTAR", slug: "newstar", note: "Enterprise production builder software. $25â€“100k implementation. We're built for the same workflows at a fraction of the cost." },
      { name: "BuildPro", slug: "buildpro", note: "Windows-based builder platform with high implementation fees. We're cloud-native and self-serve." },
      { name: "Buildertrend", slug: "buildertrend", note: "Most-used builder software â€” but not built for production home builders. We are." },
      { name: "CoConstruct", slug: "coconstruct", note: "Now owned by Buildertrend. Frustrated users are switching to purpose-built alternatives." },
    ],
  },
  {
    label: "GC & Project Management",
    color: "text-emerald-400",
    competitors: [
      { name: "JobTread", slug: "jobtread", note: "Great for GCs and remodelers. No lot/community management, no floorplan pricing engine. Different tool for a different market." },
      { name: "Procore", slug: "procore", note: "Enterprise construction OS for large commercial GCs. Overkill for residential builders â€” and priced accordingly." },
      { name: "Buildxact", slug: "buildxact", note: "Estimating-first platform. Misses the full PM lifecycle that production builders need." },
      { name: "Contractor Foreman", slug: "contractor-foreman", note: "General contractor platform. Not designed for home builder communities and floorplan workflows." },
    ],
  },
  {
    label: "Field & Daily Log Tools",
    color: "text-amber-400",
    competitors: [
      { name: "Fieldwire", slug: "fieldwire", note: "Field management for commercial jobsites. No sales pipeline, no design center, no buyer portal." },
      { name: "Raken", slug: "raken", note: "Daily reporting and field logs â€” one piece of the puzzle, not the full platform." },
    ],
  },
  {
    label: "Service Business Tools",
    note: "Different market â€” honest comparisons inside",
    color: "text-violet-400",
    competitors: [
      { name: "Jobber", slug: "jobber", note: "Home services scheduling. Not built for production builders â€” honest comparison inside." },
      { name: "Housecall Pro", slug: "housecall-pro", note: "HVAC, plumbing, and home services. Not a construction PM platform." },
      { name: "JobNimbus", slug: "jobnimbus", note: "Roofing and restoration focus. Very different workflow from production building." },
      { name: "Workiz", slug: "workiz", note: "Field service dispatch. Not built for production home builders." },
      { name: "Knowify", slug: "knowify", note: "Subcontractor financial management. Different business model than home builder PM." },
      { name: "Houzz Pro", slug: "houzz", note: "Designer and remodeler marketplace. Very different from production builder software." },
    ],
  },
  {
    label: "Specialty",
    color: "text-rose-400",
    competitors: [
      { name: "Projul", slug: "projul", note: "Remodeling contractor software. Not designed for production home builder communities and workflows." },
    ],
  },
];

const differentiators = [
  { title: "100+ AI skills", desc: "Foreman AI reads and writes your data â€” bids, options, scheduling, purchasing. Not a chatbot â€” an agent.", color: "text-violet-400" },
  { title: "30+ Named Webhook Events (Growing)", desc: "Named event catalog with typed payloads, HMAC signatures, delivery logs, and auto-retry. New events ship as the platform grows. Deepest in the industry.", color: "text-cyan-400" },
  { title: "$0 Migration", desc: "AI Migration Wizard imports from Buildertrend, JobTread, CoConstruct, or any CSV/Excel in hours. Competitors charge $5kâ€“$20k.", color: "text-emerald-400" },
  { title: "Unlimited Users", desc: "Flat monthly fee. No per-seat pricing. $149/mo for your entire team.", color: "text-amber-400" },
  { title: "Hours, Not Months", desc: "Self-serve setup. No 6-month implementation engagement. No consultants required.", color: "text-rose-400" },
  { title: "Triple QR Ecosystem", desc: "Vendor check-in, PM site visits, and model home lead capture â€” three audiences, one platform. Industry-first.", color: "text-cyan-400" },
];

// JSON-LD ItemList structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Cornerstone PMâ„¢ Alternative Pages",
  "description": "Comparison pages showing how Cornerstone PMâ„¢ compares to 17 construction software platforms",
  "url": "https://www.cornerstonepm.ai/alternatives",
  "numberOfItems": 17,
  "itemListElement": groups.flatMap((g) =>
    g.competitors.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `Cornerstone PMâ„¢ vs ${c.name}`,
      "url": `https://www.cornerstonepm.ai/${c.slug}-alternative`,
    }))
  ),
};

export default function AlternativesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-6 uppercase tracking-widest">
            17 Comparisons
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Construction software alternatives<br />
            <span className="text-cyan-400">compared honestly.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Cornerstone PMâ„¢ is the home builder platform. See how we stack up against every major construction software â€” and where we&apos;re genuinely different from service-business tools.
          </p>
        </div>
      </section>

      {/* Grouped competitor grids */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-5">
                <div className={`text-xs font-bold uppercase tracking-widest ${group.color}`}>{group.label}</div>
                {group.note && <div className="text-xs text-slate-600">{group.note}</div>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.competitors.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}-alternative`}
                    className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col"
                  >
                    <div className={`text-base font-bold text-white group-hover:${group.color.replace("text-", "text-")} transition-colors mb-2`}>
                      {c.name}
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{c.note}</p>
                    <div className={`${group.color} text-xs mt-3 font-semibold`}>Compare â†’</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why builders switch */}
      <section className="py-16 px-4 border-t border-slate-800/60 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why builders switch to Cornerstone PMâ„¢</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We didn&apos;t adapt a generic tool for home builders. We built from scratch, for home builders specifically.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map((d) => (
              <div key={d.title} className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
                <div className={`text-base font-bold ${d.color} mb-2 flex items-center gap-2`}>
                  <Check className="w-4 h-4 flex-shrink-0" />
                  {d.title}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/compare" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
              See the full feature comparison matrix â†’
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
