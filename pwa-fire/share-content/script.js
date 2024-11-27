import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

// Share text and link
const shareTextButton = document.getElementById('share-text');
shareTextButton.addEventListener('click', async () => {
  try {
    const data = {
      title: "Check out PWAFire!",
      text: "PWAFire is an awesome resource for PWA developers.",
      url: "https://pwafire.org",
    };

    await pwa.Share(data);
    console.log('Text and link shared successfully!');
  } catch (error) {
    console.error('Error sharing text and link:', error);
    alert('Failed to share text and link.');
  }
});

// Share files
const shareFilesButton = document.getElementById('share-files');
shareFilesButton.addEventListener('click', async () => {
  try {
    // Open a file picker to select files
    const fileHandle = await window.showOpenFilePicker({
      multiple: true,
      types: [
        {
          description: 'Images',
          accept: {
            'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
          },
        },
      ],
    });

    // Get the file objects from file handles
    const files = await Promise.all(fileHandle.map((handle) => handle.getFile()));

    const data = {
      title: "Check out these files!",
      text: "Here are some files I'm sharing.",
      files: files,
    };

    await pwa.Share(data);
    console.log('Files shared successfully!');
  } catch (error) {
    console.error('Error sharing files:', error);
    alert('Failed to share files.');
  }
});
