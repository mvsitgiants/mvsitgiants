import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import type { Product } from '../types';
import CodeIcon from '../components/icons/CodeIcon';
import CloudIcon from '../components/icons/CloudIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import DatabaseIcon from '../components/icons/DatabaseIcon';
import ServerIcon from '../components/icons/ServerIcon';

const products: Product[] = [
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    name: 'Advanced Restaurant Management Suite',
    category: 'Hospitality Tech',
    description: 'Elevate your dining experience with our end-to-end solution for table reservations, order management, inventory control, and customer loyalty programs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3',
    name: 'Integrated School Management System',
    category: 'EdTech',
    description: 'Empower educators and students with our comprehensive system for admissions, attendance, grade tracking, and parent-teacher communication.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3',
    name: 'Next-Gen POS System',
    category: 'Retail & E-commerce',
    description: 'A powerful and intuitive Point of Sale system that simplifies transactions, manages inventory in real-time, and provides detailed sales analytics to grow your business.',
  },
];

const featuredProduct = {
  image: '/asset/featuredproduct.png',
  name: 'Comprehensive Hospital Management System',
  category: 'Healthcare IT',
  description: 'An all-in-one platform to streamline hospital operations, from patient registration and Electronic Medical Records (EMR) to billing and staff management. Our system is designed to enhance efficiency, reduce errors, and ultimately improve the quality of patient care.',
  features: [
    'Patient Registration & Scheduling',
    'Electronic Medical Records (EMR)',
    'Billing & Insurance Management',
    'Pharmacy & Inventory Control',
    'Staff & Doctor Portal',
    'Advanced Reporting & Analytics'
  ]
};

const techStack = [
    { name: 'Frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS'], icon: <CodeIcon className="h-8 w-8 text-accent"/> },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'Go'], icon: <ServerIcon className="h-8 w-8 text-accent"/> },
    { name: 'Database', technologies: ['PostgreSQL', 'MongoDB', 'Redis'], icon: <DatabaseIcon className="h-8 w-8 text-accent"/> },
    { name: 'Infrastructure', technologies: ['AWS', 'Docker', 'Kubernetes'], icon: <CloudIcon className="h-8 w-8 text-accent"/> },
];

const Products: React.FC = () => {
  // SEO structured data for Products page - Added By Bhushan on 15_01_2025
  const productsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Software Products & Solutions",
    "description": "Comprehensive software products including hospital management system, restaurant management software, school management system, and POS systems.",
    "brand": {
      "@type": "Brand",
      "name": "MVS IT GIANT",
      "alternateName": ["MVS IT Giants", "MVS IT Giant", "MVS"]
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "alternateName": ["MVS IT Giants", "MVS IT Giant", "MVS"]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    },
    "category": "Software",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Hospital Management System",
        "value": "Healthcare IT solution"
      },
      {
        "@type": "PropertyValue",
        "name": "Restaurant Management Software",
        "value": "Hospitality technology"
      },
      {
        "@type": "PropertyValue",
        "name": "School Management System",
        "value": "Educational technology"
      },
      {
        "@type": "PropertyValue",
        "name": "POS System",
        "value": "Retail and e-commerce solution"
      }
    ]
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Software Products & Solutions | MVS IT GIANT | MVS IT Giants | Hospital Management, POS System, School Management"
        description="Explore MVS IT GIANT's (MVS IT Giants) innovative software products including hospital management system, restaurant management software, school management system, and next-gen POS systems. Built with modern technology for optimal performance."
        keywords="MVS IT GIANT, MVS IT Giants, MVS, hospital management system, restaurant management software, school management system, POS system, healthcare IT solutions, educational software, hospitality technology, retail management software, enterprise software products"
        canonical="https://mvsitgiant.com/products"
        structuredData={productsStructuredData}
      />
      <Hero
        title="Our Products"
        subtitle="Powerful, scalable, and intuitive software solutions designed to tackle your biggest business challenges and drive growth."
        backgroundImage={`/asset/producthero.png`}
      />
      
      {/* Featured Product Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Featured Solution</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
                    Leading the charge in digital transformation for healthcare.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img src={featuredProduct.image} alt={featuredProduct.name} className="rounded-lg shadow-2xl object-cover w-full h-auto" />
                </div>
                <div>
                    <p className="font-semibold text-accent mb-2">{featuredProduct.category}</p>
                    <h3 className="text-3xl font-bold text-primary mb-4">{featuredProduct.name}</h3>
                    <p className="text-muted text-lg mb-6">{featuredProduct.description}</p>
                    <h4 className="text-xl font-semibold text-primary mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                        {featuredProduct.features.map((feature, index) => (
                             <li key={index} className="flex items-start">
                                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                <span className="text-muted">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Other Products Section */}
      <div className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Our Suite of Solutions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
              Discover our portfolio of ready-to-deploy products designed for performance and scalability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Technology Stack Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Powered by Modern Technology</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
                    We build our solutions on a foundation of robust, scalable, and cutting-edge technologies.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {techStack.map((stack) => (
                    <div key={stack.name} className="bg-secondary p-8 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            {stack.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">{stack.name}</h3>
                        <ul className="space-y-2">
                           {stack.technologies.map(tech => <li key={tech} className="text-muted">{tech}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Products;