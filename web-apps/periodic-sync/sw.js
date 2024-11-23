self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'sync-content') {
      event.waitUntil(syncData());
    }
  });
  
  async function syncData() {
    console.log('Fetching and syncing new content...');
    // Add your fetch and caching logic here
  }
  