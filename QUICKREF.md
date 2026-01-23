# 🚀 Nexa Turborepo - Quick Reference

## 📦 Apps & Ports

| App        | Port | URL                      |
|------------|------|--------------------------|
| web        | 3000 | http://localhost:3000    |
| docs       | 3001 | http://localhost:3001    |
| playground | 3002 | http://localhost:3002    |

## ⚡ Common Commands

```bash
# Start all apps
yarn dev

# Start specific app
yarn dev:web
yarn dev:docs
yarn dev:playground

# Build everything
yarn build

# Code quality
yarn lint
yarn format
yarn type-check

# Clean up
yarn clean
```

## 📁 Structure

```
nexa/
├── apps/
│   ├── web/          ← Main app
│   ├── docs/         ← Documentation
│   └── playground/   ← Experiments
└── packages/
    ├── typescript-config/  ← Shared TS configs
    └── eslint-config/      ← Shared ESLint configs
```

## 🔧 Tech Stack

- **Framework**: Next.js 16.1.4
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo 2.7.5
- **Package Manager**: Yarn 1.22.22

## 📚 Documentation

- Full setup details: `SETUP.md`
- Project overview: `README.md`
