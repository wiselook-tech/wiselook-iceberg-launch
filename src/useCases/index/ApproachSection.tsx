"use server";

import { Users, Brain, Lock } from "lucide-react";

const ApproachSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-foreground">
            Approach and Value
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lego Building Blocks - New */}
            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Adapt to your culture
              </h3>
              <p className="text-muted-foreground">
                Modular building blocks that adapt to each company's model,
                culture, and values
              </p>
            </div>

            {/* Conversational Assessment - New */}
            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
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
                Conversational, inclusive assessment
              </h3>
              <p className="text-muted-foreground">
                AI-powered scale without making technology the headline,
                focusing on human potential
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Frictionless scale
              </h3>
              <p className="text-muted-foreground">
                Delivered natively in your messaging system for higher
                completion and faster time-to-value vs.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Predictive intelligence
              </h3>
              <p className="text-muted-foreground">
                Conversational SJT with psychometric rigor uncovers what people
                can actually do, not what they self-report
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-accent/30 flex items-center justify-center">
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
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Decision-ready insights
              </h3>
              <p className="text-muted-foreground">
                Behavioral levels and readiness signals for succession and
                mobility, not just skills tags
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-background shadow-card">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Enterprise‑grade privacy and security
              </h3>
              <p className="text-muted-foreground">Built with security first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ApproachSection };
