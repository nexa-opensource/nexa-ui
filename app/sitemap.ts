import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexa-ui-kit.com"; // Replace with your actual domain

  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date).toISOString(), // Attempt to parse the date string
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const routes = [
    "",
    "/blog",
    "/components",
    "/pricing",
    "/themes",
    "/showcase",
    "/docs",
    "/privacy",
    "/terms",
    "/license",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  return [...routes, ...posts];
}
