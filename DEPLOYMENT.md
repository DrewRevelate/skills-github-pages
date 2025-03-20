# Deployment Guide for Full Throttle Revenue Presentation

This guide provides instructions for deploying your Next.js presentation to Vercel for public access.

## Prerequisites

- GitHub account (your presentation is already on GitHub)
- Vercel account (create one at [vercel.com](https://vercel.com) if you don't have one)

## Deployment Steps

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New..." and select "Project"
3. Choose "Import Git Repository" and select the "RevOps_Presentation" repository
4. Vercel will automatically detect that this is a Next.js project

### 2. Configure Deployment Settings

Vercel will automatically detect the correct project settings, but you can customize the following:

- **Project Name**: You can keep it as "RevOps_Presentation" or change it
- **Framework Preset**: Should be automatically selected as "Next.js"
- **Root Directory**: Keep as "/" (default)
- **Build Command**: Leave as default (`next build`)
- **Output Directory**: Leave as default (`.next`)
- **Install Command**: Leave as default (`npm install`)

### 3. Environment Variables

No environment variables are required for this project.

### 4. Deploy

Click "Deploy" and wait for the build to complete. This usually takes 1-2 minutes.

### 5. Access Your Live Presentation

Once deployed, Vercel will provide you with a URL where your presentation is live. The URL will be in the format:

- `https://revops-presentation.vercel.app`
- or `https://revops-presentation-yourusername.vercel.app`

You can use this URL to share your presentation with others.

## Custom Domain (Optional)

If you want to use a custom domain:

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your domain and follow the instructions for verification
3. Update DNS settings as instructed by Vercel

## Troubleshooting

### Missing Images

If images are not displaying properly:

1. Make sure all image files are in the `public/images/` directory
2. Check that file names and paths match exactly (case-sensitive)
3. The application includes SVG placeholders as fallbacks

### Build Errors

If you encounter build errors:

1. Check the build logs in Vercel for specific error messages
2. Ensure all components with React hooks have the "use client" directive
3. Verify that the Next.js version is compatible with your code

## Updates and Continuous Deployment

Any changes pushed to the `main` branch of your GitHub repository will automatically trigger a new deployment on Vercel.

## Local Development

To run the presentation locally:

```bash
# Clone the repository
git clone https://github.com/DrewRevelate/RevOps_Presentation.git

# Navigate to the project
cd RevOps_Presentation

# Install dependencies
npm install

# Start development server
npm run dev
```

Then visit `http://localhost:3000` in your browser.
