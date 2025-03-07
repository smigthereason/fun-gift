import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/50 shadow-md' : 'bg-transparent'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-purple-600' : 'text-white'
          }`}>
           <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/create#top" className={`hover:text-white transition-colors duration-300 ${
              isScrolled ? 'text-gray-300' : 'text-white'
            }`}>
              Create Card
            </Link>
            <button className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : 'bg-white text-purple-600 hover:bg-gray-100'
            }`}>
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-gray-300' : 'text-white'
              } hover:text-purple-600 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/create"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isScrolled ? 'text-gray-300' : 'text-white'
              } hover:text-white`}
            >
              Create Card
            </Link>
            <button
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                isScrolled
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-white text-purple-600 hover:bg-gray-100'
              }`}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;