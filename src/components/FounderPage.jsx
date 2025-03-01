import React from "react";
import { Link } from "react-router-dom";

// Placeholder for your actual images - replace with your own
import founderHeroImage from "/images/1.jpg";
import founderStoryImage from "/images/1.jpg";
import founderAchievementImage from "/images/1.jpg";
import founderVisionImage from "/images/1.jpg";

const FounderPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <div className="relative">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${founderHeroImage})` }}
        >
          <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our Founder
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              The visionary behind our mission to transform the lives of
              Udaipur's stray animals
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div
          className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[615px] w-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${founderHeroImage})` }}
        >
          <div className="max-w-7xl px-4 sm:px-6 lg:px-10 xl:pl-20 text-left py-12 md:py-16 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              <span className="block">Founders</span>
              <span className="block text-amber-900">Name</span>
              <span className="block text-amber-900">Name</span>

            </h1>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${founderHeroImage})` }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Founders
            </h1>
            <p className="text-xl md:text-2xl mx-auto text-white">Name</p>
            <p className="text-xl md:text-2xl mx-auto text-white">Name</p>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={founderStoryImage}
                alt="Founder with rescued animals"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Anita Sharma
              </h2>
              <p className="text-lg text-gray-700 italic mb-6">
                "Every time I see an animal in pain, I'm reminded of why we
                started this journey. Their eyes tell stories of suffering, but
                also of hope."
              </p>
              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-amber-700 mb-3">
                  A Journey Inspired by Compassion
                </h3>
                <p className="text-gray-700 mb-4">
                  Born and raised in Udaipur, Anita's love for animals began at
                  a young age when she rescued her first puppy at just 10 years
                  old. What started as a childhood passion grew into a lifelong
                  commitment to animal welfare.
                </p>
                <p className="text-gray-700">
                  After completing her veterinary medicine degree, Anita
                  returned to Udaipur in 2018 with a vision to create a haven
                  for the city's stray animals. She noticed the plight of
                  countless dogs and cats on the streets, suffering from
                  injuries, malnutrition, and neglect.
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                With just a small team of three volunteers and her personal
                savings, Anita established our organization. Despite facing
                numerous challenges, from limited resources to public
                skepticism, her determination never wavered. Today, her vision
                has transformed into one of Udaipur's most impactful animal
                welfare organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in animal welfare through dedication and
              innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">
                Pioneer in Animal Welfare
              </h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Professional Background
                  </h4>
                  <p className="text-gray-700">
                    With a degree in Veterinary Medicine and additional
                    certification in Animal Welfare Management, Anita brings
                    professional expertise to her compassionate work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Awards & Recognition
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Rajasthan Animal Welfare Award (2020)</li>
                    <li>
                      • Udaipur Citizen's Choice Award for Social Impact (2021)
                    </li>
                    <li>
                      • Featured in National Geographic's "Local Heroes"
                      documentary (2022)
                    </li>
                    <li>• TEDx Speaker on Compassionate Communities (2023)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Innovative Approaches
                  </h4>
                  <p className="text-gray-700">
                    Anita pioneered Udaipur's first mobile veterinary clinic,
                    bringing medical care directly to street animals in need.
                    She also developed community-based feeding programs that
                    engage local businesses in supporting stray animals.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={founderAchievementImage}
                alt="Founder receiving an award"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={founderVisionImage}
                alt="Founder with a rescued animal"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Vision & Philosophy
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">
                  In Her Own Words
                </h3>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-amber-500 pl-4 py-2 mb-6">
                  "Animals don't have a voice, but they communicate in ways more
                  powerful than words. Our responsibility is to listen,
                  understand, and act. Every life, no matter how small, deserves
                  dignity and care."
                </blockquote>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Community-Centered Approach
                  </h4>
                  <p className="text-gray-700">
                    Anita believes that sustainable animal welfare can only be
                    achieved when the entire community participates. Her
                    approach focuses on education, awareness, and creating
                    systems where animals and humans can coexist harmoniously.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Long-Term Vision
                  </h4>
                  <p className="text-gray-700">
                    Beyond immediate rescue and rehabilitation, Anita envisions
                    a Udaipur where preventive care, responsible pet ownership,
                    and humane population management make animal suffering a
                    thing of the past.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Holistic Welfare
                  </h4>
                  <p className="text-gray-700">
                    She advocates for addressing not just the physical needs of
                    animals but also their psychological well-being, ensuring
                    that every rescued animal experiences love, safety, and
                    dignity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            A Message From Anita
          </h2>

          <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-lg relative">
            <div className="text-6xl text-amber-300 absolute top-4 left-4">
              "
            </div>
            <div className="pt-8 pb-4 px-6">
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                To everyone who has supported our journey, to our tireless
                volunteers, to our compassionate donors, and to every person who
                has ever stopped to help a stray animal – thank you.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                When I started this organization, many told me it was impossible
                to make a real difference for Udaipur's stray animals. But
                together, we've proven that compassion, when acted upon
                collectively, has the power to transform lives.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Every rescue story, every successful rehabilitation, every
                adoption that brings an animal into a loving home – these are
                not just our achievements, they are victories for humanity and
                kindness.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                Our work is far from done. I invite you to join us in whatever
                capacity you can. Whether through volunteering, donations,
                adoptions, or simply spreading awareness – you can be part of
                this journey toward a more compassionate Udaipur.
              </p>
            </div>
            <div className="text-right pr-10">
              <p className="text-xl font-bold text-amber-600">Anita Sharma</p>
              <p className="text-gray-600">Founder & Director</p>
            </div>
            <div className="text-6xl text-amber-300 absolute bottom-4 right-4">
              "
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Anita's Mission
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Be part of the change we're creating for Udaipur's stray animals.
            Your support enables us to continue our founder's vision of
            compassion in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donation"
              className="bg-white text-amber-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              Support Our Work
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
            >
              Contact Anita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderPage;
