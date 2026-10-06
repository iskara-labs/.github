import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ExperienceLayer } from "@/components/ExperienceLayer";
import { COMPANY } from "@/lib/company";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const publicIndexingEnabled =
  process.env.VERCEL_ENV === "production" &&
  process.env.NEXT_PUBLIC_PUBLIC_SITE_READY !== "false";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.domain),
  title: {
    default: "Iskara Labs — Product Studio",
    template: "%s · Iskara Labs",
  },
  description:
    "Iskara Labs is a product development studio building AI-native software, operational intelligence and digital products with strong governance and production discipline.",
  applicationName: "Iskara Labs",
  authors: [{ name: COMPANY.founderName, url: COMPANY.founderProfile }],
  creator: COMPANY.founderName,
  publisher: COMPANY.brandName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.domain,
    siteName: COMPANY.brandName,
    title: "Iskara Labs — Product Studio",
    description:
      "Focused products. Governed systems. Production discipline.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iskara Labs — Product Studio",
    description:
      "Focused products. Governed systems. Production discipline.",
  },
  robots: publicIndexingEnabled
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
      }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": COMPANY.founderProfile + "#sedat-iskara",
      name: COMPANY.founderName,
      alternateName: COMPANY.founderAlternateName,
      url: COMPANY.founderProfile,
      sameAs: [COMPANY.founderLinkedIn, COMPANY.founderGitHub],
    },
    {
      "@type": "Organization",
      "@id": COMPANY.domain + "/#brand",
      name: COMPANY.brandName,
      url: COMPANY.domain,
      description:
        "Product development brand founded by Sedat İşkara. Planned company: ISKARA LABS OÜ — Estonia. Incorporation in progress.",
      founder: { "@id": COMPANY.founderProfile + "#sedat-iskara" },
      sameAs: [COMPANY.github],
    },
    {
      "@type": "WebSite",
      "@id": COMPANY.domain + "/#website",
      name: COMPANY.brandName,
      url: COMPANY.domain,
      creator: { "@id": COMPANY.domain + "/#brand" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />
        <ExperienceLayer />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
