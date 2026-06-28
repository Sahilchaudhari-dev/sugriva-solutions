import React, { useState } from 'react';
import { Cpu, Mic, CheckCircle, MessageCircle, Zap, Lock, Globe, BarChart3, Clock, Headphones } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ApiServices: React.FC = () => {
  const { isDark } = useTheme();
  const [codeTab, setCodeTab] = useState<'python' | 'javascript' | 'curl'>('python');

  const codeSnippets = {
    python: `import requests

url = "https://api.sugrivasolutions.com/v1/vision/detect"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "image_url": "https://example.com/image.jpg",
    "tasks": ["object_detection", "face_detection", "ocr"]
}

response = requests.post(url, json=payload, headers=headers)
result = response.json()
print(result["detections"])`,
    javascript: `const response = await fetch(
  "https://api.sugrivasolutions.com/v1/vision/detect",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      image_url: "https://example.com/image.jpg",
      tasks: ["object_detection", "face_detection", "ocr"]
    })
  }
);

const result = await response.json();
console.log(result.detections);`,
    curl: `curl -X POST \\
  "https://api.sugrivasolutions.com/v1/vision/detect" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "tasks": ["object_detection", "face_detection", "ocr"]
  }'`
  };

  const features = [
    { icon: Zap, title: 'Low Latency', desc: 'Sub-100ms average response times for real-time applications.' },
    { icon: BarChart3, title: 'High Accuracy', desc: 'State-of-the-art models with 95%+ accuracy across all tasks.' },
    { icon: Globe, title: 'Easy Integration', desc: 'Simple REST APIs with SDKs for Python, JavaScript, and more.' },
    { icon: BarChart3, title: 'Scalable', desc: 'Auto-scaling infrastructure that handles any traffic volume.' },
    { icon: Lock, title: 'Secure', desc: 'End-to-end encryption and GDPR-compliant data handling.' },
    { icon: Headphones, title: 'Dedicated Support', desc: 'Dedicated technical support for enterprise API clients.' },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0D0D0D] text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className={`pt-32 pb-16 relative ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00B4A6] text-sm font-semibold uppercase tracking-widest mb-3">API Services</p>
          <h1 className="font-display text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful APIs</span>
            <br />
            <span className={isDark ? 'text-white' : 'text-gray-900'}>for Modern Applications</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Enterprise-grade Image, Video, and Audio processing APIs — built for scale, designed for simplicity.
          </p>
        </div>
      </section>

      {/* API 1 - Image & Video */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-2xl flex items-center justify-center mb-6">
                <Cpu size={32} className="text-[#00B4A6]" />
              </div>
              <h2 className={`font-display text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Image & Video Processing API</h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                A comprehensive vision API suite that brings the power of computer vision to your application with a single API call. No ML expertise required.
              </p>
              <div className="space-y-3 mb-6">
                {['Object Detection & Recognition', 'Face Detection & Analysis', 'Image Enhancement & Filtering', 'Video Frame Extraction & Analysis', 'Background Removal', 'OCR — Extract Text from Images'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#00B4A6] shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <div className={`p-4 rounded-xl mb-6 ${isDark ? 'bg-[#1A1A2E] border border-[#00B4A6]/20' : 'bg-gray-50 border border-gray-200'}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Use Cases</p>
                <div className="flex flex-wrap gap-2">
                  {['EdTech', 'Healthcare', 'Security & Surveillance', 'E-Commerce', 'Document Processing', 'Smart Retail'].map(u => (
                    <span key={u} className="text-xs bg-[#00B4A6]/10 text-[#00B4A6] border border-[#00B4A6]/20 px-2 py-1 rounded-md">{u}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/917387427755?text=Hi%2C%20I%27m%20interested%20in%20the%20Image%20%26%20Video%20Processing%20API%20from%20Sugriva%20Solutions!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                <MessageCircle size={18} /> Get API Access
              </a>
            </div>
            {/* Code Preview */}
            <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-[#00B4A6]/20' : 'border-gray-200'}`}>
              <div className={`flex gap-1 p-3 border-b ${isDark ? 'bg-[#1A1A2E] border-[#00B4A6]/20' : 'bg-gray-100 border-gray-200'}`}>
                {(['python', 'javascript', 'curl'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setCodeTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      codeTab === tab ? 'bg-[#00B4A6] text-white' : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600'
                    }`}
                  >
                    {tab === 'javascript' ? 'JavaScript' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <pre className={`p-5 text-xs overflow-x-auto leading-relaxed ${isDark ? 'bg-[#0A0A14] text-gray-300' : 'bg-gray-900 text-gray-200'}`}>
                <code>{codeSnippets[codeTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API 2 - Audio */}
      <section className={`section-padding ${isDark ? 'bg-[#0A0A14]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-8`}>
              <h4 className={`font-display font-bold text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Sample Response</h4>
              <pre className={`text-xs leading-relaxed rounded-xl p-4 overflow-x-auto ${isDark ? 'bg-[#0A0A14] text-gray-300' : 'bg-gray-900 text-gray-200'}`}>
{`{
  "status": "success",
  "transcript": "Hello, this is a test audio.",
  "language": "en-IN",
  "confidence": 0.97,
  "speaker_id": "speaker_1",
  "emotion": {
    "label": "neutral",
    "score": 0.84
  },
  "duration_ms": 2340
}`}
              </pre>
              <div className={`mt-5 p-4 rounded-xl ${isDark ? 'bg-[#00B4A6]/5 border border-[#00B4A6]/20' : 'bg-teal-50 border border-teal-200'}`}>
                <p className="text-[#00B4A6] text-sm font-medium flex items-center gap-2">
                  <Clock size={14} /> Average response time: &lt;80ms
                </p>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#00B4A6]/10 rounded-2xl flex items-center justify-center mb-6">
                <Mic size={32} className="text-[#00B4A6]" />
              </div>
              <h2 className={`font-display text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Audio Processing API</h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                A powerful audio intelligence API that understands, transcribes, identifies, and analyzes audio at scale — supporting 30+ languages with state-of-the-art accuracy.
              </p>
              <div className="space-y-3 mb-6">
                {['Speech to Text (Multi-language)', 'Text to Speech (Natural voices)', 'Audio Classification', 'Noise Cancellation & Enhancement', 'Speaker Identification', 'Emotion Detection from Audio'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-[#00B4A6] shrink-0" />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                  </div>
                ))}
              </div>
              <div className={`p-4 rounded-xl mb-6 ${isDark ? 'bg-[#1A1A2E] border border-[#00B4A6]/20' : 'bg-gray-50 border border-gray-200'}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Use Cases</p>
                <div className="flex flex-wrap gap-2">
                  {['Call Centers', 'EdTech', 'Accessibility', 'Healthcare', 'Podcasting', 'Smart Assistants'].map(u => (
                    <span key={u} className="text-xs bg-[#00B4A6]/10 text-[#00B4A6] border border-[#00B4A6]/20 px-2 py-1 rounded-md">{u}</span>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/917387427755?text=Hi%2C%20I%27m%20interested%20in%20the%20Audio%20Processing%20API%20from%20Sugriva%20Solutions!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                <MessageCircle size={18} /> Get API Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our APIs */}
      <section className={`section-padding ${isDark ? 'bg-[#0D0D0D]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-display text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Our APIs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className={`glass-${isDark ? 'dark' : 'light'} rounded-2xl p-6 card-hover`}>
                <div className="w-10 h-10 bg-[#00B4A6]/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-[#00B4A6]" />
                </div>
                <h4 className={`font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{f.title}</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className={`glass-${isDark ? 'dark' : 'light'} rounded-3xl p-12 border ${isDark ? 'border-[#00B4A6]/20' : 'border-teal-200'}`}>
            <h2 className={`font-display text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ready to Integrate?</h2>
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Contact us for API access, pricing, and integration support.</p>
            <a
              href="https://wa.me/917387427755?text=Hi%2C%20I%27m%20interested%20in%20Sugriva%20Solutions%20API%20services%20for%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal text-white font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2"
            >
              <MessageCircle size={20} /> Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApiServices;
