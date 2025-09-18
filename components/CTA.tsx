
import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (


    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-accent via-blue-700 to-blue-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Let's discuss how our comprehensive technology services can help you achieve your business goals. 
        Get a free consultation and project estimate today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/contact" 
          className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
        >
          Get Free Consultation
        </a>
        <a 
          href="/contact" 
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
        >
          View Our Portfolio
        </a>
      </div>
    </div>
  </section>

  
  );
};

export default CTA;
