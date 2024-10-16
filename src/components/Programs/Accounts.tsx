import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../Navbar';
import Footer from '../Footer';

const Accounts: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section
          className="bg-cover bg-center h-[500px] relative"
          style={{
            backgroundImage:
              "url('https://www.freshbooks.com/wp-content/uploads/2022/02/financial-accounting-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10">
            <h1 className="text-white text-5xl font-bold mb-4">Accounting Course</h1>
            <p className="text-white text-lg mb-8">
              Master the essentials of accounting with QuickBooks and Sage 50
            </p>
            <NavLink
              to="/form"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg"
            >
              Apply Now
            </NavLink>
          </div>
        </section>

        {/* Ongoing Intake */}
        <div className="w-full bg-blue-900 text-orange-400 py-16 px-4 text-center md:text-3xl sm:text-2xl text-1xl">
          <p>
            Applications ongoing for the <b>November 6th 2024</b> intake
          </p>
        </div>

        {/* What to Expect */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">QuickBooks Enterprise</h3>
                <p>
                  Master QuickBooks for managing financial transactions, generating reports, and handling payroll efficiently.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Sage 50 Accounting</h3>
                <p>
                  Learn how to manage accounting tasks, process invoices, and create financial statements using Sage 50.
                </p>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Advanced Financial Reporting</h3>
                <p>
                  Develop skills in generating detailed financial reports, tracking budgets, and making data-driven decisions using QuickBooks and Sage 50.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Necessities */}
        <div className="w-full bg-gray-300 py-16 px-16">
          <div className="max-w-[100%] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center text-black">
              <h2 className="text-4xl font-semibold mb-8">Course Necessities:</h2>
              <ul className="list-disc list-inside text-left space-y-2 text-1xl">
                <li>Access to QuickBooks and Sage 50 software.</li>
                <li>Basic knowledge of mathematics and calculations.</li>
                <li>Commitment to study at least 20 hours a week.</li>
                <li>Proficiency in English for class discussions and assignments.</li>
                <li>High-speed internet connection for online classes.</li>
              </ul>
            </div>
            <img
              className="w-[700px] mx-auto rounded-3xl my-4"
              src="https://bachelors-completion.northeastern.edu/wp-content/uploads/2019/04/Accounting-or-Finance-1.jpg"
              alt="Accounting"
            />
          </div>
        </div>

        {/* Course Content with Video */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-semibold mb-8">Course Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ul className="list-disc list-inside text-left space-y-2">
                <li>Introduction to QuickBooks and Sage 50</li>
                <li>Managing Financial Transactions with QuickBooks</li>
                <li>Creating Financial Reports using Sage 50</li>
                <li>Payroll Management in QuickBooks</li>
                <li>Auditing and Compliance with Sage 50</li>
                <li>Budgeting & Forecasting with Accounting Software</li>
              </ul>
              <div className="relative w-full h-0 pb-56">
                <video
                  className="absolute top-0 left-0 w-full h-full border-4 border-gray-300"
                  controls
                  src="https://res.cloudinary.com/ddei3mzex/video/upload/v1729243088/How_to_convert_QuickBooks_file_in_Sage50_tm4ozm.mp4"
                ></video>
              </div>
            </div>
          </div>
        </section>

        {/* Course Duration and Payment Plans */}
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
          <div className="container mx-auto px-6 lg:px-12 text-center space-y-16">
            {/* Course Duration */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Course Duration
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Our Accounting Bootcamp lasts for 12 weeks, offering in-depth
                training and hands-on experience in QuickBooks and Sage 50.
              </p>
            </div>

            {/* Payment Plans */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Payment Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Full Payment</h3>
                  <p className="text-gray-600 mb-4">Pay upfront and enjoy a 10% discount.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 35,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Installment Plan</h3>
                  <p className="text-gray-600 mb-4">Pay in 3 installments throughout the course duration.</p>
                  <p className="text-3xl font-bold text-gray-800">KSH 40,000</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scholarships</h3>
                  <p className="text-gray-600 mb-4">Apply for financial aid and scholarships if eligible.</p>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Ready to Join?
              </h2>
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

export default Accounts;
