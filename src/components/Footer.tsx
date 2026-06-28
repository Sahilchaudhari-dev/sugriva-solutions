import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`${isDark ? 'bg-[#0A0A14] border-t border-[#00B4A6]/15' : 'bg-gray-900 border-t border-gray-800'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Sugriva Solutions" className="w-10 h-10 object-contain" />
              <div>
                <span className="font-display font-bold text-lg text-[#00B4A6]">Sugriva</span>
                <span className="font-display font-bold text-lg ml-1 text-white">Solutions</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering Engineers. Building Futures. Your one-stop destination for Internships, projects, and enterprise API solutions.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-[#00B4A6]/20 text-[#00B4A6] border border-[#00B4A6]/30 px-2 py-1 rounded-md font-medium">
                🏛️ Govt. Registered Proprietary Firm
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-[#00B4A6]/10 text-[#00B4A6]/80 border border-[#00B4A6]/20 px-2 py-1 rounded-md">
                Udyam Registered
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[['Home', '/'], ['Services', '/services'], ['Project Catalog', '/projects'], ['API Services', '/api-services'], ['About Us', '/about'], ['Contact', '/contact']].map(([name, path]) => (
                <li key={path}>
                  <Link to={path} className="text-gray-400 hover:text-[#00B4A6] text-sm transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-1 h-1 bg-[#00B4A6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Internship Letters', 'Internship Opportunities', 'College Projects', 'Custom Projects', 'Image & Video API', 'Audio Processing API'].map(s => (
                <li key={s} className="text-gray-400 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contactsugrivasolutions@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-[#00B4A6] text-sm transition-colors group">
                  <Mail size={16} className="mt-0.5 shrink-0 group-hover:text-[#00B4A6]" />
                  contactsugrivasolutions@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/917387427755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#00B4A6] text-sm transition-colors group">
                  <Phone size={16} className="shrink-0 group-hover:text-[#00B4A6]" />
                  +91 73874 27755
                </a>
              </li>
              <li>
                <a href="https://wa.me/917309276924" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#00B4A6] text-sm transition-colors group">
                  <Phone size={16} className="shrink-0 group-hover:text-[#00B4A6]" />
                  +91 93092 76924
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Pune, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Sugriva Solutions. All rights reserved. | GSTN: 27BYXPC2961E1Z6
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Pune, Maharashtra, India</span>
            <span>·</span>
            <a href="mailto:contactsugrivasolutions@gmail.com" className="hover:text-[#00B4A6] transition-colors flex items-center gap-1">
              contactsugrivasolutions@gmail.com <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
