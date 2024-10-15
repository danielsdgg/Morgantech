import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">Morgan Technical Training</h1>
            <p className="text-gray-400 mb-4">
              One of the best tech bootcamps in Nairobi, Kenya. We train in-demand skills and provide experiences needed in the workplace.
            </p>
            <h2 className="text-lg font-semibold mt-4">Contact Us</h2>
            <p className="text-gray-400">
              Email: <a href="mailto:contact@morgantechnical72@gmail.com" className="hover:text-gray-300 transition duration-300">contact@morgantechnical72@gmail.com</a>
              <br />
              Phone: <span className="hover:text-gray-300 transition duration-300">+254 702 106 527</span>
              <br />
              Location: <span className="hover:text-gray-300 transition duration-300">Kikuyu town, May House: 1st Floor, Room 1c</span>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  <FaFacebookF size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  <FaTwitter size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  <FaInstagram size={28} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
            </ul>
          </div>

          {/* Google Maps Embed */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Our Location</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15955.514256116314!2d36.66335915!3d-1.24359!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2ske!4v1728991489342!5m2!1sen!2ske"
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
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
