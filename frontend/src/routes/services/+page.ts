import type { Cards } from "$lib/types";

const service_cards: Cards<string>[] = [
  {
    title: "Cybersecurity",
    description: "Protects your data, prevents breaches.",
    icon: "mdi:encryption-check",
  },
  {
    title: "Vanilla Open-Source",
    description: "Simplifies adoption, boosts collaboration.",
    icon: "mdi:computer",
  },
  {
    title: "Talent Growth",
    description: "Expands knowledge, fuels progress.",
    icon: "mdi:chart-areaspline",
  },
];

export const load = ({ data }: unknown) => {
  return {
    service_cards: service_cards,
    title: data.title,
    description: data.description,
  };
};
