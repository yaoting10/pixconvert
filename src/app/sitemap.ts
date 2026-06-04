export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://pixconvert.org";
  const lastModified = new Date("2026-06-03T08:30:00.000Z");

  const pages = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    // Format pair converters
    { path: "/jpg-to-png", priority: 0.9, freq: "weekly" as const },
    { path: "/png-to-webp", priority: 0.9, freq: "weekly" as const },
    { path: "/ico-to-png", priority: 0.9, freq: "weekly" as const },
    { path: "/jpg-to-webp", priority: 0.9, freq: "weekly" as const },
    { path: "/webp-to-png", priority: 0.9, freq: "weekly" as const },
    { path: "/png-to-jpg", priority: 0.8, freq: "weekly" as const },
    // Single-format converters (new)
    { path: "/jpg-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/jpeg-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/png-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/webp-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/avif-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/gif-converter", priority: 0.85, freq: "weekly" as const },
    { path: "/bmp-converter", priority: 0.8, freq: "weekly" as const },
    { path: "/tiff-converter", priority: 0.8, freq: "weekly" as const },
    { path: "/ico-converter", priority: 0.8, freq: "weekly" as const },
    // Tools & resources
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
