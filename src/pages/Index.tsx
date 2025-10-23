"user server";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CompetitorQuadrant from "@/useCases/index/CompetitorQuadrant";
import { MainNav } from "@/components/MainNav";
import { HeroSection } from "@/useCases/index/HeroSection";
import { AwardsSection } from "@/useCases/index/AwardsSection";
import { ProblemSection } from "@/useCases/index/ProblemSection";
import { SolutionSection } from "@/useCases/index/SolutionSection";
import { ApproachSection } from "@/useCases/index/ApproachSection";
import { SecuritySection } from "@/useCases/index/SecuritySection";
import { AboutSection } from "@/useCases/index/AboutSection";
import { FAQSection } from "@/useCases/index/FAQSection";
import { ContactSection } from "@/useCases/index/ContactSection";
import { CompliantSection } from "@/useCases/index/CompliantSection";
import { MainFooter } from "@/components/MainFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <MainNav />

      <HeroSection />
      <AwardsSection />
      <ProblemSection />
      <SolutionSection />
      <ApproachSection />

      <CompetitorQuadrant />

      <SecuritySection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <CompliantSection />

      <MainFooter />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-soft z-50">
        <Button
          variant="hero"
          size="lg"
          className="w-full group min-h-[44px]"
          onClick={() => window.open('https://calendar.app.google/ixXmzeviCe26CbWP9', '_blank')}
        >
          Let's talk
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
