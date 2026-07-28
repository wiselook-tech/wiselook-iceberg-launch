import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDAR_URL, trackCtaClick } from "@/lib/constants";

const ContactCta = () => (
  <section id="contact" className="scroll-reveal py-20 md:py-28 bg-gradient-hero scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">
          See your talent map in 30 minutes
        </h2>
        <p className="text-lg text-muted-foreground">
          Bring a real decision — a succession slate, a mobility round, a development cohort — and we'll show you the
          evidence Claire produces for it.
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button
            variant="hero"
            size="xl"
            className="group min-h-[44px]"
            onClick={() => {
              trackCtaClick("contact");
              window.open(CALENDAR_URL, "_blank");
            }}
          >
            Talk to us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground">30 minutes · no commitment · we'll bring a sample report.</p>
          <a
            href="mailto:hello@wiselook.ai"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
          >
            Prefer email? hello@wiselook.ai
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCta;
