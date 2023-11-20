/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const getBaseApiUrl = () => {
    if (isDev) return "http://localhost:3000/api";
    if (isStaging) return "http://localhost:3000/api";
    if (isProd) return "http://localhost:3000/api";
  };
  const getExternalApiUrl = () => {
    if (isDev) return "http://api.localhost:3000/v1";
    if (isStaging) return "http://api.localhost:3000/v1";
    if (isProd) return "http://api.localhost:3000/v1";
  };

  const langConfig = {
    env: {
      BRANCH_NAME: "dev",
      BRANCH_URL: "https://github.com/",

      NEXT_PUBLIC_API_URL: getBaseApiUrl(),
      NEXT_PUBLIC_EXTERNAL_API_URL: getExternalApiUrl(),
    },
    i18n: {
      locales: ["default", "ua", "ru", "en"],
      defaultLocale: "default",
      localeDetection: true,
    },
    images: {
      domains: ["fiverr-res.cloudinary.com"],
    },
  };

  const nextConfig = {
    reactStrictMode: false,
    ...langConfig,
  };

  return nextConfig;
};
