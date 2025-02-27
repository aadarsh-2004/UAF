import React, { useState } from "react";

import { Heart, QrCode, Info, Check, Copy } from "lucide-react";

const DonationPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const upiId = "donate@upi";
  const bankDetails = {
    accountName: "Udaipur Animal Feed",
    accountNumber: "1234567890",
    ifsc: "BANK0001234",
    bankName: "XYZ Bank",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-[#181212] text-white py-16">
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url('/api/placeholder/1920/600')` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Heart className="h-16 w-16 mx-auto text-amber-300 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Make a Difference Today
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your donation helps us provide food, shelter, and medical care to
              stray animals in Udaipur. Every contribution, no matter how small,
              makes a meaningful impact.
            </p>
          </div>
        </div>

        {/* Donation Form Section */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Form */}
                <div className="p-6 md:p-8 col-span-3">
                  <h2 className="text-2xl font-bold text-amber-900 mb-6">
                    Your Donation
                  </h2>
                  <div className="flex flex-col space-y-4">
                    {/* UPI Section */}
                    <div className="p-4 border-none rounded-lg flex justify-between items-center bg-amber-100/40">
                      <div>
                        <h3 className="font-semibold text-amber-900">UPI ID</h3>
                        <p className="text-gray-700">{upiId}</p>
                      </div>
                      <button
                        onClick={() => copyToClipboard(upiId)}
                        className="text-amber-700"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>

                    {/* QR Code (Dummy) */}
                    <div className="p-4 border-none rounded-lg bg-amber-100/40 text-center">
                      <h3 className="font-semibold text-amber-900 mb-2">
                        Scan QR Code
                      </h3>
                      <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                        <QrCode className="w-24 h-24 text-amber-700" />
                      </div>
                    </div>

                    {/* Bank Details */}
                    <div className="p-4 border-none rounded-lg bg-amber-100/40">
                      <h3 className="font-semibold text-amber-900">
                        Bank Details
                      </h3>
                      <p className="text-gray-700">{bankDetails.accountName}</p>
                      <p className="text-gray-700">
                        A/C No: {bankDetails.accountNumber}
                      </p>
                      <p className="text-gray-700">IFSC: {bankDetails.ifsc}</p>
                      <p className="text-gray-700">
                        Bank: {bankDetails.bankName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="col-span-2 bg-amber-100/60 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-amber-800 mb-6">
                    Your Impact
                  </h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-gray-700">
                        ₹500 can feed 25 stray animals for a day
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-gray-700">
                        ₹1,000 can provide basic medical care for 5 animals
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-gray-700">
                        ₹2,000 can vaccinate 10 strays against rabies
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                      <p className="text-gray-700">
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
                        <p className="text-sm text-gray-700">
                          Donations to UAF are eligible for tax deduction under
                          Section 80G of the Income Tax Act. You will receive a
                          tax receipt via email after your donation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900 text-white rounded-lg p-4">
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
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Why Your Support Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your generous contribution enables us to continue our vital work
                for Udaipur's street animals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <img
                  src="/api/placeholder/300/200"
                  alt="Feeding program"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Daily Feeding Program
                </h3>
                <p className="text-gray-700">
                  We provide nutritious meals to over 5,200 animals each month
                  across 15 feeding routes in Udaipur.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <img
                  src="/api/placeholder/300/200"
                  alt="Medical care"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Medical Care & Treatment
                </h3>
                <p className="text-gray-700">
                  Our mobile medical unit provides on-the-spot treatment and
                  transportation to our shelter for severe cases.
                </p>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 text-center">
                <img
                  src="/api/placeholder/300/200"
                  alt="Community education"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  Community Education
                </h3>
                <p className="text-gray-700">
                  We educate local communities about animal welfare, responsible
                  pet ownership, and compassion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-amber-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about donations and tax
                benefits.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  Is my donation tax-deductible?
                </h3>
                <p className="text-gray-700">
                  Yes, all donations to Udaipur Animal Feed are eligible for tax
                  deduction under Section 80G of the Income Tax Act. You will
                  receive a tax receipt via email shortly after your donation is
                  processed.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  How is my donation used?
                </h3>
                <p className="text-gray-700">
                  Your donation directly supports our core programs: daily
                  feeding routes, medical care for injured and sick animals,
                  sterilization programs, community education, and shelter
                  operations. We ensure that at least 85% of all donations go
                  directly to animal care.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  Can I donate in memory or honor of someone?
                </h3>
                <p className="text-gray-700">
                  Yes, you can make a tribute donation in memory or honor of a
                  loved one. After selecting your donation amount, you'll have
                  the option to dedicate your gift. We can also send a
                  notification card to a specified recipient.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  What percentage of my donation goes to administrative costs?
                </h3>
                <p className="text-gray-700">
                  We pride ourselves on maintaining low overhead costs.
                  Approximately 85% of all donations go directly to animal care
                  programs, while only 15% is used for administrative and
                  fundraising expenses necessary to sustain our operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Thank You Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
            <Heart className="h-16 w-16 mx-auto text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold text-amber-800 mb-2">
              Thank You for Your Generosity!
            </h3>
            <p className="text-gray-700 mb-6">
              Your donation will make a real difference in the lives of
              Udaipur's street animals. We've sent a confirmation receipt to
              your email.
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
