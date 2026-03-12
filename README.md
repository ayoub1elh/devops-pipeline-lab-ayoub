# DevOps Pipeline Lab

This project is a React + Vite app with automated CI/CD using GitHub Actions.

## What Happens On Push

On every push to main, the workflow in [ .github/workflows/ci.yml ]( .github/workflows/ci.yml ) will:

1. Install dependencies with pnpm.
2. Run ESLint.
3. Build the project.
4. Deploy the dist folder to GitHub Pages.

On pull requests to main, the workflow runs CI (install, lint, build) without deploying.

## One-Time GitHub Setup

1. Push this repository to GitHub.
2. Open repository settings.
3. Go to Pages.
4. Under Build and deployment, set Source to GitHub Actions.
5. Ensure your default branch is main (or update the workflow branch names).

## Local Development

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Run lint:

```bash
pnpm lint
```

Create production build:

```bash
pnpm build
```
