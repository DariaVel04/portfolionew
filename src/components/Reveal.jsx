import { useEffect, useRef } from "react";

export function Reveal({ className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !document.documentElement.classList.contains("motion")) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("is-in");
        observer.disconnect();
      },
      { threshold: 0.16 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className ? `reveal ${className}` : "reveal"}>
      {children}
    </div>
  );
}
