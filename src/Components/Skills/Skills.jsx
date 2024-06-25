import React from "react";
import "./Skills.css";
import {
  SiCplusplus,
  SiC,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiPostman,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import Tooltip from "@mui/material/Tooltip";

function Skills() {
  const skills = [
    { icon: SiCplusplus, name: "CPP" },
    { icon: SiC, name: "C" },
    { icon: SiMysql, name: "MySql" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiExpress, name: "ExpressJs" },
    { icon: SiRedux, name: "ReduxJs" },
    { icon: FaHtml5, name: "HTML" },
    { icon: FaCss3, name: "CSS" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "NodJs" },
    { icon: FaPython, name: "Python" },
    { icon: FaBootstrap, name: "Bootstrap" },
    { icon: IoLogoJavascript, name: "Javascript" },
    { icon: RiTailwindCssFill, name: "Tailwind" },
    { icon: SiPostman, name: "Postman" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaGithub, name: "Github" },
    { icon: VscVscode, name: "VS Code" },
  ];

  return (
    <>
      <div className="skills-container container" id="skills">
        <h1 className="component-heading">Skills</h1>
        <div className="skills d-flex flex-wrap gap-5 w-100 justify-content-center ">
          {skills.map((skill) => {
            return (
              <div className="border rounded skill" data-aos="zoom-in">
                <Tooltip title={skill.name} placement="top">
                  <div className="p-3 rounded ">
                    {" "}
                    {<skill.icon className="skill-icon" />}
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
