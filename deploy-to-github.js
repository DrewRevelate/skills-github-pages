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
    
    // Push to GitHub
    console.log(`Pushing to ${branch} branch on GitHub...`);
    try {
      execSync(`git push -f origin ${branch}`, { stdio: 'inherit' });
    } catch (err) {
      console.error('Push failed, trying to set upstream branch...');
      execSync(`git push -f -u origin ${branch}`, { stdio: 'inherit' });
    }
    
    console.log('\nDeployment to GitHub completed!');
    console.log(`Your presentation is now available at: https://github.com/DrewRevelate/RevOps_Presentation`);
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deployToGitHub();
