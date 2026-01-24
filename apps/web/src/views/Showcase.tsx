"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Layout,
  LayoutGrid,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const showcaseItems = [
  {
    id: 1,
    title: "TaskMaster Pro",
    description:
      "A collaborative project management tool for remote teams. Features real-time updates, kanban boards, and team analytics.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    author: "Alex Rivera",
    url: "#",
    tags: ["Productivity", "SaaS", "Dashboard"],
  },
  {
    id: 2,
    title: "FinDash Analytics",
    description:
      "Real-time financial dashboard with complex data visualization. Integrates with major banking APIs for seamless tracking.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Chen",
    url: "#",
    tags: ["Finance", "Data Viz", "Enterprise"],
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description:
      "Minimalist portfolio template for digital artists. Focuses on large imagery and clean typography to showcase work.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    author: "Jordan Lee",
    url: "#",
    tags: ["Portfolio", "Creative", "Minimal"],
  },
  {
    id: 4,
    title: "HealthTrack App",
    description:
      "Personal wellness and workout tracking application. Includes diet planning, exercise logs, and progress charts.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2028&auto=format&fit=crop",
    author: "Dr. Emily Weiss",
    url: "#",
    tags: ["Health", "Mobile First", "App"],
  },
  {
    id: 5,
    title: "E-commerce Starter",
    description:
      "Complete online store solution with cart and checkout. Optimized for conversion with fast page loads and smooth UX.",
    image:
      "https://images.unsplash.com/photo-1472851294608-415522f96319?q=80&w=2070&auto=format&fit=crop",
    author: "Shopify Devs",
    url: "#",
    tags: ["E-commerce", "Retail", "Store"],
  },
  {
    id: 6,
    title: "DevDocs Hub",
    description:
      "Centralized documentation platform for open source projects. Features versioning, search, and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    author: "OpenSource Collective",
    url: "#",
    tags: ["Docs", "Open Source", "Content"],
  },
];

import { useTranslations } from "next-intl";

export default function ShowcasePage() {
  const t = useTranslations("Showcase");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "SaaS", "E-commerce", "Portfolio", "Dashboard"];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/5 [mask-image:linear-gradient(0deg,transparent,black)] -z-10" />
        <div className="container-fluid px-4 md:px-8 max-w-[1600px] mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
          >
            {t("communityGallery")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            {t("title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              ShadcnUIKit
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[800px] mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full">
              <Github className="mr-2 h-4 w-4" /> {t("submit")}
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              {t("viewDocs")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <div className="container-fluid px-4 md:px-8 max-w-[1600px] mx-auto mb-12 flex justify-center flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {t(`categories.${category}`)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container-fluid px-4 md:px-8 pb-32 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col gap-4"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Button
                      className="w-full bg-white text-black hover:bg-white/90"
                      asChild
                    >
                      <a href={item.url} target="_blank" rel="noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex -space-x-2">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold"
                      title={item.author}
                    >
                      {item.author[0]}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal bg-muted/50 hover:bg-muted"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
