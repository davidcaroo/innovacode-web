# 🚀 InnovaCode Solutions - Sitio Web Corporativo

![InnovaCode Solutions](https://img.shields.io/badge/Version-1.0.0-00FF7F?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

> Sitio web corporativo moderno para InnovaCode Solutions - Empresa especializada en desarrollo de software a medida, IA y automatizaciones en Colombia y LATAM.

---

## 📋 Tabla de Contenidos

- [✨ Características](#-características)
- [🎨 Diseño y UX](#-diseño-y-ux)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🤖 Integración n8n](#-integración-n8n)
- [📦 Instalación](#-instalación)
- [🚀 Uso](#-uso)
- [🏗️ Estructura del Proyecto](#️-estructura-del-proyecto)
- [🔍 SEO y Optimizaciones](#-seo-y-optimizaciones)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Despliegue](#-despliegue)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## ✨ Características

### Funcionalidades Principales

- ✅ **Single Page Application (SPA)** con navegación fluida y animaciones
- ✅ **Formulario de Contacto** con validación en tiempo real
- ✅ **Botón de WhatsApp flotante** con mensaje prellenado
- ✅ **Scroll suave** entre secciones con navegación inteligente
- ✅ **Botón "Volver arriba"** que aparece al hacer scroll
- ✅ **Animaciones on-scroll** para mejor experiencia visual
- ✅ **Tema oscuro profesional** con acentos en verde neón (#00FF7F)
- ✅ **Totalmente responsive** - Optimizado para móvil, tablet y desktop

### Secciones del Sitio

| Sección | ID | Descripción |
|---------|------|-------------|
| **Hero** | `#hero` | Presentación principal con call-to-action |
| **Servicios** | `#servicios` | 4 servicios principales con iconos animados |
| **Propuesta de Valor** | `#valor` | Beneficios y diferenciales de la empresa |
| **Proceso** | `#proceso` | Metodología de trabajo en 4 pasos |
| **Contacto** | `#contacto` | Formulario funcional con validaciones |
| **Footer** | - | Links de navegación y redes sociales |

---

## 🎨 Diseño y UX

### Paleta de Colores

```css
/* Colores Principales */
--primary-green: #00FF7F;      /* Verde neón - Acentos y CTAs */
--primary-dark: #0C0C0C;       /* Negro profundo - Fondo principal */
--secondary-dark: #1A1A1A;     /* Gris oscuro - Fondos secundarios */
--border-color: #2A2A2A;       /* Gris medio - Bordes */
--text-light: #FFFFFF;         /* Blanco - Textos principales */
--text-gray: #9CA3AF;          /* Gris claro - Textos secundarios */
```

### Tipografía

- **Familia**: [Urbanist](https://fonts.google.com/specimen/Urbanist) (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **Características**: Moderna, legible, profesional

### Componentes de UI

#### Botones
- **Primario**: Fondo verde neón (#00FF7F) con hover effect y sombra brillante
- **Secundario**: Borde verde con fondo transparente
- **Estados**: Hover, disabled, loading

#### Tarjetas
- Fondo oscuro (#1A1A1A)
- Bordes sutiles (#2A2A2A)
- Hover con scale transform y borde verde brillante
- Sombras suaves con efecto glow

#### Animaciones
- **Fade in up**: Entrada de elementos desde abajo
- **Scale on hover**: Crecimiento sutil al pasar el mouse
- **Smooth scroll**: Navegación fluida entre secciones
- **Pulse**: Animación continua en botón de WhatsApp

---

## 🛠️ Stack Tecnológico

### Frontend Framework
- **React 18.3.1** - Biblioteca para interfaces de usuario
- **TypeScript 5.5.3** - Tipado estático para JavaScript
- **Vite 5.4.2** - Build tool ultrarrápido con HMR

### Estilos
- **TailwindCSS 3.4.1** - Framework CSS utility-first
- **PostCSS 8.4.35** - Procesador de CSS
- **Autoprefixer 10.4.18** - Prefijos de navegadores automáticos

### Iconos y Assets
- **Lucide React 0.344.0** - Biblioteca de iconos SVG moderna
- **Google Fonts** - Tipografía Urbanist

### Linting y Calidad
- **ESLint 9.9.1** - Linter de JavaScript/TypeScript
- **TypeScript ESLint 8.3.0** - Reglas de ESLint para TypeScript
- **React Hooks ESLint Plugin** - Validación de hooks de React

### Herramientas de Desarrollo
- **Vite Plugin React** - Fast Refresh para desarrollo
- **TypeScript Compiler** - Verificación de tipos

---

## 🤖 Integración n8n

### **Formulario de Contacto Automatizado**

El formulario de contacto está integrado con **n8n** (plataforma de automatización de flujos de trabajo) para procesar los leads de forma automática.

#### 🔄 **Flujo de Automatización:**

```
Usuario completa formulario → POST a webhook n8n → Validación de datos 
→ Guardar en Google Sheets → Respuesta JSON al frontend
```

#### ⚙️ **Configuración:**

- **Webhook URL**: `https://n8nhero-ac01c953fd21.herokuapp.com/webhook/contacto-web-lead`
- **Método**: POST
- **Content-Type**: application/json

#### 📤 **Datos enviados:**

```json
{
  "nombre": "Nombre del cliente",
  "email": "email@ejemplo.com",
  "empresa": "Nombre de la empresa",
  "telefono": "+57 300 123 4567",
  "mensaje": "Descripción del proyecto..."
}
```

#### 📥 **Respuesta esperada de n8n:**

**Éxito:**
```json
{
  "status": "success",
  "message": "Lead guardado correctamente"
}
```

**Error:**
```json
{
  "status": "error",
  "message": "Descripción del error"
}
```

#### ✨ **Características del workflow:**

- ✅ **Validación de datos** en servidor
- ✅ **Almacenamiento en Google Sheets** para seguimiento de leads
- ✅ **Manejo de errores** robusto (400/500)
- ✅ **Respuestas estructuradas** en JSON
- ✅ **Hosted en Heroku** para alta disponibilidad

---

## 📦 Instalación

### Prerrequisitos

- **Node.js** >= 16.x
- **npm** >= 8.x o **yarn** >= 1.22.x

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/davidcaroo/innovacode-web.git
   cd innovacode-web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   cp .env.example .env
   ```
   
   Edita `.env` y configura:
   ```env
   VITE_N8N_WEBHOOK_URL=https://tu-webhook-url.com
   ```

4. **Verificar instalación**
   ```bash
   npm run typecheck
   ```

---

## 🚀 Uso

### Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de Producción

Genera una build optimizada:

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

### Preview de Build

Previsualiza la build de producción localmente:

```bash
npm run preview
```

### Otros Scripts

| Script | Descripción |
|--------|-------------|
| `npm run lint` | Ejecuta ESLint para revisar el código |
| `npm run typecheck` | Verifica tipos de TypeScript sin compilar |

---

## 🏗️ Estructura del Proyecto

```
innovacode-web/
├── public/                      # Archivos estáticos
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── og-image.jpg            # Imagen Open Graph (1200x630)
│   ├── robots.txt              # Directivas para crawlers
│   ├── sitemap.xml             # Mapa del sitio
│   └── site.webmanifest        # Manifest PWA
├── src/
│   ├── components/             # Componentes React
│   │   ├── BackToTop.tsx       # Botón volver arriba
│   │   ├── ContactForm.tsx     # Formulario de contacto
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── Hero.tsx            # Sección principal
│   │   ├── Navigation.tsx      # Barra de navegación
│   │   ├── Process.tsx         # Proceso de trabajo
│   │   ├── Services.tsx        # Servicios ofrecidos
│   │   ├── ValueProposition.tsx # Propuesta de valor
│   │   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   ├── App.tsx                 # Componente raíz
│   ├── main.tsx                # Punto de entrada
│   ├── index.css               # Estilos globales + Tailwind
│   └── vite-env.d.ts           # Tipos de Vite
├── index.html                  # HTML principal
├── package.json                # Dependencias y scripts
├── tsconfig.json               # Configuración TypeScript
├── tailwind.config.js          # Configuración Tailwind
├── vite.config.ts              # Configuración Vite
└── README.md                   # Este archivo
```

---

## 🔍 SEO y Optimizaciones

### Meta Tags Implementados

✅ **Meta Tags Básicos**
- Title optimizado con keywords
- Description (156 caracteres)
- Keywords relevantes
- Canonical URL
- Author y robots

✅ **Open Graph (Facebook, LinkedIn)**
- og:title, og:description, og:image
- og:type, og:url, og:locale
- Imagen optimizada 1200x630px

✅ **Twitter Cards**
- twitter:card (summary_large_image)
- twitter:title, twitter:description
- twitter:image

✅ **Schema.org JSON-LD**
- Tipo: SoftwareCompany
- Información de contacto
- Servicios ofrecidos
- Links de redes sociales

### Archivos SEO

| Archivo | Descripción |
|---------|-------------|
| `robots.txt` | Permite indexación completa, referencia al sitemap |
| `sitemap.xml` | Mapa con todas las secciones (prioridades configuradas) |
| `og-image.jpg` | Imagen para compartir en redes sociales |

### Puntuación SEO Estimada

- **Antes de optimizaciones**: 3/10 ⚠️
- **Después de optimizaciones**: 7/10 ✅

### Accesibilidad

- ✅ Todos los iconos tienen `aria-label`
- ✅ Navegación por teclado funcional
- ✅ Contraste de colores WCAG AA compliant
- ✅ HTML semántico correcto

---

## 📱 Responsive Design

### Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* Tablet pequeña */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### Diseño Adaptativo

- **Móvil (< 640px)**
  - Menú hamburguesa colapsable
  - Grid de 1 columna
  - Tipografía reducida
  - Padding ajustado

- **Tablet (640-1024px)**
  - Grid de 2 columnas
  - Navegación híbrida
  - Espaciado medio

- **Desktop (> 1024px)**
  - Layout completo
  - Navegación horizontal
  - Grid de 2-4 columnas
  - Efectos hover completos

---

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

1. Conecta tu repositorio de GitHub
2. Vercel detecta automáticamente Vite
3. Configura variables de entorno (si es necesario)
4. Deploy automático en cada push a `main`

```bash
# O usa Vercel CLI
npm i -g vercel
vercel
```

### Opción 2: Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Opción 3: GitHub Pages

Requiere configuración adicional para SPA. Ver [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).

### Variables de Entorno en Producción

Si usas el formulario con webhook:

```env
VITE_N8N_WEBHOOK_URL=https://tu-webhook-produccion.com
```

---

## 🤝 Contribuir

### Flujo de Trabajo

1. Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guía de Estilo

- Usa TypeScript para todos los componentes nuevos
- Sigue las reglas de ESLint configuradas
- Usa Tailwind para estilos (evita CSS custom)
- Componentes funcionales con hooks
- Nombres de componentes en PascalCase

---

## 📞 Contacto

**InnovaCode Solutions**
- 🌐 Website: [https://innovacode.tech](https://innovacode.tech)
- 📧 Email: contacto@innovacode.tech
- 📱 WhatsApp: +57 323 223 1834
- 💼 LinkedIn: [@innovacode](https://www.linkedin.com/company/innovacode)

---

## 📄 Licencia

Este proyecto es propiedad de InnovaCode Solutions. Todos los derechos reservados.

---

## 🙏 Agradecimientos

- [React](https://react.dev/) - Framework UI
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Iconos
- [Vercel](https://vercel.com/) - Hosting

---

<div align="center">
  <p>Hecho con ❤️ por InnovaCode Solutions</p>
  <p>
    <a href="https://innovacode.tech">🌐 Website</a> •
    <a href="https://github.com/davidcaroo/innovacode-web">📦 Repository</a> •
    <a href="https://github.com/davidcaroo/innovacode-web/issues">🐛 Report Bug</a>
  </p>
</div>

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
