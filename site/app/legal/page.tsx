import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Pre-incorporation legal notice for the Iskara Labs website.",
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <section className="page shell legal-copy">
      <div className="page-intro">
        <p className="section-kicker">Legal notice</p>
        <h1>Pre-incorporation website notice.</h1>
        <p>Last updated: 6 October 2026.</p>
      </div>

      <div className="legal-sections">
        <section>
          <h2>Current status</h2>
          <p>
            Iskara Labs is currently a product development brand founded by{" "}
            {COMPANY.founderName}. The planned company name is{" "}
            {COMPANY.plannedLegalName} in {COMPANY.plannedJurisdiction}. The
            incorporation process is not complete.
          </p>
        </section>
        <section>
          <h2>No registered-entity claim</h2>
          <p>
            Until incorporation is completed and verified, this website does not
            claim an Estonian registry code, VAT number, registered address or
            registered legal-operator status for Iskara Labs OÜ.
          </p>
        </section>
        <section>
          <h2>Product availability</h2>
          <p>
            Portfolio entries may be active, staged, experimental, controlled
            previews or infrastructure. Inclusion on this website is not a
            representation that every product is generally available or offered
            under the same contracting entity.
          </p>
        </section>
        <section>
          <h2>Privacy posture</h2>
          <p>
            This first version does not include account creation, contact forms,
            analytics cookies or advertising trackers. If data-collecting
            features are introduced, the privacy notice and controller details
            must be updated before activation.
          </p>
        </section>
      </div>
    </section>
  );
}
