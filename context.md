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

- **`src/layouts/Layout.astro`**: Es la plantilla principal. Contiene la estructura HTML base y la lógica para el modo oscuro. Define el fondo de la aplicación, que en modo oscuro consiste en un patrón de hexágonos con un sutil gradiente estático. También importa los estilos globales y renderiza el `Footer.astro`.

- **`src/pages/index.astro`**: La página de inicio. Cada componente principal (`Hero`, `TechStack`, etc.) está envuelto en una etiqueta `<section>` con un ID único (`#inicio`, `#proyectos`, etc.) para permitir la navegación con desplazamiento suave desde el encabezado.

- **`src/components/`**: Contiene todas las secciones reutilizables:
    - **`Header.astro`**: Encabezado fijo y semitransparente con el nombre/logo y enlaces de navegación (`Proyectos`, `Tecnologías`, `Contacto`) que se desplazan suavemente a las secciones correspondientes. Se ha eliminado el botón de cambio de tema.
    - **`Hero.astro`**: Sección de bienvenida para el perfil del desarrollador.
    - **`TechStack.astro`**: Carrusel de tecnologías con desplazamiento horizontal infinito.
    - **`ProjectCard.astro`**: Componente para mostrar un proyecto individual.
    - **`ProjectsGrid.astro`**: Cuadrícula responsiva que muestra las `ProjectCard`.
    - **`ContactForm.astro`**: Formulario de contacto HTML.
    - **`Footer.astro`**: Nuevo pie de página que contiene íconos y enlaces a redes sociales (GitHub, LinkedIn, Twitter/X).
    - **`Icon.astro`**: Componente de ayuda para renderizar íconos SVG, actualizado para incluir `twitter`.

## 5. Puntos Clave para Personalización

- **Modificar Proyectos**: Edita el array `projects` en `src/components/ProjectsGrid.astro`.
- **Modificar Texto del Hero**: Edita el contenido directamente en `src/components/Hero.astro`.
- **Actualizar Redes Sociales**: Reemplaza los `href` de marcador de posición (`#`) en el array `socialLinks` dentro de `src/components/Footer.astro` con tus URLs de perfil.
- **Conectar Formulario**: Reemplaza el `value` del `access_key` en `src/components/ContactForm.astro`.
- **Actualizar Tecnologías**: Modifica el array `technologies` en `src/components/TechStack.astro`.

## 6. Comando de Desarrollo

Para iniciar el servidor de desarrollo, se debe ejecutar el siguiente comando desde el directorio del proyecto:

```bash
npm run dev
```

## 7. Prompt para Futuras Sesiones

Para retomar el trabajo, inicia una nueva sesión de `gemini-cli` y envía el siguiente mensaje:

> Hola, Gemini. Vamos a continuar trabajando en mi portafolio. Toda la información que necesitas para ponerte al día se encuentra en el archivo `/home/camiloco3/PersonalProjects/portfolio/context.md`. Por favor, lee ese archivo ahora para entender el estado actual del proyecto.