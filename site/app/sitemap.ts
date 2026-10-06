import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

const routes = ["", "/portfolio", "/company", "/founder", "/contact", "/legal"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: COMPANY.domain + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/portfolio" ? 0.9 : 0.7,
  }));
}
