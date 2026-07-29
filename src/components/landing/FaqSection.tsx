import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => (
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
              Most organizations only see a small part of their talent. Wiselook reveals skills and potential through
              short, conversational blocks that go beyond multiple-choice tests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="different" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">
                How is this different from traditional assessments?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              We use open-ended, inclusive prompts and validated scoring to capture richer signals. You get the nuance
              of human conversation with the scalability and consistency of AI.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="competency" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">
                Will it fit our competency model and culture?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              Yes. Wiselook adapts to your competency model, language, culture, and values using modular "Lego-like"
              building blocks, so you don't have to change how you evaluate talent.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="practice" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">How does it work in practice?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              People complete brief, guided blocks where they already work, asynchronously. Responses are evaluated
              against validated rubrics to produce reliable insights for managers and HR.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="time" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">How long does an assessment take?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              Each conversational block takes under 10 minutes — minutes, not weeks. Most people complete it in a single
              sitting, in their own words.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="measured" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">What does Wiselook actually measure?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              Judgment, behavior, and competence — not personality types. Scoring methods were developed with
              Universidad Autónoma de Madrid and are validated and recalibrated over time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="security" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">
                Is it enterprise-ready for security and privacy?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              Yes. We follow privacy by design, least-privilege access, and full auditability, and our practices align
              with GDPR. We walk every prospective customer through our security documentation as part of the
              evaluation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="outcomes" className="bg-card rounded-lg px-6 border-none shadow-card">
            <AccordionTrigger className="text-left hover:no-underline py-6 min-h-[44px]">
              <span className="font-heading font-semibold text-foreground">
                What outcomes can we expect and how do we start?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6">
              Faster, evidence-based decisions, higher completion than long tests, and clearer signals on strengths and
              readiness for mobility. Start with a short pilot using your own competency model and a small cohort, then
              expand at your own pace.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;
