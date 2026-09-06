import React from "react";

const skillGroups = [
  {
    icon: "fa-code",
    label: "Languages",
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    icon: "fa-layer-group",
    label: "Frontend",
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    icon: "fa-server",
    label: "Backend",
    title: "Backend Development",
    skills: ["Django", "Django REST Framework", "REST APIs", "Python"],
  },
  {
    icon: "fa-database",
    label: "Data",
    title: "Database & Data",
    skills: ["SQLite", "PostgreSQL", "SQL", "Pandas", "NumPy"],
  },
  {
    icon: "fa-brain",
    label: "AI / ML",
    title: "Machine Learning",
    skills: ["Scikit-learn", "Data Preprocessing", "Model Evaluation", "Python"],
  },
  {
    icon: "fa-screwdriver-wrench",
    label: "Workflow",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman", "API Testing"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="section-heading">
        <span className="section-kicker">Technical toolkit</span>
        <h2>Skills that turn <span>ideas into products.</span></h2>
        <p>
          A practical stack across frontend, backend, databases and machine learning,
          with a focus on building reliable, maintainable web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <div className="skill-icon" aria-hidden="true">
                <i className={`fa-solid ${group.icon}`}></i>
              </div>
              <span>{group.label}</span>
            </div>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={`${group.title}-${skill}`}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="skills-bottom">
        <div>
          <span className="skills-bottom-label">Core focus</span>
          <strong>Python · Django · React · REST APIs</strong>
        </div>
        <div className="skills-confidence">
          <span className="skills-bottom-label">Development approach</span>
          <strong>Clean UI · Reusable code · API-driven development</strong>
        </div>
      </div>
    </section>
  );
}

export default Skills;
