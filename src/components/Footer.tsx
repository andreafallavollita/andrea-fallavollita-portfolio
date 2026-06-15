import React from "react";
import {
  Bot,
  Megaphone,
  Linkedin,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="portfolio-footer">
      <div className="footer-top-glow" />

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand-row">
            <div className="footer-logo">AF</div>

            <div>
              <h2>
                Andrea <span>Fallavollita</span>
              </h2>
              <p>Digital Marketing & AI Automations Specialist</p>
            </div>
          </div>

          <div className="footer-tags">
            <span>
              <Bot size={18} />
              AI Automation
            </span>

            <span>
              <Megaphone size={18} />
              Marketing
            </span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-right">
          <div className="footer-heading">
            <span>CONTACTS</span>
            <h3>Let's Talk</h3>
          </div>

          <div className="footer-availability">
            <span />
            Available for collaborations
          </div>

          <div className="footer-contact-grid">
            <a
              className="footer-contact-card footer-email-card"
              href="mailto:andreafallavollita5@gmail.com"
            >
              <div className="footer-contact-icon">
                <Mail size={34} />
              </div>

              <div>
                <strong>Email</strong>
                <p>andreafallavollita5@gmail.com</p>
              </div>

              <ArrowRight className="footer-arrow" size={34} />
            </a>

            <a
              className="footer-contact-card footer-linkedin-card"
              href="https://www.linkedin.com/in/andrea-fallavollita-454697178/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-contact-icon footer-linkedin-icon">
                <Linkedin size={34} />
              </div>

              <div>
                <strong>LinkedIn</strong>
                <p>linkedin.com/in/andreafallavollita</p>
              </div>

              <ArrowRight className="footer-arrow" size={34} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Andrea Fallavollita. All rights reserved.</p>

        <div className="footer-social-icons">
          <a href="mailto:andreafallavollita5@gmail.com" aria-label="Email">
            <Mail size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/andrea-fallavollita-454697178/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>

          <a href="#contact" aria-label="Contact">
            <Send size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}