
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Added By Bhushan on 15_01_2025 - Fixed mobile navbar background transparency */}
      <header className="bg-light/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <img 
                src="/logomvs.png" 
                alt="MVS IT GIANT" 
                className="h-12 w-auto"
              />
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
              className="bg-white/90 backdrop-blur-sm inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-accent hover:text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-light focus:ring-accent shadow-md border border-gray-200/30"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay with proper background - Added By Bhushan on 15_01_2025 - Fixed positioning */}
      <div className={`md:hidden fixed top-20 left-0 w-full bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ height: 'calc(100vh - 80px)' }} onClick={() => setIsOpen(false)}></div>
      
      {/* Mobile menu with solid background - Added By Bhushan on 15_01_2025 - Fixed positioning */}
      <div className={`md:hidden fixed top-20 right-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ height: 'calc(100vh - 80px)' }} id="mobile-menu">
        <div className="px-4 pt-5 pb-3 space-y-1">
         
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
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
      </header>
    </>
  );
};

export default Header;