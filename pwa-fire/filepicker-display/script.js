import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const pickFileButton = document.getElementById('pick-file');
const fileContent = document.getElementById('file-content');

pickFileButton.addEventListener('click', async () => {
  try {
    // Define options to filter for text files
    const res = await pwa.pickFile({
      types: [
        {
          description: 'Text files',
          accept: {
              'text/plain': ['.txt', '.csv', '.pdf'],
          },
        }
      ],
    });

    if (res.ok) {
      const file = res.file;

      // Read the file content
      const text = await file.text();

      // Display the file content
      fileContent.textContent = text;
    } else {
      console.error('No file selected or error occurred:', res.message);
      fileContent.textContent = 'No file selected.';
    }
  } catch (error) {
    console.error('Error reading file:', error);
    fileContent.textContent = 'An error occurred while reading the file.';
  }
});
