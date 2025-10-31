import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wiselookIcon from "@/assets/favicon.ico";

const Support = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={wiselookIcon} alt="Wiselook" className="h-8 w-8" />
              <span className="font-heading font-bold text-xl text-foreground">Wiselook</span>
            </button>
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
            <h1 className="font-heading font-bold text-4xl text-foreground mb-8">Support</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wiselook for Microsoft Teams helps organizations manage and discover top talent by bringing AI-driven talent insights directly into Teams. This page provides help, troubleshooting steps, and ways to contact us.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Getting Started</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Follow these steps to install Wiselook in Microsoft Teams:
                </p>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                  <li>Open Microsoft Teams and go to Apps.</li>
                  <li>Search for <strong>Wiselook</strong>.</li>
                  <li>Select the app and click <strong>Add to Teams</strong>.</li>
                  <li>Follow the prompts to sign in with your work account.</li>
                </ol>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Common Issues and Troubleshooting</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      I can't sign in
                    </h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Confirm you are using your organization's work account.</li>
                      <li>Check with your Teams admin that Wiselook is allowed for your tenant.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      The bot doesn't respond
                    </h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Ensure your Teams admin has granted the Wiselook bot permission in the Teams admin center.</li>
                      <li>Try messaging the bot in a 1:1 chat first. If it works there but not in a channel, verify channel permissions and app pinning.</li>
                      <li>Update Microsoft Teams to the latest version and try again.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      Data isn't syncing from Teams
                    </h3>
                    <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                      <li>Make sure you are signed in and have granted all requested permissions.</li>
                      <li>If your organization recently installed the app, allow a few minutes for initial provisioning.</li>
                      <li>Ask your admin to confirm there are no policy blocks for the Wiselook app or specific scopes.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  If an issue persists, include your Teams client version and a brief description of what you were doing when the problem occurred.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Contact Support</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For technical support or account issues, contact us at <a href="mailto:support@wiselook.ai" className="text-primary hover:underline">support@wiselook.ai</a>. We typically respond within 1–2 business days.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you have a helpdesk or knowledge base link, include it here for faster self-serve support.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Feedback and Feature Requests</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome your feedback. Share ideas or report bugs <a href="https://forms.gle/5AudQJ1SmDwoVE1G6" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a> or email <a href="mailto:product@wiselook.ai" className="text-primary hover:underline">product@wiselook.ai</a>.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">Additional Resources</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><a href="https://wiselook.ai/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
                  <li><a href="https://wiselook.ai/terms" className="text-primary hover:underline">Terms of Service</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;

