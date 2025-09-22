import type { Projects } from "$lib/types";

import PGU from "$lib/assets/projects/project-global-universities.png";
import ICY from "$lib/assets/projects/project-icy.png";
import VLAM from "$lib/assets/projects/vlamai.png";

const projects: Projects<string>[] = [
  {
    location: "https://csirt.substack.com/p/project-global-universities-pgu",
    image: PGU,
    title: "Project Global Universities",
    description:
      "CSIRT.global's Global Universities project aims to identify and mitigate cybersecurity vulnerabilities affecting universities worldwide. We work closely with talented cybersecurity students who contribute their skills through hands-on research and analysis. These students investigate exposed systems, analyze threats, and support responsible disclosure processes. The goal is to enhance digital resilience in the academic sector while nurturing the next generation of cybersecurity professionals.",
  },
  {
    location: "https://github.com/SSC-ICT-Innovatie/ICY",
    image: ICY,
    title: "Project ICY",
    description:
      "An open-source survey application designed as an alternative solution for use by the Dutch Government.",
    tags: [
      "Programming Language: Dart",
      "Framework: Flutter",
      "Supported Platforms: Fully multi-platform, including mobile (iOS & Android), web, and desktop environments.",
    ],
  },
  {
    location: "https://vlam.ai/",
    image: VLAM,
    title: "vlam.ai",
    description:
      "Project vlam.ai (Veilige, Lokale AI Modellen – “Safe, Local AI Models”) is a Dutch government initiative by BZK, VRO, and SSC-ICT that delivers secure, locally hosted, and scalable AI solutions for the Dutch government, enabling private AI application deployment, confidential generative AI chat, and efficient AI-powered search across public-sector data.",
  },
];

export const load = ({ data }: unknown) => {
  return {
    projects: projects,
    title: data.title,
    description: data.description,
  };
};
