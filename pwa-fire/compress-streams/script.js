import { fileSave } from 'https://unpkg.com/browser-fs-access@0.31.0/dist/index.modern.js';
import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const button = document.querySelector('button');
const decompressBtn = document.getElementById('decompress-btn');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('lorem.txt');
    const readableStream = response.body;

    // Compress the stream
    const compressedReadableStream = await pwa.compressStream(readableStream);

    if (compressedReadableStream.ok) {
      // Read the compressed stream into a Blob
      const blob = await new Response(compressedReadableStream.stream).blob();

      // Save the file
      await fileSave(blob, {
        fileName: 'pwafire-lorem.gz',
        extensions: ['.gz'],
      });
    } else {
      console.error('Compression failed:', compressedReadableStream.message);
    }
  } catch (error) {
    console.error('Error during compression:', error);
  }
});

decompressBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(
      'https://cdn.glitch.global/4eb7f192-d9f6-47e0-9ae9-81ab179678df/pwafire-lorem.gz?v=1732288394380'
    );
    const readableStream = response.body;

    // Decompress the stream
    const decompressedReadableStream = await pwa.decompressStream(readableStream);

    if (decompressedReadableStream.ok) {
      // Read the decompressed stream into a Blob
      const blob = await new Response(decompressedReadableStream.stream).blob();

      // Save the file
      await fileSave(blob, {
        fileName: 'decompress-pwafire-lorem.txt',
        extensions: ['.txt'],
      });
    } else {
      console.error('Decompression failed:', decompressedReadableStream.message);
    }
  } catch (error) {
    console.error('Error during decompression:', error);
  }
});
