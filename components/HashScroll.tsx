"use client";

import { useEffect, useRef } from "react";

export default function HashScroll() {
  // useRef persists across React Strict Mode double-invocation of useEffect.
  // Without this, run-1 removes the sessionStorage key, cleanup cancels the
  // timeout, and run-2 finds nothing → no scroll ever happens in development.
  const targetRef = useRef<string | null>(null);

  useEffect(() => {
    // Capture on first run only; ref survives the cleanup/re-run cycle.
    if (targetRef.current === null) {
      const sessionTarget = sessionStorage.getItem("scrollTo");
      if (sessionTarget) {
        sessionStorage.removeItem("scrollTo");
        targetRef.current = sessionTarget;
      } else if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        window.history.replaceState(null, "", window.location.pathname);
        targetRef.current = hash;
      }
    }

    const targetId = targetRef.current;
    if (!targetId) return;

    let attempts = 0;
    const maxAttempts = 20; // retry every 100ms, up to 2s total
    let timerId: ReturnType<typeof setTimeout>;

    const tryScroll = () => {
      attempts++;

      const element = document.getElementById(targetId);
      if (!element) {
        if (attempts < maxAttempts) timerId = setTimeout(tryScroll, 100);
        return;
      }

      const headerOffset = window.innerWidth >= 1024 ? 128 : 96;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetScroll = Math.max(0, elementPosition - headerOffset);

      // Page hasn't fully laid out yet — retry
      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (targetScroll > 50 && maxScrollable < targetScroll) {
        if (attempts < maxAttempts) timerId = setTimeout(tryScroll, 100);
        return;
      }

      // Use an instant jump (no smooth animation) so the page lands at the
      // target while the PageLoader is still fading — the user never sees it.
      const lenis = (window as any).globalLenis;
      if (lenis) {
        lenis.scrollTo(element, {
          offset: -headerOffset,
          immediate: true,
          force: true,
        });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "instant" });
      }
    };

    // First attempt after PageLoader finishes fading (600ms + buffer)
    timerId = setTimeout(tryScroll, 700);
    return () => clearTimeout(timerId);
  }, []);

  return null;
}
