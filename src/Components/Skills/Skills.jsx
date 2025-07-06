import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
  SiTypescript,
  SiWebpack,
  SiJest,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
        { icon: FaCss3, name: "CSS3", color: "#1572B6" },
        { icon: IoLogoJavascript, name: "JavaScript", color: "#F7DF1E" },
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiRedux, name: "Redux", color: "#764ABC" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: FaSass, name: "Sass", color: "#CC6699" },
        { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
        { icon: RiTailwindCssFill, name: "Tailwind", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: SiExpress, name: "Express", color: "#000000" },
        { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" },
        { icon: FaPython, name: "Python", color: "#3776AB" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { icon: SiCplusplus, name: "C++", color: "#00599C" },
        { icon: SiC, name: "C", color: "#A8B9CC" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { icon: FaGitAlt, name: "Git", color: "#F05032" },
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: VscVscode, name: "VS Code", color: "#007ACC" },
        { icon: SiPostman, name: "Postman", color: "#FF6C37" },
        { icon: SiWebpack, name: "Webpack", color: "#8DD6F9" },
        { icon: SiJest, name: "Jest", color: "#C21325" },
      ],
    },
  ];

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] bg-clip-text text-transparent" data-aos="fade-up">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center relative
                           after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-1/2 
                           after:transform after:-translate-x-1/2 after:w-12 after:h-0.5 
                           after:bg-gradient-to-r after:from-[#36D1DC] after:to-[#5B86E5]">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.03]
                               hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg
                               transition-all duration-300 cursor-pointer group"
                      style={{
                        "--skill-color": skill.color,
                      }}
                    >
                      <Icon
                        className="text-4xl transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-white/80 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
