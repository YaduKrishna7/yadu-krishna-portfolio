import React from "react";

const developmentItems = [
  {
    icon: "fa-solid fa-code",
    type: "Professional Training",
    title: "Python Django Internship",
    provider: "Bridgeon Solutions · Malappuram, Kerala",
    period: "3 Weeks",
    description:
      "Hands-on full-stack training focused on Django MVT, Django ORM, authentication, CRUD application development and Git workflows.",
    tags: ["Python", "Django", "Django ORM", "Git"],
  },
  {
    icon: "fa-solid fa-brain",
    type: "Current Learning",
    title: "Program in AI Driven Python Programming",
    provider: "Entri",
    period: "2026 · Ongoing",
    description:
      "A structured program focused on Python programming and AI-driven development, supporting continued growth in software engineering and machine learning.",
    tags: ["Python", "AI", "Machine Learning", "Programming"],
  },
];

const highlights = [
  ["fa-solid fa-graduation-cap", "B.Tech IT", "2026"],
  ["fa-solid fa-chart-line", "CGPA", "7.2 / 10"],
  ["fa-solid fa-medal", "Higher Secondary", "89.9%"],
  ["fa-solid fa-star", "SSLC", "100%"],
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-heading">
        <span className="section-kicker">Credentials & Growth</span>
        <h2>Training, Learning & <span>Achievements</span></h2>
        <p>
          A snapshot of my professional training, current learning journey and
          academic highlights. Verified certificates can be added here as they are earned.
        </p>
      </div>

      <div className="development-grid">
        {developmentItems.map((item) => (
          <article className="development-card" key={item.title}>
            <div className="development-icon"><i className={item.icon}></i></div>
            <div className="development-topline">
              <span>{item.type}</span>
              <strong>{item.period}</strong>
            </div>
            <h3>{item.title}</h3>
            <h4>{item.provider}</h4>
            <p>{item.description}</p>
            <div className="development-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>

      <div className="achievement-strip">
        {highlights.map(([icon, label, value]) => (
          <div className="achievement-item" key={label}>
            <div className="achievement-icon"><i className={icon}></i></div>
            <div><span>{label}</span><strong>{value}</strong></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
