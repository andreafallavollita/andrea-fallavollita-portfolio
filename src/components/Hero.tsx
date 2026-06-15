import React from "react";
import "./Hero.css";

const tags = [
  "Marketing Automation",
  "AI Automation",
  "Lead Generation",
  "Email Marketing",
  "Frontend Design",
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
          Marketing Automation Specialist | Digital Marketing & AI Automation
        </p>

        <p className="af-hero-description">
          Aiuto aziende a migliorare processi di marketing, lead generation, email marketing e workflow digitali attraverso automazioni AI, analisi dei dati e soluzioni frontend scalabili.
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