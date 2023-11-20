import enUS from "date-fns/locale/en-US";
import ru from "date-fns/locale/ru";

const locales = {
  ru: ru,
  en: enUS,
};

export default function getLocale(lang: string) {
  return locales[lang] ?? enUS;
}
