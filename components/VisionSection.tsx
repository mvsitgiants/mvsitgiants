import React from 'react';
import { Link } from 'react-router-dom';

// Added By Bhushan on 15_01_2025
const VisionSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section - Image */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 w-full h-full bg-blue-500/20 rounded-lg transform rotate-[-3deg]"></div>
              <img
                alt="MVS IT GIANT Vision - Leading software development company with innovative technology solutions and digital transformation services"
                className="w-full align-middle rounded-lg shadow-xl relative object-cover"
                src="/asset/ourvision.png"
              />
            </div>
          </div>

          {/* Right Section - Text and Button */}
          <div className="w-full lg:w-6/12 order-1 lg:order-2">
            <div className="lg:pl-8 xl:pl-12">
              {/* Small heading */}
              <h3 className="text-sm sm:text-base md:text-lg font-medium text-blue-500 mb-2 sm:mb-3 tracking-wide uppercase">
                Your Success
              </h3>
              
              {/* Main heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
                Our Vision
              </h2>
              
              {/* Body text */}
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 md:mb-10 max-w-2xl">
              To set the global standard for software development excellence through our innovative and technology-driven solutions. We envision a future where businesses thrive through cutting-edge custom software development, seamless mobile app experiences, and transformative cloud solutions that drive digital success.
             </p>

              
              {/* CTA Button */}
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
