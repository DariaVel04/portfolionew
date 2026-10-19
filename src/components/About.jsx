import { languages } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

const facts = [
  ["Based in", "Tampere, Finland"],
  ["Study", "Tredu · ICT · 2027"],
  ["Looking for", "Internship or junior role"],
  ["Work mode", "Remote"],
];

export function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="shell">
          <header className="section-head">
            <p className="kicker">
              <span>01</span> About
            </p>
            <h2>Frontend student in Tampere.</h2>
          </header>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I&apos;m a frontend developer and an ICT student at Tredu Vocational College. I build
                responsive pages with HTML, CSS, and JavaScript, and interfaces in React.
              </p>
              <p>
                The work to look at first is a site for a Tampere cleaning service, written in
                Finnish, English, and Russian, and a React catalog for an animal shelter.
              </p>
              <p className="aside-note">
                Outside the editor I go to the gym, crochet, read, cook, and study languages.
              </p>
            </div>
            <div>
              <dl className="facts">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <h3 className="subhead">Languages</h3>
              <dl className="facts facts-lang">
                {languages.map((language) => (
                  <div key={language.name}>
                    <dt>{language.name}</dt>
                    <dd>{language.level}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
