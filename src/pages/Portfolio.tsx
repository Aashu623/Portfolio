import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="glass-card mx-6 mb-6 p-6 text-center rounded-2xl">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Aashish Kushwah. Built with React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
