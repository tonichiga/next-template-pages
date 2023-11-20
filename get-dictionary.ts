import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: any = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ua: () => import("./dictionaries/ua.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

export const getTranslator = async (locale: Locale) => {
  const dictionary = (await dictionaries[locale]?.()) ?? dictionaries.en();

  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);

    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};

export const getDictionary = async (locale: string) =>
  dictionaries[locale]?.() ?? dictionaries.en();
