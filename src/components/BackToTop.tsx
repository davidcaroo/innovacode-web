import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#1A1A1A] border-2 border-[#00FF7F] rounded-full flex items-center justify-center hover:bg-[#00FF7F] hover:shadow-[0_0_20px_rgba(0,255,127,0.5)] transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
    >
      <ArrowUp className="w-5 h-5 text-[#00FF7F] group-hover:text-[#0C0C0C] transition-colors" aria-hidden="true" />
    </button>
  );
}
