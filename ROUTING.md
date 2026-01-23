# Multi-App Routing Setup

## 🎯 Overview

This monorepo is configured so that all three apps can be accessed through the main `web` app on port 3000:

| Route | App | Direct Port | Description |
|-------|-----|-------------|-------------|
| `/` | web | 3000 | Main application (root) |
| `/docs` | docs | 3001 | Documentation site |
| `/playground` | playground | 3002 | Experimental playground |

## 🔧 How It Works

### 1. Next.js Rewrites (web app)
The `web` app uses Next.js rewrites to proxy requests to other apps:

```typescript
// apps/web/next.config.ts
async rewrites() {
  return [
    {
      source: "/docs",
      destination: "http://localhost:3001/docs",
    },
    {
      source: "/docs/:path*",
      destination: "http://localhost:3001/docs/:path*",
    },
    {
      source: "/playground",
      destination: "http://localhost:3002/playground",
    },
    {
      source: "/playground/:path*",
      destination: "http://localhost:3002/playground/:path*",
    },
  ];
}
```

### 2. Base Path Configuration
Each sub-app is configured with a `basePath`:

```typescript
// apps/docs/next.config.ts
const nextConfig: NextConfig = {
  basePath: "/docs",
};

// apps/playground/next.config.ts
const nextConfig: NextConfig = {
  basePath: "/playground",
};
```

## 🚀 Usage

### Development
Start all apps:
```bash
yarn dev
```

Then access:
- **Main app**: http://localhost:3000
- **Docs**: http://localhost:3000/docs
- **Playground**: http://localhost:3000/playground

### Direct Access (Optional)
You can still access each app directly on their individual ports:
- http://localhost:3000 (web)
- http://localhost:3001/docs (docs with basePath)
- http://localhost:3002/playground (playground with basePath)

## 📝 Important Notes

### 1. Internal Links
When creating links within each app, use the appropriate prefix:

**In web app:**
```tsx
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/docs">Documentation</Link>
<Link href="/playground">Playground</Link>
```

**In docs app:**
```tsx
// Links are automatically prefixed with /docs
<Link href="/">Docs Home</Link>  // → /docs
<Link href="/guide">Guide</Link>  // → /docs/guide
```

**In playground app:**
```tsx
// Links are automatically prefixed with /playground
<Link href="/">Playground Home</Link>  // → /playground
<Link href="/demo">Demo</Link>  // → /playground/demo
```

### 2. Asset Loading
Assets in each app are automatically prefixed with the basePath:

```tsx
// In docs app
<Image src="/logo.png" />  // → /docs/logo.png

// In playground app
<Image src="/icon.png" />  // → /playground/icon.png
```

### 3. API Routes
API routes also respect the basePath:

```tsx
// In docs app: app/api/search/route.ts
// Accessible at: /docs/api/search

// In playground app: app/api/demo/route.ts
// Accessible at: /playground/api/demo
```

## 🔄 Navigation Between Apps

To navigate between apps from the web app:

```tsx
import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/docs">Documentation</Link>
      <Link href="/playground">Playground</Link>
    </nav>
  );
}
```

## 🎨 Styling Considerations

Each app maintains its own styles, but they all load when accessed through the main app. Make sure to:

1. Use scoped CSS modules or Tailwind CSS
2. Avoid global style conflicts
3. Use unique class names or CSS-in-JS solutions

## 🚢 Production Deployment

### Option 1: Single Deployment (Recommended)
Deploy all apps together and use the same routing setup:

```bash
yarn build
# Deploy the built apps with a reverse proxy (Nginx, Vercel, etc.)
```

### Option 2: Separate Deployments
Deploy each app separately and use a reverse proxy:

```nginx
# Nginx example
location / {
  proxy_pass http://web-app:3000;
}

location /docs {
  proxy_pass http://docs-app:3001;
}

location /playground {
  proxy_pass http://playground-app:3002;
}
```

### Option 3: Vercel Monorepo
Use Vercel's monorepo support with rewrites configured in `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/docs/:path*", "destination": "https://docs.yourdomain.com/:path*" },
    { "source": "/playground/:path*", "destination": "https://playground.yourdomain.com/:path*" }
  ]
}
```

## 🔍 Troubleshooting

### Issue: 404 on sub-routes
**Solution**: Make sure all apps are running (`yarn dev`)

### Issue: Styles not loading
**Solution**: Check that asset paths are correct and basePath is configured

### Issue: API routes not working
**Solution**: Verify basePath is set correctly in next.config.ts

### Issue: Links not working
**Solution**: Use Next.js `<Link>` component, not `<a>` tags

## 📚 Additional Resources

- [Next.js Rewrites](https://nextjs.org/docs/app/api-reference/next-config-js/rewrites)
- [Next.js Base Path](https://nextjs.org/docs/app/api-reference/next-config-js/basePath)
- [Turborepo Multi-Zone](https://turbo.build/repo/docs/handbook/deploying-with-docker)
