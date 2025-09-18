
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import VisionSection from '../components/VisionSection';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';
import { AnalyticsService } from '../services/analyticsService';
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

const Home: React.FC = () => {
  // Track page view on component mount
  useEffect(() => {
    AnalyticsService.trackPageView('home', 'MVS IT GIANT - Leading Software Development Company');
  }, []);

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
        additionalContent: [
            'Rapid prototyping and iterative development cycles',
            'Enterprise-grade security and scalability standards',
            'Agile methodologies with proven industry practices',
            '24/7 support and maintenance services'
        ],
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <ChipIcon />,
        title: 'Innovative & Youthful Energy',
        description: 'Our team is composed of bright, passionate, and innovative minds who are experts in the latest technologies, bringing fresh perspectives and creative energy to every project.',
        additionalContent: [
            'Cutting-edge AI/ML and cloud technologies',
            'Modern frameworks and development tools',
            'Continuous learning and skill development',
            'Creative problem-solving approaches'
        ],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <PersonalizeIcon />,
        title: 'Creative & Tailored Solutions',
        description: "We don't believe in one-size-fits-all. We dive deep into your unique challenges to craft custom, creative solutions that are perfectly aligned with your business goals.",
        additionalContent: [
            'Comprehensive requirement analysis and planning',
            'Custom UI/UX design tailored to your brand',
            'Scalable architecture for future growth',
            'Integration with existing systems and workflows'
        ],
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1740&auto=format&fit=crop'
    },
    {
        icon: <ConnectIcon />,
        title: 'An Invaluable Partnership',
        description: "We see ourselves as an extension of your team. Our transparent communication and collaborative approach make us more than just a vendor—we're an invaluable partner in your growth.",
        additionalContent: [
            'Regular progress updates and milestone reviews',
            'Dedicated project managers and technical leads',
            'Long-term strategic technology planning',
            'Training and knowledge transfer sessions'
        ],
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
    "alternateName": ["MVS IT Giants", "MVS IT Giant", "MVS"],
    "description": "Leading software development company offering custom software development, mobile app development, cloud solutions, AI/ML services, and IT consulting.",
    "url": "https://mvsitgiant.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mvsitgiant.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MVS IT GIANT",
      "logo": "https://mvsitgiant.com/logomvs.png"
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MVS IT GIANT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MVS IT GIANT (also known as MVS IT Giants) is a leading software development company specializing in custom software development, mobile app development, cloud solutions, and AI/ML technologies. We help businesses transform digitally with innovative technology solutions."
          }
        },
        {
          "@type": "Question",
          "name": "What services does MVS IT GIANT offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MVS IT GIANT offers comprehensive software development services including custom software development, mobile app development, web development, cloud solutions, AI/ML services, UI/UX design, DevOps, and IT consulting. We serve clients worldwide from our base in Bangalore, India."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose MVS IT GIANT for software development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MVS IT GIANT combines startup agility with enterprise expertise. Our team of innovative developers uses cutting-edge technologies to deliver scalable, secure, and user-friendly software solutions. We follow agile methodologies and provide transparent communication throughout the development process."
          }
        }
      ]
    }
  };

  return (
    <div className="animate-fadeIn">
      <SEO
        title="MVS IT GIANT - Leading Software Development Company | MVS IT Giants | Custom Software, Mobile Apps & IT Solutions"
        description="Transform your business with MVS IT GIANT (MVS IT Giants) innovative software development services. We specialize in custom software development, mobile app development, cloud solutions, AI/ML, and IT consulting. Based in Bangalore, India."
        keywords="MVS, MVS IT GIANT, MVS IT Giants, MVS IT Giant, software development company, custom software development, mobile app development, web development, cloud solutions, AI machine learning, UI UX design, DevOps, IT consulting, Bangalore software company, digital transformation, enterprise software solutions"
        canonical="https://mvsitgiant.com"
        structuredData={homeStructuredData}
      />
      {/* Hero Section - Enhanced Mobile Responsiveness */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')` }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-70 bg-light"></span>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-primary font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
              MVS IT GIANT: <span className="text-accent block sm:inline">Leading Software Development Company</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-hero-text max-w-4xl mx-auto leading-relaxed">
              MVS IT GIANT (also known as MVS IT Giants) is a premier software development company specializing in custom software development, mobile app development, cloud solutions, and AI/ML technologies. Our expert team delivers innovative digital solutions that transform businesses and drive growth.
            </p>
          </div>
        
          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 w-full max-w-md sm:max-w-none px-4 sm:px-0 pb-6 sm:pb-0">
              <Link
                to="/services"
                aria-label="Learn more about our services"
                onClick={() => AnalyticsService.trackCustomEvent('cta_clicked', { cta_type: 'services', location: 'hero' })}
                className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 border-2 border-accent text-sm sm:text-base md:text-lg font-semibold md:font-bold rounded-full text-accent bg-transparent hover:bg-accent hover:text-light transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-light w-full sm:w-auto min-h-[48px]"
              >
                More About Services
              </Link>
              <Link
                to="/contact"
                aria-label="Start a project with MVS IT GIANT"
                onClick={() => AnalyticsService.trackCustomEvent('cta_clicked', { cta_type: 'contact', location: 'hero' })}
                className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 border border-transparent text-sm sm:text-base md:text-lg font-semibold md:font-bold rounded-full text-light bg-accent hover:bg-accent/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-light w-full sm:w-auto min-h-[48px]"
              >
                Start a Project
              </Link>
          </div>
        </div>
      </div>
      
      {/* Your Partner in Digital Transformation Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-5/12 order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-full h-full bg-accent/20 rounded-lg transform rotate-[-3deg]"></div>
                        <img
                          alt="Our Commitment"
                          className="w-full align-middle rounded-lg shadow-xl relative"
                          src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop`}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 order-1 lg:order-2">
                    <div className="lg:pl-8 xl:pl-12">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-extrabold text-primary leading-tight">
                            Your <span className="text-accent">Partner</span> in Digital Transformation
                        </h3>
                        <p className="text-base sm:text-lg leading-relaxed mt-4 mb-6 sm:mb-8 text-muted">
                            Beyond code, we forge lasting partnerships. Our mission is to deeply understand your vision and apply technical excellence to bring it to life, ensuring a transparent and precise journey from concept to reality.
                        </p>
                        <ul className="list-none space-y-4 sm:space-y-6">
                            <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-5 w-5 sm:h-7 sm:w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-lg sm:text-xl font-bold text-primary">User-Centric Design</h4>
                                        <p className="text-sm sm:text-base text-muted mt-1">Crafting intuitive and engaging experiences that delight your users.</p>
                                    </div>
                                </div>
                            </li>
                             <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-5 w-5 sm:h-7 sm:w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-lg sm:text-xl font-bold text-primary">Clean, Scalable Code</h4>
                                        <p className="text-sm sm:text-base text-muted mt-1">Building robust and maintainable solutions that grow with your business.</p>
                                    </div>
                                </div>
                            </li>
                             <li>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary text-accent shadow-md">
                                            <CheckCircleIcon className="h-5 w-5 sm:h-7 sm:w-7"/>
                                        </div>
                                    </div>
                                    <div className="ml-3 sm:ml-4">
                                        <h4 className="text-lg sm:text-xl font-bold text-primary">Transparent Communication</h4>
                                        <p className="text-sm sm:text-base text-muted mt-1">Keeping you informed and involved at every stage of the project lifecycle.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
 {/* Services Section */}
 <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16 md:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">Our Services</h2>
      <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
        We offer a wide range of services to meet the diverse needs of our clients.
      </p>
    </div>
  </div>
  <ServicesSection />
 </section>
      {/* Vision Section */}
      <VisionSection />

      {/* Our Proven Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary">Our Proven Process</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted">
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
          <div className="lg:hidden space-y-4 sm:space-y-6">
            {processSteps.map((step) => (
              <div key={step.title} className="flex items-start gap-3 sm:gap-4 bg-light p-4 sm:p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${colorVariants[step.color].bg}`}>
                    {React.cloneElement(step.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8 text-white' })}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-base sm:text-lg font-bold ${colorVariants[step.color].text}`}>{step.number}. {step.title}</h3>
                  <div className="text-xs sm:text-sm text-muted mt-1 space-y-1">
                     {Array.isArray(step.description) ? step.description.map((d, i) => <p key={i}>{d}</p>) : <p>{step.description}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
                Why Choose <span className="text-accent">MVS IT GIANT?</span>
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted">
                Your success is our bottom line. Here's what makes us different.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
                {advantages.map((advantage, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
                        <div className={`w-full lg:flex-1 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                             <img src={advantage.image} alt={advantage.title} className={`w-full h-full object-cover ${index % 2 !== 0 ? 'rounded-tr-3xl lg:rounded-tr-5xl' : 'rounded-tl-3xl lg:rounded-tl-5xl'}`} style={{aspectRatio: '1/1', maxHeight: '300px', boxShadow: '0 25px 50px -12px rgba(7, 45, 148, 0.66)'}} />
                        </div>
                        <div className={`w-full lg:flex-1 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                            <div className="flex items-start mb-4">
                                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-secondary text-accent shadow-lg mr-3 sm:mr-4 flex-shrink-0">
                                    {React.cloneElement(advantage.icon, { className: "h-5 w-5 sm:h-7 sm:w-7" })}
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{advantage.title}</h3>
                            </div>
                            <p className="text-muted leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">{advantage.description}</p>
                            <ul className="space-y-2 sm:space-y-3">
                                {advantage.additionalContent.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                        <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-2 mr-2 sm:mr-3"></div>
                                        <span className="text-muted text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary">
              Frequently Asked Questions About <span className="text-accent">MVS IT GIANT</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-muted">
              Get answers to common questions about our software development services and solutions.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary mb-3">What is MVS IT GIANT?</h3>
              <p className="text-muted">MVS IT GIANT (also known as MVS IT Giants) is a leading software development company specializing in custom software development, mobile app development, cloud solutions, and AI/ML technologies. We help businesses transform digitally with innovative technology solutions.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary mb-3">What services does MVS IT GIANT offer?</h3>
              <p className="text-muted">MVS IT GIANT offers comprehensive software development services including custom software development, mobile app development, web development, cloud solutions, AI/ML services, UI/UX design, DevOps, and IT consulting. We serve clients worldwide from our base in Bangalore, India.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary mb-3">Why choose MVS IT GIANT for software development?</h3>
              <p className="text-muted">MVS IT GIANT combines startup agility with enterprise expertise. Our team of innovative developers uses cutting-edge technologies to deliver scalable, secure, and user-friendly software solutions. We follow agile methodologies and provide transparent communication throughout the development process.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary mb-3">What industries does MVS IT GIANT serve?</h3>
              <p className="text-muted">MVS IT GIANT serves various industries including healthcare (hospital management systems), education (school management systems), hospitality (restaurant management software), retail (POS systems), and many others. We create custom solutions tailored to specific industry needs.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-primary mb-3">How can I contact MVS IT GIANT?</h3>
              <p className="text-muted">You can contact MVS IT GIANT through our website contact form, email at mvsitgiants@gmail.com, or phone at +91-9792540100. We're based in Bangalore, India, and serve clients globally. Our team is ready to discuss your software development needs.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Home;
