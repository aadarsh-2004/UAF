import React from "react";

const sponsors = [
  { 
    name: "Miraj Group", 
    logo: "data:image/png;base64,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",
    description: "A leading innovative company with diverse business interests and a commitment to sustainable growth."
  },
  { 
    name: "PMCH Health Advisors", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiK29CRxyJ36Xo-9IMaGHkr0Ko06vnfpvCw&s",
    description: "Specialized healthcare consulting firm providing strategic solutions for medical and health organizations."
  },
  { 
    name: "Arth Diagnostics", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQwdr1_O5mGeWmrnSEu28zLX1Vcd0G_Hvow&s",
    description: "Advanced diagnostic center offering cutting-edge medical testing and comprehensive health screening services."
  },
  { 
    name: "Aravali Cycles", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV-3pP1kEke1psbgZoSzyQrcrg2eCwHV7b2g&s",
    description: "Premium bicycle manufacturer and retailer dedicated to promoting sustainable and healthy transportation."
  }
];

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Our Supporters
      </h2>

      {/* Sponsor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6 flex flex-col items-center">
              <img 
                src={sponsor.logo} 
                alt={`${sponsor.name} logo`} 
                className="h-32 w-full object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {sponsor.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {sponsor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;