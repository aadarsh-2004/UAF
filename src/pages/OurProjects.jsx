import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';




const ProjectDetailOverlay = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <X size={32} className='bg-white m-3 rounded-lg' />
        </button>

        {/* Project Header with Image */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-[400px] object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
            <h2 className="text-4xl font-bold text-white">{project.title}</h2>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8">
          {/* Description */}
          <p className="text-xl text-gray-700 mb-6">{project.fullDescription}</p>

          {/* Key Highlights */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Key Highlights</h3>
            <ul className="space-y-2 pl-5">
              {project.keyHighlights.map((highlight, index) => (
                <li 
                  key={index} 
                  className="text-gray-700 flex items-start"
                >
                  <span className="mr-3 text-amber-600">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Metrics */}
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Our Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.impact).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-amber-600">{value}</div>
                  <div className="text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery (if available) */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-amber-800 mb-4">Gallery</h3>
              <div className="grid grid-cols-3 gap-4">
                {project.gallery.map((galleryImage, index) => (
                  <img 
                    key={index} 
                    src={galleryImage} 
                    alt={`${project.title} gallery image ${index + 1}`} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

 




const OurProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'rabies-free',
      title: 'Rabies Free Udaipur',
      category: 'health',
      image: '/images/rabies.jpg',
      shortDescription: 'Comprehensive vaccination and awareness program to eliminate rabies and protect both animals and humans.',
      fullDescription: 'Rabies Free Udaipur is a strategic initiative aimed at completely eradicating rabies through systematic vaccination, community education, and targeted street dog population management.',
      keyHighlights: [
        'Vaccinated over 5,000 street dogs',
        '85% reduction in rabies transmission risk',
        '200+ community awareness workshops',
        'City-wide dog population mapping',
        'Collaboration with municipal authorities'
      ],
      impact: {
        animalsHelped: 5000,
        communitiesReached: 50,
        riskReduction: '85%'
      }
    },
    {
      id: 'zero-hunger',
      title: 'Mission Zero Hunger',
      category: 'nutrition',
      image: '/images/hunger.jpg',
      shortDescription: 'Addressing malnutrition through targeted nutrition, supplements, and community feeding programs.',
      fullDescription: 'Mission Zero Hunger tackles the critical issue of malnutrition among street animals through specialized nutritional support, community engagement, and holistic health monitoring.',
      keyHighlights: [
        '500+ animals fed daily',
        'Custom nutritional supplements developed',
        '100+ community volunteers trained',
        'Specialized meal plans for street animals',
        'Comprehensive health tracking'
      ],
      impact: {
        animalsFed: 500,
        volunteersTrained: 100,
        healthImprovementRate: '75%'
      }
    },
    {
      id: 'geev-vani',
      title: 'Project Geev Vani',
      category: 'education',
      image: '/images/jeevani.jpg',
      shortDescription: 'Empowering communities through animal welfare education and transformative storytelling.',
      fullDescription: 'Project Geev Vani is a comprehensive community engagement program that transforms public perception of street animals through education, storytelling, and community empowerment.',
      keyHighlights: [
        '50+ educational institutions engaged',
        '200+ community storytellers network',
        '100,000+ people reached',
        'School and college outreach programs',
        'Digital and media partnership storytelling'
      ],
      impact: {
        institutionsEngaged: 50,
        storytellersNetwork: 200,
        peopleReached: 100000
      }
    },
    // {
    //   id: 'sterilization',
    //   title: 'Humane Population Management',
    //   category: 'population-control',
    //   image: '/images/sterilization.jpg',
    //   shortDescription: 'Comprehensive street animal population control through ethical sterilization and care programs.',
    //   fullDescription: 'Our population management initiative focuses on humane, ethical approaches to controlling street animal populations, ensuring health, reducing suffering, and maintaining ecological balance.',
    //   keyHighlights: [
    //     'Comprehensive sterilization program',
    //     'Veterinary care for street animals',
    //     'Humane population management',
    //     'Collaboration with local authorities',
    //     'Minimal stress animal handling'
    //   ],
    //   impact: {
    //     animalsNeutered: 3000,
    //     populationStabilization: '40%',
    //     veterinaryCareProvided: 5000
    //   }
    // }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-amber-50/40 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Our Compassionate Initiatives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming animal welfare through targeted, innovative, and sustainable programs across Udaipur.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'Health', value: 'health' },
            { label: 'Nutrition', value: 'nutrition' },
            { label: 'Education', value: 'education' },
            { label: 'Population Control', value: 'population-control' }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.shortDescription}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-amber-600 font-medium capitalize">
                    {project.category.replace('-', ' ')} Initiative
                  </span>
                  <button 
                    onClick={() => openProjectDetails(project)}
                    className="text-amber-600 hover:text-amber-700 font-medium flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* ... (previous code remains the same) */}

        {/* Project Detail Overlay */}
        {selectedProject && (
          <ProjectDetailOverlay 
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closeProjectDetails}
          />
        )}
      </div>
    </div>
  );
};

export default OurProjects;