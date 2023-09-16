import React from 'react';
import './style/styles.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Kontaktieren Sie uns</h2>
      <p>Wir freuen uns darauf, von Ihnen zu hören. Kontaktieren Sie uns über die folgenden Informationen:</p>
      <ul>
        <li><strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt</li>
        <li><strong>Telefon:</strong> +49 123 456789</li>
        <li><strong>E-Mail:</strong> kontakt@boutiquechantal.com</li>
      </ul>
      <p>Sie können auch das folgende Formular verwenden, um uns eine Nachricht zu senden:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-Mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Nachricht senden</button>
      </form>
    </div>
  );
}

export default Contact;
