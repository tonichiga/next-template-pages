/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    backgroundImage: {
      "hero-mobile": "url('/images/hero-mobile.jpeg')", // example
    },
    colors: {
      "background-sidebar": "#0E1014",
      black: "#000000",
      "blue-40": "#EFF4FF",
      "blue-50": "#E5EEFF",
      "blue-100": "#CCDDFF",
      "blue-200": "#99BBFF",
      "blue-300": "#6699FF",
      "blue-400": "#3377FF",
      "blue-500": "#0055FF",
      "blue-600": "#0044CC",
      "blue-700": "#003399",
      "blue-800": "#002266",
      "blue-900": "#001133",
      "blue-950": "#00081A",
      brown: "#402B20",
      "brown-00": "#ECE0DB",
      "colors-blue": "#1F3245",
      "colors-blue-00": "#D6E4EE",
      "colors-dark-blue": "#232937",
      "colors-dark-blue-00": "#DCE2EC",
      "colors-gray-00": "#E3E2E0",
      "colors-light-blue": "#1F453C",
      "colors-light-blue-00": "#D6EEEA",
      "colors-red": "#472525",
      "colors-red-00": "#F1E1E1",
      "colors-salad": "#23372A",
      "colors-salad-00": "#DEECDC",
      "colors-violet": "#3D2551",
      "colors-violet-00": "#E6DEED",
      gray: "#32302C",
      "gray-00": "#FAFBFC",
      "gray-10": "#F6F6F6",
      "gray-15": "#ECECEC",
      "gray-20": "#D9D9D9",
      "gray-30": "#B5B5B5",
      "gray-40": "#838383",
      "gray-50": "#5A5A5A",
      "gray-70": "#292A2C",
      "gray-80": "#B8B8B8",
      "gray-dark": "#575757",
      "gray-light": "#E9E9E9",
      "green-main": "#46CB4B",
      "green-opacity": "#E7F6E5",
      grey: "#E3E2E0",
      "light-blue": "#D6EEEA",
      orange: "#452A13",
      "orange-00": "#F3DDCA",
      pink: "#472536",
      "pink-00": "#F1E1E9",
      purple: "#7A4CFD",
      red: "#F1E1E1",
      "red-main": "#FF3B30",
      "red-opacity": "#FFEBEA",
      salad: "#DEECDC",
      "sidebar-black": "#0E1014",
      violet: "#E6DEED",
      "warm-yellow": "#3B3D1E",
      white: "#FFFFFF",
      yellow: "#3D2D1E",
      "yellow-rem-00": "#FAEDCC",
      "warm-yellow-rem-00": "#F4FACC",
    },
    extend: {
      gridTemplateColumns: {
        main: "calc((158 / 16) * 1rem) 1fr",
        "main-close-sidebar": "0px 1fr",
        "chat-col": "calc((450 / 16) * 1rem) 1fr calc((450 / 16) * 1rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-rem-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-rem-gradient-stops))",
        "gradient-linear-orange":
          "linear-gradient(180deg, #FFD964 0%, #FFB864 100%)",
      },
      spacing: {},
      transitionTimingFunction: {
        accordion: "cubic-bezier(0.17,0.67,0.83,0.67) 1s linear",
      },

      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-25%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleDown: {
          "0%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        swipe: {
          "0%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.2s ease-in-out",
        fade: "fade 0.5s ease-in-out",
        "fade-150": "fade 0.150s ease-in-out",
        swipe: "swipe 0.5s ease-in-out",
        scaled: "scaleDown 150ms ease-in-out",
      },

      boxShadow: {
        popup:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 4px 24px -4px rgba(16, 24, 40, 0.10)",
        taste_card: "0px 3px 33.75px 0px #7C7C7C40",
        dropdown: "0px 4px 45px 0px rgba(180, 180, 180, 0.25)",
        chat: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)",
        selector_tab: "0px 1px 4px 0px #0000000F",
        chat_tabs: "0px 1px 4px 0px rgba(0, 0, 0, 0.06)",
        modal_shadow:
          "0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.10)",
        date_dropdown: "0px 10px 22px 0px rgba(45, 77, 108, 0.15)",
        password_stepper: "0px 4px 45px 0px rgba(95, 95, 95, 0.25)",
      },

      borderRadius: {
        48: "48px", // example
        incoming: "8px 8px 8px 2px", // example
        outgoing: "8px 8px 2px 8px", // example
        "chat-tab": "2px 2px 0px 0px",
      },
      fontSize: {
        13: "13px", // example
      },
      lineHeight: {
        130: "130%",
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },

      screens: {
        "max-mobile": { max: "767px" },
        // => @media (max-width: 767px) { ... }
        "max-tablet": { max: "1339px" },
        // => @media (max-width: 1339px) { ... }
        "max-laptop": { max: "1919px" },
        // => @media (max-width: 1919px) { ... }
        tablet: "768px",
        // => @media (min-width: 768px) { ... }
        laptop: "1440px",
        // => @media (min-width: 1440px) { ... }
        desktop: "1920px",
        // => @media (min-width: 1920px) { ... }
        additional: "1017px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, matchUtilities }) => {
      const calculateRem = (value) => {
        if (value.includes("rem")) return value;
        // if (value.includes("px") && value.includes("calc")) {
        //   const _value = value.replace("calc", "");

        //   return `calc(${value} / 16)`;
        // }

        value.replace("px", "");
        const _value = value.replace("px", "");
        return `calc((${_value} / 16)*1rem)`;
      };

      matchUtilities({
        "text-rem": (value) => {
          return {
            fontSize: calculateRem(value),
          };
        },
        "pt-rem": (value) => ({
          paddingTop: calculateRem(value),
        }),
        "pl-rem": (value) => ({
          paddingLeft: calculateRem(value),
        }),
        "pb-rem": (value) => ({
          paddingBottom: calculateRem(value),
        }),
        "pr-rem": (value) => ({
          paddingRight: calculateRem(value),
        }),
        "p-rem": (value) => ({
          padding: calculateRem(value),
        }),
        "px-rem": (value) => ({
          paddingLeft: calculateRem(value),
          paddingRight: calculateRem(value),
        }),
        "py-rem": (value) => ({
          paddingTop: calculateRem(value),
          paddingBottom: calculateRem(value),
        }),
        "w-rem": (value) => ({
          width: calculateRem(value),
        }),
        "min-w-rem": (value) => ({
          minWidth: calculateRem(value),
        }),
        "max-w-rem": (value) => ({
          maxWidth: calculateRem(value),
        }),
        "h-rem": (value) => ({
          height: calculateRem(value),
        }),
        "min-h-rem": (value) => ({
          minHeight: calculateRem(value),
        }),
        "max-h-rem": (value) => ({
          maxHeight: calculateRem(value),
        }),
        "mt-rem": (value) => ({
          marginTop: calculateRem(value),
        }),
        "ml-rem": (value) => ({
          marginLeft: calculateRem(value),
        }),
        "mb-rem": (value) => ({
          marginBottom: calculateRem(value),
        }),
        "mr-rem": (value) => ({
          marginRight: calculateRem(value),
        }),
        "mx-rem": (value) => ({
          marginLeft: calculateRem(value),
          marginRight: calculateRem(value),
        }),
        "my-rem": (value) => ({
          marginTop: calculateRem(value),
          marginBottom: calculateRem(value),
        }),
        "leading-rem": (value) => ({
          lineHeight: calculateRem(value),
        }),
        "rounded-rem": (value) => ({
          borderRadius: calculateRem(value),
        }),
        "gap-rem": (value) => ({
          gap: calculateRem(value),
        }),
        "row-gap-rem": (value) => ({
          rowGap: calculateRem(value),
        }),
        "gap-y-rem": (value) => ({
          rowGap: calculateRem(value),
        }),
        "col-gap-rem": (value) => ({
          columnGap: calculateRem(value),
        }),
        "gap-x-rem": (value) => ({
          columnGap: calculateRem(value),
        }),
        "border-b-rem": (value) => ({
          borderBottomWidth: calculateRem(value),
        }),
        "border-t-rem": (value) => ({
          borderTopWidth: calculateRem(value),
        }),
        "border-r-rem": (value) => ({
          borderRightWidth: calculateRem(value),
        }),
        "border-l-rem": (value) => ({
          borderLeftWidth: calculateRem(value),
        }),
        "border-rem": (value) => ({
          borderWidth: calculateRem(value),
        }),
        "top-rem": (value) => ({
          top: calculateRem(value),
        }),
        "right-rem": (value) => ({
          right: calculateRem(value),
        }),
        "bottom-rem": (value) => ({
          bottom: calculateRem(value),
        }),
        "left-rem": (value) => ({
          left: calculateRem(value),
        }),
      });
    }),
  ],
};
