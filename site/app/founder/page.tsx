import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Sedat İşkara, founder of Iskara Labs — founder-led product building across finance, operations, AI and governed digital systems.",
  alternates: { canonical: "/founder" },
};

const founderFacts = [
  ["Role", "Founder · Iskara Labs"],
  ["Background", "SMMM · MBA"],
  ["Operating model", "Founder-led · governed delivery"],
  ["Focus", "Product systems · AI · operations · compliance"],
] as const;

const principles = [
  {
    number: "01",
    title: "Domain depth before abstraction",
    copy: "Products start from a real operating problem, not from a technology demo looking for a use case.",
  },
  {
    number: "02",
    title: "Truth in the product surface",
    copy: "Preview, pilot, production and commercial availability are treated as different states and communicated explicitly.",
  },
  {
    number: "03",
    title: "Shared capability without forced sameness",
    copy: "The portfolio can reuse governance, infrastructure and delivery patterns while each product keeps its own market logic.",
  },
] as const;

export default function FounderPage() {
  return (
    <section className="page shell v2-founder-page">
      <div className="founder-hero-grid">
        <div className="page-intro v2-page-intro" data-reveal>
          <div className="v2-status-row">
            <span className="v2-live-chip">
              <i aria-hidden="true" />
              Founder / Iskara Labs
            </span>
            <span>Direct product involvement · company architecture in progress</span>
          </div>
          <p className="section-kicker">Founder</p>
          <h1>
            {COMPANY.founderName}
            <span> Founder-led product systems.</span>
          </h1>
          <p>
            Iskara Labs is being built around direct founder involvement, domain
            expertise and controlled product delivery. The portfolio spans different
            markets, but the operating expectation stays consistent: understand the
            problem deeply, make system boundaries explicit and keep public claims
            aligned with verified reality.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={COMPANY.founderLinkedIn}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="button button-ghost"
              href={COMPANY.founderGitHub}
              target="_blank"
              rel="noreferrer"
            >
              Public GitHub ↗
            </a>
          </div>
        </div>

        <aside className="founder-profile-panel" data-reveal aria-label="Founder profile facts">
          <div className="founder-monogram" aria-hidden="true">
            Sİ
          </div>
          <div className="founder-profile-copy">
            <span>ISKARA / FOUNDER 01</span>
            <strong>{COMPANY.founderName}</strong>
            <small>Founder · Iskara Labs</small>
          </div>
          <div className="founder-facts">
            {founderFacts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <div className="section-heading compact-heading v2-section-heading" data-reveal>
        <p className="section-kicker">Operating thesis</p>
        <h2>Build close to the problem. Scale only what proves reusable.</h2>
      </div>

      <div className="founder-principles">
        {principles.map((principle, index) => (
          <article
            key={principle.number}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${index * 80}ms` }}
          >
            <span>{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.copy}</p>
          </article>
        ))}
      </div>

      <div className="founder-company-note" data-reveal>
        <div>
          <p className="section-kicker">Company boundary</p>
          <h2>Founder profile here. Legal claims only when verified.</h2>
        </div>
        <div>
          <p>
            {COMPANY.brandName} is the active development brand.{" "}
            {COMPANY.plannedLegalName} in {COMPANY.plannedJurisdiction} remains the
            planned company structure while incorporation is in progress.
          </p>
          <Link className="text-link" href="/company">
            Company & Estonia readiness →
          </Link>
        </div>
      </div>
    </section>
  );
}
