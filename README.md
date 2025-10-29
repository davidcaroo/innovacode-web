# InnovaCode - Sitio web (Vite + React + TypeScript + TailwindCSS)

Documento README en español para el proyecto presente en esta carpeta.

## Tecnologías

- Vite (bundler y servidor de desarrollo)
- React 18 + TypeScript
- Tailwind CSS (estilos utilitarios)
- PostCSS + Autoprefixer
- ESLint (linter)
- Lucide (iconos) — paquete `lucide-react`
- Supabase client (`@supabase/supabase-js`) está listado en dependencias (opcional, no utilizado actualmente)

## Estructura del proyecto (resumen)

- `index.html` - entrada HTML principal
- `package.json` - scripts y dependencias
- `vite.config.ts` - configuración de Vite
- `src/` - código fuente de la aplicación
  - `main.tsx` - punto de arranque de React
  - `App.tsx` - layout principal y montaje de componentes
  - `index.css` - estilos globales (incluye Tailwind)
  - `components/` - componentes reutilizables:
    - `Navigation.tsx` - barra de navegación
    - `Hero.tsx` - sección hero/presentación
    - `Services.tsx` - sección de servicios
    - `ValueProposition.tsx` - propuesta de valor
    - `Process.tsx` - proceso de trabajo / pasos
    - `ContactForm.tsx` - formulario de contacto (validación en cliente, envío simulado)
    - `Footer.tsx` - pie de página
    - `WhatsAppButton.tsx` - botón flotante que abre chat de WhatsApp
    - `BackToTop.tsx` - botón para volver arriba

## Funcionalidades detectadas

- Single Page Application (SPA) con navegación interna por secciones (anclas como `#contacto`).
- Diseño responsivo implementado con Tailwind CSS.
- Formulario de contacto con validación en cliente (campos obligatorios, validación de email, longitud mínima del mensaje). El envío está simulado con un retardo y muestra estados: enviando, éxito y error.
- Botón flotante de WhatsApp que abre una conversación prellenada (usa enlace `https://wa.me/` con un número de ejemplo `+57 300 123 4567`).
- Componentes visuales con iconos de `lucide-react`.

## Especificaciones y detalles importantes

- TypeScript está configurado. Ejecutar `npm run typecheck` para validar tipos sin emitir artefactos.
- ESLint está presente; puedes ejecutar `npm run lint` para revisar el código.
- `@supabase/supabase-js` aparece en `package.json` pero ninguno de los componentes lo utiliza actualmente; si se quiere integrar envío de formularios o persistencia, se puede usar Supabase o cualquier backend.
- El formulario actual hace un `console.log` y simula el envío; deberás reemplazar la lógica de envío con una llamada real a un endpoint cuando quieras enviar mensajes a producción.
- El enlace de WhatsApp incluye un número y mensaje codificado; cámbialo en `src/components/WhatsAppButton.tsx` para usar el número real.

## Scripts útiles (definidos en `package.json`)

- `npm run dev` — inicia el servidor de desarrollo (Vite) en modo hot-reload.
- `npm run build` — construye la aplicación para producción con Vite.
- `npm run preview` — levanta una versión local estática de la build para pruebas.
- `npm run lint` — ejecuta ESLint sobre el proyecto.
- `npm run typecheck` — ejecuta TypeScript para solo chequear tipos.

## Cómo ejecutar el proyecto (local)

1. Instala dependencias:

```powershell
npm install
```

2. Levantar servidor de desarrollo:

```powershell
npm run dev
```

3. Abrir en el navegador la URL que Vite muestre (por defecto `http://localhost:5173`).

4. Producción (build):

```powershell
npm run build; npm run preview
```

## Recomendaciones y pasos siguientes (propuestos)

- Integrar un backend real para el `ContactForm`:
  - Usar Supabase (la dependencia ya está incluida): crear una tabla `leads` y enviar las entradas desde el cliente o desde una API serverless.
  - O bien, crear un endpoint en un servidor que envíe correos (SendGrid, Mailgun) o guarde en una BBDD.
- Añadir variables de entorno en `.env` (no incluidas en el repo):
  - `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (si se usa Supabase desde el cliente)
- Reemplazar el número de WhatsApp en `src/components/WhatsAppButton.tsx` por el real.
- Añadir tests unitarios y/o de integración (por ejemplo con Vitest o Jest) para componentes clave.

## Notas finales

El proyecto es un starter moderno: Vite + React + TypeScript con Tailwind. La UI está lista y la lógica de formulario está preparada para integrarse con un backend. El README aquí generado documenta lo esencial para comenzar a desarrollar y desplegar el sitio.
