import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="top-text">
        <p>our new website is launching soon</p>
      </section>
      <section className="sub">
        <p>Sign up now and be the first to know when we go live:</p>
        <form action="">
          <input type="email" placeholder="Enter your email here" />
          <button>NOTIFY ME!</button>
        </form>
      </section>
    </>
  );
};

export default Hero;
