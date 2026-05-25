export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://pixconvert.org";
  const lastModified = new Date("2024-05-22");

  const pages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/jpg-to-png", priority: 0.9, freq: "weekly" as const },
    { path: "/png-to-webp", priority: 0.9, freq: "weekly" as const },
    { path: "/heic-to-jpg", priority: 0.9, freq: "weekly" as const },
    { path: "/jpg-to-webp", priority: 0.9, freq: "weekly" as const },
    { path: "/webp-to-png", priority: 0.9, freq: "weekly" as const },
    { path: "/png-to-jpg", priority: 0.8, freq: "weekly" as const },
    { path: "/batch-image-converter", priority: 0.8, freq: "weekly" as const },
    { path: "/what-is-webp", priority: 0.7, freq: "monthly" as const },
    { path: "/webp-vs-png", priority: 0.7, freq: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, freq: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: page.freq,
    priority: page.priority,
  }));
}
