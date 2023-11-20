export const locales = ["en", "ua", "ru"];
export const defaultLocale = "en";
export const i18n = {
  defaultLocale: defaultLocale,
  locales: locales,
} as const;

export const getLocalePartsFrom = ({
  pathname,
  locale,
}: {
  pathname?: string;
  locale?: string;
}) => {
  return { lang: locale ?? defaultLocale };
};

export type Locale = (typeof i18n)["locales"][number];
