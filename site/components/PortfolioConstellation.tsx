"use client";

import { useState } from "react";

type Node = {
  name: string;
  domain: string;
  category: string;
  x: number;
  y: number;
  tone: string;
};

const nodes: Node[] = [
  { name: "Nowly", domain: "nowly.com.tr", category: "Consumer", x: 16, y: 23, tone: "violet" },
  { name: "OfisPilot", domain: "ofispilot.com.tr", category: "Practice OS", x: 76, y: 17, tone: "cyan" },
  { name: "OriginVox", domain: "originvox.com", category: "Founder growth", x: 86, y: 51, tone: "rose" },
  { name: "Qantrive", domain: "qantrive.com", category: "Research", x: 71, y: 82, tone: "amber" },
  { name: "Conformetra", domain: "conformetra.com", category: "Compliance", x: 24, y: 80, tone: "emerald" },
  { name: "FoundersGPT", domain: "getfoundersgpt.com", category: "Media", x: 9, y: 53, tone: "blue" },
];

export function PortfolioConstellation() {
  const [active, setActive] = useState<Node>(nodes[0]);

  return (
    <div className="constellation-shell" aria-label="Iskara Labs product constellation">
      <div className="constellation-radar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <svg
        className="constellation-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {nodes.map((node) => (
          <line
            key={node.name}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            className={active.name === node.name ? "is-active" : ""}
          />
        ))}
      </svg>

      <div className="constellation-core">
        <span className="core-kicker">ISKARA</span>
        <strong>LABS</strong>
        <small>Product system</small>
      </div>

      {nodes.map((node, index) => (
        <button
          type="button"
          key={node.name}
          className={`constellation-node tone-${node.tone} ${active.name === node.name ? "is-active" : ""}`}
          style={{ left: `${node.x}%`, top: `${node.y}%`, ["--delay" as string]: `${index * -0.7}s` }}
          onMouseEnter={() => setActive(node)}
          onFocus={() => setActive(node)}
          onClick={() => setActive(node)}
          aria-label={`${node.name}, ${node.category}, ${node.domain}`}
        >
          <span className="node-pulse" aria-hidden="true" />
          <span className="node-copy">
            <strong>{node.name}</strong>
            <small>{node.category}</small>
          </span>
        </button>
      ))}

      <div className="constellation-readout" aria-live="polite">
        <span>Active signal</span>
        <strong>{active.name}</strong>
        <a href={`https://${active.domain}`} target="_blank" rel="noreferrer">
          {active.domain} ↗
        </a>
      </div>
    </div>
  );
}
