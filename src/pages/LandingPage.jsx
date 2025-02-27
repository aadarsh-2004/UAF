import React from "react";
import { Heart, PawPrint, Users, Clock, Award, ArrowRight } from "lucide-react";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ImpactSection from "../components/Impact";
import MissionSection from "../components/MissionSection";

const StoryCard = ({ image, title, description }) => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white transition-all hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-amber-800">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 text-amber-600 font-semibold flex items-center">
        Read full story <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  </div>
);

const StoriesSection = () => (
  <section className="py-16 bg-amber-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Behind every rescue is a story of hope, resilience, and
          transformation. Meet some of the animals whose lives have been changed
          forever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StoryCard
          image="/api/placeholder/400/300"
          title="Buddy's Journey"
          description="From a severely injured stray to a happy, healthy dog with a loving forever home."
        />
        <StoryCard
          image="/api/placeholder/400/300"
          title="Luna's Recovery"
          description="A starving street dog transformed through medical care, nutrition, and endless compassion."
        />
        <StoryCard
          image="/api/placeholder/400/300"
          title="Street Feeding Program"
          description="How our daily feeding routes are bringing nourishment to hundreds of animals across Udaipur."
        />
      </div>

      <div className="text-center mt-12">
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-bold transition-colors duration-300">
          View More Stories
        </button>
      </div>
    </div>
  </section>
);

const ProgramCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all hover:shadow-xl">
    <Icon className="h-12 w-12 text-amber-600 mb-4" />
    <h3 className="text-xl font-bold mb-3 text-amber-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const ProgramsSection = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          Our Programs
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We take a holistic approach to animal welfare through these key
          initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgramCard
          icon={PawPrint}
          title="Street Feeding"
          description="Daily routes providing nutritious meals to stray animals across Udaipur."
        />
        <ProgramCard
          icon={Heart}
          title="Medical Care"
          description="Emergency response and treatment for injured and sick street animals."
        />
        <ProgramCard
          icon={Award}
          title="Education"
          description="School programs promoting compassion and responsible pet ownership."
        />
        <ProgramCard
          icon={Users}
          title="Community Engagement"
          description="Working with local communities to create sustainable change for animals."
        />
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section
    className="py-16 bg-cover bg-center relative"
    style={{ backgroundImage: `url('/api/placeholder/1920/600')` }}
  >
    <div className="absolute inset-0 bg-amber-800 opacity-90"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl text-amber-50 max-w-3xl mb-8">
          Every act of kindness makes a difference. Together, we can create a
          city where no animal suffers from hunger, neglect, or abuse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-amber-800 hover:bg-amber-100 px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300">
            Make a Donation
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300">
            Become a Volunteer
          </button>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
          What People Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from our volunteers, donors, and community members about the
          impact of our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "Volunteering with UAF has been the most rewarding experience.
            Seeing the transformation in these animals is truly incredible."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Priya Sharma</h4>
              <p className="text-gray-600">Volunteer for 2 years</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "The dedication of UAF's team is inspiring. They work tirelessly to
            ensure no street animal in Udaipur goes hungry."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Rajesh Mehra</h4>
              <p className="text-gray-600">Monthly Donor</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            "After UAF's educational program at our school, my students now show
            so much more compassion towards street animals."
          </p>
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full mr-4"
              src="/api/placeholder/120/120"
              alt="Testimonial author"
            />
            <div>
              <h4 className="font-bold">Meena Patel</h4>
              <p className="text-gray-600">Local Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <ImpactSection />
        <MissionSection />
        <StoriesSection />
        <ProgramsSection />
        <CallToAction />
        <TestimonialSection />
      </main>
    </div>
  );
};

export default LandingPage;
