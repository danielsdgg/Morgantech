import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';

const Android: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[500px] relative"
          style={{
            backgroundImage:
              "url('https://papers.co/wallpaper/papers.co-ah57-coding-for-life-artist-digital-8-wallpaper.jpg?download=true')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-white text-5xl font-bold mb-4">Android Programming BootCamp</h1>
            <p className="text-white text-lg mb-8">
              Become proficient in Android development and build your own applications from scratch.
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
                <h3 className="text-xl font-semibold mb-4">Android Studio Setup</h3>
                <p>
                  Learn to install and configure Android Studio for optimal development.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Java/Kotlin Fundamentals</h3>
                <p>
                  Gain a solid understanding of Java and Kotlin programming languages.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">UI/UX Design Principles</h3>
                <p>
                  Learn to design user-friendly interfaces and enhance user experience.
                </p>
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
                <li>Access to a computer or laptop with at least 8GB RAM.</li>
                <li>Installation of Android Studio and Java Development Kit (JDK).</li>
                <li>A basic understanding of programming concepts.</li>
                <li>Willingness to learn and practice coding regularly.</li>
                <li>Access to an Android device for testing applications.</li>
              </ul>
            </div>
            <img
              className="w-[700px] mx-auto rounded-3xl my-4"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Android_Developer.jpg"
              alt="android-development"
            />
          </div>
        </div>

        {/* Course Content with Video */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Introduction to Android Development</li>
                <li>Setting Up Android Studio</li>
                <li>Understanding Android Architecture</li>
                <li>Working with Activities and Intents</li>
                <li>Designing Layouts and UI Components</li>
                <li>Networking and APIs</li>
                <li>Data Persistence (SQLite and SharedPreferences)</li>
                <li>Publishing Apps on Google Play Store</li>
              </ul>
              <div className="relative w-full h-0 pb-56">
                <video
                  className="absolute top-0 left-0 w-full h-full border-4 border-gray-300"
                  controls
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
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
                The Android Programming Bootcamp runs for 8 weeks, focusing on real-world applications.
              </p>
            </div>

            {/* Payment Plans */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Payment Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Full Payment</h3>
                  <p className="text-gray-600 mb-4">Pay upfront and enjoy a 10% discount.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 35,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Installment Plan</h3>
                  <p className="text-gray-600 mb-4">Pay in 3 easy installments during the course period.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 38,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scholarships</h3>
                  <p className="text-gray-600 mb-4">Apply for scholarships available to students with financial needs.</p>
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

export default Android;
