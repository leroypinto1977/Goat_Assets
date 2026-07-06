import { getServiceSlugs } from "@/lib/services";
import { getJobSlugs } from "@/lib/jobs";
import { getSectorSlugs } from "@/lib/sectors";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goatassets.com";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sectors", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sustainability", priority: 0.6, changeFrequency: "monthly" },
    { path: "/approach", priority: 0.7, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    ...getServiceSlugs().map((slug) => ({
      path: `/services/${slug}`,
      priority: 0.7,
      changeFrequency: "monthly",
    })),
    ...getJobSlugs().map((slug) => ({
      path: `/careers/${slug}`,
      priority: 0.5,
      changeFrequency: "weekly",
    })),
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
