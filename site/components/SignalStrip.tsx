import { PORTFOLIO } from "@/lib/portfolio";

export function SignalStrip() {
  const items = PORTFOLIO.filter((item) => item.domain);

  return (
    <div className="signal-strip" aria-label="Iskara Labs live product domains">
      <div className="signal-track">
        {[...items, ...items].map((item, index) => (
          <span className="signal-item" key={`${item.name}-${index}`}>
            <i aria-hidden="true" />
            <strong>{item.name}</strong>
            <small>{item.domain}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
