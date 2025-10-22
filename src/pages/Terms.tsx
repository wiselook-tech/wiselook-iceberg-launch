import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import wiselookIcon from "@/assets/favicon.png";

const Terms = () => {
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
            <h1 className="font-heading font-bold text-4xl text-foreground mb-8">Terms and Conditions</h1>
            
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> October 22, 2025
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Wiselook Talent Lab S.L. ("Wiselook", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, services, and Microsoft Teams application. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Use of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use the service in any way that could damage, disable, overburden, or impair our servers or networks</li>
                  <li>Attempt to gain unauthorized access to any part of the service or other accounts</li>
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our services are the exclusive property of Wiselook Talent Lab S.L. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services without our written permission.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" and "as available" without any warranties, express or implied. We do not guarantee that our services will be error-free, uninterrupted, or free of viruses or other harmful components. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Wiselook Talent Lab S.L. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our services, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Wiselook Talent Lab S.L. and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or relating to your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Spain, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Spain.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms;
