import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import SiteNav from "@/components/landing/SiteNav";
import HeroSection from "@/components/landing/HeroSection";
import AwardsSection from "@/components/landing/AwardsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyWiselook from "@/components/landing/WhyWiselook";
import WhyUsSection from "@/components/landing/WhyUsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import TeamSection from "@/components/landing/TeamSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactCta from "@/components/landing/ContactCta";
import TrustStrip from "@/components/landing/TrustStrip";
import SiteFooter from "@/components/landing/SiteFooter";
import StickyCta from "@/components/landing/StickyCta";

const Index = () => {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <HeroSection />
      <AwardsSection />
      <ProblemSection />
      <HowItWorks />
      <WhyWiselook />
      <WhyUsSection />
      <SecuritySection />
      <TeamSection />
      <FaqSection />
      <ContactCta />
      <TrustStrip />
      <SiteFooter />
      <StickyCta />
    </div>
  );
};

export default Index;
