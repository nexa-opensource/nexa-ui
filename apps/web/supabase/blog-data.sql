INSERT INTO posts (title, description, date, read_time, category, image, author_name, author_role, author_avatar, content)
VALUES
  (
    'Introducing ShadcnUIKit V2',
    'We''ve rebuilt the entire library from the ground up. Better performance, more accessibility, and a brand new design system.',
    'Jan 12, 2024',
    '5 min read',
    'Release',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop',
    'Sarah Chen',
    'Lead Engineer',
    'https://github.com/shadcn.png',
    '<div class="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>We are thrilled to announce the release of <strong>ShadcnUIKit V2</strong>. This major update represents a complete overhaul of our component architecture, focusing on three key pillars: performance, accessibility, and developer experience.</p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4">What''s New?</h2><ul class="list-disc pl-6 space-y-2"><li><strong>Zero-runtime CSS:</strong> We''ve optimized our styling engine to reduce bundle size by 40%.</li><li><strong>Enhanced Accessibility:</strong> Every component has been audited against WCAG 2.1 AA standards.</li><li><strong>New Design Tokens:</strong> A comprehensive system for managing colors, typography, and spacing.</li><li><strong>Dark Mode 2.0:</strong> Smoother transitions and better contrast ratios.</li></ul><h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Performance Improvements</h2><p>We know that speed matters. In V2, we''ve rewritten our core primitives to minimize re-renders. Our benchmarks show a <strong>2.5x improvement</strong> in interaction latency on low-end devices.</p><div class="my-8 p-6 bg-muted/30 border rounded-xl"><code class="text-sm font-mono text-foreground">npm install shadcn-ui-kit@latest</code></div><p>This release wouldn''t have been possible without our amazing community. Thank you to everyone who contributed code, reported bugs, and shared feedback.</p></div>'
  ),
  (
    'Building Accessible Forms',
    'A deep dive into creating forms that work for everyone. Learn about ARIA labels, keyboard navigation, and error handling.',
    'Jan 08, 2024',
    '8 min read',
    'Tutorial',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop',
    'Marcus Johnson',
    'Accessibility Specialist',
    'https://github.com/vercel.png',
    '<div class="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>Forms are the primary way users interact with web applications. Making them accessible isn''t just a legal requirement—it''s good UX. In this guide, we''ll explore how to build robust, accessible forms using ShadcnUIKit primitives.</p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Semantic HTML</h2><p>It all starts with the right tags. Use <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, and <code>&lt;input&gt;</code> correctly. Never simulate a button with a div unless you have a very good reason (and handle all the aria attributes manually).</p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Error Handling</h2><p>When a user makes a mistake, don''t just turn the border red. Provide a clear, descriptive error message linked to the input field using <code>aria-describedby</code>.</p><p>Stay tuned for part 2 where we cover complex validation patterns!</p></div>'
  ),
  (
    'The Future of React Server Components',
    'How server components are changing the way we build web applications. What you need to know for 2024.',
    'Dec 28, 2023',
    '6 min read',
    'Opinion',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop',
    'Sarah Chen',
    'Lead Engineer',
    'https://github.com/shadcn.png',
    '<div class="space-y-6 text-lg leading-relaxed text-muted-foreground"><p>React Server Components (RSC) represent the biggest shift in the React ecosystem since hooks. They allow us to move data fetching to the server while keeping our client bundles small.</p><h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Why RSC?</h2><p>Traditional SPA architectures suffer from waterfalls. We fetch the user, then their settings, then their dashboard data. With RSC, we can parallelize this on the server and send down a fully rendered tree.</p></div>'
  );
