# Phase 3: SEO Component Docs Enhancement

## Context Links

- **Parent Plan**: [plan.md](./plan.md)
- **Dependencies**: None (parallel to Phases 1-2)
- **Blocks**: Phase 4

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-24 |
| Priority | P1 |
| Effort | 5h |
| Implementation Status | Pending |
| Review Status | Pending |

**Description**: Enhance 55 component documentation pages with structured sections, improved content, code snippets with syntax highlighting, and internal linking for SEO.

## Key Insights

- Current docs are minimal template (Docs.tsx)
- Each of 55 components in `src/components/ui/` needs dedicated doc page
- Structured sections improve readability and SEO
- Internal linking builds topic authority
- Copy-paste code snippets essential for developer UX

## Requirements

### Functional
- [ ] Create doc page structure: Overview, Usage, Props, Accessibility, Best Practices
- [ ] Implement code block component with syntax highlighting
- [ ] Add copy button to code blocks
- [ ] Create "Related Components" section with links
- [ ] Add "Edit on GitHub" link to each page
- [ ] Navigation sidebar with all 55 components

### Non-Functional
- [ ] Each page targets specific keywords
- [ ] Load time < 2s per page
- [ ] Accessible to screen readers
- [ ] Mobile-friendly code blocks

## Architecture

Current component list (55 components from `src/components/ui/`):
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip

### New File Structure

```
apps/web/src/
├── views/
│   └── ComponentDoc/
│       ├── index.tsx          # New: Component doc view
│       ├── CodeBlock.tsx      # New: Syntax highlighted code
│       ├── PropsTable.tsx     # New: Props documentation
│       └── RelatedComponents.tsx  # New: Related links
├── data/
│   └── component-docs/
│       ├── index.ts           # New: Doc metadata registry
│       ├── button.ts          # New: Button doc content
│       └── ...                # 54 more component docs
└── lib/
    └── component-doc-service.ts  # New: Doc fetching service
```

### Component Doc Data Structure

```typescript
export interface ComponentDoc {
  slug: string;
  name: string;
  description: string;
  category: 'inputs' | 'display' | 'feedback' | 'navigation' | 'layout' | 'overlay';
  keywords: string[];
  overview: string;
  usage: string;
  props: PropDefinition[];
  accessibility: string[];
  bestPractices: string[];
  commonPatterns: CodeExample[];
  relatedComponents: string[];
  githubPath: string;
}
```

## Related Code Files

| File | Purpose |
|------|---------|
| `/apps/web/src/views/Docs.tsx` | Current docs implementation |
| `/apps/web/src/components/ui/*.tsx` | All 55 components |
| `/apps/web/app/[locale]/docs/[[...slug]]/page.tsx` | Docs route |

## Implementation Steps

### Step 1: Create CodeBlock Component (45min)
1. Create `/apps/web/src/views/ComponentDoc/CodeBlock.tsx`
2. Integrate syntax highlighting (use Prism or Shiki)
3. Add copy button with toast feedback
4. Support TypeScript/TSX highlighting
5. Responsive design for mobile

### Step 2: Create PropsTable Component (30min)
1. Create `/apps/web/src/views/ComponentDoc/PropsTable.tsx`
2. Display: prop name, type, default, description
3. Sortable by name
4. Linkable types (e.g., ReactNode -> MDN)

### Step 3: Create ComponentDoc Data Structure (1h)
1. Create `/apps/web/src/data/component-docs/index.ts`
2. Define `ComponentDoc` interface
3. Create initial doc for `button.ts` as template
4. Categorize 55 components into 6 categories
5. Define related component mappings

### Step 4: Create Doc Content for Priority Components (1.5h)
Create docs for high-search-volume components first:
1. Button - most searched
2. Card - layout essential
3. Dialog/Modal - common pattern
4. Input - form essential
5. Table - data display
6. Dropdown Menu - navigation essential
7. Tabs - layout essential
8. Form - complex patterns
9. Select - form essential
10. Toast - feedback essential

Each doc includes: overview, 2-3 usage examples, props, accessibility notes, best practices.

### Step 5: Create ComponentDoc View (1h)
1. Create `/apps/web/src/views/ComponentDoc/index.tsx`
2. Sections in order:
   - Breadcrumb navigation
   - Title and description
   - Overview
   - Usage Examples (with CodeBlock)
   - Props Table
   - Accessibility
   - Best Practices
   - Related Components
   - Edit on GitHub link
3. Table of Contents sidebar (sticky)

### Step 6: Update Docs Router (30min)
1. Modify `/apps/web/app/[locale]/docs/[[...slug]]/page.tsx`
2. Route `/docs/components/[slug]` to ComponentDoc view
3. Pass component data to view

## Todo List

- [ ] Create CodeBlock component with syntax highlighting
- [ ] Create PropsTable component
- [ ] Create ComponentDoc data structure
- [ ] Create doc content for button, card, dialog
- [ ] Create doc content for input, table, dropdown-menu
- [ ] Create doc content for tabs, form, select, toast
- [ ] Create ComponentDoc view component
- [ ] Update docs router for component pages
- [ ] Add component categories to docs sidebar
- [ ] Test all 10 priority component pages
- [ ] Verify code copy functionality
- [ ] Test mobile layout

## Success Criteria

1. 10 priority components have full documentation
2. CodeBlock has syntax highlighting and copy button
3. PropsTable renders all component props
4. Related components link correctly
5. Edit on GitHub links work
6. Mobile-friendly layout
7. All content uses i18n

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Syntax highlighting bundle size | Medium | Medium | Dynamic import, code split |
| Props extraction manual effort | High | Medium | Consider TSDoc parser later |
| Content writing time | High | Medium | Prioritize high-traffic components |

## Security Considerations

- Escape HTML in code examples
- Validate GitHub edit URLs
- No user-generated content in v1

## Next Steps

After Phase 3:
- Phase 4 adds JSON-LD structured data
- Gradually add docs for remaining 45 components
- Measure search rankings per component

---

## Unresolved Questions

1. Use Shiki or Prism for syntax highlighting?
2. Extract props automatically from TypeScript or manual?
3. How to handle component variants (Button sizes, etc.)?
4. Include live playground in component docs?
