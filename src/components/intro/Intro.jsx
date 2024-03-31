import React, { useState } from "react";
import { FaAward, FaLaptopCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiOutlineProject } from "react-icons/ai";

import ME from "../../assets/mee.jpg";
import "./intro.css";

const Intro = () => {
  const experienceDetails = [
    {
      title: "Software training ",
      company: "Rad techPro pvt. ltd.",
      duration: "19 sept/2022 - sept/2023",
      // logo: require("../../assets"),
    },

    {
      title: "Software intern",
      company: "codebrew labs",
      duration: "dec/2023",
    },
  ];
  const projectDetails = [
    {
      title: "Taxi-app",

      skills: ["React JS"],
      association:
        "Developed interactive user interfaces using React.js and its core principles.",
    },
    {
      title: "Three user type Professional user,EstateLead collaborator",

      skills: ["React Js"],
      association: "Each of them can view their item and their prices",
    },
    {
      title: "Registration Form",

      skills: ["Javascript,Html,css"],
      association:
        "Using html,css, javascript incorporating dynamic functionalities to display a dynamic table.",
    },
  ];
  const [showExperienceDetails, setShowExperienceDetails] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleExperienceCardClick = () => {
    setShowExperienceDetails(!showExperienceDetails);
    setShowProjectDetails(false);
  };

  const handleProjectCardClick = () => {
    setShowProjectDetails(!showProjectDetails);
    setShowExperienceDetails(false);
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card"
              onClick={handleExperienceCardClick}>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ months</small>
            </article>
            <article className="about__card" onClick={handleProjectCardClick}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> Completed Projects</small>
            </article>
          </div>

          {showExperienceDetails && (
            <div className="experience-details">
              {experienceDetails.map((exp, index) => (
                <article key={index} className="experience-detail">
                  <FaLaptopCode className="about__icon" />
                  <h5>{exp.title}</h5>
                  <small>{exp.company}</small>
                  <small>{exp.duration}</small>
                </article>
              ))}
            </div>
          )}

          {showProjectDetails && (
            <div className="project-details">
              {projectDetails.map((project, index) => (
                <article key={index} className="project-detail">
                  <AiOutlineProject className="about__icon" />
                  <h5>{project.title}</h5>
                  <small>{project.association}</small>
                  <small>{project.duration}</small>
                  <small>Skills: {project.skills.join(" · ")}</small>
                </article>
              ))}
            </div>
          )}

          <p>
            I bring a wealth of experience to the table. Proficient in React.js,
            I'm well-versed in high-pressure corporate environments,
            consistently delivering top-notch efficiency and productivity.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
