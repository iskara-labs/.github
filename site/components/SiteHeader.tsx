import Link from "next/link";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header v2-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Iskara Labs home">
          <span className="brand-mark v2-brand-mark" aria-hidden="true">
            <span>IL</span>
          </span>
          <span className="brand-copy">
            <strong>Iskara Labs</strong>
            <small>Product Studio / EU</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-signal" aria-label="Iskara Labs status">
          <i aria-hidden="true" />
          <span>BUILDING</span>
        </div>
      </div>
    </header>
  );
}
