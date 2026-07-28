/** Smooth-scrolls the section with the given id into view. No-ops if it isn't in the DOM. */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}
