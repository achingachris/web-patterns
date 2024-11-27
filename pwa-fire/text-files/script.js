import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const pickTextFileButton = document.getElementById('pick-text-file');
const fileContent = document.getElementById('file-content');

pickTextFileButton.addEventListener('click', async () => {
  try {
    // Use Pwafire's pickTextFile method to pick and read a text file
    const contents = await pwa.pickTextFile();

    if (contents) {
      // Display the file content
      fileContent.textContent = contents;
    } else {
      console.error('No file selected or an error occurred.');
      fileContent.textContent = 'No file selected.';
    }
  } catch (error) {
    console.error('Error reading text file:', error);
    fileContent.textContent = 'An error occurred while reading the file.';
  }
});
