import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and public identity links for Iskara Labs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="page shell">
      <div className="page-intro">
        <p className="section-kicker">Contact</p>
        <h1>Start with context.</h1>
        <p>
          For product, partnership, investment or ecosystem conversations, use
          the verified founder and organization profiles below. A branded
          iskaralabs.co mailbox will be published after mailbox provisioning is
          complete; this site does not invent an unverified email address.
        </p>
      </div>

      <div className="contact-grid">
        <a
          className="contact-card"
          href={COMPANY.founderProfile}
          target="_blank"
          rel="noreferrer"
        >
          <span>Founder</span>
          <strong>{COMPANY.founderName}</strong>
          <small>Verified founder profile →</small>
        </a>
        <a
          className="contact-card"
          href={COMPANY.github}
          target="_blank"
          rel="noreferrer"
        >
          <span>Engineering</span>
          <strong>GitHub · Iskara Labs</strong>
          <small>Organization profile →</small>
        </a>
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/sedatiskara/"
          target="_blank"
          rel="noreferrer"
        >
          <span>Professional network</span>
          <strong>LinkedIn</strong>
          <small>Founder profile →</small>
        </a>
      </div>
    </section>
  );
}
