import React from 'react';
import { Shield, Target, Eye, Heart, Zap, Users, Award, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of the curve, always building with the latest technology.' },
    { icon: Shield, title: 'Integrity', desc: 'Every document we issue is authentic, verifiable, and legally valid.' },
    { icon: Users, title: 'Student-First', desc: 'Every decision we make starts with what\'s best for our students.' },
    { icon: Award, title: 'Quality', desc: 'We don\'t ship mediocre work — quality is non-negotiable.' },
    { icon: Zap, title: 'Speed', desc: 'Fast delivery without cutting corners — because your deadlines matter.' },
    { icon: Heart, title: 'Dedication', desc: 'We\'re invested in your success, not just your transaction.' },
  ];

  const team = [
    { name: 'Chaitanya Chaudhari', role: 'Founder & CEO', initials: 'CS' },
    { name: 'Sahil Chaudhari', role: 'Head of Tech', initials: 'SC' },
    { name: 'Arjun Patil', role: 'AI/ML Lead', initials: 'AP' },
    { name: 'Sneha Kulkarni', role: 'Student Relations', initials: 'SK' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className={`pt-32 pb-16 relative ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Built for Engineers,</span>
            <br />
            <span className="gradient-text">By Engineers</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We started Sugriva Solutions because we lived the frustration of being an engineering student with no real guidance, no authentic internship opportunities, and no one to help with projects.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className={`font-display text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Bridging the Gap Between College and Industry</h2>
              <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>Sugriva Solutions was born in Pune, Maharashtra  the engineering capital of India  with a simple but powerful mission: to make quality internships, real projects, and enterprise tech accessible to every engineering student in the country.</p>
                <p>We saw talented students struggle with fake internship letters, plagiarized projects, and no genuine domain exposure. We decided to fix that. As a government-registered proprietary firm with GSTN, Udyam Registration, and Shop Act License, every internship letter we issue is authentic and verifiable.</p>
                <p>Today, we've helped 500+ students, delivered 100+ projects, and serve enterprise clients with our AI-powered APIs  and we're just getting started.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '500+', sub: 'Students Helped' },
                { label: '100+', sub: 'Projects Delivered' },
                { label: '10+', sub: 'Internship Domains' },
                { label: '2024', sub: 'Founded in Pune' },
              ].map((s, i) => (
                <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 text-center card-hover`}>
                  <div className="font-display text-3xl font-bold text-[#00B4A6] mb-1">{s.label}</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 border-l-4 border-[#00B4A6]`}>
              <div className="w-12 h-12 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-5">
                <Target size={24} className="text-[#00B4A6]" />
              </div>
              <h3 className={`font-display text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                To make quality internships, industry-ready projects, and enterprise tech solutions accessible to every engineering student in India — regardless of their college tier or background.
              </p>
            </div>
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 border-l-4 border-[#00B4A6]`}>
              <div className="w-12 h-12 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-5">
                <Eye size={24} className="text-[#00B4A6]" />
              </div>
              <h3 className={`font-display text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Vision</h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                To become India's most trusted tech solutions company for engineering students  the first name that comes to mind when a student needs real help with their career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 card-hover`}>
                <div className="w-10 h-10 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[#00B4A6]" />
                </div>
                <h4 className={`font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{v.title}</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>The Team Behind It</h2>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Experienced engineers and mentors dedicated to your success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 text-center card-hover`}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B4A6] to-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg font-display">
                  {m.initials}
                </div>
                <h4 className={`font-display font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{m.name}</h4>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className={`py-12 ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 text-center border border-[#00B4A6]/20`}>
            <h3 className={`font-display text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Officially Registered & Verified</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['🏛️ Proprietorship Firm', '📋 GSTN: 27BYXPC2961E1Z6', '🎖️ Udyam Registered', '🏪 Shop Act Licensed', '📍 Pune, Maharashtra'].map(c => (
                <span key={c} className={`text-sm px-4 py-2 rounded-xl border ${isDark ? 'bg-[#00B4A6]/10 border-[#00B4A6]/30 text-[#00B4A6]' : 'bg-teal-50 border-teal-200 text-teal-700'}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
