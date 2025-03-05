import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import hh from "../assets/hh.png";
const Footer = () => {
  return (
    <footer className="bg-[#181212] text-amber-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-1 md:col-span-2">
            <img className="h-12 w-auto mb-4" src={hh} alt="UAF Logo" />
            <h3 className="text-xl font-bold mb-4">Udaipur Animal Feed</h3>
            <p className="mb-4">Dedicated to improving the lives of stray animals in Udaipur through food, shelter, medical care, and community education.</p>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-400" />
              <p>Your support saves lives every day</p>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>10 Siddharth Nagar ,Inspiro building , New bhopalpura , Udaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+916367139345</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>udaipuranimalfeed@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Programs</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Volunteer</a></li>
              <li><a href="#" className="hover:text-white">Donate</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social and Copyright */}
        <div className="mt-8 pt-8 border-t border-amber-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://www.facebook.com/share/g/1A6HX9TKzA/" className="text-amber-50 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/uaf_bharat/" className="text-amber-50 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              {/* <a href="#" className="text-amber-50 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
            <p className="text-center md:text-right">
              &copy; {new Date().getFullYear()} Udaipur Animal Feed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;