import React, { useState } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';

const Backend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <NavBar/>
        <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?fm=jpg&q=60&w=3000')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Backend Programming BootCamp</h1>
          <p className="text-white text-lg mb-8">Become an expert in server-side technologies to build robust applications.</p>
          <button onClick={openModal} className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg">
            Apply Now
          </button>
        </div>
      </section>

      {/* ongoing intake */}
      <div className='w-full bg-blue-900 text-orange-400 py-16 px-4 text-center md:text-3xl sm:text-2xl text-1xl'>
        <p>Applications ongoing for the <b>November 6th 2024</b> intake</p>
      </div>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Server-side Programming</h3>
              <p>Master server-side technologies like Python, Flask, and Node.js to build scalable applications.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Database Management</h3>
              <p>Gain hands-on experience with relational (SQL) and non-relational (NoSQL) databases like PostgreSQL and MongoDB.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">API Development</h3>
              <p>Learn to build and consume RESTful APIs and GraphQL for seamless data exchange between client and server.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course necessities */}
      <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='text-4xl font-semibold mb-8'>Course Necessities:</h2>
                <ul className="list-disc list-inside text-left space-y-2 text-1xl">
                    <li>Applicants must have a stable internet connection with at least 10 Mbps download speed for online classes and assignments.</li>
                    <li>Basic understanding of server-client architecture and HTTP protocols is required.</li>
                    <li>Students must commit to at least 20 hours per week of study time for projects and self-study outside of class hours.</li>
                    <li>Proficiency in written and spoken English is essential as all instructions and course materials will be in English.</li>
                    <li>Access to development tools such as Postman, Docker, and Git is required.</li>
                    <li>Willingness to collaborate on team projects and participate in peer code reviews.</li>
                    <li>Students are expected to follow a professional code of conduct throughout the course.</li>
                    <li>Regular attendance in live online or in-person classes is mandatory.</li>
                </ul>
            </div>
            <img className='w-[700px] mx-auto rounded-3xl my-4' src='https://images.inc.com/uploaded_files/image/1024x576/IN0316LPO03-web_80434.jpg' alt='backend'/>
        </div>
    </div>

      {/* Course Content with Video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Backend Fundamentals: Python, Node.js,Php</li>
              <li>Flask,Django & Express.js Frameworks</li>
              <li>Database Management (SQL & NoSQL)</li>
              <li>API Development (REST & GraphQL)</li>
              <li>Version Control with Git & GitHub</li>
              <li>Testing & Debugging</li>
            </ul>
            <div className="relative w-full h-0 pb-56">
              <video className="absolute top-0 left-0 w-full h-full border-4 border-gray-300" controls src="https://res.cloudinary.com/ddei3mzex/video/upload/v1729073232/How_To_Become_A_Back-End_Web_Developer_sq9r2i.mp4">
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Course Duration */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="container mx-auto px-6 lg:px-12 text-center space-y-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Course Duration</h2>
            <p className="text-lg md:text-xl text-gray-700">
              Our Backend Programming Bootcamp spans 15 weeks of immersive, hands-on learning designed to build your backend expertise.
            </p>
          </div>
          {/* Payment Plans */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Payment Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Full Payment</h3>
                <p className="text-gray-600 mb-4">Pay upfront and enjoy a 10% discount.</p>
                <p className="text-3xl font-bold text-gray-800">KSH 70,000</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Installment Plan</h3>
                <p className="text-gray-600 mb-4">Pay in 3 easy installments over the course duration.</p>
                <p className="text-3xl font-bold text-gray-800">KSH 75,000</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scholarships</h3>
                <p className="text-gray-600 mb-4">Apply for available scholarships based on financial need and merit.</p>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Join?</h2>
            <button onClick={openModal} className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl">
              Apply Now
            </button>
          </div>
        </div>
      </section>

    </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl text-center font-semibold mb-4">Application Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" required placeholder="Enter your full name" className="w-full border border-gray-300 rounded-lg p-2"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input type="email" required placeholder="Enter your email address" className="w-full border border-gray-300 rounded-lg p-2"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" required placeholder="Enter your phone number" className="w-full border border-gray-300 rounded-lg p-2"/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Gender</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Have you completed highschool?</label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="">Select</option>
                  <option value="frontend">Yes</option>
                  <option value="backend">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Course Of Study</label>
                <select className="w-full border border-gray-300 rounded-lg p-2 bg-gray-400 cursor-not-allowed" defaultValue="Backend Programming" disabled>
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
              <div className="mb-4">
                <label className="block text-gray-700">How did you hear about Morgan Technical Training?*</label>
                <textarea required placeholder="...." className="w-full border border-gray-300 rounded-lg p-2" rows={3}></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Submit Application
              </button>
            </form>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}


    <Footer/>
    </>
  );
};

export default Backend;
