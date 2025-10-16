import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Brain, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroIceberg from "@/assets/landing-bg-grey.png";
import wiselookLogo from "@/assets/wiselook-logo.svg";
import wiselookIcon from "@/assets/favicon.png";
import hrSummit1 from "@/assets/hr_summit/WhatsApp Image 2025-10-06 at 11.24.31.jpeg";
import hrSummit2 from "@/assets/hr_summit/HR-584.jpg";
import hrSummit3 from "@/assets/hr_summit/1759481576972.jpeg";
import hrSummit4 from "@/assets/hr_summit/IMG_8293.JPG?url";

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
            <div className="flex items-center gap-3">
              <img src={wiselookIcon} alt="Wiselook" className="h-8 w-8" />
              <span className="font-heading font-bold text-xl text-foreground">Wiselook</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('product')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
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
                About
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
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
                className="group"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="hero" 
                size="sm"
                className="group"
                onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
              >
                See a 5-minute demo
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
                Uncover hidden potential with science-backed, conversational assessments delivered natively in Microsoft Teams. Predictive soft-skills intelligence for succession planning, mobility, and workforce decisions.
              </p>
              <div className="pt-4 flex flex-col gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group w-fit animate-pulse-glow"
                  onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
                >
                  See a 5-minute demo
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

      {/* Social Proof Strip */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">Backed by UAM psychometrics</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">In partnership with Talengo</span>
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
            </div>

            {/* Award Photos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative group cursor-pointer">
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
              </div>
              <div className="relative group cursor-pointer">
                <img 
                  src={hrSummit2} 
                  alt="HR Innovation Summit 2025 - Award ceremony" 
                  className="w-full h-48 object-cover rounded-xl shadow-card group-hover:shadow-soft transition-all"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-xl flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Award ceremony recognition</p>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
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
              </div>
              <div className="relative group cursor-pointer">
                <img 
                  src={hrSummit4} 
                  alt="HR Innovation Summit 2025 - Team celebration" 
                  className="w-full h-48 object-cover rounded-xl shadow-card group-hover:shadow-soft transition-all"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 rounded-xl flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Celebrating with the team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-background rounded-xl p-8 shadow-card">
              <div className="text-center space-y-6">
                <h3 className="font-heading font-semibold text-xl text-foreground">Trusted Partners</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground">Talengo</p>
                    <p className="text-sm text-muted-foreground">30 years of leadership assessment expertise</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading font-semibold text-lg text-foreground">Universidad Autónoma de Madrid</p>
                    <p className="text-sm text-muted-foreground">Academic collaboration and validation</p>
                  </div>
                </div>
                <a 
                  href="https://www.rrhhdigital.com/secciones/eventos-rrhhdigital/781586/hr-innovation-summit-2025-mas-talento-mas-ideas-y-una-asistencia-record/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
                >
                  Read the full announcement →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Problem → Practical Solution
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
            <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <svg className="h-6 w-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-foreground">The Problem</h3>
                  <p className="text-lg text-muted-foreground">
                    Your best talent is invisible. Traditional assessments are slow, self-reported, and disconnected from daily work—missing the people ready to lead.
                </p>
              </div>
            </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-2xl text-foreground">Our Solution</h3>
                  <p className="text-lg text-muted-foreground">
                    Wiselook reveals behavioral potential in real-time with science-backed, conversational "bloques" delivered right in Teams. Clear succession signals and mobility insights, where work already happens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Teams */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
              How it works in Teams
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  1
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">Secure sign‑in with Entra ID</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  2
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">Employees complete brief "bloques" in Teams</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  3
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">AI + psychometrics score competencies</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  4
                </div>
                <div className="pt-2">
                  <p className="text-lg text-foreground font-medium">HR and managers get actionable insights and recommendations</p>
                </div>
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

      {/* Science and Partners */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <p className="text-sm font-heading font-medium text-primary uppercase tracking-wider">
                Science & Partners
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Built with validated methods
              </h2>
            </div>

            <div className="bg-gradient-card rounded-xl p-8 md:p-10 shadow-card max-w-3xl mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Built with validated methods and continuous calibration with Universidad Autónoma de Madrid
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Delivered with Talengo, bringing practical talent expertise to enterprise rollouts
              </p>
            </div>
          </div>
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

      {/* Product Section */}
      <section id="product" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Product
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>Inside Microsoft Teams for high adoption</p>
              <p>Adaptive "bloques" to measure competencies with low friction</p>
              <p>Insights that guide development and decisions</p>
              <p>Emphasis on potential and growth, beyond résumé history</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us to learn more about our enterprise pricing and implementation options.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => window.open('https://calendar.app.google/NvJxzr9aQzB77DeHA', '_blank')}
            >
              Get your pilot plan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              About
            </h2>
            <p className="text-lg text-muted-foreground">
              Wiselook is a science-based talent intelligence platform that helps organizations recognize and develop their workforce potential through AI-powered assessments integrated directly into Microsoft Teams.
            </p>
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
              Book your demo now
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
                onClick={() => scrollToSection('product')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Pricing
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
                About
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
          See a 5-minute demo
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
