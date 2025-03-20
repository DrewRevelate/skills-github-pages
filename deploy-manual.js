const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function prepareManualDeployment() {
  try {
    // Build the project
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Make sure the out directory contains a vercel.json file
    const vercelConfigPath = path.join(__dirname, 'out', 'vercel.json');
    const vercelConfig = {
      "version": 2,
      "cleanUrls": true
    };
    
    console.log('Creating vercel.json in the out directory...');
    fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
    
    // Create instructions.txt
    const instructionsPath = path.join(__dirname, 'out', 'DEPLOYMENT-INSTRUCTIONS.txt');
    const instructions = `
MANUAL DEPLOYMENT INSTRUCTIONS
==============================

Your static site has been built and is ready for deployment to Vercel.
Follow these steps to deploy:

1. Go to https://vercel.com/ and log in or create an account

2. Click "Add New..." > "Project"

3. Import your project from Git or upload the 'out' folder directly:
   - If uploading: Select all files in the 'out' directory and drag them to the Vercel import area
   - If using Git: Connect your repository and select it

4. Configure the project settings:
   - Framework Preset: Other
   - Build Command: No need to specify (we've already built the site)
   - Output Directory: .  (just a dot, since we're uploading the 'out' directory directly)

5. Click "Deploy"

6. After deployment, you can:
   - Set up a custom domain (fullthrottle.revelateops.com)
   - Configure environment variables if needed
   - Manage other settings from the Vercel dashboard

Note: If you want to use a custom domain, go to the project settings in Vercel,
click on "Domains" and follow the instructions to add your domain.
    `;
    
    console.log('Creating deployment instructions...');
    fs.writeFileSync(instructionsPath, instructions);
    
    console.log('\nBuild completed and manual deployment files prepared!');
    console.log('\nTo deploy, open the Vercel dashboard and upload the "out" directory.');
    console.log('See the DEPLOYMENT-INSTRUCTIONS.txt file in the "out" directory for detailed steps.');
    
  } catch (error) {
    console.error('Build preparation failed:', error);
  }
}

prepareManualDeployment();
