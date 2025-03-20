const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
const outDir = path.join(__dirname, 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

try {
  // Build and export the static site
  console.log('Building and exporting the presentation...');
  execSync('npm run export', { stdio: 'inherit' });
  
  // Create .nojekyll file
  console.log('Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
  
  // Initialize git repo in the out directory if it doesn't exist
  if (!fs.existsSync(path.join(outDir, '.git'))) {
    console.log('Initializing git repository in the out directory...');
    execSync('cd out && git init && git checkout -b gh-pages', { stdio: 'inherit' });
  }
  
  // Add all files, commit and push to gh-pages branch
  console.log('Committing and pushing to gh-pages branch...');
  execSync(`
    cd out && 
    git add . && 
    git commit -m "Deploy: $(date)" && 
    git push -f origin gh-pages
  `, { stdio: 'inherit' });
  
  console.log('\nDeployment completed successfully!');
  console.log('\nYour presentation should now be available at:');
  console.log('https://[your-username].github.io/full-throttle-presentation/');
  console.log('\nNote: Replace [your-username] with your GitHub username');
  
} catch (error) {
  console.error('Deployment failed:', error);
}
