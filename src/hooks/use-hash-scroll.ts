import { useEffect } from "react";

/**
 * Honours a `#section` in the URL on first load. The router renders the page
 * after the browser has already tried (and failed) to find the anchor, so the
 * scroll is repeated once the sections are in the DOM.
 */
export function useHashScroll(): void {
  useEffect(() => {
    const { hash } = window.location;
    if (hash.length < 2) return;

    const element = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!element) return;

    // One frame later, so the section is laid out before we measure it.
    const frame = requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, []);
}
