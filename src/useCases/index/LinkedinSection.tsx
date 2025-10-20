"use server";

import { Linkedin } from "lucide-react";

const WISELOOK_LINKEDIN_URL = "https://www.linkedin.com/company/wiselook";

const LinkedinSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Follow us on LinkedIn
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest insights on workforce intelligence and
            talent assessment.
          </p>

          <div className="pt-4">
            <a
              href={WISELOOK_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              <Linkedin className="h-6 w-6" />
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LinkedinSection };
