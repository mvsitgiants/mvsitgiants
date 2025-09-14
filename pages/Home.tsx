
import React from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import VisionSection from '../components/VisionSection';
import SEO from '../components/SEO';
import CodeIcon from '../components/icons/CodeIcon';
import CloudIcon from '../components/icons/CloudIcon';
import DeviceMobileIcon from '../components/icons/DeviceMobileIcon';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import ConnectIcon from '../components/icons/ConnectIcon';
import ExploreIcon from '../components/icons/ExploreIcon';
import PlanIcon from '../components/icons/PlanIcon';
import PersonalizeIcon from '../components/icons/PersonalizeIcon';
import ImplementIcon from '../components/icons/ImplementIcon';
import AssistIcon from '../components/icons/AssistIcon';
import FlagIcon from '../components/icons/FlagIcon';
import DeployIcon from '../components/icons/DeployIcon';
import ChipIcon from '../components/icons/ChipIcon';
import DesignIcon from '../components/icons/DesignIcon';
import CogIcon from '../components/icons/CogIcon';

const Home: React.FC = () => {
  const heroServices = [
    {
      icon: <CodeIcon className="h-8 w-8 text-accent" />,
      title: 'Custom Software',
      description: 'Bespoke solutions for your unique business needs.',
    },
    {
      icon: <DeviceMobileIcon className="h-8 w-8 text-accent" />,
      title: 'Mobile Applications',
      description: 'Engaging iOS and Android apps for users on the go.',
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-accent" />,
      title: 'Cloud & DevOps',
      description: 'Infrastructure automation, CI/CD, and cloud migration.',
    },
    {
      icon: <ChipIcon className="h-8 w-8 text-accent" />,
      title: 'AI & Machine Learning',
      description: 'Unlock the potential of your data with intelligent solutions.',
    },
    {
      icon: <DesignIcon className="h-8 w-8 text-accent" />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually stunning user experiences.',
    },
    {
      icon: <CogIcon className="h-8 w-8 text-accent" />,
      title: 'IT Consulting',
      description: 'Strategic guidance to align technology with business goals.',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'CONNECT',
      description: ['About you', 'About us'],
      icon: <ConnectIcon />,
      color: 'orange',
      position: { top: '25%', left: '10%' }
    },
    {
      number: '2',
      title: 'EXPLORE',
      description: ['Your goals and challenges', 'Questions & answers', 'Website, Marketing, & MIS solutions'],
      icon: <ExploreIcon />,
      color: 'amber',
      position: { top: '2%', left: '42%' }
    },
    {
      number: '3',
      title: 'YOUR PLAN',
      description: ['A personalized marketing and technology strategy focused on your success.'],
      icon: <PlanIcon />,
      color: 'lime',
      position: { top: '25%', right: '10%' }
    },
    {
      number: '4',
      title: 'PERSONALIZE',
      description: ['Helping you tell your story.'],
      icon: <PersonalizeIcon />,
      color: 'teal',
      position: { top: '65%', right: '15%' }
    },
    {
      number: '5',
      title: 'IMPLEMENT',
      description: ['Real-world use', 'Build relationships that lead to opportunities to sell more printing'],
      icon: <ImplementIcon />,
      color: 'cyan',
      position: { top: '80%', left: '42%' }
    },
    {
      number: '6',
      title: 'ASSIST',
      description: ['Friendly NDN support', 'Forward-focused strategy'],
      icon: <AssistIcon />,
      color: 'sky',
      position: { top: '65%', left: '15%' }
    }
  ];
  
  const advantages = [
    {
        icon: <DeployIcon />,
        title: 'Startup Agility, Enterprise Expertise',
        description: 'As a nimble startup, we move fast and adapt quickly. Combined with our deep technical expertise, you get the best of both worlds: innovative solutions delivered with professional precision.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <ChipIcon />,
        title: 'Innovative & Youthful Energy',
        description: 'Our team is composed of bright, passionate, and innovative minds who are experts in the latest technologies, bringing fresh perspectives and creative energy to every project.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <PersonalizeIcon />,
        title: 'Creative & Tailored Solutions',
        description: "We don't believe in one-size-fits-all. We dive deep into your unique challenges to craft custom, creative solutions that are perfectly aligned with your business goals.",
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <ConnectIcon />,
        title: 'An Invaluable Partnership',
        description: "We see ourselves as an extension of your team. Our transparent communication and collaborative approach make us more than just a vendor—we're an invaluable partner in your growth.",
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1740&auto=format&fit=crop'
    }
  ];

  const colorVariants: { [key: string]: { text: string; bg: string; border: string; } } = {
    orange: { text: 'text-orange-600', bg: 'bg-orange-400', border: 'border-orange-400' },
    amber: { text: 'text-amber-600', bg: 'bg-amber-400', border: 'border-amber-400' },
    lime: { text: 'text-lime-600', bg: 'bg-lime-400', border: 'border-lime-400' },
    teal: { text: 'text-teal-600', bg: 'bg-teal-400', border: 'border-teal-400' },
    cyan: { text: 'text-cyan-600', bg: 'bg-cyan-400', border: 'border-cyan-400' },
    sky: { text: 'text-sky-600', bg: 'bg-sky-400', border: 'border-sky-400' },
  };


  // SEO structured data for Home page - Added By Bhushan on 15_01_2025
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MVS IT GIANT",
    "description": "Leading software development company offering custom software development, mobile app development, cloud solutions, AI/ML services, and IT consulting.",
    "url": "https://mvsitgiants.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mvsitgiants.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "logo": "https://mvsitgiants.com/logomvs.png"
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="MVS IT GIANT - Leading Software Development Company | Custom Software, Mobile Apps & IT Solutions"
        description="Transform your business with MVS IT GIANT' innovative software development services. We specialize in custom software development, mobile app development, cloud solutions, AI/ML, and IT consulting. Based in Bangalore, India."
        keywords="software development company, custom software development, mobile app development, web development, cloud solutions, AI machine learning, UI UX design, DevOps, IT consulting, Bangalore software company, digital transformation, enterprise software solutions"
        canonical="https://mvsitgiants.com"
        structuredData={homeStructuredData}
      />
      {/* Hero Section - Added By Bhushan on 15_01_2025 - Fixed navbar overlap issue */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4" style={{ paddingTop: '80px' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')` }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-light"></span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {/* Text Content */}
          <div className="text-center">
            <h1 className="text-primary font-semibold text-4xl md:text-5xl leading-tight">
              MVS IT GIANT: <span className="text-accent">Leading Software Development Company</span>
            </h1>
            <p className="mt-4 text-lg text-hero-text max-w-4xl mx-auto">
              We are a premier software development company specializing in custom software development, mobile app development, cloud solutions, and AI/ML technologies. Our expert team delivers innovative digital solutions that transform businesses and drive growth.
            </p>
          </div>
        
          {/* Scrollable Services */}
          <div className="w-full max-w-7xl mx-auto mt-12 mb-10">
            <div className="flex space-x-4 sm:space-x-6 pb-4 overflow-x-auto no-scrollbar">
              <div className="flex-shrink-0 w-2 sm:w-0"></div>
              {heroServices.map((service, index) => (
                <div key={index} className="flex-shrink-0 w-60 sm:w-64 bg-white/60 backdrop-blur-lg p-6 rounded-xl border border-slate-300/30 shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
              <div className="flex-shrink-0 w-2 sm:w-0"></div>
            </div>
          </div>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-base font-medium rounded-md text-accent bg-transparent hover:bg-accent hover:text-light transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                More About Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-light bg-accent hover:bg-accent/80 transition-transform transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                Start a Project
              </Link>
          </div>
        </div>
      </div>
      
      {/* Your Partner in Digital Transformation Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-10 md:mb-0">
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-full h-full bg-accent/20 rounded-lg transform rotate-[-3deg]"></div>
                        <img
                          alt="Our Commitment"
                          className="w-full align-middle rounded-lg shadow-xl relative"
                          src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop`}
                        />
                    </div>
                </div>
                <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                    <div className="md:pl-12">
                        <h3 className="text-4xl md:text-5xl mb-4 font-extrabold text-primary leading-tight">
                            Your <span className="text-accent">Partner</span> in Digital Transformation
                        </h3>
                        <p className="text-lg leading-relaxed mt-4 mb-8 text-muted">
                            Beyond code, we forge lasting partnerships. Our mission is to deeply understand your vision and apply technical excellence to bring it to life, ensuring a transparent and precise journey from concept to reality.
                        </p>
                        <ul className="list-none space-y-6">
                            <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-7 w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-bold text-primary">User-Centric Design</h4>
                                        <p className="text-muted mt-1">Crafting intuitive and engaging experiences that delight your users.</p>
                                    </div>
                                </div>
                            </li>
                             <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-7 w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-bold text-primary">Clean, Scalable Code</h4>
                                        <p className="text-muted mt-1">Building robust and maintainable solutions that grow with your business.</p>
                                    </div>
                                </div>
                            </li>
                             <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-7 w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-bold text-primary">Transparent Communication</h4>
                                        <p className="text-muted mt-1">Keeping you informed and involved at every stage of the project lifecycle.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Our Proven Process Section */}
      <section className="py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Proven Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted">
              A collaborative journey designed for your success.
            </p>
          </div>

          {/* Desktop Circular Layout */}
          <div className="hidden lg:block relative max-w-5xl mx-auto" style={{ minHeight: '650px' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-1/3">
              <h3 className="text-3xl font-bold text-primary uppercase tracking-wider">Our Process</h3>
            </div>
          
            <div className="absolute" style={{ top: '40%', right: '1%' }}>
              <FlagIcon />
            </div>
            <div className="absolute text-sm text-muted font-semibold tracking-widest" style={{ top: '28%', left: '25%', transform: 'rotate(-40deg)' }}>GUIDANCE</div>
            <div className="absolute text-sm text-muted font-semibold tracking-widest" style={{ bottom: '22%', left: '33%', transform: 'rotate(40deg)' }}>GUIDANCE</div>
            <div className="absolute text-sm text-muted font-semibold tracking-widest" style={{ bottom: '22%', right: '33%', transform: 'rotate(-40deg)' }}>GUIDANCE</div>
            <svg viewBox="0 0 1000 600" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto">
                <path 
                    d="M 250, 300 a 250,180 0 1,0 500,0 a 250,180 0 1,0 -500,0"
                    className="stroke-slate-200" 
                    strokeWidth="30" 
                    fill="none" 
                    transform="rotate(18, 500, 300)"
                />
                <path 
                    d="M 400 180 L 500 180 L 500 140 L 600 205 L 500 270 L 500 230 L 400 230 Z"
                    className="fill-slate-200"
                    transform="rotate(10, 500, 300)"
                />
            </svg>
            {processSteps.map(step => (
              <div key={step.title} className="absolute w-64" style={step.position}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg ${colorVariants[step.color].bg}`}>
                      <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                        {React.cloneElement(step.icon, { className: 'w-8 h-8 text-white' })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${colorVariants[step.color].text}`}>{step.number}. {step.title}</h3>
                    <ul className="text-sm text-muted mt-1 space-y-1">
                      {Array.isArray(step.description) ? step.description.map((d, i) => <li key={i}>&bull; {d}</li>) : <li>&bull; {step.description}</li>}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step) => (
              <div key={step.title} className="flex items-start gap-4 bg-light p-4 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${colorVariants[step.color].bg}`}>
                    {React.cloneElement(step.icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${colorVariants[step.color].text}`}>{step.number}. {step.title}</h3>
                  <div className="text-sm text-muted mt-1 space-y-1">
                     {Array.isArray(step.description) ? step.description.map((d, i) => <p key={i}>{d}</p>) : <p>{step.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
                Why Choose <span className="text-accent">MVS IT GIANT?</span>
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-xl text-muted">
                Your success is our bottom line. Here's what makes us different.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-24">
                {advantages.map((advantage, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-x-12 gap-y-8">
                        <div className={`w-full md:flex-1 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                             <img src={advantage.image} alt={advantage.title} className="rounded-lg shadow-2xl w-full h-auto object-cover" style={{maxHeight: '400px'}} />
                        </div>
                        <div className={`w-full md:flex-1 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary text-accent shadow-lg mr-4 flex-shrink-0">
                                    {React.cloneElement(advantage.icon, { className: "h-7 w-7" })}
                                </div>
                                <h3 className="text-2xl font-bold text-primary">{advantage.title}</h3>
                            </div>
                            <p className="text-muted leading-relaxed text-lg">{advantage.description}</p>
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

export default Home;
