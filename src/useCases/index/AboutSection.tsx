"use server";

import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jaimePhoto from "@/assets/profiles/jaime.jpg";
import rocioPhoto from "@/assets/profiles/rocio.png";
import rafaPhoto from "@/assets/profiles/rafa.png";
import { motion } from "motion/react";

const JAIME_LINKEDIN_URL = "https://www.linkedin.com/in/jaime-oliver-huidobro/";
const ROCIO_LINKEDIN_URL =
  "https://www.linkedin.com/in/rocio-fernandez-rubies-aguirre-b8b1373b/";
const RAFAEL_LINKEDIN_URL = "https://www.linkedin.com/in/rafaelsarandeses/";
const WISELOOK_JOBS_LINKEDIN_URL =
  "https://www.linkedin.com/company/wiselook/jobs/";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <motion.h2
              className="font-heading font-bold text-5xl text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Us
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              Wiselook is a science-based talent intelligence platform that
              helps organizations recognize and develop their workforce
              potential through AI-powered assessments integrated directly into
              Microsoft Teams.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}>
              Visionary leaders combining deep expertise in AI, data science,
              and customer experience to revolutionize workforce intelligence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Jaime Oliver Huidobro */}
            <motion.div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full"
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}>
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
                  Applied scientist and product leader. Former Founder of Epoch
                  Metrics and Lead Data Scientist at Clarity AI. Holds a PhD in
                  Mathematical Engineering and completed postdoctoral research
                  at MIT. Specializing in AI and data-driven product
                  development, he is recognized for integrating advanced
                  technology and science with business strategy to empower
                  organizations and unlock human potential.
                </p>

                <a
                  href={JAIME_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Rocío Fernández-Rubíes Aguirre */}
            <motion.div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}>  
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
                  Entrepreneur and executive leader in customer experience,
                  business design, and organizational intelligence. CXO at
                  Restaurant Brands Iberia, business connector at Klarna, and
                  former startup founder; expert in leading strategic digital
                  transformation and acclaimed for her innovative approaches to
                  talent and workforce management.
                </p>

                <a
                  href={ROCIO_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Rafael Sarandeses */}
            <motion.div className="bg-background rounded-xl p-8 shadow-card flex flex-col h-full"
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}>
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
                  Multidisciplinary leader with over 25 years of experience in
                  investment banking, entrepreneurship, and motorsports. CEO and
                  Partner at Talengo, advisor and coach, former Goldman Sachs
                  executive, and author; highly regarded for his expertise in
                  leadership development, talent strategy, and organizational
                  transformation across world-class institutions and ventures.
                </p>

                <a
                  href={RAFAEL_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Join the Team CTA */}
          <motion.div className="text-center pt-8"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}>
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => window.open(WISELOOK_JOBS_LINKEDIN_URL, "_blank")}
            >
              Join the Team
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
