import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <img className="h-12 w-auto" src="/api/placeholder/120/120" alt="UAF Logo" /> */}
              <div className="ml-3">
                <div className="text-xl font-bold text-amber-900">Udaipur Animal Feed</div>
                <div className="text-xs text-amber-600">Helping Paws, Saving Lives</div>
              </div>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">Home</a>
            <a href="#" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">About Us</a>
            {/* <a href="#" className="text-amber-800 hover:text-amber-600 px-3 py-2 font-medium">Our Work</a> */}
            <Link to="" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">Adoption</Link>
            <Link to="" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">Get Involved</Link>
            <Link to="" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">Get Involved</Link>
            <Link to="#" className="text-amber-900 hover:text-amber-600 px-3 py-2 font-medium">Contact</Link>
            <Link to="/donation" >
              <button className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Donate Now
              </button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-800 hover:text-amber-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50">
            <a href="#" className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md">About Us</a>
            <a href="#" className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md">Our Work</a>
            <a href="#" className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md">Get Involved</a>
            <a href="#" className="block px-3 py-2 text-amber-800 font-medium hover:bg-amber-100 rounded-md">Contact</a>
            <button className="mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Donate Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;