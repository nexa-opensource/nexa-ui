import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { InteractivePreview } from "@/components/sections/InteractivePreview";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative">
      {/* Global Background Grid */}
      <div className="fixed inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] -z-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent to-background -z-10" />
      
      <Navbar />
      <main>
        <Hero />
        <LogoTicker />
        <BentoFeatures />
        <InteractivePreview />
      </main>
      <Footer />
    </div>
  );
}
