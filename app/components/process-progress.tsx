"use client";

import { useEffect, useRef } from "react";

export function ProcessProgress({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let current = 0;
    let target = 0;
    const steps = Array.from(element.querySelectorAll<HTMLElement>(".process-path li"));

    const apply = () => {
      current += (target - current) * 0.16;
      if (Math.abs(target - current) < 0.001) current = target;
      element.style.setProperty("--process-progress", current.toFixed(4));
      steps.forEach((step, index) => {
        const threshold = index / Math.max(steps.length - 1, 1);
        step.classList.toggle("is-active", current >= threshold - 0.015 && current > 0.005);
      });

      if (current !== target) frame = window.requestAnimationFrame(apply);
      else frame = 0;
    };

    const update = () => {
      const bounds = element.getBoundingClientRect();
      if (window.innerWidth <= 820) {
        const marker = window.innerHeight * 0.62;
        target = Math.max(0, Math.min(1, (marker - bounds.top - 12) / Math.max(bounds.height - 24, 1)));
      } else {
        const start = window.innerHeight * 0.78;
        const finish = window.innerHeight * 0.3;
        target = Math.max(0, Math.min(1, (start - bounds.top) / (start - finish)));
      }
      if (!frame) frame = window.requestAnimationFrame(apply);
    };
    const schedule = () => {
      update();
    };

    element.classList.add("is-scroll-animated");
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      element.classList.remove("is-scroll-animated");
    };
  }, []);

  return <div className="process-progress-wrap" ref={sectionRef}>{children}</div>;
}
