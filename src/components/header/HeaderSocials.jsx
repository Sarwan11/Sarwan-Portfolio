import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sarwan-yadav-120382275/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Sarwan11" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
