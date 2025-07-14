import React, { useState } from "react";
import "./navbar.css";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Navbar() {
  const [navbar, setNavbar] = useState("");
  const [isShow, setIsShow] = useState(false);
  const handleMenuClick = () => {
    setIsShow(true);
    setNavbar(" show");
  };
  const handleCrossClick = () => {
    setIsShow(false);
    setNavbar("");
  };

  return (
    <header
      className="d-flex align-items-center justify-content-between py-2 gap-2"
      id="navbar"
    >
      <a className="arrow" href="#intro">
        <FaArrowAltCircleUp />
      </a>
      <span className="my-name">Aashish Kushwah</span>
      <ul className={`nav-list ${navbar}`}>
        <li className="list-item">
          <a href="#about" onClick={handleCrossClick}>
            About
          </a>
        </li>
        <li className="list-item">
          <a href="#skills" onClick={handleCrossClick}>
            Skills
          </a>
        </li>
        <li className="list-item">
          <a href="#education" onClick={handleCrossClick}>
            Education
          </a>
        </li>
        <li className="list-item">
          <a href="#projects" onClick={handleCrossClick}>
            Projects
          </a>
        </li>
        <li className="list-item">
          <a href="#contact" onClick={handleCrossClick}>
            Contact Me
          </a>
        </li>
      </ul>
      <div className="menu">
        {isShow ? (
          <ImCross onClick={handleCrossClick} />
        ) : (
          <TiThMenu className="menu" onClick={handleMenuClick} />
        )}
      </div>
    </header>
  );
}
export default Navbar;
