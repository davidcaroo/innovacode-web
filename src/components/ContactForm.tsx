import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.empresa.trim()) {
      newErrors.empresa = 'La empresa es requerida';
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xyzkrlob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          empresa: formData.empresa,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          mensaje: '',
        });
        setErrors({});

        // Limpiar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-32 bg-gradient-to-b from-[#0C0C0C] to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF7F] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Listo para <span className="text-[#00FF7F]">transformar</span> tu negocio?
          </h2>
          <p className="text-gray-400 text-lg">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-[#00FF7F]/10 border border-[#00FF7F] rounded-lg p-4 flex items-center space-x-3 animate-fadeInUp">
            <CheckCircle className="w-6 h-6 text-[#00FF7F] flex-shrink-0" aria-label="Éxito" />
            <p className="text-white font-medium">¡Gracias! Te contactaremos pronto</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center space-x-3 animate-fadeInUp">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" aria-label="Error" />
            <p className="text-white font-medium">Hubo un error. Por favor intenta nuevamente.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nombre" className="block text-white font-medium mb-2">
                Nombre completo <span className="text-[#00FF7F]">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full bg-[#1A1A1A] border ${errors.nombre ? 'border-red-500' : 'border-[#2A2A2A]'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors`}
                placeholder="Tu nombre"
              />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email <span className="text-[#00FF7F]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#1A1A1A] border ${errors.email ? 'border-red-500' : 'border-[#2A2A2A]'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="empresa" className="block text-white font-medium mb-2">
                Empresa <span className="text-[#00FF7F]">*</span>
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full bg-[#1A1A1A] border ${errors.empresa ? 'border-red-500' : 'border-[#2A2A2A]'
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors`}
                placeholder="Nombre de tu empresa"
              />
              {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
            </div>

            <div>
              <label htmlFor="telefono" className="block text-white font-medium mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-white font-medium mb-2">
              Cuéntanos tu proyecto <span className="text-[#00FF7F]">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className={`w-full bg-[#1A1A1A] border ${errors.mensaje ? 'border-red-500' : 'border-[#2A2A2A]'
                } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FF7F] transition-colors resize-none`}
              placeholder="Describe brevemente lo que necesitas..."
            />
            {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00FF7F] text-[#0C0C0C] py-4 rounded-lg font-bold text-lg hover:bg-[#00CC66] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#0C0C0C] border-t-transparent rounded-full animate-spin mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                Enviar Solicitud
                <Send className="ml-2 w-5 h-5" aria-label="Enviar" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
