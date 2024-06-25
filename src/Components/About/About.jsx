import React, { useState } from "react";
import "./About.css";
import setup from "../../images/setup.jpeg";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="container my-4" id="about">
        <h1 className="component-heading">About Me</h1>
        <div className="inner-container d-flex gap-1 flex-wrap">
          <div className="left d-flex align-items-center justify-content-center">
            <img
              src={setup}
              alt="Aashish Kushwah"
              style={{ minWidth: "300px" }}
            />
          </div>
          <div className="right">
            <p>
              Hello! I'm a recent graduate from LNCT University with a Master's
              degree in Computer Applications. I am passionate about software
              development and have honed my skills in both front-end and
              back-end technologies. My goal is to become a proficient Software
              Developer or Full Stack Developer. I have a strong foundation in
              programming languages such as C, C++, Python, and JavaScript, and
              am adept at using web technologies including HTML, CSS, Bootstrap,
              and Tailwind.{" "}
              {isExpanded && (
                <>
                  My expertise extends to modern JavaScript frameworks and
                  libraries such as React, Redux, and Node.js, as well as
                  back-end development with Express.js and databases like
                  MongoDB and SQL. Throughout my academic journey, I have
                  undertaken several projects that showcase my ability to
                  develop functional and visually appealing applications.I am
                  proficient in using development tools such as Git, GitHub, VS
                  Code, and many others, which aid in version control and
                  collaborative development. I am actively seeking a role where
                  I can contribute my skills and grow as a Software Developer. I
                  am eager to work on challenging projects and be part of a
                  dynamic team where I can continue to learn and make a
                  meaningful impact.
                </>
              )}
            </p>
            <span onClick={toggleReadMore} style={{ cursor: "Pointer" }}>
              {isExpanded ? "Read Less" : "Read More..."}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
