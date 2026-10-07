"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/company", label: "Company" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header v2-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Iskara Labs home"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className="brand-mark v2-brand-mark" aria-hidden="true">
            <span>IL</span>
          </span>
          <span className="brand-copy">
            <strong>Iskara Labs</strong>
            <small>Product Studio / EU</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-signal" aria-label="Iskara Labs status">
          <i aria-hidden="true" />
          <span>BUILDING</span>
        </div>
      </div>
    </header>
  );
}
