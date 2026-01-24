# Phase 2: Template Gallery UI

## Context Links

- **Parent Plan**: [plan.md](./plan.md)
- **Dependencies**: [Phase 1](./phase-01-template-gallery-infrastructure.md)
- **Blocks**: None

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-24 |
| Priority | P1 |
| Effort | 4h |
| Implementation Status | Completed with Issues |
| Review Status | Completed (Score: 7.5/10) |

**Description**: Build the `/templates` page with template cards, category filters, live preview modals, and clone commands. Follow existing Showcase page pattern.

## Key Insights

- Showcase.tsx provides excellent reference for gallery layout
- Use Framer Motion for animations (already in codebase)
- Template cards need: image, title, description, tags, CTAs
- Premium badge for "Pro" templates
- Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop

## Requirements

### Functional
- [ ] Create `/templates` route and page
- [ ] Display template cards in responsive grid
- [ ] Category filter buttons (All, Landing, Dashboard, Portfolio, E-commerce)
- [ ] "Pro" badge on premium templates
- [ ] "Preview" button opens live preview (iframe modal or new tab)
- [ ] "Clone" button shows clone command with copy functionality
- [ ] Mobile-responsive layout

### Non-Functional
- [ ] Page load < 2s
- [ ] Accessible keyboard navigation
- [ ] Dark mode support
- [ ] i18n for all text content

## Architecture

```
apps/web/
├── app/[locale]/templates/
│   └── page.tsx              # New: Route page
└── src/views/
    └── Templates/
        ├── index.tsx         # New: Main view
        ├── TemplateCard.tsx  # New: Card component
        ├── TemplateFilters.tsx  # New: Filter buttons
        └── CloneModal.tsx    # New: Clone command modal
```

### Component Structure

```
<TemplatesPage>
  <Navbar />
  <HeroSection />
  <TemplateFilters categories={} activeCategory={} onChange={} />
  <TemplateGrid>
    <TemplateCard template={} />
    ...
  </TemplateGrid>
  <CloneModal template={} isOpen={} onClose={} />
</TemplatesPage>
```

## Related Code Files

| File | Purpose |
|------|---------|
| `/apps/web/src/views/Showcase.tsx` | Reference for gallery layout & cards |
| `/apps/web/src/components/ui/badge.tsx` | Pro badge component |
| `/apps/web/src/components/ui/button.tsx` | CTA buttons |
| `/apps/web/src/components/ui/dialog.tsx` | Modal for clone command |
| `/apps/web/app/[locale]/pricing/page.tsx` | Route page pattern |

## Implementation Steps

### Step 1: Create Route Page (15min)
1. Create `/apps/web/app/[locale]/templates/page.tsx`
2. Import and render `TemplatesPage` view
3. Add to Navbar navigation (update Navbar.tsx)

### Step 2: Create Main View Component (1h)
1. Create `/apps/web/src/views/Templates/index.tsx`
2. Use `useTranslations('Templates')` for i18n
3. Implement hero section with title/subtitle
4. Add category filter state management
5. Fetch templates from template-service
6. Apply category filter to displayed templates

### Step 3: Create TemplateCard Component (1h)
1. Create `/apps/web/src/views/Templates/TemplateCard.tsx`
2. Props: `template: Template`
3. Display:
   - Preview image with hover effect
   - Title and description
   - Tech stack badges
   - Pro badge (conditional)
   - Preview button
   - Clone button
4. Framer Motion entrance animation

### Step 4: Create Filter Component (30min)
1. Create `/apps/web/src/views/Templates/TemplateFilters.tsx`
2. Render category buttons: All, Landing, Dashboard, Portfolio, E-commerce
3. Active state styling (similar to Showcase.tsx)
4. Use i18n for category labels

### Step 5: Create Clone Modal (45min)
1. Create `/apps/web/src/views/Templates/CloneModal.tsx`
2. Use Dialog component from ui
3. Display:
   - Template name
   - Clone command (npx/degit)
   - Copy button with toast feedback
   - Link to GitHub repo
4. Keyboard accessible (Escape to close)

### Step 6: Add Navbar Link (15min)
1. Update `/apps/web/src/components/layout/Navbar.tsx`
2. Add "Templates" link between "Themes" and "Showcase"
3. Update mobile nav menu

### Step 7: Update Sitemap (15min)
1. Add `/templates` to `/apps/web/app/sitemap.ts`
2. Set appropriate priority and changeFrequency

### Step 8: Add Remaining i18n (15min)
1. Update en.json with any missing strings
2. Add placeholder translations for other locales

## Todo List

- [x] Create `/app/[locale]/templates/page.tsx` route
- [x] Create `views/Templates/index.tsx` main component
- [x] Create `views/Templates/TemplateCard.tsx` component
- [x] Create `views/Templates/TemplateFilters.tsx` component (merged into index.tsx)
- [x] Create `views/Templates/CloneModal.tsx` component
- [x] Add Templates link to Navbar
- [x] Add /templates to sitemap.ts
- [x] Complete i18n messages for Templates
- [x] Test responsive layout (mobile, tablet, desktop)
- [x] Test dark mode
- [ ] **CRITICAL**: Replace img tags with Next.js Image (XSS risk)
- [ ] **CRITICAL**: Add keyboard navigation to filters
- [ ] **CRITICAL**: Add ARIA labels to all buttons
- [ ] **HIGH**: Implement error boundaries
- [ ] **HIGH**: Add loading states
- [ ] Test keyboard navigation

## Success Criteria

1. `/templates` page renders without errors
2. Category filters work correctly
3. Template cards display all metadata
4. Pro badge shows on premium templates
5. Clone modal opens and copy works
6. Page is fully responsive
7. Dark mode styling correct
8. All text uses i18n

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Live preview iframe CORS issues | Medium | Medium | Fallback to new tab preview |
| Image loading slow | Low | Low | Use blur placeholders, next/image |
| Animation performance | Low | Low | Use will-change, reduce on mobile |
| **XSS via external image URLs** | **High** | **Critical** | **Use Next.js Image with domain allowlist** |
| **Large template list performance** | **Medium** | **Medium** | **Implement virtual scrolling** |

## Security Considerations

- Sanitize clone commands before display
- Validate preview URLs (no XSS in iframe src)
- Rate limit clone command copies (prevent abuse)

## Next Steps

**Before Production Deploy:**
1. Fix XSS vulnerability - replace img with Next.js Image
2. Add keyboard navigation + ARIA labels
3. Implement error boundaries for template cards
4. Add loading skeletons

**After Phase 2:**
- Gather user feedback on templates
- Add more templates based on demand
- Implement premium template purchase flow (future)
- Consider virtual scrolling if template count > 30

---

## Unresolved Questions

1. ~~Should preview be iframe, CodeSandbox embed, or new tab?~~ **Resolved: New tab with rel="noreferrer"**
2. Show download count or GitHub stars on cards?
3. Include search/sort functionality in v1?
4. **NEW**: What CDN domains should be allowlisted for template images?
5. **NEW**: Should we rate-limit clipboard copy operations to prevent abuse?
