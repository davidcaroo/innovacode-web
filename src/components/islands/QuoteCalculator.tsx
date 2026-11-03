import { useMemo, useState } from 'react';

import { pushDataLayer } from '../../lib/analytics';

const PROJECTS = [
  { name: 'Landing Page', cop: 800_000, usd: 218, description: 'Una página enfocada en una oferta y una conversión.' },
  { name: 'Página Web Informativa', cop: 1_500_000, usd: 410, description: 'Hasta cuatro páginas para explicar empresa, servicios y contacto.' },
  { name: 'Tienda Online / E-commerce', cop: 2_600_000, usd: 700, description: 'Catálogo inicial, pagos y capacitación para operar.' },
] as const;

const format = (value: number) => new Intl.NumberFormat('es-CO').format(value);

export default function QuoteCalculator({ whatsappNumber }: { whatsappNumber?: string }) {
  const [project, setProject] = useState<(typeof PROJECTS)[number]>(PROJECTS[0]);
  const [extras, setExtras] = useState(0);
  const [maintenance, setMaintenance] = useState(false);

  const totals = useMemo(() => ({
    cop: project.cop + extras * 150_000 + (maintenance ? 200_000 : 0),
    usd: project.usd + extras * 40 + (maintenance ? 55 : 0),
  }), [project, extras, maintenance]);

  const message = encodeURIComponent(`Hola InnovaCode. Quiero revisar esta estimación:\n\nTipo: ${project.name}\nSecciones adicionales: ${extras}\nMantenimiento mensual: ${maintenance ? 'Sí' : 'No'}\nEstimado: $${format(totals.cop)} COP / $${format(totals.usd)} USD\n\n¿Podemos conversar sobre el alcance?`);
  const contactHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${message}` : `/contacto/?proyecto=${encodeURIComponent(project.name)}`;

  return (
    <section className="quote-shell" aria-labelledby="quote-options">
      <fieldset className="quote-options">
        <legend id="quote-options">1. Tipo de proyecto</legend>
        <div className="quote-projects">
          {PROJECTS.map((option) => (
            <label className={project.name === option.name ? 'quote-card active' : 'quote-card'} key={option.name}>
              <input
                type="radio"
                name="project-type"
                value={option.name}
                checked={project.name === option.name}
                onChange={() => {
                  setProject(option);
                  pushDataLayer({ event: 'quote_start', project_type: option.name });
                }}
              />
              <strong>{option.name}</strong>
              <span>{option.description}</span>
              <b>${format(option.cop)} COP</b>
            </label>
          ))}
        </div>

        <label className="quote-control" htmlFor="extra-sections">
          <span>2. Secciones adicionales: <strong>{extras}</strong></span>
          <input id="extra-sections" aria-label="Secciones adicionales" type="range" min="0" max="10" value={extras} onChange={(event) => setExtras(Number(event.target.value))} />
        </label>

        <label className="quote-toggle">
          <input type="checkbox" checked={maintenance} onChange={(event) => setMaintenance(event.target.checked)} />
          <span><strong>3. Mantenimiento mensual</strong><small>Soporte, actualizaciones y respaldo: $200.000 COP / $55 USD</small></span>
        </label>
      </fieldset>

      <aside className="quote-summary" aria-live="polite">
        <p>Estimación del proyecto</p>
        <strong data-testid="quote-total-cop">${format(totals.cop)} COP</strong>
        <span data-testid="quote-total-usd">${format(totals.usd)} USD</span>
        <small>El mantenimiento es recurrente y se presenta separado en la propuesta final.</small>
        <a
          href={contactHref}
          target={whatsappNumber ? '_blank' : undefined}
          rel={whatsappNumber ? 'noopener noreferrer' : undefined}
          onClick={() => pushDataLayer({ event: 'quote_complete', project_type: project.name, quote_value: totals.cop, currency: 'COP' })}
        >
          Solicitar esta cotización {whatsappNumber ? 'por WhatsApp' : ''}
        </a>
      </aside>
    </section>
  );
}
