import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UseCase {
  value: string;
  tab: string;
  heading: string;
  body: string;
  bullets: string[];
}

const useCases: UseCase[] = [
  {
    value: "succession",
    tab: "Succession",
    heading: "Know who is actually ready",
    body: "Succession slates usually rest on a handful of senior opinions. Claire assesses every candidate on the same competencies, in the same way, so the shortlist is backed by evidence rather than advocacy — readiness for the next role, not performance in the current one.",
    bullets: [
      "The same rubric applied to every name on the slate",
      "Readiness by competency, with the reasoning behind each level",
      "Gaps identified before the appointment, not after",
    ],
  },
  {
    value: "mobility",
    tab: "Internal mobility",
    heading: "Fill roles from the inside",
    body: "Open roles go outside because nobody can see who already fits. Claire covers whole populations in short conversations, so people can be matched to roles on evidence of judgment and behavior instead of job history — without anyone having to apply first.",
    bullets: [
      "Whole-population coverage in blocks of under 10 minutes",
      "Competency evidence that is comparable across teams and countries",
      "A candidate pool ready before the role opens",
    ],
  },
  {
    value: "development",
    tab: "Development",
    heading: "Development people can act on",
    body: "Feedback usually arrives once a year, in general terms. Claire returns behavioral levels per competency together with the reasoning behind them, so managers and employees discuss specific behavior instead of ratings. Reassess later and you can see what moved.",
    bullets: [
      "Behavioral levels per competency, not one overall score",
      "Explanations concrete enough for people to act on themselves",
      "Repeatable, so progress is measurable",
    ],
  },
];

const UseCases = () => (
  <section id="use-cases" className="scroll-reveal py-20 md:py-28 bg-background scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">
            Three decisions Wiselook is built for
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Succession, internal mobility, and development — one evidence base, three different questions.
          </p>
        </div>

        <Tabs defaultValue={useCases[0].value} className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-3 gap-1">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.value}
                value={useCase.value}
                className="min-h-[44px] whitespace-normal px-2 py-2 font-heading text-xs sm:text-sm"
              >
                {useCase.tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.value} value={useCase.value} className="mt-6">
              <Card className="border-none bg-background shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-xl md:text-2xl text-heading">{useCase.heading}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{useCase.body}</p>
                  <ul className="space-y-3">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <p className="text-center text-sm text-muted-foreground">
          These are the decisions that carry the most weight in banking, insurance, consulting, and pharma — the sectors
          Wiselook is built for.
        </p>
      </div>
    </div>
  </section>
);

export default UseCases;
