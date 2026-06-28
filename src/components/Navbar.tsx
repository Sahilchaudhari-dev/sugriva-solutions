import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'API Services', path: '/api-services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#00B4A6]/20 shadow-lg shadow-black/20'
          : 'bg-white/90 backdrop-blur-md border-b border-[#00B4A6]/20 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
           <img 
  src="/logo.png" 
  alt="Sugriva Solutions" 
  className={`w-10 h-10 object-contain ${isDark ? 'mix-blend-screen' : ''}`}
/>
            <div>
              <span className="font-display font-bold text-lg text-[#00B4A6]">Sugriva</span>
              <span className={`font-display font-bold text-lg ml-1 ${isDark ? 'text-white' : 'text-[#1A202C]'}`}>Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#00B4A6] bg-[#00B4A6]/10'
                    : isDark
                      ? 'text-gray-300 hover:text-[#00B4A6] hover:bg-[#00B4A6]/10'
                      : 'text-gray-600 hover:text-[#00B4A6] hover:bg-[#00B4A6]/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark ? 'text-gray-300 hover:text-[#00B4A6] hover:bg-[#00B4A6]/10' : 'text-gray-600 hover:text-[#00B4A6] hover:bg-[#00B4A6]/10'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://wa.me/917387427755"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-teal text-white text-sm font-semibold px-5 py-2 rounded-lg"
            >
              Get Started
            </a>
            <button
              className={`md:hidden p-2 rounded-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden border-t ${isDark ? 'bg-[#0D0D0D] border-[#00B4A6]/20' : 'bg-white border-gray-200'}`}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-[#00B4A6] bg-[#00B4A6]/10'
                    : isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/917387427755"
              target="_blank"
              rel="noopener noreferrer"
              className="block btn-teal text-white text-sm font-semibold px-4 py-3 rounded-lg text-center mt-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
