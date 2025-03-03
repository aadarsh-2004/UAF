import React from "react";
import { Link } from "react-router-dom";

// Placeholder for your actual images
import foundersImage from "/images/1.jpg";
import teamImage from "/images/1.jpg";
import missionImage from "/images/2.jpg";
import impactImage from "/images/2.jpg";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
  {/* Background Image with Parallax Effect */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
    style={{ backgroundImage: `url(${teamImage})` }}
  ></div>

  {/* Gradient Overlay for better text readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
    <div className="text-center sm:text-left max-w-3xl">
      <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-white font-medium text-sm mb-6 transform -rotate-1">Serving Udaipur Since 2018</span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        Giving Every <span className="text-amber-400">Paw</span> a Purpose
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
        We've rescued over 2,000 animals, providing them with care, shelter, and loving forever homes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="px-8 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
          Support Our Mission
        </button>
        <button className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors">
          Meet Adoptable Pets
        </button>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 text-center sm:text-left">
        <div>
          <p className="text-amber-400 text-4xl font-bold">2,000+</p>
          <p className="text-white text-sm mt-1">Animals Rescued</p>
        </div>
        <div>
          <p className="text-amber-400 text-4xl font-bold">1,500+</p>
          <p className="text-white text-sm mt-1">Adoptions</p>
        </div>
        <div>
          <p className="text-amber-400 text-4xl font-bold">5+</p>
          <p className="text-white text-sm mt-1">Years of Service</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Decorative Element */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white">
      <path fill="currentColor" fillOpacity="0.1" d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,149.3C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </div>
</div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018 by a group of passionate animal lovers, our
                journey began when we rescued our first injured puppy from the
                streets of Udaipur. What started as a small initiative has now
                grown into a full-fledged animal welfare organization.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've rescued thousands of stray animals,
                provided medical care to injured animals, conducted
                sterilization programs, and found loving homes for countless
                dogs and cats. Our dedication stems from a simple belief: every
                animal deserves compassion and care.
              </p>
              <Link
                to="/volunteer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                Join Our Mission
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={foundersImage}
                alt="Our founders with rescued animals"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by compassion, we work tirelessly to create a world where
              no stray animal suffers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={missionImage}
                alt="Rescuers helping an injured dog"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                To rescue, rehabilitate, and rehome stray animals while
                educating the community about responsible pet ownership and
                animal welfare. We strive to reduce the stray animal population
                through humane methods and advocate for better treatment of all
                animals.
              </p>

              <h3 className="text-2xl font-bold text-amber-600 mb-4">Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                We envision a Udaipur where every stray animal has access to
                food, shelter, and medical care; where the community treats
                animals with respect and kindness; and where sustainable
                solutions exist to manage the stray animal population humanely.
              </p>

              <h3 className="text-2xl font-bold text-amber-600 mb-4">Values</h3>
              <ul className="text-lg text-gray-600 space-y-2">
                <li>• Compassion for all living beings</li>
                <li>• Dedication to animal welfare</li>
                <li>• Transparency in operations</li>
                <li>• Community involvement and education</li>
                <li>• Sustainable and humane solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every rescue, every treatment, and every adoption makes a
              difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                Making A Difference
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Since 2018, we've made significant strides in improving the
                lives of stray animals in Udaipur:
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600 mb-2">
                    5000+
                  </p>
                  <p className="text-gray-700">Animals Rescued</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600 mb-2">
                    3200+
                  </p>
                  <p className="text-gray-700">Medical Treatments</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600 mb-2">
                    1500+
                  </p>
                  <p className="text-gray-700">Adoptions</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-lg">
                  <p className="text-4xl font-bold text-amber-600 mb-2">
                    2800+
                  </p>
                  <p className="text-gray-700">Sterilizations</p>
                </div>
              </div>

              <Link
                to="/impact"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              >
                See Our Full Impact Report
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={impactImage}
                alt="Happy rescued dogs and volunteers"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals and volunteers working together for animal
              welfare
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src={teamImage}
                alt="Our team of volunteers and staff"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-amber-600 mb-4">
                The People Behind Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our team consists of dedicated veterinarians, animal caregivers,
                rescue specialists, and administrative staff who work tirelessly
                to ensure the welfare of every animal under our care.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Alongside our core team, we have a network of passionate
                volunteers who contribute their time, skills, and love to our
                cause. From feeding strays to assisting in rescues, from
                fostering animals to helping with adoptions, our volunteers are
                the backbone of our organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/team"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-center"
                >
                  Meet Our Full Team
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-block bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-center"
                >
                  Join As A Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of Our Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Together, we can create a better world for the stray animals of
            Udaipur. Your support can help us rescue more animals, provide
            better care, and find more loving homes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donation"
              className="bg-white text-amber-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
