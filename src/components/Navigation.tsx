import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Si estamos en otra página, primero navegar a home
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que se cargue la página home y luego hacer scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en home, hacer scroll directo
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0C0C0C]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Code2 className="w-8 h-8 text-[#00FF7F]" aria-label="Logo InnovaCode" />
            <span className="text-xl font-bold text-white">InnovaCode</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-[#00FF7F] transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-[#00FF7F] transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-gray-300 hover:text-[#00FF7F] transition-colors">
              Proceso
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-[#00FF7F] transition-colors">
              Contacto
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#00FF7F] text-[#0C0C0C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00CC66] hover:shadow-[0_0_20px_rgba(0,255,127,0.4)] transition-all duration-300"
            >
              Consulta Gratis
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0C0C0C] border-t border-[#1A1A1A]">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-300 hover:text-[#00FF7F] transition-colors py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-300 hover:text-[#00FF7F] transition-colors py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('proceso')} className="block w-full text-left text-gray-300 hover:text-[#00FF7F] transition-colors py-2">
              Proceso
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-300 hover:text-[#00FF7F] transition-colors py-2">
              Contacto
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-[#00FF7F] text-[#0C0C0C] px-6 py-3 rounded-lg font-semibold hover:bg-[#00CC66] transition-all"
            >
              Consulta Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
