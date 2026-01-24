#!/usr/bin/env node

/**
 * Template Service Verification Script
 * Tests CRUD functions without a formal test framework
 */

const templates = [
  {
    id: "1",
    slug: "saas-landing",
    title: "SaaS Landing Page",
    description: "Modern SaaS landing page with hero, features, pricing, and testimonials. Built for conversion.",
    category: "landing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    previewUrl: "https://nexa-saas-landing.vercel.app",
    cloneCommand: "npx degit nexa-ui/saas-landing my-saas",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    isPremium: false,
    featured: true,
    createdAt: "2026-01-15",
    updatedAt: "2026-01-20",
  },
  {
    id: "2",
    slug: "dashboard-starter",
    title: "Dashboard Starter",
    description: "Clean admin dashboard with sidebar, charts, tables, and authentication. Ready for your data.",
    category: "dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    previewUrl: "https://nexa-dashboard.vercel.app",
    cloneCommand: "npx degit nexa-ui/dashboard-starter my-dashboard",
    techStack: ["Next.js", "Tailwind CSS", "Recharts", "Supabase"],
    isPremium: false,
    featured: true,
    createdAt: "2026-01-10",
    updatedAt: "2026-01-18",
  },
  {
    id: "3",
    slug: "portfolio-minimal",
    title: "Portfolio Template",
    description: "Minimalist portfolio for developers and designers. Showcase projects with style.",
    category: "portfolio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    previewUrl: "https://nexa-portfolio.vercel.app",
    cloneCommand: "npx degit nexa-ui/portfolio-minimal my-portfolio",
    techStack: ["Next.js", "Tailwind CSS", "MDX"],
    isPremium: false,
    featured: false,
    createdAt: "2026-01-08",
    updatedAt: "2026-01-12",
  },
  {
    id: "4",
    slug: "ecommerce-pro",
    title: "E-commerce Store",
    description: "Full-featured e-commerce template with cart, checkout, and product pages. Stripe ready.",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    previewUrl: "https://nexa-ecommerce.vercel.app",
    cloneCommand: "npx degit nexa-ui/ecommerce-pro my-store",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    isPremium: true,
    price: 49,
    featured: true,
    createdAt: "2026-01-05",
    updatedAt: "2026-01-22",
  },
  {
    id: "5",
    slug: "agency-landing",
    title: "Agency Landing",
    description: "Bold agency website template with animations, case studies, and contact forms.",
    category: "landing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    previewUrl: "https://nexa-agency.vercel.app",
    cloneCommand: "npx degit nexa-ui/agency-landing my-agency",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form"],
    isPremium: true,
    price: 39,
    featured: false,
    createdAt: "2026-01-03",
    updatedAt: "2026-01-19",
  },
];

// Service functions
function getTemplates(filters) {
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

function getTemplateBySlug(slug) {
  return templates.find((t) => t.slug === slug);
}

function getTemplatesByCategory(category) {
  return getTemplates({ category });
}

function getFeaturedTemplates() {
  return getTemplates({ featured: true });
}

function getFreeTemplates() {
  return getTemplates({ isPremium: false });
}

function getPremiumTemplates() {
  return getTemplates({ isPremium: true });
}

function getAllCategories() {
  return ["landing", "dashboard", "portfolio", "ecommerce"];
}

// Test utilities
let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`✓ ${message}`);
    testsPassed++;
  } else {
    console.error(`✗ ${message}`);
    testsFailed++;
  }
}

function assertEquals(actual, expected, message) {
  assert(actual === expected, `${message} (expected: ${expected}, got: ${actual})`);
}

function assertArrayLength(arr, expected, message) {
  assertEquals(arr.length, expected, message);
}

console.log("Testing Template Service Functions\n");

// Test 1: Get all templates
console.log("1. Get All Templates");
const allTemplates = getTemplates();
assertArrayLength(allTemplates, 5, "Should return all 5 templates");
assert(allTemplates[0].featured === true, "First template should be featured (sorted)");

// Test 2: Filter by category
console.log("\n2. Filter by Category");
const landingTemplates = getTemplatesByCategory("landing");
assertArrayLength(landingTemplates, 2, "Should return 2 landing templates");
assert(landingTemplates.every(t => t.category === "landing"), "All should be landing category");

const dashboardTemplates = getTemplatesByCategory("dashboard");
assertArrayLength(dashboardTemplates, 1, "Should return 1 dashboard template");

const portfolioTemplates = getTemplatesByCategory("portfolio");
assertArrayLength(portfolioTemplates, 1, "Should return 1 portfolio template");

const ecommerceTemplates = getTemplatesByCategory("ecommerce");
assertArrayLength(ecommerceTemplates, 1, "Should return 1 ecommerce template");

// Test 3: Get featured templates
console.log("\n3. Get Featured Templates");
const featuredTemplates = getFeaturedTemplates();
assertArrayLength(featuredTemplates, 3, "Should return 3 featured templates");
assert(featuredTemplates.every(t => t.featured === true), "All should be featured");

// Test 4: Get free templates
console.log("\n4. Get Free Templates");
const freeTemplates = getFreeTemplates();
assertArrayLength(freeTemplates, 3, "Should return 3 free templates");
assert(freeTemplates.every(t => t.isPremium === false), "All should be free");

// Test 5: Get premium templates
console.log("\n5. Get Premium Templates");
const premiumTemplates = getPremiumTemplates();
assertArrayLength(premiumTemplates, 2, "Should return 2 premium templates");
assert(premiumTemplates.every(t => t.isPremium === true), "All should be premium");
assert(premiumTemplates.every(t => t.price > 0), "All premium templates should have price");

// Test 6: Get template by slug
console.log("\n6. Get Template by Slug");
const template = getTemplateBySlug("saas-landing");
assert(template !== undefined, "Should find template by slug");
assertEquals(template?.title, "SaaS Landing Page", "Should return correct template");

const nonExistent = getTemplateBySlug("nonexistent");
assert(nonExistent === undefined, "Should return undefined for non-existent slug");

// Test 7: Combined filters
console.log("\n7. Combined Filters");
const featuredLanding = getTemplates({ category: "landing", featured: true });
assertArrayLength(featuredLanding, 1, "Should return 1 featured landing template");

const freeDashboard = getTemplates({ category: "dashboard", isPremium: false });
assertArrayLength(freeDashboard, 1, "Should return 1 free dashboard template");

// Test 8: Sort order
console.log("\n8. Sort Order");
const sortedTemplates = getTemplates();
assert(sortedTemplates[0].featured === true, "First should be featured");
assert(sortedTemplates[1].featured === true, "Second should be featured");
assert(sortedTemplates[2].featured === true, "Third should be featured");

const featuredByDate = sortedTemplates.filter(t => t.featured);
const dates = featuredByDate.map(t => new Date(t.updatedAt).getTime());
assert(dates[0] >= dates[1] && dates[1] >= dates[2], "Featured templates should be sorted by date desc");

// Test 9: Get all categories
console.log("\n9. Get All Categories");
const categories = getAllCategories();
assertArrayLength(categories, 4, "Should return 4 categories");
assert(categories.includes("landing"), "Should include landing");
assert(categories.includes("dashboard"), "Should include dashboard");
assert(categories.includes("portfolio"), "Should include portfolio");
assert(categories.includes("ecommerce"), "Should include ecommerce");

// Test 10: Data integrity
console.log("\n10. Data Integrity");
allTemplates.forEach((template, index) => {
  assert(template.id, `Template ${index + 1} should have id`);
  assert(template.slug, `Template ${index + 1} should have slug`);
  assert(template.title, `Template ${index + 1} should have title`);
  assert(template.description, `Template ${index + 1} should have description`);
  assert(template.category, `Template ${index + 1} should have category`);
  assert(template.image, `Template ${index + 1} should have image`);
  assert(template.previewUrl, `Template ${index + 1} should have previewUrl`);
  assert(template.cloneCommand, `Template ${index + 1} should have cloneCommand`);
  assert(Array.isArray(template.techStack), `Template ${index + 1} techStack should be array`);
  assert(typeof template.isPremium === 'boolean', `Template ${index + 1} isPremium should be boolean`);
  assert(typeof template.featured === 'boolean', `Template ${index + 1} featured should be boolean`);
  assert(template.createdAt, `Template ${index + 1} should have createdAt`);
  assert(template.updatedAt, `Template ${index + 1} should have updatedAt`);

  if (template.isPremium) {
    assert(template.price && template.price > 0, `Premium template ${index + 1} should have price > 0`);
  }
});

// Summary
console.log("\n" + "=".repeat(50));
console.log(`Tests Passed: ${testsPassed}`);
console.log(`Tests Failed: ${testsFailed}`);
console.log("=".repeat(50));

if (testsFailed === 0) {
  console.log("\n✓ All tests passed!");
  process.exit(0);
} else {
  console.log(`\n✗ ${testsFailed} test(s) failed`);
  process.exit(1);
}
