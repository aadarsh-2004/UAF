import { Link } from "react-router-dom";
import PetHero from "../assets/editpet2.jpg";

const HeroSection = () => (
  <div className="relative">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Hero Section */}
    <div
      className="relative h-[615px] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${PetHero})` }}
    >
      {/* Text Container */}
      <div className="max-w-7xl px-10 lg:pl-20 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="block">Every Stray Deserves</span>
          <span className="block text-amber-300">A Chance To Live</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
          Together, we can transform the lives of Udaipur's street animals
          through compassion, care, and community action.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            to="/donation"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300"
          >
            Donate Now
          </Link>
          <Link
            to="/vol"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-800 px-8 py-4 rounded-full text-lg font-bold transition-colors duration-300"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
    </div>
    
  </div>
);

export default HeroSection;
