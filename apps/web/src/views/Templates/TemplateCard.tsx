"use client";

import { Template } from "@/types/template";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface TemplateCardProps {
  template: Template;
  index: number;
  onClone: (template: Template) => void;
}

export function TemplateCard({ template, index, onClone }: TemplateCardProps) {
  const t = useTranslations("Templates");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col gap-4"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
        {template.isPremium && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
              {t("pro")}
            </Badge>
          </div>
        )}
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
            <Button
              className="flex-1 bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href={template.previewUrl} target="_blank" rel="noreferrer">
                {t("livePreview")} <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => onClone(template)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
            {template.title}
          </h3>
          {template.isPremium && template.price && (
            <span className="text-lg font-semibold text-primary">
              ${template.price}
            </span>
          )}
        </div>
        <p className="text-muted-foreground line-clamp-2 leading-relaxed">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {template.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-normal bg-muted/50 hover:bg-muted"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
