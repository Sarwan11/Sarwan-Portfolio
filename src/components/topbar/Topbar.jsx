import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./topbar.css";

const Topbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const aboutElement = document.getElementById("about");
      const experienceElement = document.getElementById("experience");
      const contactElement = document.getElementById("contact");
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      if (
        scrollPosition >= homeElement.offsetTop &&
        scrollPosition < aboutElement.offsetTop
      ) {
        setActiveNav("#home");
      } else if (
        scrollPosition >= aboutElement.offsetTop &&
        scrollPosition < experienceElement.offsetTop
      ) {
        setActiveNav("#about");
      } else if (
        scrollPosition >= experienceElement.offsetTop &&
        scrollPosition < contactElement.offsetTop
      ) {
        setActiveNav("#experience");
      } else if (scrollPosition >= contactElement.offsetTop) {
        setActiveNav("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={activeNav === "#home" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href="#contact" className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Topbar;
