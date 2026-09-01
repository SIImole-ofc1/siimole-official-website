# Cloudflare Pages Deployment Guide

## Quick Start

This website is configured to deploy directly to **Cloudflare Pages** - a modern static hosting platform.

## Step-by-Step Deployment

### 1. Create a GitHub Repository

First, push your project to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SIImole Portfolio Website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/siimole-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click on **"Pages"** in the left navigation menu
3. Click **"Create a project"**
4. Select **"Connect to Git"**
5. Authorize GitHub if prompted
6. Select your **siimole-portfolio** repository
7. Configure build settings:
   - **Project name**: `siimole-portfolio`
   - **Production branch**: `main`
   - **Framework preset**: `None` (static site)
   - **Build command**: (leave empty)
   - **Build output directory**: `/`
8. Click **"Save and Deploy"**

### 3. Wait for Deployment

- Cloudflare will build and deploy your site
- You'll get a URL like: `siimole-portfolio.pages.dev`
- This URL is immediately available

### 4. Add Custom Domain (Optional)

To use your own domain:

1. In Cloudflare Pages project settings, go to **"Custom domains"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `portfolio.siimole.com`)
4. Update your domain's DNS settings to point to Cloudflare
5. Verify the domain

### 5. Set Up Auto-Deployments

Once connected, any push to your `main` branch will automatically trigger a new deployment!

## Environment Setup

### Using Wrangler CLI (Alternative Method)

If you prefer command-line deployment:

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to your Cloudflare account
wrangler login

# Deploy the project
wrangler pages deploy .
```

## File Structure for Deployment

Make sure your project has:

```
.
├── index.html          ✅ (required)
├── style.css           ✅ (will be served)
├── script.js           ✅ (will be served)
├── wrangler.toml       ✅ (deployment config)
└── README.md           ✅ (documentation)
```

## Important Notes

- ✅ No build process is needed - it's a static site
- ✅ All files in the root directory are served publicly
- ✅ Your email and location info are static (safe to include)
- ✅ SSL/HTTPS is automatic and free
- ✅ Global CDN is included at no extra cost

## Making Updates

After deployment, to update your website:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push
   ```
3. Cloudflare will automatically redeploy within seconds

## Troubleshooting

**Pages won't deploy:**
- Check that your GitHub repo is public or properly authorized
- Verify the build output directory is `/`
- Check Cloudflare Pages deployment logs

**Website looks broken:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check browser console for errors (F12)
- Verify all file paths in HTML are relative

**Want to use HTTPS:**
- It's automatic! Cloudflare provides free SSL/TLS

## Support

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- GitHub Pages Issues: https://github.com/
- Your email: siimole.official@gmail.com

---

**Next Step**: Push your code to GitHub and follow the "Connect Cloudflare Pages" section above!
