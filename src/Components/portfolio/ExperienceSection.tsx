import { Calendar, GraduationCap, Award, Code, Briefcase } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Frontend Developer",
    organization: "Codescure Technology",
    location: "Indore, India",
    date: "Oct 2024 - Present",
    description: "Spearheading the development of enterprise-level web applications using React.js and Next.js, with a focus on performance optimization and user experience excellence. Leading cross-functional collaboration with designers and backend teams to deliver scalable, maintainable solutions. Implementing best practices in code quality, testing methodologies, and component architecture to ensure robust application development.",
    icon: Briefcase
  },
  {
    type: "work",
    title: "Frontend Intern",
    organization: "Codescure Technology",
    location: "Indore, India",
    date: "July 2024 - Sep 2024",
    description: "Contributed to the development of responsive web applications utilizing React.js and Next.js frameworks. Collaborated with senior developers to implement modern UI/UX patterns and ensure cross-browser compatibility. Participated in code reviews, testing procedures, and debugging processes to maintain high-quality standards and enhance user experience.",
    icon: Briefcase
  },
  {
    type: "education",
    title: "Masters of Computer Application",
    organization: "LNCT University",
    location: "Bhopal, India",
    date: "2022 - 2024",
    description: "Advanced degree specializing in software engineering, database systems, and modern web development technologies. Comprehensive curriculum covering full-stack development, system architecture, and software project management methodologies.",
    icon: GraduationCap
  },
  {
    type: "education",
    title: "Bachelors of Science (CS)",
    organization: "SGS PG College",
    location: "Ganjbasoda, India",
    date: "2018 - 2021",
    description: "Foundation degree in Computer Science with emphasis on programming fundamentals, data structures, algorithms, and software engineering principles. Developed strong analytical and problem-solving skills through hands-on projects and theoretical coursework.",
    icon: GraduationCap
  }
];



const TimelineItem = ({ item, index }: { item: typeof timeline[0], index: number }) => {
  const IconComponent = item.icon;
  const isLeft = index % 2 === 0;
  const isWork = item.type === "work";

  return (
    <div className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-primary opacity-30" />
      
      {/* Timeline Node */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center z-10 ${
        isWork ? 'border-2 border-primary' : ''
      }`}>
        <IconComponent className={`w-6 h-6 ${isWork ? 'text-primary' : 'text-primary'}`} />
      </div>

      {/* Content Card */}
      <div 
        className={`glass-card p-6 max-w-lg scale-on-hover fade-in transition-all duration-300 ease-in-out ${
          isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'
        } ${isWork ? 'border-l-4 border-primary' : ''}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-sm text-primary font-medium">{item.date}</span>
            <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            <p className="text-muted-foreground font-medium">{item.organization}</p>
            <p className="text-sm text-muted-foreground">{item.location}</p>
            {isWork && (
              <span className="inline-block mt-2 px-2 py-1 text-xs font-medium glass-card gradient-text">
                {item.type === "work" ? "Work Experience" : "Education"}
              </span>
            )}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Experience & Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in technology and continuous learning
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;