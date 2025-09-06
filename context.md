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

## 7. Cambios Recientes (Sesión del 6 de Septiembre de 2025)

Durante la sesión actual, se han realizado los siguientes cambios y discusiones:

### 7.1. Limpieza de Íconos Duplicados

Se identificaron y eliminaron los siguientes íconos duplicados y no utilizados de `src/assets/icons/`:
- `brand-astro.svg`
- `brand-nodejs.svg`
- `brand-react.svg`
- `brand-tailwind.svg`

### 7.2. Intentos de Implementación de Funcionalidad de Cambio de Idioma (i18n)

Se inició la implementación de una funcionalidad de cambio de idioma, con varias iteraciones que fueron revertidas a petición del usuario:

#### Primer Intento (Basado en Rutas de Astro)
- Se crearon archivos `es.json` y `en.json` en `src/locales/`.
- Se reestructuró el directorio `src/pages/` para usar rutas específicas de idioma (`/es/index.astro`, `/en/index.astro`).
- Se modificaron los componentes para aceptar props de traducción (`t`).
- Se actualizó `Layout.astro` para establecer el atributo `lang` en la etiqueta `<html>`.
- **Estado:** Revertido.

#### Segundo Intento (Basado en JavaScript del Lado del Cliente con `data-i18n`)
- Se crearon archivos `es.json` y `en.json` en `src/locales/`.
- Se añadió un botón de *toggle* para el cambio de idioma en `Header.astro`.
- Se modificaron los componentes para incluir atributos `data-i18n` y `data-i18n-array`.
- Se añadió un script global en `Layout.astro` para manejar la carga de traducciones desde los archivos JSON y la actualización dinámica del contenido de la página.
- **Estado:** Revertido.

### 7.3. Estado Actual del Proyecto

Actualmente, el proyecto se encuentra en su estado original, tal como estaba antes de cualquier intento de implementación de la funcionalidad de cambio de idioma. Esto significa:
- **Archivos de Idioma:** El directorio `src/locales/` no existe.
- **Botón de Idioma:** El botón de *toggle* para el cambio de idioma no está presente en `Header.astro`.
- **Componentes:** Todos los componentes (`Header.astro`, `Hero.astro`, `TechStack.astro`, `ProjectsGrid.astro`, `ProjectCard.astro`, `ContactForm.astro`, `Footer.astro`, `Layout.astro`) están en su estado original, sin ninguna lógica de internacionalización ni atributos `data-i18n`.

## 8. Próximos Pasos

El usuario ha solicitado continuar con la implementación del cambio de idioma, pero de forma incremental y bajo sus instrucciones específicas.

## 9. Prompt para Futuras Sesiones

> Hola, Gemini. Vamos a continuar trabajando en mi portafolio. Toda la información que necesitas para ponerte al día se encuentra en el archivo `/home/camiloco3/PersonalProjects/portfolio/context.md`. Por favor, lee ese archivo ahora para entender el estado actual del proyecto.