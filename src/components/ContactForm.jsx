import React from 'react';

function ContactForm() {
  return (
    <section>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows="4" placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
