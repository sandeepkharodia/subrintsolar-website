import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://subrintsolar.in/sitemap.xml",
    host: "https://subrintsolar.in",
  };
}