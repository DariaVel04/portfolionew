import { useState } from "react";
import { frames, heroLines, profile } from "../data/content.js";

export function Hero({ onOpenProject }) {
  const [lang, setLang] = useState("en");
  const [spot, setSpot] = useState(0);
  const current = heroLines.find((line) => line.id === lang) ?? heroLines[0];

  function onLanguageKey(event) {
    const index = heroLines.findIndex((line) => line.id === lang);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? heroLines[(index + 1) % heroLines.length]
        : heroLines[(index - 1 + heroLines.length) % heroLines.length];
    setLang(next.id);
    document.getElementById(`lang-${next.id}`)?.focus();
  }

  function onFrameMove(event) {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    setSpot(x < 0.34 ? 0 : x < 0.67 ? 1 : 2);
  }

  return (
    <section id="top" className="hero">
      <p className="spine">Tampere · Frontend · 2027</p>
      <div className="shell hero-grid">
        <div className="hero-intro">
          <p className="eyebrow">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
          </p>
          <h1>
            <span>Daria</span>
            <span className="last">Velychko</span>
          </h1>
          <p className="lede">
            ICT student at Tredu Vocational College, through 2027. Open to internships and junior
            frontend roles in Finland and across Europe.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#work">
              Selected work <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="frame" onPointerMove={onFrameMove}>
          <div className="frame-top">
            <span>Layout</span>
            <span>0{spot + 1}</span>
          </div>
          <div
            className="langs"
            role="radiogroup"
            aria-label="Intro language. Same three languages as Pohjoisen Helmi."
            onKeyDown={onLanguageKey}
          >
            {heroLines.map((line) => (
              <button
                key={line.id}
                id={`lang-${line.id}`}
                type="button"
                role="radio"
                aria-checked={lang === line.id}
                tabIndex={lang === line.id ? 0 : -1}
                onClick={() => setLang(line.id)}
              >
                {line.label}
              </button>
            ))}
          </div>
          <p className="frame-line" lang={current.id} aria-live="polite">
            {current.text}
          </p>
          <div className="frame-cols">
            {frames.map((frame, index) => (
              <button
                key={frame.id}
                type="button"
                className={spot === index ? "col is-hot" : "col"}
                onClick={() => onOpenProject(frame.id)}
                onFocus={() => setSpot(index)}
              >
                <span>{frame.name}</span>
                <small>{frame.meta}</small>
              </button>
            ))}
          </div>
          <p className="frame-note">Move across the columns. Click one to open the case.</p>
        </div>
      </div>
    </section>
  );
}
