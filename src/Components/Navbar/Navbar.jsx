import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsShow(true);
  };

  const handleCrossClick = () => {
    setIsShow(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? 'bg-vscode-bg shadow-md' : 'bg-vscode-bg/20 backdrop-blur-md'
      }`}>
        <span className="text-3xl font-bold bg-gradient-to-r from-vscode-accent to-vscode-highlight bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Aashish Kushwah
        </span>

        <nav className={`nav-menu ${isShow ? 'show' : ''}`}>
          <ul className="flex gap-8 list-none m-0 p-0 md:flex-row flex-col items-center">
            <li>
              <a href="#about" onClick={handleCrossClick} className="text-vscode-text text-lg font-medium px-4 py-2 rounded transition-all duration-300 relative hover:text-vscode-accent">
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleCrossClick} className="text-vscode-text text-lg font-medium px-4 py-2 rounded transition-all duration-300 relative hover:text-vscode-accent">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleCrossClick} className="text-vscode-text text-lg font-medium px-4 py-2 rounded transition-all duration-300 relative hover:text-vscode-accent">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleCrossClick} className="text-vscode-text text-lg font-medium px-4 py-2 rounded transition-all duration-300 relative hover:text-vscode-accent">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-2xl text-vscode-text cursor-pointer md:block hidden">
          {isShow ? (
            <ImCross onClick={handleCrossClick} />
          ) : (
            <TiThMenu onClick={handleMenuClick} />
          )}
        </div>
      </header>

      {/* Scroll to Top Button - Fixed at bottom */}
      <a
        href="#intro"
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-vscode-accent to-vscode-highlight text-vscode-text rounded-full 
                 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 z-50"
      >
        <FaArrowAltCircleUp className="text-2xl" />
      </a>
    </>
  );
}

export default Navbar;
