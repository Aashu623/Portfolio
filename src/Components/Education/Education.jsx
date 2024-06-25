import React from "react";
import "./Education.css";
import { IoIosBook, IoIosTime } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Education() {
  const educations = [
    {
      duration: "2015-16",
      degree: "High school",
      school: "SVP High School",
      location: "Bareth",
    },
    {
      duration: "2017-18",
      degree: "Higher Secondary",
      school: "Govt. Higher Secondary School",
      location: "Bareth",
    },
    {
      duration: "2018-21",
      degree: "Bachelors of Science (CS)",
      school: "SGS PG College",
      location: "Ganjbasoda",
    },
    {
      duration: "2022-24",
      degree: "Masters of Computer Application",
      school: "LNCT University",
      location: "Bhopal",
    },
  ];
  return (
    <>
      <div className="container my-4" id="education">
        <h1 className="component-heading">Education</h1>
        <div
          className="education d-flex flex-wrap justify-content-center align-item-center gap-2 m-auto gap-2"
          style={{ width: "90%" }}
        >
          {educations.map((education) => {
            return (
              <div
                className="education-card d-flex flex-column rounded gap-3 px-3 py-1 justify-content-around"
                data-aos="flip-down"
                style={{ minHeight: "32vh", flex: 1 }}
              >
                <div className="d-flex gap-2 degree">
                  <span>
                    <IoIosBook
                      style={{ fill: "#0f2f3a", fontSize: "1.2rem" }}
                    />
                  </span>
                  <span style={{ color: "#0f2f3a" }}>{education.degree}</span>
                </div>
                <div className="d-flex gap-2 duration">
                  <span>
                    <IoIosTime
                      style={{ fill: "#0f2f3a", fontSize: "1.2rem" }}
                    />
                  </span>
                  <span style={{ color: "#0f2f3a" }}>{education.duration}</span>
                </div>

                <div className="d-flex gap-2 school">
                  <span>
                    <FaUniversity
                      className="icon"
                      style={{ fill: "#0f2f3a", fontSize: "1.2rem" }}
                    />
                  </span>
                  <span style={{ color: "#0f2f3a" }}>{education.school}</span>
                </div>
                <div className="d-flex gap-2 location">
                  <span>
                    <FaLocationDot
                      className="icon"
                      style={{ fill: "#0f2f3a", fontSize: "1.2rem" }}
                    />
                  </span>
                  <span style={{ color: "#0f2f3a" }}>{education.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
