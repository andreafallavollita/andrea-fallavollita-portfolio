import React from "react";
import "./Hero.css";

const tags = [
  "AI Agent Design",
  "Python",
  "Workflow Automation",
  "API Integration",
  "Data Reporting",
];

export default function Hero() {
  return (
    <section className="af-hero">
      <div className="af-hero-bg" />
      <div className="af-hero-grid" />
      <div className="af-hero-stars" />

      <div className="af-aurora af-aurora-left" />
      <div className="af-aurora af-aurora-right" />
      <div className="af-aurora af-aurora-bottom" />

      <div className="af-hero-content">
        <h1 className="af-hero-title">
          Andrea <span>Fallavollita</span>
        </h1>

        <div className="af-hero-line" />

        <p className="af-hero-subtitle">
          Junior AI Agent & Automation Developer
        </p>

        <p className="af-hero-description">
          Progetto agenti AI personalizzati e sviluppo automazioni in Python per raccogliere, validare e trasformare dati in report e dashboard. Creo workflow guidati e integrazioni API per semplificare attività operative.
        </p>

        <div className="af-hero-actions">
          <a href="#contact" className="af-btn af-btn-primary">
            Contattami <span>→</span>
          </a>

          <a href="#projects" className="af-btn af-btn-secondary">
            Vedi progetti <span>→</span>
          </a>
        </div>

        <div className="af-hero-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <a href="#skills" className="af-scroll" aria-label="Scorri">
        <span />
      </a>
    </section>
  );
}
