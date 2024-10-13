import React,{useState} from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { useSwipeable } from "react-swipeable";


const Home = () => {
    const testimonials = [
        {
          image: "https://cdn.mos.cms.futurecdn.net/DMLwZCcWy25RhSYoszqsjN.jpg",
          name: "Matthew Murdock",
          title: "Marketing Agent",
          testimonial: "Working with Morgan Technical has been significantly more effective in training newbie techies."
        },
        {
          image: 'https://c02.purpledshub.com/uploads/sites/41/2024/05/Earths-second-moon.jpg?w=1029&webp=1',
          name: 'Daniel',
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
    <div className='w-full bg-gray-300 py-16 px-16'>
        <div className='max-w-[100%] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col justify-center text-black'>
                <h2 className='font-semibold py-2 md:text-6xl sm:text-3xl text-2xl'>Message from our CEO:</h2>
                <p>
                    Morgan Technical Training has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves.
                    <p>Internally, but also within the larger communities in which we are active. I am excited to be launching this website since it will connect us more to our clients. We are here to serve you. Enjoy..!</p>
                </p>
            </div>
            <img className='w-[500px] mx-auto rounded-3xl my-4' src='https://res.cloudinary.com/ddei3mzex/image/upload/v1716552809/1000045233_ywrlv5.jpg' alt='mind'/>

        </div>
    </div>
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

    </div>
    <Footer />
    </>
  )
}

export default Home