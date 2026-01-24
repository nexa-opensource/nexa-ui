# Codebase Summary

Last Updated: 2026-01-24

## Overview

Nexa is a multi-app monorepo with web and documentation applications.

## Features

### Template Gallery (Phase 1)

**Location:** `apps/web/src/`

**Components:**
- **Type Definitions** (`types/template.ts`) - Template, TemplateCategory, TemplateFilter interfaces
- **Data Layer** (`data/templates.ts`) - 5 initial templates (Blank, List Manager, Tracker, Personal CRM, Project Dashboard)
- **Service Layer** (`lib/template-service.ts`) - CRUD operations: `getTemplates()`, `getTemplateById()`, `getTemplatesByCategory()`, `getFeaturedTemplates()`
- **Internationalization** (`messages/en.json`) - Templates section with labels for UI components

**Template Structure:**
```typescript
{
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  icon: string;
  previewImage?: string;
  isFeatured: boolean;
  views: number;
  createdAt: Date;
}
```

**Categories:** Productivity, Project Management, Personal, Business, Creative, Education, Finance, Health

**Features:**
- Filter by category
- Search functionality
- Featured template highlighting
- View tracking
