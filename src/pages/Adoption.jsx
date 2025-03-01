import React, { useState } from "react";
import { Search, Filter, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AdoptionPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const animals = [
    {
      id: 1,
      name: "Max",
      age: "2 years",
      breed: "Labrador",
      type: "dog",
      image: "/api/placeholder/400/300",
      description:
        "Friendly and energetic. Loves to play fetch and go for walks.",
      status: "Available",
    },
    {
      id: 2,
      name: "Luna",
      age: "1 year",
      breed: "Mixed",
      type: "cat",
      image: "/api/placeholder/400/300",
      description:
        "Gentle and affectionate. Enjoys cuddles and peaceful environments.",
      status: "Available",
    },
    {
      id: 3,
      name: "Rocky",
      age: "3 years",
      breed: "German Shepherd",
      type: "dog",
      image: "/api/placeholder/400/300",
      description:
        "Intelligent and loyal. Well-trained and good with children.",
      status: "Available",
    },
    {
      id: 4,
      name: "Milo",
      age: "6 months",
      breed: "Siamese",
      type: "cat",
      image: "/api/placeholder/400/300",
      description: "Playful and curious. Loves to explore and play with toys.",
      status: "Available",
    },
    {
      id: 5,
      name: "Bella",
      age: "4 years",
      breed: "Beagle",
      type: "dog",
      image: "/api/placeholder/400/300",
      description: "Sweet and sociable. Gets along well with other animals.",
      status: "Available",
    },
    {
      id: 6,
      name: "Oliver",
      age: "2 years",
      breed: "Maine Coon",
      type: "cat",
      image: "/api/placeholder/400/300",
      description:
        "Majestic and calm. Enjoys sitting on laps and being petted.",
      status: "Available",
    },
  ];

  const filteredAnimals =
    activeFilter === "all"
      ? animals
      : animals.filter((animal) => animal.type === activeFilter);

  return (
    <div className="bg-amber-50/20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white h-[640px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1207452340/vector/ai-5ea0382b-334c-4cae-8e59-65ffa642d3b8_.jpg?s=612x612&w=0&k=20&c=9DIK3upnRj0JSqcGEo8NRgcrnC6ISuJ5G0DpxXE6QPM=')",
            filter: "brightness(0.15)",
          }}
        ></div>

        {/* Amber Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-amber-950 opacity-5 z-1"></div>

        {/* Content Container */}
        <div className="container mx-auto px-6 text-center top-24 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Companion
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          Give a loving home to animals in need. Our adoption process ensures
          the best match for both you and your new family member.
          </p>
          
        </div>
      </section>

      
      {/* Animals Grid */}
      <section className="py-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">
          Animals Available for Adoption
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 py-1 px-3 rounded-full text-sm font-semibold">
                  {animal.status}
                </div>
                <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-amber-100 transition-colors">
                  <Heart size={20} className="text-amber-600" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-amber-900">
                    {animal.name}
                  </h3>
                  <span className="text-amber-700 font-medium">
                    {animal.age}
                  </span>
                </div>
                <p className="text-amber-600 mb-4">
                  {animal.breed} •{" "}
                  {animal.type.charAt(0).toUpperCase() + animal.type.slice(1)}
                </p>
                <p className="text-gray-600 mb-6">{animal.description}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Meet {animal.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-amber-950 mb-4 text-center">
            Our Adoption Process
          </h2>
          <p className="text-lg text-amber-800 mb-12 text-center max-w-3xl mx-auto">
            We make adoption straightforward while ensuring our animals go to
            loving, suitable homes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Browse & Select",
                description:
                  "Look through our available animals and find one that connects with you.",
              },
              {
                step: 2,
                title: "Submit Application",
                description:
                  "Fill out our adoption application form with your information and living situation.",
              },
              {
                step: 3,
                title: "Meet & Greet",
                description:
                  "Schedule a time to visit and interact with your potential new family member.",
              },
              {
                step: 4,
                title: "Welcome Home",
                description:
                  "Complete the adoption process and welcome your new companion home.",
              },
            ].map((process) => (
              <div
                key={process.step}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-amber-700">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Adopt Right Now?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            You can still help our animals by donating, volunteering, or
            becoming a foster parent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={'/donation'} className="bg-white text-amber-800 hover:bg-amber-100 py-3 px-8 rounded-full font-semibold transition-colors">
              Donate Now
            </Link>
            <Link to={'/vol'} className="bg-transparent border-2 border-white hover:bg-white hover:text-amber-800 py-3 px-8 rounded-full font-semibold transition-colors">
              Volunteer
            </Link>
     
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdoptionPage;
