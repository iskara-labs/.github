import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { PORTFOLIO } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Products and shared platform work developed under the Iskara Labs brand.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <section className="page shell v2-portfolio-page">
      <div className="page-intro v2-page-intro" data-reveal>
        <div className="v2-status-row">
          <span className="v2-live-chip">
            <i aria-hidden="true" />
            {PORTFOLIO.length} systems mapped
          </span>
          <span>Product brands · research · media · shared infrastructure</span>
        </div>
        <p className="section-kicker">Portfolio</p>
        <h1>
          Different markets.
          <span> One operating standard.</span>
        </h1>
        <p>
          Every product gets its own market logic, brand and release gates. What
          compounds across the portfolio is the operating discipline: evidence,
          governance, observability and explicit product truth.
        </p>
      </div>

      <PortfolioShowcase />

      <div className="v2-portfolio-boundary" data-reveal>
        <div>
          <p className="section-kicker">Portfolio boundary</p>
          <h2>What is — and is not — an Iskara Labs product.</h2>
        </div>
        <div>
          <p>
            Universal AI Platform is shared infrastructure, not a customer-facing
            product. Archived donor repositories and release-only repositories are
            not represented as separate products.
          </p>
          <p>
            ReguShield AI remains an independent founder venture and is not presented
            as an Iskara Labs portfolio company.
          </p>
          <Link className="text-link" href="/company">
            Read the company structure →
          </Link>
        </div>
      </div>
    </section>
  );
}
