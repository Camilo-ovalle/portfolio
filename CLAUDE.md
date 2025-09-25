# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

| Command           | Description                                    |
|-------------------|------------------------------------------------|
| `npm run dev`     | Start development server at localhost:4321    |
| `npm run build`   | Build production site to ./dist/              |
| `npm run preview` | Preview production build locally               |

## Project Architecture

This is an Astro.js portfolio website with internationalization support for Spanish (default) and English locales.

### Key Architecture Components

**Internationalization System:**
- Uses Astro's built-in i18n with routing configured in `astro.config.mjs`
- Spanish (`es`) is the default locale without URL prefix
- English (`en`) uses `/en/` URL prefix
- Translation utilities in `src/utils/i18n.ts` with `t()` function for key-based translations
- JSON translation files in `src/locales/` (es.json, en.json)
- All components receive `locale` prop for proper translation rendering

**Component Structure:**
- `src/layouts/Layout.astro`: Main layout with dark/light theme support and locale-aware HTML lang attribute
- `src/pages/index.astro`: Spanish homepage assembling all sections
- `src/pages/en/index.astro`: English homepage
- Page components pass `currentLocale` to all child components

**Styling & Theming:**
- Uses Tailwind CSS with custom green accent color (`--accent-green: #4ade80`)
- Dark mode implementation with localStorage persistence and system preference detection
- Custom background patterns and gradients in dark mode

**Icon System:**
- `src/components/Icon.astro`: Renders simple SVG icons defined as inline paths (used for UI icons like sun/moon, social media)
- `src/assets/icons/`: Contains technology SVG files imported directly into components
- Tech stack component imports full SVG files rather than using the Icon component

### Key Files for Customization

- **Projects**: Update `src/locales/{es,en}.json` under `projects_section.projects`
- **Personal Info**: Modify hero section translations in locale files
- **Technologies**: Add/remove SVG files in `src/assets/icons/` and update `src/components/TechStack.astro`
- **Contact Form**: Update access key in `src/components/ContactForm.astro`
- **Social Links**: Modify URLs in `src/components/Footer.astro`

### Translation Pattern

Components follow this pattern:
```astro
---
import { getTranslations, type Locale } from '../utils/i18n';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const t = getTranslations(locale);
---

<div>
  <h1>{t.section.title}</h1>
</div>
```

### Recent Implementation Notes

The project recently implemented full internationalization support with:
- Astro i18n configuration for Spanish/English
- Complete translation system with nested key support
- Proper locale routing and component architecture
- All content externalized to JSON translation files

When adding new content, ensure translations exist in both `src/locales/es.json` and `src/locales/en.json` files.