"use client";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Calendar,
  ShoppingCart,
  TrendingUp,
  Palette,
  FileText,
  Users,
} from "lucide-react";

function ScreenshotHeader({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-48 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

const features = [
  {
    title: "Construction Scheduling",
    description:
      "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system with auto-cascade — move one task and everything downstream adjusts automatically. 17 pre-built templates including 7 foundation types. Cascade email notifications to subs in 4 tiers.",
    icon: <Calendar className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-scheduling.png" alt="Construction Gantt chart scheduling view" />,
    className: "md:col-span-2",
  },
  {
    title: "Purchasing & Budgets",
    description:
      "200+ part catalog with real pricing. Auto-generate ~97 budget lines from floorplan takeoffs when structural options are locked. Full PO lifecycle: Draft → Sent → Acknowledged → Invoiced → Paid. Bid management with side-by-side vendor comparison.",
    icon: <ShoppingCart className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-purchasing.png" alt="Purchasing and budget management dashboard" />,
  },
  {
    title: "Sales Pipeline",
    description:
      "New home sale in under 60 seconds — select community, floorplan, elevation, buyer info, structural options, and submit. Auto-generates a 9-step sales checklist and a full budget from takeoffs. Real-time pricing matrix with promotions and branded PDF price sheets.",
    icon: <TrendingUp className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-sales-pipeline.png" alt="Sales pipeline kanban board" />,
  },
  {
    title: "Design Center",
    description:
      "Room-by-room selection walkthrough driven by takeoff quantities. Unlimited spec levels — Standard, Upgrade, Premium, or custom tiers. Buyers pick flooring, cabinets, countertops, and fixtures with real-time upgrade pricing. Designer collections with curated bundles.",
    icon: <Palette className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-design-center.png" alt="Design center fixture and finish selections" />,
  },
  {
    title: "Permitting",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times. Phase-based locking prevents downstream construction from starting until permits clear. PA workflow, permit gate toggle, and buyer portal invite. Track every permit status from one dashboard.",
    icon: <FileText className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-permitting.png" alt="Permitting pipeline dashboard" />,
  },
  {
    title: "Buyer Portal",
    description:
      "Magic link access — no passwords needed. 20-phase construction milestone carousel with real job site photos. Schedule visibility, document access, selection review, and direct messaging with PMs. Buyers stay informed and excited from contract to keys.",
    icon: <Users className="w-5 h-5" />,
    header: <ScreenshotHeader src="/mockups/feature-buyer-portal.png" alt="Buyer portal building journey milestone view" />,
    className: "md:col-span-2",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(6,182,212,0.04),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-4">
            PLATFORM FEATURES
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Everything a builder needs.
            <br />
            <span className="text-cyan-400">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Six integrated modules — from first lead to final walkthrough.
            Built for home builders who got tired of paying $499/mo for software that does too much.
          </p>
        </div>

        <BentoGrid className="gap-4">
          {features.map((feature) => (
            <BentoGridItem
              key={feature.title}
              title={feature.title}
              description={feature.description}
              header={feature.header}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
