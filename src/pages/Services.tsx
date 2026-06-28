import React from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, Code2, Cpu, Mic, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Services: React.FC = () => {
  const { isDark } = useTheme();

  const internDomains = ['AI / Machine Learning', 'Web Development', 'Data Science', 'Cloud & DevOps', 'App Development', 'Cybersecurity', 'Python Development', 'Java Development', 'React.js', 'Node.js'];

  const internFeatures = ['Official internship letter on company letterhead', 'Authentic & verifiable document', 'Domain-specific learning path', 'Certificate of completion', 'LinkedIn-ready credential', 'Support throughout the internship period'];

  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className={`pt-32 pb-16 relative ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className="gradient-text">Comprehensive Solutions</span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>for Engineering Students</span>
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            From your first internship letter to your final year project — we've got you covered.
          </p>
        </div>
      </section>

      {/* Service 1 - Internships */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck size={32} className="text-[#00B4A6]" />
              </div>
              <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Service 01</p>
              <h2 className={`font-display text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Internship Letters & Opportunities
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                As a government-registered proprietary firm, Sugriva Solutions issues authentic internship letters that are verifiable and legally valid. We provide real domain exposure across 10+ tech specializations — not just a piece of paper, but an actual learning experience.
              </p>
              <ul className="space-y-3 mb-8">
                {internFeatures.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={16} className="text-[#00B4A6] shrink-0" />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/917387427755?text=Hi%2C%20I%27m%20interested%20in%20getting%20an%20internship%20letter%20from%20Sugriva%20Solutions!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                <MessageCircle size={18} /> Apply for Internship
              </a>
            </div>
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8`}>
              <h4 className={`font-display font-bold text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Available Domains</h4>
              <div className="flex flex-wrap gap-2">
                {internDomains.map(d => (
                  <span key={d} className="bg-[#00B4A6]/10 border border-[#00B4A6]/30 text-[#00B4A6] text-xs font-medium px-3 py-1.5 rounded-lg">
                    {d}
                  </span>
                ))}
              </div>
              <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-[#00B4A6]/5 border border-[#00B4A6]/20' : 'bg-teal-50 border border-teal-200'}`}>
                <p className="text-[#00B4A6] text-sm font-medium">🏛️ Issued by a Govt. Registered Firm</p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>GSTN: 27BYXPC2961E1Z6 | Udyam Registered | Shop Act Licensed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2 - Projects */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 order-2 lg:order-1`}>
              <h4 className={`font-display font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>What You Get</h4>
              <div className="space-y-3">
                {['Ready-to-submit project in your preferred stack', 'Complete documentation & report', 'Working live demo', 'Presentation slides (PPT)', 'Support for viva/demo presentation', 'Custom project built from scratch'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00B4A6] rounded-full shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </div>
                ))}
              </div>
              <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-[#00B4A6]/5 border border-[#00B4A6]/20' : 'bg-teal-50 border border-teal-200'}`}>
                <p className="text-[#00B4A6] text-sm font-medium">✨ Custom Projects Available</p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tell us your requirements and we'll build it from scratch, exactly how you need it.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-2xl flex items-center justify-center mb-6">
                <Code2 size={32} className="text-[#00B4A6]" />
              </div>
              <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Service 02</p>
              <h2 className={`font-display text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                College Projects for Every Domain
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Whether it's your mini project, major project, or internship deliverable — we have 45+ ready-made projects and also build fully custom ones. All projects are AI-integrated, well-documented, and built to clear vivas.
              </p>
              <div className="flex gap-4">
                <Link to="/projects" className="btn-teal text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2">
                  Browse Projects <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/917387427755?text=Hi%2C%20I%20want%20a%20custom%20project.%20My%20requirements%20are%3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border border-[#00B4A6] text-[#00B4A6] font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-[#00B4A6] hover:text-white transition-all`}
                >
                  Custom Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3 - APIs */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cpu size={32} className="text-[#00B4A6]" />
            </div>
            <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Service 03</p>
            <h2 className={`font-display text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Enterprise API Services</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We provide enterprise-grade Image, Video, and Audio Processing APIs for businesses that need powerful AI capabilities without building from scratch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Cpu, title: 'Image & Video Processing API', desc: 'Object detection, face recognition, OCR, background removal, image enhancement, and real-time video frame analysis — all via simple REST calls.', features: ['Object & Face Detection', 'Background Removal', 'OCR — Text from Images', 'Video Frame Analysis', 'Image Enhancement & Filtering'] },
              { icon: Mic, title: 'Audio Processing API', desc: 'Speech-to-text in multiple languages, text-to-speech, audio classification, noise cancellation, speaker identification, and emotion detection.', features: ['Speech to Text (Multi-language)', 'Text to Speech', 'Noise Cancellation', 'Speaker Identification', 'Emotion Detection from Audio'] },
            ].map((api, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 card-hover`}>
                <div className="w-12 h-12 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-5">
                  <api.icon size={24} className="text-[#00B4A6]" />
                </div>
                <h3 className={`font-display text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{api.title}</h3>
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{api.desc}</p>
                <ul className="space-y-2 mb-6">
                  {api.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-[#00B4A6]" />
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/api-services" className="text-[#00B4A6] text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
