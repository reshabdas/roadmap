// Deployment configuration for different platforms
module.exports = {
  // Netlify configuration
  netlify: {
    buildCommand: 'npm run build',
    publishDirectory: 'dist',
    functionsDirectory: 'netlify/functions',
    redirects: [
      {
        from: '/*',
        to: '/index.html',
        status: 200
      }
    ],
    headers: [
      {
        for: '/*',
        values: {
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
        }
      },
      {
        for: '/assets/*',
        values: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    ]
  },

  // Vercel configuration
  vercel: {
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    installCommand: 'npm install',
    framework: 'vite',
    rewrites: [
      {
        source: '/(.*)',
        destination: '/index.html'
      }
    ]
  },

  // GitHub Pages configuration
  githubPages: {
    buildCommand: 'npm run build',
    publishDirectory: 'dist',
    branch: 'gh-pages'
  },

  // Docker configuration
  docker: {
    baseImage: 'node:18-alpine',
    buildStage: 'build',
    productionStage: 'production',
    nginxConfig: {
      port: 80,
      root: '/usr/share/nginx/html',
      tryFiles: '$uri $uri/ /index.html'
    }
  }
}; 