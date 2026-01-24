# Phase 4: SEO Structured Data & Meta Optimization

## Context Links

- **Parent Plan**: [plan.md](./plan.md)
- **Dependencies**: [Phase 3](./phase-03-seo-component-docs.md)
- **Blocks**: None

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-24 |
| Priority | P1 |
| Effort | 4h |
| Implementation Status | Pending |
| Review Status | Pending |

**Description**: Implement JSON-LD structured data for rich search results, optimize meta titles/descriptions per component, update sitemap with component pages, and add internal linking strategy.

## Key Insights

- JSON-LD enables rich snippets in Google search results
- SoftwareSourceCode schema ideal for component docs
- Each component page needs unique meta title/description
- Sitemap inclusion critical for indexing
- Internal links pass SEO authority between pages

## Requirements

### Functional
- [ ] Add JSON-LD structured data to component pages
- [ ] Dynamic meta title per component: "{Component} - Nexa UI Kit"
- [ ] Dynamic meta description per component
- [ ] Update sitemap with all 55 component pages
- [ ] Add robots.txt configuration
- [ ] Implement breadcrumb structured data

### Non-Functional
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] Meta descriptions < 160 characters
- [ ] Sitemap < 50MB, < 50,000 URLs
- [ ] Canonical URLs set correctly

## Architecture

### JSON-LD Schema for Component Docs

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "Button Component",
  "description": "A versatile button component with multiple variants...",
  "programmingLanguage": ["TypeScript", "React"],
  "codeRepository": "https://github.com/nexa/ui-kit",
  "author": {
    "@type": "Organization",
    "name": "Nexa UI Kit"
  },
  "isPartOf": {
    "@type": "SoftwareApplication",
    "name": "Nexa UI Kit",
    "applicationCategory": "DeveloperApplication"
  }
}
```

### Breadcrumb Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nexa-ui.com" },
    { "@type": "ListItem", "position": 2, "name": "Docs", "item": "https://nexa-ui.com/docs" },
    { "@type": "ListItem", "position": 3, "name": "Button", "item": "https://nexa-ui.com/docs/components/button" }
  ]
}
```

## Related Code Files

| File | Purpose |
|------|---------|
| `/apps/web/app/[locale]/layout.tsx` | Global metadata |
| `/apps/web/app/sitemap.ts` | Sitemap generation |
| `/apps/web/app/robots.ts` | Robots.txt configuration |
| `/apps/web/src/data/component-docs/` | Component metadata |

## Implementation Steps

### Step 1: Create JSON-LD Helper (45min)
1. Create `/apps/web/src/lib/structured-data.ts`
2. Functions:
   - `generateComponentSchema(doc: ComponentDoc)`
   - `generateBreadcrumbSchema(path: string[])`
   - `generateOrganizationSchema()`
3. Return valid JSON-LD objects

### Step 2: Create SEO Component (30min)
1. Create `/apps/web/src/components/seo/JsonLd.tsx`
2. Server component that renders `<script type="application/ld+json">`
3. Accept structured data as prop
4. Safely serialize to JSON

### Step 3: Add generateMetadata to Component Pages (1h)
1. Update `/apps/web/app/[locale]/docs/[[...slug]]/page.tsx`
2. Export async `generateMetadata` function
3. Fetch component doc data
4. Return:
   - title: "{Component} React Component | Nexa UI Kit"
   - description: Component description (< 160 chars)
   - keywords: Component-specific keywords
   - openGraph: title, description, image
   - twitter: card data

Example meta patterns:
```typescript
// Button component
title: "Button - Accessible React Button | Nexa UI Kit"
description: "Customizable button component with variants, sizes, and loading states. Built with Radix UI and Tailwind CSS. Copy-paste ready."

// Card component
title: "Card - Flexible Card Container | Nexa UI Kit"
description: "Card component for grouping content with header, body, and footer. Fully accessible and customizable with Tailwind CSS."
```

### Step 4: Update Sitemap (45min)
1. Update `/apps/web/app/sitemap.ts`
2. Import component slugs from component-docs
3. Generate entries for all 55 components:
   - URL: `${baseUrl}/docs/components/${slug}`
   - lastModified: component updatedAt date
   - changeFrequency: "weekly"
   - priority: 0.9 (high for component pages)
4. Add `/templates` route
5. Group by locale (5 languages)

### Step 5: Update Robots.txt (15min)
1. Update `/apps/web/app/robots.ts`
2. Allow all crawlers
3. Reference sitemap URL
4. Block admin/private routes if any

### Step 6: Add Canonical URLs (30min)
1. Add canonical link to layout or page metadata
2. Handle locale variants (hreflang)
3. Prevent duplicate content issues

### Step 7: Implement Internal Linking (45min)
1. In ComponentDoc view, ensure Related Components links work
2. Add "See also" sections in best practices
3. Link from docs overview to component categories
4. Cross-link between related components

### Step 8: Validate & Test (30min)
1. Test JSON-LD with Google Rich Results Test
2. Verify sitemap accessible at /sitemap.xml
3. Check robots.txt at /robots.txt
4. Test meta tags with social sharing debuggers
5. Validate hreflang with i18n

## Todo List

- [ ] Create structured-data.ts helper
- [ ] Create JsonLd.tsx component
- [ ] Add generateMetadata to component doc pages
- [ ] Update sitemap.ts with 55 component URLs
- [ ] Update robots.ts configuration
- [ ] Add canonical URLs
- [ ] Implement internal linking in ComponentDoc
- [ ] Test with Google Rich Results Test
- [ ] Test sitemap accessibility
- [ ] Verify all meta descriptions < 160 chars
- [ ] Test OG image generation (optional)

## Success Criteria

1. JSON-LD validates without errors in Rich Results Test
2. Each component has unique meta title/description
3. Sitemap includes all 55 component pages + templates
4. Robots.txt correctly configured
5. Canonical URLs set for all pages
6. Internal links work between related components

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| JSON-LD validation errors | Medium | Low | Use schema.org validator |
| Sitemap too large | Low | Low | Split by locale if needed |
| Meta descriptions too generic | Medium | Medium | Write unique per component |
| Duplicate content (i18n) | Medium | High | Implement hreflang correctly |

## Security Considerations

- No user input in structured data
- Sanitize component descriptions
- Verify external URLs in schema

## Next Steps

After Phase 4:
- Submit sitemap to Google Search Console
- Monitor indexing status
- Track search rankings for target keywords
- Add remaining 45 component docs over time

---

## Unresolved Questions

1. Generate OG images dynamically per component?
2. Include FAQ schema for common questions?
3. Add HowTo schema for usage examples?
4. Separate sitemap per locale or combined?
