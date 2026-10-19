import { useState } from "react";
import { profile } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Instagram", href: profile.instagram },
];

export function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const note = String(data.get("note") || "").slice(0, 1500);
    const url = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio — hello")}&body=${encodeURIComponent(note)}`;
    window.location.href = url;
    setStatus("Your email app should open with this note.");
  }

  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="shell contact-layout">
          <header className="section-head">
            <p className="kicker">
              <span>05</span> Contact
            </p>
            <h2>Write to me.</h2>
            <p className="lede">
              Internships, junior roles, or a question about a project. I read email.
            </p>
          </header>
          <div className="contact-main">
            <a className="mail" href={`mailto:${profile.email}`}>
              daria.velychko48@<wbr />gmail.com
            </a>
            <ul className="contact-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer me">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <form className="note-form" onSubmit={onSubmit}>
              <label htmlFor="note">A short note</label>
              <textarea id="note" name="note" rows="5" maxLength="1500" />
              <button className="btn" type="submit">
                Open in email <span aria-hidden="true">→</span>
              </button>
              <p className="form-status" role="status">
                {status}
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
