import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
  Monitor,
  Cpu,
} from "lucide-react";

const skills = {
  "Libraries & Frameworks": [
    { name: "React.js", icon: Globe, level: 95 },
    { name: "Next.js", icon: Globe, level: 90 },
    { name: "Redux", icon: Cloud, level: 75 },
    { name: "RTK Query", icon: Cloud, level: 70 },
    { name: "Radix UI", icon: Monitor, level: 80 },
    { name: "Tailwind CSS", icon: Monitor, level: 85 },
    { name: "HTML", icon: Globe, level: 90 },
    { name: "CSS", icon: Globe, level: 85 },
    { name: "Bootstrap", icon: Monitor, level: 80 },
  ],
  "Programming Languages": [
    { name: "JavaScript", icon: Code, level: 90 },
    { name: "TypeScript", icon: Code, level: 85 },
    { name: "C++", icon: Code, level: 85 },
    { name: "Python", icon: Code, level: 75 },
    { name: "C", icon: Code, level: 80 },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: GitBranch, level: 90 },
    { name: "GitHub", icon: GitBranch, level: 85 },
    { name: "VS Code", icon: Monitor, level: 90 },
    { name: "Jupyter Notebook", icon: Monitor, level: 75 },
    { name: "Jira", icon: Cloud, level: 80 },
    { name: "Slack", icon: Cloud, level: 85 },
    { name: "Postman", icon: Cloud, level: 80 },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: Cpu, level: 85 },
    { name: "Express", icon: Cpu, level: 80 },
    { name: "MongoDB", icon: Database, level: 85 },
    { name: "SQL", icon: Database, level: 80 },
    { name: "MySQL", icon: Database, level: 80 },
  ],
};

const SkillsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-rows-3">
            {Object.entries(skills).map(
              ([category, skillList], categoryIndex) => {
                // Determine row span based on category
                const isLargeSection =
                  category === "Libraries & Frameworks" ||
                  category === "Tools & Platforms";
                const rowSpan = isLargeSection ? "row-span-2" : "row-span-1";

                return (
                  <div
                    key={category}
                    className={`glass-card p-8 fade-in scale-on-hover ${rowSpan}`}
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {skillList.map((skill, skillIndex) => {
                        const IconComponent = skill.icon;
                        return (
                          <div key={skill.name} className="group">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 glass-card rounded-lg group-hover:scale-110 transition-all duration-300">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            {/* Skill Bar */}
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                              <div
                                className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out hover:scale-105"
                                style={{
                                  width: `${skill.level}%`,
                                  animationDelay: `${
                                    categoryIndex * 0.1 + skillIndex * 0.05
                                  }s`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold mb-6 text-muted-foreground">
              Also experienced with
            </h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "MERN Stack",
                "REST APIs",
                "Responsive Design",
                "Web Development",
                "Problem Solving",
                "Team Collaboration",
                "Version Control",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="glass-card px-4 py-2 text-sm font-medium fade-in scale-on-hover transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
