"use server";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto pb-24 h-[2000px]">
          <motion.div
            className="sticky top-32 text-center space-y-4 mb-[300px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
              How?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A short, AI-native conversational flow that captures real evidence
              and turns it into action.
            </p>
          </motion.div>

          <div className="sticky h-[1600px] grid grid-cols-3 gap-8 ">
            {/* Assess Block */}
            <div className="sticky top-72 h-96 bg-primary/10 rounded-xl p-8 mt-10 shadow-card flex flex-col justify-between text-center">
              <h3 className="font-heading font-semibold text-3xl text-foreground">
                Assess
              </h3>
              <div className="h-24 w-24 flex items-center justify-center mx-auto">
                <svg
                  className="text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <p className="text-foreground">
                Teams go through open‑ended conversations or Situaltional
                Judement Tests (SJT). At scale.
              </p>
            </div>

            {/* Analyse Block */}
            <div className="sticky top-72 h-96 bg-primary/10 rounded-xl p-8 mt-[30rem] shadow-card flex flex-col justify-between text-center">
              <h3 className="font-heading font-semibold text-3xl text-foreground">
                Analyse
              </h3>
              <div className="flex items-center justify-center mx-auto">
                <CheckCircle2
                  className="h-24 w-24 text-foreground"
                  strokeWidth={1}
                />
              </div>
              <p className="text-foreground">
                Behavioural responses are evaluated against scientifically
                validated rubrics to map competencies.
              </p>
            </div>

            {/* Act Block */}
            <div className="sticky top-72 h-96 bg-primary/10 rounded-xl p-8 mt-[58rem] shadow-card flex flex-col justify-between text-center">
              <h3 className="font-heading font-semibold text-3xl text-foreground">
                Act
              </h3>
              <div className="flex items-center justify-center mx-auto">
                <ArrowRight
                  className="h-24 w-24 text-foreground"
                  strokeWidth={1}
                />
              </div>
              <p className="text-foreground">
                Individuals and managers get actionalble recommendations to make
                fair and faster talent decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SolutionSection };
