"use server";

import { CheckCircle2, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              How?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A short, AI-native conversational flow that captures real evidence
              and turns it into action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Assess Block */}
            <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
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
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Assess
              </h3>
              <p className="text-muted-foreground">
                Teams go through open‑ended conversations or Situaltional
                Judement Tests (SJT). At scale.
              </p>
            </div>

            {/* Analyse Block */}
            <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Analyse
              </h3>
              <p className="text-muted-foreground">
                Behavioural responses are evaluated against scientifically
                validated rubrics to map competencies.
              </p>
            </div>

            {/* Act Block */}
            <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Act
              </h3>
              <p className="text-muted-foreground">
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
