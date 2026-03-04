import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nombre:   formData.nombre,
          email:    formData.email,
          empresa:  formData.empresa,
          telefono: formData.telefono || 'No proporcionado',
          mensaje:  formData.mensaje,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

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
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
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
    <section id="contacto" className="py-20 sm:py-32 bg-gradient-to-b from-bg-primary to-bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            ¿Listo para <span className="text-accent">transformar</span> tu negocio?
          </h2>
          <p className="text-text-secondary text-lg">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-8 bg-accent/10 border border-accent rounded-lg p-4 flex items-center space-x-3 animate-fadeInUp">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" aria-label="Éxito" />
            <p className="text-text-primary font-medium">¡Gracias! Te contactaremos pronto</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-center space-x-3 animate-fadeInUp">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" aria-label="Error" />
            <p className="text-text-primary font-medium">Hubo un error. Por favor intenta nuevamente.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-bg-primary border border-border-primary rounded-2xl p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nombre" className="block text-text-primary font-medium mb-2">
                Nombre completo <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`w-full bg-bg-input border ${errors.nombre ? 'border-red-500' : 'border-border-primary'
                  } rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors`}
                placeholder="Tu nombre"
              />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-bg-input border ${errors.email ? 'border-red-500' : 'border-border-primary'
                  } rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors`}
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="empresa" className="block text-text-primary font-medium mb-2">
                Empresa <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className={`w-full bg-bg-input border ${errors.empresa ? 'border-red-500' : 'border-border-primary'
                  } rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors`}
                placeholder="Nombre de tu empresa"
              />
              {errors.empresa && <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>}
            </div>

            <div>
              <label htmlFor="telefono" className="block text-text-primary font-medium mb-2">
                Teléfono
              </label>
               <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-bg-input border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors"
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-text-primary font-medium mb-2">
              Cuéntanos tu proyecto <span className="text-accent">*</span>
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className={`w-full bg-bg-input border ${errors.mensaje ? 'border-red-500' : 'border-border-primary'
                } rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors resize-none`}
              placeholder="Describe brevemente lo que necesitas..."
            />
            {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-accent-text py-4 rounded-lg font-bold text-lg hover:bg-accent-hover hover:shadow-accent transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-accent-text border-t-transparent rounded-full animate-spin mr-2"></div>
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
