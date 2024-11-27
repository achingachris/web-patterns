import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

let savedDefferedPrompt = null;
const installButton = document.getElementById('install-button');
const status = document.getElementById('status');

// Async function to handle the install process
async function handleInstallSteps() {
  try {
    // 1. Before step: Check if app can be installed
    await pwa.Install('before', (event) => {
      if (event) {
        // Prevent the mini-infobar on mobile
        event.preventDefault();

        // Save the deferred prompt for later use
        savedDefferedPrompt = event;

        // Update UI to notify user about the install option
        installButton.classList.add('show');
        status.textContent = 'App can be installed!';
      }
    });

    // 2. Add event listener for install step
    installButton.addEventListener('click', async () => {
      if (savedDefferedPrompt) {
        // Show the install prompt
        savedDefferedPrompt.prompt();

        // Wait for user response
        const { outcome } = await savedDefferedPrompt.userChoice;

        if (outcome === 'accepted') {
          status.textContent = 'App installed successfully!';
          console.log('User accepted the install prompt.');
        } else {
          status.textContent = 'Install prompt dismissed.';
          console.log('User dismissed the install prompt.');
        }

        // Clear the deferred prompt
        savedDefferedPrompt = null;
      }
    });

    // 3. Installed step: Runs when app is installed
    await pwa.Install('installed', () => {
      installButton.classList.remove('show');
      status.textContent = 'App is already installed!';
      console.log('App is installed.');
    });
  } catch (error) {
    console.error('Error handling install steps:', error);
    status.textContent = 'An error occurred.';
  }
}

// Call the function on page load
handleInstallSteps();
