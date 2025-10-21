"use server";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIceberg from "@/assets/landing-bg-grey.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-[70px]"
    >
      <div className="max-w-6xl container mx-auto pb-32 md:pb-40">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="z-10 pt-28 space-y-8 animate-fade-up">
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
        </div>

        {/* Hero Image */}
        <div className="absolute z-0 right-3 lg:-right-12 xl:right-12 top-[68px] w-full lg:w-2/3 xl:w-1/2 mix-blend-multiply">
            <img
              src={heroIceberg}
              alt="Wiselook iceberg visualization showing visible and hidden talent potential"
              className="w-full h-auto select-none pointer-events-none"
              style={{ animationDelay: "300ms" }}
            />
          </div>
      </div>
    </section>
  );
};

export { HeroSection };
