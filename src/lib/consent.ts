import { useSyncExternalStore } from "react";

const CONSENT_KEY = "wiselook-consent";

export type ConsentValue = "granted" | "denied";

// localStorage can throw (Safari private mode, browser policies blocking Web
// Storage, storage quota, etc.). Reads fall back to "undecided"; writes fail
// silently — the in-page consent choice still applies for this session even
// if it can't be persisted.
export const readConsent = (): ConsentValue | null => {
  try {
    return localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
  } catch {
    return null;
  }
};

export const writeConsent = (value: ConsentValue) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Ignored: consent still applies in-page, it just won't persist.
  }
};

const clearConsent = () => {
  try {
    localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Ignored: same in-page-only caveat as above.
  }
};

/**
 * Tiny store (mirrors the sticky-cta pattern in src/lib/sticky-cta.ts) that
 * lets the footer's "Cookie preferences" link re-open the cookie banner
 * after it's already been dismissed, without prop-drilling through App or
 * SiteFooter.
 */
let reopenToken = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = (): number => reopenToken;

/** Subscribed by CookieConsent to know when it should re-show itself. */
export function useConsentReopenToken(): number {
  return useSyncExternalStore(subscribe, getSnapshot, () => 0);
}

/**
 * Called by the footer's "Cookie preferences" link: clears the stored
 * choice, immediately withdraws analytics consent if gtag has ever loaded,
 * and re-opens the banner so the visitor can choose again.
 */
export function withdrawConsent(): void {
  clearConsent();
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  reopenToken += 1;
  listeners.forEach((listener) => listener());
}
