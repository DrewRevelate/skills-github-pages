const { execSync } = require('child_process');
const path = require('path');

function deployToVercel() {
  try {
    // Check if Vercel CLI is installed
    try {
      execSync('vercel --version', { stdio: 'ignore' });
      console.log('Vercel CLI is installed.');
    } catch (error) {
      console.log('Installing Vercel CLI...');
      execSync('npm i -g vercel', { stdio: 'inherit' });
    }
    
    // Add all files to git first to ensure Vercel gets everything
    console.log('Adding files to git...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit changes if any
    try {
      console.log('Committing changes...');
      execSync('git commit -m "Update for Vercel deployment"', { stdio: 'inherit' });
    } catch (err) {
      console.log('No changes to commit or commit failed. Continuing...');
    }

    // Push to main branch
    try {
      console.log('Pushing to main branch...');
      execSync('git push origin main', { stdio: 'inherit' });
    } catch (err) {
      console.log('Push failed, continuing with deployment anyway...');
    }
    
    // Deploy directly to Vercel
    console.log('Deploying to Vercel production...');
    execSync('vercel --prod', { stdio: 'inherit' });
    
    console.log('\nDeployment to Vercel completed!');
    console.log('You may need to set up a custom domain in the Vercel dashboard.');
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployToVercel();
