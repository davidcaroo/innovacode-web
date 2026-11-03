# Migración a Astro y plataforma SEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir Innovacode en un sitio Astro multipágina, rápido, rastreable y medible que genere demanda orgánica para software, IA, automatización y desarrollo web en Colombia/LATAM.

**Architecture:** Astro generará HTML estático con layouts y metadatos tipados; el contenido vivirá en Content Collections y los componentes React se conservarán solo como islas para el cotizador y controles interactivos. La capa de crecimiento separará arquitectura de información, SEO técnico, consentimiento/medición, contenido y operación posterior al lanzamiento.

**Tech Stack:** Astro, TypeScript estricto, Tailwind CSS, `@astrojs/react`, `@astrojs/sitemap`, React para islas, Vitest, Playwright, axe, Lighthouse CI, Google Tag Manager, GA4, Search Console y Hostinger/Apache.

**Spec:** `docs/seo/astro-migration-brief.md`

## Global Constraints

- Dominio canónico: `https://innovacode.click` con una sola variante de host y HTTPS forzada.
- Idioma inicial: `es-CO`; no publicar `hreflang` hasta que existan traducciones equivalentes reales.
- Renderizado estático por defecto; ninguna página indexable dependerá de JavaScript para mostrar su contenido principal.
- Una intención primaria por URL; sin páginas duplicadas, thin content ni páginas locales generadas sin evidencia propia.
- Mantener Tailwind y la identidad visual actual durante la primera migración; rediseños mayores quedan fuera de alcance.
- No publicar datos corporativos, testimonios, cifras, perfiles sociales o resultados no confirmados.
- Objetivos de campo en el percentil 75 móvil: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1.
- Presupuesto de laboratorio inicial por plantilla móvil: Performance ≥ 90; Accessibility, Best Practices y SEO ≥ 95; sin errores de consola.
- El consentimiento debe ejecutarse antes de etiquetas de medición y cubrir `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization`.
- No enviar PII a `dataLayer`, GA4, GTM ni URLs; los formularios requieren validación servidor, antispam y estados accesibles.
- Cada tarea termina con pruebas, revisión del resultado generado y un commit pequeño y reversible.

## Review Focus

- Host/protocolo/barra final y parámetros UTM deben resolver a un canonical coherente sin perder atribución.
- Páginas eliminadas, rutas desconocidas y el cotizador HTML duplicado deben devolver redirect o 404 real, nunca un `200` con la portada.
- Sin consentimiento, ninguna cookie analítica/publicitaria debe escribirse; al cambiar o revocar consentimiento, las etiquetas deben actualizarse.
- Con JavaScript bloqueado, cada URL indexable debe conservar contenido, enlaces, title, description, canonical y JSON-LD esencial.
- Imágenes ausentes, contenido incompleto y slugs duplicados deben fallar el build, no producir páginas rotas.

---

## Arquitectura objetivo y mapa de archivos

```text
astro.config.mjs                  Configuración de Astro, `site`, integraciones y build
src/config/site.ts               Identidad, contacto y URLs confirmadas (fuente única)
src/config/navigation.ts         Navegación y enlaces internos
src/content.config.ts            Schemas de servicios, casos y blog
src/content/services/*.mdx       Páginas comerciales editables
src/content/cases/*.mdx          Evidencia y casos de estudio
src/content/blog/*.mdx           Clúster editorial
src/layouts/BaseLayout.astro     Head, accesibilidad, GTM/consentimiento y shell global
src/layouts/MarketingLayout.astro Plantilla comercial y breadcrumbs
src/components/seo/SeoHead.astro Metadatos, canonical, OG/Twitter y robots por URL
src/components/seo/JsonLd.astro  Serialización segura de schema.org
src/components/analytics/*       Consentimiento y eventos de `dataLayer`
src/components/islands/*         Cotizador y controles que requieren hidratación
src/pages/**/*.astro             URLs reales generadas estáticamente
src/pages/404.astro              404 útil con enlaces de recuperación
public/robots.txt                Directivas mínimas y referencia al sitemap
public/_headers                  Cabeceras para seguridad/caché si el host las soporta
public/.htaccess                 Redirects, 404, compresión y caché para Apache
tests/                           Unitarias, contenido, HTML generado, E2E y analítica
lighthouserc.json                Presupuestos de calidad por plantilla
docs/analytics/measurement-plan.md Taxonomía, triggers, parámetros y KPIs
docs/seo/redirect-map.csv        Inventario URL anterior → URL nueva → código
docs/seo/keyword-map.csv         Consulta/intención → URL → etapa → CTA
```

## Mapa de URLs propuesto

| Tipo | URL | Intención principal | Estado inicial |
|---|---|---|---|
| Portada | `/` | marca + propuesta integral | Migrar |
| Hub | `/servicios/` | servicios de desarrollo y automatización | Crear |
| Servicio | `/servicios/desarrollo-software-a-medida/` | software a medida Colombia | Crear primero |
| Servicio | `/servicios/inteligencia-artificial/` | soluciones de IA para empresas | Crear primero |
| Servicio | `/servicios/automatizacion-procesos/` | automatización de procesos | Crear primero |
| Servicio | `/servicios/desarrollo-web/` | desarrollo web empresarial | Crear primero |
| Evidencia | `/casos-de-exito/` y `/casos-de-exito/[slug]/` | validar experiencia/resultados | Migrar solo casos aprobados |
| Conversión | `/cotizador/` | cotizar desarrollo web | Consolidar duplicados |
| Conversión | `/contacto/` | diagnóstico/consulta | Crear y hacer rastreable |
| Confianza | `/nosotros/` y `/metodologia/` | entidad, equipo y proceso | Crear si hay evidencia suficiente |
| Editorial | `/recursos/` y `/recursos/[slug]/` | demanda informacional por clúster | Habilitar, publicar con calendario |
| Legal | `/politica-privacidad/`, `/politica-cookies/`, `/terminos-condiciones/` | cumplimiento y transparencia | Migrar/revisar |

No crear páginas de ciudad o país hasta contar con oferta, evidencia y copy exclusivos. Cartagena puede aparecer como identidad real de la empresa, pero no debe multiplicarse en landings clonadas.

### Task 1: Congelar la línea base y las decisiones de identidad

**Files:**
- Create: `docs/seo/current-state-inventory.csv`
- Create: `docs/seo/redirect-map.csv`
- Create: `docs/seo/keyword-map.csv`
- Create: `src/config/site.ts`
- Test: `tests/config/site.test.ts`

**Interfaces:**
- Produces: `siteConfig` con `name`, `legalName`, `siteUrl`, `locale`, `phone`, `email`, `address`, `social`, `gtmId` y `ga4Id`.
- Produces: inventario de cada URL/fragmento/asset actual con status, canonical, tráfico/backlinks si están disponibles y destino propuesto.

- [ ] **Step 1: Exportar evidencia antes de cambiar URLs**

Guardar de Search Console los últimos 16 meses de consultas, páginas, países y dispositivos; registrar cobertura/indexación, enlaces y sitemaps. Exportar de GA4 los landing pages y conversiones si existe una propiedad. Rastrear producción con Screaming Frog o equivalente y completar `current-state-inventory.csv`.

- [ ] **Step 2: Resolver la identidad canónica**

Confirmar con negocio razón social, NIT/domicilio si se publican, teléfono único (resolver `323...` frente a `311...`), email, logo, redes, horarios y área de servicio. Marcar como `null` lo no confirmado; nunca rellenar con supuestos.

- [ ] **Step 3: Construir el mapa de redirecciones**

Incluir `/cotizador.html → /cotizador/`, rutas legales, variantes con/sin slash y cualquier URL descubierta. Los fragmentos de portada no llevan redirect HTTP: se sustituyen por enlaces a páginas reales o anclas de UX según la intención.

- [ ] **Step 4: Crear el primer mapa de keywords**

Combinar consultas propias, Keyword Planner y SERP manual. Para cada consulta guardar intención, volumen/rango, dificultad cualitativa, URL propietaria, etapa y CTA. Evitar canibalización: una URL propietaria por clúster.

- [ ] **Step 5: Probar la configuración**

Escribir tests que exijan HTTPS, teléfono E.164, emails válidos, URLs absolutas y ausencia de perfiles falsos. Ejecutar `npm test -- tests/config/site.test.ts` y confirmar PASS.

- [ ] **Step 6: Commit**

`git commit -m "docs: define migration baseline and canonical identity"`

### Task 2: Sustituir Vite por el esqueleto Astro sin cambiar el diseño

**Files:**
- Create: `astro.config.mjs`
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/layouts/MarketingLayout.astro`
- Create: `src/pages/index.astro`
- Create: `src/pages/404.astro`
- Modify: `package.json`, `tsconfig.json`, `tailwind.config.js`
- Remove after parity: `src/main.tsx`, `src/App.tsx`, `vite.config.ts`, `index.html`
- Test: `tests/build/static-output.test.ts`

**Interfaces:**
- Consumes: `siteConfig` from Task 1.
- Produces: `BaseLayout` props `{title, description, canonical?, image?, noindex?, schema?}` y build estático en `dist/`.

- [ ] **Step 1: Escribir el test de salida estática**

El test debe fallar si `dist/index.html`/`dist/404.html` no existen, si falta `lang="es-CO"`, si el contenido principal no está en HTML o si hay más de un `h1`.

- [ ] **Step 2: Instalar Astro e integraciones mínimas**

Usar una versión estable actual de Astro compatible con el Node soportado por Hostinger; añadir `@astrojs/react`, `@astrojs/sitemap` y la integración Tailwind recomendada para esa versión. Configurar `site: siteConfig.siteUrl` y `output: 'static'`.

- [ ] **Step 3: Portar shell, estilos y portada**

Transformar presentación pura a `.astro`, preservar clases/tema y eliminar `BrowserRouter`. Usar enlaces `<a href>` reales; reservar React para estado/eventos complejos.

- [ ] **Step 4: Crear un 404 real**

La página debe explicar el error, enlazar a portada/servicios/contacto y quedar fuera del sitemap. Configurar Apache para devolver status 404.

- [ ] **Step 5: Verificar paridad**

Ejecutar `npm run typecheck`, `npm run build`, `npm test` y una comparación visual responsive de portada. Confirmar que la portada funciona con JavaScript desactivado salvo islas explícitamente interactivas.

- [ ] **Step 6: Commit**

`git commit -m "feat: migrate application shell to Astro"`

### Task 3: Crear el sistema de metadatos, canonicals y datos estructurados

**Files:**
- Create: `src/components/seo/SeoHead.astro`
- Create: `src/components/seo/JsonLd.astro`
- Create: `src/lib/seo.ts`
- Create: `tests/seo/head.test.ts`
- Create: `tests/seo/structured-data.test.ts`

**Interfaces:**
- Produces: `buildCanonical(pathname: string): URL`.
- Produces: `SeoHead` con title/description/canonical/robots/OG/Twitter por página.
- Produces: schemas tipados `Organization`, `WebSite`, `Service`, `Article` y `BreadcrumbList`.

- [ ] **Step 1: Fijar tests de head por plantilla**

Comprobar exactamente un title y canonical absoluto por página, descriptions no duplicadas, `og:url === canonical`, imagen social absoluta con dimensiones, `robots` correcto y ausencia de `meta keywords`.

- [ ] **Step 2: Implementar `SeoHead`**

Generar metadatos en build, normalizar slash y excluir query/hash del canonical. Permitir `noindex,follow` solo para estados justificados; 404 debe ser noindex y retornar 404.

- [ ] **Step 3: Implementar JSON-LD basado en verdad visible**

Usar `Organization` como base; usar `LocalBusiness` solo si se confirma atención/local físico. No declarar ratings, reviews, founders, direcciones, redes o servicios que no sean visibles y verificables. Sustituir el logo inexistente por un asset real.

- [ ] **Step 4: Validar seguridad y consistencia**

Los tests deben rechazar JSON inválido, `</script>` sin escapar, URLs no canónicas, breadcrumbs que no coincidan con enlaces visibles y propiedades vacías.

- [ ] **Step 5: Verificar con herramientas de Google**

Ejecutar Rich Results Test/Schema Markup Validator en una URL de cada plantilla y registrar capturas/resultados en el PR.

- [ ] **Step 6: Commit**

`git commit -m "feat: add per-page SEO metadata and structured data"`

### Task 4: Modelar contenido y publicar la arquitectura multipágina

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/services/*.mdx`
- Create: `src/content/cases/*.mdx`
- Create: `src/content/blog/*.mdx`
- Create: `src/pages/servicios/index.astro`
- Create: `src/pages/servicios/[slug].astro`
- Create: `src/pages/nosotros.astro`
- Create: `src/pages/metodologia.astro`
- Create: `src/pages/casos-de-exito/index.astro`
- Create: `src/pages/casos-de-exito/[slug].astro`
- Create: `src/pages/recursos/index.astro`
- Create: `src/pages/recursos/[slug].astro`
- Create: `src/pages/politica-privacidad.astro`
- Create: `src/pages/politica-cookies.astro`
- Create: `src/pages/terminos-condiciones.astro`
- Test: `tests/content/collections.test.ts`

**Interfaces:**
- Produces: schemas con `title`, `description`, `slug`, `publishedAt`, `updatedAt`, `draft`, `image`, `intent`, `cta`, `related` y campos específicos por tipo.

- [ ] **Step 1: Escribir tests de integridad editorial**

Fallar por slug/canonical duplicado, title/description ausente, imagen faltante, fecha futura no intencional, relación rota, caso sin evidencia aprobada o página publicada marcada `draft`.

- [ ] **Step 2: Crear las cuatro páginas de servicio iniciales**

Cada una debe responder una intención distinta e incluir problema, para quién es, entregables, proceso, prueba/caso relacionado, preguntas reales, CTA y enlaces contextuales. No repetir el mismo bloque cambiando keywords.

- [ ] **Step 3: Convertir clientes actuales en casos verificables**

Publicar solo casos autorizados. Separar contexto, reto, intervención, stack, resultado cuantificado con fuente/periodo y testimonio atribuible. Si no hay métricas, describir entregables sin inventarlas.

- [ ] **Step 4: Habilitar recursos por clúster**

Los primeros clúster deben apoyar las páginas comerciales: guías de costos/selección de software, automatización de procesos, adopción práctica de IA y desarrollo web orientado a conversión. Cada artículo enlaza a su hub/servicio y a contenido relacionado.

- [ ] **Step 5: Migrar páginas de confianza y legales**

Crear Nosotros y Metodología solo con identidad, equipo y proceso comprobables. Portar privacidad y términos a HTML propio, añadir una política de cookies coherente con GTM/GA4 y someter el contenido legal a revisión profesional antes de publicar.

- [ ] **Step 6: Generar y probar todas las rutas**

Ejecutar build; comprobar status, heading outline, breadcrumbs, canonical, schema, enlaces internos y contenido sin JavaScript para cada plantilla.

- [ ] **Step 7: Commit**

`git commit -m "feat: add service case-study and resource collections"`

### Task 5: Consolidar conversiones y formularios

**Files:**
- Create: `src/pages/cotizador.astro`
- Create: `src/pages/contacto.astro`
- Create: `src/components/islands/QuoteCalculator.tsx`
- Create: `src/components/forms/ContactForm.astro`
- Create: `src/pages/api/contact.ts` only if hosting supports runtime; otherwise configure an external same-purpose endpoint
- Modify: `public/.htaccess`
- Remove: `public/cotizador.html`
- Test: `tests/e2e/conversions.spec.ts`

**Interfaces:**
- Produces: `track(eventName, params)` hook consumed by Task 7.
- Produces: endpoint contract `{name,email,company?,phone?,message,consent,source}` → `{ok, leadId?}` without echoing PII.

- [ ] **Step 1: Probar los recorridos de conversión antes del port**

Cubrir teclado/móvil, cálculo COP/USD, mantenimiento recurrente, validación, errores de red, doble envío, mensaje WhatsApp y CTA desde servicio/caso.

- [ ] **Step 2: Portar el cotizador como una sola isla React**

Hidratar con `client:visible`; renderizar por servidor el encabezado, descripción, precios base y notas. Corregir accesibilidad de tarjetas/range/toggle y definir una sola fuente para precios y teléfono.

- [ ] **Step 3: Publicar un contacto funcional**

Eliminar el formulario oculto. Implementar validación cliente/servidor, honeypot/rate limit o alternativa soportada, consentimiento explícito y mensajes accesibles. Mantener secretos solo en servidor.

- [ ] **Step 4: Consolidar URLs**

Eliminar `public/cotizador.html`, crear 301 a `/cotizador/` y probar que no exista contenido duplicado ni enlaces a la URL vieja.

- [ ] **Step 5: Verificar sin PII en analítica**

Inspeccionar `dataLayer`, requests y URL: nunca deben contener nombre, email, teléfono, empresa o mensaje.

- [ ] **Step 6: Commit**

`git commit -m "feat: consolidate quote and contact conversion journeys"`

### Task 6: Automatizar sitemap, robots, feeds y enlazado rastreable

**Files:**
- Modify: `astro.config.mjs`
- Replace: `public/robots.txt`
- Create: `src/pages/rss.xml.ts` when blog publishing begins
- Create: `tests/seo/crawlability.test.ts`
- Create: `tests/seo/links.test.ts`

**Interfaces:**
- Consumes: rutas publicadas de Astro Content Collections.
- Produces: `/sitemap-index.xml` o `/sitemap-0.xml`, `/robots.txt` y opcional `/rss.xml`.

- [ ] **Step 1: Definir pruebas de crawlabilidad**

El sitemap solo debe contener URLs 200, canónicas, indexables y sin hash/query; debe excluir drafts, 404 y endpoints. Todo enlace interno debe apuntar a una ruta existente y usar `<a href>`.

- [ ] **Step 2: Generar sitemap desde el build**

Eliminar el XML manual y suprimir `changefreq`/`priority` artificiales. Incluir `lastmod` real solo cuando exista una fecha de modificación mantenida.

- [ ] **Step 3: Simplificar robots**

Permitir assets necesarios, enlazar el sitemap canónico y retirar reglas irrelevantes/crawl-delay. No usar robots para ocultar URLs que deban ser `noindex` o protegidas.

- [ ] **Step 4: Ejecutar crawler local**

Probar que cada URL esté a ≤3 clics desde una página hub, sin huérfanas, cadenas de redirects, soft-404, enlaces rotos o canonicals conflictivos.

- [ ] **Step 5: Commit**

`git commit -m "feat: automate sitemap robots and crawl validation"`

### Task 7: Diseñar GTM, GA4, consentimiento y medición de negocio

**Files:**
- Create: `docs/analytics/measurement-plan.md`
- Create: `src/components/analytics/ConsentBanner.astro`
- Create: `src/components/analytics/TagManager.astro`
- Create: `src/lib/analytics.ts`
- Create: `tests/e2e/consent-and-analytics.spec.ts`

**Interfaces:**
- Produces: `pushDataLayer(event: AnalyticsEvent): void` con union tipada.
- Eventos iniciales: `generate_lead`, `contact_form_start`, `contact_form_submit`, `quote_start`, `quote_complete`, `whatsapp_click`, `email_click`, `phone_click`, `case_study_view`.

- [ ] **Step 1: Aprobar el plan de medición**

Para cada evento documentar pregunta de negocio, trigger exacto, parámetros permitidos, owner, propiedad GA4, key event sí/no, deduplicación y prueba. `generate_lead` solo ocurre tras confirmación real, no al hacer clic en enviar.

- [ ] **Step 2: Implementar consentimiento antes de GTM**

Elegir CMP o banner propio tras revisión legal. Establecer defaults y actualizaciones de Consent Mode v2, persistir preferencias, ofrecer aceptar/rechazar/configurar con la misma facilidad y permitir revocación desde el footer.

- [ ] **Step 3: Instalar un solo contenedor GTM**

Configurar ID por variable de entorno validada; incluir snippet y `noscript` una vez. Dentro de GTM crear Google tag/GA4, triggers con consentimiento, exclusión de tráfico interno y dominios de referencia no deseados. No duplicar `gtag.js` fuera de GTM.

- [ ] **Step 4: Conectar eventos tipados**

Instrumentar CTAs y formularios con nombres/params del plan. Conservar UTM/gclid durante el recorrido sin incorporarlos al canonical y sin convertirlos en PII.

- [ ] **Step 5: Probar cuatro estados**

Con Playwright + Tag Assistant/GA4 DebugView verificar: primera visita sin decisión, rechazo, aceptación y revocación. Confirmar consentimiento, cookies, page views, eventos únicos y ausencia de PII.

- [ ] **Step 6: Commit**

`git commit -m "feat: add consent-aware GTM and GA4 measurement"`

### Task 8: Alcanzar Core Web Vitals, accesibilidad y seguridad

**Files:**
- Create: `lighthouserc.json`
- Create: `tests/e2e/accessibility.spec.ts`
- Create: `public/_headers`
- Modify: `src/styles/*`, image components and layouts as reported
- Modify: `public/.htaccess`

**Interfaces:**
- Produces: quality gates ejecutables en CI para las plantillas home, servicio, caso, recurso, cotizador, contacto y legal.

- [ ] **Step 1: Medir antes de optimizar**

Registrar Lighthouse móvil 3 veces por plantilla y WebPageTest en Colombia/ubicación cercana cuando sea posible. Identificar elemento LCP, JS/CSS no usado, fuentes, shifts e interacciones lentas.

- [ ] **Step 2: Optimizar assets y renderizado**

Usar `astro:assets`, dimensiones/aspect-ratio explícitos, AVIF/WebP, `srcset/sizes`, lazy load fuera de viewport, preload solo del LCP, fuentes locales/subset con `font-display`, CSS crítico razonable y cero hidratación innecesaria.

- [ ] **Step 3: Corregir accesibilidad**

Garantizar skip link, landmarks, headings, foco visible, menú/tema/cotizador por teclado, labels y errores asociados, targets táctiles, contraste AA y respeto por `prefers-reduced-motion`.

- [ ] **Step 4: Configurar cabeceras y caché**

Aplicar compresión y caché inmutable a assets hasheados; HTML revalidable. Añadir CSP compatible con GTM/GA4, `Referrer-Policy`, `X-Content-Type-Options` y `Permissions-Policy`, probándolas en Hostinger.

- [ ] **Step 5: Ejecutar quality gates**

`npm run lint`, `npm run typecheck`, `npm test`, Playwright/axe y Lighthouse CI deben cumplir los presupuestos globales.

- [ ] **Step 6: Commit**

`git commit -m "perf: enforce web vitals accessibility and security budgets"`

### Task 9: Hacer seguro el despliegue y la migración de URLs

**Files:**
- Modify: `.github/workflows/deploy.yml`
- Modify: `public/.htaccess`
- Create: `.github/workflows/quality.yml`
- Create: `scripts/verify-production.mjs`
- Test: `tests/deploy/redirects.test.ts`

**Interfaces:**
- Consumes: `docs/seo/redirect-map.csv`.
- Produces: artefacto estático validado, redirects 301 de un salto y smoke test post-deploy.

- [ ] **Step 1: Actualizar runtime y gates**

Usar una versión Node soportada por la versión elegida de Astro. Antes de deploy ejecutar lint, typecheck, tests, build, enlaces, HTML y Lighthouse; subir `dist/` como artefacto inmutable.

- [ ] **Step 2: Generar/probar redirects**

Convertir el CSV aprobado en reglas Apache. Probar variante HTTP, `www`, slash, rutas viejas, `cotizador.html`, UTM y 404; no crear loops ni cadenas.

- [ ] **Step 3: Evitar archivos huérfanos en producción**

Cambiar la estrategia FTP para eliminar de forma controlada los archivos administrados por el deploy o publicar en directorio versionado y hacer swap. Respaldar `public_html`, listar el target y conservar rollback verificable antes de cualquier limpieza.

- [ ] **Step 4: Probar staging con protección de indexación**

Staging debe requerir autenticación o estar fuera de acceso público; no confiar solo en `robots.txt`. Ejecutar crawler, formularios, GTM Preview, responsive, navegadores y redirects.

- [ ] **Step 5: Ensayar rollback**

Documentar y probar restauración del artefacto anterior, incluidas reglas `.htaccess`. Definir responsables y ventana de lanzamiento.

- [ ] **Step 6: Commit**

`git commit -m "ci: add Astro quality gates safe deploy and rollback"`

### Task 10: Lanzar Search Console y validar indexación

**Files:**
- Create: `docs/seo/launch-runbook.md`
- Create: `docs/seo/post-launch-log.md`

**Interfaces:**
- Produces: checklist firmado con propietario, fecha, resultado y evidencia para cada control de lanzamiento.

- [ ] **Step 1: Preparar propiedad y verificaciones**

Crear/verificar propiedad de dominio en Search Console mediante DNS. Conservar verificación en deploy; configurar GA4/GTM y vincular Search Console con GA4 cuando corresponda.

- [ ] **Step 2: Ejecutar el preflight final**

Comparar URL por URL inventario, redirects, status, canonical, robots, sitemap, schema, titles, descriptions, hreflang ausente, contenido renderizado, headers, 404 y conversiones.

- [ ] **Step 3: Publicar y hacer smoke test inmediato**

Verificar home y una URL por plantilla desde fuera de sesión/CDN. Confirmar DNS/TLS, assets, 301, 404, formularios, GTM/consentimiento y analytics en tiempo real.

- [ ] **Step 4: Enviar sitemap e inspeccionar URLs prioritarias**

Enviar el sitemap generado. Inspeccionar portada, hub, cuatro servicios, cotizador y contacto; solicitar indexación solo para el conjunto prioritario, sin automatizar solicitudes masivas.

- [ ] **Step 5: Monitorizar 72 horas y 28 días**

Diariamente la primera semana: 5xx/404, caída de conversiones, páginas excluidas, canonicals elegidos por Google y CWV. Semanalmente: impresiones/clics/CTR/posición por consulta/URL, indexación, conversion rate y leads cualificados. Corregir por evidencia, no por fluctuaciones diarias.

- [ ] **Step 6: Commit**

`git commit -m "docs: add Search Console launch and monitoring runbook"`

### Task 11: Operar el sistema de posicionamiento y escalamiento

**Files:**
- Create: `docs/seo/editorial-calendar.csv`
- Create: `docs/seo/monthly-review-template.md`
- Modify monthly: `docs/seo/keyword-map.csv`

**Interfaces:**
- Consumes: Search Console, GA4, CRM/lead outcomes and sales feedback.
- Produces: backlog mensual priorizado por impacto, evidencia y esfuerzo.

- [ ] **Step 1: Establecer cadencia editorial de 90 días**

Priorizar primero las cuatro páginas de servicio y 2–3 casos sólidos; después publicar contenido de soporte por clúster. Cada pieza necesita autor/revisor, experiencia propia, fecha de revisión, fuentes y CTA.

- [ ] **Step 2: Construir autoridad real**

Optimizar Google Business Profile solo si existe elegibilidad local; mantener NAP coherente. Conseguir menciones/enlaces mediante socios, clientes autorizados, directorios sectoriales legítimos, charlas, datos propios y casos; evitar compra masiva de enlaces.

- [ ] **Step 3: Revisar por intención, no solo ranking**

Mensualmente agrupar consultas por clúster, detectar canibalización y gaps, mejorar snippets de URLs con impresiones/CTR bajo, actualizar contenido decreciente y enlazar desde páginas con autoridad interna.

- [ ] **Step 4: Medir negocio**

Dashboard mínimo: leads orgánicos cualificados, tasa de conversión por landing, pipeline/ingreso asistido cuando exista CRM, clics no-branded, share de URLs indexadas y CWV de campo. Rankings aislados son diagnóstico, no objetivo final.

- [ ] **Step 5: Definir gates de escalamiento**

Solo ampliar a nuevas verticales/ciudades/países cuando el clúster anterior tenga oferta diferenciada, caso/evidencia, demanda comprobada, conversión medible y capacidad comercial. Cada nueva URL entra por Content Collection, tests y sitemap automático.

- [ ] **Step 6: Commit**

`git commit -m "docs: establish organic growth operating cadence"`

## Secuencia, responsables y salida por fase

| Fase | Tareas | Resultado verificable | Duración orientativa |
|---|---|---|---|
| 0. Descubrimiento | 1 | baseline, identidad y mapas aprobados | 3–5 días |
| 1. Plataforma | 2–3 | Astro estático + SEO por página | 5–8 días |
| 2. Arquitectura/contenido | 4–6 | URLs comerciales, casos, conversiones y crawl | 8–15 días |
| 3. Datos/calidad | 7–8 | medición consentida + presupuestos | 5–8 días |
| 4. Lanzamiento | 9–10 | deploy reversible + Search Console estable | 3–5 días + 28 días de observación |
| 5. Crecimiento | 11 | ciclo editorial, autoridad y CRO | continuo, revisión mensual |

Las duraciones dependen sobre todo de la aprobación de identidad, accesos Google y disponibilidad de evidencia/copy. La migración técnica puede avanzar con valores `null`, pero esos datos no deben publicarse hasta confirmarse.

## Criterios de aceptación globales

- Todas las URLs indexables entregan HTML completo, status correcto, metadatos únicos, canonical propio y enlaces rastreables.
- Sitemap y robots se generan/validan; no contienen hashes, query strings, drafts, redirects, 404 ni URLs no canónicas.
- Rutas antiguas relevantes redirigen en un salto y la URL duplicada `/cotizador.html` desaparece.
- Datos estructurados pasan validación y coinciden con contenido/datos corporativos confirmados.
- GTM carga una sola vez, GA4 registra los eventos aprobados, Consent Mode v2 funciona y no se filtra PII.
- Formularios y WhatsApp producen conversiones comprobables; los errores son accesibles y recuperables.
- Las plantillas cumplen los presupuestos Lighthouse y se monitorizan CWV reales en Search Console/CrUX cuando haya datos.
- CI bloquea regresiones de tipos, build, enlaces, accesibilidad, SEO, analytics y rendimiento.
- Search Console tiene propiedad de dominio, sitemap aceptado y URLs prioritarias inspeccionadas.
- Existe un responsable y una cadencia para contenido, autoridad, CRO y revisión mensual.

## Referencias normativas

- Google Search Essentials y guías para desarrolladores/JavaScript SEO.
- Google Search Central: sitemaps, canonicals, datos estructurados y Core Web Vitals.
- Google Tag Platform: Consent Mode v2 y Google Tag Manager.
- Documentación oficial de Astro: renderizado estático, islas, Content Collections y sitemap.

