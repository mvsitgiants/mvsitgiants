
import React from 'react';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import type { Service } from '../types';
import CodeIcon from '../components/icons/CodeIcon';
import DeviceMobileIcon from '../components/icons/DeviceMobileIcon';
import ChipIcon from '../components/icons/ChipIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import DeployIcon from '../components/icons/DeployIcon';
import PencilRulerIcon from '../components/icons/PencilRulerIcon';
import PlanIcon from '../components/icons/PlanIcon';

const services: Service[] = [
  {
    icon: <CodeIcon />,
    title: 'Custom Software Development',
    description: 'We build scalable, robust, and secure web applications tailored to your specific business requirements. From complex enterprise systems to dynamic single-page applications, we deliver excellence with modern tech stacks like React, Node.js, and Python.',
  },
  {
    icon: <DeviceMobileIcon />,
    title: 'Mobile App Development',
    description: 'Capture your audience on the go with our native and cross-platform mobile app development services. We create intuitive, high-performance applications for both iOS and Android that provide a seamless user experience.',
  },
  {
    icon: <DeployIcon />,
    title: 'Cloud Solutions & DevOps',
    description: 'Leverage the power of the cloud with our expert services in architecture, migration, and management on AWS, Azure, and Google Cloud. We implement CI/CD pipelines and DevOps best practices to accelerate your development and deployment cycles.',
  },
  {
    icon: <ChipIcon />,
    title: 'AI & Machine Learning',
    description: 'Unlock the potential of your data with our AI and ML solutions. We specialize in developing predictive models, natural language processing (NLP) systems, and computer vision applications to drive intelligent business decisions.',
  },
  {
    icon: <PencilRulerIcon />,
    title: 'UI/UX Design',
    description: 'Good design is good business. Our UI/UX experts craft visually stunning and user-friendly interfaces that enhance user engagement and satisfaction. We focus on creating intuitive workflows and beautiful aesthetics.',
  },
  {
    icon: <PlanIcon />,
    title: 'IT Consulting & Strategy',
    description: 'Navigate the complexities of the digital landscape with our strategic IT consulting. We help you create a technology roadmap, optimize your IT infrastructure, and make informed decisions to align your technology with your business goals.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-light p-8 text-left shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/30 border border-slate-200/80">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 origin-bottom transform bg-accent transition-transform duration-500 ease-in-out scale-y-0 group-hover:scale-y-100"></div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 inline-block rounded-xl bg-secondary p-4 shadow-sm transition-colors duration-300 group-hover:bg-white">
          {React.cloneElement(service.icon, { className: 'h-10 w-10 text-accent' })}
        </div>
        <h3 className="mb-3 text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-white">{service.title}</h3>
        <p className="flex-grow text-muted transition-colors duration-300 group-hover:text-blue-100">{service.description}</p>
        <a href="#" className="mt-6 font-semibold text-accent transition-all duration-300 group-hover:text-white">
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};


const approachSteps = [
    { title: 'Discovery & Strategy', description: 'We start by understanding your goals and challenges to define a clear roadmap for success.' },
    { title: 'Design & Prototyping', description: 'Our team creates intuitive UI/UX designs and interactive prototypes for your feedback.' },
    { title: 'Development & Testing', description: 'We build your solution using agile methodologies and conduct rigorous testing to ensure quality.' },
    { title: 'Deployment & Support', description: 'We handle the deployment process and provide ongoing support to ensure smooth operation.' }
];

const Services: React.FC = () => {
  // SEO structured data for Services page - Added By Bhushan on 15_01_2025
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Development Services",
    "description": "Comprehensive software development services including custom software development, mobile app development, cloud solutions, AI/ML, UI/UX design, and IT consulting.",
    "provider": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "url": "https://mvsitgiants.com"
    },
    "serviceType": "Software Development",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Solutions & DevOps"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Machine Learning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IT Consulting & Strategy"
          }
        }
      ]
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Software Development Services | Custom Software, Mobile Apps & Cloud Solutions - MVS IT GIANT"
        description="Discover our comprehensive software development services including custom software development, mobile app development, cloud solutions, AI/ML, UI/UX design, and IT consulting. Expert solutions for your business needs."
        keywords="software development services, custom software development, mobile app development, cloud solutions, DevOps, AI machine learning services, UI UX design services, IT consulting, web development services, enterprise software solutions"
        canonical="https://mvsitgiant.com/services"
        structuredData={servicesStructuredData}
      />
      <Hero
        title="Our Services"
        subtitle="Driving innovation and efficiency with our comprehensive suite of technology services."
        backgroundImage={`/asset/ourservicehero.png`}
      />

      <div className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">What We Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
              We offer a wide range of services to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Approach Section */}
      <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mb-10 md:mb-0">
                      <h3 className="text-4xl md:text-5xl mb-4 font-extrabold text-primary leading-tight">
                          Our <span className="text-accent">Approach</span>
                      </h3>
                      <p className="text-lg leading-relaxed mt-4 mb-8 text-muted">
                          We follow a structured and collaborative process to ensure the successful delivery of every project. Our approach is designed to be transparent, efficient, and tailored to your unique needs.
                      </p>
                      <ul className="list-none space-y-6">
                         {approachSteps.map((step, index) => (
                            <li key={index}>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-light text-accent shadow-md">
                                            <CheckCircleIcon className="h-7 w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-bold text-primary">{step.title}</h4>
                                        <p className="text-muted mt-1">{step.description}</p>
                                    </div>
                                </div>
                            </li>
                         ))}
                      </ul>
                  </div>
                   <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                      <div className="relative">
                          <div className="absolute -left-4 -top-4 w-full h-full bg-accent/20 rounded-lg transform rotate-[-3deg]"></div>
                           <img
                            alt="Our Approach"
                            className="w-full align-middle rounded-lg shadow-xl relative"
                            src={`https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop`}
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <CTA />
    </div>
  );
};

export default Services;
