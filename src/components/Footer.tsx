import { Code2, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold text-text-primary">InnovaCode Solutions</span>
            </div>
            <p className="text-text-secondary mb-4">
              Innovamos tus ideas, transformamos tu negocio
            </p>
            <p className="text-text-muted text-sm">
              Cartagena, Colombia
              <br />
              Servicios en toda LATAM
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-text-secondary hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-text-secondary hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-text-secondary hover:text-accent transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-text-secondary hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com/innovacode.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-card rounded-lg flex items-center justify-center hover:bg-accent/20 hover:shadow-accent transition-all group"
              >
                <Instagram className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/innovacode"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-card rounded-lg flex items-center justify-center hover:bg-accent/20 hover:shadow-accent transition-all group"
              >
                <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:contacto@innovacode.tech"
                className="w-10 h-10 bg-bg-card rounded-lg flex items-center justify-center hover:bg-accent/20 hover:shadow-accent transition-all group"
              >
                <Mail className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors" />
              </a>
            </div>
            <p className="text-text-muted text-sm">@innovacode.tech</p>
          </div>
        </div>

        <div className="border-t border-border-primary pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear} InnovaCode Solutions S.A.S. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidad" className="text-text-muted hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-condiciones" className="text-text-muted hover:text-accent transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
