import React from "react";

const sponsors = [
  { name: "Government of India", logo: "/public/images/govt.png" },
  { name: "UNICEF", logo: "/public/images/unicef.png" },
  { name: "World Animal Protection", logo: "/public/images/wap.png" },
  { name: "Blue Cross", logo: "/public/images/bluecross.png" },
  { name: "Animal Aid", logo: "/public/images/animalaid.png" },
  { name: "PETA", logo: "/public/images/peta.png" },
];

const Sponsors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">
          Our Sponsors & Government Funding
        </h2>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-20 md:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
