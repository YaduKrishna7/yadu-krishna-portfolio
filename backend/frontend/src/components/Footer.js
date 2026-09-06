import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">YADU<span>.</span></a>
          <p>Python & Full-Stack Web Developer</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a href="https://github.com/YaduKrishna7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/yadu-krishna-kp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:yaduvalsaraj1007.11@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yadu Krishna K P. All rights reserved.</span>
        <a href="#home" aria-label="Back to top">Back to top <i className="fa-solid fa-arrow-up"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
