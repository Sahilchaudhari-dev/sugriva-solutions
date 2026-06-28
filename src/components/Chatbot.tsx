import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are the official AI assistant for Sugriva Solutions, a government-registered tech company based in Pune, India (GSTN: 27BYXPC2961E1Z6).

You help engineering students and businesses with:

COMPANY INFO:
- Sugriva Solutions is a proprietary firm offering internship letters, internship opportunities, college projects, and enterprise API services.
- We are Udyam Registered and hold Shop Act license.
- Location: Pune, Maharashtra, India
- Email: contactsugrivasolutions@gmail.com
- WhatsApp: +91 73874 27755 and +91 93092 76924
- Working hours: Mon–Sat, 9AM–7PM IST

INTERNSHIP SERVICES:
- We provide official internship letters for engineering students
- Domains: AI/ML, Web Development, Data Science, Cloud & DevOps, App Development, Cybersecurity, Python, Java, React, Node.js
- Students get real domain exposure and an authentic internship certificate

PROJECTS:
- We offer 45+ ready-made projects across AI/ML, Web Development, Data Science, Cloud & DevOps, App Development, and Cybersecurity
- Projects are available at Medium and Advanced levels
- We also do CUSTOM projects tailored to student requirements, tech stack, and deadlines
- For custom projects, we understand your needs and build accordingly

API SERVICES:
- Image & Video Processing API: Object detection, face detection, image enhancement, background removal, OCR, video analysis
- Audio Processing API: Speech-to-text, text-to-speech, audio classification, noise cancellation, speaker identification, emotion detection

PRICING RULE (VERY IMPORTANT):
- NEVER share any pricing or cost information
- For ANY pricing query, always redirect to WhatsApp: "For pricing details, please reach out to us on WhatsApp at +91 73874 27755 or contact us via our Contact page. Our team will get back to you promptly!"

Keep responses concise, friendly, and professional. Use emojis sparingly. Always be helpful and guide students to the right service.`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "👋 Hi! I'm Sugriva AI, your guide to everything at Sugriva Solutions. Ask me about our internships, projects, API services, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [...messages, { role: 'user', content: userMessage }].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "I'm having trouble responding right now. Please contact us on WhatsApp at +91 73874 27755!";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please reach out on WhatsApp at +91 73874 27755!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const quickQuestions = ['What internships do you offer?', 'Show me AI/ML projects', 'Tell me about your API services', 'How do I get a custom project?'];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 btn-teal rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={24} className="text-white" /> : <Bot size={24} className="text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-44 right-6 z-50 w-[360px] rounded-2xl shadow-2xl overflow-hidden border ${
          isDark ? 'bg-[#0D0D0D] border-[#00B4A6]/30' : 'bg-white border-gray-200'
        }`} style={{ maxHeight: '500px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00B4A6] to-[#0D9488] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Sugriva AI</p>
              <p className="text-white/70 text-xs">Always here to help</p>
            </div>
            <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Messages */}
          <div className="overflow-y-auto p-4 space-y-3" style={{ height: '300px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#00B4A6] text-white rounded-br-sm'
                    : isDark
                      ? 'bg-[#1A1A2E] text-gray-200 rounded-bl-sm border border-[#00B4A6]/20'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className={`px-3 py-2 rounded-xl flex items-center gap-2 ${isDark ? 'bg-[#1A1A2E] border border-[#00B4A6]/20' : 'bg-gray-100'}`}>
                  <Loader size={14} className="animate-spin text-[#00B4A6]" />
                  <span className="text-xs text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className={`px-4 pb-2 flex gap-2 flex-wrap ${isDark ? 'border-t border-[#00B4A6]/10' : 'border-t border-gray-100'} pt-2`}>
              {quickQuestions.map(q => (
                <button
                  key={q}
                  onClick={() => { setInput(q); }}
                  className="text-xs bg-[#00B4A6]/10 text-[#00B4A6] border border-[#00B4A6]/30 px-2 py-1 rounded-lg hover:bg-[#00B4A6]/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className={`flex items-center gap-2 px-3 py-3 border-t ${isDark ? 'border-[#00B4A6]/20' : 'border-gray-200'}`}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className={`flex-1 text-sm px-3 py-2 rounded-lg outline-none ${
                isDark ? 'bg-[#1A1A2E] text-white border border-[#00B4A6]/20 placeholder-gray-500' : 'bg-gray-100 text-gray-800 placeholder-gray-400'
              }`}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="btn-teal w-9 h-9 rounded-lg flex items-center justify-center shrink-0 disabled:opacity-50"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
          <p className={`text-center text-[10px] pb-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Powered by Claude AI · Sugriva Solutions</p>
        </div>
      )}
    </>
  );
};

export default Chatbot;
