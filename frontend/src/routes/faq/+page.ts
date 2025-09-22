import type { FAQ } from "$lib/types";

const faq: FAQ<string>[] = [
  {
    title:
      "What is DIVD.works, and how does it differ from traditional internship platforms?",
    description:
      "DIVD.works is a purpose-driven talent platform where students work on real-world digital challenges with social impact. Unlike traditional internship platforms, we guarantee each student a placement and focus on meaningful work, ethical digital innovation, and personal growth—not just filling vacancies.",
  },
  {
    title: "How does DIVD.works guarantee internship placements for students?",
    description:
      "We design internships around the student, not the other way around. Every student who joins DIVD.works gets the chance to work on a real project—either one initiated by us or one they propose themselves—guided by experienced mentors from our community.",
  },
  {
    title:
      "Who can participate in DIVD.works—what types of students, talents, or backgrounds are welcome?",
    description:
      "We welcome curious and motivated students from all educational backgrounds, especially those with interest in cybersecurity, ethical hacking, design, software development, research, communication, or social impact. If you want to make a difference with your skills, you’re welcome here. ",
  },
  {
    title:
      "What kind of projects or learning opportunities does DIVD.works offer?",
    description:
      "Projects range from ethical hacking and vulnerability disclosure to building digital tools, public awareness campaigns, research, or the development d software that supports open-source and humanitarian efforts. All projects are connected to real-world problems and digital responsibility. ",
  },
  {
    title:
      "Can students propose their own project ideas, and how are those supported within the platform?",
    description:
      "Yes! Students are encouraged to propose their own ideas—whether it's a research topic, a digital product, or a social initiative. We help refine the concept, connect you with mentors, and create a structure that makes your idea a reality during your internship. ",
  },
  {
    title:
      "How does DIVD.works help students grow professionally and personally during their internship?",
    description:
      "We focus on real learning. That means building confidence, gaining hands-on experience, developing leadership skills, and working on things that matter. You’re not just an intern—you’re a contributor, and we support your growth every step of the way.",
  },
  {
    title:
      "What do companies or organizations gain by collaborating with DIVD.works?",
    description:
      "Organizations gain access to highly motivated, purpose-driven students who bring fresh ideas, real skills, and a strong sense of responsibility. It's an opportunity to co-create impactful solutions, contribute to social good, and engage with talent that values ethical and meaningful work. Many of these students go on to become valuable team members—making DIVD.works not just a project partner, but also a powerful recruitment channel for forward-thinking organizations.",
  },
];

export const load = ({ data }: unknown) => {
  return {
    faq: faq,
    title: data.title,
    description: data.description,
  };
};
