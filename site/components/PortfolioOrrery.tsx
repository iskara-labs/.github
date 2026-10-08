"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ORBIT_LABEL,
  PORTFOLIO,
  type PortfolioItem,
  type PortfolioOrbit,
} from "@/lib/portfolio";

/**
 * The studio as an orrery: every product sits on the ring that matches its
 * real release state. Staged work orbits close to the core; products that are
 * in market sit on the outer ring. Position is information, not decoration.
 */

const SIZE = 600;
const CENTER = SIZE / 2;

const RADIUS: Record<Exclude<PortfolioOrbit, "foundation">, number> = {
  staged: 132,
  prerelease: 198,
  market: 262,
};

// Angles (degrees, clockwise from 3 o'clock) chosen so labels never collide.
const ANGLE: Record<string, number> = {
  FoundersGPT: 8,
  Conformetra: 74,
  Qantrive: 136,
  Nowly: 194,
  OriginVox: 248,
  OfisPilot: 318,
};

type PlacedProduct = PortfolioItem & {
  x: number;
  y: number;
  side: "left" | "right";
  /** Outermost nodes whose labels flip inward on narrow screens. */
  edge: boolean;
};

const products: PlacedProduct[] = PORTFOLIO.filter(
  (item) => item.orbit !== "foundation" && item.domain,
).map((item) => {
  const radius = RADIUS[item.orbit as keyof typeof RADIUS];
  const angle = ((ANGLE[item.name] ?? 0) * Math.PI) / 180;
  const x = CENTER + radius * Math.cos(angle);
  const y = CENTER + radius * Math.sin(angle);
  return {
    ...item,
    x,
    y,
    side: x < CENTER ? "left" : "right",
    edge: Math.abs(x - CENTER) > 200,
  };
});

const foundation = PORTFOLIO.find((item) => item.orbit === "foundation");

const rings = (Object.keys(RADIUS) as Array<keyof typeof RADIUS>).map((orbit) => ({
  orbit,
  radius: RADIUS[orbit],
  count: products.filter((item) => item.orbit === orbit).length,
}));

const ORBIT_ORDER: PortfolioOrbit[] = ["market", "prerelease", "staged"];

// The sweep opens on the studio overview, then walks the rings from the most
// mature products inward — the same order a visitor reads the instrument.
const SEQUENCE: Array<number | null> = [
  null,
  ...ORBIT_ORDER.flatMap((orbit) =>
    products.flatMap((item, index) => (item.orbit === orbit ? [index] : [])),
  ),
];

const ringCount = (orbit: PortfolioOrbit) =>
  products.filter((item) => item.orbit === orbit).length;

const NUMBER_WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const word = (n: number) => NUMBER_WORDS[n] ?? String(n);

const AUTO_ADVANCE_MS = 5200;

export function PortfolioOrrery() {
  const [step, setStep] = useState(0);
  const [pinned, setPinned] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const activeIndex = SEQUENCE[step] ?? null;
  const active = activeIndex === null ? null : products[activeIndex];

  // A slow, single signal sweep — only while visible, never under reduced motion,
  // and it stops for good once the visitor takes control.
  useEffect(() => {
    if (pinned) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    if (shellRef.current) observer.observe(shellRef.current);

    const timer = window.setInterval(() => {
      if (visible && document.visibilityState === "visible") {
        setStep((current) => (current + 1) % SEQUENCE.length);
      }
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
      observer.disconnect();
    };
  }, [pinned]);

  const select = (index: number) => {
    setPinned(true);
    setStep(Math.max(0, SEQUENCE.indexOf(index)));
  };

  return (
    <div className="orrery" ref={shellRef}>
      <p className="orrery-caption">
        <span>The portfolio, by release state</span>
        <span aria-hidden="true" className="orrery-caption-rule" />
      </p>
      <div className="orrery-stage">
        <svg
          className="orrery-svg"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-labelledby="orrery-title orrery-desc"
        >
          <title id="orrery-title">Iskara Labs portfolio orrery</title>
          <desc id="orrery-desc">
            Six products arranged on three rings by release state: staged nearest the
            core, pre-release in the middle, in market on the outer ring. The shared
            platform foundation sits at the centre.
          </desc>

          <defs>
            <radialGradient id="orrery-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8aa7ff" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#8aa7ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={110} fill="url(#orrery-core-glow)" />

          {rings.map((ring, index) => (
            <g key={ring.orbit} className="orrery-ring" style={{ ["--i" as string]: index }}>
              <circle
                cx={CENTER}
                cy={CENTER}
                r={ring.radius}
                pathLength={360}
                className={`orrery-orbit${active?.orbit === ring.orbit ? " is-active" : ""}`}
              />
              <text
                x={CENTER}
                y={CENTER - ring.radius - 8}
                textAnchor="middle"
                className="orrery-ring-label"
              >
                {ORBIT_LABEL[ring.orbit]} · {ring.count}
              </text>
            </g>
          ))}

          {/* Fine radial ticks give the instrument its scale. */}
          <g className="orrery-ticks" aria-hidden="true">
            {Array.from({ length: 72 }, (_, i) => {
              const a = (i * 5 * Math.PI) / 180;
              const inner = i % 6 === 0 ? 278 : 284;
              return (
                <line
                  key={i}
                  x1={CENTER + inner * Math.cos(a)}
                  y1={CENTER + inner * Math.sin(a)}
                  x2={CENTER + 290 * Math.cos(a)}
                  y2={CENTER + 290 * Math.sin(a)}
                />
              );
            })}
          </g>

          {products.map((item, index) => (
            <line
              key={item.name}
              x1={CENTER}
              y1={CENTER}
              x2={item.x}
              y2={item.y}
              className={`orrery-spoke tone-${item.tone}${index === activeIndex ? " is-active" : ""}`}
            />
          ))}

          <circle cx={CENTER} cy={CENTER} r={58} className="orrery-core" />
          <circle cx={CENTER} cy={CENTER} r={70} className="orrery-core-ring" />
        </svg>

        <div className="orrery-core-copy" aria-hidden="true">
          <strong>Iskara Labs</strong>
          <span>{foundation ? "Shared platform" : "Studio"}</span>
        </div>

        <ul className="orrery-nodes" aria-label="Portfolio products">
          {products.map((item, index) => (
            <li
              key={item.name}
              className={`orrery-node tone-${item.tone} side-${item.side}${item.edge ? " is-edge" : ""}${
                index === activeIndex ? " is-active" : ""
              }`}
              style={{
                left: `${(item.x / SIZE) * 100}%`,
                top: `${(item.y / SIZE) * 100}%`,
                ["--i" as string]: index,
              }}
            >
              <button
                type="button"
                aria-pressed={index === activeIndex}
                aria-controls="orrery-readout"
                onClick={() => select(index)}
                onFocus={() => select(index)}
                onMouseEnter={() => select(index)}
              >
                <span className="orrery-dot" aria-hidden="true" />
                <span className="orrery-label">{item.name}</span>
                <span className="visually-hidden">
                  , {item.category}, {ORBIT_LABEL[item.orbit]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active ? (
        <div
          className={`orrery-readout tone-${active.tone}`}
          id="orrery-readout"
          aria-live={pinned ? "polite" : "off"}
        >
          <div className="orrery-readout-head">
            <span className="orrery-readout-dot" aria-hidden="true" />
            <strong>{active.name}</strong>
            <span>{active.category}</span>
            <span className="orrery-readout-stage">{active.stage}</span>
          </div>
          <p>{active.description}</p>
          <a href={`https://${active.domain}`} target="_blank" rel="noreferrer">
            {active.domain}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      ) : (
        <div className="orrery-readout is-overview" id="orrery-readout" aria-live="off">
          <div className="orrery-readout-head">
            <span className="orrery-readout-dot" aria-hidden="true" />
            <strong>Iskara Labs</strong>
            <span>Studio overview</span>
          </div>
          <p>
            {word(products.length).replace(/^./, (c) => c.toUpperCase())} products,
            placed by release state: {word(ringCount("market"))} in market,{" "}
            {word(ringCount("prerelease"))} in pre-release and{" "}
            {word(ringCount("staged"))} staged — all built on one shared platform
            foundation. Select a product to inspect it.
          </p>
          <Link href="/portfolio">Full portfolio</Link>
        </div>
      )}
    </div>
  );
}
