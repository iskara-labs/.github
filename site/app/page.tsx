import Link from "next/link";
import { PortfolioOrrery } from "@/components/PortfolioOrrery";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { SignalStrip } from "@/components/SignalStrip";
import { COMPANY } from "@/lib/company";
import { ACTIVE_PRODUCT_COUNT } from "@/lib/portfolio";

const operatingSignals = [
  ["Evidence-led", "Claims trace to code, tests, deployment state and release gates."],
  ["Human-controlled", "Approval boundaries stay explicit wherever automation could create risk."],
  ["Production-aware", "Preview, staged, pilot and production are never treated as the same state."],
  ["Portable systems", "Shared platform patterns are reused without forcing products into one shape."],
];

const companySignals = [
  { label: "Development brand", value: "Iskara Labs", state: "Active" },
  { label: "Planned entity", value: "ISKARA LABS OÜ", state: "Planned" },
  { label: "Jurisdiction", value: "Estonia", state: "Planned" },
  { label: "Current status", value: "Incorporation in progress", state: "Open" },
];

const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const productCountWord = NUMBER_WORDS[ACTIVE_PRODUCT_COUNT] ?? String(ACTIVE_PRODUCT_COUNT);

export default function HomePage() {
  return (
    <>
      <section className="p3-hero shell" aria-labelledby="hero-title">
        <div className="p3-hero-copy">
          <p className="p3-hero-kicker">
            <span className="p3-pulse" aria-hidden="true" />
            Applied AI studio, founder-led
          </p>

          <h1 id="hero-title">
            {productCountWord} products. One discipline for building living systems.
          </h1>

          <p className="p3-hero-lede">
            Iskara Labs builds AI-native software for compliance, operations, research,
            media and real-world coordination — and keeps the release state of every
            product honest, from staged to in market.
          </p>

          <div className="p3-actions">
            <Link className="p3-button p3-button-primary" href="/portfolio">
              Explore the portfolio
            </Link>
            <Link className="p3-button p3-button-quiet" href={COMPANY.founderPath}>
              Meet the founder
            </Link>
          </div>

          <p className="p3-hero-footnote">
            Planned company: {COMPANY.plannedLegalName}, {COMPANY.plannedJurisdiction}.
            Incorporation in progress.
          </p>
        </div>

        <div className="p3-hero-visual">
          <PortfolioOrrery />
        </div>
      </section>

      <SignalStrip />

      <section className="p3-thesis shell" data-reveal aria-label="Operating thesis">
        <p>
          The portfolio is intentionally diverse. The operating standard is not.
        </p>
        <small>
          Every product is expected to know what is real, what is staged, what is
          allowed, what is blocked — and why.
        </small>
      </section>

      <section className="p3-section shell" aria-labelledby="portfolio-title">
        <div className="p3-section-head" data-reveal>
          <h2 id="portfolio-title">Six products, one shared foundation.</h2>
          <p>
            Customer products, media and research — each designed for its own market,
            all built on the same platform patterns and the same explicit product truth.
          </p>
          <Link className="p3-text-link" href="/portfolio">
            Full portfolio
          </Link>
        </div>
        <PortfolioShowcase />
      </section>

      <section className="p3-section shell" aria-labelledby="standard-title">
        <div className="p3-section-head" data-reveal>
          <h2 id="standard-title">Fast enough to move. Structured enough to trust.</h2>
          <p>
            The point is not to make every product look identical. It is to make every
            product governable, observable and honest about its state.
          </p>
        </div>
        <ul className="p3-principles" data-reveal>
          {operatingSignals.map(([title, copy]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="p3-section shell" aria-labelledby="builder-title">
        <div className="p3-builder" data-reveal>
          <div className="p3-founder">
            <h2 id="builder-title">Built by {COMPANY.founderName}.</h2>
            <p>
              Iskara Labs is a focused product company: compact teams, strong technical
              governance and direct founder involvement in every product — so shared
              capabilities can compound across the portfolio.
            </p>
            <div className="p3-actions">
              <Link className="p3-button p3-button-primary founder-link" href={COMPANY.founderPath}>
                Founder profile
              </Link>
              <Link className="p3-button p3-button-quiet" href="/company">
                Company readiness
              </Link>
            </div>
          </div>

          <div className="p3-console" aria-label="Company readiness">
            <div className="p3-console-head">
              <span>Company readiness</span>
              <span className="p3-console-live">
                <i aria-hidden="true" />
                Current
              </span>
            </div>
            <dl>
              {companySignals.map((signal) => (
                <div className="p3-console-row" key={signal.label}>
                  <dt>{signal.label}</dt>
                  <dd>
                    <strong>{signal.value}</strong>
                    <small data-state={signal.state.toLowerCase()}>{signal.state}</small>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="p3-console-note">
              No registry code, VAT number or legal address is published until
              incorporation is complete.
            </p>
          </div>
        </div>
      </section>

      <section className="p3-final shell" data-reveal aria-labelledby="final-title">
        <h2 id="final-title">Build the signal. Ship the system.</h2>
        <p>
          Product ideas become real when the architecture, governance, distribution and
          public truth all agree.
        </p>
        <div className="p3-actions">
          <Link className="p3-button p3-button-primary" href="/contact">
            Start a conversation
          </Link>
          <Link className="p3-button p3-button-quiet" href="/portfolio">
            Explore every product
          </Link>
        </div>
      </section>
    </>
  );
}
