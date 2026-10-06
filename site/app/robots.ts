import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

export default function robots(): MetadataRoute.Robots {
  const ready =
    process.env.VERCEL_ENV === "production" &&
    process.env.NEXT_PUBLIC_PUBLIC_SITE_READY !== "false";

  return {
    rules: ready
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: COMPANY.domain + "/sitemap.xml",
    host: COMPANY.domain,
  };
}
