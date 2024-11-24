import { fileSave } from 'https://unpkg.com/browser-fs-access@0.31.0/dist/index.modern.js';
import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const button = document.querySelector('button');

const decompressBtn = document.getElementById('decompress-btn');

button.addEventListener('click', async () => {
  const readableStream = await fetch('lorem.txt').then(
    (response) => response.body
  );
  const compressedReadableStream = await pwa.compressStream(readableStream);
  if (compressedReadableStream.ok) {
    await fileSave(new Response(compressedReadableStream.stream), {
      fileName: 'pwafire-lorem.gz',
      extensions: ['.gz'],
    });
  } else {
    console.log(compressedReadableStream.message);
  }
});

decompressBtn.addEventListener('click', async () => {
  const readableStream = await fetch(
    'https://cdn.glitch.global/4eb7f192-d9f6-47e0-9ae9-81ab179678df/pwafire-lorem.gz?v=1732288394380'
  ).then((response) => response.body);
  const decompressedReadableStream = await pwa.decompressStream(readableStream);
  if (decompressedReadableStream.ok) {
    await fileSave(new Response(decompressedReadableStream.stream), {
      fileName: 'decompress-pwafire-lorem',
      extensions: ['.txt'],
    });
  } else {
    console.log(decompressedReadableStream.message);
  }
});
