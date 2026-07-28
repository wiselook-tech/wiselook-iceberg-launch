import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import SiteNav from "@/components/landing/SiteNav";
import HeroSection from "@/components/landing/HeroSection";
import ProofStrip from "@/components/landing/ProofStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import WhyWiselook from "@/components/landing/WhyWiselook";
import SecuritySection from "@/components/landing/SecuritySection";
import TeamSection from "@/components/landing/TeamSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import SiteFooter from "@/components/landing/SiteFooter";
import StickyCta from "@/components/landing/StickyCta";

const Index = () => {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <HeroSection />
      <ProofStrip />
      <ProblemSection />
      <HowItWorks />
      <UseCases />
      <WhyWiselook />
      <SecuritySection />
      <TeamSection />
      <FaqSection />
      <ContactCta />
      <SiteFooter />
      <StickyCta />
    </div>
  );
};

export default Index;
