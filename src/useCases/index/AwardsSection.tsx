"use server";

import { Award, Brain, Users } from "lucide-react";
import hrSummit1 from "@/assets/hr_summit/WhatsApp Image 2025-10-06 at 11.24.31.jpeg";
import hrSummit3 from "@/assets/hr_summit/1759481576972.jpeg";

const AwardsSection = () => {
  return (
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
              Recognized for innovation in talent assessment and workforce
              intelligence
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
                  <p className="text-sm font-medium">
                    HR Innovation Summit 2025 - Startup of the Year
                  </p>
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
                  <p className="text-sm font-medium">
                    Presenting Wiselook's vision
                  </p>
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
                  <span className="text-sm font-medium text-foreground">
                    Built by scientists
                  </span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Scaled by industry experts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AwardsSection };
