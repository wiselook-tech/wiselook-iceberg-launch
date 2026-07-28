import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useStickyCtaVisible } from "@/lib/sticky-cta";
import { loadAnalytics } from "@/lib/analytics";
import { readConsent, useConsentReopenToken, writeConsent } from "@/lib/consent";

const grantAnalyticsConsent = () => {
  window.gtag?.("consent", "update", { analytics_storage: "granted" });
};

const denyAnalyticsConsent = () => {
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const stickyCtaVisible = useStickyCtaVisible();
  const reopenToken = useConsentReopenToken();

  useEffect(() => {
    const stored = readConsent();
    if (stored === "granted") {
      // gtag.js is only ever injected once consent is known, and Consent
      // Mode resets to its "denied" default on every page load — so a
      // returning, already-consenting visitor needs both steps repeated.
      loadAnalytics();
      grantAnalyticsConsent();
      setVisible(false);
    } else if (stored === "denied") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  // Re-show the banner when the footer's "Cookie preferences" link fires
  // (reopenToken starts at 0 and only changes after that link is clicked).
  useEffect(() => {
    if (reopenToken === 0) return;
    setVisible(true);
  }, [reopenToken]);

  const handleAccept = () => {
    writeConsent("granted");
    loadAnalytics();
    grantAnalyticsConsent();
    setVisible(false);
  };

  const handleDecline = () => {
    writeConsent("denied");
    denyAnalyticsConsent();
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className={cn(
        "fixed inset-x-0 z-[60] border-t border-border bg-background/95 p-4 shadow-soft backdrop-blur-sm md:bottom-0",
        // The mobile-only sticky CTA is 76px tall (p-4 padding + a size="lg"/h-11
        // button) and slides in once the hero scrolls away. Lift the banner over it
        // while it is on screen so the two fixed bottom bars never overlap.
        stickyCtaVisible ? "bottom-[76px]" : "bottom-0",
      )}
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
