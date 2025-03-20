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
    
    // Build the project first
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy the out directory
    console.log('Deploying to Vercel production...');
    execSync('vercel deploy --prebuilt --prod', { stdio: 'inherit' });
    
    console.log('\nDeployment to Vercel completed!');
    console.log('You may need to set up a custom domain in the Vercel dashboard.');
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployToVercel();
