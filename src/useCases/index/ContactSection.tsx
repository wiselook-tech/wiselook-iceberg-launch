"use server";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_URL = "https://calendar.app.google/NvJxzr9aQzB77DeHA";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            Contact us to know more
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your talent assessment process? Let's discuss how
            Wiselook can help your organization.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="group min-h-[44px]"
            onClick={() => window.open(CALENDAR_URL, "_blank")}
          >
            Let's talk
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { ContactSection };
