import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScreenshotsSection } from "@/components/ScreenshotsSection";
import { VideoSection } from "@/components/VideoSection";
import { AiTakeoffSection } from "@/components/AiTakeoffSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <ScreenshotsSection />
      <AiTakeoffSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
