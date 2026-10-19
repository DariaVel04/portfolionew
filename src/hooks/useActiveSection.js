import { useEffect, useState } from "react";

const SECTION_IDS = ["top", "about", "work", "skills", "education", "contact"];

export function useActiveSection() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2;
      const marker = Math.max(220, window.innerHeight * 0.33);
      let current = atBottom ? SECTION_IDS[SECTION_IDS.length - 1] : SECTION_IDS[0];
      if (!atBottom) {
        for (const id of SECTION_IDS) {
          const node = document.getElementById(id);
          if (node && node.getBoundingClientRect().top <= marker) current = id;
        }
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  return active;
}
