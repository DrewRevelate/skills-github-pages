# Deploying Full Throttle RevOps Presentation to Vercel

This guide will help you deploy your F1-themed RevOps presentation to Vercel, making it accessible at a public URL or your custom domain.

## Prerequisites

1. You need a Vercel account. If you don't have one, sign up at [vercel.com](https://vercel.com).
2. Install Vercel CLI by running: `npm install -g vercel`

## Deployment Methods

### Method 1: Using Vercel CLI (Recommended for first deployment)

1. Open your terminal and navigate to your project directory:
   ```
   cd /Users/drewlambert/Desktop/Projects/full-throttle-presentation-nextjs
   ```

2. Login to Vercel (if you haven't already):
   ```
   vercel login
   ```

3. Deploy to production:
   ```
   vercel --prod
   ```

4. During the first deployment, Vercel will ask you a few questions:
   - Set up and deploy? **Y**
   - Which scope to deploy to? **Select your account or team**
   - Link to existing project? **N** (if this is your first deployment)
   - What's your project name? **full-throttle-presentation**
   - In which directory is your code located? **./** (current directory)
   - Want to override settings? **N**

5. Once deployed, Vercel will provide you with a deployment URL (e.g., https://full-throttle-presentation.vercel.app).

### Method 2: Using the Deployment Script

We've created a simplified deployment script that automates the Vercel deployment process:

1. Run the deployment script:
   ```
   npm run deploy:vercel
   ```

2. Follow the prompts if any appear.

### Method 3: GitHub Integration (Recommended for ongoing updates)

For continuous deployment whenever you push changes to GitHub:

1. Push your project to GitHub:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/full-throttle-presentation.git
   git push -u origin main
   ```

2. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project with the following settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

6. Click "Deploy"

## Setting Up a Custom Domain

To use your custom domain (e.g., fullthrottle.revelateops.com):

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to "Settings" > "Domains"
3. Add your domain and follow the instructions to configure DNS settings
4. Vercel will provide the required DNS records to add to your domain registrar

## Environment Variables

If your presentation needs environment variables (like Supabase credentials):

1. Go to your project in the [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to "Settings" > "Environment Variables"
3. Add the variables such as:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Troubleshooting

If you encounter issues:

1. Check your build logs in the Vercel dashboard
2. Ensure your Next.js configuration is correct in `next.config.js`
3. Verify you have the necessary dependencies installed
4. Check that your project is configured for static export with `output: 'export'`

## Updating Your Deployment

After making changes to your presentation:

1. Push your changes to GitHub (if using GitHub integration)
2. Or run `vercel --prod` again from your project directory

## Need Help?

If you need further assistance, refer to the [Vercel Documentation](https://vercel.com/docs) or contact Vercel support.
