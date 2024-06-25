import React from "react";
import "./footer.css";

import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <FaRegCopyright />
        <p className="my-auto mx-2 text-center">
          Copyright 2024 by Aashish Kushwah | All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
