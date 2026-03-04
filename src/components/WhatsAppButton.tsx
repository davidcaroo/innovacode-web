import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre los servicios de InnovaCode Solutions.'
  );

  return (
    <>
      <a
        href={`https://wa.me/573232231834?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-accent hover:scale-110 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        style={{ animation: 'pulse 2s infinite' }}
      >
        <MessageCircle className="w-7 h-7 text-accent-text" aria-hidden="true" />
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 30px var(--color-accent-glow);
          }
          50% {
            box-shadow: 0 0 50px var(--color-accent-glow);
          }
        }
      `}</style>
    </>
  );
}
