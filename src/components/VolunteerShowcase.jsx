import React from 'react';

const VolunteerShowcase = () => {
  // Sample volunteer data - replace with your actual volunteers
  const volunteers = [
    {
      name: "Umapreethi Santhanakrishnan",
      role: "Web Developer",
      period: "Dec 2020 – Mar 2020",
      image: "/images/vol1.jpg", // Replace with actual image path
      bio: "I have studied B.E in India. After moving to the USA, I started Volunteering as a Web developer while learning web development. As of 2022 December, I'm learning Full Stack development and Volunteering as Front End developer for a non-profit organization. I want to improve my skills in web development while learning so I started Volunteering for nonprofits."
    },
    {
      name: "Ravi Patel",
      role: "Animal Care Coordinator",
      period: "Jan 2022 – Present",
      image: "/images/vol1.jpg", // Replace with actual image path
      bio: "With a background in veterinary sciences, I joined UAF to apply my knowledge where it's needed most. I coordinate our medical camps and train new volunteers in basic animal care. My experience here has deepened my understanding of street animal welfare and community engagement."
    },
    {
      name: "Meera Sharma",
      role: "Education Program Lead",
      period: "Aug 2021 – Present",
      image: "/images/vol1.jpg", // Replace with actual image path
      bio: "As a schoolteacher by profession, I develop and conduct our educational workshops in local schools. I've helped create age-appropriate materials about animal welfare and responsible pet ownership. Seeing children develop empathy for animals has been incredibly rewarding."
    }
  ];

  return (
    <section className="py-16 bg-amber-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Meet Our Wonderful Volunteers</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            These dedicated individuals bring their unique skills and passion to help street animals in Udaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-w-1 aspect-h-1 relative" style={{ paddingBottom: '100%' }}>
                <img 
                  src={volunteer.image} 
                  alt={volunteer.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-1">{volunteer.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{volunteer.role}</p>
                <p className="text-gray-500 text-sm mb-4">{volunteer.period}</p>
                
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-gray-700 text-sm leading-relaxed">{volunteer.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
};

export default VolunteerShowcase;