import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">IIM-Target</h2>
            <p className="text-gray-400 mt-1">Your gateway to IIM success!</p>
          </div>
          <nav className="flex flex-col md:flex-row md:space-x-10 mb-4 md:mb-0">
            <a href="/AboutUs" className="hover:text-blue-400 transition-colors text-lg">About Us</a>
            <a href="/services" className="hover:text-blue-400 transition-colors text-lg">Services</a>
            <a href="/Term-and-Condition" className="hover:text-blue-400 transition-colors text-lg">Term&Conditions</a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} IIM-Target. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
