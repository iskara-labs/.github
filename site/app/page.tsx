import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { ACTIVE_PRODUCT_COUNT, PORTFOLIO } from "@/lib/portfolio";

const principles = [
  {
    kicker: "01",
    title: "Truth before theatre",
    copy: "Claims should trace to evidence. If a capability is staged, experimental or unavailable, the product should say so.",
  },
  {
    kicker: "02",
    title: "Governed by default",
    copy: "Human approval, auditability and fail-closed boundaries belong in the product architecture, not in a future hardening sprint.",
  },
  {
    kicker: "03",
    title: "Production discipline",
    copy: "A build is not a release. We separate code readiness, live verification, deployment state and commercial availability.",
  },
];

export default function HomePage() {
  const featured = PORTFOLIO.filter(
    (item) => item.category !== "Shared infrastructure",
  ).slice(0, 6);

  return (
    <>
      <section className="hero shell">
        <div className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          Product development brand · Estonia structure planned
        </div>
        <h1>
          Build systems.
          <br />
          <span>Not demos.</span>
        </h1>
        <p className="hero-copy">
          Iskara Labs builds focused digital products across AI, operational
          intelligence, compliance, finance research, media and real-world
          coordination — with governance and product truth built into the work.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/portfolio">
            Explore the portfolio
          </Link>
          <Link className="button button-ghost" href="/company">
            Company & Estonia readiness
          </Link>
        </div>
        <div className="hero-proof">
          <div>
            <strong>{ACTIVE_PRODUCT_COUNT}</strong>
            <span>product brands</span>
          </div>
          <div>
            <strong>1</strong>
            <span>shared platform foundation</span>
          </div>
          <div>
            <strong>Estonia</strong>
            <span>planned jurisdiction</span>
          </div>
          <div>
            <strong>In progress</strong>
            <span>incorporation status</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2>Different markets. One operating standard.</h2>
          </div>
          <Link className="text-link" href="/portfolio">
            View the full portfolio →
          </Link>
        </div>
        <div className="portfolio-grid">
          {featured.map((item, index) => (
            <article className="portfolio-card" key={item.name}>
              <div className="portfolio-topline">
                <span className="portfolio-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pill">{item.stage}</span>
              </div>
              <div>
                <p className="card-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="card-meta">
                <span>{item.domain ?? "Internal platform"}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-kicker">Operating principles</p>
          <h2>Software that can explain what it is doing.</h2>
          <p>
            The portfolio spans different categories, but the engineering
            posture is consistent: explicit boundaries, evidence, controlled
            activation and honest maturity labels.
          </p>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.kicker}>
              <span>{principle.kicker}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="company-band">
          <div>
            <p className="section-kicker">Company structure</p>
            <h2>Designed for the company we intend to become.</h2>
            <p>
              Iskara Labs is currently a development brand and GitHub
              organization founded by {COMPANY.founderName}. The planned legal
              structure is {COMPANY.plannedLegalName} in{" "}
              {COMPANY.plannedJurisdiction}. Incorporation is not yet complete.
            </p>
          </div>
          <div className="company-band-status">
            <span>Planned legal form</span>
            <strong>{COMPANY.plannedLegalForm}</strong>
            <span>Status</span>
            <strong>{COMPANY.incorporationStatus}</strong>
            <Link className="button button-ghost" href="/company">
              See the readiness record
            </Link>
          </div>
        </div>
      </section>

      <section className="section shell final-cta">
        <p className="section-kicker">Iskara Labs</p>
        <h2>Focused products. Governed systems. Production discipline.</h2>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Work with us
          </Link>
          <a
            className="button button-ghost"
            href={COMPANY.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub organization
          </a>
        </div>
      </section>
    </>
  );
}
