import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { InteractiveFloorplan } from "@/components/InteractiveFloorplan";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Interactive Floorplan Demo | Cornerstone PM",
  description: "Hidden prototype for interactive floorplan option toggles and brochure preview.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InteractiveFloorplanPage() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <div className="pt-20">
        <InteractiveFloorplan />
      </div>
      <Footer />
    </main>
  );
}
