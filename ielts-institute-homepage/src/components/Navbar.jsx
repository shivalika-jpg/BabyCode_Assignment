import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-dark/95 backdrop-blur-sm fixed w-full z-50 border-b border-secondary-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="gradient-text">IELTS</span>
              <span className="text-secondary-green ml-1">Pro</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#courses" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Courses
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-gray-300 hover:text-secondary-green transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Contact
              </a>
              <button className="bg-gradient-green hover:bg-primary-green text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-green"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary-dark/50 rounded-lg mt-2">
              <a href="#home" className="text-gray-300 hover:text-secondary-green block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#features" className="text-gray-300 hover:text-secondary-green block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#courses" className="text-gray-300 hover:text-secondary-green block px-3 py-2 text-base font-medium">
                Courses
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-secondary-green block px-3 py-2 text-base font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-gray-300 hover:text-secondary-green block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="w-full mt-4 bg-gradient-green hover:bg-primary-green text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;