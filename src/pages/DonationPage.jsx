import React, { useState } from "react";
import {
  Heart,
  QrCode,
  Info,
  Check,
  Copy,
  Link,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const DonationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [donationAmount, setDonationAmount] = useState(1000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const upiId = "donate@upi";
  const bankDetails = {
    accountName: "Udaipur Animal Feed",
    accountNumber: "1234567890",
    ifsc: "BANK0001234",
    bankName: "XYZ Bank",
  };

  const donationOptions = [
    { amount: 500, description: "Feed 25 stray animals for a day" },
    { amount: 1000, description: "Provide basic medical care for 5 animals" },
    { amount: 2000, description: "Vaccinate 10 strays against rabies" },
    { amount: 5000, description: "Fund an emergency surgery" },
    { amount: 10000, description: "Support all programs for a week" },
  ];

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

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const toggleFaq = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  const handleDonation = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-amber-800 to-amber-600 text-white py-20">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/1920/600')` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Heart className="h-16 w-16 mx-auto text-amber-300 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Every Gift Makes a Difference
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Your donation helps us provide food, shelter, and medical care to
              stray animals in Udaipur. Every contribution creates a better life
              for animals in need.
            </p>
            <div className="inline-flex items-center justify-center">
              <a
                href="#donate-now"
                className="bg-white text-amber-800 hover:bg-amber-100 font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center"
              >
                Donate Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Donation Form Section */}
        <section id="donate-now" className="py-16 bg-amber-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                Make Your Contribution
              </h2>
              <p className="text-lg text-amber-700 max-w-3xl mx-auto">
                Choose your preferred donation method and amount. Every rupee
                counts towards creating a better life for stray animals.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Form */}
                <div className="p-6 md:p-8 col-span-3">
                  <h3 className="text-xl font-bold text-amber-900 mb-6">
                    Select Donation Amount
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                    {donationOptions.map((option) => (
                      <button
                        key={option.amount}
                        onClick={() => setDonationAmount(option.amount)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          donationAmount === option.amount
                            ? "border-amber-600 bg-amber-50"
                            : "border-gray-200 hover:border-amber-400"
                        }`}
                      >
                        <div className="font-bold text-amber-800">
                          ₹{option.amount}
                        </div>
                        <div className="text-xs text-gray-600">
                          {option.description}
                        </div>
                      </button>
                    ))}
                    <div className="p-3 rounded-lg border-2 border-gray-200 flex flex-col justify-center">
                      <input
                        type="number"
                        placeholder="Custom Amount"
                        value={
                          donationAmount !== 500 &&
                          donationAmount !== 1000 &&
                          donationAmount !== 2000 &&
                          donationAmount !== 5000 &&
                          donationAmount !== 10000
                            ? donationAmount
                            : ""
                        }
                        onChange={(e) =>
                          setDonationAmount(parseInt(e.target.value) || 0)
                        }
                        className="w-full border-b border-gray-200 p-1 focus:outline-none focus:border-amber-600 text-amber-800 font-bold"
                      />
                      <div className="text-xs text-gray-600">Custom amount</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-amber-900 mb-4">
                    Payment Methods
                  </h3>

                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      onClick={() => setPaymentMethod("upi")}
                      className={`py-2 px-4 font-medium ${
                        paymentMethod === "upi"
                          ? "text-amber-800 border-b-2 border-amber-600"
                          : "text-gray-500 hover:text-amber-600"
                      }`}
                    >
                      UPI Payment
                    </button>
                    <button
                      onClick={() => setPaymentMethod("bank")}
                      className={`py-2 px-4 font-medium ${
                        paymentMethod === "bank"
                          ? "text-amber-800 border-b-2 border-amber-600"
                          : "text-gray-500 hover:text-amber-600"
                      }`}
                    >
                      Bank Transfer
                    </button>
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      {/* UPI ID */}
                      <div className="p-4 border border-amber-200 rounded-lg flex justify-between items-center bg-amber-50">
                        <div>
                          <h3 className="font-semibold text-amber-900">
                            UPI ID
                          </h3>
                          <p className="text-amber-800">{upiId}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(upiId, "UPI ID")}
                          className="text-amber-700 hover:text-amber-900 p-2 rounded-full hover:bg-amber-100 transition-colors"
                        >
                          {copiedText === "UPI ID" ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* QR Code */}
                      <div className="p-4 border border-amber-200 rounded-lg bg-amber-50 text-center">
                        <h3 className="font-semibold text-amber-900 mb-3">
                          Scan QR Code to Donate ₹{donationAmount}
                        </h3>
                        <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                          <QrCode className="w-36 h-36 text-amber-800" />
                        </div>
                        <p className="mt-3 text-sm text-amber-700">
                          Scan with any UPI app (GPay, PhonePe, Paytm, etc.)
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="p-4 border border-amber-200 rounded-lg bg-amber-50">
                      <h3 className="font-semibold text-amber-900 mb-3">
                        Bank Transfer Details
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <p className="text-amber-800">Account Name:</p>
                          <div className="flex items-center">
                            <span className="text-amber-800 font-medium mr-2">
                              {bankDetails.accountName}
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  bankDetails.accountName,
                                  "Account Name"
                                )
                              }
                              className="text-amber-700 hover:text-amber-900"
                            >
                              {copiedText === "Account Name" ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-amber-800">Account Number:</p>
                          <div className="flex items-center">
                            <span className="text-amber-800 font-medium mr-2">
                              {bankDetails.accountNumber}
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  bankDetails.accountNumber,
                                  "Account Number"
                                )
                              }
                              className="text-amber-700 hover:text-amber-900"
                            >
                              {copiedText === "Account Number" ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-amber-800">IFSC Code:</p>
                          <div className="flex items-center">
                            <span className="text-amber-800 font-medium mr-2">
                              {bankDetails.ifsc}
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(bankDetails.ifsc, "IFSC Code")
                              }
                              className="text-amber-700 hover:text-amber-900"
                            >
                              {copiedText === "IFSC Code" ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-amber-800">Bank Name:</p>
                          <div className="flex items-center">
                            <span className="text-amber-800 font-medium mr-2">
                              {bankDetails.bankName}
                            </span>
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  bankDetails.bankName,
                                  "Bank Name"
                                )
                              }
                              className="text-amber-700 hover:text-amber-900"
                            >
                              {copiedText === "Bank Name" ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-amber-200">
                        <p className="text-sm text-amber-700">
                          After completing your bank transfer, please email the
                          transaction details to{" "}
                          <span className="font-medium">
                            donate@udaipuranimalfeed.org
                          </span>{" "}
                          to receive your donation receipt.
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleDonation}
                    className="mt-8 w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Complete Donation of ₹{donationAmount}
                  </button>
                </div>

                {/* Sidebar */}
                <div className="col-span-2 bg-amber-100 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-amber-800 mb-6">
                    Your Impact
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-800">
                        ₹500 can feed 25 stray animals for a day
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-amber-800">
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

                  <div className="bg-amber-800 text-white rounded-lg p-4">
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
                  src="/api/placeholder/600/400"
                  alt="Feeding program"
                  className="w-full h-48 object-cover"
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
                  src="/api/placeholder/600/400"
                  alt="Medical care"
                  className="w-full h-48 object-cover"
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
                  src="/api/placeholder/600/400"
                  alt="Community education"
                  className="w-full h-48 object-cover"
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

      {/* Thank You Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
            <Heart className="h-16 w-16 mx-auto text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold text-amber-800 mb-3">
              Thank You for Your Generosity!
            </h3>
            <p className="text-amber-700 mb-6">
              Your donation of ₹{donationAmount} will make a real difference in
              the lives of Udaipur's street animals. We've sent a confirmation
              receipt to your email.
            </p>
            <p className="text-sm text-amber-600 mb-6">
              Transaction ID: UAF-{Math.floor(Math.random() * 900000) + 100000}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
