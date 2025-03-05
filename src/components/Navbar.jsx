import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import hh from "../assets/hh.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Adoption", path: "/adoption" },
    { name: "Get Involved", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutLinks = [
    { name: "Our Mission", path: "/about" },
    { name: "Meet the Founders", path: "/meetfounder" },
    { name: "Press Mentions", path: "/press" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "Financial Reports", path: "/financials" },
  ];

  // Handle clicking outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown function
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  return (
    <nav className="bg-[#181212] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex ml-3 gap-3">
                <img src={hh} alt="Logo" className="w-12 h-12 bg-amber-950" />
                <div>
                  <div className="text-xl font-bold text-white">
                    Udaipur Animal Feed
                  </div>
                  <div className="text-xs text-amber-700">
                    Helping Paws, Saving Lives
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-amber-600 px-3 py-2 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* About Us Dropdown (Desktop) */}
            <div 
              className="relative group"
              ref={dropdownRef}
            >
              <button 
                onClick={toggleAboutDropdown}
                className="flex items-center text-white hover:text-amber-600 px-3 py-2 font-medium"
              >
                About Us <ChevronDown size={18} className="ml-2" />
              </button>

              {/* Dropdown Menu */}
              {isAboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-amber-800 hover:bg-amber-100"
                      onClick={() => setIsAboutDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Now Button */}
            <Link to="/donation">
              <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Donate Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-amber-800 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* About Us Dropdown (Mobile) */}
            <div className="border-t border-amber-200 pt-2" ref={dropdownRef}>
              <button
                className="w-full flex justify-between px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md"
                onClick={toggleAboutDropdown}
              >
                About Us
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              {isAboutDropdownOpen && (
                <div className="mt-1 bg-white rounded-md shadow-md">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-amber-800 hover:bg-amber-100"
                      onClick={() => {
                        setIsAboutDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Now Button */}
            <Link to="/donation" className="block mt-2">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;