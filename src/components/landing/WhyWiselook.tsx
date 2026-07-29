import { Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompetitorQuadrant from "@/components/landing/CompetitorQuadrant";

const cardClass = "border-none bg-background shadow-card";
const iconWrapper = "h-12 w-12 rounded-lg flex items-center justify-center";

const WhyWiselook = () => (
  <section className="scroll-reveal py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6 space-y-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-heading heading-accent">Why Wiselook</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={`${iconWrapper} bg-primary/10`}>
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <CardTitle className="font-heading text-xl text-heading">Adapt to your culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Modular building blocks that adapt to each company's model, culture, and values
              </p>
            </CardContent>
          </Card>

          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={`${iconWrapper} bg-secondary/20`}>
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <CardTitle className="font-heading text-xl text-heading">
                Conversational, inclusive assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">AI does the heavy lifting; people stay the headline.</p>
            </CardContent>
          </Card>

          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={`${iconWrapper} bg-primary/10`}>
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl text-heading">Frictionless scale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Delivered natively in your messaging system for higher completion and faster time-to-value.
              </p>
            </CardContent>
          </Card>

          <Card className={cardClass}>
            <CardHeader className="space-y-4">
              <div className={`${iconWrapper} bg-secondary/20`}>
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl text-heading">Predictive, decision-ready insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conversational situational judgment scenarios with psychometric rigor uncover what people can actually
                do, not what they self-report — and turn it into behavioral levels and readiness signals for
                succession and mobility, not just skills tags.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Where Wiselook sits against the alternatives */}
      <CompetitorQuadrant />
    </div>
  </section>
);

export default WhyWiselook;
