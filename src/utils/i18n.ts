import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export type Locale = 'es' | 'en';

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.es;
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  const translation = getTranslations(locale);
  
  let result: any = translation;
  for (const k of keys) {
    result = result?.[k];
  }
  
  return result || key;
}

export function getCurrentYear(): string {
  return new Date().getFullYear().toString();
}

export function formatText(text: string, replacements: Record<string, string>): string {
  let result = text;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(`{${key}}`, value);
  }
  return result;
}