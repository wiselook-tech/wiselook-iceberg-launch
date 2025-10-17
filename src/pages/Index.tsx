import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Brain, Lock, Linkedin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CompetitorQuadrant from "@/components/CompetitorQuadrant";
import heroIceberg from "@/assets/landing-bg-grey.png";
import wiselookLogo from "@/assets/wiselook-logo.svg";
import wiselookIcon from "@/assets/favicon.png";
import hrSummit1 from "@/assets/hr_summit/WhatsApp Image 2025-10-06 at 11.24.31.jpeg";
import hrSummit2 from "@/assets/hr_summit/HR-584.jpg";
import hrSummit3 from "@/assets/hr_summit/1759481576972.jpeg";
import hrSummit4 from "@/assets/hr_summit/IMG_8293.JPG?url";
import jaimePhoto from "@/assets/profiles/jaime.jpg";
import rocioPhoto from "@/assets/profiles/rocio.png";
import rafaPhoto from "@/assets/profiles/rafa.png";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={wiselookIcon} alt="Wiselook" className="h-8 w-8" />
              <span className="font-heading font-bold text-xl text-foreground">Wiselook</span>
            </button>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="hero" 
                size="sm"
                className="group"
                onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
              >
                Let's talk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero pt-20">
        <div className="container mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-up">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                Discover your talent in minutes, not weeks
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Uncover hidden potential with science-backed, conversational assessments delivered natively in your system, ready to deploy and scale. Predictive soft-skills intelligence for succession planning, mobility, and workforce decisions.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group w-fit animate-pulse-glow"
                  onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
                >
                  Let's talk
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
            <div className="relative lg:block animate-reveal">
              <img 
                src={heroIceberg} 
                alt="Wiselook iceberg visualization showing visible and hidden talent potential" 
                className="w-full h-auto rounded-2xl shadow-soft hover:shadow-soft transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Proof and Awards */}
      <section className="py-20 md:py-28 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-heading font-medium text-primary uppercase tracking-wider">
                  Award Winner
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Winner, HR Innovation Summit — Startup of the Year
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognized for innovation in talent assessment and workforce intelligence
              </p>
              <a 
                href="https://www.rrhhdigital.com/secciones/eventos-rrhhdigital/781586/hr-innovation-summit-2025-mas-talento-mas-ideas-y-una-asistencia-record/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline mt-4"
              >
                Read the full announcement →
              </a>
            </div>

            {/* Award Photos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href="https://www.linkedin.com/company/wiselook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer block"
              >
                <img 
                  src={hrSummit1} 
                  alt="HR Innovation Summit 2025 - Wiselook team receiving award" 
                  className="w-full h-48 object-cover rounded-xl shadow-card group-hover:shadow-soft transition-all"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-xl flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">HR Innovation Summit 2025 - Startup of the Year</p>
                  </div>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/company/wiselook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group cursor-pointer block"
              >
                <img 
                  src={hrSummit3} 
                  alt="HR Innovation Summit 2025 - Wiselook presentation" 
                  className="w-full h-48 object-cover rounded-xl shadow-card group-hover:shadow-soft transition-all"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-xl flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Presenting Wiselook's vision</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Partners */}
            <div className="bg-background rounded-xl p-8 shadow-card">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Academic collaboration and validation</span>
                  </div>
                  <div className="h-4 w-px bg-border"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Industry expertise and implementation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Problem Content */}
              <div className="space-y-6">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                  Go beyond multiple‑choice tests
                </h2>
                <p className="text-lg text-muted-foreground">
                  Most assessments only capture the obvious. The real skills, judgment, and potential stay invisible. It's time to see the whole picture.
                </p>
              </div>

              {/* Invisible Talent Pyramid Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-80 h-80">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      {/* Clipping paths for each layer */}
                      <clipPath id="bottomClip">
                        <polygon points="50,250 350,250 200,180" />
                      </clipPath>
                      <clipPath id="middleClip">
                        <polygon points="100,180 300,180 200,120" />
                      </clipPath>
                      <clipPath id="topClip">
                        <polygon points="150,120 250,120 200,80" />
                      </clipPath>
                    </defs>
                    
                    {/* Complete pyramid shape as background */}
                    <polygon 
                      points="50,250 350,250 200,80" 
                      fill="#e5e7eb" 
                      stroke="#d1d5db" 
                      strokeWidth="2"
                    />
                    
                    {/* Bottom Layer - Line Workers */}
                    <polygon 
                      points="50,250 350,250 200,180" 
                      fill="#e5e7eb" 
                      clipPath="url(#bottomClip)"
                    />
                    <text x="200" y="220" textAnchor="middle" className="text-sm font-medium fill-gray-700">
                      Line Workers
                    </text>
                    
                    {/* Middle Layer - Best of Workforce */}
                    <polygon 
                      points="100,180 300,180 200,120" 
                      fill="#fb923c" 
                      clipPath="url(#middleClip)"
                    />
                    <text x="200" y="155" textAnchor="middle" className="text-sm font-medium fill-white">
                      Best of Workforce
                    </text>
                    
                    {/* Top Layer - Execs */}
                    <polygon 
                      points="150,120 250,120 200,80" 
                      fill="#93c5fd" 
                      clipPath="url(#topClip)"
                    />
                    <text x="200" y="105" textAnchor="middle" className="text-sm font-medium fill-white">
                      Execs
                    </text>
                    
                    {/* Labels */}
                    <text x="260" y="105" className="text-xs fill-blue-600 font-medium">
                      Human Skills get tested
                    </text>
                    <text x="310" y="155" className="text-xs fill-orange-600 font-medium">
                      Human Skills get debated
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                How we solve it
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A short, conversational flow that captures real evidence and turns it into action.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Assess Block */}
              <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Assess</h3>
                <p className="text-muted-foreground">
                  People answer brief, open‑ended prompts in their own words where they already work.
                </p>
              </div>

              {/* Analyse Block */}
              <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Analyse</h3>
                <p className="text-muted-foreground">
                  Responses are evaluated against validated rubrics to surface skills, strengths, and potential.
                </p>
              </div>

              {/* Act Block */}
              <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Act</h3>
                <p className="text-muted-foreground">
                  Managers and HR get clear, practical insights to make fair, faster talent decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Approach and Value */}
      <section className="py-20 md:py-28 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
              Approach and Value
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lego Building Blocks - New */}
              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Adapt to your culture</h3>
                <p className="text-muted-foreground">Modular building blocks that adapt to each company's model, culture, and values</p>
              </div>

              {/* Conversational Assessment - New */}
              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Conversational, inclusive assessment</h3>
                <p className="text-muted-foreground">AI-powered scale without making technology the headline, focusing on human potential</p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Frictionless scale</h3>
                <p className="text-muted-foreground">Native in Microsoft Teams drives higher completion and faster time-to-value vs. separate-platform tools</p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Predictive intelligence</h3>
                <p className="text-muted-foreground">Conversational SJT with psychometric rigor uncovers what people can actually do, not what they self-report</p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-accent/30 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Decision-ready insights</h3>
                <p className="text-muted-foreground">Behavioral levels and readiness signals for succession and mobility, not just skills tags</p>
              </div>

              <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Enterprise‑grade privacy and security</h3>
                <p className="text-muted-foreground">Built with security first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Landscape */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <CompetitorQuadrant />
        </div>
      </section>

      {/* Security and Privacy */}
      <section id="security" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Security and Privacy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Privacy‑first design with consent, RGPD controls, and Azure security
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">SOC 2 Ready</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade security standards</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">Full data protection compliance</p>
              </div>

              <div className="text-center space-y-4 p-6 rounded-xl bg-background shadow-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">Azure Security</h3>
                <p className="text-sm text-muted-foreground">Microsoft's enterprise cloud security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="teams" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Do we need Microsoft Teams?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes, Wiselook runs inside Teams.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="time" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">How long does it take to complete?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Most flows finish in under 10 minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="validated" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Is it validated?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes. Methods are developed with Universidad Autónoma de Madrid and calibrated over time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* LinkedIn Follow Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Follow us on LinkedIn
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest insights on workforce intelligence and talent assessment.
            </p>
            
            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/company/wiselook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
              >
                <Linkedin className="h-6 w-6" />
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Team Section */}
      <section id="about" className="py-20 md:py-28 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wiselook is a science-based talent intelligence platform that helps organizations recognize and develop their workforce potential through AI-powered assessments integrated directly into Microsoft Teams.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visionary leaders combining deep expertise in AI, data science, and customer experience to revolutionize workforce intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Jaime Oliver Huidobro */}
              <div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full">
                <div className="text-center space-y-6 flex flex-col h-full">
                  <img 
                    src={jaimePhoto} 
                    alt="Jaime Oliver Huidobro, PhD" 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-soft"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Jaime Oliver Huidobro, PhD
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Co-Founder, Chief Product & Science Officer
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Applied scientist and product leader with a PhD in Mathematical Engineering, specializing in AI and data-driven sustainability. Former Lead Data Scientist at Clarity AI and Assistant Professor at leading Spanish universities; recognized for integrating advanced technology with business strategy to empower organizations and unlock human potential.
                  </p>

                  <a 
                    href="https://www.linkedin.com/in/jaime-oliver-huidobro/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Rocío Fernández-Rubíes Aguirre */}
              <div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full">
                <div className="text-center space-y-6 flex flex-col h-full">
                  <img 
                    src={rocioPhoto} 
                    alt="Rocío Fernández-Rubíes Aguirre" 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-soft"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Rocío Fernández-Rubíes Aguirre
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Co-Founder, Chief Executive Officer
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Entrepreneur and executive leader in customer experience, business design, and organizational intelligence. CXO at Restaurant Brands Iberia, business connector at Klarna, and former startup founder; expert in leading strategic digital transformation and acclaimed for her innovative approaches to talent and workforce management.
                  </p>

                  <a 
                    href="https://www.linkedin.com/in/rocio-fernandez-rubies-aguirre-b8b1373b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Rafael Sarandeses */}
              <div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full">
                <div className="text-center space-y-6 flex flex-col h-full">
                  <img 
                    src={rafaPhoto} 
                    alt="Rafael Sarandeses" 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-soft"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Rafael Sarandeses
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      Co-Founder, Chairman
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    Multidisciplinary leader with over 25 years of experience in investment banking, entrepreneurship, and motorsports. CEO and Partner at Talengo, advisor and coach, former Goldman Sachs executive, and author; highly regarded for his expertise in leadership development, talent strategy, and organizational transformation across world-class institutions and ventures.
                  </p>

                  <a 
                    href="https://www.linkedin.com/in/rafaelsarandeses/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Join the Team CTA */}
            <div className="text-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                onClick={() => window.open('https://www.linkedin.com/company/wiselook/jobs/', '_blank')}
              >
                Join the Team
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
              Contact us to know more
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your talent assessment process? Let's discuss how Wiselook can help your organization.
            </p>
            <Button 
              variant="hero" 
              size="xl" 
              className="group min-h-[44px]"
              onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
            >
              Let's talk
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
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
              <img src={wiselookIcon} alt="Wiselook" className="h-10 w-10" />
              <div>
                <p className="font-heading font-bold text-xl text-foreground">Wiselook</p>
                <p className="text-sm text-muted-foreground mt-1">Strategic Workforce Intelligence</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('problem')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Contact
              </button>
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
          onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
        >
          Let's talk
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
