import React, { useState } from "react";

const EMAIL = "yaduvalsaraj1007.11@gmail.com";
const GITHUB = "https://github.com/YaduKrishna7";
const LINKEDIN = "https://linkedin.com/in/yadu-krishna-kp";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = data.get("subject") || "Portfolio enquiry";
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading" data-aos="fade-up">
        <span className="section-kicker">Get in touch</span>
        <h2>Let's build something useful.</h2>
        <p>Have an opportunity, project idea, or simply want to connect? I'd be happy to hear from you.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-copy" data-aos="fade-right">
          <div className="contact-card contact-intro-card">
            <span className="contact-icon"><i className="fa-solid fa-paper-plane"></i></span>
            <h3>Open to opportunities</h3>
            <p>
              I'm interested in web development roles, full-stack projects, and opportunities
              where I can grow while contributing with Python, Django and React.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${EMAIL}`} className="contact-link">
              <span className="contact-link-icon"><i className="fa-solid fa-envelope"></i></span>
              <span><small>Email</small><strong>{EMAIL}</strong></span>
              <i className="fa-solid fa-arrow-up-right-from-square contact-link-arrow"></i>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon"><i className="fa-brands fa-linkedin-in"></i></span>
              <span><small>LinkedIn</small><strong>Yadu Krishna K P</strong></span>
              <i className="fa-solid fa-arrow-up-right-from-square contact-link-arrow"></i>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon"><i className="fa-brands fa-github"></i></span>
              <span><small>GitHub</small><strong>@YaduKrishna7</strong></span>
              <i className="fa-solid fa-arrow-up-right-from-square contact-link-arrow"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
          <div className="form-row">
            <label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label>
            <label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label>
          </div>
          <label><span>Subject</span><input name="subject" type="text" placeholder="How can I help?" required /></label>
          <label><span>Message</span><textarea name="message" rows="6" placeholder="Tell me a little about your opportunity or project..." required></textarea></label>
          <button className="btn contact-submit" type="submit">
            Send Message <i className="fa-solid fa-arrow-right"></i>
          </button>
          {status && <p className="contact-status" role="status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
