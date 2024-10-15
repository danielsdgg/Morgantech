import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import logo from '../assets/morgan_logo.png'

const Courses:React.FC = () => {
  return (
    <>
    <NavBar/>
    {/* intro to courses */}
    <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Take the next step:</h2>
                <p>
                At Morgan Technical, we offer a diverse range of courses designed to equip students with the skills and knowledge needed for success in today's competitive world. Our programs span various disciplines, including Business, Computer Science, Engineering, and the Arts, each taught by experienced faculty. With a focus on both theoretical understanding and practical application, our courses are tailored to meet industry demands. Join us and take the first step toward a fulfilling career through our comprehensive and innovative curriculum.
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src={logo} alt='Logo'/>

        </div>
    </div>
    {/* list of courses */}
    <section className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10 underline">Programs Available:</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOidFsuemGaWGxr16QKfvzI52EFQeFTrN4Q&s" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Frontend Programming</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
      
      {/* Feature 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg" alt="Feature 2" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Cyber Security</h3>
        <p className="text-gray-700">
            Cybersecurity protects systems, networks, and data from cyber threats like attacks and breaches. It involves implementing security measures, monitoring for suspicious activity, and responding to incidents to ensure data integrity and confidentiality.
        </p>
        <a href="#feature2" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://img.freepik.com/free-photo/abstract-backdrop-with-curved-wave-pattern-design-generated-by-ai_188544-15570.jpg" alt="Feature 3" className="mx-auto mb-4 h-16 w-28" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
        <p className="text-gray-700">
            Graphic design involves creating visual content to communicate messages effectively through typography, imagery, and layout. Designers use software and creative techniques to produce graphics for various media, including print, digital, and advertising.
        </p>
        <a href="#feature3" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/01/Image-2-1.jpg" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Accounting Packages</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://img.freepik.com/free-photo/cyber-security-expert-working-with-technology-neon-lights_23-2151645607.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1728950400&semt=ais_hybrid-rr-similar" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Backend Programming</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FULAMVlGS_ZXGlr5MzK2NbESZyjXE5El7Q&s" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Video editing/Motion graphics</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
            {/* Feature 7 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://i.ytimg.com/vi/sdX5B43BDjw/sddefault.jpg" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Computer packages</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
            {/* Feature 8 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://blog.solguruz.com/wp-content/uploads/2023/11/Top-19-Android-App-Development-Trends.png" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Android Programming</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
      {/* feature 9 */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2jJ_dSzID1UI-qDx2dxHj1GL3sdI8_MjHA&s" alt="Feature 1" className="mx-auto mb-4 h-16" /> {/* Replace with your icon */}
        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
        <p className="text-gray-700">
            A frontend developer is responsible for creating the visual and interactive aspects of a website or application. We train on languages like HTML, CSS, and JavaScript to build user interfaces, ensuring a seamless user experience. Their role includes collaborating with designers, optimizing performance, and ensuring compatibility across different devices and browsers.
        </p>
        <a href="#feature1" className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>
  )
}

export default Courses