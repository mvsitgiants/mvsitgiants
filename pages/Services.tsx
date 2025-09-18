
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
import CloudIcon from '../components/icons/CloudIcon';
import DesignIcon from '../components/icons/DesignIcon';
import CogIcon from '../components/icons/CogIcon';
import ServicesSection from '../components/ServicesSection';



const approachSteps = [
    { 
        title: 'Discovery & Strategy', 
        description: 'We start by understanding your goals and challenges to define a clear roadmap for success.',
        icon: <PlanIcon className="h-6 w-6" />
    },
    { 
        title: 'Design & Prototyping', 
        description: 'Our team creates intuitive UI/UX designs and interactive prototypes for your feedback.',
        icon: <PencilRulerIcon className="h-6 w-6" />
    },
    { 
        title: 'Development & Testing', 
        description: 'We build your solution using agile methodologies and conduct rigorous testing to ensure quality.',
        icon: <CodeIcon className="h-6 w-6" />
    },
    { 
        title: 'Deployment & Support', 
        description: 'We handle the deployment process and provide ongoing support to ensure smooth operation.',
        icon: <DeployIcon className="h-6 w-6" />
    }
];

const technologies = [
    // Frontend Technologies
    { name: 'React & Next.js', category: 'Frontend', color: 'bg-blue-500', icon: '⚛️' },
    { name: 'React Native', category: 'Mobile', color: 'bg-cyan-500', icon: '📱' },
    { name: 'Vue.js & Nuxt.js', category: 'Frontend', color: 'bg-green-500', icon: '💚' },
    { name: 'Angular & TypeScript', category: 'Frontend', color: 'bg-red-500', icon: '🅰️' },
    { name: 'Flutter & Dart', category: 'Mobile', color: 'bg-blue-400', icon: '📱' },
    
    // Backend Technologies
    { name: 'Spring Boot & Java', category: 'Backend', color: 'bg-green-600', icon: '☕' },
    { name: 'Node.js & Express', category: 'Backend', color: 'bg-green-700', icon: '🟢' },
    { name: 'Python & Django', category: 'Backend', color: 'bg-yellow-500', icon: '🐍' },
    { name: '.NET & C#', category: 'Backend', color: 'bg-purple-600', icon: '🔷' },
    { name: 'Go & Gin', category: 'Backend', color: 'bg-cyan-500', icon: '🐹' },
    
    // Cloud & DevOps
    { name: 'AWS & Azure', category: 'Cloud', color: 'bg-orange-500', icon: '☁️' },
    { name: 'Docker & Kubernetes', category: 'DevOps', color: 'bg-blue-600', icon: '🐳' },
    { name: 'Jenkins & GitLab CI', category: 'DevOps', color: 'bg-red-600', icon: '🔧' },
    { name: 'Terraform & Ansible', category: 'DevOps', color: 'bg-purple-700', icon: '🏗️' },
    
    // Database Technologies
    { name: 'MongoDB & PostgreSQL', category: 'Database', color: 'bg-green-800', icon: '🗄️' },
    { name: 'Redis & Elasticsearch', category: 'Database', color: 'bg-red-700', icon: '🔍' },
    { name: 'MySQL & SQLite', category: 'Database', color: 'bg-blue-700', icon: '🗃️' },
    
    // AI/ML Technologies
    { name: 'TensorFlow & PyTorch', category: 'AI/ML', color: 'bg-orange-600', icon: '🤖' },
    { name: 'OpenAI & LangChain', category: 'AI/ML', color: 'bg-purple-500', icon: '🧠' },
    { name: 'Scikit-learn & Pandas', category: 'AI/ML', color: 'bg-yellow-600', icon: '📊' },
    
    // Design & Tools
    { name: 'Figma & Adobe XD', category: 'Design', color: 'bg-pink-500', icon: '🎨' },
    { name: 'Sketch & InVision', category: 'Design', color: 'bg-yellow-400', icon: '✏️' },
    { name: 'Git & GitHub', category: 'Tools', color: 'bg-gray-700', icon: '📝' }
];

const testimonials = [
    {
        quote: "MVS IT GIANT transformed our business with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
        author: "Sarah Johnson",
        role: "CEO, TechCorp",
        rating: 5
    },
    {
        quote: "The mobile app they developed for us has been a game-changer. User engagement increased by 300% within the first month.",
        author: "Michael Chen",
        role: "CTO, StartupXYZ",
        rating: 5
    },
    {
        quote: "Their cloud migration services helped us reduce costs by 40% while improving performance. Highly recommended!",
        author: "Emily Rodriguez",
        role: "IT Director, Enterprise Inc",
        rating: 5
    }
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
      "alternateName": ["MVS IT Giants", "MVS IT Giant", "MVS"],
      "url": "https://mvsitgiant.com"
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
        title="Software Development Services | MVS IT GIANT | MVS IT Giants | Custom Software, Mobile Apps & Cloud Solutions"
        description="Transform your business with MVS IT GIANT's (MVS IT Giants) comprehensive software development services. We offer custom software development, mobile app development, cloud solutions, AI/ML, UI/UX design, and IT consulting. Get expert solutions tailored to your business needs with proven expertise and agile methodology."
        keywords="MVS IT GIANT, MVS IT Giants, MVS, software development services, custom software development, mobile app development, cloud solutions, DevOps, AI machine learning services, UI UX design services, IT consulting, web development services, enterprise software solutions, React development, Node.js development, AWS cloud services, mobile app design, digital transformation, technology consulting"
        canonical="https://mvsitgiant.com/services"
        structuredData={servicesStructuredData}
      />
      <Hero
        title="Our Services"
        subtitle="Driving innovation and efficiency with our comprehensive suite of technology services."
        backgroundImage={`/asset/ourservicehero.png`}
      />

      {/* Services Overview Section */}
      <div className="py-12 sm:py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">What We Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
              We offer a comprehensive suite of technology services designed to drive innovation and efficiency for your business.
            </p>
          </div>
        </div>
        <ServicesSection />
      </div>

      {/* Technologies & Tools Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">Technologies & Tools</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
              We leverage cutting-edge technologies and industry-leading tools to deliver exceptional results.
            </p>
          </div>
          
          {/* All technologies in one grid with differentiated tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${tech.color}`}></div>
                
                {/* Icon */}
                <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                
                {/* Technology name */}
                <div className="text-xs sm:text-sm font-semibold text-primary group-hover:text-gray-800 transition-colors duration-300 mb-2">
                  {tech.name}
                </div>
                
                {/* Differentiated category tag */}
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${tech.color} text-white shadow-sm`}>
                    {tech.category}
                  </span>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-gray-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">Why Choose MVS IT GIANT?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Proven Expertise</h3>
              <p className="text-muted">Years of experience delivering successful projects across various industries and technologies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CogIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Agile Methodology</h3>
              <p className="text-muted">We follow agile development practices to ensure timely delivery and continuous improvement.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Scalable Solutions</h3>
              <p className="text-muted">Our solutions are built to grow with your business and adapt to changing requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="w-full lg:w-6/12 order-2 lg:order-1">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold text-primary leading-tight">
                          Our <span className="text-accent">Approach</span>
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 mb-6 sm:mb-8 text-muted">
                          We follow a structured and collaborative process to ensure the successful delivery of every project. Our approach is designed to be transparent, efficient, and tailored to your unique needs.
                      </p>
                      <ul className="list-none space-y-4 sm:space-y-6">
                         {approachSteps.map((step, index) => (
                            <li key={index}>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-light text-accent shadow-md">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-lg sm:text-xl font-bold text-primary">{step.title}</h4>
                                        <p className="text-sm sm:text-base text-muted mt-1">{step.description}</p>
                                    </div>
                                </div>
                            </li>
                         ))}
                      </ul>
                  </div>
                   <div className="w-full lg:w-5/12 order-1 lg:order-2">
                      <div className="relative">
                          <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-full h-full bg-accent/20 rounded-lg transform rotate-[-3deg]"></div>
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
