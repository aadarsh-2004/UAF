import React, { useState } from "react";
import { Heart, Info, Check, ChevronDown, ArrowRight, X } from "lucide-react";

const DonationPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, all donations to Udaipur Animal Feed are eligible for tax deduction under Section 80G of the Income Tax Act. You will receive a tax receipt via email shortly after your donation is processed.",
    },
    {
      question: "How is my donation used?",
      answer:
        "Your donation directly supports our core programs: daily feeding routes, medical care for injured and sick animals, sterilization programs, community education, and shelter operations. We ensure that at least 85% of all donations go directly to animal care.",
    },
    {
      question: "Can I donate in memory or honor of someone?",
      answer:
        "Yes, you can make a tribute donation in memory or honor of a loved one. After selecting your donation amount, you'll have the option to dedicate your gift. We can also send a notification card to a specified recipient.",
    },
    {
      question: "What percentage of my donation goes to administrative costs?",
      answer:
        "We pride ourselves on maintaining low overhead costs. Approximately 85% of all donations go directly to animal care programs, while only 15% is used for administrative and fundraising expenses necessary to sustain our operations.",
    },
    {
      question: "Can I make a recurring donation?",
      answer:
        "Yes, you can set up monthly, quarterly, or annual recurring donations. This provides us with a steady stream of support that helps us plan our programs more effectively.",
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const toggleFaq = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  const [activeTab, setActiveTab] = useState("upi");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 text-white h-[619px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/images/donationheeadimg.webp')",
              filter: "brightness(0.3)",
            }}
          ></div>

          {/* Amber Overlay for Brand Consistency */}
          <div className="absolute inset-0 bg-amber-950 opacity-30 z-1"></div>

          {/* Content Container */}
          <div className="container mx-auto px-6 text-center top-24 relative z-10">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Every Gift Makes a Difference
            </h1>
            <p className="text-md max-w-3xl mx-auto mb-8">
              Your donation helps us provide food, shelter, and medical care to
              stray animals in Udaipur. Every contribution creates a better life
              for animals in need.
            </p>
          </div>
        </section>

        <section id="donate-now" className="py-16 bg-amber-50/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-amber-950 mb-4">
                Make Your Contribution
              </h2>
              <p className="text-lg text-amber-950 max-w-3xl mx-auto">
                Choose your preferred donation method and amount. Every rupee
                counts towards creating a better life for stray animals.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Sidebar - Impact Information */}
                <div className="bg-amber-50 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-amber-950 mb-6">
                    Your Impact
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-950">
                        ₹500 can feed 25 stray animals for a day
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-950">
                        ₹1,000 can provide basic medical care for 5 animals
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-800">
                        ₹2,000 can vaccinate 10 strays against rabies
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-800">
                        ₹5,000 can fund an emergency surgery
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-amber-800 mb-1">
                          Tax Benefits
                        </h3>
                        <p className="text-sm text-amber-700">
                          Donations to UAF are eligible for tax deduction under
                          Section 80G of the Income Tax Act. You will receive a
                          tax receipt via email after your donation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-950 text-white rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm mb-3">
                      For assistance with your donation or to explore other ways
                      to support, contact us:
                    </p>
                    <p className="text-sm">Phone: +91 98765 43210</p>
                    <p className="text-sm">
                      Email: donate@udaipuranimalfeed.org
                    </p>
                  </div>
                </div>

                {/* Right Side - Payment Options */}
                <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-amber-100">
                  <h2 className="text-2xl font-bold text-amber-950 mb-6">
                    Payment Options
                  </h2>

                  {/* Payment Methods Tabs */}
                  <div className="mb-8">
                    <div className="flex border-b border-amber-200">
                      <button
                        onClick={() => handleTabClick("upi")}
                        className={`px-4 py-2 ${
                          activeTab === "upi"
                            ? "border-b-2 border-amber-600 text-amber-800 font-medium"
                            : "text-amber-700 font-medium"
                        }`}
                      >
                        UPI Payment
                      </button>
                      <button
                        onClick={() => handleTabClick("qr")}
                        className={`px-4 py-2 ${
                          activeTab === "qr"
                            ? "border-b-2 border-amber-600 text-amber-800 font-medium"
                            : "text-amber-700 font-medium"
                        }`}
                      >
                        QR Code
                      </button>
                      <button
                        onClick={() => handleTabClick("bank")}
                        className={`px-4 py-2 ${
                          activeTab === "bank"
                            ? "border-b-2 border-amber-600 text-amber-800 font-medium"
                            : "text-amber-700 font-medium"
                        }`}
                      >
                        Bank Transfer
                      </button>
                    </div>
                  </div>

                  {/* UPI Payment Option */}
                  {activeTab === "upi" && (
                    <div className="py-6">
                      <div className="bg-amber-50 rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">
                          UPI ID
                        </h3>
                        <div className="bg-white border border-amber-200 rounded-lg p-3 mb-4">
                          <p className="text-lg font-medium text-amber-900">
                            udaipuranimal@ybl
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard("udaipuranimal@ybl")}
                          className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors"
                        >
                          Copy UPI ID
                        </button>
                      </div>
                    </div>
                  )}

                  {/* QR Code Option */}
                  {activeTab === "qr" && (
                    <div className="py-6">
                      <div className="bg-amber-50 rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">
                          Scan QR Code
                        </h3>
                        <div className="bg-white p-2 rounded-lg inline-block border border-amber-200">
                          <img
                            src="/qr-code-placeholder.png"
                            alt="QR Code"
                            className="w-48 h-48 mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank Transfer Option */}
                  {activeTab === "bank" && (
                    <div className="py-6">
                      <div className="bg-amber-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-amber-800 mb-3">
                          Bank Account Details
                        </h3>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between">
                            <span className="text-amber-700">
                              Account Name:
                            </span>
                            <span className="font-medium text-amber-900">
                              Udaipur Animal Feed Foundation
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-700">
                              Account Number:
                            </span>
                            <span className="font-medium text-amber-900">
                              1234567890123
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-amber-700">IFSC Code:</span>
                            <span className="font-medium text-amber-900">
                              SBIN0001234
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(
                              "Udaipur Animal Feed Foundation, Acc No: 1234567890123, IFSC: SBIN0001234"
                            )
                          }
                          className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition-colors"
                        >
                          Copy Account Details
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Why Your Support Matters
              </h2>
              <p className="text-lg text-amber-700 max-w-3xl mx-auto">
                Your generous contribution enables us to continue our vital work
                for Udaipur's street animals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <img
                  src="/public/images/sm1.jpg"
                  alt="Feeding program"
                  className="w-full h-auto max-h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-3">
                    Daily Feeding Program
                  </h3>
                  <p className="text-amber-700">
                    We provide nutritious meals to over 5,200 animals each month
                    across 15 feeding routes in Udaipur.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <img
                  src="/public/images/sm2.jpg"
                  alt="Medical care"
                  className="w-full h-auto max-h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-3">
                    Medical Care & Treatment
                  </h3>
                  <p className="text-amber-700">
                    Our mobile medical unit provides on-the-spot treatment and
                    transportation to our shelter for severe cases.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <img
                  src="/public/images/sm3.jpg"
                  alt="Community education"
                  className="w-full h-auto max-h-72 object-cover "
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-3">
                    Community Education
                  </h3>
                  <p className="text-amber-700">
                    We educate local communities about animal welfare,
                    responsible pet ownership, and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-amber-700 max-w-3xl mx-auto">
                Find answers to common questions about donations and tax
                benefits.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full p-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-semibold text-amber-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-amber-600 transform transition-transform ${
                        activeQuestion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeQuestion === index && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-amber-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - New Addition */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                What Our Supporters Say
              </h2>
              <p className="text-lg text-amber-700 max-w-3xl mx-auto">
                Read about the experiences of those who have supported our
                mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                    RP
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-amber-900">
                      Rajiv Patel
                    </h3>
                    <p className="text-sm text-amber-700">
                      Monthly Donor since 2020
                    </p>
                  </div>
                </div>
                <p className="text-amber-800">
                  "Supporting UAF has been incredibly rewarding. I've witnessed
                  firsthand how my monthly donations translate into real help
                  for street animals. Their transparency about how funds are
                  used gives me confidence in their work."
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                    AS
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-amber-900">
                      Ananya Singh
                    </h3>
                    <p className="text-sm text-amber-700">Corporate Partner</p>
                  </div>
                </div>
                <p className="text-amber-800">
                  "Our company's partnership with Udaipur Animal Feed has been a
                  meaningful way for us to give back to the community. Their
                  team is professional, passionate, and truly dedicated to
                  improving animal welfare."
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                    MD
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-amber-900">Mohan Das</h3>
                    <p className="text-sm text-amber-700">Volunteer & Donor</p>
                  </div>
                </div>
                <p className="text-amber-800">
                  "What started as a small donation has grown into a deep
                  involvement with UAF. The impact they have on street animals
                  with limited resources is truly inspiring. Every rupee donated
                  goes a long way here."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DonationPage;
