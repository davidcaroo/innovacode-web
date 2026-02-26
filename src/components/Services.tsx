import { useEffect, useRef, useState } from 'react';
import { Code, Brain, Workflow, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Desarrollo de Software a Medida',
    description: 'Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades de tu negocio, escalables y robustas',
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial',
    description: 'Implementamos IA para automatizar procesos, analizar datos y tomar decisiones inteligentes que optimizan tu operación',
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description: 'Eliminamos tareas repetitivas y optimizamos flujos de trabajo para que tu equipo se enfoque en lo que realmente importa',
  },
  {
    icon: Rocket,
    title: 'Transformación Digital',
    description: 'Modernizamos tu negocio con tecnología de vanguardia para mantenerte competitivo en la era digital',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" ref={sectionRef} className="py-20 sm:py-32 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-[#00FF7F]">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-[#1A1A1A] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#00FF7F] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,127,0.2)] hover:scale-105 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transition: 'all 0.6s ease-out' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#00FF7F]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00FF7F]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#00FF7F]" aria-label={`Icono de ${service.title}`} />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF7F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
