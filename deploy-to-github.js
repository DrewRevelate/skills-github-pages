const { execSync } = require('child_process');
const path = require('path');

function deployToGitHub() {
  try {
    const repoUrl = 'https://github.com/DrewRevelate/RevOps_Presentation.git';
    const branch = 'main';
    
    console.log('Preparing deployment to GitHub...');
    
    // Check if git is already initialized
    try {
      execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
      console.log('Git repository already initialized');
    } catch (err) {
      console.log('Initializing git repository...');
      execSync('git init', { stdio: 'inherit' });
    }
    
    // Configure the remote
    try {
      const remotes = execSync('git remote').toString().trim().split('\n');
      if (remotes.includes('origin')) {
        console.log('Updating origin remote...');
        execSync(`git remote set-url origin ${repoUrl}`, { stdio: 'inherit' });
      } else {
        console.log('Adding origin remote...');
        execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit' });
      }
    } catch (err) {
      console.log('Adding origin remote...');
      execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit' });
    }
    
    // Fetch the latest changes
    console.log('Fetching latest changes...');
    try {
      execSync('git fetch origin', { stdio: 'inherit' });
    } catch (err) {
      console.warn('Could not fetch from remote. Continuing anyway...');
    }
    
    // Add all files
    console.log('Adding files to git...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit the changes
    console.log('Committing changes...');
    try {
      execSync('git commit -m "Updated F1-themed RevOps presentation with fixes"', { stdio: 'inherit' });
    } catch (err) {
      console.log('No changes to commit or commit failed. Continuing...');
    }
    
    // Build the Next.js app
    console.log('Building Next.js app for static export...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Create a .nojekyll file to prevent GitHub Pages from ignoring files that start with underscores
    console.log('Creating .nojekyll file...');
    const fs = require('fs');
    fs.writeFileSync('./out/.nojekyll', '');
    
    // Create CNAME file if needed for custom domain
    console.log('Creating CNAME file...');
    fs.writeFileSync('./out/CNAME', 'fullthrottle.revelateops.com');
    
    // Deploy the out directory to gh-pages branch
    console.log('Deploying to GitHub Pages...');
    const ghpages = require('gh-pages');
    ghpages.publish('out', {
      branch: 'gh-pages',
      message: 'Auto-deployed from deploy-to-github.js',
      dotfiles: true,  // Include .nojekyll file
    }, function(err) {
      if (err) {
        console.error('GitHub Pages deployment error:', err);
      } else {
        console.log('\nDeployment to GitHub Pages completed!');
        console.log(`Your presentation should now be available at: https://drewrevelate.github.io/RevOps_Presentation or https://fullthrottle.revelateops.com`);
      }
    });
    
    // Push source code to main branch as well
    console.log(`Pushing source code to ${branch} branch on GitHub...`);
    try {
      execSync(`git push -f origin ${branch}`, { stdio: 'inherit' });
    } catch (err) {
      console.error('Push failed, trying to set upstream branch...');
      execSync(`git push -f -u origin ${branch}`, { stdio: 'inherit' });
    }
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployToGitHub();
