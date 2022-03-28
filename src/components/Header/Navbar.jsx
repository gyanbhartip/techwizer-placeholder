import React from "react";
import logo from "../../Assets/Techwizer-Logo-02.svg";
import logoText from "../../Assets/Techwizer-Logo-03.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Techwizer logo" className="logo" />
          <img src={logoText} alt="" className="logoText" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
