import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';

const Story: React.FC = () => {
  return (
    <>
      <NavBar />
      {/* 1 */}
      <section className="relative bg-gray-100 py-24">
  <div className="container mx-auto px-4">
    {/* Section with Image Background */}
    <div 
      className="relative flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat h-auto min-h-[400px] sm:h-[500px] rounded-lg shadow-lg"
      style={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210828/pngtree-binary-matrix-code-flow-dark-abstract-background-image_770045.jpg')`
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

      {/* Text Content */}
      <div className="relative z-10 p-6 sm:p-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">The Morgan Technical Story</h2>
        <p className="text-base sm:text-lg mb-4">
        At Morgan-Technical-Training, our journey began with a simple mission: to empower individuals & organizations with cutting-edge tech solutions. Founded by a team of passionate experts, we envisioned a company that not only safeguards digital assets but also fosters a culture of security awareness.
        </p>
        <p className="text-base sm:text-lg mb-4">
        Over the years, Morgan Technical has grown into a trusted partner for businesses. Our commitment to innovation and excellence drives us to continuously enhance our services, ensuring that we stay up-to-date with trending technologies.
        </p>
        <p className="text-base sm:text-lg">
          We believe that cybersecurity is more than just technology; it's about people, processes, and a proactive mindset.
        </p>
      </div>
    </div>
  </div>
</section>
{/* 2 */}
<section className="bg-white py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Mission Section */}
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="text-4xl text-blue-500 mb-4">
          {/* Icon for Mission */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          To deliver cutting-edge cybersecurity solutions that empower organizations to safeguard their digital infrastructure and foster a culture of security awareness.
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="text-4xl text-green-500 mb-4">
          {/* Icon for Vision */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12 13h-9v7L3 14h6z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg text-gray-600">
          To become a global leader in cybersecurity, continuously adapting to emerging threats and ensuring the highest standards of protection for our clients.
        </p>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
};

export default Story;
