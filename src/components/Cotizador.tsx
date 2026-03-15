import { useState } from 'react';
import './Cotizador.css';

const EXTRA_SECTION_COP = 150000;
const EXTRA_SECTION_USD = 40;
const WHATSAPP_NUMBER = "573116061807";

export default function Cotizador() {
  const [type, setType] = useState('Landing Page');
  const [baseCop, setBaseCop] = useState(800000);
  const [baseUsd, setBaseUsd] = useState(218);
  const [extras, setExtras] = useState(0);
  const [maintenance, setMaintenance] = useState(false);

  const formatCurrency = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const extrasTotalCop = extras * EXTRA_SECTION_COP;
  const extrasTotalUsd = extras * EXTRA_SECTION_USD;
  
  const totalCop = baseCop + extrasTotalCop + (maintenance ? 200000 : 0);
  const totalUsd = baseUsd + extrasTotalUsd + (maintenance ? 55 : 0);

  const totalWithoutMaintCop = baseCop + extrasTotalCop;
  const totalWithoutMaintUsd = baseUsd + extrasTotalUsd;

  const handleWhatsapp = () => {
    const text = `Hola InnovaCode! 👋 Me interesa cotizar un proyecto:

📌 Tipo: ${type}
📄 Secciones extra: ${extras}
🔧 Mantenimiento mensual: ${maintenance ? 'Sí' : 'No'}

💰 Total estimado: $${formatCurrency(totalWithoutMaintCop)} COP / $${formatCurrency(totalWithoutMaintUsd)} USD${maintenance ? ' + Mantenimiento' : ''}

¿Podemos agendar una consulta gratuita?`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(waUrl, '_blank');
  };

  const projectTypes = [
    {
      name: 'Landing Page',
      cop: 800000,
      usd: 218,
      features: [
        '1 página de venta',
        'Hosting + dominio gratis 1er año',
        'SEO técnico, indexación Google'
      ]
    },
    {
      name: 'Página Web Informativa',
      cop: 1500000,
      usd: 410,
      features: [
        'Hasta 4 secciones',
        '¿Quiénes somos?, contacto',
        'Integración WhatsApp',
        'Hosting + dominio gratis 1er año',
        'SEO, indexación'
      ]
    },
    {
      name: 'Tienda Online / E-commerce',
      cop: 2600000,
      usd: 700,
      features: [
        'Hasta 4 secciones',
        'Carga de hasta 50 productos',
        'Pasarela de pagos y capacitación',
        'Hosting + dominio gratis 1er año',
        'SEO, indexación'
      ]
    }
  ];

  return (
    <section id="cotizador" className="iq-cotizador">
      <div className="iq-container">
        <div className="iq-header">
          <h2 className="iq-title">Cotiza tu <span className="iq-accent-text">Proyecto</span></h2>
          <p className="iq-subtitle">Obtén una estimación instantánea del costo de tu sitio web</p>
        </div>

        <div className="iq-layout">
          {/* Izquierda: Formulario */}
          <div className="iq-form">
            {/* Paso 1 */}
            <div className="iq-step">
              <h3 className="iq-step-title">1. Selecciona el tipo de proyecto</h3>
              <div className="iq-cards">
                {projectTypes.map((pt) => (
                  <div
                    key={pt.name}
                    className={`iq-card ${type === pt.name ? 'iq-active' : ''}`}
                    onClick={() => {
                      setType(pt.name);
                      setBaseCop(pt.cop);
                      setBaseUsd(pt.usd);
                    }}
                  >
                    <h4 className="iq-card-title">{pt.name}</h4>
                    <p className="iq-card-price">${formatCurrency(pt.cop)} COP / ${pt.usd} USD</p>
                    <ul className="iq-card-features">
                      {pt.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Paso 2 */}
            <div className="iq-step">
              <h3 className="iq-step-title">2. Secciones o páginas adicionales</h3>
              <p className="iq-step-desc">Añade secciones extra a tu sitio por <strong>$150.000 COP / $40 USD</strong> cada una.</p>
              <div className="iq-range-container">
                <div className="iq-range-display">
                  <span>Secciones extra:</span>
                  <span className="iq-range-val-text">{extras}</span>
                </div>
                <input
                  type="range"
                  className="iq-range"
                  min="0"
                  max="10"
                  value={extras}
                  step="1"
                  onChange={(e) => setExtras(parseInt(e.target.value))}
                />
              </div>
            </div>

            {/* Paso 3 */}
            <div className="iq-step">
              <div className="iq-toggle-row">
                <div className="iq-toggle-info">
                  <h3 className="iq-step-title" style={{ marginBottom: '8px' }}>3. Mantenimiento mensual</h3>
                  <p className="iq-toggle-price" style={{ marginBottom: maintenance ? '12px' : '0' }}>+$200.000 COP / +$55 USD / mes</p>
                  {maintenance && (
                    <div style={{ marginTop: '10px' }}>
                      <p className="iq-step-desc" style={{ marginBottom: '6px' }}>
                        Actualizaciones, soporte técnico y respaldo mensual de tu sitio.
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--iq-text-sec)' }}>
                        * Este es un costo recurrente mensual, separado del total del proyecto.
                      </p>
                    </div>
                  )}
                </div>
                <label className="iq-switch">
                  <input
                    type="checkbox"
                    checked={maintenance}
                    onChange={(e) => setMaintenance(e.target.checked)}
                  />
                  <span className="iq-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Derecha: Resumen */}
          <div className="iq-summary">
            <div className="iq-summary-card">
              <h3 className="iq-summary-title">Resumen de cotización</h3>
              
              <div className="iq-summary-row">
                <span className="iq-summary-label">{type}</span>
                <span className="iq-summary-val">
                  ${formatCurrency(baseCop)} COP
                  <span className="iq-summary-val-usd">${formatCurrency(baseUsd)} USD</span>
                </span>
              </div>

              {extras > 0 && (
                <div className="iq-summary-row">
                  <span className="iq-summary-label">Secciones extra ({extras})</span>
                  <span className="iq-summary-val">
                    ${formatCurrency(extrasTotalCop)} COP
                    <span className="iq-summary-val-usd">${formatCurrency(extrasTotalUsd)} USD</span>
                  </span>
                </div>
              )}

              {maintenance && (
                <div className="iq-summary-row">
                  <span className="iq-summary-label">Mantenimiento</span>
                  <span className="iq-summary-val">
                    +$200.000 COP / mes
                    <span className="iq-summary-val-usd">+$55 USD / mes</span>
                  </span>
                </div>
              )}

              <hr className="iq-divider" />

              <div className="iq-total">
                <span className="iq-total-label">Total del proyecto</span>
                <div className="iq-total-values">
                  <div className="iq-total-cop">${formatCurrency(totalCop)} COP</div>
                  <div className="iq-total-usd">${formatCurrency(totalUsd)} USD</div>
                </div>
              </div>

              <div className="iq-notes">
                <p>* Hosting y dominio gratis el primer año incluidos.</p>
                <p>* Todos los proyectos incluyen SEO técnico e indexación en Google.</p>
              </div>

              <button onClick={handleWhatsapp} className="iq-btn">
                <svg viewBox="0 0 24 24" className="iq-icon-wa" fill="currentColor">
                  <path d="M12.031 0C5.397 0 .018 5.378.018 12.012c0 2.122.553 4.192 1.603 6.014L.027 24l6.113-1.604c1.748.955 3.737 1.458 5.882 1.458 6.634 0 12.013-5.378 12.013-12.012S18.665 0 12.031 0zm0 21.844c-1.8 0-3.565-.483-5.115-1.4l-.366-.217-3.8.997 1.015-3.704-.237-.378C2.527 15.42 2.017 13.738 2.017 12.012c0-5.523 4.492-10.015 10.014-10.015s10.014 4.492 10.014 10.015-4.492 10.015-10.014 10.015zm5.441-7.443c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.148.297-.346.446-.545.148-.198.198-.346.297-.545.099-.198.05-.396-.025-.544-.075-.149-.669-1.61-.916-2.204-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.273.297-1.041 1.016-1.041 2.477s1.065 2.873 1.214 3.072c.148.198 2.096 3.199 5.077 4.487.71.307 1.264.49 1.694.627.712.227 1.36.195 1.871.118.571-.086 1.758-.718 2.006-1.411.248-.693.248-1.288.174-1.411-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Solicitar esta cotización por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
