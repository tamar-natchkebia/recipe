// src/pages/Contact.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg- min-h-screen py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-quicksand font-bold text-[#BFA38C]">
          Get in Touch
        </h1>
        <div className="w-20 h-1 bg-[#BFA38C] mx-auto my-4 rounded"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, ideas, or just want to say hello? We’d love to hear
          from you. Drop us a message below or connect with us on social media.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E6DED5]">
          <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#BFA38C] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#BFA38C] outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#BFA38C] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#BFA38C] text-white py-3 rounded-xl hover:bg-[#a88b75] transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info & Social */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#E6DED5] flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-[#BFA38C] mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-2">
              📍 123 Foodie Street, Flavor Town
            </p>
            <p className="text-gray-700 mb-2">📧 hello@foodieblog.com</p>
            <p className="text-gray-700 mb-6">📞 +1 (234) 567-890</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-[#BFA38C] mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#BFA38C] hover:text-pink-500 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#BFA38C] hover:text-blue-500 transition"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#BFA38C] hover:text-blue-700 transition"
              >
                <FaFacebookF size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
