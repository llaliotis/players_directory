// ContactPopup.js

import React from 'react';

function ContactPopup({ onClose }) {
  return (
    <div className="contact-popup">
      <div className="contact-content">
        <h2>Contact Details</h2>
        <p>Email: <a href="mailto:llaliotis@gmail.com">llaliotis@gmail.com</a></p>
        <p>Phone: <a href="tel:+306983023379">+30 6983023379</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/eleftherios-laliotis/" target="_blank" rel="noopener noreferrer">Eleftherios Laliotis</a></p>
        <p>Telegram: <a href="https://t.me/LaliotisJR" target="_blank" rel="noopener noreferrer">@LaliotisJR</a></p>
        <p>Twitter: <a href="https://twitter.com/greekdubliner" target="_blank" rel="noopener noreferrer">@greekdubliner</a></p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ContactPopup;
