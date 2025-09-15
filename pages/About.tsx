
import React from 'react';
import Hero from '../components/Hero';
import TeamMemberCard from '../components/TeamMember';
import type { TeamMember } from '../types';
import CTA from '../components/CTA';
import SEO from '../components/SEO';
import CodeIcon from '../components/icons/CodeIcon';
import UserCheckIcon from '../components/icons/UserCheckIcon';
import ConnectIcon from '../components/icons/ConnectIcon';
import VisionSection from '../components/VisionSection';


const teamMembers: TeamMember[] = [
  {
    photo: '/asset/uday.jpeg',
    name: 'Uday M',
    role: 'Co-founder & CEO',
    bio: 'A visionary leader with a passion for building scalable technology and fostering a culture of innovation.',
    email: 'ubmishra@gmail.com',
    phone: '+91-9792540100',
    linkedin: '#',
    twitter: '#',
  },
  {
    photo: '/asset/shashank.jpeg',
    name: 'Shashank M',
    role: 'Co-founder & Marketing CEO',
    bio: 'The strategic force driving our brand, connecting our innovative solutions with the businesses that need them most.',
    email: 'Shashankm793@gmail.com',
    phone: '+91-7668747899',
    linkedin: '#',
    twitter: '#',
  },
];

const values = [
    { icon: <CodeIcon className="h-8 w-8" />, title: 'Innovation', description: 'We constantly explore new technologies and ideas to deliver cutting-edge solutions.'},
    { icon: <UserCheckIcon className="h-8 w-8" />, title: 'Customer-Centric', description: 'Our clients are at the heart of everything we do. Their success is our success.'},
    { icon: <ConnectIcon className="h-8 w-8" />, title: 'Collaboration', description: 'We believe the best results come from working together, both internally and with our clients.'},
];

const About: React.FC = () => {
  // SEO structured data for About page - Added By Bhushan on 15_01_2025
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MVS IT GIANT",
    "description": "Learn about MVS IT GIANT, a leading software development company founded in 2022. Discover our story, values, and the passionate team behind our innovative technology solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "foundingDate": "2020",
      "description": "A collective of thinkers, creators, and innovators passionate about technology and delivering exceptional software solutions.",
      "founder": [
        {
          "@type": "Person",
          "name": "Uday M",
          "jobTitle": "Co-founder & CEO"
        },
        {
          "@type": "Person",
          "name": "Shashank M",
          "jobTitle": "Co-founder & Marketing CEO"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="About MVS IT GIANT | Leading Software Development Company | Our Story & Team"
        description="Learn about MVS IT GIANT, a premier software development company founded in 2020. Discover our story, core values, and the passionate team behind our innovative technology solutions and digital transformation services."
        keywords="about MVS IT GIANT, software development company story, technology company Bangalore, software development team, company values, digital transformation experts, innovative software solutions, technology leadership"
        canonical="https://mvsitgiants.com/about"
        structuredData={aboutStructuredData}
      />
      <Hero
        title="About MVS IT GIANT"
        subtitle="We are a collective of thinkers, creators, and innovators passionate about technology."
        backgroundImage={`/asset/aboutushero.png`}
      />

      {/* Our Story Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-extrabold text-primary mb-4 sm:text-4xl lg:text-5xl">Our Story</h2>
              <p className="text-muted mb-4 text-lg">
                Founded in 2020, MVS IT GIANT was born from a shared vision: to create a software company that not only delivered technically excellent products but also fostered true partnerships with its clients. We saw a gap between what businesses needed and what traditional development shops offered.
              </p>
              <p className="text-muted text-lg">
                We set out to bridge that gap by combining deep technical expertise with a collaborative, transparent approach. Today, we are proud to have helped dozens of startups and enterprises launch successful digital products and transform their operations.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/asset/aboutuscompany.png" alt="Our Team" className=" bg-light" />
            </div>
          </div>
        </div>
      </section>

   <VisionSection />
      {/* Our Values Section */}
      <section className="py-24 bg-light">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
                    The principles that guide our work and our relationships.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center">
                {values.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-accent shadow-lg mb-6">
                            {value.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">{value.title}</h3>
                        <p className="text-muted">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">The brilliant minds guiding our company forward.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default About;