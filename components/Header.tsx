
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Added By Bhushan on 15_01_2025 - Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      isActive ? 'text-light bg-accent' : 'text-primary hover:text-accent hover:bg-secondary'
    }`;

  return (
    <>
      {/* Enhanced Mobile Responsive Header */}
      <header className="bg-white/98 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0">
                <img 
                  src="/logomvs.png" 
                  alt="MVS IT GIANT" 
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navLinks.map((link) => (
                  <NavLink key={link.name} to={link.path} className={linkClasses}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white/95 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-accent hover:text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light focus:ring-accent shadow-md border border-gray-200/30 min-h-[44px] min-w-[44px]"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black/50 z-40" 
              onClick={() => setIsOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <div className="fixed top-16 sm:top-20 right-0 w-80 max-w-[90vw] h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] bg-white shadow-2xl z-50 overflow-y-auto">
              <div className="px-4 pt-5 pb-3 space-y-1">
                {/* Close button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-200 min-h-[44px] min-w-[44px]"
                    aria-label="Close menu"
                  >
                    <XIcon />
                  </button>
                </div>
               
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 min-h-[44px] flex items-center ${
                        isActive ? 'text-light bg-accent' : 'text-primary hover:text-accent hover:bg-secondary'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;