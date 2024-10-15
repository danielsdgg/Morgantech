// src/components/NavBar.tsx
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import logo from '../assets/morgan_logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null); // Close any open submenus when toggling the main menu
  };

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <p className='text-white'>Morgan Technical Training</p>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu links for desktop */}
        <ul className="hidden lg:flex lg:items-center space-x-4">
          {/* Home */}
          <li>
            <Link to={'/'}><p className="py-2 px-4 text-white hover:text-orange-400">
              Home
            </p> </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">
              About
            </p>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white shadow-md">
              <li>
                <Link to={'/story'}>
                  <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Our Story
                  </p>
                </Link>
              </li>
              <li>
                <Link to={'/team'}><p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Our Team
                </p></Link>
              </li>
            </ul>
          </li>

          {/* Programs Dropdown */}
          <li className="relative group">
            <p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">
              Programs <AiOutlineDown className="ml-1" />
            </p>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white shadow-md">
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Web Design
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Accounting Packages
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Video Editing/Motion Graphics
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Graphics Design Packages
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Computer Packages
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Frontend Programming
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Backend Programming
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Cyber Security
                </p>
              </li>
              <li>
                <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Android Programming
                </p>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
           <Link to={'/contact'}> <p className="py-2 px-4 text-white hover:text-orange-400">
              Contact
            </p> </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Sidebar */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 lg:hidden`}
      >
        <div className="p-4">
          <img src={logo} alt="Logo" className="h-10 w-auto mb-4" />
          <ul>
            {/* Home */}
            <li>
             <Link to={'/'}> <p className="block py-2 px-4 text-white hover:text-orange-400"
                onClick={toggleMenu}>
                Home
              </p> </Link>
            </li>

            {/* About Dropdown */}
            <li className="py-2 px-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu('about')}
              >
                <span className="text-white">About</span>
                {activeSubMenu === 'about' ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {activeSubMenu === 'about' && (
                <ul className="mt-2 ml-4">
                  <li>
                    <Link to={'/story'}>
                      <p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">
                        Our Story
                      </p>
                    </Link>
                  </li>
                  <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">
                      Our Team
                    </p>
                  </li>
                </ul>
              )}
            </li>

            {/* Programs Dropdown */}
            <li className="py-2 px-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu('programs')}
              >
                <span className="text-white">Programs</span>
                {activeSubMenu === 'programs' ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {activeSubMenu === 'programs' && (
                <ul className="mt-2 ml-4">
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Web Design
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Accounting Packages
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Video Editing/Motion Graphics
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Graphics Design Packages
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Computer Packages
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Frontend Programming
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Backend Programming
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Cyber Security
                    </p>
                  </li> <hr></hr>
                  <li>
                    <p className="block py-2 px-4 text-gray-300 hover:bg-gray-600 rounded">
                      Android Programming
                    </p>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
             <Link to={'/contact'}> <p
                className="block py-2 px-4 text-white hover:text-orange-400"
                onClick={toggleMenu}
              >
                Contact
              </p> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
