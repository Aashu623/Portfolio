import React, { useEffect } from "react";
import "./footer.css";
import Wave from "../../img/wave.png";
import { Facebook, GitHub, Instagram } from "react-feather";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <img src={Wave} alt="img" style={{ width: "100%", height: "200px" }} />
      <div className="f-content">
        <div className="social">
          <p>Get connected </p>
          <div className="f-icons">
            <a
              href="https://www.instagram.com/heart_hacker_ashu623/"
              target="blank"
            >
              <Instagram size="1.5rem" color="black" />
            </a>
            <a href="https://www.facebook.com/aashu623" target="blank">
              <Facebook size="1.5rem" color="black" />
            </a>
            <a href="https://github.com/Aashu623" target="blank">
              <GitHub size="1.5rem" color="black" />
            </a>
          </div>
        </div>
        <div className="f-connect">
          <p>
            Email me : <span>aashukushwah53678@gmail.com</span>
          </p>
          <p>
            Call me : <span>+91-7000759525</span>
          </p>
        </div>
        <div className="copyright">
          <p>All right reserved 2023.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
