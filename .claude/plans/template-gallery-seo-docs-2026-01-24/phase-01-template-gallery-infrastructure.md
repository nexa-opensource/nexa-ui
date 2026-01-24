# Phase 1: Template Gallery Infrastructure

## Context Links

- **Parent Plan**: [plan.md](./plan.md)
- **Dependencies**: None
- **Blocks**: Phase 2

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-24 |
| Priority | P1 |
| Effort | 3h |
| Implementation Status | DONE |
| Review Status | APPROVED |
| Completed | 2026-01-24 |

**Description**: Set up data layer, types, and service for template gallery. Create mock data and prepare infrastructure for template CRUD operations.

## Key Insights

- Follow existing pattern from `blog-service.ts` for Supabase integration
- Templates need metadata: title, description, category, preview URL, clone command
- Support both free and premium ("Pro") templates
- Categories align with startup needs: Landing, Dashboard, Portfolio, E-commerce

## Requirements

### Functional
- [x] Define TypeScript types for Template entity
- [x] Create template-service.ts with CRUD operations
- [x] Seed initial 3-5 template records
- [x] Support filtering by category and pricing tier

### Non-Functional
- [x] Type-safe API responses
- [x] Error handling consistent with blog-service pattern
- [x] Extensible for future premium auth checks

## Architecture

```
apps/web/src/
├── lib/
│   └── template-service.ts    # New: Template CRUD operations
├── data/
│   └── templates.ts           # New: Static template data (initially)
└── types/
    └── template.ts            # New: Template type definitions
```

### Template Type Definition

```typescript
export interface Template {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'landing' | 'dashboard' | 'portfolio' | 'ecommerce';
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

export type TemplateCategory = Template['category'];
```

## Related Code Files

| File | Purpose |
|------|---------|
| `/apps/web/src/lib/blog-service.ts` | Reference pattern for service layer |
| `/apps/web/src/lib/supabase.ts` | Existing Supabase client |
| `/apps/web/src/data/pricing.ts` | Reference for static data pattern |

## Implementation Steps

### Step 1: Create Template Types (30min)
1. Create `/apps/web/src/types/template.ts`
2. Define `Template` interface with all fields
3. Define `TemplateCategory` type
4. Export filter/sort utility types

### Step 2: Create Static Template Data (1h)
1. Create `/apps/web/src/data/templates.ts`
2. Define 5 template entries:
   - SaaS Landing Page (Free)
   - Dashboard Starter (Free)
   - Portfolio Template (Free)
   - E-commerce Store (Pro)
   - Agency Landing (Pro)
3. Include realistic metadata: descriptions, tech stacks, preview URLs
4. Use placeholder images from Unsplash initially

### Step 3: Create Template Service (1h)
1. Create `/apps/web/src/lib/template-service.ts`
2. Implement functions:
   - `getTemplates()` - Get all templates
   - `getTemplateBySlug(slug)` - Get single template
   - `getTemplatesByCategory(category)` - Filter by category
   - `getFeaturedTemplates()` - Get featured templates
3. Add filtering for premium/free
4. Sort by featured status, then date

### Step 4: Add i18n Messages (30min)
1. Add `Templates` section to `/apps/web/src/messages/en.json`
2. Include: page title, subtitle, category names, CTAs, filter labels
3. Add template-specific strings (can use dynamic interpolation for titles)

## Todo List

- [x] Create `types/template.ts` with Template interface
- [x] Create `data/templates.ts` with 5 template entries
- [x] Create `lib/template-service.ts` with CRUD functions
- [x] Add Templates i18n messages to en.json
- [x] Add templates route to sitemap.ts
- [x] Write unit tests for template-service (optional)

## Success Criteria

1. TypeScript types compile without errors
2. `getTemplates()` returns array of 5 templates
3. `getTemplatesByCategory('landing')` filters correctly
4. `getFeaturedTemplates()` returns subset
5. i18n messages accessible via `useTranslations('Templates')`

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Supabase not needed initially | Low | Low | Use static data, migrate later |
| Type changes mid-implementation | Medium | Low | Keep types minimal, extend as needed |

## Security Considerations

- No sensitive data in template metadata
- Premium template access should validate auth (future phase)
- Clone commands should be validated/sanitized

## Next Steps

After Phase 1:
- Phase 2 builds the UI consuming this data layer
- Later: Migrate from static data to Supabase if CRUD needed

---

## Unresolved Questions

1. Should templates have versions for dependency updates?
2. Include GitHub stars/download count in metadata?
3. Store clone commands as npx or degit or both?
