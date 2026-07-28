export const CALENDAR_URL = "https://calendar.app.google/EHMazdi37bBkGuwZ8";

/** Fires a GA4 `book_demo_click` event. No-ops if analytics hasn't loaded/consented. */
export function trackCtaClick(location: string): void {
  window.gtag?.("event", "book_demo_click", { location });
}
