import { ORBIT_LABEL, PORTFOLIO } from "@/lib/portfolio";

/**
 * Portfolio signal rail. A static, navigable rail of every live product domain —
 * no duplicated marquee copies, no loop seam, nothing that can widen the page.
 * Each entry is a real link carrying the product's release state.
 */
export function SignalStrip() {
  const items = PORTFOLIO.filter((item) => item.domain);

  return (
    <section className="signal-rail" aria-label="Portfolio product sites">
      <ul className="shell signal-group">
        {items.map((item) => (
          <li key={item.name} className={`signal-cell tone-${item.tone}`}>
            <a href={`https://${item.domain}`} target="_blank" rel="noreferrer">
              <span className="signal-cell-top">
                <i aria-hidden="true" />
                <strong>{item.name}</strong>
              </span>
              <span className="signal-cell-meta">
                <span>{ORBIT_LABEL[item.orbit]}</span>
                <small>{item.domain}</small>
              </span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
