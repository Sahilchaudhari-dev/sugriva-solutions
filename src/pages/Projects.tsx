import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Sparkles } from 'lucide-react';
import { projects, domains, levels, domainColors } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const domainMatch = selectedDomain === 'All' || p.domain === selectedDomain;
      const levelMatch = selectedLevel === 'All' || p.level === selectedLevel;
      const searchMatch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.domain.toLowerCase().includes(search.toLowerCase());
      return domainMatch && levelMatch && searchMatch;
    });
  }, [selectedDomain, selectedLevel, search]);

  const getWhatsAppLink = (title: string) => {
    const msg = encodeURIComponent(`Hi! I'm interested in the project: "${title}". Can you share more details?`);
    return `https://wa.me/917387427755?text=${msg}`;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className={`pt-32 pb-16 relative ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Project Catalog</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>46+ </span>
            <span className="gradient-text">Industry-Ready</span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Projects</span>
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AI-powered. Thoroughly documented. Built to impress — recruiters, professors, and the industry alike.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className={`sticky top-16 md:top-20 z-40 py-4 border-b ${isDark ? 'bg-[#0D0D0D] border-[#00B4A6]/20' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none ${
                isDark ? 'bg-[#1A1A2E] text-white border border-[#00B4A6]/20 placeholder-gray-500' : 'bg-gray-100 text-gray-800 border border-gray-200'
              }`}
            />
          </div>
          {/* Domain Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide flex-wrap">
            {domains.map(d => (
              <button
                key={d}
                onClick={() => setSelectedDomain(d)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedDomain === d
                    ? 'bg-[#00B4A6] border-[#00B4A6] text-white'
                    : isDark
                      ? 'border-[#00B4A6]/30 text-gray-400 hover:border-[#00B4A6] hover:text-[#00B4A6]'
                      : 'border-gray-300 text-gray-600 hover:border-[#00B4A6] hover:text-[#00B4A6]'
                }`}
              >
                {d}
              </button>
            ))}
            <div className="w-px h-6 bg-gray-600 mx-1 self-center" />
            {levels.map(l => (
              <button
                key={l}
                onClick={() => setSelectedLevel(l)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  selectedLevel === l
                    ? l === 'Advanced' ? 'bg-red-500 border-red-500 text-white' : l === 'Medium' ? 'bg-orange-500 border-orange-500 text-white' : 'bg-[#00B4A6] border-[#00B4A6] text-white'
                    : isDark
                      ? 'border-gray-600 text-gray-400 hover:text-white'
                      : 'border-gray-300 text-gray-600 hover:border-gray-500'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Showing {filtered.length} projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(p => (
              <div key={p.id} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-5 card-hover flex flex-col`}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${domainColors[p.domain] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'}`}>
                    {p.domain}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${p.level === 'Advanced' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'}`}>
                    {p.level}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-base mb-2 leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed mb-4 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.map(t => (
                    <span key={t} className={`text-xs px-2 py-0.5 rounded-md ${isDark ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-teal text-white text-xs font-semibold py-2.5 rounded-xl text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} /> Get This Project
                </a>
              </div>
            ))}
          </div>

          {/* Custom Project Card */}
          <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00B4A6] to-[#0D9488] p-8 md:p-12 text-center">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-white mb-3">Don't See What You Need?</h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                We build fully custom projects tailored to your exact requirements, preferred tech stack, and deadlines. Just tell us what you need.
              </p>
              <a
                href="https://wa.me/917387427755?text=Hi%2C%20I%20want%20a%20custom%20project.%20Here%20are%20my%20requirements%3A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00B4A6] font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              >
                <MessageCircle size={18} /> Request Custom Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
