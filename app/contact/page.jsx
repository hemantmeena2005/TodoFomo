"use client"
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lx7r0zr', 'template_azq8dpn', form.current, {
        publicKey: 'XXnRefbKeUbVj5Y7P',
      })
      .then(
        () => {
          toast.success('Thank you for your message!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            toastId: 'contact-success', // Unique ID for potential dismissal
          });
          // Redirect to home page after success notification
          setTimeout(() => window.location.href = "/", 3000); // Redirect after 3 seconds
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('An error occurred. Please try again later.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            toastId: 'contact-error', // Unique ID for potential dismissal
          });
        },
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="user_name"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="user_email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-gray-700 font-medium">Message</label>
        <textarea
          name="message"
          className="border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="submit"
          value="Send"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
        />
      </form>
      <ToastContainer /> {/* Add ToastContainer to render notifications */}
    </div>
  );
};

export default ContactUs;
