# Full Throttle Revenue: RevOps & Automation Presentation

A dynamic, F1 racing-themed presentation designed for undergraduate business students focusing on Revenue Operations (RevOps) and Automation. This interactive presentation includes dynamic slide transitions, racing-inspired visuals, an animated sales tech timeline, and a polling system.

## Features

- Dynamic slide transitions with racing-inspired visual effects
- Interactive polling system for audience engagement
- Animated timeline for the evolution of sales tech
- Mobile-responsive design that works on multiple devices
- Next.js-based for modern web performance

## Deployment Options

### GitHub Pages (Recommended)

This project is configured for GitHub Pages deployment with a custom domain.

1. Install dependencies:
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy:github
```

This will:
- Build the static site
- Create necessary files (.nojekyll and CNAME)
- Publish to the gh-pages branch
- Push source code to the main branch

The presentation will be available at your custom domain or https://username.github.io/repo-name.

### Vercel Deployment

For Vercel deployment:

1. Make sure the Vercel CLI is installed:
```bash
npm i -g vercel
```

2. Run the deployment script:
```bash
npm run deploy:vercel
```

Alternatively, you can deploy via the Vercel dashboard by connecting your GitHub repository and selecting the **main branch** (not gh-pages).

### Local Development

To run the presentation locally:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Project Structure

- `/pages/slides/` - Contains all presentation slides
- `/components/` - Reusable components like timeline, poll, navigation
- `/styles/` - Global CSS and styling
- `/public/` - Static assets like images

## Mobile Experience

The presentation is fully responsive with special considerations for mobile users:
- Touch swipe navigation
- Mobile-optimized layout
- First-time swipe hint for better usability

## Notes for Presenters

- Use arrow keys or touch swipes to navigate between slides
- Hit space to advance to the next slide
- When giving the presentation, browser full-screen mode is recommended (F11 in most browsers)
- For best results on projectors, use a resolution of 1920x1080

---

Created by Drew Lambert for the Industry Days event at the Manning School of Business, University of Massachusetts Lowell.
