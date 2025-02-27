import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Heart, PawPrint, Users, Clock, ArrowRight } from "lucide-react";

const StatCard = ({ icon: Icon, count, title, color }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!inView) {
        const element = document.getElementById(title);
        if (element && element.getBoundingClientRect().top < window.innerHeight) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView, title]);

  return (
    <div
      id={title}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
    >
      <div className={`p-4 rounded-full ${color} mb-4`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-4xl font-bold mb-2">
        {inView ? <CountUp end={parseInt(count.replace(/,/g, ""), 10)} duration={2} /> : "0"}+
      </h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

const ImpactSection = () => (
  <section className="py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Our Impact</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Every day, we're making a difference in the lives of Udaipur's street animals. Here's what we've accomplished with your support.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard icon={PawPrint} count="5200" title="Animals Fed Monthly" color="bg-amber-600" />
        <StatCard icon={Heart} count="850" title="Animals Rescued" color="bg-red-500" />
        <StatCard icon={Users} count="120" title="Community Programs" color="bg-blue-500" />
        <StatCard icon={Clock} count="10000" title="Volunteer Hours" color="bg-green-500" />
      </div>
    </div>
  </section>
);

export default ImpactSection;

