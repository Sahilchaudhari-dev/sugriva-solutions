import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917387427755?text=Hi%2C%20I%27m%20interested%20in%20Sugriva%20Solutions%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.9.8 5.6 2.1 8L.5 31.5l7.8-2c2.3 1.2 4.9 1.9 7.7 1.9 8.6 0 15.5-6.9 15.5-15.4C31.5 7.4 24.6.5 16 .5zm0 28.3c-2.6 0-5-.7-7.1-1.9l-.5-.3-5.1 1.3 1.4-4.9-.3-.5C3.1 21 2.4 18.6 2.4 16 2.4 8.5 8.5 2.4 16 2.4S29.6 8.5 29.6 16 23.5 28.8 16 28.8zm8.5-10.6c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8 7.1 1.1.5 2 .8 2.7 1 1.1.3 2.2.3 3 .2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
