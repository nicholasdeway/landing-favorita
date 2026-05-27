"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
      const doScroll = (targetId: string) => {
        // Delay to ensure the DOM is fully painted before measuring positions
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            let headerOffset = window.innerWidth >= 1024 ? 128 : 96;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: "smooth"
            });
          }
        }, 300);
        return timer;
      };

      // 1. Check session storage FIRST (from other pages intercepting the click)
      const sessionTarget = sessionStorage.getItem("scrollTo");
      if (sessionTarget) {
        sessionStorage.removeItem("scrollTo");
        const timer = doScroll(sessionTarget);
        return () => clearTimeout(timer);
      }
      
      // 2. Check URL hash SECOND (if user typed it directly or refreshed)
      if (typeof window !== "undefined" && window.location.hash) {
        const targetId = window.location.hash.substring(1);
        
        // Remove the hash from the URL instantly so the user doesn't see it blink
        window.history.replaceState(null, "", window.location.pathname);
        
        const timer = doScroll(targetId);
        return () => clearTimeout(timer);
      }
  }, []);

  return null;
}
