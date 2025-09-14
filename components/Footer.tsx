
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-muted">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logomvs.png" 
              alt="MVS IT Giants" 
              className="h-12 w-auto"
            />
            <p className="text-sm">Leading software development company specializing in custom software development, mobile app development, cloud solutions, AI/ML, and IT consulting. We deliver cutting-edge technology solutions to transform your business.</p>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/mvsitgiants/" className="text-muted hover:text-accent transition-colors"><FacebookIcon /></a>
                {/* <a href="#" className="text-muted hover:text-accent transition-colors"><TwitterIcon /></a> */}
                <a href="https://www.linkedin.com/company/mvsitgiants/" className="text-muted hover:text-accent transition-colors"><LinkedInIcon /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Bangalore, Karnataka</li>
              <li>mvsitgiants@gmail.com</li>
              <li>+91-9792540100 <br /> +91-7668747899</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter for the latest tech news and company updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm text-primary bg-light border border-muted/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="bg-accent text-light px-4 py-2 font-semibold rounded-r-md hover:bg-accent/80 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MVS IT Giants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;