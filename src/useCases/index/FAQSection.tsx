"use server";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

const FAQSection = () => {
  return (
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
  );
};

export { FAQSection };
