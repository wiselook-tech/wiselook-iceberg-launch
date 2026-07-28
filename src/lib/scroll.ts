const prefersReducedMotion = (): boolean => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls the section with the given id into view and records it in the URL, so
 * the position is shareable and the back button behaves. No-ops if the section
 * isn't in the DOM.
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;
  window.history.pushState(null, "", `#${sectionId}`);
  element.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
}
