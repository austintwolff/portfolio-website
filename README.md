# Austin Wolff - Developer Portfolio

A clean, modern portfolio website showcasing my projects and skills. Built with vanilla HTML, CSS, and JavaScript for optimal performance and simplicity.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: No frameworks, fast loading times
- **SEO Friendly**: Semantic HTML and meta tags
- **Easy to Update**: Simple HTML structure for adding new projects

## Live Site

Visit the live portfolio: `https://yourusername.github.io/portfolio-website/`

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # Interactive features
└── README.md           # This file
```

## Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace the following:

**Hero Section:**
- Change "Austin Wolff" to your name
- Update the subtitle and description
- Modify the email/LinkedIn/GitHub links in the contact section

**About Section:**
- Rewrite the bio paragraphs to reflect your background
- Update the skills tags with your technologies

**Contact Links:**
```html
<!-- Find these in the Contact Section -->
<a href="mailto:your.email@example.com">Email Me</a>
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
```

### 2. Add New Projects

To add a new project, copy this template into the projects grid in `index.html`:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <span class="project-icon">🎨</span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Brief description of what your project does and why it's cool.
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-features">
            <ul>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
            </ul>
        </div>
        <div class="project-links">
            <a href="demo-link" class="btn btn-small btn-primary" target="_blank">View Demo</a>
            <a href="github-link" class="btn btn-small btn-secondary" target="_blank">GitHub</a>
        </div>
    </div>
</div>
```

### 3. Customize Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --text-primary: #1f2937;       /* Main text */
    --text-secondary: #6b7280;     /* Secondary text */
    /* ... more variables */
}
```

### 4. Add Project Screenshots

Replace the emoji placeholders with actual images:

```html
<!-- Replace this: -->
<div class="project-placeholder">
    <span class="project-icon">🎤</span>
</div>

<!-- With this: -->
<img src="images/project-screenshot.png" alt="Project Name" style="width: 100%; height: 240px; object-fit: cover;">
```

Create an `images/` folder to store screenshots.

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right → "New repository"
3. Repository settings:
   - **Name**: `portfolio-website` (or `yourusername.github.io` for user site)
   - **Visibility**: Public
   - **DO NOT** initialize with README (we already have files)
4. Click "Create repository"

### Step 2: Push Your Code

Open Terminal and navigate to the portfolio folder:

```bash
cd /Users/austinwolff/portfolio-website

# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio website commit"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/yourusername/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://yourusername.github.io/portfolio-website/`

### Alternative: User/Organization Site

For a cleaner URL (`https://yourusername.github.io/`):

1. Create a repository named exactly: `yourusername.github.io`
2. Push this portfolio code to that repository
3. GitHub Pages will automatically deploy from the main branch

## Local Development

To view the site locally:

1. **Option 1 - Direct File Opening:**
   - Simply open `index.html` in your browser
   - Double-click the file or drag it into your browser

2. **Option 2 - Local Server (Recommended):**
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Python 2
   python -m SimpleHTTPServer 8000

   # Then visit: http://localhost:8000
   ```

3. **Option 3 - VS Code Live Server:**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"

## Updating Your Live Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Changes will appear on your live site within 1-2 minutes.

## Adding the Active Listener Copilot Project

You'll want to:

1. **Host Active Listener Copilot separately:**
   - Create a new repo: `active-listener-copilot`
   - Push the app code to that repo
   - Enable GitHub Pages for that repo

2. **Update portfolio links:**
   ```html
   <!-- In index.html, update the Active Listener project card -->
   <a href="https://yourusername.github.io/active-listener-copilot/"
      class="btn btn-small btn-primary" target="_blank">View Demo</a>
   <a href="https://github.com/yourusername/active-listener-copilot"
      class="btn btn-small btn-secondary" target="_blank">GitHub</a>
   ```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- **No frameworks** - Pure vanilla JavaScript
- **Minimal dependencies** - Zero external libraries
- **Optimized CSS** - Uses CSS Grid and Flexbox
- **Fast load times** - Typically <500ms

## Future Enhancements

Ideas for expanding the portfolio:

- [ ] Add blog section with markdown posts
- [ ] Integrate with GitHub API to show live repo stats
- [ ] Add dark mode toggle
- [ ] Include a contact form (using Formspree or similar)
- [ ] Add project screenshots/GIFs
- [ ] Create case studies for major projects
- [ ] Add testimonials section
- [ ] Include resume/CV download

## Troubleshooting

### Site not loading on GitHub Pages
- Check that the repository is public
- Verify GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes after enabling
- Clear browser cache

### Styles not applying
- Check that `styles.css` and `script.js` are in the same folder as `index.html`
- Verify file names are lowercase and match exactly

### Mobile menu not working
- Ensure `script.js` is linked at the bottom of `index.html`
- Check browser console for JavaScript errors (F12)

## License

This portfolio template is free to use and modify for your own portfolio.

## Credits

Built by Austin Wolff with HTML, CSS, and JavaScript.

---

**Ready to deploy?** Follow the deployment steps above and your portfolio will be live in minutes!
