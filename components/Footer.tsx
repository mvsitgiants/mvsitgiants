
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { AnalyticsService } from '../services/analyticsService';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer: React.FC = () => {
  const [subEmail, setSubEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail)) {
      toast.error('Please enter a valid email address', { position: 'top-right', autoClose: 4000 });
      return;
    }
    setSubmitting(true);
    try {
      // Track analytics
      AnalyticsService.trackNewsletterSubscription('footer');

      // Send email via EmailJS
      await emailjs.send(
        'service_k2vfuxh',            // EmailJS service ID
        'template_ry731ck',           // EmailJS template ID for subscription
        { email: subEmail },          // Template params (expects {{email}})
        'POyquELGZ4z0iYnql'           // EmailJS public key
      );
      toast.success('Subscribed successfully!', { position: 'top-right', autoClose: 4000 });
      setSubEmail('');
    } catch (err: any) {
      console.error('Subscription email error:', err);
      toast.error(`Failed to subscribe: ${err?.text || err?.message || 'Unknown error'}`, { position: 'top-right', autoClose: 6000 });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <footer className="bg-secondary text-muted">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <img 
              src="/logomvs.png" 
              alt="MVS IT GIANT" 
              className="h-10 sm:h-12 w-auto"
            />
            <p className="text-xs sm:text-sm leading-relaxed">Leading software development company specializing in custom software development, mobile app development, cloud solutions, AI/ML, and IT consulting. We deliver cutting-edge technology solutions to transform your business.</p>
            <div className="flex space-x-3 sm:space-x-4">
                <a href="https://www.facebook.com/mvsitgiants/" onClick={() => AnalyticsService.trackSocialMediaClick('facebook', 'footer')} className="text-muted hover:text-accent transition-colors p-1" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/company/mvsitgiants/" onClick={() => AnalyticsService.trackSocialMediaClick('linkedin', 'footer')} className="text-muted hover:text-accent transition-colors p-1" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors block py-1">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors block py-1">Services</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors block py-1">Products</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors block py-1">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>Bangalore, Karnataka</li>
              <li><a href="mailto:mvsitgiants@gmail.com" onClick={() => AnalyticsService.trackEmailClick('mvsitgiants@gmail.com', 'footer')} className="hover:text-accent transition-colors">mvsitgiants@gmail.com</a></li>
              <li>
                <a href="tel:+919792540100" onClick={() => AnalyticsService.trackPhoneClick('+91-9792540100', 'footer')} className="hover:text-accent transition-colors block">+91-9792540100</a>
                <a href="tel:+917668747899" onClick={() => AnalyticsService.trackPhoneClick('+91-7668747899', 'footer')} className="hover:text-accent transition-colors block">+91-7668747899</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Stay Updated</h4>
            <p className="text-xs sm:text-sm mb-3 leading-relaxed">Subscribe to our newsletter for the latest tech news and company updates.</p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={subEmail}
                onChange={(e) => setSubEmail(e.target.value)}
                required
                className="flex-1 px-3 py-2 text-xs sm:text-sm text-primary bg-light border border-muted/20 rounded-md sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px]" 
              />
              <button 
                type="submit" 
                disabled={submitting}
                className="bg-accent text-light px-4 py-2 font-semibold rounded-md sm:rounded-r-md hover:bg-accent/80 transition-colors text-xs sm:text-sm min-h-[44px] disabled:opacity-60"
              >
                {submitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        <ToastContainer aria-label="Footer notifications" />
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-muted/20 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} MVS IT GIANT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;