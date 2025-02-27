import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9876543210"],
      action: "tel:+919876543210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@udaipuranimalfeed.org", "support@udaipuranimalfeed.org"],
      action: "mailto:info@udaipuranimalfeed.org",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["123 Animal Care Street", "Udaipur, Rajasthan 313001"],
      action: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 2:00 PM",
      ],
      action: null,
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative py-28 bg-amber-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-amber-100">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 mt-16 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-amber-100"
              >
                <div className="text-amber-700 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-amber-800">
                      {detail}
                    </p>
                  ))}
                </div>
                {item.action && (
                  <a
                    href={item.action}
                    className="inline-block mt-4 text-amber-700 hover:text-amber-600 font-medium"
                  >
                    Connect →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Map */}
            <div className="bg-white rounded-lg overflow-hidden h-96 md:h-auto shadow-md border border-amber-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3627.703626360375!2d73.70199207536255!3d24.59942247810055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM1JzU3LjkiTiA3M8KwNDInMTYuNCJF!5e0!3m2!1sen!2sin!4v1739015620043!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Udaipur Animal Feed Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-100">
              <h3 className="text-2xl font-bold mb-6 text-amber-900">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-amber-800 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-600 focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-800 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-600 focus:ring-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-amber-800 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-600 focus:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-600 focus:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-600 focus:ring-0"
                  ></textarea>
                </div>
                <button className="w-full bg-amber-800 text-white py-3 rounded-full font-semibold hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-amber-900">
              Connect With Us
            </h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white rounded-full text-amber-600 hover:text-amber-800 hover:shadow-lg transition-all border border-amber-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
