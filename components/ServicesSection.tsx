import React from 'react';
import CodeIcon from './icons/CodeIcon';
import CloudIcon from './icons/CloudIcon';
import DeviceMobileIcon from './icons/DeviceMobileIcon';
import ChipIcon from './icons/ChipIcon';
import DesignIcon from './icons/DesignIcon';
import CogIcon from './icons/CogIcon';

const ServicesSection: React.FC = () => {
  const heroServices = [
    {
      icon: <CodeIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'Custom Software',
      description: 'Bespoke solutions for your unique business needs.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'Database Design'],
      backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <DeviceMobileIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'Mobile Applications',
      description: 'Engaging iOS and Android apps for users on the go.',
      features: ['Native iOS Apps', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      backgroundImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop'
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'Cloud & DevOps',
      description: 'Infrastructure automation, CI/CD, and cloud migration.',
      features: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code'],
      backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop'
    },
    {
      icon: <ChipIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'AI & Machine Learning',
      description: 'Unlock the potential of your data with intelligent solutions.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      backgroundImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      icon: <DesignIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      backgroundImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2064&auto=format&fit=crop'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-white group-hover:text-blue-900 transition-colors duration-500" />,
      title: 'IT Consulting',
      description: 'Strategic guidance to align technology with business goals.',
      features: ['Technology Strategy', 'Digital Transformation', 'System Architecture', 'Process Optimization'],
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      hoverBackgroundImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop'
    },
  ];

  return (
    <div className="w-full mt-8 sm:mt-12 mb-8 sm:mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {heroServices.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-4 sm:p-6 rounded-xl border border-slate-300/30 shadow-lg text-left transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden min-h-[380px] sm:min-h-[420px]"
            style={{
              backgroundImage: `url(${service.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Default overlay */}
            <div className="absolute inset-0 bg-blue-600/70 transition-opacity duration-500 group-hover:opacity-0"></div>
            
            {/* Hover overlay with different background */}
            <div 
              className="absolute inset-0 bg-blue-600/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${service.hoverBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-3 sm:mb-4">
                {React.cloneElement(service.icon, { className: "h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-blue-900 transition-colors duration-500" })}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-900 transition-colors duration-500 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-white/90 group-hover:text-blue-900/90 transition-colors duration-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
              
              {/* Features List */}
              <div className="mt-auto">
                <h4 className="text-white group-hover:text-blue-900 transition-colors duration-500 font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-white/80 group-hover:text-blue-900/80 transition-colors duration-500 text-xs flex items-center">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/60 group-hover:bg-blue-900/60 rounded-full mr-1.5 sm:mr-2 flex-shrink-0 transition-colors duration-500"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
