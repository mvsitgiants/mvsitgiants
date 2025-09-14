
import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <div className="relative bg-accent">
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-700 to-blue-900"></div>
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-light sm:text-5xl">
          <span className="block">Ready to build the future?</span>
        </h2>
        <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Let's collaborate on your next groundbreaking project.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accent bg-light hover:bg-light/90 transition-transform transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-light text-base font-medium rounded-md text-light bg-transparent hover:bg-light hover:text-accent transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
