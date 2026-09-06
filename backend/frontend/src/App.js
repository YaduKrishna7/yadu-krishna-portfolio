import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollBarRef = useRef(null);

  useEffect(() => {
    // Initialize AOS only when the visitor has not requested reduced motion.
    if (window.AOS && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.AOS.init({ duration: 700, once: true, offset: 80 });
    }

    // Scroll bar logic
    const handleScroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrolled = (scrollTop / height) * 100;
      if (scrollBarRef.current) {
        scrollBarRef.current.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="scroll-bar" ref={scrollBarRef}></div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <GitHub />
      <Contact />
      <Footer />
    </>
  );
}

export default App;