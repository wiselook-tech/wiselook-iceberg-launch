# Deployment Guide

## For Lovable
```bash
npm run build
```
This creates a build with root paths (`/assets/...`) suitable for Lovable.

## For GitHub Pages

### Option 1: GitHub Actions (Recommended)
1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch - the workflow will automatically deploy

### Option 2: Manual Deployment
1. Build for GitHub Pages:
   ```bash
   npm run build:github
   ```
2. Commit and push the dist folder:
   ```bash
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```
3. Go to repository Settings → Pages
4. Set Source to "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder

## URLs
- **Lovable**: Your Lovable app URL
- **GitHub Pages**: https://wiselook-tech.github.io/wiselook-iceberg-launch/
