import { templates } from "@/data/templates";
import type { Template, TemplateCategory, TemplateFilters } from "@/types/template";

export function getTemplates(filters?: TemplateFilters): Template[] {
  let result = [...templates];

  if (filters?.category) {
    result = result.filter((t) => t.category === filters.category);
  }

  if (filters?.isPremium !== undefined) {
    result = result.filter((t) => t.isPremium === filters.isPremium);
  }

  if (filters?.featured !== undefined) {
    result = result.filter((t) => t.featured === filters.featured);
  }

  // Sort: featured first, then by date
  return result.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(category: TemplateCategory): Template[] {
  return getTemplates({ category });
}

export function getFeaturedTemplates(): Template[] {
  return getTemplates({ featured: true });
}

export function getFreeTemplates(): Template[] {
  return getTemplates({ isPremium: false });
}

export function getPremiumTemplates(): Template[] {
  return getTemplates({ isPremium: true });
}

export function getAllCategories(): TemplateCategory[] {
  return ["landing", "dashboard", "portfolio", "ecommerce"];
}
