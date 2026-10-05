"use client";

import { useEffect } from "react";

/** Animate only visible WORKING dialogue rows; preserve visible content without JS. */
export default function WorkingChatReveal() {
  useEffect(() => {
    const section = document.getElementById("working");
    if (!section || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rows = Array.from(section.querySelectorAll<HTMLElement>(".dialogue-chat"));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    // Initial visibility is set before enabling animation to prevent a flash.
    rows.forEach((row) => {
      if (row.getBoundingClientRect().top < window.innerHeight * .88) row.classList.add("is-visible");
    });
    section.classList.add("finance-chat-motion-ready");
    rows.forEach((row) => { if (!row.classList.contains("is-visible")) observer.observe(row); });
    return () => { observer.disconnect(); section.classList.remove("finance-chat-motion-ready"); };
  }, []);
  return null;
}
