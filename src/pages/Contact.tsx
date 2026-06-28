import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactCards = [
    { icon: Mail, label: 'Email Us', value: 'contactsugrivasolutions@gmail.com', href: 'mailto:contactsugrivasolutions@gmail.com' },
    { icon: Phone, label: 'WhatsApp #1', value: '+91 73874 27755', href: 'https://wa.me/917387427755' },
    { icon: Phone, label: 'WhatsApp #2', value: '+91 93092 76924', href: 'https://wa.me/917309276924' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
    { icon: Clock, label: 'Working Hours', value: 'Mon–Sat, 9AM–7PM IST', href: null },
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border ${
    isDark
      ? 'bg-[#1A1A2E] text-white border-[#00B4A6]/20 placeholder-gray-500 focus:border-[#00B4A6]'
      : 'bg-gray-50 text-gray-900 border-gray-200 placeholder-gray-400 focus:border-[#00B4A6]'
  }`;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className={`pt-32 pb-16 relative ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>We're Here</span>
            <span className="gradient-text"> to Help</span>
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a question about internships, projects, or APIs? Reach out we typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className={`py-12 ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {contactCards.map((c, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-5 card-hover text-center`}>
                <div className="w-10 h-10 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <c.icon size={18} className="text-[#00B4A6]" />
                </div>
                <p className={`text-xs font-semibold mb-1 uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{c.label}</p>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[#00B4A6] text-xs font-medium hover:underline break-all">
                    {c.value}
                  </a>
                ) : (
                  <p className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{c.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8`}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#00B4A6]" />
                  </div>
                  <h3 className={`font-display text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Message Sent!</h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    We'll get back to you within an hour. For urgent queries, WhatsApp us directly!
                  </p>
                  <a
                    href="https://wa.me/917387427755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-teal text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 mt-6 text-sm"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <h3 className={`font-display text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={inputClass} />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Subject *</label>
                        <select name="subject" value={form.subject} onChange={handleChange} required className={inputClass}>
                          <option value="">Select a topic</option>
                          <option value="internship">Internship Oppotunities</option>
                          <option value="project">College Project</option>
                          <option value="custom">Custom Project</option>
                          <option value="api">API Services</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us what you need..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button type="submit" className="btn-teal text-white font-semibold px-6 py-3 rounded-xl w-full flex items-center justify-center gap-2">
                      <Send size={16} /> Send Message
                    </button>
                    <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      We typically respond within an hour.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Map Placeholder + Quick Links */}
            <div className="space-y-5">
              {/* Map */}
              <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl overflow-hidden`} style={{ height: '280px' }}>
                <div className="w-full h-full flex flex-col items-center justify-center relative">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin size={28} className="text-[#00B4A6]" />
                    </div>
                    <h4 className={`font-display font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Pune, Maharashtra</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>India — The Engineering Capital</p>
                    <a
                      href="https://maps.google.com/?q=Pune,Maharashtra,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-[#00B4A6] border border-[#00B4A6]/30 px-3 py-1.5 rounded-lg hover:bg-[#00B4A6]/10 transition-colors"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTAs */}
              <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6`}>
                <h4 className={`font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Connect on WhatsApp</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Ask about Internship', msg: 'Hi, I want to know about internship opportunities at Sugriva Solutions!' },
                    { label: 'Enquire about a Project', msg: 'Hi, I need help with a college project. Can you guide me?' },
                    { label: 'Custom Project Request', msg: 'Hi, I want a custom project. My requirements are:' },
                    { label: 'API Services Inquiry', msg: 'Hi, I am interested in your API services for my business!' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={`https://wa.me/917387427755?text=${encodeURIComponent(item.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm border transition-all group ${
                        isDark
                          ? 'border-[#00B4A6]/20 text-gray-300 hover:border-[#00B4A6] hover:text-[#00B4A6] hover:bg-[#00B4A6]/5'
                          : 'border-gray-200 text-gray-700 hover:border-[#00B4A6] hover:text-[#00B4A6] hover:bg-teal-50'
                      }`}
                    >
                      {item.label}
                      <span className="text-[#25D366] text-xs font-semibold">WhatsApp →</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
