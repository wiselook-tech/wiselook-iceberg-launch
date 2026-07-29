import { useSyncExternalStore } from "react";

/**
 * Tiny store shared by the mobile sticky CTA (rendered inside the landing page)
 * and the cookie banner (rendered in App). Both are fixed to the bottom edge on
 * mobile, so the banner needs to know when the CTA is on screen.
 */
let visible = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getSnapshot = (): boolean => visible;

/** Called by the sticky CTA whenever it slides in or out. */
export function setStickyCtaVisible(next: boolean): void {
  if (next === visible) return;
  visible = next;
  listeners.forEach((listener) => listener());
}

/** Subscribes to whether the mobile sticky CTA is currently on screen. */
export function useStickyCtaVisible(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
