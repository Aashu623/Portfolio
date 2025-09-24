import { Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    badge: "🏅",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    badge: "⚛️",
  },

  {
    name: "JavaScript Algorithms",
    issuer: "FreeCodeCamp",
    date: "2022",
    badge: "📜",
  },
  {
    name: "Introduction to Frontend Development",
    issuer: "Coursera",
    date: "2023",
    badge: "🌐",
  },
  {
    name: "Learn C++",
    issuer: "CodeChef",
    date: "2023",
    badge: "💻",
  },
  {
    name: "Basics of CPP",
    issuer: "Coding Ninjas",
    date: "2023",
    badge: "⚡",
  },
  {
    name: "SQL Basic",
    issuer: "HackerRank",
    date: "2023",
    badge: "🗄️",
  },
];

const honors = [
  {
    name: "National Agro Hackathon 2023 Finalist",
    issuer: "LNCT Hackathon Club",
    date: "2023",
    badge: "🏆",
    description: "Reached final round in national-level hackathon competition",
  },
  {
    name: "Quiz Competition Coordinator",
    issuer: "LNCT MCA Department",
    date: "2023",
    badge: "🎯",
    description: "Successfully coordinated department-level quiz competition",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications & Awards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements that validate my
              expertise
            </p>
          </div>

          {/* Certifications Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Professional Certifications</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="glass-card p-6 text-center scale-on-hover fade-in transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{cert.badge}</div>
                  <h4 className="font-semibold mb-2 text-sm">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Honors & Awards</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {honors.map((honor, index) => (
                <div
                  key={honor.name}
                  className="glass-card p-6 scale-on-hover fade-in transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{honor.badge}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{honor.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">
                        {honor.issuer}
                      </p>
                      <p className="text-xs text-primary font-medium mb-2">
                        {honor.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {honor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
