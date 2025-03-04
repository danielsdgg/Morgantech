import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="mb-6 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-indigo-400 mb-3">Morgan Technical Training</h1>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              A leading tech bootcamp in Nairobi, Kenya, dedicated to training in-demand skills and preparing students for success in the workplace.
            </p>
            <h2 className="text-lg font-semibold text-indigo-600 mt-4">Contact Us</h2>
            <div className="text-gray-300 space-y-2">
              <p>
                Email:{' '}
                <a
                  href="mailto:contact@morgantechnical72@gmail.com"
                  className="hover:text-indigo-400 transition-all duration-300 underline"
                >
                  contact@morgantechnical72@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+254702106527"
                  className="hover:text-indigo-400 transition-all duration-300 underline"
                >
                  +254 702 106 527
                </a>
              </p>
              <p>
                Location:{' '}
                <span className="hover:text-indigo-400 transition-all duration-300 cursor-pointer">
                  Kikuyu town, May House: 1st Floor, Room 1c
                </span>
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center animate-fade-in-up delay-100">
            <h2 className="text-lg font-semibold text-indigo-600 mb-4">Follow Us</h2>
            <ul className="flex space-x-6">
              {[
                { icon: FaFacebookF, href: 'https://www.facebook.com' },
                { icon: FaTwitter, href: 'https://www.twitter.com' },
                { icon: FaInstagram, href: 'https://www.instagram.com' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com' },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 hover:scale-110 transition-all duration-300 transform"
                  >
                    <social.icon size={28} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="flex flex-col items-center animate-fade-in-up delay-200">
            <h2 className="text-lg font-semibold text-indigo-600 mb-4">Our Location</h2>
            <div className="w-full rounded-lg shadow-lg border border-gray-700 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.838551624463!2d36.65927901078921!3d-1.2463781358192494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f5d9e7b1a9b%3A0x6e8f5f5e9e7b1a9b!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2ske!4v1728991489342!5m2!1sen!2ske"
                title="Morgan Technical Training Location"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out;
          }
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;