"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/company", label: "Company" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile sheet on navigation and on Escape.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header v2-header p3-header${open ? " is-open" : ""}`}>
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
            <small>Applied AI studio</small>
          </span>
        </Link>

        <button
          type="button"
          className="p3-menu-button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="p3-menu-icon" aria-hidden="true">
            <i />
            <i />
          </span>
          {open ? "Close" : "Menu"}
        </button>

        <nav
          className="main-nav"
          id="primary-navigation"
          aria-label="Primary navigation"
        >
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
      </div>
    </header>
  );
}
