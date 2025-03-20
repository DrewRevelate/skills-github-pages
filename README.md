# Full Throttle Revenue Presentation

An interactive, F1 racing-themed presentation on Revenue Operations (RevOps) and Automation for undergraduate business students, built with Next.js.

## Overview

This presentation is designed for a 40-minute talk about Revenue Operations and Sales Engineering for the Industry Days event at Manning School of Business, University of Massachusetts Lowell. The design is inspired by Formula 1 racing aesthetics with dynamic transitions, responsive layouts, and interactive elements.

### Key Features

- **Modern, responsive design** that works on all devices from desktop to mobile
- **F1 racing-inspired visual style** with dynamic animations and transitions
- **Interactive elements** including polls and animated visualizations
- **Keyboard and touch navigation** for intuitive control
- **Progressive web app capabilities** for improved performance
- **SEO and accessibility** optimizations

## Tech Stack

- **Next.js 14** with App Router for modern, efficient rendering
- **React 18** for interactive UI components
- **TypeScript** for type safety and better developer experience
- **CSS-in-JS** using styled-jsx for component-scoped styling
- **Optimized Images** with Next.js Image component and SVG fallbacks
- **Responsive Design** for all screen sizes from desktop to mobile
- **GitHub & Vercel** deployment pipeline for continuous integration

## Presentation Structure

The presentation consists of 8 slides:

1. **Introduction** - Title slide with presenter information
2. **Presenter Profile** - Background and expertise of the presenter
3. **Revenue Acceleration** - Introduction to RevOps concepts
4. **Sales Tech Evolution** - Timeline of sales technology development
5. **Automation Solutions** - Key automation tools and approaches
6. **Human vs Automation** - Finding the right balance
7. **Future of Sales Tech** - Emerging trends and career opportunities
8. **Contact Information** - How to get in touch

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DrewRevelate/RevOps_Presentation.git
cd RevOps_Presentation
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the presentation.

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

Quick deployment with Vercel:

1. Push to GitHub repository
2. Connect to Vercel
3. Deploy with default settings

The presentation will be available at a URL like: `https://revops-presentation.vercel.app`

## Project Structure

- `/app` - Main application code (Next.js App Router)
  - `/components` - Reusable UI components
  - `/slides` - Individual presentation slides
  - `/utils` - Utility functions and helpers
  - `/api` - API routes (if needed)
- `/public` - Static assets (images, etc.)

## Customization

You can customize the presentation by:

1. Modifying the slides in the `/app/slides` directory and their corresponding component files
2. Updating styles in the components' styled-jsx sections
3. Replacing images in the `/public/images` directory

## Responsive Design

The presentation is designed to work on all screen sizes:

- **Desktop**: Full-featured experience with keyboard navigation
- **Tablet**: Touch-optimized with adjusted layout
- **Mobile**: Fully responsive with touch swipe navigation and mobile-friendly text sizes

## Browser Compatibility

The presentation works in all modern browsers:

- Chrome (recommended for best performance)
- Firefox
- Safari
- Edge

## License

MIT

## Author

Drew Lambert - Revelate Operations, LLC
