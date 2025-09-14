
import React from 'react';
import Hero from '../components/Hero';
import type { JobOpening } from '../types';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import LocationMarkerIcon from '../components/icons/LocationMarkerIcon';
import ClockIcon from '../components/icons/ClockIcon';

const jobOpenings: JobOpening[] = [
  {
    title: 'Senior Frontend Engineer (React)',
    location: 'Remote',
    type: 'Full-Time',
    description: 'We are looking for an experienced React developer to build and maintain our client-facing applications. You should have a deep understanding of the React ecosystem, TypeScript, and modern frontend development practices.',
  },
  {
    title: 'Cloud DevOps Engineer',
    location: 'Silicon Valley, CA',
    type: 'Full-Time',
    description: 'Join our infrastructure team to design, implement, and manage our cloud environments on AWS. Experience with Terraform, Kubernetes, and CI/CD pipelines is essential.',
  },
  {
    title: 'UX/UI Designer',
    location: 'Remote',
    type: 'Contract',
    description: 'We need a creative and user-focused designer to craft exceptional user experiences for our web and mobile products. A strong portfolio showcasing your design process is required.',
  },
  {
    title: 'Product Manager',
    location: 'Silicon Valley, CA',
    type: 'Full-Time',
    description: 'Lead the vision and roadmap for one of our flagship products. You will work closely with engineering, design, and marketing to deliver features that customers love.',
  },
];

const benefits = [
    { text: 'Competitive Salary & Equity' },
    { text: 'Comprehensive Health Insurance' },
    { text: 'Generous Paid Time Off' },
    { text: 'Flexible Work Hours' },
    { text: 'Remote-First Culture' },
    { text: 'Annual Learning & Development Budget' },
    { text: 'Latest Technology & Tools' },
    { text: 'Regular Team Offsites & Events' },
];


const Careers: React.FC = () => {
  // SEO structured data for Careers page - Added By Bhushan on 15_01_2025
  const careersStructuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Software Development Careers at MVS IT Giants",
    "description": "Join MVS IT Giants and be part of our innovative software development team. We're looking for talented professionals in frontend development, DevOps, UX/UI design, and product management.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "MVS IT Giants",
      "sameAs": "https://mvsitgiants.com"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "addressCountry": "India"
        }
      },
      {
        "@type": "Place",
        "name": "Remote"
      }
    ],
    "employmentType": ["FULL_TIME", "CONTRACT"],
    "workHours": "Flexible",
    "benefits": [
      "Competitive Salary & Equity",
      "Comprehensive Health Insurance",
      "Generous Paid Time Off",
      "Flexible Work Hours",
      "Remote-First Culture",
      "Annual Learning & Development Budget"
    ],
    "datePosted": "2025-01-15",
    "validThrough": "2025-12-31"
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="Careers at MVS IT Giants | Software Development Jobs | Join Our Team"
        description="Join MVS IT Giants and be part of our innovative software development team. Explore exciting career opportunities in frontend development, DevOps, UX/UI design, and product management. Remote and on-site positions available."
        keywords="careers at MVS IT Giants, software development jobs, frontend developer jobs, DevOps engineer jobs, UX UI designer jobs, product manager jobs, technology careers, software company jobs Bangalore, remote software jobs"
        canonical="https://mvsitgiants.com/careers"
        structuredData={careersStructuredData}
      />
      <Hero
        title="Here’s An Opportunity you Can’t Resists"
        subtitle="MVS IT Giants is looking for talented and Passionate people to Join our team."
        backgroundImage={`/asset/careerhero.png`}
      />

      {/* Life at MVS IT Giants Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-extrabold text-primary mb-4 sm:text-4xl lg:text-5xl">Life at MVS IT Giants</h2>
              <p className="text-muted mb-8 text-lg">
                We believe in creating an environment where our team can thrive both personally and professionally. Our culture is built on trust, innovation, and a shared passion for excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1740&auto=format&fit=crop" alt="Team collaborating" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Current Openings</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
              Find your next opportunity and make an impact with us.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-light p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 border border-slate-200/80 group">
                <div className="flex flex-col sm:flex-row justify-between items-start">
                  <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">{job.title}</h3>
                    <div className="flex flex-wrap items-center text-muted mt-2 space-x-4 text-sm">
                        <div className="flex items-center mt-2">
                            <LocationMarkerIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <ClockIcon className="h-4 w-4 mr-1.5 flex-shrink-0" />
                            <span>{job.type}</span>
                        </div>
                    </div>
                     <p className="text-primary mt-4 text-sm leading-relaxed">{job.description}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex-shrink-0 self-start sm:self-center">
                    <a href="#" className="inline-flex items-center bg-transparent text-accent font-bold py-2 px-6 rounded-md border-2 border-accent/50 group-hover:bg-accent group-hover:text-light group-hover:border-accent transition-all duration-300 transform group-hover:scale-105">
                      Apply Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </div>
  );
};

export default Careers;
