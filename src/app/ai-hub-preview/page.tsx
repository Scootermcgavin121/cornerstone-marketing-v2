import type { Metadata } from "next";
import AIHubDiagram from "@/components/AIHubDiagram";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Hub Preview (Internal) | Cornerstone PM™",
  description: "Internal preview of the AI hub-and-spoke hero concept.",
  robots: { index: false, follow: false },
};

export default function AiHubPreviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <AIHubDiagram />
      <div className="max-w-3xl mx-auto px-6 pb-24 text-white/50 text-sm">
        <hr className="border-white/10 mb-6" />
        <p className="mb-2 text-white/70 font-semibold">Internal preview notes</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Route is noindex/nofollow — won't show up in Google.</li>
          <li>5 cards, all real Cornerstone AI agents (Blueprint, Foreman, Bid Import, MLS Generator, Support).</li>
          <li>API pill below teases extensibility without putting non-shipped features in the diagram.</li>
          <li>Mobile: cards stack, hub appears at top.</li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
