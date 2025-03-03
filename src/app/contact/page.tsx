"use client";
import React from 'react';
import { useContactStore } from '~/stores/contact.store';

export default function ContactPage() {
  const { name, email, message, setContactStore, fAddContact } = useContactStore();
  
  const handleSend = async () => {
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    const contactId = await fAddContact();

    if (contactId) {
      alert('Message sent successfully');
      setContactStore('name', '');
      setContactStore('email', '');
      setContactStore('message', '');
    } else {
      alert('Failed to send message');
    }
  };
  
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-black">
        <h2 className="text-3xl font-semibold">Send Us a Message</h2>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4"
            value={name}
            onChange={(e) => setContactStore('name', e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4"
            value={email}
            onChange={(e) => setContactStore('email', e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4 h-32"
            value={message}
            onChange={(e) => setContactStore('message', e.target.value)}
          ></textarea>
          <button 
            className="w-full bg-blue-500 py-2 rounded text-white hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
