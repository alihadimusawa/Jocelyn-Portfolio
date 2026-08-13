"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { SectionNavLink } from "./section-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      setScrolled(window.scrollY > 18);
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`global-header${scrolled ? " is-scrolled" : ""}`}>
      <Logo />

      <nav className="header-nav" aria-label="Main navigation">
        <SectionNavLink href="/#projects">Projects</SectionNavLink>
        <SectionNavLink href="/#profile">Profile</SectionNavLink>
        <SectionNavLink href="/#services">Services</SectionNavLink>
        <SectionNavLink href="/#contact">Contact</SectionNavLink>
      </nav>

      <a className="header-email" href="mailto:jocelynquinella@gmail.com">
        Start a project <span aria-hidden="true">↗</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>

      <div
        className={`mobile-navigation${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <SectionNavLink href="/#projects" onNavigate={closeMenu}>Projects</SectionNavLink>
          <SectionNavLink href="/#profile" onNavigate={closeMenu}>Profile</SectionNavLink>
          <SectionNavLink href="/#services" onNavigate={closeMenu}>Services</SectionNavLink>
          <SectionNavLink href="/#contact" onNavigate={closeMenu}>Contact</SectionNavLink>
        </nav>
        <p>Interior design · Bandung</p>
      </div>

      <div
        className="scroll-progress"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}
