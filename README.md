# SIImole Portfolio Website

A Windows 95-themed portfolio website built for SIImole, showcasing projects and contact information.

## 🎨 Features

- **Windows 95 Aesthetic**: Authentic retro styling with classic UI elements
- **Responsive Design**: Works on desktop and mobile devices
- **Project Showcase**: Display and link to active projects
- **Contact Information**: Easy access to email and office location
- **Tabbed Interface**: Organized content in Projects, About, and Contact sections
- **Interactive Elements**: Draggable windows, functioning tabs, and clock

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── style.css           # Windows 95 styling
├── script.js           # Interactive functionality
├── wrangler.toml       # Cloudflare Pages configuration
└── README.md           # This file
```

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- GitHub account (same as your Cloudflare account)
- Cloudflare account
- `wrangler` CLI (optional, for advanced deployment)

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SIImole Portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/siimole-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to "Pages" in the left sidebar
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize GitHub and select your repository
   - In build settings:
     - Framework preset: None
     - Build command: (leave empty)
     - Build output directory: `/`
   - Click "Save and Deploy"

3. **Custom Domain (Optional)**
   - In your Pages project settings, add your custom domain
   - Update DNS records in Cloudflare

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate**
   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   wrangler pages deploy .
   ```

## 📝 Customization

### Update Project Links
Edit the projects section in `index.html`:
```html
<a href="YOUR_PROJECT_URL" target="_blank" class="project-link">Visit Project →</a>
```

### Change Colors
Modify CSS variables in `style.css`:
```css
:root {
    --win95-gray: #c0c0c0;
    --win95-dark-gray: #808080;
    /* ... more colors ... */
}
```

### Add More Sections
Add new tabs in `index.html` and corresponding content divs following the existing pattern.

## 📧 Contact Information

- **Email**: siimole.official@gmail.com
- **Location**: Frankfurt am Main, Hessen, Germany

## ⚖️ Legal Notice

All rights reserved. Unauthorized use of SIImole's project codes, company name, or intellectual property is strictly prohibited and will be prosecuted to the fullest extent of the law.

## 📄 License

© 2024 SIImole. All rights reserved.

---

**Website Reference**: https://st-softwaretool.pages.dev/ (original Windows 95 theme inspiration)
