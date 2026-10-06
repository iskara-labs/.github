import Link from "next/link";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Iskara Labs home">
          <span className="brand-mark" aria-hidden="true">IL</span>
          <span className="brand-copy">
            <strong>Iskara Labs</strong>
            <small>Product Studio</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
