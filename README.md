# ðŸš€ InnovaCode Solutions - Sitio Web Corporativo

![InnovaCode Solutions](https://img.shields.io/badge/Version-1.0.0-00FF7F?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

> Sitio web corporativo moderno para InnovaCode Solutions - Empresa especializada en desarrollo de software a medida, IA y automatizaciones en Colombia y LATAM.

---

## ðŸ“‹ Tabla de Contenidos

- [âœ¨ CaracterÃ­sticas](#-caracterÃ­sticas)
- [ðŸŽ¨ DiseÃ±o y UX](#-diseÃ±o-y-ux)
- [ðŸ› ï¸ Stack TecnolÃ³gico](#ï¸-stack-tecnolÃ³gico)
- [ðŸ¤– IntegraciÃ³n n8n](#-integraciÃ³n-n8n)
- [ðŸ“¦ InstalaciÃ³n](#-instalaciÃ³n)
- [ðŸš€ Uso](#-uso)
- [ðŸ—ï¸ Estructura del Proyecto](#ï¸-estructura-del-proyecto)
- [ðŸ” SEO y Optimizaciones](#-seo-y-optimizaciones)
- [ðŸ“± Responsive Design](#-responsive-design)
- [ðŸŒ Despliegue](#-despliegue)
- [ðŸ¤ Contribuir](#-contribuir)
- [ðŸ“„ Licencia](#-licencia)

---

## âœ¨ CaracterÃ­sticas

### Funcionalidades Principales

- âœ… **Single Page Application (SPA)** con navegaciÃ³n fluida y animaciones
- âœ… **Cotizador de Proyectos Interactivo** con cÃ¡lculos en tiempo real
- âœ… **Formulario de Contacto oculto** con validaciÃ³n en tiempo real (mantenido visualmente oculto en favor del cotizador)
- âœ… **BotÃ³n de WhatsApp flotante** con mensaje prellenado
- âœ… **Scroll suave** entre secciones con navegaciÃ³n inteligente
- âœ… **BotÃ³n "Volver arriba"** que aparece al hacer scroll
- âœ… **Animaciones on-scroll** para mejor experiencia visual
- âœ… **Soporte para Tema Claro/Oscuro** profesional con acentos en verde neon (#00FF7F)
- âœ… **Totalmente responsive** - Optimizado para mÃ³vil, tablet y desktop

### Secciones del Sitio

| SecciÃ³n | ID | DescripciÃ³n |
|---------|------|-------------|
| **Hero** | `#hero` | PresentaciÃ³n principal con call-to-action |
| **Servicios** | `#servicios` | 4 servicios principales con iconos animados |
| **Propuesta de Valor** | `#valor` | Beneficios y diferenciales de la empresa |
| **Proceso** | `#proceso` | MetodologÃ­a de trabajo en 4 pasos |
| **Cotizador** | `#cotizador` | Cotizador interactivo para estimar costos de proyectos con enlace a WhatsApp |
| **Contacto** | `#contacto` | Formulario funcional con validaciones (Oculto visualmente) |
| **Footer** | - | Links de navegaciÃ³n y redes sociales |

---

## ðŸŽ¨ DiseÃ±o y UX

### Paleta de Colores

```css
/* Colores Principales */
--primary-green: #00FF7F;      /* Verde neÃ³n - Acentos y CTAs */
--primary-dark: #0C0C0C;       /* Negro profundo - Fondo principal */
--secondary-dark: #1A1A1A;     /* Gris oscuro - Fondos secundarios */
--border-color: #2A2A2A;       /* Gris medio - Bordes */
--text-light: #FFFFFF;         /* Blanco - Textos principales */
--text-gray: #9CA3AF;          /* Gris claro - Textos secundarios */
```

### TipografÃ­a

- **Familia**: [Urbanist](https://fonts.google.com/specimen/Urbanist) (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **CaracterÃ­sticas**: Moderna, legible, profesional

### Componentes de UI

#### Botones
- **Primario**: Fondo verde neÃ³n (#00FF7F) con hover effect y sombra brillante
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
- **Smooth scroll**: NavegaciÃ³n fluida entre secciones
- **Pulse**: AnimaciÃ³n continua en botÃ³n de WhatsApp

---

## ðŸ› ï¸ Stack TecnolÃ³gico

### Frontend Framework
- **React 18.3.1** - Biblioteca para interfaces de usuario
- **TypeScript 5.5.3** - Tipado estÃ¡tico para JavaScript
- **Vite 5.4.2** - Build tool ultrarrÃ¡pido con HMR

### Estilos
- **TailwindCSS 3.4.1** - Framework CSS utility-first
- **PostCSS 8.4.35** - Procesador de CSS
- **Autoprefixer 10.4.18** - Prefijos de navegadores automÃ¡ticos

### Iconos y Assets
- **Lucide React 0.344.0** - Biblioteca de iconos SVG moderna
- **Google Fonts** - TipografÃ­a Urbanist

### Linting y Calidad
- **ESLint 9.9.1** - Linter de JavaScript/TypeScript
- **TypeScript ESLint 8.3.0** - Reglas de ESLint para TypeScript
- **React Hooks ESLint Plugin** - ValidaciÃ³n de hooks de React

### Herramientas de Desarrollo
- **Vite Plugin React** - Fast Refresh para desarrollo
- **TypeScript Compiler** - VerificaciÃ³n de tipos

---

## ðŸ¤– IntegraciÃ³n n8n

### **Formulario de Contacto Automatizado**

El formulario de contacto estÃ¡ integrado con **n8n** (plataforma de automatizaciÃ³n de flujos de trabajo) para procesar los leads de forma automÃ¡tica.

#### ðŸ”„ **Flujo de AutomatizaciÃ³n:**

```
Usuario completa formulario â†’ POST a webhook n8n â†’ ValidaciÃ³n de datos 
â†’ Guardar en Google Sheets â†’ Respuesta JSON al frontend
```

#### âš™ï¸ **ConfiguraciÃ³n:**

- **Webhook URL**: `https://n8nhero-ac01c953fd21.herokuapp.com/webhook/contacto-web-lead`
- **MÃ©todo**: POST
- **Content-Type**: application/json

#### ðŸ“¤ **Datos enviados:**

```json
{
  "nombre": "Nombre del cliente",
  "email": "email@ejemplo.com",
  "empresa": "Nombre de la empresa",
  "telefono": "+57 300 123 4567",
  "mensaje": "DescripciÃ³n del proyecto..."
}
```

#### ðŸ“¥ **Respuesta esperada de n8n:**

**Ã‰xito:**
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
  "message": "DescripciÃ³n del error"
}
```

#### âœ¨ **CaracterÃ­sticas del workflow:**

- âœ… **ValidaciÃ³n de datos** en servidor
- âœ… **Almacenamiento en Google Sheets** para seguimiento de leads
- âœ… **Manejo de errores** robusto (400/500)
- âœ… **Respuestas estructuradas** en JSON
- âœ… **Hosted en Heroku** para alta disponibilidad

---

## ðŸ“¦ InstalaciÃ³n

### Prerrequisitos

- **Node.js** >= 16.x
- **npm** >= 8.x o **yarn** >= 1.22.x

### Pasos de InstalaciÃ³n

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

4. **Verificar instalaciÃ³n**
   ```bash
   npm run typecheck
   ```

---

## ðŸš€ Uso

### Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de ProducciÃ³n

Genera una build optimizada:

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

### Preview de Build

Previsualiza la build de producciÃ³n localmente:

```bash
npm run preview
```

### Otros Scripts

| Script | DescripciÃ³n |
|--------|-------------|
| `npm run lint` | Ejecuta ESLint para revisar el cÃ³digo |
| `npm run typecheck` | Verifica tipos de TypeScript sin compilar |

---

## ðŸ—ï¸ Estructura del Proyecto

```
innovacode-web/
â”œâ”€â”€ public/                      # Archivos estÃ¡ticos
â”‚   â”œâ”€â”€ android-chrome-192x192.png
â”‚   â”œâ”€â”€ android-chrome-512x512.png
â”‚   â”œâ”€â”€ apple-touch-icon.png
â”‚   â”œâ”€â”€ favicon.ico
â”‚   â”œâ”€â”€ favicon-16x16.png
â”‚   â”œâ”€â”€ favicon-32x32.png
â”‚   â”œâ”€â”€ og-image.jpg            # Imagen Open Graph (1200x630)
â”‚   â”œâ”€â”€ robots.txt              # Directivas para crawlers
â”‚   â”œâ”€â”€ sitemap.xml             # Mapa del sitio
â”‚   â””â”€â”€ site.webmanifest        # Manifest PWA
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/             # Componentes React
â”‚   â”‚   â”œâ”€â”€ BackToTop.tsx       # BotÃ³n volver arriba
â”‚   â”‚   â”œâ”€â”€ ContactForm.tsx     # Formulario de contacto (Oculto)
â”‚   â”‚   â”œâ”€â”€ Cotizador.tsx       # Cotizador interactivo de proyectos
â”‚   â”‚   â”œâ”€â”€ Cotizador.css       # Estilos especÃ­ficos del cotizador
â”‚   â”‚   â”œâ”€â”€ Footer.tsx          # Pie de pÃ¡gina
â”‚   â”‚   â”œâ”€â”€ Hero.tsx            # SecciÃ³n principal
â”‚   â”‚   â”œâ”€â”€ Navigation.tsx      # Barra de navegaciÃ³n
â”‚   â”‚   â”œâ”€â”€ Process.tsx         # Proceso de trabajo
â”‚   â”‚   â”œâ”€â”€ Services.tsx        # Servicios ofrecidos
â”‚   â”‚   â”œâ”€â”€ ValueProposition.tsx # Propuesta de valor
â”‚   â”‚   â””â”€â”€ WhatsAppButton.tsx  # BotÃ³n flotante de WhatsApp
â”‚   â”œâ”€â”€ App.tsx                 # Componente raÃ­z
â”‚   â”œâ”€â”€ main.tsx                # Punto de entrada
â”‚   â”œâ”€â”€ index.css               # Estilos globales + Tailwind
â”‚   â””â”€â”€ vite-env.d.ts           # Tipos de Vite
â”œâ”€â”€ index.html                  # HTML principal
â”œâ”€â”€ package.json                # Dependencias y scripts
â”œâ”€â”€ tsconfig.json               # ConfiguraciÃ³n TypeScript
â”œâ”€â”€ tailwind.config.js          # ConfiguraciÃ³n Tailwind
â”œâ”€â”€ vite.config.ts              # ConfiguraciÃ³n Vite
â””â”€â”€ README.md                   # Este archivo
```

---

## ðŸ” SEO y Optimizaciones

### Meta Tags Implementados

âœ… **Meta Tags BÃ¡sicos**
- Title optimizado con keywords
- Description (156 caracteres)
- Keywords relevantes
- Canonical URL
- Author y robots

âœ… **Open Graph (Facebook, LinkedIn)**
- og:title, og:description, og:image
- og:type, og:url, og:locale
- Imagen optimizada 1200x630px

âœ… **Twitter Cards**
- twitter:card (summary_large_image)
- twitter:title, twitter:description
- twitter:image

âœ… **Schema.org JSON-LD**
- Tipo: SoftwareCompany
- InformaciÃ³n de contacto
- Servicios ofrecidos
- Links de redes sociales

### Archivos SEO

| Archivo | DescripciÃ³n |
|---------|-------------|
| `robots.txt` | Permite indexaciÃ³n completa, referencia al sitemap |
| `sitemap.xml` | Mapa con todas las secciones (prioridades configuradas) |
| `og-image.jpg` | Imagen para compartir en redes sociales |

### PuntuaciÃ³n SEO Estimada

- **Antes de optimizaciones**: 3/10 âš ï¸
- **DespuÃ©s de optimizaciones**: 7/10 âœ…

### Accesibilidad

- âœ… Todos los iconos tienen `aria-label`
- âœ… NavegaciÃ³n por teclado funcional
- âœ… Contraste de colores WCAG AA compliant
- âœ… HTML semÃ¡ntico correcto

---

## ðŸ“± Responsive Design

### Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* Tablet pequeÃ±a */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeÃ±o */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### DiseÃ±o Adaptativo

- **MÃ³vil (< 640px)**
  - MenÃº hamburguesa colapsable
  - Grid de 1 columna
  - TipografÃ­a reducida
  - Padding ajustado

- **Tablet (640-1024px)**
  - Grid de 2 columnas
  - NavegaciÃ³n hÃ­brida
  - Espaciado medio

- **Desktop (> 1024px)**
  - Layout completo
  - NavegaciÃ³n horizontal
  - Grid de 2-4 columnas
  - Efectos hover completos

---

## ðŸŒ Despliegue

### OpciÃ³n 1: Vercel (Recomendado)

1. Conecta tu repositorio de GitHub
2. Vercel detecta automÃ¡ticamente Vite
3. Configura variables de entorno (si es necesario)
4. Deploy automÃ¡tico en cada push a `main`

```bash
# O usa Vercel CLI
npm i -g vercel
vercel
```

### OpciÃ³n 2: Netlify

1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### OpciÃ³n 3: GitHub Pages

Requiere configuraciÃ³n adicional para SPA. Ver [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).

### Variables de Entorno en ProducciÃ³n

Si usas el formulario con webhook:

```env
VITE_N8N_WEBHOOK_URL=https://tu-webhook-produccion.com
```

---

## ðŸ¤ Contribuir

### Flujo de Trabajo

1. Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### GuÃ­a de Estilo

- Usa TypeScript para todos los componentes nuevos
- Sigue las reglas de ESLint configuradas
- Usa Tailwind para estilos (evita CSS custom)
- Componentes funcionales con hooks
- Nombres de componentes en PascalCase

---

## ðŸ“ž Contacto

**InnovaCode Solutions**
- ðŸŒ Website: [https://innovacode.click](https://innovacode.click)
- ðŸ“§ Email: contacto@innovacode.click
- ðŸ“± WhatsApp: +57 323 223 1834
- ðŸ’¼ LinkedIn: [@innovacode](https://www.linkedin.com/company/innovacode)

---

## ðŸ“„ Licencia

Este proyecto es propiedad de InnovaCode Solutions. Todos los derechos reservados.

---

## ðŸ™ Agradecimientos

- [React](https://react.dev/) - Framework UI
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Iconos
- [Vercel](https://vercel.com/) - Hosting

---

<div align="center">
  <p>Hecho con â¤ï¸ por InnovaCode Solutions</p>
  <p>
    <a href="https://innovacode.click">ðŸŒ Website</a> â€¢
    <a href="https://github.com/davidcaroo/innovacode-web">ðŸ“¦ Repository</a> â€¢
    <a href="https://github.com/davidcaroo/innovacode-web/issues">ðŸ› Report Bug</a>
  </p>
</div>

Documento README en espaÃ±ol para el proyecto presente en esta carpeta.

## TecnologÃ­as

- Vite (bundler y servidor de desarrollo)
- React 18 + TypeScript
- Tailwind CSS (estilos utilitarios)
- PostCSS + Autoprefixer
- ESLint (linter)
- Lucide (iconos) â€” paquete `lucide-react`
- Supabase client (`@supabase/supabase-js`) estÃ¡ listado en dependencias (opcional, no utilizado actualmente)

## Estructura del proyecto (resumen)

- `index.html` - entrada HTML principal
- `package.json` - scripts y dependencias
- `vite.config.ts` - configuraciÃ³n de Vite
- `src/` - cÃ³digo fuente de la aplicaciÃ³n
  - `main.tsx` - punto de arranque de React
  - `App.tsx` - layout principal y montaje de componentes
  - `index.css` - estilos globales (incluye Tailwind)
  - `components/` - componentes reutilizables:
    - `Navigation.tsx` - barra de navegaciÃ³n
    - `Hero.tsx` - secciÃ³n hero/presentaciÃ³n
    - `Services.tsx` - secciÃ³n de servicios
    - `ValueProposition.tsx` - propuesta de valor
    - `Process.tsx` - proceso de trabajo / pasos
    - `Cotizador.tsx` - cotizador de proyectos interactivo con envÃ­o a WhatsApp
    - `ContactForm.tsx` - formulario de contacto (oculto en el layout actual)
    - `Footer.tsx` - pie de pÃ¡gina
    - `WhatsAppButton.tsx` - botÃ³n flotante que abre chat de WhatsApp
    - `BackToTop.tsx` - botÃ³n para volver arriba

## Funcionalidades detectadas

- Single Page Application (SPA) con navegaciÃ³n interna por secciones (anclas como `#cotizador`).
- DiseÃ±o responsivo implementado con Tailwind CSS y CSS Vanilla.
- Cotizador de Proyectos interactivo: Permite estimar costos con base en tipo de proyecto, secciones extra y mantenimiento. Actualiza valores en COP y USD en tiempo real y finaliza enviando un mensaje prellenado por WhatsApp. Integrado nativamente con el modo Claro y Oscuro del sitio.
- Formulario de contacto con validaciÃ³n en cliente (actualmente oculto vÃ­a CSS). El envÃ­o estÃ¡ simulado con un retardo y muestra estados o puede enlazarse a integraciones n8n.
- BotÃ³n flotante de WhatsApp que abre una conversaciÃ³n prellenada.
- Componentes visuales con iconos de `lucide-react`.

## Especificaciones y detalles importantes

- TypeScript estÃ¡ configurado. Ejecutar `npm run typecheck` para validar tipos sin emitir artefactos.
- ESLint estÃ¡ presente; puedes ejecutar `npm run lint` para revisar el cÃ³digo.
- `@supabase/supabase-js` aparece en `package.json` pero ninguno de los componentes lo utiliza actualmente; si se quiere integrar envÃ­o de formularios o persistencia, se puede usar Supabase o cualquier backend.
- El formulario actual hace un `console.log` y simula el envÃ­o; deberÃ¡s reemplazar la lÃ³gica de envÃ­o con una llamada real a un endpoint cuando quieras enviar mensajes a producciÃ³n.
- El enlace de WhatsApp incluye un nÃºmero y mensaje codificado; cÃ¡mbialo en `src/components/WhatsAppButton.tsx` para usar el nÃºmero real.

## Scripts Ãºtiles (definidos en `package.json`)

- `npm run dev` â€” inicia el servidor de desarrollo (Vite) en modo hot-reload.
- `npm run build` â€” construye la aplicaciÃ³n para producciÃ³n con Vite.
- `npm run preview` â€” levanta una versiÃ³n local estÃ¡tica de la build para pruebas.
- `npm run lint` â€” ejecuta ESLint sobre el proyecto.
- `npm run typecheck` â€” ejecuta TypeScript para solo chequear tipos.

## CÃ³mo ejecutar el proyecto (local)

1. Instala dependencias:

```powershell
npm install
```

2. Levantar servidor de desarrollo:

```powershell
npm run dev
```

3. Abrir en el navegador la URL que Vite muestre (por defecto `http://localhost:5173`).

4. ProducciÃ³n (build):

```powershell
npm run build; npm run preview
```

## Recomendaciones y pasos siguientes (propuestos)

- Integrar un backend real para el `ContactForm`:
  - Usar Supabase (la dependencia ya estÃ¡ incluida): crear una tabla `leads` y enviar las entradas desde el cliente o desde una API serverless.
  - O bien, crear un endpoint en un servidor que envÃ­e correos (SendGrid, Mailgun) o guarde en una BBDD.
- AÃ±adir variables de entorno en `.env` (no incluidas en el repo):
  - `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` (si se usa Supabase desde el cliente)
- Reemplazar el nÃºmero de WhatsApp en `src/components/WhatsAppButton.tsx` por el real.
- AÃ±adir tests unitarios y/o de integraciÃ³n (por ejemplo con Vitest o Jest) para componentes clave.

## Notas finales

El proyecto es un starter moderno: Vite + React + TypeScript con Tailwind. La UI estÃ¡ lista y la lÃ³gica de formulario estÃ¡ preparada para integrarse con un backend. El README aquÃ­ generado documenta lo esencial para comenzar a desarrollar y desplegar el sitio.
