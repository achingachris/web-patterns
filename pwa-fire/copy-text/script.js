console.log("This Script Has Loaded, it may work!");

import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const copyButton = document.getElementById('copy-text');

copyButton.addEventListener('click', async () => {
  try {
    const textToCopy = document.getElementById('text-to-copy').value;
    await pwa.copyText(textToCopy);
    alert('Text copied to clipboard using PWAFire!');
  } catch (error) {
    console.error('Failed to copy text:', error);
  }
});