import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const fullscreenButton = document.getElementById('fullscreen-button');

// Add event listener to trigger fullscreen
fullscreenButton.addEventListener('click', () => {
  try {
    pwa.Fullscreen();
    console.log('Fullscreen mode activated.');
  } catch (error) {
    console.error('Error activating fullscreen mode:', error);
  }
});
