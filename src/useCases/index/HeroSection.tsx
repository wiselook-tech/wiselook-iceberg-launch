"use server";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIceberg from "@/assets/landing-bg-grey.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-20"
    >
      <div className="container mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Map your talent. <p></p>
              In minutes.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Uncover the hidden potential in your organization with
              science-backed, conversational assessments. Our AI is scales
              natively in your system, unlocking soft-skills intelligence for
              succession planning, mobility, and workforce decisions.
            </p>
            <div className="pt-4 flex flex-col gap-4">
              <Button
                variant="hero"
                size="xl"
                className="group w-fit animate-pulse-glow"
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/NvJxzr9aQzB77DeHA",
                    "_blank",
                  )
                }
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
  );
};

export { HeroSection };
