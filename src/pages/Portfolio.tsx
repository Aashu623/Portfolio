import HeroSection from "@/Components/portfolio/HeroSection";
import ExperienceSection from "@/Components/portfolio/ExperienceSection";
import SkillsSection from "@/Components/portfolio/SkillsSection";
import ProjectsSection from "@/Components/portfolio/ProjectsSection";
import CertificationsSection from "@/Components/portfolio/CertificationsSection";
import ContactSection from "@/Components/portfolio/ContactSection";

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
          © {new Date().getFullYear()} Aashish Kushwah. Built with React &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
