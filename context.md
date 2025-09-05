# Contexto del Proyecto: Portafolio Personal

Este documento resume el estado actual del proyecto de portafolio para que Gemini-CLI pueda retomar el trabajo rápidamente en futuras sesiones.

## 1. Objetivo del Proyecto

Crear una plantilla de portafolio personal para un desarrollador de software. El sitio debe ser moderno, de alto rendimiento y fácil de actualizar.

## 2. Pila Tecnológica

- **Framework:** Astro.js
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript

## 3. Ubicación del Proyecto

La raíz del proyecto se encuentra en la ruta absoluta:
`/home/camiloco3/PersonalProjects/portfolio`

## 4. Estructura y Componentes Clave

El proyecto está organizado con una arquitectura de componentes dentro de `src/`.

- **`src/layouts/Layout.astro`**: Es la plantilla principal que envuelve todas las páginas.
- **`src/pages/index.astro`**: La página de inicio, que ensambla las diferentes secciones del portafolio.
- **`src/components/`**: Contiene todas las secciones reutilizables:
    - **`Header.astro`**: Encabezado fijo con navegación.
    - **`Hero.astro`**: Sección de bienvenida.
    - **`TechStack.astro`**: Carrusel de tecnologías con desplazamiento horizontal infinito. Importa los archivos SVG completos de la carpeta `src/assets/icons` para mostrarlos.
    - **`ProjectCard.astro`** y **`ProjectsGrid.astro`**: Componentes para la sección de proyectos.
    - **`ContactForm.astro`**: Formulario de contacto.
    - **`Footer.astro`**: Pie de página con enlaces a redes sociales.
    - **`Icon.astro`**: Componente de ayuda para renderizar íconos SVG simples (como sol, luna y redes sociales), usados principalmente en el `Footer`. Los íconos se definen como `paths` directamente en el componente.

## 5. Puntos Clave para Personalización

- **Modificar Proyectos**: Edita el array `projects` en `src/components/ProjectsGrid.astro`.
- **Modificar Texto del Hero**: Edita el contenido directamente en `src/components/Hero.astro`.
- **Actualizar Redes Sociales**: Reemplaza los `href` en `src/components/Footer.astro`.
- **Conectar Formulario**: Reemplaza el `access_key` en `src/components/ContactForm.astro`.
- **Actualizar Tecnologías**: Modifica el array `technologies` en `src/components/TechStack.astro`. Los íconos disponibles en `src/assets/icons` incluyen: JavaScript, TypeScript, React, Astro, Tailwind, Node.js, Linux, Next.js, SQL, MySQL, Docker, Git, Azure, GitHub y LinkedIn.

## 6. Comando de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta: `npm run dev`

## 7. Prompt para Futuras Sesiones

> Hola, Gemini. Vamos a continuar trabajando en mi portafolio. Toda la información que necesitas para ponerte al día se encuentra en el archivo `/home/camiloco3/PersonalProjects/portfolio/context.md`. Por favor, lee ese archivo ahora para entender el estado actual del proyecto.

## 8. Cambios Recientes (Sesión del 5 de Septiembre de 2025)

Durante la sesión, se realizó una actualización exhaustiva de los íconos de tecnologías.

**Nuevos Íconos Añadidos:**
Se agregaron los siguientes íconos a la carpeta `/src/assets/icons/`:
- `brand-github.svg`
- `brand-linkedin.svg`

**Íconos Existentes Actualizados:**
Se reemplazó el contenido SVG de los siguientes íconos:
- `brand-ubuntu.svg`
- `brand-nextjs.svg`
- `brand-mysql.svg`
- `file-type-sql.svg` (actualizado dos veces)
- `brand-docker.svg`
- `brand-git.svg`
- `brand-azure.svg`
- `brand-javascript.svg`
- `brand-typescript.svg`

**Nota:** No se realizaron cambios en el código de los componentes. El archivo `TechStack.astro` permanece en su estado original, pero ahora puede hacer uso de los íconos nuevos y actualizados si se modifica.
