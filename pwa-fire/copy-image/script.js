import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const copyImageButton = document.getElementById('copy-image');

copyImageButton.addEventListener('click', async () => {
  try {
    const imgURL = document.getElementById('image-to-copy').src;
    await pwa.copyImage(imgURL);
    alert('Image copied to clipboard using PWAFire!');
  } catch (error) {
    console.error('Failed to copy the image:', error);
  }
});
