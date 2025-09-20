import type { SEO } from "$lib/types";

export const load: () => SEO<string> = (): SEO<string> => {
  return {
    title: "Internships - DIVD.works",
    description:
      "Powered by Purpose - The goal of the DIVD.works project is to create a platform that brings together young digital talent and employers.",
  };
};
