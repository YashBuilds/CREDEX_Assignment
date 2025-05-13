import React from 'react';

function ContactForm() {
  return (
    <section className="py-12 max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your message"
          rows="4"
          className="w-full border p-3 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
