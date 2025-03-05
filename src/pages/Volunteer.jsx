import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Award,
  Heart,
  Users,
  MapPin,
  FileText,
  Check,
  Zap,
  X,
} from "lucide-react";
import VolunteerShowcase from "../components/VolunteerShowcase";

const VolunteerPage = () => {
  const [showFAQ, setShowFAQ] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Animal Care Assistant",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const toggleFAQ = (index) => {
    if (showFAQ === index) {
      setShowFAQ(null);
    } else {
      setShowFAQ(index);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Reset form data when closing
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "Animal Care Assistant",
      message: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare WhatsApp message
      const message = `New Volunteer Application:
  Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Interest: ${formData.interest}
  Message: ${formData.message}`;

      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(message);

      // Replace with your organization's WhatsApp number
      const whatsappNumber = "916367139345"; // Format: country code + number

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappURL, "_blank");

      // Close the modal
      handleCloseModal();
    }
  };

  const volunteerRoles = [
    {
      title: "Animal Care Assistant",
      commitment: "4-6 hours/week",
      description: "Help feed, groom, and socialize our rescued animals.",
      icon: <Heart className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Event Coordinator",
      commitment: "5-8 hours/week",
      description: "Plan and organize adoption events and fundraisers.",
      icon: <Calendar className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Community Outreach",
      commitment: "3-5 hours/week",
      description:
        "Spread awareness through education programs and social media.",
      icon: <Users className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Transport Volunteer",
      commitment: "2-4 hours/week",
      description:
        "Help transport animals to vet appointments or adoption events.",
      icon: <MapPin className="w-8 h-8 text-amber-600" />,
    },
  ];

  const faqs = [
    {
      question: "Do I need prior experience to volunteer?",
      answer:
        "No prior experience is necessary for most volunteer positions. We provide all the training you need. Your enthusiasm and commitment are what matter most!",
    },
    {
      question: "Is there a minimum age requirement to volunteer?",
      answer:
        "Volunteers must be at least 16 years of age. Those under 18 require parental consent. We also have special family volunteer days where children of all ages can participate alongside their parents.",
    },
    {
      question: "Can I volunteer if I can only commit to a few hours a month?",
      answer:
        "Absolutely! While some roles require regular commitment, we have many opportunities for those with limited availability, such as helping at one-time events or joining our emergency response team.",
    },
    {
      question: "Will I receive training as a volunteer?",
      answer:
        "Yes, all volunteers receive comprehensive training specific to their roles. We ensure you have all the knowledge and skills needed to work effectively and safely with our animals.",
    },
  ];

  return (
    <div className="bg-amber-50/5 min-h-screen">
      {/* Hero Section */}
      
      <section className="relative py-20 text-white h-[619px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/volheadimg.jpg')",
            filter: "brightness(0.5)",
          }}
        ></div>

        {/* Amber Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-amber-950 opacity-20 z-1"></div>

        {/* Content Container */}
        <div className="container mx-auto px-6 text-center top-24 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Join Our Volunteer Family
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Make a difference in the lives of animals while gaining valuable
            experience and connections.
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-white text-amber-950 hover:bg-amber-100 py-3 px-8 rounded-full font-semibold transition-colors shadow-lg"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-4">
            Why Volunteer With Us?
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Volunteering with our organization offers meaningful experiences and
            tangible benefits for your personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="mb-4 flex justify-center">
              <Award className="w-16 h-16 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-amber-950 mb-3">
              Recognition & Certification
            </h3>
            <ul className="text-amber-700 text-left">
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Official volunteer certificates documenting your hours and
                  contributions
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Letters of recommendation for academic or job applications
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Recognition in our monthly newsletter and annual report
                </span>
              </li>
              <li className="flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>Annual volunteer appreciation events and awards</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FileText className="w-16 h-16 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-amber-950 mb-3">
              Professional Development
            </h3>
            <ul className="text-amber-700 text-left">
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Skill-building workshops in animal care, public speaking, and
                  event management
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Networking opportunities with professionals in veterinary and
                  nonprofit fields
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>Leadership opportunities as you gain experience</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Internship possibilities for students and recent graduates
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <Zap className="w-16 h-16 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-amber-950 mb-3">
              Personal Benefits
            </h3>
            <ul className="text-amber-700 text-left">
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>Fulfilling experience helping animals in need</span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Community service hours for school or scholarship requirements
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>Exclusive volunteer merchandise and discounts</span>
              </li>
              <li className="flex items-start">
                <Check
                  size={18}
                  className="text-amber-600 mr-2 mt-1 flex-shrink-0"
                />
                <span>
                  Regular social events to connect with like-minded animal
                  lovers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-950 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-amber-700 max-w-3xl mx-auto">
              We offer a variety of roles to match your interests, skills, and
              availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{role.icon}</div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">
                  {role.title}
                </h3>
                <div className="flex items-center mb-3 text-amber-700">
                  <Clock size={16} className="mr-2" />
                  <span>{role.commitment}</span>
                </div>
                <p className="text-amber-700">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become a Volunteer */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-4">
            How to Become a Volunteer
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Our simple 5-step process will get you started on your volunteer
            journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              step: 1,
              title: "Complete the Application",
              description:
                "Fill out our online volunteer application form. Tell us about your interests, skills, and availability.",
              icon: <FileText className="w-12 h-12 text-white" />,
            },
            {
              step: 2,
              title: "Attend an Orientation",
              description:
                "Join a virtual or in-person orientation session to learn about our mission, values, and volunteer policies.",
              icon: <Users className="w-12 h-12 text-white" />,
            },
            {
              step: 3,
              title: "Complete Required Training",
              description:
                "Participate in role-specific training sessions to ensure you're prepared for your volunteer duties.",
              icon: <Award className="w-12 h-12 text-white" />,
            },
            {
              step: 4,
              title: "Shadow Experienced Volunteers",
              description:
                "Work alongside seasoned volunteers to gain hands-on experience and confidence in your role.",
              icon: <Heart className="w-12 h-12 text-white" />,
            },
            {
              step: 5,
              title: "Begin Your Volunteer Journey",
              description:
                "Start making a difference! We'll regularly check in with you and provide ongoing support and training.",
              icon: <Zap className="w-12 h-12 text-white" />,
            },
          ].map((step, index) => (
            <div key={index} className="flex mb-8 relative">
              <div className="mr-6">
                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                {index < 4 && (
                  <div
                    className="absolute left-8 top-16 h-full w-0.5 bg-amber-300"
                    style={{ height: "calc(100% - 4rem)" }}
                  ></div>
                )}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-semibold text-amber-950 mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-amber-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleOpenModal}
            className="bg-amber-900 hover:bg-amber-950 text-white py-3 px-8 rounded-full font-semibold transition-colors"
          >
            Start Your Application Today
          </button>
        </div>
      </section>

      <VolunteerShowcase />
      {/* FAQs */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-950 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            Find answers to common questions about our volunteer program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
              >
                <span className="font-semibold text-amber-950">
                  {faq.question}
                </span>
                <span className="text-amber-600 text-xl">
                  {showFAQ === index ? "−" : "+"}
                </span>
              </button>
              {showFAQ === index && (
                <div className="bg-amber-50 p-4 rounded-b-lg border-t border-amber-100">
                  <p className="text-amber-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-amber-950">
                Volunteer Application
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-amber-800 font-medium mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-amber-200 focus:ring-amber-200"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-amber-800 font-medium mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-amber-200 focus:ring-amber-200"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-amber-800 font-medium mb-1"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-amber-200 focus:ring-amber-200"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="interest"
                  className="block text-amber-800 font-medium mb-1"
                >
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
                >
                  <option value="Animal Care Assistant">
                    Animal Care Assistant
                  </option>
                  <option value="Event Coordinator">Event Coordinator</option>
                  <option value="Community Outreach">Community Outreach</option>
                  <option value="Transport Volunteer">
                    Transport Volunteer
                  </option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-amber-800 font-medium mb-1"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="Tell us a bit about yourself and why you'd like to volunteer"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-amber-200 text-amber-800 rounded-lg hover:bg-amber-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-800 text-white rounded-lg hover:bg-amber-950"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerPage;
