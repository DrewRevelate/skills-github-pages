# Deploying Your Full Throttle RevOps Presentation to Vercel

We've tried several automated deployment approaches, but encountered some issues. Here's a reliable manual method to deploy your presentation to Vercel.

## Method 1: Manual Deployment (Recommended)

This method is the most reliable and gives you full control over the deployment process.

1. First, prepare your site for deployment:
   ```
   npm run deploy:manual
   ```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and log in

3. Click "Add New..." > "Project"

4. You have two options:
   
   **Option A: Upload directly**
   - Click "Upload" in the deployment section
   - Drag and drop the entire `out` folder from your project directory
   - Configure project settings (Framework: Other)
   - Click "Deploy"

   **Option B: Deploy from GitHub**
   - Connect your GitHub account
   - Select your repository
   - Configure the build settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `out`
   - Click "Deploy"

5. After deployment, you can set up your custom domain (fullthrottle.revelateops.com) in the Vercel project settings.

## Method 2: Command Line Deployment (Alternative)

If you prefer using the command line, you can try these approaches:

### Option 1: Simple Direct Deployment

```
npm run deploy:simple
```

This will:
1. Build your project
2. Deploy the `out` directory to Vercel

### Option 2: Static Directory Deployment

```
npm run deploy:static
```

This will:
1. Build your project
2. Create a vercel.json file in the out directory
3. Deploy the out directory to Vercel

### Option 3: Standard Vercel Deployment

```
npm run deploy:vercel
```

This will attempt a standard Vercel deployment.

## Troubleshooting

If you encounter issues with any of the command-line deployments:

1. **Missing routes-manifest.json**: This is due to Next.js static export compatibility issues with Vercel. Use the manual deployment method instead.

2. **Authentication issues**: Make sure you're logged in to Vercel CLI by running `vercel login`.

3. **Configuration conflicts**: If you see errors about conflicting routing properties, use the manual deployment method.

## Setting Up a Custom Domain

After successful deployment:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your domain (fullthrottle.revelateops.com)
4. Follow Vercel's instructions to configure your DNS settings

## Need More Help?

If you continue to experience issues, the Vercel documentation has excellent resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Deploying Next.js to Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel)
