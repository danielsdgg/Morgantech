import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/morgan_logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null);  // Close submenus when opening/closing menu
  };

  const toggleSubMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);  // Toggle submenus
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-20 top-0 left-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />  {/* Adjust size as needed */}
        </div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu links */}
        <ul className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          {/* About dropdown */}
          <li>
            <a href="#home" className="py-2 px-4 text-white hover:text-orange-400">
              Home
            </a>
          </li>
          <li className="relative group">
            <button
              onClick={() => toggleSubMenu('about')}
              className="py-2 px-4 text-white hover:text-orange-400"
            >
              About
            </button>
            {activeMenu === 'about' && (
              <ul className="absolute left-0 top-full bg-white shadow-md py-2">
                <li>
                  <a href="#about" className="block px-4 py-2 hover:bg-gray-200">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#team" className="block px-4 py-2 hover:bg-gray-200">
                    Our Team
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Other menu items */}
          <li className="relative group">
            <button
              onClick={() => toggleSubMenu('programs')}
              className="py-2 px-4 text-white hover:text-orange-400"
            >
              Programs
            </button>
            {activeMenu === 'programs' && (
              <ul className="absolute left-0 top-full bg-white shadow-md py-2">
                <li>
                  <a href="#sof-dev" className="block px-4 py-2 hover:bg-gray-200">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#Accounts" className="block px-4 py-2 hover:bg-gray-200">
                    Accounting Packages
                  </a>
                </li>
                <li>
                  <a href="#video-edit" className="block px-4 py-2 hover:bg-gray-200">
                    Video Editing/Motion Graphics
                  </a>
                </li>
                <li>
                  <a href="#graph" className="block px-4 py-2 hover:bg-gray-200">
                    Graphics Design Packages
                  </a>
                </li>
                <li>
                  <a href="#computer-packages" className="block px-4 py-2 hover:bg-gray-200">
                    Computer Packages
                  </a>
                </li>
                <li>
                  <a href="#front" className="block px-4 py-2 hover:bg-gray-200">
                    Frontend Programming
                  </a>
                </li>
                <li>
                  <a href="#back" className="block px-4 py-2 hover:bg-gray-200">
                    Backend Programming
                  </a>
                </li>
                <li>
                  <a href="#Cyber" className="block px-4 py-2 hover:bg-gray-200">
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href="#android" className="block px-4 py-2 hover:bg-gray-200">
                    Android Programming
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Contact */}
          <li>
            <a href="#contact" className="py-2 px-4 text-white hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
