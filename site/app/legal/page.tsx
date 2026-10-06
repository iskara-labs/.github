import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Pre-incorporation legal notice for the Iskara Labs website.",
  alternates: { canonical: "/legal" },
};

const legalSections = [
  {
    number: "01",
    title: "Current status",
    copy: (
      <>
        Iskara Labs is currently a product development brand founded by{" "}
        {COMPANY.founderName}. The planned company name is{" "}
        {COMPANY.plannedLegalName} in {COMPANY.plannedJurisdiction}. The
        incorporation process is not complete.
      </>
    ),
  },
  {
    number: "02",
    title: "No registered-entity claim",
    copy: (
      <>
        Until incorporation is completed and verified, this website does not
        claim an Estonian registry code, VAT number, registered address or
        registered legal-operator status for Iskara Labs OÜ.
      </>
    ),
  },
  {
    number: "03",
    title: "Product availability",
    copy: (
      <>
        Portfolio entries may be active, staged, experimental, controlled
        previews or infrastructure. Inclusion here does not mean every product is
        generally available or offered under the same contracting entity.
      </>
    ),
  },
  {
    number: "04",
    title: "Privacy posture",
    copy: (
      <>
        This site does not currently provide account creation, a contact form,
        advertising trackers or a self-declared analytics layer. If
        data-collecting features are introduced, the privacy notice and
        controller details must be updated before activation.
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <section className="page shell legal-copy v2-legal-page">
      <div className="page-intro v2-page-intro" data-reveal>
        <div className="v2-status-row">
          <span className="v2-live-chip">
            <i aria-hidden="true" />
            Truth boundary active
          </span>
          <span>Last updated · 6 October 2026</span>
        </div>
        <p className="section-kicker">Legal notice</p>
        <h1>
          Precise now.
          <span> Expand only when verified.</span>
        </h1>
        <p>
          The legal surface is deliberately conservative while the Estonia
          structure is being prepared. It can expand after incorporation, but it
          must not get ahead of verified facts.
        </p>
      </div>

      <div className="v2-legal-status" data-reveal>
        <div>
          <span>Current public operator statement</span>
          <strong>Iskara Labs · development brand</strong>
        </div>
        <div>
          <span>Planned legal entity</span>
          <strong>{COMPANY.plannedLegalName}</strong>
        </div>
        <div>
          <span>Jurisdiction</span>
          <strong>{COMPANY.plannedJurisdiction}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>{COMPANY.incorporationStatus}</strong>
        </div>
      </div>

      <div className="v2-legal-list">
        {legalSections.map((section, index) => (
          <section
            key={section.number}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
          >
            <span>{section.number}</span>
            <div>
              <h2>{section.title}</h2>
              <p>{section.copy}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="boundary-note" data-reveal>
        <strong>Activation rule</strong>
        <p>
          Registry, VAT, address, controller, contracting-party and ownership
          statements are added only after the underlying legal facts exist and
          are independently verified.
        </p>
      </div>
    </section>
  );
}
