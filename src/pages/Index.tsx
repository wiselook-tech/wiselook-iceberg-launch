import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroIceberg from "@/assets/landing-bg-grey.png";
import wiselookLogo from "@/assets/wiselook-icon.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-up">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Unlock human potential at scale
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Scientific, workflow-native talent intelligence that shows what people can actually do
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group w-fit"
                  onClick={() => window.location.href = '#demo'}
                >
                  Book a strategic demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <a 
                  href="#how-it-works" 
                  className="hidden md:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline w-fit"
                >
                  Jump to how it works
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:block animate-float">
              <img 
                src={heroIceberg} 
                alt="Wiselook iceberg visualization showing visible and hidden talent potential" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <a 
              href="#how-it-works"
              className="space-y-4 p-8 rounded-xl bg-card shadow-card hover:shadow-soft transition-all cursor-pointer group min-h-[44px] min-w-[44px]"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Better prediction</h3>
              <p className="text-muted-foreground">
                Conversational SJT validated with UAM. Surfaces job-relevant behaviors.
              </p>
            </a>

            <a 
              href="#how-it-works"
              className="space-y-4 p-8 rounded-xl bg-card shadow-card hover:shadow-soft transition-all cursor-pointer group min-h-[44px] min-w-[44px]"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Zero friction</h3>
              <p className="text-muted-foreground">
                Natively embedded in Microsoft Teams. High engagement, instant rollout.
              </p>
            </a>

            <a 
              href="#how-it-works"
              className="space-y-4 p-8 rounded-xl bg-card shadow-card hover:shadow-soft transition-all cursor-pointer group min-h-[44px] min-w-[44px]"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/30 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">Actionable intelligence</h3>
              <p className="text-muted-foreground">
                Dynamic talent maps for AI-readiness, growth, and restructuring.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-heading font-medium text-primary uppercase tracking-wider">
                Trusted Partner
              </p>
              <div className="inline-block px-8 py-4 bg-background rounded-xl shadow-card">
                <p className="font-heading font-semibold text-lg text-foreground">
                  Talengo — 30 years of leadership assessment expertise
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 md:p-10 shadow-card max-w-2xl mx-auto">
              <p className="text-muted-foreground italic text-lg leading-relaxed">
                "Strategic workforce intelligence that scientifically maps real capabilities through conversational assessments—delivering predictive insight, zero-friction rollout, and actionable talent maps."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  1
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">Deploy in Microsoft Teams</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  2
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">Assess via conversational scenarios</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  3
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">Act on dynamic talent maps and recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="different" className="bg-background rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">How is this different?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Conversational, validated, workflow-native, and predictive—embedded directly in Microsoft Teams for instant, science-backed talent insights.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="run" className="bg-background rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Where does it run?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Natively in Microsoft Teams with Azure infrastructure, ensuring seamless integration with your existing workflow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="secure" className="bg-background rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Is it secure?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  SOC 2 ready, GDPR compliant, with enterprise-grade security built in from the ground up.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-20 md:py-32 bg-gradient-hero scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
              See your workforce clearly
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group min-h-[44px]">
                Book a strategic demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground min-h-[44px]"
                asChild
              >
                <a href="/product-overview.pdf" download>
                  Download product overview
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Badge */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>SOC 2 ready</span>
            </div>
            <span className="text-border">•</span>
            <span>GDPR compliant</span>
            <span className="text-border">•</span>
            <span>Enterprise-grade security</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left flex items-center gap-3">
              <img src={wiselookLogo} alt="Wiselook" className="h-10 w-10" />
              <div>
                <p className="font-heading font-bold text-xl text-foreground">Wiselook</p>
                <p className="text-sm text-muted-foreground mt-1">Strategic Workforce Intelligence</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Privacy Policy</a>
              <a href="#terms" className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Terms of Service</a>
              <a href="#contact" className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Wiselook. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-soft z-50">
        <Button 
          variant="hero" 
          size="lg" 
          className="w-full group min-h-[44px]"
          onClick={() => window.location.href = '#demo'}
        >
          Book a strategic demo
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
