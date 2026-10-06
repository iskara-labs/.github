import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and public identity links for Iskara Labs.",
  alternates: { canonical: "/contact" },
};

const contactPaths = [
  {
    label: "Product & partnerships",
    title: "Build with context",
    copy: "For product, partnership and ecosystem conversations, start from the verified founder profile so the conversation keeps a clear source of truth.",
    href: COMPANY.founderProfile,
    cta: "Founder profile ↗",
  },
  {
    label: "Engineering",
    title: "Follow the work",
    copy: "The Iskara Labs GitHub organization is the engineering source of truth for the portfolio, shared infrastructure and public project history.",
    href: COMPANY.github,
    cta: "GitHub organization ↗",
  },
  {
    label: "Professional network",
    title: "Founder network",
    copy: "For investor, advisor and ecosystem introductions, use the founder's professional network profile.",
    href: "https://www.linkedin.com/in/sedatiskara/",
    cta: "LinkedIn ↗",
  },
];

export default function ContactPage() {
  return (
    <section className="page shell v2-contact-page">
      <div className="page-intro v2-page-intro" data-reveal>
        <div className="v2-status-row">
          <span className="v2-live-chip">
            <i aria-hidden="true" />
            Verified channels only
          </span>
          <span>No invented mailbox · no placeholder form</span>
        </div>
        <p className="section-kicker">Contact</p>
        <h1>
          Start with context.
          <span> Keep the signal clean.</span>
        </h1>
        <p>
          Iskara Labs is still in its pre-incorporation operating phase. Until a
          branded mailbox is actually provisioned, this page only publishes
          verified channels that are already real and monitored.
        </p>
      </div>

      <div className="v2-contact-grid">
        {contactPaths.map((item, index) => (
          <a
            key={item.label}
            className="v2-contact-card"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ ["--reveal-delay" as string]: `${index * 85}ms` }}
          >
            <div className="v2-contact-index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p>{item.label}</p>
              <h2>{item.title}</h2>
              <span>{item.copy}</span>
            </div>
            <strong>{item.cta}</strong>
          </a>
        ))}
      </div>

      <div className="v2-contact-console" data-reveal>
        <div className="console-header">
          <span>ISKARA / COMMUNICATION POLICY</span>
          <span className="console-status">
            <i aria-hidden="true" />
            PRE-INCORPORATION
          </span>
        </div>
        <div className="console-body">
          <div className="console-row">
            <span>Branded mailbox</span>
            <strong>Not published yet</strong>
            <small>Pending provisioning</small>
          </div>
          <div className="console-row">
            <span>Contact form</span>
            <strong>Not enabled</strong>
            <small>No data collection</small>
          </div>
          <div className="console-row">
            <span>Verified public channel</span>
            <strong>{COMPANY.founderName}</strong>
            <small>Founder-led</small>
          </div>
        </div>
        <div className="console-scan" aria-hidden="true" />
      </div>
    </section>
  );
}
