# Web Patterns Directory

This project is a collection of web patterns with demos and examples. It showcases various functionalities using modern web APIs and techniques. The project is organized into different sections, each demonstrating a specific pattern or feature.

## Project Structure

```txt
clipboard/
    copy-image.html
    copy-text.html
    paste-files.html
    paste-image.html
    paste-text.html
files/
    handle-files.html
    open-directory.html
    open-files.html
    save-file.html
    share-files.html
index.html
web-apps/
    app-badge.html
    app-shortcuts/
        app-shortcuts.html
        manifest.json
    periodic-sync/
        periodic-sync.html
        sw.js
    richer-install-ui.html
    share-current-page.html
```


## HTML Files Overview

### Clipboard Patterns

- **copy-image.html**: Demonstrates how to copy an image to the clipboard using the Clipboard API.
  - **Sample**:
    ```html
    <img id="image-to-copy" src="https://via.placeholder.com/150" alt="Sample Image">
    <button id="copy-image">Copy Image</button>
    ```

- **copy-text.html**: Demonstrates how to copy text to the clipboard using the Clipboard API.
  - **Sample**:
    ```html
    <textarea id="text-to-copy" rows="3" cols="50">Sample text to copy.</textarea>
    <button id="copy-text">Copy Text</button>
    ```

- **paste-files.html**: Demonstrates how to paste files from the clipboard using the Clipboard API.
  - **Sample**:
    ```html
    <button id="paste-files">Paste Files</button>
    <div id="pasted-files-container"></div>
    ```

- **paste-image.html**: Demonstrates how to paste an image from the clipboard using the Clipboard API.
  - **Sample**:
    ```html
    <button id="paste-image">Paste Image</button>
    <div id="pasted-image-container"></div>
    ```

- **paste-text.html**: Demonstrates how to paste text from the clipboard using the Clipboard API.
  - **Sample**:
    ```html
    <button id="paste-text">Paste Text</button>
    <textarea id="pasted-text" rows="3" cols="50" placeholder="Pasted text will appear here."></textarea>
    ```

### File Patterns

- **handle-files.html**: Demonstrates how to handle file drag-and-drop events.
  - **Sample**:
    ```html
    <div id="drop-zone" style="border: 2px dashed #ccc; padding: 20px;">Drag files here</div>
    ```

- **open-directory.html**: Demonstrates how to open a directory using the File System Access API.
  - **Sample**:
    ```html
    <button id="open-dir">Open Directory</button>
    <input type="file" id="fallback" webkitdirectory hidden />
    ```

- **open-files.html**: Demonstrates how to open files using the File System Access API.
  - **Sample**:
    ```html
    <button id="open-files">Open Files</button>
    <input type="file" id="fallback" multiple hidden />
    ```

- **save-file.html**: Demonstrates how to save a file using the File System Access API.
  - **Sample**:
    ```html
    <button id="save-file">Save File</button>
    ```

- **share-files.html**: Demonstrates how to share files using the Web Share API.
  - **Sample**:
    ```html
    <button id="share-file">Share File</button>
    ```

### Web App Patterns

- **app-badge.html**: Demonstrates how to use the Badging API to set and clear app badges.
  - **Sample**:
    ```html
    <button id="setBadge">Set Badge</button>
    <button id="clearBadge">Clear Badge</button>
    ```

- **app-shortcuts/app-shortcuts.html**: Demonstrates how to use app shortcuts defined in the [`web-apps/app-shortcuts/manifest.json`](web-apps/app-shortcuts/manifest.json ).
  - **Sample**:
    ```html
    <link rel="manifest" href="manifest.json">
    ```

- **periodic-sync/periodic-sync.html**: Demonstrates how to use the Periodic Sync API to periodically sync data.
  - **Sample**:
    ```html
    <script>
      if ('serviceWorker' in navigator && 'periodicSync' in ServiceWorkerRegistration.prototype) {
        navigator.serviceWorker.register('sw.js').then(async (registration) => {
          // Register periodic sync
        });
      }
    </script>
    ```

- **richer-install-ui.html**: Demonstrates how to provide a richer install UI for Progressive Web Apps (PWAs).
  - **Sample**:
    ```html
    <button id="installButton" style="display: none;">Install App</button>
    ```

- **share-current-page.html**: Demonstrates how to share the current page using the Web Share API.
  - **Sample**:
    ```html
    <button id="shareButton">Share This Page</button>
    ```

## Getting Started

To explore the web patterns, open [`index.html`](index.html ) in your browser. The main page provides links to all the demos and examples categorized into sections.

## Author

Built with ❤️ by Chris for DevFest Rift 2024.

## License

This project is licensed under the MIT License.