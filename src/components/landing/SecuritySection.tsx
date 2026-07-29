import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Database, Eye, FileText, Globe, Key, Search, Shield, ShieldCheck, UserCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gdprLogo from "@/assets/gdpr-logo.svg";
import euAiActLogo from "@/assets/eu-ai-act-logo.svg";

interface SecurityItem {
  icon: LucideIcon;
  title: string;
  body: ReactNode;
}

/** The three commitments that best summarize the full posture. */
const headlineItems: SecurityItem[] = [
  {
    icon: Database,
    title: "Data protection & encryption",
    body: (
      <>
        <strong className="text-foreground">Environment isolation</strong>,{" "}
        <strong className="text-foreground">end-to-end encryption</strong> at rest and in transit, continuous
        vulnerability monitoring, and proactive threat detection.
      </>
    ),
  },
  {
    icon: Shield,
    title: "Zero-training guarantee",
    body: (
      <>
        Your data is <strong className="text-foreground">never used to train AI models</strong>—contractually enforced
        and technically protected on every step of the process.
      </>
    ),
  },
  {
    icon: UserCheck,
    title: "Human oversight",
    body: (
      <>
        AI management aligned with <strong className="text-foreground">responsible AI principles</strong>, ensuring
        critical HR decisions require mandatory human validation and oversight.
      </>
    ),
  },
];

interface SecurityGroup {
  value: string;
  title: string;
  items: SecurityItem[];
}

/** Everything else, grouped by the three posture themes. */
const groups: SecurityGroup[] = [
  {
    value: "data-protection",
    title: "Data Protection & Privacy",
    items: [
      {
        icon: Key,
        title: "Privacy by Design",
        body: (
          <>
            <strong className="text-foreground">Data minimization</strong>, user consent management, transparency, and
            compliance with <strong className="text-foreground">GDPR</strong> and other regional privacy laws.
          </>
        ),
      },
      {
        icon: Globe,
        title: "Localized AI Inference",
        body: (
          <>
            LLM inference occurs within the <strong className="text-foreground">EU for EU clients</strong> and follows
            data sovereignty compliance for clients based in the Americas.
          </>
        ),
      },
    ],
  },
  {
    value: "infrastructure",
    title: "Infrastructure & Security",
    items: [
      {
        icon: Search,
        title: "Strict Access & Audit Controls",
        body: (
          <>
            <strong className="text-foreground">Role-based access</strong>, behavioral analysis, and a comprehensive,
            immutable audit trail capturing all user actions and AI interactions.
          </>
        ),
      },
      {
        icon: ShieldCheck,
        title: "Prompt Security",
        body: (
          <>
            Defenses against <strong className="text-foreground">prompt injection</strong>, prompt tampering, and output
            filtering prevent model misuse or leakage of sensitive info.
          </>
        ),
      },
    ],
  },
  {
    value: "ai-governance",
    title: "AI Governance",
    items: [
      {
        icon: Eye,
        title: "AI Observability & Management",
        body: (
          <>
            AI monitoring with <strong className="text-foreground">full input/output logging</strong>, continuous
            response evaluations, and prompt versioning for secure, controlled AI interactions.
          </>
        ),
      },
      {
        icon: FileText,
        title: "Explainable AI Outputs",
        body: (
          <>
            <strong className="text-foreground">Transparent reasoning</strong>, source references, and confidence
            scoring accompany every AI-generated response.
          </>
        ),
      },
    ],
  },
];

/**
 * Dark band. The `dark` class scopes the dark design tokens from src/index.css to
 * this section, so `bg-background`, `bg-card` and `text-foreground` below resolve
 * to the dark palette.
 */
const SecuritySection = () => (
  <section id="security" className="dark bg-background py-20 md:py-28 scroll-reveal scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Enterprise‑grade security and privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with security and privacy by design, ensuring your data is protected at every step
          </p>

          {/* Certification imagery */}
          <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
            <img
              src={gdprLogo}
              alt="GDPR-ready"
              className="h-16 opacity-80 hover:opacity-100 transition-opacity"
              width={128}
              height={64}
              loading="lazy"
              decoding="async"
            />
            <img
              src={euAiActLogo}
              alt="Built for the EU AI Act"
              className="h-16 opacity-80 hover:opacity-100 transition-opacity"
              width={128}
              height={64}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {headlineItems.map((item) => (
            <Card key={item.title} className="bg-card border-border">
              <CardHeader className="space-y-4">
                <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <CardTitle className="font-heading text-lg text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="font-heading font-semibold text-xl text-foreground text-center">Full security posture</h3>
          <Accordion type="single" collapsible className="w-full">
            {groups.map((group) => (
              <AccordionItem key={group.value} value={group.value} className="border-border">
                <AccordionTrigger className="min-h-[44px] text-left hover:no-underline">
                  <span className="font-heading font-semibold text-foreground">{group.title}</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-6">
                  {group.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;
