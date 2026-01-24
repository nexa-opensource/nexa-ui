import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nexa-ui.com"; // Replace with your actual domain

  const blogPosts = await getBlogPosts();

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
    "/templates",
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
