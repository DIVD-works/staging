import Victor from "$lib/assets/team/victor.jpg";
import Akiko from "$lib/assets/team/akiko.jpeg";
import Default from "$lib/assets/team/default.jpg";
import Liam from "$lib/assets/team/liam.jpeg";
import Baran from "$lib/assets/team/baran.jpeg";
import Loek from "$lib/assets/team/loek.jpeg";
import Luc from "$lib/assets/team/luc.jpeg";
import Dirk from "$lib/assets/team/dirk.jpeg";
import Nigel from "$lib/assets/team/nigel.png";
import Ahmed from "$lib/assets/team/ahmed.jpg";
import Marcel from "$lib/assets/team/marcel.jpg";
import Michel from "$lib/assets/team/michel.jpg";

import PGU from "$lib/assets/projects/project-global-universities.png";
import ICY from "$lib/assets/projects/project-icy.png";
import VLAM from "$lib/assets/projects/vlamai.png";

export type NavigationRoutes<T> = {
  url: T;
  item: T;
};

export const navigation_routes: NavigationRoutes<string>[] = [
  {
    url: "/",
    item: "Home",
  },
  {
    url: "/internships",
    item: "Internships",
  },
  {
    url: "/about",
    item: "About",
  },
  {
    url: "/workmethods",
    item: "Workmethods",
  },
  {
    url: "/growth",
    item: "Growth",
  },
  {
    url: "/careers",
    item: "Careers",
  },
  {
    url: "/faq",
    item: "FAQ",
  },
  {
    url: "/projects",
    item: "Projects",
  },
  {
    url: "/services",
    item: "Services",
  },
  {
    url: "https://form.jotform.com/250672969917070",
    item: "Apply",
  },
];

export type Cards<T> = {
  title: T;
  slogan: T;
  icon: T;
};

export const home_cards: Cards<string>[] = [
  {
    title: "Students",
    slogan: "Students gain Real-World experience",
    icon: "mdi:account-student",
  },
  {
    title: "Companies",
    slogan: "Companies discover motivated talent",
    icon: "mdi:company",
  },
  {
    title: "Education",
    slogan: "Education prepares students for the future",
    icon: "mdi:education-outline",
  },
  {
    title: "Communities",
    slogan: "Communities connect, collaborate and innovate",
    icon: "mdi:connect-without-contact",
  },
  {
    title: "Workset",
    slogan: "Workset empowers mentorship and growth",
    icon: "mdi:computer",
  },
  {
    title: "Freedom",
    slogan: "Freedom embarks a journey of lifelong learning",
    icon: "mdi:bird",
  },
];

export type TechnologyIcons<T> = {
  icon: T;
  style: T;
};

export const technology_icons: TechnologyIcons<string>[] = [
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

export type SEO<T> = {
  title: T;
  description: T;
};

export const internship_cards: Cards<string>[] = [
  {
    title: "Skill Development",
    slogan:
      "Engage in hands-on projects that enhance both technical and soft skills crucial for the global digital landscape.",
    icon: "mdi:tool-clock",
  },
  {
    title: "International Exposure",
    slogan:
      "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
    icon: "mdi:globe",
  },
  {
    title: "Career Advancement",
    slogan:
      "Build a robust foundation that prepares you for opportunities in international organizations and the broader digital economy.",
    icon: "mdi:stairs-up",
  },
];

export const service_cards: Cards<string>[] = [
  {
    title: "Cybersecurity",
    slogan: "Protects your data, prevents breaches.",
    icon: "mdi:encryption-check",
  },
  {
    title: "Vanilla Open-Source Support",
    slogan: "Simplifies adoption, boosts collaboration.",
    icon: "mdi:computer",
  },
  {
    title: "Talent Growth",
    slogan: "Expands knowledge, fuels progress.",
    icon: "mdi:chart-areaspline",
  },
];

export type Team<T> = {
  source: T;
  identifier: T;
  position: T;
};

export const team: Team<string>[] = [
  {
    source: Victor,
    identifier: "Victor Gevers",
    position: "CEO",
  },
  {
    source: Akiko,
    identifier: "Akiko Takashima",
    position: "Chief Financial Officer",
  },
  {
    source: Default,
    identifier: "Jared Hofman",
    position: "SVP, Business Operations",
  },
  {
    source: Liam,
    identifier: "Liam Plokkaar",
    position: "SVP, Sales",
  },
  {
    source: Baran,
    identifier: "Baran Canakci",
    position: "Chief Marketing Officer",
  },
  {
    source: Loek,
    identifier: "Loek Ota",
    position: "SVP, Chief People Office",
  },
  {
    source: Luc,
    identifier: "Luc van Kessel",
    position: "SVP, Support",
  },
  {
    source: Dirk,
    identifier: "Dirk Rijntalder",
    position: "SVP, Chief Legal Officer",
  },
  {
    source: Nigel,
    identifier: "Nigel van Maanen",
    position: "Chief Creative Officer (CCO)",
  },
  {
    source: Ahmed,
    identifier: "Ahmed Ezzammouri",
    position: "CISO",
  },
  {
    source: Marcel,
    identifier: "Marcel van der Kuil",
    position: "COO",
  },
  {
    source: Michel,
    identifier: "Michel Verhagen",
    position: "Chief Public Private Partnerships",
  },
];

export type Projects<T> = {
  location: T;
  image: T;
  title: T;
  description: T;
  tags?: T[];
};

export const projects: Projects<string>[] = [
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

export interface FAQ<T> extends SEO<T> {}

export const faq: FAQ<string>[] = [
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

export interface Conduct<T> extends SEO<T> {}

export const conduct: Conduct<string>[] = [
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

export interface TOS<T> extends SEO<T> {
  tags?: T[];
}

export const tos: TOS<string>[] = [
  {
    title: "Interpretation",
    description:
      "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
  },
  {
    title: "Definitions",
    description: "For the purposes of these Terms and Conditions:",
    tags: [
      'Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
      "Country refers to: Netherlands",
      'Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to DIVD.works, Maanweg 174, 2516 AB, The Hague.',
      "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
      "Service refers to the Website.",
      'Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Free Terms and Conditions Generator.',
      "Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
      "Website refers to DIVD.works, accessible from https://divd.works",
      "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
    ],
  },
  {
    title: "Acknowledgment",
    description:
      "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.",
  },
  {
    title: "Links to Other Websites",
    description:
      "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.",
  },
  {
    title: "Termination",
    description:
      "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.",
  },
  {
    title: "Limitation of Liability",
    description:
      "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.",
  },
  {
    title: '"AS IS" and "AS AVAILABLE" Disclaimer',
    description:
      'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. Without limiting the foregoing, neither the Company nor any of the company\'\s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components. Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.',
  },
  {
    title: "Governing Law",
    description:
      "The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.",
  },
  {
    title: "Disputes Resolution",
    description:
      "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.",
  },
  {
    title: "For European Union (EU) Users",
    description:
      "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.",
  },
  {
    title: "United States Legal Compliance",
    description:
      'You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.',
  },
  {
    title: "Severability",
    description:
      "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.",
  },
  {
    title: "Waiver",
    description:
      "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.",
  },
  {
    title: "Translation Interpretation",
    description:
      "These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.",
  },
  {
    title: "Changes to These Terms and Conditions",
    description:
      "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about these Terms and Conditions, You can contact us:",
    tags: ["By calling to our phone number: (+31) 70 41 90 309"],
  },
];

export interface Privacy<T> extends TOS<T> {}

export const privacy: Privacy<string>[] = [
  {
    title: "Interpretation",
    description:
      "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
  },
  {
    title: "Definitions",
    description: "For the purposes of this Privacy Policy:",
    tags: [
      "Account means a unique account created for You to access our Service or parts of our Service.",
      'Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.',
      'Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to DIVD.works B.V., Maanweg 174, 2516 AB, The Hague.',
      "Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
      "Country refers to: Netherlands",
      "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
      "Personal Data is any information that relates to an identified or identifiable individual.",
      "Service refers to the Website.",
      "Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
      "Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.",
      "Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
      "Website refers to DIVD.works, accessible from https://divd.works",
      "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
    ],
  },
  {
    title: "Collecting data",
    description: "",
  },
];
