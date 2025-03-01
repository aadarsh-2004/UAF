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
      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${teamImage})` }}
        ></div>

        {/* Overlay for better text readability - adjust opacity as needed */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
              Dedicated to rescuing, rehabilitating, and rehoming stray animals
              in Udaipur since 2018
            </p>
          </div>
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
