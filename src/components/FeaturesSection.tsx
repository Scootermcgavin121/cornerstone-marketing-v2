"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Calendar,
  ShoppingCart,
  TrendingUp,
  Palette,
  FileText,
  Users,
  X,
  ZoomIn,
} from "lucide-react";

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
      >
        <X className="w-8 h-8" />
      </button>
      <div
        className="relative max-w-6xl max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>,
    document.body
  );
}

// ── Screenshot card header ────────────────────────────────────────────────────
// aspect: pass the image's natural "width/height" ratio as a fraction string
// e.g. "16/9", "4/3", "1/1" — the container height adapts automatically
function ScreenshotHeader({
  src,
  alt,
  aspect = "4/3",
  coverMode = false,
}: {
  src: string;
  alt: string;
  aspect?: string;
  coverMode?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="w-full rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 relative group cursor-zoom-in"
        style={{ aspectRatio: aspect }}
        onClick={() => setOpen(true)}
        data-cover={coverMode}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`${coverMode ? 'object-cover' : 'object-contain'} transition-transform duration-300 group-hover:scale-[1.02]`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Zoom hint */}
        <div className="absolute bottom-2 right-2 bg-black/60 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-4 h-4 text-white" />
        </div>
      </div>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Feature data ──────────────────────────────────────────────────────────────
const features = [
  {
    title: "Construction Scheduling",
    description:
      "Task-level scheduling with phases, scopes, assigned vendors, and status tracking. 3-tier dependency system with auto-cascade — move one task and everything downstream adjusts. 17 pre-built templates including 7 foundation types. Cascade email notifications to subs in 4 tiers.",
    icon: <Calendar className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-scheduling.png"
        alt="Construction task scheduling view"
        aspect="16/15"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Purchasing & Budgets",
    description:
      "200+ part catalog with real pricing. Auto-generate ~97 budget lines from floorplan takeoffs when structural options are locked.",
    icon: <ShoppingCart className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-purchasing.png"
        alt="Purchasing and budget management dashboard"
        aspect="3/4"
        coverMode={true}
      />
    ),
  },
  {
    title: "Sales Pipeline",
    description:
      "Track every home from contract to construction on a real-time kanban board. Color-coded by stage — Sales, Permitting, Design, Construction. Buyer vs. spec badges, progress bars, and status at a glance.",
    icon: <TrendingUp className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-sales-pipeline.png"
        alt="Sales pipeline kanban board"
        aspect="16/9"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: "Design Center",
    description:
      "Room-by-room selection walkthrough driven by takeoff quantities. Unlimited spec levels — Standard, Upgrade, Premium, or custom tiers. Buyers pick flooring, cabinets, countertops, and fixtures with real-time upgrade pricing.",
    icon: <Palette className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-design-center.png"
        alt="Design center fixture and finish selections"
        aspect="63/100"
      />
    ),
  },
  {
    title: "Permitting",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times. Phase-based locking prevents downstream construction from starting until permits clear. Track every permit status from one dashboard.",
    icon: <FileText className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-permitting.png"
        alt="Permitting pipeline dashboard"
        aspect="1/1"
      />
    ),
  },
  {
    title: "Buyer Portal",
    description:
      "Magic link access — no passwords needed. 20-phase construction milestone carousel with real job site photos. Schedule visibility, document access, selection review, and direct messaging with PMs.",
    icon: <Users className="w-5 h-5" />,
    header: (
      <ScreenshotHeader
        src="/mockups/feature-buyer-portal.png"
        alt="Buyer portal building journey milestone view"
        aspect="4/3"
      />
    ),
    className: "md:col-span-2",
  },
];

// ── Section ───────────────────────────────────────────────────────────────────
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
            Built for home builders who got tired of paying $499/mo for software
            that does too much.
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
