# Deployment Guide

## GitHub Pages Setup

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the main branch.

### Demo Site
The live demo will be available at: `https://gene891212.github.io/kuroshiro-enhance`

### Manual Setup Steps

1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

## NPM Publishing Setup

This project includes an automated NPM publishing workflow that triggers when you create a new tag.

### Setup NPM Token

1. Generate an NPM access token:
   - Log in to [npmjs.com](https://www.npmjs.com)
   - Go to Access Tokens in your account settings
   - Generate a new "Automation" token

2. Add the token to GitHub Secrets:
   - Go to your repository Settings
   - Navigate to "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your NPM token

### Publishing a New Version

1. Update the version in `package.json`
2. Create and push a git tag:
   ```bash
   git tag v1.3.2
   git push origin v1.3.2
   ```
3. The GitHub Action will automatically:
   - Run tests
   - Build the project
   - Publish to NPM
   - Create a GitHub release

### Commands

```bash
# Build the project
npm run build

# Build docs for GitHub Pages
npm run build:docs

# Deploy docs (run build:docs)
npm run deploy:docs
```
