import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/publications", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/patents", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/teaching", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/awards", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/conferences", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/books", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/news", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-21");
  return routes.map((route) => ({
    url: `https://mehranarzani.com${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
