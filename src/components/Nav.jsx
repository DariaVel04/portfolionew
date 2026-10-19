import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/content.js";

export function Nav({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={scrolled || open ? "nav is-solid" : "nav"}>
      <a className="nav-mark" href="#top">
        DV
      </a>
      <nav className="nav-links" aria-label="Sections">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-mail" href={`mailto:${profile.email}`}>
        Email
      </a>
      <button
        ref={buttonRef}
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div id="mobile-menu" className="mobile-menu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            Email
          </a>
        </div>
      ) : null}
    </header>
  );
}
