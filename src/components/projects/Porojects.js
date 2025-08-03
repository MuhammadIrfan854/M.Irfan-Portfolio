import React from 'react';
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import './project.css';

const projectData = [
  {
    img: Project1,
    title: "Modern Landing Page",
    description: "A beautiful responsive landing page with call-to-action.",
    live: "https://your-live-link1.com",
    code: "https://github.com/your/project1"
  },
  {
    img: Project2,
    title: "E-Commerce UI",
    description: "E-commerce layout with filtering, search, and cart features.",
    live: "https://your-live-link2.com",
    code: "https://github.com/your/project2"
  },
  {
    img: Project1,
    title: "Portfolio Website",
    description: "My personal web developer portfolio with contact & resume.",
    live: "https://your-portfolio.com",
    code: "https://github.com/your/portfolio"
  },
  {
    img: Project2,
    title: "Admin Dashboard",
    description: "Interactive dashboard with charts, tables, and analytics.",
    live: "https://your-dashboard.com",
    code: "https://github.com/your/dashboard"
  }
];

function Projects() {
  return (
    <div id="project">
      <h1>My Projects</h1>
      <div className="project-page">{projectData.map((project, index) => (
          <div className="project" key={index} data-aos="zoom-in"  data-aos-delay="100">
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaCode /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
