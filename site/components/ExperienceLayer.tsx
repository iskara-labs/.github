"use client";

import { useEffect } from "react";

export function ExperienceLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("v2-js");

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => {
        root.classList.remove("v2-js");
      };
    }

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );

    targets.forEach((target) => reveal.observe(target));
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      reveal.disconnect();
      root.classList.remove("v2-js");
    };
  }, []);

  return (
    <>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
