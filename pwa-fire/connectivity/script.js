import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

// Online handler
const online = () => {
  const statusDot = document.getElementById('connectivity-status');
  const statusText = document.getElementById('status-text');
  statusDot.classList.remove('offline');
  statusDot.classList.add('online');
  statusText.textContent = 'You are online!';
};

// Offline handler
const offline = () => {
  const statusDot = document.getElementById('connectivity-status');
  const statusText = document.getElementById('status-text');
  statusDot.classList.remove('online');
  statusDot.classList.add('offline');
  statusText.textContent = 'You are offline!';
};

// Monitor connectivity
pwa.Connectivity(online, offline);
