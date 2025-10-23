"use server";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const FAQSection = () => {
  return (
    <section id="FAQ" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="font-heading font-bold text-5xl text-center text-foreground mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}>
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="problem"
                className="border-t border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    What problem does Wiselook solve?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  Most organizations only see a small part of their talent.
                  Wiselook reveals skills and potential through short,
                  conversational "bloques" that go beyond multiple-choice tests.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="different"
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    How is this different from traditional assessments?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  We use open-ended, inclusive prompts and validated scoring to
                  capture richer signals. You get the nuance of human
                  conversation with the scalability and consistency of AI.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="competency"
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    Will it fit our competency model and culture?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  Yes. Wiselook adapts to your competency model, language,
                  culture, and values using modular "Lego-like" building blocks,
                  so you don't have to change how you evaluate talent.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="practice"
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    How does it work in practice?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  People complete brief, guided "bloques" where they already
                  work, asynchronously. Responses are evaluated against
                  validated rubrics to produce reliable insights for managers
                  and HR.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="security"
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    Is it enterprise-ready for security and privacy?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  Yes. We follow privacy by design, least-privilege access, and
                  auditability. Current posture aligns to GDPR and ISO controls,
                  with a published Trust Center and subprocessors list as it
                  evolves.
                </AccordionContent>
              </AccordionItem>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <AccordionItem
                value="outcomes"
                className="border-b border-gray-300"
              >
                <AccordionTrigger className="text-left overflow-hidden p-0">
                  <motion.div
                    className="w-full h-full font-heading font-semibold text-foreground flex flex-row items-center gap-3 py-6"
                    initial={{ transform: "translateX(-20px)" }}
                    whileHover={{ transform: "translateX(0px)" }}
                  >
                    <span className="bg-primary flex-none rounded-full w-2 h-2 block"></span>
                    What outcomes can we expect and how do we start?
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pr-24">
                  Faster, evidence-based decisions, higher completion vs. long
                  tests, and clearer signals on strengths and mobility. Start
                  with a short pilot using your model and a small cohort, then
                  scale via a simple form-based intake and SSO when needed.
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FAQSection };
