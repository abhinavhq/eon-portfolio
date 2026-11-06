import { MetadataRoute } from "next";
import { FEATURED_PROJECTS } from "@/config/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abhinav-yadav.vercel.app";

  const projectRoutes = FEATURED_PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
