import { TranslationContext } from "@/providers/TranslationProvider";
import { useContext } from "react";

const useTranslate = (start?: string) => {
  const dictionary = useContext(TranslationContext);

  return (key: string, params?: { [key: string]: string | number }) => {
    const head = start ? `${start}.` : "";
    let translation = (head + key)
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary) as string;

    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
        translation = translation!.trim().replace(regex, value.toString());
      });
    }
    return translation;
  };
};

export default useTranslate;
