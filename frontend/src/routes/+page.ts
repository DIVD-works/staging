import type { Cards, TechnologyIcons } from "$lib/types";

const home_cards: Cards<string>[] = [
  {
    title: "Students",
    description: "Students gain Real-World experience",
    icon: "mdi:account-student",
  },
  {
    title: "Companies",
    description: "Companies discover motivated talent",
    icon: "mdi:company",
  },
  {
    title: "Education",
    description: "Education prepares students for the future",
    icon: "mdi:education-outline",
  },
  {
    title: "Communities",
    description: "Communities connect, collaborate and innovate",
    icon: "mdi:connect-without-contact",
  },
  {
    title: "Workset",
    description: "Workset empowers mentorship and growth",
    icon: "mdi:computer",
  },
  {
    title: "Freedom",
    description: "Freedom embarks a journey of lifelong learning",
    icon: "mdi:bird",
  },
];

const technology_icons: TechnologyIcons<string>[] = [
  {
    icon: "tabler:brand-svelte",
    style: "text-orange-600",
  },
  {
    icon: "mdi:language-typescript",
    style: "text-blue-500",
  },
  {
    icon: "mdi:tailwind",
    style: "text-sky-400",
  },
  {
    icon: "mdi:language-rust",
    style: "text-orange-500",
  },
  {
    icon: "mdi:database",
    style: "text-yellow-400",
  },
  {
    icon: "mdi:language-python",
    style: "text-green-500",
  },
  {
    icon: "tabler:brand-flutter",
    style: "text-blue-300",
  },
  {
    icon: "mdi:github",
    style: "text-black dark:text-white",
  },
  {
    icon: "mdi:linux",
    style: "text-black dark:text-white",
  },
  {
    icon: "mdi:google",
    style: "text-red-500",
  },
];

export const load = ({ data }: unknown) => {
  return {
    homecards: home_cards,
    technologyicons: technology_icons,
    title: data.title,
    description: data.description,
  };
};
