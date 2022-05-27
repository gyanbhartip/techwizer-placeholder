import React from "react";
import "./Footer.css";
import FBIcon from "../../Assets/facebook.svg";

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
          Follow us on:
          <img src={FBIcon} alt="facebook-logo" className="fb-logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
