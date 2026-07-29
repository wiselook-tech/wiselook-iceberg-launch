import { useHashScroll } from "@/hooks/use-hash-scroll";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import SiteNav from "@/components/landing/SiteNav";
import HeroSection from "@/components/landing/HeroSection";
import AwardsSection from "@/components/landing/AwardsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import WhyWiselook from "@/components/landing/WhyWiselook";
import SecuritySection from "@/components/landing/SecuritySection";
import TeamSection from "@/components/landing/TeamSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import RecognizedBy from "@/components/landing/RecognizedBy";
import SiteFooter from "@/components/landing/SiteFooter";
import StickyCta from "@/components/landing/StickyCta";

const Index = () => {
  useRevealOnScroll();
  useHashScroll();

  return (
    <div className="min-h-screen bg-background font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:text-foreground focus:shadow-soft focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <AwardsSection />
        <ProblemSection />
        <HowItWorks />
        <UseCases />
        <WhyWiselook />
        <SecuritySection />
        <TeamSection />
        <FaqSection />
        <ContactCta />
        <RecognizedBy />
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
};

export default Index;
