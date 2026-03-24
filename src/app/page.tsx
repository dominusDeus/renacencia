import { ActivitiesSection } from "@/components/landing/activities-section";
import { AboutSection } from "@/components/landing/about-section";
import { HeroSection } from "@/components/landing/hero-section";
import { LandingNavbar } from "@/components/landing/landing-navbar";
import { SeminarCta } from "@/components/landing/seminar-cta";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <LandingNavbar />
      <main>
        <HeroSection />
        <SeminarCta />
        <ActivitiesSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
