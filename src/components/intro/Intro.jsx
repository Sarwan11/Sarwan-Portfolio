import React, { useState } from "react";
import { FaAward, FaLaptopCode } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiOutlineProject } from "react-icons/ai";

import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  const experienceDetails = [
    {
      title: "Software Developer",
      company: "Suffescom Solutions Inc",
      duration: "02/2023 - Present",
      // logo: require("../../assets"),
    },
    {
      title: "Software Engineer",
      company: "Antier Solutions",
      duration: "06/2021 - 12/2022",
    },
    {
      title: "Mean Stack Trainee",
      company: "Impinge Solutions",
      duration: "08/2020 - 10/2020",
    },
  ];
  const projectDetails = [
    {
      title: "Ethereum-wallet",
      duration: "Jan 2023 - Present",
      skills: ["Node.js", "React JS"],
      association: "Personal",
    },
    {
      title: "STUMP UP",
      duration: "Sep 2022 - Dec 2022",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Microservices",
        "Web Development",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "Express.js",
        "RabbitMQ",
        "Redis",
        "Back-End Web Development",
        "Non-Fungible Tokens (NFTs)",
      ],
      association: "Antier Solutions",
    },
    {
      title: "Comawari",
      duration: "Aug 2022 - Sep 2022",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "PostgreSQL",
        "Socket.io",
        "WebSocket",
        "Apache Kafka",
        "Microservices",
        "NestJS",
        "Non-Fungible Tokens (NFTs)",
        "MongoDB",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "gRPC",
        "Redis",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "FanVerse",
      duration: "Jun 2022 - Aug 2022",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Amazon Web Services (AWS)",
        "Microservices",
        "Non-Fungible Tokens (NFTs)",
        "Web Development",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "gRPC",
        "Express.js",
        "RabbitMQ",
        "Redis",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "CupChairs",
      duration: "May 2022 - Jul 2022",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Microservices",
        "Non-Fungible Tokens (NFTs)",
        "Web Development",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "gRPC",
        "Firebase",
        "Express.js",
        "RabbitMQ",
        "Redis",
        "PM2",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "East NFT",
      duration: "Dec 2021 - May 2022",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Microservices",
        "Non-Fungible Tokens (NFTs)",
        "Web Development",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "gRPC",
        "Express.js",
        "RabbitMQ",
        "Redis",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "ICO",
      duration: "Oct 2021 - Dec 2021",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Web3",
        "Blockchain",
        "Microservices",
        "Web Development",
        "MySQL",
        "Git",
        "Sequelize.js",
        "REST APIs",
        "Express.js",
        "RabbitMQ",
        "Stored Procedures",
        "Redis",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "Crypto Exchange",
      duration: "Jun 2021 - Sep 2021",
      skills: [
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Docker",
        "Web3",
        "Microservices",
        "Web Development",
        "MySQL",
        "Git",
        "REST APIs",
        "Express.js",
        "RabbitMQ",
        "Stored Procedures",
        "Redis",
        "Back-End Web Development",
      ],
      association: "Antier Solutions",
    },
    {
      title: "Real Estate Management System",
      duration: "Oct 2020 - Dec 2020",
      skills: [
        "Node.js",
        "JavaScript",
        "AngularJS",
        "Web Development",
        "Front-End Development",
        "MongoDB",
        "Git",
        "REST APIs",
        "Express.js",
        "Back-End Web Development",
      ],
      association: "Impinge Solutions",
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
              <small>2+ year</small>
            </article>
            <article className="about__card" onClick={handleProjectCardClick}>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
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
            I bring a wealth of experience to the table. Proficient in Node.js
            and React/Angular, I'm well-versed in high-pressure corporate
            environments, consistently delivering top-notch efficiency and
            productivity.
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
