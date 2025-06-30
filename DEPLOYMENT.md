# Deployment Guide for RoadmapPro

This guide covers deploying your RoadmapPro website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)

## Build the Application

Before deploying, build your application:

```bash
npm run deploy:build
```

This will:
- Clean the previous build
- Build the application for production
- Output files to the `dist/` directory

## Deployment Options

### 1. Netlify (Recommended)

**Automatic Deployment:**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run deploy:build
netlify deploy --prod --dir=dist
```

### 2. Vercel

**Automatic Deployment:**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy automatically on push to main branch

**Manual Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

**Setup:**
1. Create a new branch called `gh-pages`
2. Push your built files to this branch
3. Enable GitHub Pages in repository settings

**Deployment Script:**
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy:build
npm run deploy
```

### 4. Docker Deployment

**Build and Run Locally:**
```bash
# Build the Docker image
docker build -t roadmappro .

# Run the container
docker run -p 8080:80 roadmappro
```

**Using Docker Compose:**
```bash
# Production
docker-compose up -d

# Development
docker-compose --profile dev up
```

**Deploy to Cloud Platforms:**
- **AWS ECS**: Use the Dockerfile with ECS task definition
- **Google Cloud Run**: Deploy the container directly
- **Azure Container Instances**: Use the Dockerfile

### 5. Traditional Web Server

**Nginx Configuration:**
1. Copy the `nginx.conf` file to your server
2. Build the application: `npm run deploy:build`
3. Copy the `dist/` contents to your web root
4. Restart Nginx

**Apache Configuration:**
Create `.htaccess` file in the root:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
```

## Environment Variables

If your application uses environment variables, set them in your deployment platform:

- **Netlify**: Environment variables in site settings
- **Vercel**: Environment variables in project settings
- **Docker**: Use `.env` file or environment variables

## Performance Optimization

The build is already optimized with:
- Code splitting for better caching
- Minified assets
- Optimized bundle sizes
- Proper cache headers

## Security

Security headers are configured in:
- `netlify.toml` for Netlify
- `vercel.json` for Vercel
- `nginx.conf` for Docker/Nginx

## Monitoring

After deployment:
1. Test all routes work correctly
2. Check performance with Lighthouse
3. Verify SEO meta tags
4. Test on mobile devices
5. Monitor error logs

## Troubleshooting

**Common Issues:**
- **404 on refresh**: Ensure SPA routing is configured
- **Build failures**: Check Node.js version compatibility
- **Slow loading**: Verify CDN and caching settings
- **CORS issues**: Check API endpoint configurations

**Debug Commands:**
```bash
# Check build output
npm run build && ls -la dist/

# Test locally
npm run serve

# Check bundle size
npm run build:analyze
```

## Support

For deployment issues:
1. Check the platform-specific documentation
2. Review build logs for errors
3. Verify all configuration files are present
4. Test with a minimal build first 