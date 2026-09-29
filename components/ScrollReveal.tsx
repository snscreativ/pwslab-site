"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./ScrollReveal.module.css";

type ScrollRevealProps = ComponentPropsWithoutRef<"div"> & {
  revealId: string;
  as?: "div" | "article";
};

export default function ScrollReveal({
  children,
  className = "",
  revealId,
  as: Tag = "div",
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    // Original RTR behavior: reveal on entry, then stop observing this element.
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    observer.observe(element);

    const showImmediately = () => {
      setVisible(true);
      observer.disconnect();
    };
    const onMotionChange = () => { if (motion.matches) showImmediately(); };
    element.addEventListener("focusin", showImmediately);
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", showImmediately);
      motion.removeEventListener("change", onMotionChange);
    };
  }, [revealId]);

  return (
    <Tag
      ref={ref}
      className={`${styles["c-scroll-reveal"]} ${className}`.trim()}
      {...props}
      data-reveal={visible ? "visible" : "pending"}
    >
      <noscript>
        <style>{`.${styles["c-scroll-reveal"]} { opacity: 1 !important; translate: none !important; }`}</style>
      </noscript>
      {children}
    </Tag>
  );
}
