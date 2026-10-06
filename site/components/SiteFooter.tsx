import Link from "next/link";
import { COMPANY } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">Iskara Labs</div>
          <p className="muted footer-copy">
            Product development brand founded by Sedat İşkara. Planned company:
            ISKARA LABS OÜ — Estonia. Incorporation in progress.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/company">Company</Link>
          <Link href="/legal">Legal notice</Link>
          <a href={COMPANY.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Iskara Labs</span>
        <span>iskaralabs.co</span>
      </div>
    </footer>
  );
}
