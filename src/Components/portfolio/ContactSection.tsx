import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div className="glass-card p-8 fade-in scale-on-hover transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-lg group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        aashukushwah53678@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-lg group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">
                        Indore, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="glass-card p-3 rounded-lg group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 7000759525</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="glass-card p-8 fade-in scale-on-hover transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Aashu623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aashish-kushwah-78367424b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/____aashu.____/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:scale-110 transition-all duration-300 group"
                  >
                    <Twitter className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="glass-card p-8 fade-in scale-on-hover transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Send Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="glass-card border-glass-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="glass-card border-glass-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="Project discussion"
                    className="glass-card border-glass-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="glass-card border-glass-border focus:border-primary resize-none"
                  />
                </div>

                <Button className="glass-button w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
