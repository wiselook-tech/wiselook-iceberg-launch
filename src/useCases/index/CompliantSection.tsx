"use server";

import { Shield } from "lucide-react";

const CompliantSection = () => {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>SOC 2 ready</span>
          </div>
          <span className="text-border">•</span>
          <span>GDPR compliant</span>
          <span className="text-border">•</span>
          <span>ISO 27001 certified</span>
          <span className="text-border">•</span>
          <span>EU AI Act compliant</span>
          <span className="text-border">•</span>
          <span>Enterprise-grade security</span>
        </div>
      </div>
    </section>
  );
};

export { CompliantSection };
