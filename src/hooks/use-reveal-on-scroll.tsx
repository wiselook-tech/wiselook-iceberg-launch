import { useEffect } from 'react';

/**
 * Observes all elements with `.animate-reveal` and adds `.is-visible`
 * when they enter the viewport, triggering a CSS fade-up transition.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
