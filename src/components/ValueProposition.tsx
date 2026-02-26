import { CheckCircle } from 'lucide-react';

const benefits = [
  'Soluciones 100% personalizadas a tu medida',
  'Entrega oportuna y metodología ágil',
  'Escalabilidad garantizada para crecer contigo',
  'Comunicación transparente en cada fase',
  'Tecnología de vanguardia y mejores prácticas',
];

export default function ValueProposition() {
  return (
    <section className="py-20 sm:py-32 bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF7F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF7F] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-[#00FF7F]">InnovaCode</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia y resultados medibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#00FF7F] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,127,0.15)]"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00FF7F] flex-shrink-0 mt-1" />
                <p className="text-white font-medium leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
