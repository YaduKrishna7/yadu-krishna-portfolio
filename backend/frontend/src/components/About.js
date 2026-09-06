import React from "react";

const highlights = [
  { icon: "fa-server", label: "Backend", value: "Python · Django · REST APIs" },
  { icon: "fa-database", label: "Databases", value: "SQLite · PostgreSQL · DBMS" },
  { icon: "fa-code", label: "Frontend", value: "HTML · CSS · JavaScript · React" },
  { icon: "fa-wand-magic-sparkles", label: "Focus", value: "Clean, practical & scalable solutions" },
];

function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="section-heading">
        <span className="section-kicker">About me</span>
        <h2>Turning ideas into <span>working software.</span></h2>
        <p>A quick look at my background, strengths and the kind of developer I am becoming.</p>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-aos="fade-right">
          <p className="lead">
            I am a B.Tech Information Technology graduate focused on backend and full-stack web development.
            My strongest area is building practical applications with <strong>Python, Django and REST APIs</strong>,
            while also working comfortably with modern frontend technologies and relational databases.
          </p>
          <p>
            I enjoy taking a problem from the initial idea through database design, API development,
            interface implementation, testing and deployment. My project work has included recruitment
            automation, alumni networking, e-commerce and real-time weather applications.
          </p>
          <p>
            I am currently strengthening my Python and AI-oriented skills while looking for opportunities
            where I can contribute to real products, learn from experienced teams and grow as a software engineer.
          </p>
        </div>

        <div className="about-highlights" data-aos="fade-left">
          {highlights.map((item) => (
            <div className="about-highlight" key={item.label}>
              <div className="highlight-icon"><i className={`fa-solid ${item.icon}`}></i></div>
              <div>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
