import { ArrowRight, CheckCircle2 } from "lucide-react";

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-gradient-card scroll-reveal scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A short, AI-native conversational flow that captures real evidence and turns it into action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Assess Block */}
          <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">Assess</h3>
            <p className="text-muted-foreground">
              People answer brief, open-ended prompts in a dialogue with Claire, our AI assessor, or complete
              situational judgement scenarios — in their own words, delivered where they already work: Microsoft Teams,
              web, or embedded.
            </p>
          </div>

          {/* Analyse Block */}
          <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">Analyse</h3>
            <p className="text-muted-foreground">
              Behavioural responses are evaluated against scientifically validated rubrics to map competencies.
            </p>
          </div>

          {/* Act Block */}
          <div className="bg-background rounded-xl p-8 shadow-card text-center space-y-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">Act</h3>
            <p className="text-muted-foreground">
              Individuals and managers get actionable recommendations to make fair and faster talent decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
