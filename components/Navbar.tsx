
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact-section' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-6 pointer-events-none">
      <nav
        className={`mx-auto max-w-5xl transition-all duration-500 ease-in-out pointer-events-auto
          ${isScrolled
            ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/20 dark:border-gray-700/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full py-2 px-3'
            : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/10 dark:border-gray-700/10 shadow-sm rounded-full py-3 px-4'
          }`}
      >
        <div className="flex justify-between items-center px-4">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-gray-900 font-black text-xs">AG</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">
              Ajinkya <span className="text-orange-600">G.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href={`https://www.naukri.com/mnjuser/profile?id=&altresid`}
              target="_blank"
              className="hidden sm:inline-flex bg-gray-950 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-200 active:scale-95"
            >
              Hire Me
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-24 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-100 dark:border-gray-800 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-4 pointer-events-none invisible'}`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-gray-800 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-500 hover:bg-orange-50/50 dark:hover:bg-orange-900/20 text-lg font-bold rounded-2xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-2">
            <a
              href={`https://www.naukri.com/mnjuser/profile?id=&altresid`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-2xl font-black text-lg"
            >
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
