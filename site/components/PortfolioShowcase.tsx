import { ORBIT_LABEL, PORTFOLIO } from "@/lib/portfolio";

/**
 * Six products on an even grid, with the shared platform drawn as the layer
 * beneath them — because that is what it is. No orphan cards, no bento gaps.
 */
export function PortfolioShowcase() {
  const products = PORTFOLIO.filter((item) => item.orbit !== "foundation");
  const foundation = PORTFOLIO.find((item) => item.orbit === "foundation");

  return (
    <div className="pf">
      <ul className="pf-grid">
        {products.map((item, index) => (
          <li
            className={`pf-card tone-${item.tone}`}
            key={item.name}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${Math.min(index * 60, 300)}ms` }}
          >
            <div className="pf-card-head">
              <span className="pf-orbit">
                <i aria-hidden="true" />
                {ORBIT_LABEL[item.orbit]}
              </span>
              <span className="pf-stage">{item.stage}</span>
            </div>
            <h3>{item.name}</h3>
            <p className="pf-category">{item.category}</p>
            <p className="pf-description">{item.description}</p>
            {item.note ? <p className="pf-note">{item.note}</p> : null}
            {item.domain ? (
              <a
                className="pf-link"
                href={`https://${item.domain}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.domain}</span>
                <span aria-hidden="true" className="pf-link-arrow">↗</span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            ) : null}
          </li>
        ))}
      </ul>

      {foundation ? (
        <div className="pf-foundation" data-reveal>
          <div className="pf-foundation-rule" aria-hidden="true">
            {products.map((item) => (
              <span key={item.name} className={`tone-${item.tone}`} />
            ))}
          </div>
          <div className="pf-foundation-body">
            <div>
              <span className="pf-orbit">
                <i aria-hidden="true" />
                {ORBIT_LABEL[foundation.orbit]}
              </span>
              <h3>{foundation.name}</h3>
            </div>
            <p>{foundation.description}</p>
            {foundation.note ? <p className="pf-note">{foundation.note}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
