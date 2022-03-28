import React, { useState } from "react";
import "./Hero.css";
import { useMcSubscribe } from "../../Utils/McSubscribe";

const Hero = () => {
  const [form, setForm] = useState({ email: "" });

  const { subscribe } = useMcSubscribe(process.env.REACT_APP_MC_URL);

  const handleInputChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (form.email === "") {
      return;
    } else {
      subscribe({
        EMAIL: form.email,
      });
    }
    setForm({ email: "" });
  };

  return (
    <>
      <section className="top-text">
        <p>our new website is launching soon</p>
      </section>
      <section className="sub">
        <p>Sign up now and be the first to know when we go live:</p>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Enter your email here"
            required
          />
          <button onClick={handleSubmit}>NOTIFY ME!</button>
        </form>
      </section>
    </>
  );
};

export default Hero;
