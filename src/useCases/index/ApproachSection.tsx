"use server";

import { Title } from "@/components/Title";
import { Users, Brain, Lock } from "lucide-react";
import { motion } from "motion/react";

const ApproachSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <Title text="Approach and Value" />

          <div className="grid grid-cols-2 gap-x-12">
            {/* Lego Building Blocks - New */}
            <motion.div
              className="py-12 border-t border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <span>Adapt to your culture</span>
              </h3>
              <p className="text-muted-foreground">
                Modular building blocks that adapt to each company's model,
                culture, and values.
              </p>
            </motion.div>

            {/* Conversational Assessment - New */}
            <motion.div
              className="py-12 border-t border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Conversational, inclusive assessment</span>
              </h3>
              <p className="text-muted-foreground">
                AI-powered scale without making technology the headline,
                focusing on human potential.
              </p>
            </motion.div>

            <motion.div
              className="py-12 border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Frictionless scale</span>
              </h3>
              <p className="text-muted-foreground">
                Delivered natively in your messaging system for higher
                completion and faster time-to-value vs.
              </p>
            </motion.div>

            <motion.div
              className="py-12 border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <Lock className="h-6 w-6 text-primary" />
                <span>Enterprise‑grade privacy and security</span>
              </h3>
              <p className="text-muted-foreground">
                Built with security first.
              </p>
            </motion.div>

            <motion.div
              className="py-12 border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span>Decision-ready insights</span>
              </h3>
              <p className="text-muted-foreground">
                Behavioral levels and readiness signals for succession and
                mobility, not just skills tags.
              </p>
            </motion.div>

            <motion.div
              className="py-12 border-b border-gray-300 flex flex-col gap-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="font-heading font-semibold text-xl text-foreground flex flex-row justify-start gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span>Predictive intelligence</span>
              </h3>
              <p className="text-muted-foreground">
                Conversational SJT with psychometric rigor uncovers what people
                can actually do, not what they self-report.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ApproachSection };
