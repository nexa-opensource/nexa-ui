---
title: "Template Gallery & SEO Component Docs"
description: "Implement template showcase page and enhance 55 component docs with SEO optimization"
status: pending
priority: P1
effort: 16h
branch: main
tags: [seo, templates, docs, traffic-growth, components]
created: 2026-01-24
---

# Template Gallery & SEO Component Docs Implementation Plan

## Goal

Drive organic traffic to Nexa UI Kit by:
1. Creating a `/templates` page with high-quality starter templates
2. Enhancing 55 component documentation pages for SEO

## Context

- **Target**: Startups seeking beautiful UI components
- **Differentiator**: Better design quality than shadcn/ui
- **Current state**: 55 components exist, docs/playground apps are template-only

## Technical Stack

- Monorepo: Turborepo
- Framework: Next.js 16, React 19
- Styling: Tailwind CSS 4
- i18n: next-intl (5 languages: en, ko, ja, zh, vi)
- Database: Supabase (blog integration exists)
- Multi-app routing: web:3000, docs:3001, playground:3002

## Phase Overview

| Phase | Description | Effort | Dependencies |
|-------|-------------|--------|--------------|
| [Phase 1](./phase-01-template-gallery-infrastructure.md) | Template data layer & types | 3h | DONE |
| [Phase 2](./phase-02-template-gallery-ui.md) | Templates page UI | 4h | Phase 1 |
| [Phase 3](./phase-03-seo-component-docs.md) | Component docs enhancement | 5h | None |
| [Phase 4](./phase-04-seo-structured-data.md) | JSON-LD & meta optimization | 4h | Phase 3 |

## Success Metrics

- Templates page live with 3-5 templates
- All 55 component pages with structured sections
- JSON-LD structured data on component pages
- Sitemap updated with new routes

## Risks

- Template maintenance as dependencies update
- SEO results delayed 3-6 months
- i18n translations needed for 5 languages

## Related Files

- `/apps/web/src/views/Showcase.tsx` - Similar gallery pattern
- `/apps/web/src/views/Docs.tsx` - Current docs structure
- `/apps/web/app/sitemap.ts` - SEO sitemap
- `/apps/web/src/messages/en.json` - i18n messages

## Unresolved Questions

1. Should templates live in separate repos or monorepo?
2. Hosting for live template previews (iframe vs CodeSandbox)?
3. Priority ranking for 55 components SEO optimization?
4. How to handle premium template access/auth?
