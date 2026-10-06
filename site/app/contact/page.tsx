import type { Metadata } from "next";
import Link from "next/link";
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
    copy: "For product, partnership and ecosystem conversations, start with the Iskara Labs founder profile and company context.",
    href: COMPANY.founderPath,
    cta: "Founder profile →",
    external: false,
  },
  {
    label: "Engineering",
    title: "Public engineering profile",
    copy: "The Iskara Labs GitHub organization exposes only the organization profile and repositories intentionally made public. Private product repositories remain private.",
    href: COMPANY.github,
    cta: "Public GitHub organization ↗",
    external: true,
  },
  {
    label: "Professional network",
    title: "Founder network",
    copy: "For investor, advisor and ecosystem introductions, use the founder's professional network profile.",
    href: COMPANY.founderLinkedIn,
    cta: "LinkedIn ↗",
    external: true,
  },
] as const;

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
        {contactPaths.map((item, index) => {
          const content = (
            <>
              <div className="v2-contact-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p>{item.label}</p>
                <h2>{item.title}</h2>
                <span>{item.copy}</span>
              </div>
              <strong>{item.cta}</strong>
            </>
          );

          const shared = {
            className: "v2-contact-card",
            "data-reveal": true,
            style: { ["--reveal-delay" as string]: `${index * 85}ms` },
          };

          return item.external ? (
            <a
              key={item.label}
              {...shared}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          ) : (
            <Link key={item.label} {...shared} href={item.href}>
              {content}
            </Link>
          );
        })}
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
