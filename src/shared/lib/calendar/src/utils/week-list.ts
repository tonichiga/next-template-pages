import { ru } from "date-fns/locale";
const weekListEn: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekListRu: string[] = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Субота",
  "Воскресенье",
];

const weeks = {
  ru: weekListRu,
  en: weekListEn,
};

export default function getWeekList(lang: string) {
  return weeks[lang] ?? weekListEn;
}
