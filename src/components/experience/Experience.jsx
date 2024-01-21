/** @format */

// experience.jsx

import React from "react";
import { Icon } from "@iconify/react";

import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import reactIcon from "@iconify/icons-logos/react";
import awsIcon from "@iconify/icons-skill-icons/aws-light";
import reduxIcon from "@iconify/icons-logos/redux";
import htmlIcon from "@iconify/icons-logos/html-5";
import cssIcon from "@iconify/icons-logos/css-3";
import bootstrapIcon from "@iconify/icons-devicon/bootstrap";
import jsIcon from "@iconify/icons-logos/javascript";
import angularIcon from "@iconify/icons-logos/angular-icon";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import expressIcon from "@iconify/icons-simple-icons/express";
import swaggerIcon from "@iconify/icons-logos/swagger";
import grpcIcon from "@iconify/icons-devicon/grpc";
import nestjsIcon from "@iconify/icons-logos/nestjs";
import mysqlIcon from "@iconify/icons-logos/mysql-icon";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-logos/mongodb-icon";
import gitIcon from "@iconify/icons-logos/git-icon";
import githubIcon from "@iconify/icons-simple-icons/github";
import nextjsIcon from "@iconify/icons-logos/nextjs-icon";
import sassIcon from "@iconify/icons-logos/sass";
import azureIcon from "@iconify/icons-logos/azure-icon";
import firebaseIcon from "@iconify/icons-logos/firebase";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import pm2Icon from "@iconify/icons-logos/pm2-icon";
import redisIcon from "@iconify/icons-logos/redis";
import rabbitMQIcon from "@iconify/icons-logos/rabbitmq-icon";
import sequelizeIcon from "@iconify/icons-logos/sequelize";
import nginxIcon from "@iconify/icons-logos/nginx";
import awsLambdaIcon from "@iconify/icons-logos/aws-lambda";

import "./experience.css";

const getIconForTech = (tech) => {
  switch (tech.toLowerCase()) {
    case "nodejs":
      return nodejsIcon;
    case "react":
      return reactIcon;
    case "html":
      return htmlIcon;
    case "css":
      return cssIcon;
    case "bootstrap":
      return bootstrapIcon;
    case "javascript":
      return jsIcon;
    case "angular":
      return angularIcon;
    case "typescript":
      return typescriptIcon;
    case "express":
      return expressIcon;
    case "swagger":
      return swaggerIcon;
    case "grpc":
      return grpcIcon;
    case "nestjs":
      return nestjsIcon;
    case "mysql":
      return mysqlIcon;
    case "postgresql":
      return postgresqlIcon;
    case "mongodb":
      return mongodbIcon;
    case "git":
      return gitIcon;
    case "github":
      return githubIcon;
    case "aws":
      return awsIcon;
    case "azure":
      return azureIcon;
    case "firebase":
      return firebaseIcon;
    case "docker":
      return dockerIcon;
    case "pm2":
      return pm2Icon;
    case "redis":
      return redisIcon;
    case "rabbitmq":
      return rabbitMQIcon;
    case "sequelize":
      return sequelizeIcon;
    case "nginx":
      return nginxIcon;
    case "aws lambda":
      return awsLambdaIcon;
    case "redux":
      return reduxIcon;
    case "nextjs":
      return nextjsIcon;
    case "sass":
      return sassIcon;
    default:
      return null;
  }
};

const SkillSection = ({ title, skills }) => (
  <div className="experience__section">
    <h3>{title}</h3>
    <div className="experience__content">
      {skills.map((tech, index) => (
        <article key={index} className="experience__details">
          {getIconForTech(tech) && (
            <Icon
              icon={getIconForTech(tech)}
              style={{ width: "20px" }}
              className="experience__details-icon"
            />
          )}
          <h4>{tech}</h4>
        </article>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NextJs",
    "Redux",
    "Sass",
    "Angular",
    "TypeScript",
    "Bootstrap",
  ];
  const backendSkills = [
    "NodeJs",
    "Swagger",
    "gRPC",
    "NestJs",
    "Express",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "GitHub",
  ];
  const devopsSkills = [
    "AWS",
    "Azure",
    "Firebase",
    "Docker",
    "PM2",
    "Redis",
    "RabbitMQ",
    "Sequelize",
    "Nginx",
    "AWS Lambda",
  ];

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <SkillSection title="Frontend Development" skills={frontendSkills} />
        <SkillSection title="Backend Development" skills={backendSkills} />
        <SkillSection title="DevOps" skills={devopsSkills} />
      </div>
    </section>
  );
};

export default Experience;
