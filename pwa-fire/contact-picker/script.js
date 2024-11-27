import { pwa } from 'https://unpkg.com/pwafire@5.1.3/esm/index.js';

const pickContactsButton = document.getElementById('pick-contacts');
const contactsList = document.getElementById('contacts-list');

pickContactsButton.addEventListener('click', async () => {
  const props = ["name", "email", "tel"]; // Properties to access
  const options = { multiple: true }; // Allow picking multiple contacts

  try {
    const res = await pwa.Contacts(props, options);

    if (res.ok) {
      const contacts = res.contacts;

      // Clear the previous list
      contactsList.innerHTML = "<h2>Selected Contacts</h2>";

      // Display selected contacts
      contacts.forEach(contact => {
        const contactElement = document.createElement('div');
        contactElement.classList.add('contact');
        contactElement.innerHTML = `
          <p><strong>Name:</strong> ${contact.name || "N/A"}</p>
          <p><strong>Email:</strong> ${contact.email || "N/A"}</p>
          <p><strong>Phone:</strong> ${contact.tel || "N/A"}</p>
        `;
        contactsList.appendChild(contactElement);
      });
    } else {
      console.error('Failed to access contacts:', res.message);
      alert('Failed to access contacts.');
    }
  } catch (error) {
    console.error('Error picking contacts:', error);
    alert('An error occurred while accessing contacts.');
  }
});
