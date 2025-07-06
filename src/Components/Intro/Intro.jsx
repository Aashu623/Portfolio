import React, { useEffect, useRef } from "react";
import { GitHub, Instagram, Linkedin } from "react-feather";
import boy from "../../images/myPic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import resume from "./Aashish_Kushwah_mern_fresher.pdf";
import Typed from "typed.js";

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "UI/UX Designer",
        "Problem Solver"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center py-24 px-8 relative overflow-hidden bg-vscode-bg" id="intro">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble-container">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className={`bubble absolute rounded-full bg-gradient-to-r from-vscode-accent/10 to-vscode-highlight/10
                         animate-float-bubble${i + 1}`}
              style={{
                '--bubble-size': `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-8" data-aos="fade-right">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-vscode-accent m-0">Hi there! 👋</h1>
            <h2 className="text-5xl font-bold m-0 bg-gradient-to-r from-vscode-accent to-vscode-highlight bg-clip-text text-transparent">
              I'm Aashish Kushwah
            </h2>
            <div className="min-h-[3rem] flex items-center">
              <span ref={el} className="typed-text text-vscode-secondary"></span>
            </div>
            <p className="text-lg text-vscode-text">
              I'm a recent graduate from LNCT University with a Master's
              degree in Computer Applications. I am passionate about creating
              beautiful, functional, and user-friendly digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <a 
              href={resume} 
              download 
              className="w-fit px-8 py-3 bg-gradient-to-r from-vscode-accent to-vscode-highlight text-vscode-text rounded-full 
                       hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </a>
            <div className="flex gap-6">
              <a
                href="https://github.com/Aashu623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-text hover:text-vscode-accent transform hover:scale-110 transition-all duration-300"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/aashish-kushwah-78367424b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-text hover:text-vscode-accent transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/heart_hacker_ashu623/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-text hover:text-vscode-accent transform hover:scale-110 transition-all duration-300"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center" data-aos="fade-left">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            <img 
              src={boy} 
              alt="Aashish Kushwah" 
              className="w-full h-full object-cover rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-xl 
                       animate-morph"
            />
            <div className="absolute inset-0 -m-2 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
                          bg-gradient-to-r from-vscode-accent/20 to-vscode-highlight/20 -z-10 
                          animate-morph [animation-delay:1000ms]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
