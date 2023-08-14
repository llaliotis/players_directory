// ContactPopup.js

import React from 'react';

function ContactPopup({ onClose }) {
  return (
    <div className="contact-popup">
      <div className="contact-content">
        <h2>Contact Details</h2>
        <p>Email: <a href="mailto:llaliotis@gmail.com">llaliotis@gmail.com</a></p>
        <p>Phone: <a href="tel:+306983023379">+30 6983023379</a></p>
        <p><a href="https://t.me/eska_na" target="_blank" rel="noopener noreferrer">Telegram group</a></p>
        <p><a href="https://twitter.com/greekdubliner" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <button className="close-button" onClick={onClose}>❌ Close</button>
      </div>
    </div>
  );
}

export default ContactPopup;
