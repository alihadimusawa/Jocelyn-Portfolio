import type { Metadata, Viewport } from "next";
import { AmbientBackground } from "./components/ambient-background";
import { MotionInit } from "./components/motion-init";
import { SiteHeader } from "./components/site-header";
import { person } from "./data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s — ${person.name}`,
  },
  description:
    `Portfolio of ${person.name}, a ${person.city}-based interior designer and BINUS University student.`,
};

export const viewport: Viewport = {
  themeColor: "#F5EFC6",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <AmbientBackground />
        <SiteHeader />
        {children}
        <MotionInit />
      </body>
    </html>
  );
}
