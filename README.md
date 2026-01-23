# Nexa Monorepo

This is a [Turborepo](https://turbo.build/repo)-powered monorepo for the Nexa project.

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `web`: Main Next.js application (runs on port 3000)
- `docs`: Documentation site built with Next.js (runs on port 3001)
- `playground`: Experimental playground app built with Next.js (runs on port 3002)

### Packages

- `@nexa/typescript-config`: Shared TypeScript configurations
- `@nexa/eslint-config`: Shared ESLint configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn 1.22.22

### Install dependencies

```bash
yarn install
```

### Development

To develop all apps simultaneously:

```bash
yarn dev
```

To develop a specific app:

```bash
# Run only the web app
yarn dev:web

# Run only the docs app
yarn dev:docs

# Run only the playground app
yarn dev:playground
```

### Build

To build all apps and packages:

```bash
yarn build
```

### Lint

To lint all apps and packages:

```bash
yarn lint
```

### Type Check

To run TypeScript type checking:

```bash
yarn type-check
```

### Format

To format all files with Prettier:

```bash
yarn format
```

### Clean

To clean all build artifacts and node_modules:

```bash
yarn clean
```

## Project Structure

```
nexa/
├── apps/
│   ├── web/          # Main application (port 3000)
│   ├── docs/         # Documentation (port 3001)
│   └── playground/   # Playground (port 3002)
├── packages/
│   ├── typescript-config/  # Shared TS configs
│   └── eslint-config/      # Shared ESLint configs
├── package.json      # Root package.json
├── turbo.json        # Turborepo configuration
└── README.md         # This file
```

## Useful Links

Learn more about Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)

