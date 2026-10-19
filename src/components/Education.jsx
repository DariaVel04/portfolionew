import { education } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

export function Education() {
  return (
    <section id="education" className="section">
      <Reveal>
        <div className="shell">
          <header className="section-head">
            <p className="kicker">
              <span>04</span> Education
            </p>
            <h2>Tredu, and the practice around it.</h2>
          </header>
          <ol className="timeline">
            {education.map((item) => (
              <li key={item.title}>
                <p className="period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
