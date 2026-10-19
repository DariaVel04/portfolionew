import { skillGroups } from "../data/content.js";
import { Reveal } from "./Reveal.jsx";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <div className="shell">
          <header className="section-head">
            <p className="kicker">
              <span>03</span> Skills
            </p>
            <h2>What I use, and what I have studied beside it.</h2>
          </header>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <div key={group.label} className="skill-group">
                <p className="kicker">
                  <span>0{index + 1}</span> {group.label}
                </p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
