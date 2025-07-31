import { ArrowDown, Download, Github, Linkedin, Mail, Instagram, Eye } from "lucide-react";
import heroImage from "@/assets/hero-bg-dark.jpg";
import { Button } from "../ui/button";
import ResumeModal from "./ResumeModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 glass-card rounded-full float opacity-30" />
        <div className="absolute top-40 right-32 w-24 h-24 glass-card rounded-full float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-32 w-40 h-40 glass-card rounded-full float opacity-20" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="fade-in mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Hi! I am</span>
              <br />
              <span className="text-foreground">Aashish Kushwah</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm a passionate Full Stack Developer with a Master's degree in Computer Applications from LNCT University. Currently working as a Frontend Developer at Codescure Technology, I specialize in building scalable web applications using React.js, Next.js, and modern web technologies. I bring a unique blend of academic excellence and hands-on industry experience to every project.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.2s' }}>
            <ResumeModal>
              <Button className="glass-button group transition-all duration-300">
                <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-all duration-300" />
                View Resume
              </Button>
            </ResumeModal>
            <Button 
              variant="outline" 
              className="glass-button transition-all duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="fade-in flex justify-center space-x-6 mb-16" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/Aashu623" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover:scale-110 transition-all duration-300 group">
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/aashish-kushwah-78367424b/" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover:scale-110 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/____aashu.____/" target="_blank" rel="noopener noreferrer" className="glass-card p-3 hover:scale-110 transition-all duration-300 group">
              <Instagram className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;