import React from "react";

const pressMentions = [
  {
    title: "Times of India Features Our Work",
    description:
      "Our animal welfare initiative was highlighted in the Times of India, showcasing our efforts in feeding and rescuing animals in Udaipur.",
    image: "/images/Newsimg1.jpg",
  },
  {
    title: "BBC News Covers Our Animal Rescue Missions",
    description:
      "BBC News featured our shelter and mobile rescue team, emphasizing the impact of our medical care for injured animals.",
    image: "/images/Newsimg2.jpg",
  },
  {
    title: "Indian Express Writes About Our Community Education",
    description:
      "Indian Express published an article on how we educate the community about responsible pet ownership and animal welfare.",
    image: "/images/Newsimg3.jpg",
  },
  {
    title: "NDTV Recognizes Our Animal Welfare Efforts",
    description:
      "NDTV spotlighted our organization’s commitment to saving lives and rehabilitating street animals in Rajasthan.",
    image: "/images/Newsimg4.jpg",
  },
];

const PressMentions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <h2 className="text-4xl font-bold text-amber-800 text-center mb-12">
          Press Mentions
        </h2>

        {/* Cards Section */}
        <div className="space-y-10">
          {pressMentions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start transition-transform hover:scale-105"
            >
              {/* Text Section */}
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-semibold text-amber-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressMentions;
