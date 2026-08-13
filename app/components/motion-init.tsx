"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionInit() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let observer: IntersectionObserver | null = null;
    let frame = 0;
    let timeout = 0;

    const show = (item: Element) => {
      item.classList.add("is-visible");
      observer?.unobserve(item);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("motion-ready");
      items.forEach(show);
      return;
    }

    root.classList.add("motion-ready");
    const revealVisibleItems = () => {
      items.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
          show(item);
        }
      });
    };

    const scheduleScan = () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => {
          revealVisibleItems();
          frame = 0;
        });
      });
      timeout = window.setTimeout(revealVisibleItems, 120);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    items.forEach((item) => observer?.observe(item));
    scheduleScan();
    window.addEventListener("hashchange", scheduleScan);
    window.addEventListener("pageshow", scheduleScan);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      observer?.disconnect();
      window.removeEventListener("hashchange", scheduleScan);
      window.removeEventListener("pageshow", scheduleScan);
    };
  }, [pathname]);

  return null;
}
