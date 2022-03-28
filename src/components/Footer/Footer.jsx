import React from "react";
import "./Footer.css";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <a href="mailto:info@techwizer.in">
          <p>info@techwizer.in</p>
        </a>
        <a href="tel:+919318351040">
          <p>+91-93183 51040</p>
        </a>
      </div>
      <div className="center">
        <p>&copy; 2022 Techwizer</p>
      </div>
      <div className="right">
        <a href="https://www.facebook.com/TechWizer">
          Follow us on: <GrFacebook style={{ display: "inline" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
