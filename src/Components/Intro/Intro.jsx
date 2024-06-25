import React, { useEffect, useRef } from "react";
import "./intro.css";
import { GitHub, Instagram, Linkedin } from "react-feather";
import boy from "../../images/myPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import resume from "./Aashish_Kushwah_FullStack_Resume.pdf";
import Typed from "typed.js";
const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
        "Web Developer",
        "Programmer",
      ],
      typeSpeed: 20,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      id="intro"
      className="i-container container d-flex justify-content-between "
    >
      <div className="intro container d-flex align-item-center flex-wrap py-4">
        <div className="i-left ">
          <div className="i-name">
            <div className="heading-div">
              <h1 className="heading z-index-0" data-aos="fade-right">
                Hi ! I am
              </h1>
              <div className="dynamic-text w-100">
                <span className="text" ref={el}></span>
              </div>
            </div>
            <div className="about-div">
              <span className="about" data-aos="fade-up">
                I'm a recent graduate from LNCT University with a Master's
                degree in Computer Applications. I am passionate about software
                development and have honed my skills in both front-end and
                back-end technologies.
              </span>
            </div>
          </div>
          <a href={resume} download data-aos="fade-up" className="button">
            Download CV
          </a>
          <div data-aos="fade-up" className="i-icons">
            <a
              className="icon"
              href="https://github.com/Aashu623"
              target="blank"
            >
              <GitHub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/aashish-kushwah-78367424b/"
              target="blank"
            >
              <Linkedin />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/heart_hacker_ashu623/"
              target="blank"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img
            data-aos="fade-up"
            src={boy}
            alt=""
            style={{ minWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
