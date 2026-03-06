import { useEffect, useRef, useState } from 'react';

import bahariImg from '/bahari-web.webp';
import alianzasImg from '/alianzas-bahari.webp';
import saresImg from '/commercial-sares.webp';
import havaianasImg from '/havaianas-web.webp';

interface Client {
  id: number;
  name: string;
  url: string;
  image: string | null;
  category: string;
  badge: string;
  description: string;
  tags: string[];
}

const clients: Client[] = [
  {
    id: 1,
    name: "Bahari Aqua SAS",
    url: "https://bahariaqua.com",
    image: bahariImg,
    category: "E-commerce B2B",
    badge: "Distribuidor Oficial Havaianas Colombia",
    description: "Desarrollo completo de sitio web e-commerce B2B desde cero.",
    tags: ["E-commerce", "B2B", "Desarrollo completo"],
  },
  {
    id: 2,
    name: "Alianzas Bahari Aqua",
    url: "https://alianzas.bahariaqua.com",
    image: alianzasImg,
    category: "Landing Page",
    badge: "Canal de Alianzas",
    description: "Landing page estratégica para presentación del programa de alianzas.",
    tags: ["Landing Page", "Conversión"],
  },
  {
    id: 3,
    name: "Commercial Sares SAS",
    url: "https://sarescol.com",
    image: saresImg,
    category: "Sitio Corporativo B2C",
    badge: "Canal Distributivo Havaianas Colombia",
    description: "Rediseño de sitio web corporativo en WordPress, optimizado.",
    tags: ["WordPress", "Rediseño", "B2C"],
  },
  {
    id: 4,
    name: "Havaianas Colombia",
    url: "https://havaianas.com.co",
    image: havaianasImg,
    category: "Optimización & Pagos",
    badge: "Marca Oficial",
    description: "Optimización, corrección de errores, formularios e integración de pasarela de pago Wompi.",
    tags: ["Optimización", "Wompi", "E-commerce"],
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function ClientAvatar({ client }: { client: Client }) {
  return (
    <div
      className="mx-auto mb-5 flex-shrink-0 overflow-hidden rounded-full"
      style={{
        width: 120,
        height: 120,
        border: '2px solid var(--color-accent)',
        boxShadow: '0 0 16px var(--color-accent-glow)',
        transition: 'transform 0.3s ease',
      }}
    >
      {client.image ? (
        <img
          src={client.image}
          alt={`Vista previa de ${client.name}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      ) : (
        <div
          className="flex items-center justify-center w-full h-full"
          style={{
            background: 'var(--color-bg-secondary)',
            color: 'var(--color-accent)',
            fontSize: '2rem',
            fontWeight: 700,
          }}
        >
          {getInitials(client.name)}
        </div>
      )}
    </div>
  );
}

export default function Clients() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(clients.length).fill(false));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clients.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }, index * 100);
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
    <section id="clientes" ref={sectionRef} className="py-20 sm:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Nuestros <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Empresas que confían en nuestro trabajo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`group bg-bg-card border border-border-primary rounded-2xl text-center hover:border-accent hover:shadow-accent ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                padding: '28px 24px',
                transition: 'all 0.6s ease-out',
              }}
            >
              {/* Avatar circular */}
              <div className="group-hover:scale-105 transition-transform duration-300">
                <ClientAvatar client={client} />
              </div>

              {/* Nombre */}
              <h3
                className="text-text-primary mb-2"
                style={{ fontWeight: 600, fontSize: '1.1rem' }}
              >
                {client.name}
              </h3>

              {/* Badge */}
              <span
                className="inline-block mb-3"
                style={{
                  background: 'var(--color-accent-glow)',
                  color: 'var(--color-accent)',
                  fontSize: '0.7rem',
                  borderRadius: 999,
                  padding: '2px 10px',
                  fontWeight: 600,
                }}
              >
                {client.badge}
              </span>

              {/* Descripción */}
              <p
                className="text-text-secondary mb-4"
                style={{
                  fontSize: '0.85rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {client.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {client.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-text-muted"
                    style={{
                      fontSize: '0.7rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: 999,
                      padding: '2px 8px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {client.url !== '#' && (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-block"
                  style={{ fontSize: '0.8rem' }}
                >
                  Ver sitio →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
