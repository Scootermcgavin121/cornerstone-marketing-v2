import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { VideoPlayer } from "@/components/VideoPlayer";
import {
  Calendar,
  ShoppingCart,
  TrendingUp,
  Palette,
  FileText,
  Users,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Cornerstone PM",
  description:
    "Six integrated modules for home builders: scheduling, purchasing, sales pipeline, design center, permitting, and buyer portal.",
};

const featureDetails = [
  {
    id: "construction",
    icon: Calendar,
    screenshot: "/mockups/feature-scheduling.png",
    name: "Construction Scheduling",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    description:
      "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system with auto-cascade — move one task and every downstream task adjusts automatically. No manual re-dating, no broken timelines.",
    bullets: [
      "Gantt charts with critical path highlighting",
      "3-tier task dependency system with auto-cascade",
      "17 pre-built templates (7 foundation types)",
      "4-tier cascade email notifications to subs",
      "Phase-based milestone tracking (5 phases)",
      "Weekday-only scheduling — auto-skips weekends",
      "Vendor magic links — no passwords for subs",
      "Daily & weekly digest emails to subcontractors",
      "6-step closing workflow (CO → Orientation → Punch List → Close)",
      "2-year warranty tracking post-close",
    ],
  },
  {
    id: "purchasing",
    icon: ShoppingCart,
    screenshot: "/mockups/feature-purchasing.png",
    name: "Purchasing & Budgets",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    description:
      "200+ part catalog with real pricing. Auto-generate ~97 budget lines from floorplan takeoffs when structural options are locked. Full bid management lifecycle with side-by-side vendor comparison and one-click PO generation.",
    bullets: [
      "200+ part catalog with multiple unit types",
      "3-level budget hierarchy: Scope → Task → Parts",
      "Auto-budget generation from floorplan takeoffs (~97 lines)",
      "Structural options pricing (Bonus Room, Finished Basement, and 12+ more)",
      "Full bid management: send to bid → compare → award",
      "Side-by-side vendor bid comparison with lowest-price highlighting",
      "Purchase orders: Draft → Sent → Acknowledged → Invoiced → Paid",
      "Change order approval workflow with full audit trail",
      "Active homes dashboard with financial rollup",
      "BuilderTrend migration support — switch in days",
      "Bid Import AI — upload any vendor format (Excel, PDF, scanned docs, handwritten quotes), AI extracts and maps line items",
      "Fuzzy catalog matching with confidence scores — review, approve, or reject before importing",
      "3 import modes: as a Bid, Vendor Pricing, or Takeoffs",
    ],
  },
  {
    id: "sales",
    icon: TrendingUp,
    screenshot: "/mockups/feature-sales-pipeline.png",
    video: "/video/sale-workflow.mp4",
    name: "Sales Pipeline",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    description:
      "Create a new home sale in under 60 seconds. Select community, floorplan, elevation, enter buyer info, pick structural options, apply incentives, and submit. The system auto-generates a 9-step sales checklist and full budget.",
    bullets: [
      "New home sale in under 60 seconds",
      "9-step auto-generated sales checklist",
      "Auto-budget generation when structural options are locked",
      "12+ structural options per floorplan with real-time pricing",
      "Real-time pricing matrix per floorplan × community",
      "Active promotions & incentives with expiration countdowns",
      "Branded PDF price sheets (per community or all)",
      "AI-powered MLS listing sheet — Claude Sonnet writes the description from your real data (room dimensions, upgrades, community info, lot size)",
      "Custom AI prompt input, word count slider (50-1,000), one-click PDF download",
      "Description saves to floorplan — auto-populates every home on that plan",
      "Net price calculator with stacked promotions",
      "Auto-handoff to permitting when sales tasks complete",
      "Excel/CSV export of pricing matrix",
    ],
  },
  {
    id: "design",
    icon: Palette,
    screenshot: "/mockups/feature-design-center.png",
    name: "Design Center",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-400",
    description:
      "Room-by-room selection walkthrough driven by takeoff quantities. Unlimited spec levels — Standard, Upgrade, Premium, or custom tiers. Buyers pick their finishes and see real-time upgrade pricing.",
    bullets: [
      "Room-by-room selection walkthrough",
      "Unlimited custom spec levels per community",
      "Option classes: Flooring, Cabinets, Countertops, Fixtures, and more",
      "Real-time upgrade pricing — per-unit and lump sum",
      "Designer collections — curated bundles with savings badges",
      "Automatic upgrade delta calculation above base",
      "Structural option gated rooms with material scopes",
      "Selection tracking with buyer approval workflow",
      "Polished customer-facing selection sheet PDF export",
      "Selections flow directly into purchasing budget",
    ],
  },
  {
    id: "permitting",
    icon: FileText,
    screenshot: "/mockups/feature-permitting.png",
    name: "Permitting",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times already baked in. Phase-based permit gates prevent downstream construction from starting until permits clear.",
    bullets: [
      "Pre-built permit sequences (Foundation, Framing, Final)",
      "Phase-based permit gate — construction can't start until permits clear",
      "Permitting agent dashboard with buyer info & floorplan details",
      "PA workflow with one-click template setup",
      "Permit status tracking: Applied → Approved → Expired",
      "Document storage for permit certificates",
      "Auto-handoff from sales pipeline when all tasks complete",
      "Buyer portal invite from permitting stage",
      "Toggle permit gate on/off per account",
    ],
  },
  {
    id: "portal",
    icon: Users,
    screenshot: "/mockups/feature-buyer-portal.png",
    name: "Buyer Portal",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-400",
    description:
      "Magic link access — no passwords needed. A professional portal that keeps your buyers informed and excited from contract to keys. Reduces inbound calls and builds trust that turns into referrals.",
    bullets: [
      "Magic link access — no app download, no password",
      "20-phase construction milestone carousel with photos",
      "Real job site photo uploads at each milestone",
      "One-click ZIP download of all build photos",
      "Schedule visibility — buyers see upcoming phases",
      "Document access (warranty docs, plans, permits)",
      "Selection review — approve finishes from the portal",
      "Direct messaging with PM team",
      "Construction progress percentage tracking",
      "Invite triggered automatically from permitting stage",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-6">
            PLATFORM FEATURES
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Six modules.
            <br />
            <span className="text-cyan-400">One platform.</span>
            <br />
            One price.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Every tool a home builder needs — from the first lead to the final walkthrough.
            Built specifically for residential construction. Starting at $149/mo.
          </p>
        </div>
      </section>

      {/* Feature detail sections */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {featureDetails.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={feature.name}
                id={feature.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 scroll-mt-24`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center ${feature.textColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{feature.name}</h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className={`w-4 h-4 ${feature.textColor} flex-shrink-0`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[520px] flex-shrink-0 space-y-4">
                  <div className="relative w-full rounded-xl border border-slate-700/50 shadow-xl overflow-hidden bg-slate-900">
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.name} screenshot`}
                      width={1780}
                      height={1321}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>
                  {(feature as {video?: string}).video && (
                    <VideoPlayer
                      src={(feature as {video?: string}).video!}
                      label="Workflow Demo"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
