import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ProjectsSection />
        <GlobalPresenceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
