# Brief de migración Astro y crecimiento orgánico

## Objetivo

Migrar `innovacode.click` de una SPA React/Vite a un sitio Astro estático, multipágina y orientado a captación, conservando el enfoque comercial actual: software a medida, inteligencia artificial, automatización y desarrollo web para empresas de Colombia y LATAM.

El resultado debe ser fácil de rastrear e indexar, rápido, medible, accesible, mantenible y capaz de crecer mediante páginas de servicio, casos de estudio y contenido editorial. La migración no debe prometer una posición concreta en Google: debe crear las condiciones técnicas, editoriales y de autoridad necesarias para competir por consultas relevantes.

## Estado actual verificado en el repositorio

- Aplicación React 18 + Vite + TypeScript + Tailwind, con enrutamiento cliente.
- Tres rutas declaradas: `/`, `/politica-privacidad` y `/terminos-condiciones`.
- La portada concentra Hero, servicios, propuesta de valor, clientes, proceso y cotizador; el formulario de contacto existe, pero está oculto.
- El cotizador es la principal isla interactiva y termina en WhatsApp.
- El despliegue actual compila a `dist/` y publica por FTP en Hostinger sin limpiar archivos obsoletos.
- El sitemap está escrito a mano e incluye fragmentos `/#hero`, `/#servicios`, etc.; esos fragmentos no representan documentos indexables independientes.
- Todas las rutas dependen del mismo `index.html`, por lo que comparten title, description, canonical, Open Graph y JSON-LD.
- El JSON-LD referencia `/logo.png`, archivo que no existe en `public/`, y declara perfiles sociales/datos corporativos que deben confirmarse antes de publicar.
- Hay inconsistencia entre los teléfonos comerciales: `+57 323 223 1834` y `+57 311 606 1807`.
- Existen un cotizador React y otro `public/cotizador.html`; debe quedar una sola URL canónica.
- No se detectó instrumentación de Google Tag Manager, GA4, Consent Mode ni eventos de conversión.
- No se detectaron pruebas automáticas, auditoría Lighthouse ni validación automática de enlaces, sitemap o datos estructurados.

## Audiencia y conversión

- Audiencia primaria: decisores de pymes y empresas que necesitan digitalizar procesos, construir productos o automatizar operaciones.
- Geografía inicial: Colombia, con alcance comercial en LATAM.
- Conversiones principales: solicitud de diagnóstico/consulta, envío de formulario, clic a WhatsApp y cotización iniciada/completada.
- Conversiones secundarias: clic en email/teléfono, lectura de caso de estudio, profundidad de scroll y navegación entre servicio y caso relacionado.

## Principios de producto y SEO

1. Cada intención de búsqueda importante tendrá una URL HTML real, contenido único y un CTA coherente.
2. Astro entregará HTML estático por defecto; solo se hidratarán las funciones que realmente requieran JavaScript.
3. Los datos estructurados describirán exclusivamente información visible, cierta y verificable.
4. El contenido demostrará experiencia con casos, proceso, responsables, resultados y evidencia; no se crearán páginas programáticas o locales sin valor propio.
5. La medición se diseñará antes de instalar etiquetas y respetará el consentimiento y la política de privacidad.
6. Se preservarán o redirigirán las URLs existentes para evitar pérdida de señales durante el lanzamiento.

## Decisiones pendientes que bloquean publicación, no desarrollo

- Confirmar razón social, NIT si aplica, domicilio real, teléfono único, email, horarios, logo oficial y perfiles sociales.
- Confirmar si InnovaCode atiende presencialmente; solo entonces usar un subtipo `LocalBusiness`. En caso contrario usar `Organization`/`ProfessionalService` sin inventar dirección.
- Confirmar propiedad de Search Console, cuenta GTM, propiedad GA4 y si se usará Google Ads.
- Aprobar el mapa de palabras clave con datos reales de Search Console/Keyword Planner antes de fijar copy final.
- Definir responsable editorial y capacidad de publicar/actualizar casos y artículos.

