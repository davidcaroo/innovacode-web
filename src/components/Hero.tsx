import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C0C]/50 to-[#0C0C0C]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fadeInUp">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-[#00FF7F] mr-2" aria-label="Icono de innovación" />
            <span className="text-[#00FF7F] font-semibold uppercase tracking-wider text-sm">InnovaCode Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Innovamos tus ideas,</span>
            <br />
            <span className="text-[#00FF7F] glow-text">transformamos tu negocio</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Desarrollamos soluciones de software innovadoras, IA y automatizaciones
            para impulsar el crecimiento de tu empresa
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contacto')}
              className="group w-full sm:w-auto bg-[#00FF7F] text-[#0C0C0C] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00CC66] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] transition-all duration-300 flex items-center justify-center"
            >
              Solicita una Consulta Gratuita
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-label="Flecha indicativa" />
            </button>

            <button
              onClick={() => scrollToSection('servicios')}
              className="w-full sm:w-auto border-2 border-[#00FF7F] text-[#00FF7F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#00FF7F]/10 transition-all duration-300"
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00FF7F] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#00FF7F] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
