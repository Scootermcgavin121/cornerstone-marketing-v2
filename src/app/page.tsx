import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Cornerstone PM — Home Builder Software with AI Agents",
  description:
    "The complete platform for home builders. AI scheduling, sales pipeline, purchasing, design center, Blueprint AI material takeoffs, Foreman AI agent, MLS listing generator, and REST API. Starting at $149/mo. No implementation fees.",
  openGraph: {
    title: "Cornerstone PM — Home Builder Software with AI Agents",
    description: "Scheduling, sales, purchasing, design center, AI agents, Blueprint AI takeoffs, and REST API. Built for home builders. Starting at $149/mo.",
    url: "https://cornerstonepm.ai",
  },
  alternates: { canonical: "https://cornerstonepm.ai" },
};
import { Hero } from "@/components/Hero";
import AIHubDiagram from "@/components/AIHubDiagram";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { VideoSection } from "@/components/VideoSection";
import { AiTakeoffSection } from "@/components/AiTakeoffSection";
import { AgentsSection } from "@/components/AgentsSection";
import { ModulesGrid } from "@/components/ModulesGrid";
import { DataOwnership } from "@/components/DataOwnership";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <AIHubDiagram />
      <VideoSection />
      <ScreenshotsSection />
      <AgentsSection />
      <AiTakeoffSection />
      <ModulesGrid />
      <DataOwnership />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
