import Link from "next/link";
import { PortfolioConstellation } from "@/components/PortfolioConstellation";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { SignalStrip } from "@/components/SignalStrip";
import { COMPANY } from "@/lib/company";
import { ACTIVE_PRODUCT_COUNT } from "@/lib/portfolio";

const operatingSignals = [
  ["Evidence-led", "Claims trace to code, tests, deployment state and release gates."],
  ["Human-controlled", "Approval boundaries stay explicit where automation could create risk."],
  ["Production-aware", "Preview, staged, pilot and production are never treated as the same state."],
  ["Portable systems", "Shared platform patterns are reused without forcing products into one shape."],
];

const companySignals = [
  { label: "Development brand", value: "Iskara Labs", state: "Active" },
  { label: "Planned entity", value: "ISKARA LABS OÜ", state: "Planned" },
  { label: "Jurisdiction", value: "Estonia", state: "Planned" },
  { label: "Current status", value: "Incorporation in progress", state: "Open" },
];

export default function HomePage() {
  return (
    <>
      <section className="v2-hero shell">
        <div className="v2-hero-copy" data-reveal>
          <div className="v2-status-row">
            <span className="v2-live-chip">
              <i aria-hidden="true" />
              Product studio online
            </span>
            <span>Estonia structure planned · incorporation in progress</span>
          </div>

          <h1>
            We build
            <span className="v2-gradient-word"> living systems.</span>
          </h1>

          <p className="v2-hero-lede">
            Iskara Labs turns ambitious product ideas into governed, production-aware
            digital systems — across AI, compliance, finance research, operations,
            media and real-world coordination.
          </p>

          <div className="hero-actions v2-actions">
            <Link className="button button-primary v2-primary" href="/portfolio">
              Enter the portfolio
              <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-ghost" href="/company">
              Company & Estonia readiness
            </Link>
          </div>

          <div className="v2-hero-metrics" aria-label="Iskara Labs portfolio summary">
            <div>
              <strong>{ACTIVE_PRODUCT_COUNT}</strong>
              <span>product brands</span>
            </div>
            <div>
              <strong>1</strong>
              <span>shared platform foundation</span>
            </div>
            <div>
              <strong>EU</strong>
              <span>company architecture</span>
            </div>
          </div>
        </div>

        <div className="v2-hero-visual" data-reveal>
          <PortfolioConstellation />
        </div>
      </section>

      <SignalStrip />

      <section className="v2-manifesto shell" data-reveal>
        <div className="manifesto-label">
          <span>01</span>
          <p>Operating thesis</p>
        </div>
        <div className="manifesto-copy">
          <p>
            The portfolio is intentionally diverse.
            <span> The operating standard is not.</span>
          </p>
          <small>
            Every product is expected to know what is real, what is staged, what is
            allowed, what is blocked and why.
          </small>
        </div>
      </section>

      <section className="section shell v2-portfolio-section">
        <div className="section-heading split-heading v2-section-heading" data-reveal>
          <div>
            <p className="section-kicker">Portfolio constellation</p>
            <h2>Seven systems. One operating standard.</h2>
            <p>
              Customer products, media, research and shared infrastructure — each
              designed for its own market, all built with explicit product truth.
            </p>
          </div>
          <Link className="text-link" href="/portfolio">
            Full portfolio →
          </Link>
        </div>
        <PortfolioShowcase />
      </section>

      <section className="section shell v2-operating-section">
        <div className="v2-system-grid">
          <div className="v2-system-intro" data-reveal>
            <p className="section-kicker">The Iskara standard</p>
            <h2>Fast enough to move. Structured enough to trust.</h2>
            <p>
              The point is not to make every product look identical. The point is to
              make every product governable, observable and honest about its state.
            </p>
          </div>
          <div className="v2-signal-list">
            {operatingSignals.map(([title, copy], index) => (
              <article
                key={title}
                className="v2-signal-row"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell v2-company-section">
        <div className="v2-company-shell" data-reveal>
          <div className="v2-company-copy">
            <p className="section-kicker">Company architecture</p>
            <h2>Built for the company we intend to become.</h2>
            <p>
              Today, Iskara Labs is the active development brand founded by{" "}
              {COMPANY.founderName}. The planned legal structure is{" "}
              {COMPANY.plannedLegalName} in {COMPANY.plannedJurisdiction}. Until
              incorporation is complete, the website says exactly that — no invented
              registry code, VAT number or legal address.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/company">
                Open company readiness
              </Link>
              <a
                className="button button-ghost"
                href={COMPANY.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub organization ↗
              </a>
            </div>
          </div>

          <div className="v2-company-console" aria-label="Company readiness console">
            <div className="console-header">
              <span>ISKARA / COMPANY READINESS</span>
              <span className="console-status">
                <i aria-hidden="true" />
                LIVE
              </span>
            </div>
            <div className="console-body">
              {companySignals.map((signal) => (
                <div className="console-row" key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                  <small>{signal.state}</small>
                </div>
              ))}
            </div>
            <div className="console-scan" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section shell v2-founder-section">
        <div className="v2-founder-card" data-reveal>
          <div className="founder-number">FOUNDER / 01</div>
          <div>
            <p className="section-kicker">Founder-led product building</p>
            <h2>{COMPANY.founderName}</h2>
            <p>
              Iskara Labs is being built as a focused product company: compact teams,
              strong technical governance, direct founder involvement and a portfolio
              that can compound shared capabilities over time.
            </p>
          </div>
          <a
            className="founder-link"
            href={COMPANY.founderProfile}
            target="_blank"
            rel="noreferrer"
          >
            Founder profile
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="section shell v2-final">
        <div className="v2-final-orb" aria-hidden="true" />
        <p className="section-kicker">Iskara Labs</p>
        <h2>
          Build the signal.
          <span> Ship the system.</span>
        </h2>
        <p>
          Product ideas become real when the architecture, governance, distribution
          and public truth all agree.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary v2-primary" href="/contact">
            Start a conversation
          </Link>
          <Link className="button button-ghost" href="/portfolio">
            Explore every product
          </Link>
        </div>
      </section>
    </>
  );
}
