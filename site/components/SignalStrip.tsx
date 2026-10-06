import { COMPANY } from "@/lib/company";
import { PORTFOLIO } from "@/lib/portfolio";

export function SignalStrip() {
  const items = [
    { name: COMPANY.brandName, domain: "iskaralabs.co" },
    ...PORTFOLIO.filter((item) => item.domain).map((item) => ({
      name: item.name,
      domain: item.domain as string,
    })),
  ];

  const group = (copy: boolean) => (
    <div className="signal-group" aria-hidden={copy || undefined}>
      {items.map((item) => (
        <span className="signal-item" key={`${copy ? "copy" : "primary"}-${item.name}`}>
          <i aria-hidden="true" />
          <strong>{item.name}</strong>
          <small>{item.domain}</small>
        </span>
      ))}
    </div>
  );

  return (
    <div className="signal-strip" aria-label="Iskara Labs portfolio brands">
      <div className="signal-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
