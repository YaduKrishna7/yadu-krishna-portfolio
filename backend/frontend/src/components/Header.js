import React, { useEffect, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Credentials", "certifications"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

function Header() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("portfolio-theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="logo" onClick={closeMenu}>
        YADU<span>.</span>
      </a>

      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <nav className={menuOpen ? "nav-open" : ""}>
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a href="/Yadu krishna KP--Software Engineer.pdf" className="nav-resume" download onClick={closeMenu}>
          Resume
        </a>
        <button
          id="darkmode"
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setIsDark(!isDark)}
        >
          <i className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;
