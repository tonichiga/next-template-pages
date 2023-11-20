import { TDropdownData } from "@/types";

const isDev = process.env.NODE_ENV === "development";
const isClient = typeof window !== "undefined";

const onBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const clearPathname = (pathname: string) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments.splice(0, 1);

  console.log(pathname);
  return "/" + segments[1];
};

const redirectedPathName = (locale: string, pathname) => {
  if (!pathname) return "/";
  const segments = pathname.split("/");
  segments[1] = locale;
  return segments.join("/");
};

const pathnameWithLocale = (locale: string, pathname: string) => {
  if (!pathname) return `/${locale}`;

  return `/${locale}${pathname}`;
};

const scrollToAnchor = (anchorName, offset?) => {
  if (!offset) {
    offset = 0;
  }
  if (anchorName) {
    // найти якорь
    let anchorElement = document.querySelector(`#${anchorName}`);
    // Если привязка, соответствующая идентификатору, существует, перейти к привязке
    const y = anchorElement.getBoundingClientRect().top + offset;
    if (anchorElement) {
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }
};

/**
 *
 * @param data array[]
 * @param size number default 2
 * @returns [array[], array[]]
 */
const convertDataToMultiArrayData = (data: any[], size = 2) => {
  const result = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
};

const convertDataBeforeSetInDropdown = <T>(data: T[], fieldName: string) => {
  return data.map((item) => {
    return item[fieldName];
  });
};

function performObjectToQueryString(obj: any) {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      const temp = obj[p];
      if (typeof temp === "object") {
        str.push(performObjectToQueryString(temp));
      } else {
        if (temp) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(temp));
        }
      }
    }
  return str.join("&");
}

function filtersPerform(config) {
  if (!config) return null;
  config.columnFilters = config.columnFilters.map((filter) => {
    return { [filter.id]: filter.value };
  });
  return config;
}

const fromEnumToHumanified = (categories, humanifiedPermissionsNames) => {
  let newPermissons = {};
  for (let key in categories) {
    newPermissons = {
      ...newPermissons,
      [key]: categories[key].map((el) => {
        return humanifiedPermissionsNames[el];
      }),
    };
  }

  return newPermissons;
};

function dateConvert(date: string, local: string, langKey: string) {
  const localeStrings = {
    ru: "ru-RU",
    en: "en-US",
    ua: "uk-UA",
  };
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const monthName = dateObj.toLocaleString(localeStrings[langKey], {
    month: "long",
  });
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${day} ${monthName} ${local} ${hours}:${minutes}`;
}

function convertDataToIdValueArray<T extends any>(
  data: T[any],
  idFieldName: string,
): TDropdownData[] {
  if (!data) return [];
  return data.map((item) => ({ id: item.id, value: item[idFieldName] }));
}

export {
  onBackToTop,
  redirectedPathName,
  clearPathname,
  pathnameWithLocale,
  scrollToAnchor,
  convertDataToMultiArrayData,
  isDev,
  isClient,
  convertDataBeforeSetInDropdown,
  performObjectToQueryString,
  filtersPerform,
  fromEnumToHumanified,
  dateConvert,
  convertDataToIdValueArray,
};
