import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

const Forms = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    highschool: '',
    courseType: '',
    feedback: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <NavBar/>
    <div className="bg-gray-100 py-24">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply Now</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* gender */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required>
              <option value="">Choose</option>
              <option value="Full-Time">Male</option>
              <option value="Part-Time">Female</option>
            </select>
          </div>

          {/* high-school */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Have you completed highschool</label>
            <select name="highschool" value={formData.highschool} onChange={handleChange} 
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required>
              <option value="">Choose</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Course Type */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Course of Study</label>
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required>
                <option value="">Select a course</option>
                <option value="Web-design">Web-design</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Frontend Programming">Frontend Programming</option>
                <option value="Backend Programming">Backend Programming</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Accounting Packages">Accounting Packages</option>
                <option value="Video editing/Motion graphics">Video editing/Motion graphics</option>
                <option value="Android Programming">Android Programming</option>
                <option value="Computer Packages">Computer Packages</option>
            </select>
          </div>

          {/* feedback */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Where did you hear about Morgan Technical Training?*</label>
            <input
              type="text"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              required/>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Forms;
