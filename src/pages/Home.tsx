import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, FileCheck, Cpu, Mic, Star, ChevronDown, Layers, Award, Zap, Shield, Clock, Headphones } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Animated counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return { count, ref };
};

// Particle canvas
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 180, 166, 0.5)';
        ctx.fill();
      });
      // Draw lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 180, 166, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />;
};

const typingWords = ['Internships', 'Projects', 'Opportunities', 'Growth', 'Success'];

const Home: React.FC = () => {
  const { isDark } = useTheme();
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  const stat1 = useCounter(500);
  const stat2 = useCounter(20);
  const stat3 = useCounter(100);
  const stat4 = useCounter(3);

  useEffect(() => {
    const word = typingWords[wordIdx];
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setWordIdx(i => (i + 1) % typingWords.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIdx]);

  const services = [
    { icon: FileCheck, title: 'Internship Letters & Opportunities', desc: 'Official internship letters with real domain exposure across 10+ tech specializations — recognized and authentic.', link: '/services' },
    { icon: Code2, title: 'College Projects (All Domains)', desc: '45+ industry-ready projects from medium to advanced level, plus fully custom builds tailored to your needs.', link: '/projects' },
    { icon: Cpu, title: 'Image & Video Processing API', desc: 'Enterprise-grade vision APIs — object detection, face recognition, OCR, background removal, and more.', link: '/api-services' },
    { icon: Mic, title: 'Audio Processing API', desc: 'Powerful audio APIs for speech-to-text, noise cancellation, speaker ID, and emotion detection at scale.', link: '/api-services' },
  ];

  const domains = ['AI / Machine Learning', 'Web Development', 'Data Science', 'Cloud & DevOps', 'App Development', 'Cybersecurity', 'Python', 'Java', 'React', 'Node.js'];

  const whyUs = [
    { icon: Award, title: 'Expert Mentorship', desc: 'Guided by experienced engineers with real industry exposure.' },
    { icon: Layers, title: 'Industry-Ready Projects', desc: 'Projects built to impress recruiters and clear college vivas.' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'Quick delivery without compromising on quality.' },
    { icon: Zap, title: 'Custom Solutions', desc: 'Every student is different — we build what you actually need.' },
    { icon: Shield, title: '100% Authentic Documents', desc: 'Government-registered firm issuing legally valid internship letters.' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'We\'re available on WhatsApp — real humans, real help.' },
  ];

  const testimonials = [
    { name: 'Rohan Deshmukh', college: 'RTMSSU, Pune', domain: 'AI/ML', rating: 5, text: 'Got my internship letter within 2 days! The domain exposure in AI/ML was exactly what I needed for my resume. Highly recommend to every engineering student.' },
    { name: 'Omkar Lande', college: 'COEP, Pune', domain: 'Web Development', rating: 5, text: 'The custom project they built for me was production-quality. My professor was genuinely impressed. The team understood my requirements perfectly on the first call.' },
    { name: 'Sarthak Ambre', college: 'Sanjivani University, Kopargaon', domain: 'Data Science', rating: 5, text: 'Sugriva Solutions made my final year project stress-free. The Data Science project came with complete documentation and a working demo. Worth every rupee!' },
  ];

  return (
    <div className={isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-[#0D0D0D] via-[#0D1A1A] to-[#0D0D0D]' : 'bg-gradient-to-br from-white via-teal-50 to-white'}`} />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <ParticleBackground />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00B4A6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#00B4A6]/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
          <div className="inline-flex items-center gap-2 bg-[#00B4A6]/10 border border-[#00B4A6]/30 text-[#00B4A6] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
            <span className="w-2 h-2 bg-[#00B4A6] rounded-full animate-pulse" />
            Govt. Registered · Udyam Certified · Pune, India
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Empowering the</span>
            <br />
            <span className="gradient-text">Next Generation</span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>of Engineers</span>
          </h1>

          <p className={`text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Your one-stop destination for Internships, domain expertise, college projects, and enterprise APIs.
          </p>

          <div className="flex items-center justify-center gap-3 mb-10 text-xl font-display font-semibold">
            <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>We deliver</span>
            <span className="text-[#00B4A6] min-w-[160px] text-left">
              {displayed}<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-teal text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-base">
              Explore Projects <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/917387427755?text=Hi%2C%20I%20want%20to%20know%20about%20internship%20opportunities%20at%20Sugriva%20Solutions!"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-[#00B4A6] text-[#00B4A6] font-semibold px-8 py-4 rounded-xl hover:bg-[#00B4A6] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-base`}
            >
              Get Your Internship
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={24} className="text-[#00B4A6]/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={`py-16 ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { ref: stat1.ref, count: stat1.count, suffix: '+', label: 'Students Helped' },
              { ref: stat2.ref, count: stat2.count, suffix: '+', label: 'Internship Domains' },
              { ref: stat3.ref, count: stat3.count, suffix: '+', label: 'Projects Delivered' },
              { ref: stat4.ref, count: stat4.count, suffix: '+', label: 'API Clients' },
            ].map((s, i) => (
              <div key={i} ref={s.ref} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 text-center card-hover`}>
                <div className="font-display text-4xl font-bold text-[#00B4A6] mb-1">{s.count}{s.suffix}</div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Services Built for</span>
              <span className="gradient-text"> Engineers</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Everything you need to level up your engineering career, in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8 card-hover group cursor-pointer`}>
                <div className="w-14 h-14 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#00B4A6]/20 transition-colors">
                  <s.icon size={28} className="text-[#00B4A6]" />
                </div>
                <h3 className={`font-display text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.desc}</p>
                <span className="text-[#00B4A6] text-sm font-semibold flex items-center gap-1 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Internship Domains</p>
            <h2 className={`font-display text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Pick Your Domain</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {domains.map(d => (
              <span key={d} className="bg-[#00B4A6]/10 border border-[#00B4A6]/30 text-[#00B4A6] font-medium px-5 py-2 rounded-full text-sm hover:bg-[#00B4A6] hover:text-white transition-all duration-200 cursor-default">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              The Sugriva Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 card-hover`}>
                <div className="w-12 h-12 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <w.icon size={22} className="text-[#00B4A6]" />
                </div>
                <h4 className={`font-display font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{w.title}</h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B4A6] to-[#0D9488]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Ready to Kickstart Your Engineering Career?</h2>
          <p className="text-white/80 text-lg mb-8">Join 500+ students who've already leveled up with Sugriva Solutions.</p>
          <a
            href="https://wa.me/917387427755?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Sugriva%20Solutions!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#00B4A6] font-bold px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 text-base"
          >
            Talk to Us on WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">Student Stories</p>
            <h2 className={`font-display text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>What Our Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 card-hover`}>
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-5 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>"{t.text}"</p>
                <div>
                  <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{t.college} · {t.domain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
