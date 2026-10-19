import { useEffect, useRef } from "react";

export function Cursor() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!node || !fine || reduce) return undefined;

    node.hidden = false;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let frame = 0;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      const hot = event.target instanceof Element && event.target.closest("a, button");
      node.classList.toggle("is-hot", Boolean(hot));
    };

    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      node.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" hidden aria-hidden="true">
      <span />
    </div>
  );
}
