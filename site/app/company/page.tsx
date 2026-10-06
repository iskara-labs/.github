import type { Metadata } from "next";
import { COMPANY, LEGAL_READINESS } from "@/lib/company";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Iskara Labs company structure, founder identity and Estonia incorporation readiness.",
  alternates: { canonical: "/company" },
};

const activationItems = [
  "Replace planned legal name with the verified registered name.",
  "Publish the registry code only after it is issued and independently verified.",
  "Publish a registered address only after the legal address is active.",
  "Add VAT information only after registration, if and when applicable.",
  "Update contracting-party and data-controller language only after legal review.",
  "Align app-store publisher, invoices, banking and contractual disclosures with the verified entity.",
];

export default function CompanyPage() {
  return (
    <section className="page shell v2-company-page">
      <div className="page-intro v2-page-intro" data-reveal>
        <div className="v2-status-row">
          <span className="v2-live-chip">
            <i aria-hidden="true" />
            Company architecture live
          </span>
          <span>No legal-entity claim before verification</span>
        </div>
        <p className="section-kicker">Company</p>
        <h1>
          Estonia-ready.
          <span> Truth-first.</span>
        </h1>
        <p>
          The site is structured so verified legal details can be activated cleanly
          after incorporation. Until then, the public record stays precise: Iskara
          Labs is the development brand; {COMPANY.plannedLegalName} is the planned
          company.
        </p>
      </div>

      <div className="v2-company-shell v2-company-detail" data-reveal>
        <div className="v2-company-copy">
          <p className="section-kicker">Founder</p>
          <h2>{COMPANY.founderName}</h2>
          <p>
            Founder of Iskara Labs and the product portfolio developed under the
            brand. The operating model is founder-led today and structured to support
            a compact core team as the company is incorporated and scales.
          </p>
          <a
            className="text-link"
            href={COMPANY.founderProfile}
            target="_blank"
            rel="noreferrer"
          >
            Verified founder profile →
          </a>
        </div>

        <div className="v2-company-console" aria-label="Planned company structure">
          <div className="console-header">
            <span>PLANNED ENTITY / ESTONIA</span>
            <span className="console-status">
              <i aria-hidden="true" />
              PRE-INCORPORATION
            </span>
          </div>
          <div className="console-body">
            <div className="console-row">
              <span>Legal name</span>
              <strong>{COMPANY.plannedLegalName}</strong>
              <small>Planned</small>
            </div>
            <div className="console-row">
              <span>Legal form</span>
              <strong>{COMPANY.plannedLegalForm}</strong>
              <small>Planned</small>
            </div>
            <div className="console-row">
              <span>Jurisdiction</span>
              <strong>{COMPANY.plannedJurisdiction}</strong>
              <small>Planned</small>
            </div>
            <div className="console-row">
              <span>Status</span>
              <strong>{COMPANY.incorporationStatus}</strong>
              <small>Open</small>
            </div>
          </div>
          <div className="console-scan" aria-hidden="true" />
        </div>
      </div>

      <div className="section-heading compact-heading v2-section-heading" data-reveal>
        <p className="section-kicker">Readiness record</p>
        <h2>What we can say today.</h2>
      </div>
      <div className="readiness-table v2-readiness-table" role="table" aria-label="Company readiness">
        {LEGAL_READINESS.map(([field, value, state], index) => (
          <div
            className="readiness-row"
            role="row"
            key={field}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${index * 55}ms` }}
          >
            <span role="cell">{field}</span>
            <strong role="cell">{value}</strong>
            <span className="pill" role="cell">{state}</span>
          </div>
        ))}
      </div>

      <div className="section-heading compact-heading v2-section-heading" data-reveal>
        <p className="section-kicker">Post-incorporation activation</p>
        <h2>Prepared fields. Verification first.</h2>
      </div>
      <ol className="activation-list v2-activation-list">
        {activationItems.map((item, index) => (
          <li key={item} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>

      <div className="boundary-note" data-reveal>
        <strong>No legal shortcut</strong>
        <p>
          This page does not assert a registry number, VAT number, registered
          address, Estonian legal operator, parent-company relationship or IP
          transfer before those facts exist and are verified.
        </p>
      </div>
    </section>
  );
}
