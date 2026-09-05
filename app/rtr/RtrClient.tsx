"use client";

import { useEffect } from "react";

export default function RtrClient() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".rtr-page");
    if (!root) return;

    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    items.forEach((el) => el.classList.add("rtr-animate"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    items.forEach((el) => observer.observe(el));

    const toTop = document.querySelector<HTMLButtonElement>(".rtr-to-top");
    const onScroll = () => toTop?.classList.toggle("show", window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const click = () => window.scrollTo({ top: 0, behavior: "smooth" });
    toTop?.addEventListener("click", click);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      toTop?.removeEventListener("click", click);
    };
  }, []);

  return null;
}
