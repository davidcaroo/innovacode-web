import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Consulta Inicial',
    description: 'Entendemos tu visión y necesidades',
  },
  {
    number: 2,
    icon: FileText,
    title: 'Propuesta',
    description: 'Diseñamos la solución perfecta',
  },
  {
    number: 3,
    icon: Code2,
    title: 'Desarrollo',
    description: 'Construimos con metodología ágil',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Entrega',
    description: 'Lanzamiento y soporte continuo',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-32 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cómo <span className="text-[#00FF7F]">trabajamos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un proceso transparente y eficiente diseñado para garantizar tu éxito
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#00FF7F]/20 via-[#00FF7F] to-[#00FF7F]/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#00FF7F] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,127,0.2)] relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#00FF7F] to-[#00CC66] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,127,0.4)]">
                        <span className="text-[#0C0C0C] font-bold text-2xl">{step.number}</span>
                      </div>

                      <div className="w-14 h-14 bg-[#00FF7F]/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-[#00FF7F]" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
