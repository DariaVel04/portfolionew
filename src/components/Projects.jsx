import { filters, projects, studies } from "../data/content.js";
import { Preview } from "./Preview.jsx";
import { Reveal } from "./Reveal.jsx";

export function Projects({ filter, focusId, openId, onFilter, onFocus, onToggle }) {
  const visible = projects.filter((project) => filter === "all" || project.kind === filter);
  const active = visible.find((project) => project.id === focusId) ?? visible[0];

  return (
    <section id="work" className="section">
      <Reveal>
        <div className="shell">
          <header className="section-head section-head-row">
            <div>
              <p className="kicker">
                <span>02</span> Selected work
              </p>
              <h2>Three projects, then the rest of the repository.</h2>
            </div>
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="filter"
                  aria-pressed={filter === item.id}
                  onClick={() => onFilter(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </header>

          <div className="work-layout">
            <div className="work-list" key={filter}>
              {visible.map((project) => {
                const open = openId === project.id;
                return (
                  <article key={project.id} id={`project-${project.id}`}>
                    <button
                      type="button"
                      className={focusId === project.id ? "project-row is-active" : "project-row"}
                      aria-expanded={open}
                      aria-controls={`case-${project.id}`}
                      onMouseEnter={() => onFocus(project.id)}
                      onFocus={() => onFocus(project.id)}
                      onClick={() => onToggle(project.id)}
                    >
                      <span className="idx">{project.index}</span>
                      <span className="project-copy">
                        <span className="project-title">{project.title}</span>
                        <span className="project-summary">{project.summary}</span>
                      </span>
                      <span className="project-meta">
                        {project.kindLabel} · {project.year}
                      </span>
                      <span className="project-toggle">{open ? "Close" : "Open"}</span>
                    </button>
                    <div id={`case-${project.id}`} className={open ? "case is-open" : "case"}>
                      <div className="case-inner" inert={open ? undefined : true}>
                        <div className="case-grid">
                          <div className="case-visual">
                            <Preview id={project.id} />
                          </div>
                          <div className="case-copy-block">
                            <h3>Context</h3>
                            <p>{project.context}</p>
                            <h3>What I built</h3>
                            <p>{project.built}</p>
                            <h3>Result</h3>
                            <p>{project.result}</p>
                          </div>
                          <div className="case-side">
                            <h3>Stack</h3>
                            <ul className="tags">
                              {project.stack.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                            <div className="case-links">
                              {project.live ? (
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  Visit site
                                </a>
                              ) : null}
                              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                Source
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {active ? (
              <aside className="work-stage">
                <Preview id={active.id} />
                <p className="stage-title">{active.title}</p>
                <p className="stage-summary">{active.summary}</p>
                <p className="stage-stack">{active.stack.join(" · ")}</p>
                <div className="case-links">
                  {active.live ? (
                    <a href={active.live} target="_blank" rel="noopener noreferrer">
                      Visit site
                    </a>
                  ) : null}
                  <a href={active.repo} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                </div>
              </aside>
            ) : null}
          </div>

          <div className="also-wrap">
            <h3 className="subhead">Also on GitHub</h3>
            <ul className="also">
              {studies.map((item) => (
                <li key={item.repo}>
                  <a href={item.repo} target="_blank" rel="noopener noreferrer">
                    <span className="also-title">{item.title}</span>
                    <span className="also-note">{item.note}</span>
                    <span className="also-stack">{item.stack}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
