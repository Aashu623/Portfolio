import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "../ui/button";

// Import project images
import ecommerce from "@/assets/projects/ecommerce.png";
import quizapp from "@/assets/projects/quizapp.png";
import dreamfitness from "@/assets/projects/dreamfitness.png";
import holidayz from "@/assets/projects/holidayz.png";
import promanage from "@/assets/projects/promanage.png";
import GoldsGym from "@/assets/projects/GoldsGym.png";
import askher from "@/assets/projects/askher.png";

const projects = [
  {
    id: 1,
    title: "Brahmi Academy",
    description:
      "Built a full-stack e-commerce platform with Next.js 15, React 19, TypeScript, and MongoDB, enabling book sales, user authentication, cart, and order management.",
    image: ecommerce,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "RTK Query",
      "Radix UI",
      "MongoDB",
    ],
    live: "https://brahmiacademy.com/",
    featured: true,
  },
  
  {
    id: 2,
    title: "Code Fusion",
    description:
      "Code Fusion is created using MERN stack for online quiz competition.",
    image: quizapp,
    tech: ["React", "Node.js", "MongoDB", "Express", "Quiz App"],
    github: "https://github.com/Aashu623/Quiz-app",
    live: "https://codefusion-silk.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Dream Fitness",
    description: "A beautiful responsive home page for a local Gym.",
    image: dreamfitness,
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Aashu623/dream-fitness",
    live: "https://aashu623.github.io/dream-fitness/",
    featured: false,
  },
  {
    id: 4,
    title: "Holidayz",
    description: "This is a full responsive home page for a travel agency.",
    image: holidayz,
    tech: ["HTML", "CSS", "JavaScript", "Travel Website"],
    github: "https://github.com/Aashu623/Holidayz",
    live: "https://aashu623.github.io/Holidayz/",
    featured: false,
  },
  {
    id: 5,
    title: "Promanage",
    description:
      "This is a project Management tool. Users can login and manage their projects according to their needs.",
    image: promanage,
    tech: ["HTML", "CSS", "JavaScript", "Project Management"],
    github: "https://github.com/Aashu623/ProManage",
    live: "https://aashu623.github.io/ProManage/",
    featured: false,
  },
  {
    id: 6,
    title: "Gold's Gym Clone",
    description:
      "The design is fully responsive, ensuring seamless browsing across all devices.",
    image: GoldsGym,
    tech: ["HTML", "CSS", "JavaScript", "Gym Website"],
    github: "https://github.com/Aashu623/GoldGymClone",
    live: "https://aashu623.github.io/GoldGymClone/",
    featured: false,
  },
  {
    id: 7,
    title: "Ask Her Out",
    description: "A beautiful way to Ask your crush out.",
    image: askher,
    tech: ["HTML", "CSS", "JavaScript", "Fun Project"],
    github: "https://github.com/Aashu623/Ask-Her-Out-main",
    live: "https://aashu623.github.io/Ask-Her-Out-main/",
    featured: false,
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <div
      className="glass-card overflow-hidden scale-on-hover fade-in h-full flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="glass-button">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="glass-button">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-all duration-300">
            {project.title}
          </h3>
          {project.featured && (
            <span className="glass-card px-2 py-1 text-xs font-medium gradient-text">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="glass-card px-3 py-1 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" size="sm" className="glass-button w-full">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button size="sm" className="glass-button w-full">
              <Play className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">My Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Featured Projects</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              <span className="gradient-text">Other Projects</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + 2}
                  />
                ))}
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Aashu623"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="glass-button">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
