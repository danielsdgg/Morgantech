import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState<string | null>(null); // State for notification

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.send('service_7x3k6fq', 'template_fsx0o17', formData, 'hC6uNYFa9xlw96bvG')
      .then(() => {
        setNotification('Your message was received successfully!'); // Show success notification
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Hide the notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      })
      .catch((error) => {
        setNotification('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);

        // Hide the notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-gray-100 py-28 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="w-[800px] h-[500px] rounded-3xl shadow-lg"
              src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ccb429b9-kids-that-code.jpg"
              alt="imagery"/>
          </div>

          {/* Form Section */}
          <div className="flex justify-center items-center">
            <form onSubmit={sendEmail} className="w-full bg-white p-8 rounded-lg shadow-lg">
              <div className="pb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  To contact us, please fill out the form below or send an email to{' '}
                  <a href="mailto:morgantechnical72@gmail.com" className="text-blue-500">
                    morgantechnical72@gmail.com
                  </a>
                  .
                </p>
              </div>

              {/* Notification Section */}
              {notification && (
                <div className="mb-4 p-4 text-center bg-green-100 text-green-800 rounded-lg">
                  {notification}
                </div>
              )}

              <div className="mb-6">
                <label className="block text-gray-700">Name</label>
                <input
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Email</label>
                <input
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  type="email"
                  placeholder="...@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
