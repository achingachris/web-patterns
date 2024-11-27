import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const readTextButton = document.getElementById('read-text');
const clipboardText = document.getElementById('clipboard-text');

readTextButton.addEventListener('click', async () => {
  try {
    // Read text from the clipboard using Pwafire
    const res = await pwa.readText();
    const text = res.ok ? res.text : '';

    if (text) {
      clipboardText.textContent = text; // Display the clipboard text
    } else {
      clipboardText.textContent = 'No text found on the clipboard.';
      console.warn('No text available in the clipboard or access denied.');
    }
  } catch (error) {
    console.error('Error reading text from clipboard:', error);
    clipboardText.textContent = 'An error occurred while reading clipboard text.';
  }
});
