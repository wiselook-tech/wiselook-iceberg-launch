import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDAR_URL, trackCtaClick } from "@/lib/constants";
import ClaireChatMock from "@/components/landing/ClaireChatMock";

/**
 * `isolate` on the section is load-bearing: it's the stacking context the mock's
 * `-z-10` radial wash resolves against. Without it the wash paints above the hero
 * copy instead of behind the panel once the two columns stack.
 */
const HeroSection = () => (
  <section id="home" className="relative isolate overflow-hidden bg-gradient-hero pt-20">
    <div className="container mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-up">
          <h1 className="heading-accent heading-accent-start font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-heading">
            Map your talent. <br />
            In minutes.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Claire, our AI assessor, turns structured conversations into scientific evidence of judgment, behavior, and
            competence — for the people decisions that matter most.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl">
            Built for organizations where people decisions carry the most weight — banking, insurance, consulting,
            pharma.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="group w-fit"
              onClick={() => {
                trackCtaClick("hero");
                window.open(CALENDAR_URL, "_blank");
              }}
            >
              Talk to us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" className="group w-fit" asChild>
              <a href="#how-it-works">Jump to how it works</a>
            </Button>
          </div>
        </div>

        {/* Product visual */}
        <div className="relative">
          <ClaireChatMock />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
