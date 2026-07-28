const prefersReducedMotion = (): boolean => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls the section with the given id into view and records it in the URL, so
 * the position is shareable. Uses `replaceState` rather than `pushState`: same-page
 * anchor navigation shouldn't add a Back-button stop for every section visited —
 * pressing Back should leave the page, not step through the nav history. No-ops if
 * the section isn't in the DOM.
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;
  window.history.replaceState(null, "", `#${sectionId}`);
  element.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}
