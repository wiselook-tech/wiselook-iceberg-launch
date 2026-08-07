export const CALENDAR_URL = "https://calendar.app.google/EHMazdi37bBkGuwZ8";

/** Live status of every compliance framework we pursue, on our Trust Center. */
export const TRUST_CENTER_URL = "https://wiselook.eu.trust.site/";

/** Fires a GA4 `book_demo_click` event. No-ops if analytics hasn't loaded/consented. */
export function trackCtaClick(location: string): void {
  window.gtag?.("event", "book_demo_click", { location });
}
