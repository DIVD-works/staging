import type { Cards } from "$lib/types";

const internship_cards: Cards<string>[] = [
  {
    title: "Skill Development",
    description:
      "Engage in hands-on projects that enhance both technical and soft skills crucial for the global digital landscape.",
    icon: "mdi:tool-clock",
  },
  {
    title: "International Exposure",
    description:
      "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
    icon: "mdi:globe",
  },
  {
    title: "Career Advancement",
    description:
      "Build a robust foundation that prepares you for opportunities in international organizations and the broader digital economy.",
    icon: "mdi:stairs-up",
  },
];

export const load = ({ data }: unknown) => {
  return {
    internshipcards: internship_cards,
    title: data.title,
    description: data.description,
  };
};
