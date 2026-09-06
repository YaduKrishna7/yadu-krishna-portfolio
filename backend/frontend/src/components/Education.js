import React from "react";

const education = [
  {
    icon: "fa-graduation-cap",
    period: "2026",
    title: "B.Tech in Information Technology",
    institution: "Institute of Engineering & Technology, University of Calicut",
    detail: "CGPA: 7.2 / 10",
  },
  {
    icon: "fa-school",
    period: "2022",
    title: "Higher Secondary (Plus Two)",
    institution: "M.V.H.S.S Ariyallur",
    detail: "Score: 89.9%",
  },
  {
    icon: "fa-book-open",
    period: "2020",
    title: "SSLC",
    institution: "M.V.H.S.S Ariyallur",
    detail: "Score: 100%",
  },
];

function Education() {
  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <div className="section-heading">
        <span className="section-kicker">Education</span>
        <h2>Academic <span>foundation.</span></h2>
        <p>My formal education and the foundation behind my software development journey.</p>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.title}>
            <div className="education-icon"><i className={`fa-solid ${item.icon}`}></i></div>
            <span className="education-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            <strong>{item.detail}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
