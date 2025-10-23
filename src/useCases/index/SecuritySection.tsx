"use server";

import { Shield, Database, Eye } from "lucide-react";
import { motion } from "motion/react";

const SecuritySection = () => {
  return (
    <section id="security" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <motion.h2
              className="font-heading font-bold text-5xl text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Enterprise‑grade security and privacy
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Built with security and privacy by design, ensuring your data is
              protected at every step
            </motion.p>

            {/* Certification Logos */}
            <div className="flex items-center justify-center gap-8 flex-wrap pt-4">
              <motion.div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg h-20 w-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}>
                <span className="font-bold">SOC 2</span>
                <span className="text-xs">Type II</span>
              </motion.div>
              <motion.div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg h-20 w-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: .2 }}>
                <span className="font-bold">GDPR</span>
                <span className="text-xs">Compliant</span>
              </motion.div>
              <motion.div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg h-20 w-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: .4 }}>
                <span className="font-bold">ISO 27001</span>
                <span className="text-xs">Certified</span>
              </motion.div>
              <motion.div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg h-20 w-40"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: .6 }}>
                <span className="font-bold">EU AI Act</span>
                <span className="text-xs">Compliant</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="w-full bg-background rounded-lg p-10 flex flex-col gap-6"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="flex flex-row justify-start items-center gap-3 font-heading font-bold text-xl text-foreground text-center lg:text-left">
              <Shield className="h-7 w-7 text-primary" /> Data Protection &
              Privacy
            </h3>
            <div className="grid grid-cols-3 gap-12">
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Privacy by Design
                </h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Data minimization</strong>, user consent management,
                  transparency, and compliance with <strong>GDPR</strong> and
                  other regional privacy laws.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Zero Training Guarantee
                </h4>
                <p className="text-sm text-muted-foreground">
                  Your data is <strong>never used to train AI models</strong>
                  —contractually enforced and technically protected on every
                  step of the process.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Localized AI Inference
                </h4>
                <p className="text-sm text-muted-foreground">
                  LLM inference occurs within the{" "}
                  <strong>EU for EU clients</strong> and follows data
                  sovereignty compliance for clients based in the Americas.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full bg-background rounded-lg p-10 flex flex-col gap-6"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="flex flex-row justify-start items-center gap-3 font-heading font-bold text-xl text-foreground text-center lg:text-left">
              <Database className="h-7 w-7 text-primary" /> Infrastructure &
              Security
            </h3>
            <div className="grid grid-cols-3 gap-12">
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Robust Infrastructure Security
                </h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Environment isolation</strong>,{" "}
                  <strong>end-to-end encryption</strong> at rest and in transit,
                  continuous vulnerability monitoring, and proactive threat
                  detection.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Strict Access & Audit Controls
                </h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Role-based access</strong>, behavioral analysis, and a
                  comprehensive, immutable audit trail capturing all user
                  actions and AI interactions.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Prompt Security
                </h4>
                <p className="text-sm text-muted-foreground">
                  Defenses against <strong>prompt injection</strong>, prompt
                  tampering, and output filtering prevent model misuse or
                  leakage of sensitive info.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full bg-background rounded-lg p-10 flex flex-col gap-6"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="flex flex-row justify-start items-center gap-3 font-heading font-bold text-xl text-foreground text-center lg:text-left">
              <Eye className="h-7 w-7 text-primary" /> AI Governance
            </h3>
            <div className="grid grid-cols-3 gap-12">
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  AI Observability & Management
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI monitoring with <strong>full input/output logging</strong>,
                  continuous response evaluations, and prompt versioning for
                  secure, controlled AI interactions.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  AI & Human-in-the-Loop Controls
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI management aligned with{" "}
                  <strong>responsible AI principles</strong>, ensuring critical
                  HR decisions require mandatory human validation and oversight.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Explainable AI Outputs
                </h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Transparent reasoning</strong>, source references, and
                  confidence scoring accompany every AI-generated response.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { SecuritySection };
