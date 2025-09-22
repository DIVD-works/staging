import type { Conduct } from "$lib/types";

const conduct: Conduct<string>[] = [
  {
    title: "Professionalism",
    description:
      "Employees should avoid situations that create a conflict of interest between their personal interests and the interests of the organization. If a conflict arises, employees must disclose it promptly to their supervisor or the appropriate department.",
  },
  {
    title: "Confidentiality",
    description:
      "Employees must respect the confidentiality of sensitive information they have access to during their employment. This includes, but is not limited to, customer data, financial information, trade secrets, and intellectual property. Any unauthorized disclosure or use of confidential information is strictly prohibited.",
  },
  {
    title: "Conflict of Interest",
    description:
      "Employees should avoid situations that create a conflict of interest between their personal interests and the interests of the organization. If a conflict arises, employees must disclose it promptly to their supervisor or the appropriate department.",
  },
  {
    title: "Anti-Discrimination and Harassment",
    description:
      "We are committed to providing a workplace free from discrimination, harassment, and retaliation. Employees must treat others with fairness, respect their diversity, and refrain from engaging in any form of discriminatory or harassing behavior based on race, color, religion, gender, sexual orientation, age, disability, or any other protected characteristic.",
  },
  {
    title: "Use of Company Resources",
    description:
      "All company resources, including equipment, technology, and facilities, should be used responsibly and for legitimate business purposes only. Personal use of company resources should be minimal and in compliance with applicable policies.",
  },
  {
    title: "Compliance with Laws and Regulations",
    description:
      "Employees must comply with all applicable laws, regulations, and legal obligations related to their job responsibilities. Any illegal activity or violation of these laws can have serious consequences, both for the individual employee and the organization. If an employee becomes aware of any violations of this code of conduct or witnesses any unethical behavior, they should report it immediately to their supervisor, manager, or the appropriate authority designated by the organization. Retaliation against individuals reporting violations in good faith is strictly prohibited.",
  },
  {
    title: "Consequences of Non-Compliance",
    description:
      "Violation of this code of conduct may result in disciplinary action, up to and including termination of employment. The consequences will depend on the severity and frequency of the violation, and the circumstances surrounding it.",
  },
];

export const load = () => {
  return {
    conduct: conduct,
  };
};
