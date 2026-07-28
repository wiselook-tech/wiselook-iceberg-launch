import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "wiselook-consent";

type ConsentValue = "granted" | "denied";

const grantAnalyticsConsent = () => {
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    if (stored === "granted") {
      // Consent Mode resets to its "denied" default on every page load,
      // so a returning, already-consenting visitor needs to be re-granted.
      grantAnalyticsConsent();
      setVisible(false);
    } else if (stored === "denied") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    grantAnalyticsConsent();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 p-4 shadow-soft backdrop-blur-sm"
    >
      <div className="container mx-auto flex flex-col items-center gap-4 px-2 md:flex-row md:justify-between md:gap-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          We use analytics cookies to understand how visitors use the site. Read our{" "}
          <a href="/privacy/" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Decline
          </Button>
          <Button variant="hero" size="sm" onClick={handleAccept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
