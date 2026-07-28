const GA_MEASUREMENT_ID = "G-M5L6JSSDW7";

let loaded = false;

/**
 * Injects gtag.js and fires the initial `js`/`config` calls.
 *
 * index.html only sets up the `dataLayer` array and the consent-default
 * shim (`analytics_storage: 'denied'`) — it never loads gtag.js itself.
 * That means no request ever reaches googletagmanager.com until this
 * function runs, which CookieConsent only does after the visitor has
 * granted analytics consent (or on mount, if a prior session's grant is
 * still stored). `window.gtag` already exists as the queueing shim before
 * this runs, so the `js`/`config` calls below just push into `dataLayer`;
 * gtag.js drains that queue in order once the injected script loads.
 */
export function loadAnalytics(): void {
  if (loaded) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID);
}
