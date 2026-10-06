import type { Metadata } from "next";
import { PORTFOLIO } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Products and shared platform work developed under the Iskara Labs brand.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <section className="page shell">
      <div className="page-intro">
        <p className="section-kicker">Portfolio</p>
        <h1>One studio. Multiple focused products.</h1>
        <p>
          The portfolio combines active products, staged products and one shared
          infrastructure foundation. A repository existing does not mean a
          product is generally available; each item keeps its own release gates.
        </p>
      </div>

      <div className="portfolio-list">
        {PORTFOLIO.map((item, index) => (
          <article className="portfolio-row" id={item.name.toLowerCase().replaceAll(" ", "-")} key={item.name}>
            <div className="portfolio-row-index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="portfolio-row-main">
              <div className="portfolio-row-title">
                <div>
                  <p className="card-category">{item.category}</p>
                  <h2>{item.name}</h2>
                </div>
                <span className="pill">{item.stage}</span>
              </div>
              <p>{item.description}</p>
              {item.note ? <p className="note">{item.note}</p> : null}
            </div>
            <div className="portfolio-row-domain">
              <span>Web identity</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.domain}
                </a>
              ) : (
                <strong>{item.domain ?? "Internal only"}</strong>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="boundary-note">
        <strong>Portfolio boundary</strong>
        <p>
          ReguShield AI remains an independent founder venture and is not
          represented here as an Iskara Labs portfolio company. Archived donor
          repositories and release-only repositories are also not separate
          products.
        </p>
      </div>
    </section>
  );
}
