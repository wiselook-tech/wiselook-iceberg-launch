import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "wiselook-consent";

type ConsentValue = "granted" | "denied";

const grantAnalyticsConsent = () => {
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
};

// localStorage can throw (Safari private mode, browser policies blocking Web
// Storage, storage quota, etc.). Reads fall back to "undecided"; writes fail
// silently — the in-page consent choice below still applies for this
// session even if it can't be persisted.
const readConsent = (): ConsentValue | null => {
  try {
    return localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
  } catch {
    return null;
  }
};

const writeConsent = (value: ConsentValue) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Ignored: consent still applies in-page, it just won't persist.
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = readConsent();
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
    writeConsent("granted");
    grantAnalyticsConsent();
    setVisible(false);
  };

  const handleDecline = () => {
    writeConsent("denied");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      // bottom-[76px] keeps this clear of Index.tsx's mobile-only sticky CTA
      // (p-4 padding + a size="lg"/h-11 button = 76px tall, hidden at md+),
      // so the two fixed bottom bars never overlap on mobile.
      className="fixed inset-x-0 bottom-[76px] z-[60] border-t border-border bg-background/95 p-4 shadow-soft backdrop-blur-sm md:bottom-0"
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
