"use server";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIceberg from "@/assets/landing-bg-grey.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[70px]"
    >
      <div className="max-w-6xl container mx-auto pb-32 md:pb-40 ">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="z-10 pt-48 space-y-8">
            <motion.h1 className="relative font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground" initial={{ left: -50, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: .3, ease: "easeOut", delay: .5 }}>
              Map your talent.<br />
              In minutes.
            </motion.h1>
            <motion.p className="relative text-lg md:text-xl text-muted-foreground max-w-xl" initial={{ left: -50, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: .3, ease: "easeOut", delay: .7 }}>
              Uncover the hidden potential in your organization with
              science-backed, conversational assessments. Our AI is scales
              natively in your system, unlocking soft-skills intelligence for
              succession planning, mobility, and workforce decisions.
            </motion.p>
            <motion.div className="relative pt-4 flex flex-col gap-4" initial={{ left: -50, opacity: 0 }} animate={{ left: 0, opacity: 1 }} transition={{ duration: .3, ease: "easeOut", delay: .9 }}>
              <Button
                variant="hero"
                size="xl"
                className="group w-fit animate-pulse-glow"
                onClick={() =>
                  window.open(
                    "https://calendar.app.google/NvJxzr9aQzB77DeHA",
                    "_blank"
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
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        </div>

        <motion.div className="absolute w-2/3 -right-12"  initial={{ top: 400, opacity: 0 }} animate={{ top: 68, opacity: 1 }} transition={{ duration: .5, ease: "easeOut" }}>
          <motion.img
            src={heroIceberg}
            alt="Wiselook iceberg visualization showing visible and hidden talent potential"
            className="w-full h-auto select-none pointer-events-none"
            style={{
              filter: "hue-rotate(350deg) brightness(100%) saturate(1050%)",
            }}
            initial={{ filter: "hue-rotate(350deg) brightness(100%) saturate(1050%)" }} animate={{ filter: "hue-rotate(350deg) brightness(100%) saturate(0%)" }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
    </section>
  );
};

export { HeroSection };
