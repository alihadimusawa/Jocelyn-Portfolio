import { ContactSection } from "@/app/components/sections/contact-section";
import { HomeHero } from "@/app/components/sections/home-hero";
import { ProcessSection } from "@/app/components/sections/process-section";
import { ProfileSection } from "@/app/components/sections/profile-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";
import { ServicesSection } from "@/app/components/sections/services-section";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <ProjectsSection />
      <ProfileSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
