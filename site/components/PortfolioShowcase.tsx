import { PORTFOLIO } from "@/lib/portfolio";

const productTone: Record<string, string> = {
  Nowly: "violet",
  OfisPilot: "cyan",
  OriginVox: "rose",
  Qantrive: "amber",
  Conformetra: "emerald",
  FoundersGPT: "blue",
  "Universal AI Platform": "slate",
};

export function PortfolioShowcase() {
  return (
    <div className="v2-portfolio-grid">
      {PORTFOLIO.map((item, index) => {
        const tone = productTone[item.name] ?? "slate";
        return (
          <article
            className={`v2-product-card tone-${tone}`}
            key={item.name}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${Math.min(index * 70, 280)}ms` }}
          >
            <div className="v2-product-glow" aria-hidden="true" />
            <div className="v2-product-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="live-pill">
                <i aria-hidden="true" />
                {item.stage}
              </span>
            </div>
            <div className="v2-product-body">
              <p>{item.category}</p>
              <h3>{item.name}</h3>
              <div className="product-domain-line">
                {item.domain ? (
                  <a
                    href={`https://${item.domain}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.domain} ↗
                  </a>
                ) : (
                  <span>Shared infrastructure</span>
                )}
              </div>
              <p className="v2-product-description">{item.description}</p>
            </div>
            <div className="v2-product-footer">
              <span>Iskara Labs / {item.category}</span>
              <span aria-hidden="true">↗</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
