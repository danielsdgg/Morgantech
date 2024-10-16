import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Team = () => {
    let message = 'The best time is now'
  return (
    <>
    <Navbar />
    <section className="bg-gray-200 py-28">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team Behind Morgan Technical Training</h2>
                <p className="text-lg md:text-xl text-gray-500">{message}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1716552809/1000045233_ywrlv5.jpg" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">Leonard</h3>
                            <div className="mb-4">
                                <p className="text-gray-500">Head of M.T.T</p>
                            </div>
                            <p className="text-black">Leonard is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* second */}
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1728998699/IMG_5230_qib0qp.jpg" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">Nathan Nyongesa</h3>
                            <div className="mb-4">
                                <p className="text-gray-600">Technical Mentor</p>
                            </div>
                            <p className="text-black">Nathan first fell in love with digital marketing at the university. He loves to learn, and looks forward to being part of this new exciting industry for many years.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* third */}
                    <div className="col-span-3 md:col-span-1 pt-9">
                        <div className="bg-gray-100 rounded-lg p-8 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                            <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1712911719/1690452513365_gaum2x.jpg" className="mx-auto w-48 h-48 rounded-full mb-6" alt="pic" />
                            <h3 className="text-xl font-semibold">DANIEL MUIRURI</h3>
                            <div className="mb-4">
                                <p className="text-gray-600">Software Engineer</p>
                            </div>
                            <p className="text-black">Daniel is our lead developer who specializes in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
                            <ul className="flex justify-center mt-6">
                                <li className="mx-2">
                                <a href="http://www.twitter.com" > <FaTwitterSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.instagram.com" > <FaInstagram size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.facebook.com" > <FaFacebookSquare size={30} /> </a>
                                </li>
                                <li className="mx-2">
                                <a href="http://www.dribble.com" ><FaDribbbleSquare size={30} /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Repeat the above structure for the other team members */}
                </div>
            </div>
        </section>


    <Footer />
    </>
  )
}

export default Team