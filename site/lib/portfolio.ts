export type PortfolioItem = {
  name: string;
  category: string;
  domain: string | null;
  stage: string;
  description: string;
  note?: string;
  href?: string;
  /** Where the product sits in the studio's release orbit. Drives the home orrery. */
  orbit: PortfolioOrbit;
  /** Brand tone used for the product's signal colour across the studio site. */
  tone: PortfolioTone;
};

export type PortfolioOrbit = "market" | "prerelease" | "staged" | "foundation";
export type PortfolioTone = "violet" | "cyan" | "rose" | "amber" | "emerald" | "blue" | "slate";

export const ORBIT_LABEL: Record<PortfolioOrbit, string> = {
  market: "In market",
  prerelease: "Pre-release",
  staged: "Staged",
  foundation: "Shared foundation",
};

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Nowly",
    orbit: "market",
    tone: "violet",
    category: "Consumer product",
    domain: "nowly.com.tr",
    stage: "Active product",
    description:
      "A social planning product designed to turn spontaneous ideas into real-world plans and meetups.",
    href: "https://nowly.com.tr",
  },
  {
    name: "OfisPilot",
    orbit: "prerelease",
    tone: "cyan",
    category: "Practice operations",
    domain: "ofispilot.com.tr",
    stage: "Release candidate",
    description:
      "A Practice OS for Turkish accounting offices, bringing client work, declarations, documents, deadlines and operational visibility into one system.",
    note: "Commercial rollout remains governed by the product's release gates.",
  },
  {
    name: "OriginVox",
    orbit: "staged",
    tone: "rose",
    category: "Founder growth",
    domain: "originvox.com",
    stage: "Staged product",
    description:
      "An AI-assisted content, approval and growth workspace designed around a founder's authentic voice and human-controlled publishing.",
  },
  {
    name: "Qantrive",
    orbit: "prerelease",
    tone: "amber",
    category: "Research intelligence",
    domain: "qantrive.com",
    stage: "Research platform",
    description:
      "AI-assisted trading research, signals, risk and paper-validation workflows built for research discipline rather than autonomous execution.",
    note: "Research only. No live-trading claim is made here.",
  },
  {
    name: "Conformetra",
    orbit: "staged",
    tone: "emerald",
    category: "Industrial compliance",
    domain: "conformetra.com",
    stage: "Staged platform",
    description:
      "Industrial compliance intelligence for product evidence, deterministic assessment and market-readiness decisions.",
  },
  {
    name: "FoundersGPT",
    orbit: "market",
    tone: "blue",
    category: "Media & founder education",
    domain: "getfoundersgpt.com",
    stage: "Active media brand",
    description:
      "A research-led media brand for startup founders, combining a website, content engine, newsletter workflow and governed publishing system.",
  },
  {
    name: "Universal AI Platform",
    orbit: "foundation",
    tone: "slate",
    category: "Shared infrastructure",
    domain: null,
    stage: "Foundation",
    description:
      "The implementation foundation for shared orchestration, execution, memory, knowledge, policy, audit and observability capabilities across future Iskara Labs products.",
    note: "Infrastructure, not a standalone customer product.",
  },
];

export const ACTIVE_PRODUCT_COUNT = PORTFOLIO.filter(
  (item) => item.category !== "Shared infrastructure",
).length;
