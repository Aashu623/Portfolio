import React from "react";
import "./projects.css";
import holidayz from "../../images/holidayz.png";
import GoldsGym from "../../images/GoldsGym.png";
import landingpage from "../../images/landingpage.png";
import promanage from "../../images/promanage.png";
import ecommerce from "../../images/ecommerce.png";
import { FaCode, FaEye } from "react-icons/fa";

const Projects = () => {
  const Projects = [
    {
      id: 1,
      title: `Ecommerce`,
      dis: `This is a sample wesbite made by Me. Only with the purpose to learn MERN Stack.`,
      img: ecommerce,
      githubLink: `https://github.com/Aashu623/MERN`,
      liveLink: `https://mernfrontend-tau.vercel.app/`,
    },
    {
      id: 2,
      title: `Holidayz`,
      dis: `This is a full responsive home page for a travel agency.`,
      img: holidayz,
      githubLink: `https://github.com/Aashu623/Holidayz`,
      liveLink: `https://aashu623.github.io/Holidayz/`,
    },
    {
      id: 3,
      title: `Promanage`,
      dis: `This is a project Management tool. Users can login and manage their projects according to their needs.`,
      img: promanage,
      githubLink: `https://github.com/Aashu623/ProManage`,
      liveLink: `https://aashu623.github.io/ProManage/`,
    },
    {
      id: 4,
      title: `Gold's Gym Clone`,
      dis: `The design is fully responsive, ensuring seamless browsing across all devices.`,
      img: GoldsGym,
      githubLink: `https://github.com/Aashu623/GoldGymClone`,
      liveLink: `https://aashu623.github.io/GoldGymClone/`,
    },
    {
      id: 5,
      title: `FoodGPT`,
      dis: `A beautifull responsive home page for a Food ordering website.`,
      img: landingpage,
      githubLink: `https://github.com/Aashu623/OIBSIP-LANDING_PAGE/`,
      liveLink: `https://aashu623.github.io/OIBSIP-LANDING_PAGE/`,
    },
    {
      id: 6,
      title: `FoodGPT`,
      dis: `A beautifull responsive home page for a Food ordering website.`,
      img: landingpage,
      githubLink: `https://github.com/Aashu623/OIBSIP-LANDING_PAGE/`,
      liveLink: `https://aashu623.github.io/OIBSIP-LANDING_PAGE/`,
    },
  ];
  return (
    <div className="container" id="projects">
      <h1 className="component-heading">Recent Projects</h1>
      <div className="p-container d-flex flex-wrap w-100 gap-4">
        {Projects.map((props) => {
          return (
            <div
              key={props.id}
              data-aos="flip-left"
              className="project d-flex flex-column rounded justify-content-between px-3 py-2 overflow-hidden"
              style={{ minWidth: "300px", width: "30%", maxHeight: "50vh" }}
            >
              <div className="img-div overflow-hidden">
                <img src={props.img} alt="" className="w-100" />
              </div>
              <div className="d-flex flex-column gap-1 mt-2">
                <h5 className="fw-bold fst-italic ">{props.title}</h5>
                <p className="discription">{props.dis}</p>
                <div className="p-icons d-flex justify-content-around">
                  <a href={props.githubLink} target="blank">
                    <FaCode />
                  </a>
                  <a href={props.liveLink} target="blank">
                    <FaEye />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
