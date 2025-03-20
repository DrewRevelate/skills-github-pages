const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function deployStatic() {
  try {
    // Build the project first
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check if Vercel CLI is installed
    try {
      execSync('vercel --version', { stdio: 'ignore' });
      console.log('Vercel CLI is installed.');
    } catch (error) {
      console.log('Installing Vercel CLI...');
      execSync('npm i -g vercel', { stdio: 'inherit' });
    }
    
    // Create a simple vercel.json in the out directory
    const vercelConfigPath = path.join(__dirname, 'out', 'vercel.json');
    const vercelConfig = {
      "version": 2,
      "routes": [
        { "handle": "filesystem" },
        { "src": "/(.*)", "dest": "/404.html" }
      ]
    };
    
    console.log('Creating vercel.json in the out directory...');
    fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
    
    // Deploy the out directory directly with --yes flag to confirm
    console.log('Deploying to Vercel production...');
    execSync('cd out && vercel deploy --prod --yes', { stdio: 'inherit' });
    
    console.log('\nDeployment to Vercel completed!');
    console.log('You may need to set up a custom domain in the Vercel dashboard.');
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployStatic();
