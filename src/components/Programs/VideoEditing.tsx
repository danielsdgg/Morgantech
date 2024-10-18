import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';

const VideoEditing: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[500px] relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513377888088-ef53d7d3bbc8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHx8fHw%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-white text-5xl font-bold mb-4">Video Editing & Motion Graphics Course</h1>
            <p className="text-white text-lg mb-8">
              Become a master in video editing and motion graphics to create professional-level visual content.
            </p>
            <NavLink
              to="/form"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
            >
              Apply Now
            </NavLink>
          </div>
        </section>

        {/* ongoing intake */}
        <div className="w-full bg-blue-900 text-orange-400 py-16 px-4 text-center md:text-3xl sm:text-2xl text-1xl">
          <p>Applications ongoing for the <b>November 6th 2024</b> intake</p>
        </div>

        {/* What to Expect */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Advanced Video Editing</h3>
                <p>
                  Learn to master video editing techniques using industry-standard tools such as Adobe Premiere Pro,
                  Final Cut Pro, and DaVinci Resolve.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Motion Graphics & Visual Effects</h3>
                <p>
                  Create stunning motion graphics and visual effects using After Effects and Cinema 4D to elevate your
                  content.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Hands-On Projects</h3>
                <p>Work on real-world video editing projects to apply your skills and build a professional portfolio.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Course necessities */}
        <div className="w-full bg-gray-300 py-16 px-16">
          <div className="max-w-[100%] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center text-black">
              <h2 className="text-4xl font-semibold mb-8">Course Necessities:</h2>
              <ul className="list-disc list-inside text-left space-y-2 text-1xl">
                <li>Stable internet connection with at least 10 Mbps download speed for online classes and assignments.</li>
                <li>
                  A personal computer with a minimum of 8GB RAM, suitable for video editing software.
                </li>
                <li>Commitment to at least 20 hours per week for hands-on projects and assignments.</li>
                <li>Proficiency in written and spoken English, as the course will be taught in English.</li>
                <li>Access to Adobe Premiere Pro, After Effects, and other related software tools.</li>
                <li>
                  Willingness to collaborate with peers for team-based assignments.
                </li>
                <li>Consistent attendance in all live sessions and adherence to deadlines for project submissions.</li>
              </ul>
            </div>
            <img className="w-[700px] mx-auto rounded-3xl my-4"
            src="https://images.unsplash.com/photo-1636971819476-aa41dc3db0d0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww"
            alt="motion-graphics"/>
          </div>
        </div>

        {/* Course Content with Video */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Video Editing Essentials (Adobe Premiere Pro, Final Cut Pro)</li>
                <li>Motion Graphics (Adobe After Effects)</li>
                <li>Visual Effects Integration</li>
                <li>Color Grading and Sound Design</li>
                <li>Rendering and Exporting Techniques</li>
                <li>Portfolio Building & Showreel Creation</li>
                <li>Advanced Compositing</li>
                <li>3D Motion Graphics (Cinema 4D)</li>
              </ul>
              <div className="relative w-full h-0 pb-56">
                <video
                  className="absolute top-0 left-0 w-full h-full border-4 border-gray-300"
                  controls
                  src="https://res.cloudinary.com/ddei3mzex/video/upload/v1729067344/Video_Editing_Motion_Graphics_Roadmap_vjgnir.mp4"
                ></video>
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
                Our Video Editing & Motion Graphics Bootcamp spans 12 weeks, offering hands-on training with industry-standard software.
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
                  <p className="text-gray-600 mb-4">Pay in 3 easy installments during the course period.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 75,000</p>
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
      <Footer />
    </>
  );
};

export default VideoEditing;
