import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
