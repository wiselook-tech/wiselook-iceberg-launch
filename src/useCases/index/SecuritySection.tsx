"use server";

import {
  Key,
  Shield,
  Globe,
  Database,
  Search,
  ShieldCheck,
  Eye,
  UserCheck,
  FileText,
} from "lucide-react";
import soc2Logo from "@/assets/soc2-logo.svg";
import gdprLogo from "@/assets/gdpr-logo.svg";
import iso27001Logo from "@/assets/iso27001-logo.svg";
import euAiActLogo from "@/assets/eu-ai-act-logo.svg";

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Enterprise‑grade security and privacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with security and privacy by design, ensuring your data is
              protected at every step
            </p>

            {/* Certification Logos */}
            <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
              <img
                src={soc2Logo}
                alt="SOC 2 Type II"
                className="h-20 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={gdprLogo}
                alt="GDPR Compliant"
                className="h-20 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={iso27001Logo}
                alt="ISO 27001 Certified"
                className="h-20 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={euAiActLogo}
                alt="EU AI Act Compliant"
                className="h-20 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Three-Column Security Features */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1: Data Protection & Privacy */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                Data Protection & Privacy
              </h3>

              <div className="space-y-4">
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Key className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Privacy by Design
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Data minimization</strong>, user consent
                        management, transparency, and compliance with{" "}
                        <strong>GDPR</strong> and other regional privacy laws.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Zero Training Guarantee
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Your data is{" "}
                        <strong>never used to train AI models</strong>
                        —contractually enforced and technically protected on
                        every step of the process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Localized AI Inference
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        LLM inference occurs within the{" "}
                        <strong>EU for EU clients</strong> and follows data
                        sovereignty compliance for clients based in the
                        Americas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Infrastructure & Security */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                Infrastructure & Security
              </h3>

              <div className="space-y-4">
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Robust Infrastructure Security
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Environment isolation</strong>,{" "}
                        <strong>end-to-end encryption</strong> at rest and in
                        transit, continuous vulnerability monitoring, and
                        proactive threat detection.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Strict Access & Audit Controls
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Role-based access</strong>, behavioral analysis,
                        and a comprehensive, immutable audit trail capturing all
                        user actions and AI interactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Prompt Security
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Defenses against <strong>prompt injection</strong>,
                        prompt tampering, and output filtering prevent model
                        misuse or leakage of sensitive info.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: AI Governance */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-foreground text-center lg:text-left">
                AI Governance
              </h3>

              <div className="space-y-4">
                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        AI Observability & Management
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AI monitoring with{" "}
                        <strong>full input/output logging</strong>, continuous
                        response evaluations, and prompt versioning for secure,
                        controlled AI interactions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        AI & Human-in-the-Loop Controls
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        AI management aligned with{" "}
                        <strong>responsible AI principles</strong>, ensuring
                        critical HR decisions require mandatory human validation
                        and oversight.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        Explainable AI Outputs
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Transparent reasoning</strong>, source
                        references, and confidence scoring accompany every
                        AI-generated response.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SecuritySection };
