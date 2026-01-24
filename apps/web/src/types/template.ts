export type TemplateCategory = "landing" | "dashboard" | "portfolio" | "ecommerce";

export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: TemplateCategory;
  image: string;
  previewUrl: string;
  cloneCommand: string;
  techStack: string[];
  isPremium: boolean;
  price?: number;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TemplateFilters {
  category?: TemplateCategory;
  isPremium?: boolean;
  featured?: boolean;
}
