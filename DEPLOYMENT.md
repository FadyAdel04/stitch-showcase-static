# Deployment Guide

## Vercel Deployment (Recommended)

### Option 1: Deploy Frontend Folder Only
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your repository
4. Set the **Root Directory** to `frontend`
5. Click "Deploy"

### Option 2: Deploy Entire Project
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your repository
4. Use the root `vercel.json` configuration
5. Click "Deploy"

## Environment Variables

No environment variables are needed for this frontend-only application.

## Build Configuration

The project is configured to build with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Features After Deployment

- ✅ Static site generation
- ✅ Client-side routing
- ✅ Product catalog with local JSON data
- ✅ Shopping cart (localStorage)
- ✅ Wishlist (localStorage)
- ✅ Search functionality
- ✅ Responsive design
- ✅ No backend required

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed
2. Check that the build command completes successfully
3. Verify that the output directory contains the built files
4. Check the Vercel function logs for any errors

