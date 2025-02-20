// export default function Contact() {
//   return <h1>Contact</h1>;
// }
import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="w-full h-[60vh] flex flex-col items-center justify-center bg-gray-900">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-400 mt-4">Get in touch with us for your next project.</p>
      </div>
      
      {/* Contact Info */}
      
      
      {/* Contact Form */}
      <div className="container mx-auto px-6 pb-16 max-w-lg text-center">
        <h2 className="text-3xl font-semibold">Send Us a Message</h2>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded mb-4 h-32"
          ></textarea>
          <button className="w-full bg-blue-500 py-2 rounded text-white hover:bg-blue-600">Send</button>
        </form>
      </div>
    </div>
  );
}
