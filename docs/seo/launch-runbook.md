# Runbook de lanzamiento Astro, SEO y medición

Este documento separa controles automatizados de acciones que requieren credenciales. Ninguna casilla se marca sin URL, captura, exportación o ejecución enlazada como evidencia.

## Responsables y criterio de salida

| Rol | Responsable | Autoridad |
|---|---|---|
| Dueño del lanzamiento | Por asignar | Aprobar ventana, identidad, legales y rollback |
| Desarrollo | Por asignar | Fusionar y vigilar el workflow |
| Hostinger/DNS | Por asignar | Respaldo, FTP, DNS, TLS y restauración |
| SEO/Analytics | Por asignar | Search Console, GTM, GA4 y seguimiento |

Salida: workflow verde, respaldo restaurable, identidad confirmada, formularios probados, propiedad de dominio verificada y registro post-lanzamiento abierto.

## 1. Preflight y aprobaciones

- [ ] Confirmar razón social/nombre comercial, email, teléfono/WhatsApp y NAP; actualizar `src/config/site.ts` y variables públicas.
- [ ] Revisión profesional de privacidad, cookies y términos; retirar avisos de borrador solo después de aprobación.
- [ ] Autorizar por escrito casos, logotipos, cifras y testimonios antes de cambiar `evidenceApproved`.
- [ ] Auditar el webhook n8n: validación del lado servidor, antispam, rate limiting, retención, alertas y destino CRM.
- [ ] Configurar secretos FTP en el environment protegido `production`; exigir aprobación manual en GitHub.
- [ ] Ejecutar `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e`, `npm run lighthouse` y `npm audit --omit=dev`.

## 2. Respaldo, staging y Rollback

- [ ] Descargar un Respaldo fechado de `/public_html`, `.htaccess`, zona DNS y configuración relevante; guardar checksum y ubicación.
- [ ] Registrar SHA y artefacto anterior. El workflow conserva `astro-dist-<sha>` durante 30 días.
- [ ] Probar el artefacto candidato en staging con autenticación HTTP o acceso privado; no depender solo de `robots.txt`.
- [ ] Inventariar archivos remotos. El deploy no usa limpieza destructiva; retirar huérfanos únicamente contra inventario y respaldo aprobados.
- [ ] Ensayar Rollback: descargar el artefacto anterior, restaurarlo sobre `/public_html`, restaurar `.htaccess`, ejecutar `npm run verify:production` y documentar duración.
- [ ] Definir disparadores: 5xx persistente, formulario roto, pérdida de assets, redirect loop, caída material de conversiones o medición duplicada.

## 3. GTM, GA4 y consentimiento

- [ ] Crear propiedad/flujo GA4 y contenedor web GTM; configurar `PUBLIC_GTM_ID` con el ID confirmado.
- [ ] Implementar eventos según `docs/analytics/measurement-plan.md`, sin email, teléfono, nombre ni texto libre.
- [ ] En GTM Preview probar: sin decisión, rechazo, aceptación y revocación; validar Consent Mode v2.
- [ ] En GA4 DebugView confirmar una sola vista/evento por acción y dimensiones permitidas.
- [ ] Publicar el contenedor con versión, responsable y nota de cambios; conservar exportación JSON.

## 4. Publicación y smoke test

- [ ] Abrir ventana, pausar cambios concurrentes y disparar el workflow desde `main`.
- [ ] Confirmar DNS, TLS, host sin `www`, HTTPS, 301 de un salto, 404 real, assets y cabeceras.
- [ ] Ejecutar `npm run verify:production -- --base-url https://innovacode.click` desde una red externa.
- [ ] Probar home, servicios, recurso, cotizador, contacto y legal en móvil/escritorio y Chrome/Firefox/Safari.
- [ ] Enviar formularios de prueba y verificar recepción/CRM; borrar datos de prueba después.

## 5. Search Console e indexación

- [ ] Crear una propiedad de dominio en Search Console y verificarla por DNS; conservar el TXT durante la migración.
- [ ] Asociar Search Console con GA4 donde corresponda y asignar usuarios mínimos necesarios.
- [ ] Enviar `https://innovacode.click/sitemap-index.xml`; confirmar lectura correcta de robots y sitemap hijo.
- [ ] Usar URL Inspection para portada, servicios, los cuatro servicios, cotizador y contacto; solicitar indexación solo a este conjunto prioritario.
- [ ] Comparar respuesta, canonical declarado/elegido, indexabilidad, HTML renderizado y datos estructurados.
- [ ] Ejecutar Rich Results Test en las URLs públicas elegibles y guardar enlaces/capturas.

## 6. Monitoreo: 72 horas y 28 días

Durante las primeras 72 horas revisar al menos dos veces al día: disponibilidad, 5xx/404, redirects, formularios, consentimiento, eventos únicos, cobertura, sitemap y canonicals. Si se activa un disparador, decidir Rollback y registrar el resultado.

Durante 28 días revisar semanalmente: páginas indexadas/excluidas, canonical de Google, Core Web Vitals de campo, consultas/URLs, impresiones, clics, CTR, leads orgánicos cualificados y tasa de conversión. No reaccionar a variaciones diarias aisladas; abrir acciones con evidencia y responsable.

## 7. Cierre

- [ ] Completar `docs/seo/post-launch-log.md`.
- [ ] Confirmar que no quedan redirects encadenados, archivos antiguos indexables o entornos staging públicos.
- [ ] Transferir el calendario editorial y la revisión mensual al responsable operativo.
- [ ] Registrar fecha de cierre, SHA publicado, responsables y enlaces de evidencia.
