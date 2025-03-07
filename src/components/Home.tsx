import React,{useEffect, useState} from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { useSwipeable } from "react-swipeable";
import { Link, NavLink } from 'react-router-dom';
import ScrollButton from './ScrollButton';
// import { ReactTyped } from 'react-typed';


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to control when animation triggers
    );

    const section = document.querySelector('#top-courses-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll);
    
    // Set visible to true after the component mounts
    setVisible(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    const testimonials = [
        {
          image: "https://res.cloudinary.com/ddei3mzex/image/upload/v1728998699/IMG_5230_qib0qp.jpg",
          name: "Nathan Nyongesa",
          title: "Mentor",
          testimonial: "Working with Morgan Technical has been significantly more effective in upscaling my skills by training newbie techies."
        },
        {
          image: 'https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg',
          name: 'Daniel.M',
          title: 'Team Lead',
          testimonial: 'I always wanted to be a frontend developer for a long time and after going through the technical training at M.T.T, I fulfilled my longtime wish.',
        },
        {
          image: 'https://science.nasa.gov/wp-content/uploads/2024/01/preview-supermoons.jpg?w=4096&format=jpeg',
          name: 'Martin',
          title: 'M.T.T. Alumni',
          testimonial: 'Studying at M.T.T has been fruitful indeed and i have gained big skills.!',
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

      // const [visible, setVisible] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setVisible(true);
        }, 1000);
    
        return () => clearTimeout(timer); 
      }, []);
      

  return (
    <>
    <NavBar />
    <div>
        {/* 0 */}

        {/* part 1 */}
        <section className="relative bg-gray-800 h-[700px] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb"
          alt="Hero Background"
          className={`object-cover w-full h-full transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          }}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-4">
        <h1 className={`text-4xl md:text-5xl font-bold text-white transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'}`}>
          Welcome to <span className="text-blue-500">Morgan Technical Training</span>
        </h1>

        <h2 className={`text-3xl md:text-3xl font-bold mb-4 transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1000`}>
          Empowering Your Digital Future
        </h2>

        <p className={`text-md md:text-lg mb-8 transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1600`}>
          Join us in navigating the world of technology with innovative solutions designed for your success.
        </p>

        <Link to="/courses">
          <p className={`bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 cursor-pointer transition-opacity duration-1000 ease-in ${visible ? 'opacity-100' : 'opacity-0'} delay-1600`}>
            Get Started
          </p>
        </Link>
      </div>
    </section>


    {/* part 2 */}
    <div className="bg-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column */}
          <div
            className={`w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 transition-opacity duration-2000 ease-in-out ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Committed to Excellence
            </h2>
            <p className="text-lg lg:text-xl mb-8">
              Our mission is to provide outstanding tech skills to our students
              and ensure they feel satisfied. We have a variety of fascinating
              courses ready for learning now at affordable prices. Remember, the
              secret of getting ahead is getting started.
            </p>
            <h3 className="text-2xl font-bold mb-4">Hear Our Students</h3>
            <p className="text-lg lg:text-xl mb-8">
              “The digital world is here, and we must embrace it.”
            </p>
          </div>

          {/* Right Column: Slider */}
          <div className="w-full lg:w-1/2">
            <div className="relative" {...handlers}>
              <div className="overflow-hidden relative h-64">
                <div
                  className={`flex duration-2000 transition-opacity duration-1000 ease-in ${
            visible ? 'opacity-100' : 'opacity-0'
          } delay-1000`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full h-full flex items-center justify-center bg-white text-black shadow-lg p-6 transition-transform duration-2000 ease-in-out"
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
                      index === currentIndex
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
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
    <section className="bg-gray-100 py-16 relative">
  <div className="container mx-auto px-4">
    <h2 className={`text-4xl font-bold text-center mb-10 underline duration-1000 ease-in ${
      visible ? 'opacity-100' : 'opacity-0'
    } delay-1600`}>Top Courses</h2>
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-1000 ease-in ${
      visible ? 'opacity-100' : 'opacity-0'
    } delay-1600`}>
      {/* Feature 1: Software Engineering */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOidFsuemGaWGxr16QKfvzI52EFQeFTrN4Q&s"
          alt="Software Engineering Icon"
          className="mx-auto mb-4 h-16"
        />
        <h3 className="text-xl font-semibold mb-2 text-indigo-600">Software Engineering</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          Software engineers design, develop, and maintain robust applications, mastering both frontend and backend technologies. 
          Our course trains you in HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Python, Flask, and MySQL to build full-stack solutions. 
          You'll learn to collaborate on projects, optimize performance, and deploy scalable systems across platforms.
        </p>
        <Link to={'/software'}>
          <p className="text-indigo-600 hover:text-indigo-800 hover:underline mt-4 block font-medium transition-colors duration-300">
            Learn More
          </p>
        </Link>
      </div>
      
      {/* Feature 2: Cybersecurity */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img 
          src="https://www.technologysolutions.net/wp-content/uploads/2023/09/pros-and-cons-scaled-2560x1280.jpeg" 
          alt="Cybersecurity Icon" 
          className="mx-auto mb-4 h-16" 
        />
        <h3 className="text-xl font-semibold mb-2">Cyber Security</h3>
        <p className="text-gray-700">
          Cybersecurity protects systems, networks, and data from cyber threats like attacks and breaches. It involves implementing security measures, monitoring for suspicious activity, and responding to incidents to ensure data integrity and confidentiality.
        </p>
        <Link to={'/cyber'}>
          <p className="text-blue-500 hover:underline mt-4 block">
            Learn More
          </p>
        </Link>
      </div>

      {/* Feature 3: Data Science (New) */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img 
          src="https://wallpapers.com/images/featured/data-science-xe1pmo7wm4jcokpd.jpg" 
          alt="Data Science Icon" 
          className="mx-auto mb-4 h-16" 
        />
        <h3 className="text-xl font-semibold mb-2">Data Science</h3>
        <p className="text-gray-700">
          Data Science combines statistics, programming, and domain expertise to extract insights from data. Our course covers Python, R, machine learning, and big data tools like Hadoop, preparing you for roles in analytics and AI.
        </p>
        <Link to={'/datascience'}>
          <p className="text-blue-500 hover:underline mt-4 block">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  </div>

  {/* Right-faced arrow at bottom right */}
  <div className="absolute bottom-0 right-0 p-4">
    <NavLink to={'/courses'}>
      <p className="text-1xl text-gray-700 hover:text-blue-500 cursor-pointer font-semibold flex items-center">
        See More <span className="ml-2 text-3xl">→</span>
      </p>
    </NavLink>
  </div>
</section>

{/* part 4 */}
<section className={`py-16 bg-gray-200 from-blue-500 via-indigo-600 to-purple-700 text-black duration-1000 ease-in ${
    visible ? 'opacity-100' : 'opacity-0'
  } delay-1600`}>
  <div className="container mx-auto px-4 text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your Tech Potential</h2>
    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
      Explore cutting-edge courses in Software Engineering, Cybersecurity, and Data Science—designed for the future, delivered remotely.
    </p>

    {/* Highlights Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Software Engineering */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">Software Engineering</h3>
        <p className="text-md">
          Master full-stack development with hands-on projects in React, Node.js, Python, and more. Build real-world solutions remotely.
        </p>
      </div>

      {/* Cybersecurity */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">Cybersecurity</h3>
        <p className="text-md">
          Learn to secure networks and data with expert-led training. Remote labs and real-time simulations included.
        </p>
      </div>

      {/* Data Science */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">Data Science</h3>
        <p className="text-md">
          Dive into data analysis, machine learning, and AI with flexible, remote coursework tailored to industry needs.
        </p>
      </div>
    </div>

    {/* Call to Action */}
    <Link to="/courses">
      <p className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
        Discover Our Curriculum Now
      </p>
    </Link>
  </div>
</section>

    <ScrollButton/>
    </div>
    <Footer />
    </>
  )
}

export default Home