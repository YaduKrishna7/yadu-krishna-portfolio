import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = (process.env.REACT_APP_API_URL || "http://127.0.0.1:8001").replace(/\/$/, "");

const fallbackProjects = [
  {
    id: "hirenix",
    title: "Hirenix",
    category: "AI / Full-Stack",
    description:
      "AI-powered recruitment platform designed to streamline candidate screening, resume ranking and voice-based interview workflows.",
    github_link: "https://github.com/YaduKrishna7/hirenix_final",
    technologies: ["Python", "Django", "React", "Vosk", "Machine Learning"],
    features: ["Resume ranking", "Voice interview system", "Recruitment workflow"],
    initials: "HR",
  },
  {
    id: "alumni-hub",
    title: "Alumni Hub",
    category: "Web Application",
    description:
      "Django-based student and alumni networking platform focused on communication, community building and information sharing.",
    github_link: "https://github.com/YaduKrishna7/alumniconnect",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    features: ["User management", "Alumni networking", "Database-driven platform"],
    initials: "AH",
  },
  {
    id: "laptop-price",
    title: "Gaming Laptop Price Prediction",
    category: "Machine Learning",
    description:
      "Machine learning project that analyzes laptop specifications and predicts gaming laptop prices from relevant product features.",
    github_link: "https://github.com/YaduKrishna7/Gaming-Laptops",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],
    features: ["Data preprocessing", "Feature analysis", "Price prediction"],
    initials: "ML",
  },
];

function enrichProject(project) {
  const title = (project.title || "").toLowerCase();
  const fallback = fallbackProjects.find((item) => item.title.toLowerCase() === title);

  return {
    ...fallback,
    ...project,
    category: project.category || fallback?.category || "Web Project",
    technologies: project.technologies || fallback?.technologies || ["Web Development"],
    features: project.features || fallback?.features || [],
    initials: fallback?.initials || (project.title || "PR").slice(0, 2).toUpperCase(),
  };
}

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/projects/`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length) {
          setProjects(res.data.map(enrichProject));
        }
      })
      .catch((err) => console.warn("Using local project data:", err.message));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-heading projects-heading" data-aos="fade-up">
        <span className="section-kicker">Selected work</span>
        <h2>Projects that show <span>how I build.</span></h2>
        <p>
          A selection of full-stack, AI and machine-learning projects that demonstrate
          practical problem solving, backend development and modern web technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" data-aos="fade-up" data-aos-delay={index * 80} key={project.id}>
            <div className={`project-visual project-visual-${index % 3}`}>
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} />
              ) : (
                <div className="project-visual-placeholder">
                  <span>{project.initials}</span>
                  <small>{project.category}</small>
                </div>
              )}
              <span className="project-number">0{index + 1}</span>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span>{project.category}</span>
                <span className="project-line"></span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.features.length > 0 && (
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="project-link primary">
                  <i className="fa-brands fa-github"></i> View on GitHub
                </a>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="project-link secondary">
                  Source <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer" data-aos="fade-up">
        <span>More projects and experiments are available on my GitHub.</span>
        <a href="https://github.com/YaduKrishna7" target="_blank" rel="noopener noreferrer">
          Explore GitHub <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}

export default Projects;
