import Link from "next/link";
import { COMPANY } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="site-footer v2-footer">
      <div className="shell v2-footer-top">
        <div className="v2-footer-wordmark">
          <span>ISKARA</span>
          <strong>LABS</strong>
        </div>
        <p>
          A founder-led product studio building governed digital systems across AI,
          operations, research, compliance, media and real-world coordination.
        </p>
      </div>

      <div className="shell footer-grid">
        <div>
          <div className="footer-brand">Build systems. Not demos.</div>
          <p className="muted footer-copy">
            Planned company: ISKARA LABS OÜ — Estonia. Incorporation in progress.
            Legal entity details will be published only after verification.
          </p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/company">Company</Link>
          <Link href="/legal">Legal notice</Link>
          <Link href="/contact">Contact</Link>
          <a href={COMPANY.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={COMPANY.founderProfile} target="_blank" rel="noreferrer">Founder ↗</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Iskara Labs</span>
        <span>iskaralabs.co · Estonia structure planned</span>
      </div>
    </footer>
  );
}
