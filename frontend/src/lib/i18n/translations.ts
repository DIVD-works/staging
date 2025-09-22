import i18n from "sveltekit-i18n";

/** @type {import("sveltekit-i18n").Config} */
const config = {
  fallbackLocale: "en",
  loaders: [
    {
      locale: "en",
      key: "common",
      routes: [/.*/],
      loader: async () => (await import("./messages/en.json")).default,
    },
    {
      locale: "nl",
      key: "common",
      routes: [/.*/],
      loader: async () => (await import("./messages/nl.json")).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config,
);
