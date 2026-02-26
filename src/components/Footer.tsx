import { Code2, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-[#00FF7F]" />
              <span className="text-xl font-bold text-white">InnovaCode Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Innovamos tus ideas, transformamos tu negocio
            </p>
            <p className="text-gray-500 text-sm">
              Cartagena, Colombia
              <br />
              Servicios en toda LATAM
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-[#00FF7F] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/innovacode.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#00FF7F]/20 hover:shadow-[0_0_15px_rgba(0,255,127,0.3)] transition-all group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#00FF7F] transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/innovacode"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#00FF7F]/20 hover:shadow-[0_0_15px_rgba(0,255,127,0.3)] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#00FF7F] transition-colors" />
              </a>
              <a
                href="mailto:contacto@innovacode.tech"
                className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#00FF7F]/20 hover:shadow-[0_0_15px_rgba(0,255,127,0.3)] transition-all group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#00FF7F] transition-colors" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">@innovacode.tech</p>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} InnovaCode Solutions S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidad" className="text-gray-500 hover:text-[#00FF7F] transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-condiciones" className="text-gray-500 hover:text-[#00FF7F] transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
