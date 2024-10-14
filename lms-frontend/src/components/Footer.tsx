// Footer.tsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Morgan Technical Training</h1>
            <p className="text-gray-400 mt-4">
              Explore one of the best tech bootcamps in Nairobi,Kenya. We train in-demand skills and experiences required at the workplace.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaFacebookF size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-gray-400 mt-4">
              Email: contact@morgantechnical72@gmail.com
              <br />
              Phone: +254 702 106 527
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Morgan Technical Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
