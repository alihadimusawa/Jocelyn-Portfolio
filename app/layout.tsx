import type { Metadata, Viewport } from "next";
import { AmbientBackground } from "./components/ambient-background";
import { MotionInit } from "./components/motion-init";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Jocelyn Quinella — Interior Designer",
    template: "%s — Jocelyn Quinella",
  },
  description:
    "Portfolio of Jocelyn Quinella, a Bandung-based interior designer and BINUS University student.",
};

export const viewport: Viewport = {
  themeColor: "#F5F5F2",
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
