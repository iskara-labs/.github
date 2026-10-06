"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ExperienceLayer() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("v2-js");

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      root.classList.remove("v2-js");
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let reveal: IntersectionObserver | null = null;
    let mutations: MutationObserver | null = null;
    let failSafe = 0;

    const show = (target: HTMLElement) => {
      target.classList.add("is-visible");
      reveal?.unobserve(target);
    };

    const observe = (target: HTMLElement) => {
      if (target.classList.contains("is-visible")) return;

      if (reducedMotion) {
        show(target);
        return;
      }

      const rect = target.getBoundingClientRect();
      const isAlreadyInViewport =
        rect.top <= window.innerHeight * 0.96 && rect.bottom >= 0;

      if (isAlreadyInViewport) {
        show(target);
        return;
      }

      reveal?.observe(target);
    };

    reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -3% 0px" },
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach(observe);
    };

    const animationFrame = requestAnimationFrame(scan);

    mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of Array.from(record.addedNodes)) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches("[data-reveal]")) observe(node);
          node
            .querySelectorAll<HTMLElement>("[data-reveal]")
            .forEach(observe);
        }
      }
    });

    mutations.observe(document.body, { childList: true, subtree: true });

    // Animation is enhancement, never a content-availability dependency.
    failSafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
        .forEach(show);
    }, 1200);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(failSafe);
      mutations?.disconnect();
      reveal?.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
    </>
  );
}
