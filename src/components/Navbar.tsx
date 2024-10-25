// src/components/NavBar.tsx
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-800 opacity-100 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729158010/crest_x1gutu.jpg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu links for desktop */}
        <ul className="hidden lg:flex lg:items-center space-x-4">
          <li><Link to={'/'}><p className="py-2 px-4 text-white hover:text-orange-400">Home</p></Link></li>
          <li className="relative group"><p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">About</p>
            <ul className="absolute w-[200px] left-0 top-full mt-0 hidden group-hover:block bg-white shadow-md">
              <li><Link to={'/story'}><p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Story</p></Link></li>
              <li><Link to={'/team'}><p className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our Team</p></Link></li>
            </ul>
          </li>
          <li className="relative group"><p className="py-2 px-4 text-white hover:text-orange-400 flex items-center">Programs <AiOutlineDown className="ml-1" /></p>
            <ul className="absolute w-[250px] left-0 top-full mt-0 hidden group-hover:block bg-white shadow-md">
              {/* List programs here */}
            </ul>
          </li>
          <li><Link to={'/contact'}><p className="py-2 px-4 text-white hover:text-orange-400">Contact</p></Link></li>

          {/* Portal Button */}
          <li>
            <Link to={'/portal'}>
              <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Portal
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Sidebar */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={toggleMenu}></div>}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20 lg:hidden`}>
        <div className="p-4">
          <Link to={'/'}><img src="https://res.cloudinary.com/ddei3mzex/image/upload/v1729158010/crest_x1gutu.jpg" alt="Logo" className="h-10 w-auto mb-4" /></Link>
          <ul>
            {/* Menu items for mobile */}
            <li><Link to={'/'}><p className="block py-2 px-4 text-white hover:text-orange-400" onClick={toggleMenu}>Home</p></Link></li>
            <li className="py-2 px-4">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSubMenu('about')}><span className="text-white">About</span>{activeSubMenu === 'about' ? <AiOutlineUp /> : <AiOutlineDown />}</div>
              {activeSubMenu === 'about' && (
                <ul className="mt-2 ml-4">
                  <li><Link to={'/story'}><p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Our Story</p></Link></li>
                  <li><Link to={'/team'}><p className="block py-2 px-4 text-gray-300 hover:bg-gray-700 rounded">Our Team</p></Link></li>
                </ul>
              )}
            </li>
            <li><Link to={'/contact'}><p className="block py-2 px-4 text-white hover:text-orange-400" onClick={toggleMenu}>Contact</p></Link></li>

            {/* Mobile Portal Button */}
            <li>
              <Link to={'/portal'}>
                <button className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                  Portal
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
