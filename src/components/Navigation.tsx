import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Code2 className="w-8 h-8 text-accent" aria-label="Logo InnovaCode" />
            <span className="text-xl font-bold text-text-primary">InnovaCode</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-text-secondary hover:text-accent transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-text-secondary hover:text-accent transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('clientes')} className="text-text-secondary hover:text-accent transition-colors">
              Clientes
            </button>
            <button onClick={() => scrollToSection('proceso')} className="text-text-secondary hover:text-accent transition-colors">
              Proceso
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-text-secondary hover:text-accent transition-colors">
              Contacto
            </button>
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-accent text-accent-text px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-hover hover:shadow-accent transition-all duration-300"
            >
              Consulta Gratis
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              className="text-text-primary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-primary border-t border-border-primary">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-text-secondary hover:text-accent transition-colors py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-text-secondary hover:text-accent transition-colors py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('clientes')} className="block w-full text-left text-text-secondary hover:text-accent transition-colors py-2">
              Clientes
            </button>
            <button onClick={() => scrollToSection('proceso')} className="block w-full text-left text-text-secondary hover:text-accent transition-colors py-2">
              Proceso
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-text-secondary hover:text-accent transition-colors py-2">
              Contacto
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-accent text-accent-text px-6 py-3 rounded-lg font-semibold hover:bg-accent-hover transition-all"
            >
              Consulta Gratis
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
