import Spearmint from '../assets/Spearmint.png';
import BotSasa from '../assets/BotSasa.png';
import ShalomTechnologies from '../assets/Shalom-Technologies.png';
import React, { useEffect, useRef, useState } from "react";
import { Container, Badge } from "react-bootstrap";
import "../styles/Projects.css";

const projects = [
  {
    title: "Spearmint Dental Clinic",
    category: "Landing Page",
    year: "2026",
    image: Spearmint,
    desc: "A professional and minimalistic landing page for a dental clinic",
    tags: ["Branding", "Art Direction"],
    accent: "#c7ff32",
    url: "https://spearmint-dental-clinic-1.onrender.com/",
  },
  {
    title: "Shalom Technologies",
    category: "Business Website",
    year: "2026",
    image: ShalomTechnologies,
    desc: "A platform for a business to showcase their business information, work, services and contact information.",
    tags: ["Editorial", "Typography"],
    accent: "#ff8fba",
    url: "https://shalom-technologies.github.io/Shalom-Technologies/#/",
  },
  {
    title: "BotSasa",
    category: "Web App",
    year: "2026",
    desc: "A fullstack web app with a Python (FastAPI) backend and React-based frontend.",
    image: BotSasa,
    tags: ["Web Design", "Development"],
    accent: "#8cf7ff",
    url: "https://botsasa-1.onrender.com/",
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${
        isVisible ? "project-card--visible" : ""
      }`}
      style={{
        "--project-accent": project.accent,
        "--animation-delay": `${index * 120}ms`,
      }}
    >
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />

        <div className="project-index">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="project-info">
        <div>
          <p className="project-category">{project.category}</p>
          <h3 className="project-title">{project.title}</h3>
        </div>

        <span className="project-year">{project.year}</span>
      </div>

      <div>
        <p className='project-desc mt-3 text-white-50'>{project.desc}</p>
      </div>
      <span className="project-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="projects-section">
      <Container fluid className="px-3 px-md-4 px-lg-5">
        <div className="projects-header">
          <div>
            <p className="projects-eyebrow">Selected work</p>
            <h2 className="projects-title">Projects</h2>
          </div>

          <span className="projects-count">04 — 04</span>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
