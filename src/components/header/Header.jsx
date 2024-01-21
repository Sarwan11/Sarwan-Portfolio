import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import CTA from "./CTA";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sarwan Yadav</h1>
        <h5 className="text-light">React Js Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
