import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";

export default function Home() {
  return (
    <div className="relative">

      {/* Main content */}
      <div className="relative z-10">

        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactFormSection />
      </div>
    </div>
  );
}
