import React, { useState } from "react";
import "./navbar.css";
import { useScrollingContext } from "../ScrollingContext";
import logo from "../../img/crown.png";
import { Menu, X } from "react-feather";

function Navbar({ colorChange }) {
  const { introRef, projectsRef, techRef, contactRef } = useScrollingContext();

  const scrollToIntro = () => {
    handleCrossClick();
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjects = () => {
    handleCrossClick();
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToTech = () => {
    handleCrossClick();
    if (techRef.current) {
      techRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContact = () => {
    handleCrossClick();
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [navbar, setNavbar] = useState("nav-list");
  const [isShow, setIsShow] = useState(false);
  const handleMenuClick = () => {
    setIsShow(true);
    setNavbar("nav-list show");
  };
  const handleCrossClick = () => {
    setIsShow(false);
    setNavbar("nav-list");
  };

  return (
    <header className={colorChange ? "navbar colorChange" : "navbar"}>
      <div className="name">
        <img className="img" src={logo} alt="" />
        <span className="my-name">Aashish Kushwah</span>
      </div>
      <div className={navbar}>
        <ul className="list">
          <li className="list-item" onClick={scrollToIntro}>
            Home
          </li>
          <li className="list-item" onClick={scrollToIntro}>
            About
          </li>
          <li className="list-item" onClick={scrollToTech}>
            Skills
          </li>
          <li className="list-item" onClick={scrollToProjects}>
            Projects
          </li>
          <button className="button" onClick={scrollToContact}>
            Contact Me
          </button>
        </ul>
      </div>
      <div className="menu">
        {isShow ? (
          <X onClick={handleCrossClick} />
        ) : (
          <Menu className="menu" onClick={handleMenuClick} />
        )}
      </div>
    </header>
  );
}
export default Navbar;
