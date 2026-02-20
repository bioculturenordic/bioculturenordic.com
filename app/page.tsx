import HeroSection from "@/components/hero/HeroSection";
import ScienceSection from "@/components/science/ScienceSection";
import TrustSection from "@/components/trust/TrustSection";
import ContactSection from "@/components/contact/ContactSection";
import SolutionSection from "@/components/product/SolutionSection";
import OnSiteFermentationSection from "@/components/product/OnSiteFermentationSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-functional-white">
      <HeroSection />
      <SolutionSection />
      <ScienceSection />
      <OnSiteFermentationSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}
