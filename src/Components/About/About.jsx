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
              I am a Master's graduate in Computer Applications from LNCT University, 
              specializing in full-stack software development with a passion for 
              creating innovative digital solutions. My academic foundation, 
              combined with hands-on project experience, has equipped me with 
              comprehensive expertise across the software development lifecycle. 
              I possess strong proficiency in core programming languages including 
              C, C++, Python, and JavaScript, complemented by mastery of modern 
              web technologies such as HTML5, CSS3, Bootstrap, and Tailwind CSS.{" "}
              {isExpanded && (
                <>
                  My technical expertise encompasses contemporary JavaScript 
                  frameworks and libraries including React.js, Redux, and Node.js, 
                  alongside robust back-end development capabilities with Express.js 
                  and database management systems including MongoDB and SQL. Throughout 
                  my academic and project work, I have consistently demonstrated 
                  the ability to architect, develop, and deploy scalable applications 
                  that deliver exceptional user experiences while maintaining code 
                  quality and performance standards. I am proficient in industry-standard 
                  development tools and practices, including Git version control, 
                  collaborative development workflows, and modern IDE environments. 
                  Currently seeking opportunities to contribute my technical skills 
                  and innovative mindset to forward-thinking organizations where I 
                  can drive impactful solutions and continue my professional growth 
                  as a Software Engineer.
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
