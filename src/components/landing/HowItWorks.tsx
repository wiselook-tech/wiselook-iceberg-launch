import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cardClass = "border-none bg-background shadow-card text-center";
const iconWrapper = "h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto";

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-muted/30 scroll-reveal scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading heading-accent">How it works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A short, AI-native conversational flow that captures real evidence and turns it into action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Assess */}
          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={iconWrapper}>
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <CardTitle className="font-heading text-xl text-heading">Assess</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                People answer brief, open-ended prompts in a dialogue with Claire, our AI assessor, or complete
                situational judgment scenarios — in their own words, delivered where they already work: Microsoft
                Teams, web, or embedded.
              </p>
            </CardContent>
          </Card>

          {/* Analyze */}
          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={iconWrapper}>
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl text-heading">Analyze</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Behavioral responses are evaluated against scientifically validated rubrics to map competencies.
              </p>
            </CardContent>
          </Card>

          {/* Act */}
          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={iconWrapper}>
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl text-heading">Act</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Individuals and managers get actionable recommendations to make fair and faster talent decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
