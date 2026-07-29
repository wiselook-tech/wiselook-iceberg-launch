// Minimal typing for the Google `gtag.js` global loaded in index.html.
// Covers the commands this app actually sends (config, consent, event).
export {};

type GtagCommand = "config" | "consent" | "event" | "js" | "set";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (command: GtagCommand, ...args: unknown[]) => void;
  }
}
