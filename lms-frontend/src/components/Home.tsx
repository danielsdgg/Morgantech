import React,{useState} from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { useSwipeable } from "react-swipeable";


const Home = () => {
    const testimonials = [
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQds_Eqs_12_ujshkc9-HVkMFxRhIeLxCnnhw&s",
          name: "Matthew Murdock",
          title: "Marketing Agent",
          testimonial: "Working with Morgan Technical has been significantly more effective in training newbie techies."
        },
        {
          image: 'https://c02.purpledshub.com/uploads/sites/41/2024/05/Earths-second-moon.jpg?w=1029&webp=1',
          name: 'Daniel .M',
          title: 'M.T.T. Alumni',
          testimonial: 'I got very relevant skills while i was at M.T.T. and i got a job placement 2months after completing the program.',
        },
        {
          image: 'https://science.nasa.gov/wp-content/uploads/2024/01/preview-supermoons.jpg?w=4096&format=jpeg',
          name: 'Leonard Kuria',
          title: 'Head of Alx',
          testimonial: 'Partnering with m.t.t has been fruitful indeed. we have managed to train 200+ software developers in 2023 alone.',
        },
    
      ]
      const [currentIndex, setCurrentIndex] = useState(0);
      const goToSlide = (index : any) => {
        setCurrentIndex(index);
      };
    
      const handlers = useSwipeable({
        onSwipedLeft: () => goToSlide((currentIndex + 1) % testimonials.length),
        onSwipedRight: () => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length),
        preventScrollOnSwipe: true,
        trackMouse: true,
      });
  return (
    <>
    <NavBar />
    <div>
        {/* part 1 */}
        <section className="relative bg-gray-800 h-[700px]">
  <div className="absolute inset-0">
    <img
      src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb"
      alt="Hero Background"
      className="object-cover w-full h-[700px]"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for readability */}
  </div>
  <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">Empowering Your Digital Future</h1>
    <p className="text-lg md:text-xl mb-8">
      Join us in navigating the world of technology with innovative solutions designed for your success.
    </p>
    <p
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
    >
      Get Started
    </p>
  </div>
</section>

    {/* part 2 */}
    <div className="bg-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Committed to Excellence</h2>
            <p className="text-lg lg:text-xl mb-8">
              Our mission is to provide outstanding tech skills to our students and ensure they feel satisfied.We have a variety of fascinating courses ready for learning now at affordable prices.
              Remember, The secret of getting ahead is getting started.
            </p>
            <h3 className="text-2xl font-bold mb-4">Hear Our students</h3>
            <p className="text-lg lg:text-xl mb-8">“The digital world is here and we must embrace it.”</p>
          </div>

          {/* Right Column: Slider */}
          <div className="w-full lg:w-1/2">
            <div className="relative" {...handlers}>
              <div className="overflow-hidden relative h-64">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-full flex items-center justify-center bg-white text-black shadow-lg p-6"
                    >
                      <div className="text-center">
                        <p className="text-lg mb-4">{testimonial.testimonial}</p>
                        <div className="flex items-center justify-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 mx-1 rounded-full cursor-pointer ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    onClick={() => goToSlide(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* part 3 */}
    <section className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Top Courses</h2>
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
    </div>
  </div>
</section>
{/* part 4 */}
<section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Watch Our Latest Video</h2>

        {/* Video Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {/* Adjust aspect ratio for different screen sizes */}
          <div className="relative pb-[56.25%] sm:pb-[65%] lg:pb-[28.125%]">
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              src="https://res.cloudinary.com/ddei3mzex/video/upload/v1725881758/Virtual_Tour___It_s_More_Fun_with_You_in_El_Nido_cobll8.mp4"
            ></video>
          </div>
        </div>
      </div>
    </section>



    </div>
    <Footer />
    </>
  )
}

export default Home