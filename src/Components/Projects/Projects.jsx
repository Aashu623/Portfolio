import React from "react";
import holidayz from "../../images/holidayz.png";
import GoldsGym from "../../images/GoldsGym.png";
import promanage from "../../images/promanage.png";
import ecommerce from "../../images/ecommerce.png";
import askher from "../../images/askher.png";
import dreamfitness from "../../images/dreamfitness.png";
import quizapp from "../../images/quizapp.png";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce Platform",
      description:
        "A full-featured MERN stack ecommerce platform with user authentication, product management, and cart functionality.",
      image: ecommerce,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/Aashu623/E-commerce",
      liveLink: "https://aashu623.github.io/E-commerce/",
    },
    {
      id: 2,
      title: "Code Fusion",
      description:
        "An interactive online quiz platform built with MERN stack for coding competitions and assessments.",
      image: quizapp,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/Aashu623/Quiz-app",
      liveLink: "https://codefusion-silk.vercel.app/",
    },
    {
      id: 3,
      title: "Dream Fitness",
      description:
        "A modern, responsive landing page for a fitness center with smooth animations and intuitive navigation.",
      image: dreamfitness,
      tech: ["React", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Aashu623/dream-fitness",
      liveLink: "https://aashu623.github.io/dream-fitness/",
    },
    {
      id: 4,
      title: "Holidayz",
      description:
        "A responsive travel agency website with beautiful UI and seamless booking experience.",
      image: holidayz,
      tech: ["React", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Aashu623/Holidayz",
      liveLink: "https://aashu623.github.io/Holidayz/",
    },
    {
      id: 5,
      title: "Promanage",
      description:
        "A project management tool with user authentication and real-time project tracking capabilities.",
      image: promanage,
      tech: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/Aashu623/ProManage",
      liveLink: "https://aashu623.github.io/ProManage/",
    },
    {
      id: 6,
      title: "Gold's Gym Clone",
      description:
        "A responsive gym website clone with modern design and seamless user experience.",
      image: GoldsGym,
      tech: ["React", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Aashu623/GoldGymClone",
      liveLink: "https://aashu623.github.io/GoldGymClone/",
    },
    {
      id: 7,
      title: "Ask Her Out",
      description:
        "A creative and interactive way to ask someone out, featuring engaging animations.",
      image: askher,
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/Aashu623/Ask-Her-Out-main",
      liveLink: "https://aashu623.github.io/Ask-Her-Out-main/",
    },
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent" data-aos="fade-up">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(54,209,220,0.2)]"
              data-aos="fade-up"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0e2a47]/80 flex items-center justify-center 
                              opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-[#36D1DC] hover:scale-110 transition-all duration-300"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-[#36D1DC] hover:scale-110 transition-all duration-300"
                      title="Live Demo"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[#36D1DC]/20 to-[#5B86E5]/20 
                               text-[#36D1DC] rounded-full border border-[#36D1DC]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
