import type { Metadata } from "next";
import { COMPANY } from "@/lib/company";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path;
  const absoluteUrl =
    canonicalPath === "/" ? COMPANY.domain : `${COMPANY.domain}${canonicalPath}`;
  const socialTitle = `${title} · Iskara Labs`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: COMPANY.brandName,
      url: absoluteUrl,
      title: socialTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Iskara Labs — Build systems. Not demos.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
