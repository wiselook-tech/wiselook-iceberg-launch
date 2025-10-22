import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import wiselookIcon from "@/assets/favicon.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={wiselookIcon} alt="Wiselook" className="h-8 w-8" />
              <span className="font-heading font-bold text-xl text-foreground">Wiselook</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <h1 className="font-heading font-bold text-4xl text-foreground mb-8">Privacy Policy</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> October 22, 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wiselook Talent Lab S.L. ("Wiselook", "we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our services, including our Microsoft Teams application and related services.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, and other contact details you provide</li>
                  <li><strong>Microsoft Teams Data:</strong> User profile information (name, email, tenant ID) as permitted by Microsoft</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our services</li>
                  <li><strong>Technical Data:</strong> Device information, IP address, and browser data</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Ensure security and prevent misuse</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except as required by law or to protect our rights. We may share information with trusted service providers who help us operate our service, subject to appropriate confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Data portability</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us at <a href="mailto:contact@wiselook.ai" className="text-primary hover:underline">contact@wiselook.ai</a>.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. GDPR Compliance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We comply with the General Data Protection Regulation (GDPR) and other applicable privacy laws. We process personal data lawfully, fairly, and transparently, and implement appropriate technical and organizational measures to protect your data.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-foreground font-medium">Wiselook Talent Lab S.L.</p>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:contact@wiselook.ai" className="text-primary hover:underline">contact@wiselook.ai</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
