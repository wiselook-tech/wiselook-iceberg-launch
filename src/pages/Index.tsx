import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Brain, Lock, Linkedin, Globe, Database, Search, Eye, UserCheck, FileText, ShieldCheck, Key } from "lucide-react";
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
import soc2Logo from "@/assets/soc2-logo.svg";
import gdprLogo from "@/assets/gdpr-logo.svg";
import iso27001Logo from "@/assets/iso27001-logo.svg";
import euAiActLogo from "@/assets/eu-ai-act-logo.svg";

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
                aria-label="Learn about our talent assessment solutions"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View our security and compliance features"
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Meet our team and learn about Wiselook"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Get in touch with our team"
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
                Map your talent. <p></p>
                In minutes. 
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Uncover the hidden potential in your organization with science-backed, conversational assessments. 
                Our AI is scales natively in your system, unlocking soft-skills intelligence for succession planning, mobility, and workforce decisions.
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
                  loading="lazy"
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
                  loading="lazy"
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
                    <span className="text-sm font-medium text-foreground">Built by scientists</span>
                  </div>
                  <div className="h-4 w-px bg-border"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Scaled by industry experts</span>
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
                  Go beyond multiple‑choice tests and expensive executive assessments
                </h2>
                <p className="text-lg text-muted-foreground">
                  We unlock real measurement of talent across your organization. It's time to see the whole picture.
                </p>
              </div>

              {/* Interactive Pyramid Card Stack */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-end justify-center group/pyramid">
                  {/* Bottom Card - Line Workers */}
                  <div 
                    className="absolute bottom-0 w-80 h-24 sm:w-96 sm:h-28 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 cursor-pointer animate-slide-up group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group-hover/pyramid:scale-105 group-hover/pyramid:shadow-xl group-hover/pyramid:-translate-y-2"
                    role="button"
                    tabIndex={0}
                    aria-label="Line Workers - Foundation of the workforce where potential begins"
                  >
                    <div className="p-3 sm:p-4 h-full flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-1 group-hover:text-gray-900 transition-colors">Line Workers</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm sm:text-base text-gray-600 text-center group-hover:text-gray-700 transition-colors">Foundation of the workforce</p>
                        <p className="text-xs sm:text-sm text-gray-500 text-center mt-1">Where potential begins</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle Card - Best of Workforce */}
                  <div 
                    className="absolute bottom-16 sm:bottom-20 w-56 h-20 sm:w-64 sm:h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 cursor-pointer animate-slide-in-left group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 group-hover/pyramid:scale-105 group-hover/pyramid:shadow-xl group-hover/pyramid:-translate-y-2" 
                    style={{ animationDelay: '300ms' }}
                    role="button"
                    tabIndex={0}
                    aria-label="Best of Workforce - Rising talent where human skills get debated"
                  >
                    <div className="p-2 sm:p-3 h-full flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-semibold text-white text-center mb-1 group-hover:text-orange-100 transition-colors">Best of Workforce</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-sm text-orange-100 text-center group-hover:text-orange-50 transition-colors">Human Skills get debated</p>
                        <p className="text-xs text-orange-200 text-center mt-1">Rising talent</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Card - Execs */}
                  <div 
                    className="absolute bottom-32 sm:bottom-36 w-32 h-16 sm:w-36 sm:h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-4 cursor-pointer animate-slide-down group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group-hover/pyramid:scale-105 group-hover/pyramid:shadow-xl group-hover/pyramid:-translate-y-2" 
                    style={{ animationDelay: '600ms' }}
                    role="button"
                    tabIndex={0}
                    aria-label="Executives - Leadership level where human skills get tested"
                  >
                    <div className="p-2 sm:p-3 h-full flex flex-col justify-center">
                      <h3 className="text-sm sm:text-base font-semibold text-white text-center mb-1 group-hover:text-blue-100 transition-colors">Execs</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-xs sm:text-sm text-blue-100 text-center group-hover:text-blue-50 transition-colors">Human Skills get tested</p>
                        <p className="text-xs text-blue-200 text-center mt-1">Leadership level</p>
                      </div>
                    </div>
                  </div>
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
                How? 
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A short, AI-native conversational flow that captures real evidence and turns it into action.
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
                  Teams go through open‑ended conversations or Situaltional Judement Tests (SJT). At scale.
                </p>
              </div>

              {/* Analyse Block */}
              <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Analyse</h3>
                <p className="text-muted-foreground">
                  Behavioural responses are evaluated against scientifically validated rubrics to map competencies.
                </p>
              </div>

              {/* Act Block */}
              <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">Act</h3>
                <p className="text-muted-foreground">
                  Individuals and managers get actionalble recommendations to make fair and faster talent decisions.
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
                <p className="text-muted-foreground">Delivered natively in your messaging system for higher completion and faster time-to-value vs.</p>
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

      {/* Security and Privacy */}
      <section id="security" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Enterprise‑grade security and privacy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with security and privacy by design, ensuring your data is protected at every step
              </p>
              
              {/* Certification Logos */}
              <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
                <img src={soc2Logo} alt="SOC 2 Type II" className="h-20 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={gdprLogo} alt="GDPR Compliant" className="h-20 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={iso27001Logo} alt="ISO 27001 Certified" className="h-20 opacity-60 hover:opacity-100 transition-opacity" />
                <img src={euAiActLogo} alt="EU AI Act Compliant" className="h-20 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Three-Column Security Features */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Column 1: Data Protection & Privacy */}
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                  Data Protection & Privacy
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Key className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Privacy by Design</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Data minimization</strong>, user consent management, transparency, and compliance with <strong>GDPR</strong> and other regional privacy laws.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Zero Training Guarantee</h4>
                        <p className="text-sm text-muted-foreground">
                          Your data is <strong>never used to train AI models</strong>—contractually enforced and technically protected on every step of the process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Localized AI Inference</h4>
                        <p className="text-sm text-muted-foreground">
                          LLM inference occurs within the <strong>EU for EU clients</strong> and follows data sovereignty compliance for clients based in the Americas.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Column 2: Infrastructure & Security */}
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                  Infrastructure & Security
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Robust Infrastructure Security</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Environment isolation</strong>, <strong>end-to-end encryption</strong> at rest and in transit, continuous vulnerability monitoring, and proactive threat detection.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Search className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Strict Access & Audit Controls</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Role-based access</strong>, behavioral analysis, and a comprehensive, immutable audit trail capturing all user actions and AI interactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Prompt Security</h4>
                        <p className="text-sm text-muted-foreground">
                          Defenses against <strong>prompt injection</strong>, prompt tampering, and output filtering prevent model misuse or leakage of sensitive info.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: AI Governance */}
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                  AI Governance
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">AI Observability & Management</h4>
                        <p className="text-sm text-muted-foreground">
                          AI monitoring with <strong>full input/output logging</strong>, continuous response evaluations, and prompt versioning for secure, controlled AI interactions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <UserCheck className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">AI & Human-in-the-Loop Controls</h4>
                        <p className="text-sm text-muted-foreground">
                          AI management aligned with <strong>responsible AI principles</strong>, ensuring critical HR decisions require mandatory human validation and oversight.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-2">Explainable AI Outputs</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong>Transparent reasoning</strong>, source references, and confidence scoring accompany every AI-generated response.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Jaime Oliver Huidobro, PhD
                    </h3>
                    <p className="text-lg text-primary font-medium min-h-[3rem] flex items-center justify-center">
                      Co-Founder, Chief Product & Science Officer
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow min-h-[8rem] flex items-center justify-center text-justify">
                    Applied scientist and product leader. Former Founder of Epoch Metrics and Lead Data Scientist at Clarity AI. Holds a PhD in Mathematical Engineering and completed postdoctoral research at MIT. Specializing in AI and data-driven product development, he is recognized for integrating advanced technology and science with business strategy to empower organizations and unlock human potential.
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
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Rocío Fernández-Rubíes Aguirre
                    </h3>
                    <p className="text-lg text-primary font-medium min-h-[3rem] flex items-center justify-center">
                      Co-Founder, Chief Executive Officer
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow min-h-[8rem] flex items-center justify-center text-justify">
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
                    loading="lazy"
                  />
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground min-h-[3.5rem] flex items-center justify-center">
                      Rafael Sarandeses
                    </h3>
                    <p className="text-lg text-primary font-medium min-h-[3rem] flex items-center justify-center">
                      Co-Founder, Non-Executive Chairman
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow min-h-[8rem] flex items-center justify-center text-justify">
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="problem" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">What problem does Wiselook solve?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Most organizations only see a small part of their talent. Wiselook reveals skills and potential through short, conversational "bloques" that go beyond multiple-choice tests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="different" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">How is this different from traditional assessments?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  We use open-ended, inclusive prompts and validated scoring to capture richer signals. You get the nuance of human conversation with the scalability and consistency of AI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="competency" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Will it fit our competency model and culture?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes. Wiselook adapts to your competency model, language, culture, and values using modular "Lego-like" building blocks, so you don't have to change how you evaluate talent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="practice" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">How does it work in practice?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  People complete brief, guided "bloques" where they already work, asynchronously. Responses are evaluated against validated rubrics to produce reliable insights for managers and HR.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">Is it enterprise-ready for security and privacy?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Yes. We follow privacy by design, least-privilege access, and auditability. Current posture aligns to GDPR and ISO controls, with a published Trust Center and subprocessors list as it evolves.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="outcomes" className="bg-card rounded-lg px-6 border-none shadow-card">
                <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
                  <span className="font-heading font-semibold text-foreground">What outcomes can we expect and how do we start?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Faster, evidence-based decisions, higher completion vs. long tests, and clearer signals on strengths and mobility. Start with a short pilot using your model and a small cohort, then scale via a simple form-based intake and SSO when needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
            <span>ISO 27001 certified</span>
            <span className="text-border">•</span>
            <span>EU AI Act compliant</span>
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
