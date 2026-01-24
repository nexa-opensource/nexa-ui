"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BlogCard } from "./components/BlogCard";
import { useTranslations } from "next-intl";

export default function BlogView() {
  const t = useTranslations("Blog");

  const posts = [
    {
      id: 1,
      title: t("posts.1.title"),
      description: t("posts.1.desc"),
      date: "Jan 12, 2024",
      readTime: "5 min read",
      author: {
        name: "Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      },
      category: t("posts.1.category"),
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      title: t("posts.2.title"),
      description: t("posts.2.desc"),
      date: "Jan 08, 2024",
      readTime: "8 min read",
      author: {
        name: "Marcus Johnson",
        avatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
      },
      category: t("posts.2.category"),
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e88984?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: t("posts.3.title"),
      description: t("posts.3.desc"),
      date: "Dec 28, 2023",
      readTime: "6 min read",
      author: {
        name: "Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      },
      category: t("posts.3.category"),
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-fluid px-4 md:px-8 py-24 space-y-12 max-w-[1600px] mx-auto">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            // @ts-ignore - Ignoring type mismatch for mock data author/content omitted fields
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
