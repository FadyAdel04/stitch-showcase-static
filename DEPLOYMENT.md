# Deployment Guide

## Vercel Deployment (Recommended)

### Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your repository
4. Click "Deploy" (no additional configuration needed)

## Project Structure

- **Assets**: All images are in the `public/` folder for optimal Vercel deployment
- **Data**: JSON files in `src/data/` for product and category information
- **Build**: Vite builds to `dist/` folder with all assets properly copied

## Environment Variables

No environment variables are needed for this frontend-only application.

## Build Configuration

The project is configured to build with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Asset Management

- ✅ All images moved to `public/` folder
- ✅ Image paths updated to use public folder references
- ✅ No more `@/assets/` imports - using direct public paths
- ✅ Optimized for static deployment

## Features After Deployment

- ✅ Static site generation
- ✅ Client-side routing
- ✅ Product catalog with local JSON data
- ✅ Shopping cart (localStorage)
- ✅ Wishlist (localStorage)
- ✅ Search functionality
- ✅ Responsive design
- ✅ No backend required
- ✅ All assets properly served from public folder

## Troubleshooting

If you encounter issues:
1. Ensure all dependencies are installed
2. Check that the build command completes successfully
3. Verify that the output directory contains the built files
4. Check that all images are in the `public/` folder
5. Check the Vercel function logs for any errors

