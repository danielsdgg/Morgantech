import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';

const Frontend = () => {
  return (
    <>
    <NavBar/>
        <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyb250JTIwZW5kfGVufDB8fDB8fHww')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Frontend Programming BootCamp</h1>
          <p className="text-white text-lg mb-8">Master frontend development skills to build stunning web applications</p>
          <NavLink to="/form" className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg">
            Apply Now
          </NavLink>
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
              <h3 className="text-xl font-semibold mb-4">Core Web Technologies</h3>
              <p>Learn HTML, CSS, JavaScript, and modern frameworks to build responsive, interactive websites.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Real-World Projects</h3>
              <p>Work on hands-on projects that simulate real-world frontend development scenarios.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p>Receive guidance from experienced instructors who are active professionals in the industry.</p>
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
                    <li>Basic understanding of computer operations and file management is required.</li>
                    <li>Students must commit to at least 20 hours per week of study time for projects and self-study outside of class hours.</li>
                    <li>Proficiency in written and spoken English is essential as all instructions and course materials will be in English.</li>
                    <li>Applicants must have access to necessary development tools such as code editors (e.g., VS Code) and web browsers (e.g., Google Chrome).</li>
                    <li>Must be willing to work on team projects and collaborate with fellow students for group assignments.</li>
                    <li>Students are expected to maintain a professional demeanor and follow the institution's code of conduct throughout the course.</li>
                    <li>Regular attendance in live online or in-person classes is mandatory unless prior leave has been approved by the instructor.</li>
                </ul>
            </div>
            <img className='w-[700px]  mx-auto rounded-3xl my-4' src='https://www.17goalsmagazin.de/content/images/2021/02/95-2.jpg' alt='mind'/>
        </div>
    </div>

      {/* Course Content with Video */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ul className="list-disc list-inside text-left space-y-2">
              <li>HTML5, CSS3 and Tailwindcss</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js Fundamentals</li>
              <li>State Management & Hooks</li>
              <li>Responsive Design</li>
              <li>Git & Version Control</li>
              <li>API Integration</li>
              <li>Portfolio Building</li>
            </ul>
            <div className="relative w-full h-0 pb-56">
              <video className="absolute top-0 left-0 w-full h-full border-4 border-gray-300" controls
                src="https://res.cloudinary.com/ddei3mzex/video/upload/v1729067344/Front-End_Developer_Roadmap_-_From_Novice_to_Front-End_Expert_vjgnir.mp4">
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
  <div className="container mx-auto px-6 lg:px-12 text-center space-y-16">

    {/* Course Duration */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Course Duration</h2>
      <p className="text-lg md:text-xl text-gray-700">
        Our Frontend Programming Bootcamp spans 12 weeks of intensive, hands-on training, preparing you to thrive in the tech industry.
      </p>
    </div>

    {/* Payment Plans */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Payment Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Full Payment</h3>
          <p className="text-gray-600 mb-4">Pay upfront and enjoy a 10% discount.</p>
          <p className="text-3xl font-bold text-gray-800">KSH 60,000</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Installment Plan</h3>
          <p className="text-gray-600 mb-4">Pay in 3 easy installments during the course period.</p>
          <p className="text-3xl font-bold text-gray-800">KSH 65,000</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scholarships</h3>
          <p className="text-gray-600 mb-4">Need assistance? Apply for scholarships available to students in need.</p>
        </div>
      </div>
    </div>

    {/* Apply Button */}
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Ready to Join?</h2>
      <NavLink 
        to="/form" 
        className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
      >
        Apply Now
      </NavLink>
    </div>
  </div>
</section>

    </div>
    <Footer/>
    </>
  );
};

export default Frontend;
