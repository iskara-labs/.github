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
    <section className="page shell">
      <div className="page-intro">
        <p className="section-kicker">Company</p>
        <h1>Estonia-ready without pretending the company already exists.</h1>
        <p>
          The website is structured so verified legal details can be activated
          cleanly after incorporation. Until then, the public record stays
          precise: Iskara Labs is the development brand;{" "}
          {COMPANY.plannedLegalName} is the planned company.
        </p>
      </div>

      <div className="company-layout">
        <div className="panel">
          <p className="panel-label">Founder</p>
          <h2>{COMPANY.founderName}</h2>
          <p>
            Founder of Iskara Labs and the product portfolio developed under
            the brand.
          </p>
          <a
            className="text-link"
            href={COMPANY.founderProfile}
            target="_blank"
            rel="noreferrer"
          >
            Founder profile →
          </a>
        </div>

        <div className="panel panel-accent">
          <p className="panel-label">Planned structure</p>
          <h2>{COMPANY.plannedLegalName}</h2>
          <p>
            {COMPANY.plannedLegalForm} · {COMPANY.plannedJurisdiction}
          </p>
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            {COMPANY.incorporationStatus}
          </div>
        </div>
      </div>

      <div className="section-heading compact-heading">
        <p className="section-kicker">Readiness record</p>
        <h2>What we can say today.</h2>
      </div>
      <div className="readiness-table" role="table" aria-label="Company readiness">
        {LEGAL_READINESS.map(([field, value, state]) => (
          <div className="readiness-row" role="row" key={field}>
            <span role="cell">{field}</span>
            <strong role="cell">{value}</strong>
            <span className="pill" role="cell">{state}</span>
          </div>
        ))}
      </div>

      <div className="section-heading compact-heading">
        <p className="section-kicker">Post-incorporation activation</p>
        <h2>Prepared fields, verification first.</h2>
      </div>
      <ol className="activation-list">
        {activationItems.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>

      <div className="boundary-note">
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
