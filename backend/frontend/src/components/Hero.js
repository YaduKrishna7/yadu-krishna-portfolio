import React, { useEffect, useState } from "react";

const roles = [
  "Full-Stack Web Developer",
  "Python & Django Developer",
  "Machine Learning Enthusiast",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 55 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = currentRole.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentRole) setTimeout(() => setDeleting(true), 1200);
      } else {
        const next = currentRole.slice(0, Math.max(displayText.length - 1, 0));
        setDisplayText(next);
        if (!next) {
          setDeleting(false);
          setRoleIndex((index) => (index + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-left" data-aos="fade-right">
          <div className="hero-eyebrow">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="intro">Hello, I'm</p>
          <h1 className="name">Yadu Krishna K P</h1>
          <h2 className="typing">
            {displayText}<span className="typing-cursor">|</span>
          </h2>

          <p className="tagline">
            I build reliable, responsive web applications with Python, Django,
            React and modern development practices — with a growing focus on
            AI and machine learning.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Work <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="/Yadu krishna KP--Software Engineer.pdf" className="btn secondary" download>
              <i className="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
          </div>

          <div className="hero-social-row">
            <span>Find me on</span>
            <div className="social-links">
              <a href="https://github.com/YaduKrishna7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yadu-krishna-kp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:yaduvalsaraj1007.11@gmail.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="hero-tech">
            <span>Core stack</span>
            <div className="tech-list">
              <span>Python</span>
              <span>Django</span>
              <span>React</span>
              <span>SQL</span>
            </div>
          </div>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <div className="profile-card">
            <div className="profile-glow"></div>
            <div className="profile-frame">
              <img
                src="/images/profile-photo.jpg?v=2"
                className="profile"
                alt="Yadu Krishna K P"
              />
            </div>
            <div className="profile-badge">
              <span className="badge-icon"><i className="fa-solid fa-code"></i></span>
              <div>
                <strong>Developer</strong>
                <small>Building for the web</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        <i className="fa-solid fa-arrow-down"></i>
      </a>
    </section>
  );
}

export default Hero;
