import { useCallback, useEffect, useRef, useState } from "react";
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Cursor } from "./components/Cursor.jsx";
import { Education } from "./components/Education.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Nav } from "./components/Nav.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { projects } from "./data/content.js";
import { useActiveSection } from "./hooks/useActiveSection.js";

export default function App() {
  const active = useActiveSection();
  const [filter, setFilter] = useState("all");
  const [focusId, setFocusId] = useState("helmi");
  const [openId, setOpenId] = useState(null);
  const [signal, setSignal] = useState(0);
  const bar = useRef(null);

  const openProject = useCallback((id) => {
    setFilter("all");
    setFocusId(id);
    setOpenId(id);
    setSignal((value) => value + 1);
  }, []);

  const toggleProject = useCallback((id) => {
    setFocusId(id);
    setOpenId((current) => (current === id ? null : id));
  }, []);

  const changeFilter = useCallback((next) => {
    const visible = projects.filter((project) => next === "all" || project.kind === next);
    setFilter(next);
    setOpenId(null);
    if (visible[0] && !visible.some((project) => project.id === focusId)) {
      setFocusId(visible[0].id);
    }
  }, [focusId]);

  useEffect(() => {
    const node = bar.current;
    if (!node) return undefined;
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const progress = max > 0 ? root.scrollTop / max : 0;
      node.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!signal || !openId) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(`project-${openId}`)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [signal, openId]);

  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <div className="progress" ref={bar} aria-hidden="true" />
      <Cursor />
      <Nav active={active} />
      <main>
        <Hero onOpenProject={openProject} />
        <About />
        <Projects
          filter={filter}
          focusId={focusId}
          openId={openId}
          onFilter={changeFilter}
          onFocus={setFocusId}
          onToggle={toggleProject}
        />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
