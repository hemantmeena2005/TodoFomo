// pages/about.jsx

import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We Create Beautiful and Functional Websites
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At our agency, we specialize in building creative and decorative websites using modern technologies like Next.js, Appwrite, user authentication, CRUD operations, EmailJS, and React-Toastify.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Next.js Development</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We leverage the power of Next.js to build high-performance, SEO-friendly websites.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Appwrite Integration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our expertise in Appwrite allows us to provide powerful backend solutions with ease.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">User Authentication</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We implement secure and reliable user authentication to protect your web applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">CRUD Operations</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our applications are built with full CRUD functionality, allowing you to manage your data efficiently.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.4 3.2a1 1 0 01-1.451-.894V6.526a1 1 0 011.451-.894l6.4 3.2a1 1 0 010 1.788z"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">EmailJS Integration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We integrate EmailJS for seamless email communication directly from your web applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6M9 17h6m-8-6h.01M7 9h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">React-Toastify Integration</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We utilize React-Toastify to provide your users with clear and responsive notifications.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
