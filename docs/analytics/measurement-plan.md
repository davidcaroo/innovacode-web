# Plan de medición de InnovaCode

## Principios

- GTM es el único cargador de etiquetas Google; `PUBLIC_GTM_ID` configura el contenedor por entorno.
- Consent Mode v2 inicia `analytics_storage`, `ad_storage`, `ad_user_data` y `ad_personalization` en `denied` antes de cargar GTM.
- Ningún evento contiene nombre, email, teléfono, empresa, mensaje ni texto libre.
- GA4 se configura dentro de GTM. `generate_lead` es el único key event inicial y ocurre después de una respuesta exitosa del endpoint.
- Tráfico interno y entornos de prueba deben excluirse en la propiedad/flujo de datos.

## Taxonomía

| Evento | Disparador exacto | Parámetros permitidos | Key event | Responsable |
|---|---|---|---|---|
| `contact_form_start` | Primer foco dentro del formulario | `form_id=contact` | No | Growth |
| `contact_form_submit` | Respuesta final del endpoint | `form_id`, `status` | No | Growth |
| `generate_lead` | Respuesta HTTP satisfactoria del endpoint | `method=contact_form` | Sí | Comercial |
| `quote_start` | Cambio de tipo de proyecto | `project_type` | No | Growth |
| `quote_complete` | Clic en CTA del resumen | `project_type`, `quote_value`, `currency=COP` | No | Comercial |
| `whatsapp_click` | Clic en enlace WhatsApp | `location` | Opcional | Comercial |
| `email_click` | Clic en email publicado | `location` | No | Growth |
| `phone_click` | Clic en teléfono publicado | `location` | No | Growth |
| `case_study_view` | Vista de caso público | `case_slug` | No | Growth |

## Configuración de GTM

1. Crear Google tag con el Measurement ID de GA4 y consentimiento requerido para analítica.
2. Crear Custom Event triggers para la taxonomía anterior.
3. Mapear únicamente los parámetros permitidos; no usar variables DOM de campos de formulario.
4. Marcar `generate_lead` como key event en GA4 y deduplicar por respuesta exitosa de formulario.
5. Validar en Preview/Tag Assistant y GA4 DebugView con rechazo, aceptación y revocación.
6. Publicar el contenedor únicamente después de aprobar privacidad, ID de propiedad y tráfico interno.
