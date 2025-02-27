import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.png",  
];

const MissionSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={images[currentImage]}
              alt="Volunteers feeding street dogs"
              className="rounded-lg shadow-xl transition-opacity duration-500 ease-in-out"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              "To provide food, shelter, and medical care to stray animals in
              Udaipur, and to promote compassion and kindness towards all living
              beings."
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Udaipur Animal Feed is a non-profit organization dedicated to
              improving the lives of stray animals in Udaipur. We provide food,
              shelter, and medical care to animals in need, and work to promote
              awareness and education about animal welfare in our community.
            </p>
            <div className="flex items-center text-amber-700 font-semibold cursor-pointer group">
              <span className="mr-2">Learn more about our mission</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
