import { loadTranslations } from "$lib/i18n/translations";

/** @type {import("@sveltejs/kit").Load} */
export const load = async ({ url }: { url: URL }) => {
  const { pathname } = url;
  const initLocale: string = "en";
  await loadTranslations(initLocale, pathname);

  return {};
};
