import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const pipButton = document.getElementById('pipButton');
const video = document.getElementById('video');

// Handle Picture-in-Picture activation
pipButton.addEventListener('click', async () => {
  try {
    await pwa.webPIP(
      (res) => {
        if (res && res.window) {
          // Add the video element to the PIP window
          res.window.document?.body.append(video);
        }
      },
      {
        width: 100, // Set PIP window size
        height: 100,
        disallowReturnToOpener: true, // Hide the "back to tab" button
      }
    );

    console.log('Picture-in-Picture mode activated.');
  } catch (error) {
    console.error('Failed to enter Picture-in-Picture mode:', error);
  }
});

// Handle when PIP window closes
await pwa.webPIP((res) => {
  if (res && res.window) {
    res.window.addEventListener('pagehide', (event) => {
      const playerContainer = document.querySelector('#pipPlayer');
      const pipPlayer = event.target.querySelector('#video');
      playerContainer.append(pipPlayer);
      console.log('Picture-in-Picture window closed.');
    });
  }
});
