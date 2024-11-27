import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const readFilesButton = document.getElementById('read-files');
const filePreview = document.getElementById('file-preview');

readFilesButton.addEventListener('click', async () => {
  try {
    // Read files from the clipboard using Pwafire
    const res = await pwa.readFiles();
    const files = res.ok ? res.files : [];

    if (files.length > 0) {
      filePreview.innerHTML = ''; // Clear previous content

      files.forEach((file) => {
        const url = URL.createObjectURL(file); // Create a temporary URL for the file

        // Display image if it's an image file
        if (file.type.startsWith('image/')) {
          const img = document.createElement('img');
          img.src = url;
          img.alt = 'Clipboard Image';
          filePreview.appendChild(img);
        } else {
          const div = document.createElement('div');
          div.textContent = `File: ${file.name} (type: ${file.type})`;
          filePreview.appendChild(div);
        }
      });
    } else {
      filePreview.textContent = 'No files found on the clipboard.';
    }
  } catch (error) {
    console.error('Error reading files from clipboard:', error);
    filePreview.textContent = 'An error occurred while reading clipboard files.';
  }
});
