"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTemplates } from "@/lib/template-service";
import { Template, TemplateCategory } from "@/types/template";
import { TemplateCard } from "./TemplateCard";
import { CloneModal } from "./CloneModal";
import { Sparkles } from "lucide-react";

export default function TemplatesPage() {
  const t = useTranslations("Templates");
  const [activeCategory, setActiveCategory] = useState<
    TemplateCategory | "all"
  >("all");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: (TemplateCategory | "all")[] = [
    "all",
    "landing",
    "dashboard",
    "portfolio",
    "ecommerce",
  ];

  const templates = getTemplates(
    activeCategory === "all" ? undefined : { category: activeCategory }
  );

  const handleClone = (template: Template) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

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
            <Sparkles className="mr-1 h-3 w-3" />
            {templates.length} {t("title")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter"
          >
            {t("title")}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
              Gallery
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
          {templates.map((template, index) => (
            <TemplateCard
              key={template.id}
              template={template}
              index={index}
              onClone={handleClone}
            />
          ))}
        </div>
      </div>

      {/* Clone Modal */}
      <CloneModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
