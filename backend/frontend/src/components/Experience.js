import React from "react";

function Experience() {
  return (
    <section id="experience" className="experience-section" data-aos="fade-up">
      <div className="section-heading">
        <span className="section-kicker">Experience</span>
        <h2>Where I have <span>built and learned.</span></h2>
        <p>Hands-on development experience across full-stack applications and professional training.</p>
      </div>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-marker"><i className="fa-solid fa-briefcase"></i></div>
          <div className="timeline-card">
            <div className="timeline-topline">
              <div>
                <span className="timeline-type">Internship · Full Stack Development</span>
                <h3>Python Django Intern</h3>
                <h4>Bridgeon Solutions · Malappuram, Kerala</h4>
              </div>
              <span className="timeline-date">2-Week Training</span>
            </div>
            <ul>
              <li>Developed a CRUD-based web application module using Django MVT architecture.</li>
              <li>Designed relational database structures and worked with Django ORM for application data.</li>
              <li>Implemented login and registration using Django authentication and session management.</li>
              <li>Used Git for version control, code integration and standard branching workflows.</li>
            </ul>
            <div className="timeline-tags">
              <span>Python</span><span>Django</span><span>Django ORM</span><span>Git</span>
            </div>
          </div>
        </article>

        <article className="timeline-item timeline-item-accent">
          <div className="timeline-marker"><i className="fa-solid fa-laptop-code"></i></div>
          <div className="timeline-card">
            <div className="timeline-topline">
              <div>
                <span className="timeline-type">Project Experience</span>
                <h3>Full-Stack Application Development</h3>
                <h4>Academic & Personal Projects</h4>
              </div>
              <span className="timeline-date">2024 — 2026</span>
            </div>
            <ul>
              <li>Built applications covering recruitment, alumni networking, e-commerce and external API integration.</li>
              <li>Worked across frontend, backend, database design, authentication and API-driven workflows.</li>
              <li>Explored real-time features, asynchronous tasks and practical software architecture through projects.</li>
            </ul>
            <div className="timeline-tags">
              <span>React</span><span>Python</span><span>Django</span><span>REST API</span><span>SQL</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
