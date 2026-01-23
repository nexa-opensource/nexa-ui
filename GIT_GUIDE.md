# Git Workflow Guide

## 📦 Repository Structure

This is a **monorepo** with a **single Git repository** at the root level.

```
nexa/                    ← Single .git repository here
├── .git/               ← Only one Git directory
├── apps/
│   ├── web/           ← No .git here
│   ├── docs/          ← No .git here
│   └── playground/    ← No .git here
└── packages/
    ├── typescript-config/
    └── eslint-config/
```

## ✅ Current Status

- ✅ Single Git repository initialized at root
- ✅ All apps and packages tracked in one repository
- ✅ Initial commit completed
- ✅ Clean working tree

## 🔄 Common Git Commands

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
git log --graph --oneline --all
```

### Stage Changes
```bash
# Stage all changes
git add .

# Stage specific files
git add apps/web/src/components/MyComponent.tsx

# Stage specific app
git add apps/web/
```

### Commit Changes
```bash
# Commit with message
git commit -m "feat: add new feature"

# Commit with detailed message
git commit -m "feat: add user authentication" -m "- Add login page
- Add signup page
- Integrate with Supabase"
```

### Conventional Commits
We recommend using conventional commit messages:

```bash
git commit -m "feat: add new feature"      # New feature
git commit -m "fix: resolve bug"           # Bug fix
git commit -m "docs: update README"        # Documentation
git commit -m "style: format code"         # Code style
git commit -m "refactor: restructure"      # Code refactoring
git commit -m "test: add tests"            # Tests
git commit -m "chore: update deps"         # Maintenance
```

### Create Branches
```bash
# Create and switch to new branch
git checkout -b feature/user-auth

# Switch to existing branch
git checkout main

# List all branches
git branch -a
```

### Push to Remote
```bash
# Add remote (first time)
git remote add origin <your-repo-url>

# Push to remote
git push origin main

# Push new branch
git push -u origin feature/user-auth
```

### Pull from Remote
```bash
# Pull latest changes
git pull origin main

# Fetch without merging
git fetch origin
```

## 🎯 Recommended Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes...
# Stage and commit
git add .
git commit -m "feat: add new component"

# Push to remote
git push -u origin feature/new-component
```

### 2. Working on Specific Apps
```bash
# Make changes to web app
# Stage only web app changes
git add apps/web/
git commit -m "feat(web): add new page"

# Make changes to docs
git add apps/docs/
git commit -m "docs: update documentation"
```

### 3. Working on Shared Packages
```bash
# Update shared TypeScript config
git add packages/typescript-config/
git commit -m "chore(config): update TS settings"
```

## 🔍 Useful Git Commands

### View Changes
```bash
# See what changed
git diff

# See staged changes
git diff --cached

# See changes in specific file
git diff apps/web/src/components/MyComponent.tsx
```

### Undo Changes
```bash
# Discard unstaged changes
git checkout -- apps/web/src/components/MyComponent.tsx

# Unstage files
git reset HEAD apps/web/

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Stash Changes
```bash
# Stash current changes
git stash

# List stashes
git stash list

# Apply latest stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

## 🚀 Integration with Turborepo

Turborepo works seamlessly with Git:

### Affected Apps Detection
Turborepo can detect which apps are affected by changes:

```bash
# Build only affected apps
turbo run build --filter=[HEAD^1]

# Run tests on changed apps
turbo run test --filter=[origin/main...HEAD]
```

### CI/CD Integration
In your CI/CD pipeline:

```yaml
# Example GitHub Actions
- name: Build affected apps
  run: yarn turbo run build --filter=[HEAD^1]
```

## 📝 .gitignore

The root `.gitignore` handles all apps and packages:

```
node_modules
.next
.turbo
dist
build
*.log
.env*.local
```

## 🔐 Environment Variables

**Never commit** `.env` files with secrets:

```bash
# These are ignored by .gitignore
.env.local
.env.development.local
.env.production.local
```

## 🎉 Best Practices

1. **Commit Often**: Make small, focused commits
2. **Write Clear Messages**: Use conventional commits
3. **Branch Strategy**: Use feature branches
4. **Pull Before Push**: Always pull latest changes first
5. **Review Changes**: Use `git diff` before committing
6. **Keep History Clean**: Use meaningful commit messages

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Turborepo Git Integration](https://turbo.build/repo/docs/reference/command-line-reference/run#--filter)
