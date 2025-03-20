const { execSync } = require('child_process');

function deploySimple() {
  try {
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('Deploying to Vercel...');
    execSync('vercel out --prod --yes', { stdio: 'inherit' });
    
    console.log('\nDeployment completed!');
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploySimple();
