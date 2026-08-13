"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

export function SectionNavLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (!href.startsWith("/#") || window.location.pathname !== "/") return;

    const id = href.slice(2);
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <Link href={href} onClick={handleClick}>{children}</Link>;
}
