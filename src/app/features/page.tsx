import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
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
    icon: Calendar,
    name: "Construction Scheduling",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    description:
      "Visual scheduling built for residential construction. Assign subs, track milestones, and spot conflicts before they cost you money.",
    bullets: [
      "Gantt-style project timeline",
      "Subcontractor assignment by task",
      "Automated conflict detection",
      "Daily schedule notifications to subs",
      "Phase-based milestone tracking",
      "Weather delay documentation",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Purchasing & Budgets",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    description:
      "Track every purchase order, invoice, and budget variance in real time. Know your margin on every home before you close.",
    bullets: [
      "Purchase order creation & tracking",
      "Budget vs actual reporting",
      "Vendor invoice management",
      "Cost code tracking",
      "Margin analysis by home",
      "Approval workflows for POs",
    ],
  },
  {
    icon: TrendingUp,
    name: "Sales Pipeline",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    description:
      "Simple CRM built for builders. Track every lead, proposal, and signed buyer — without enterprise complexity.",
    bullets: [
      "Kanban pipeline view",
      "Lead capture & assignment",
      "Proposal generation",
      "Contract status tracking",
      "Follow-up reminders",
      "Sales performance reporting",
    ],
  },
  {
    icon: Palette,
    name: "Design Center",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-400",
    description:
      "Capture buyer selections, manage upgrade pricing, and flow everything directly into your purchasing budget.",
    bullets: [
      "Product selection catalog",
      "Upgrade pricing & approval",
      "Buyer confirmation workflows",
      "Integration with purchasing",
      "Design appointment scheduling",
      "Selection sheet generation",
    ],
  },
  {
    icon: FileText,
    name: "Permitting",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    description:
      "Track permit applications, approval status, and inspection schedules all in one place.",
    bullets: [
      "Permit application tracking",
      "Status & expiry monitoring",
      "Inspection scheduling",
      "Document storage",
      "Municipality contact notes",
      "Permit renewal alerts",
    ],
  },
  {
    icon: Users,
    name: "Buyer Portal",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-400",
    description:
      "Give your buyers a professional window into their home's progress. Reduce calls, build trust, close referrals.",
    bullets: [
      "Real-time construction progress",
      "Photo documentation uploads",
      "Selection approval workflows",
      "Document sharing (warranty, plans)",
      "Messaging with builder team",
      "Move-in checklist",
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
            No add-ons nickel-and-diming you every month.
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
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-slate-700 transition-all duration-300`}
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
                <div className={`w-full lg:w-80 h-48 rounded-xl bg-gradient-to-br ${feature.color} opacity-[0.08] border ${feature.borderColor}`} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Bento grid overview */}
      <div className="mt-8">
        <FeaturesSection />
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
