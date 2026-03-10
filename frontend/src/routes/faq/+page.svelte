<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { FAQ } from "$lib/components/types";

    let faq_index: number | null = $state(null);
    const faq: FAQ[] = [
        {
            title: "⚡ What is DIVD.works, and how does it differ from traditional internship platforms?",
            description: "DIVD.works is a purpose-driven talent and open platform that connects young digital talent and students where they work on real-world digital challenges with social impact. Challenges are available in cybersecurity, ethical hacking, public interest tech, and more. Unlike traditional internship platforms, we guarantee each student a placement and focus on meaningful work, ethical digital innovation, and personal growth, not just filling vacancies. Furthermore we help students co-create their own ideal internship, graduation project, or work experience, often alongside the Dutch Institute for Vulnerability Disclosure (DIVD) and the DIVD Academy.",
        },
        {
            title: "📍 How does DIVD.works guarantee placements (for students)?",
            description: "We design internships around the student, not the other way around. Every student who joins DIVD.works gets the chance to work on a real project—either one initiated by us or one they propose themselves—guided by experienced mentors from our community. If you're motivated and willing to learn, we guarantee you a spot. We believe every student deserves a meaningful opportunity.",
        },
        {
            title: "👥 Who can participate in DIVD.works—what types of students, talents, or backgrounds are welcome?",
            description: "We welcome curious and motivated students from all educational backgrounds, especially those with interest in cybersecurity, ethical hacking, design, software development, research, communication, or social impact. If you want to make a difference with your skills, you’re welcome here. ",
        },
        {
            title: "🗂️ What kind of projects or learning opportunities does DIVD.works offer?",
            description: "Projects range from ethical hacking and vulnerability disclosure to building digital tools, public awareness campaigns, research, or the development d software that supports open-source and humanitarian efforts. All projects are connected to real-world problems and digital responsibility. ",
        },
        {
            title: "💡 Can students propose their own project ideas, and how are those supported within the platform?",
            description: "Yes! Students are encouraged to propose their own ideas—whether it's a research topic, a digital product, or a social initiative. We help refine the concept, connect you with mentors, and create a structure that makes your idea a reality during your internship. ",
        },
        {
            title: "🌱 How does DIVD.works help students grow professionally and personally during their internship?",
            description: "We focus on real learning. That means building confidence, gaining hands-on experience, developing leadership skills, and working on things that matter. You’re not just an intern—you’re a contributor, and we support your growth every step of the way.",
        },
        {
            title: "🏢 What do companies or organizations gain by collaborating with DIVD.works?",
            description: "Organizations gain access to highly motivated, purpose-driven students who bring fresh ideas, real skills, and a strong sense of responsibility. It's an opportunity to co-create impactful solutions, contribute to social good, and engage with talent that values ethical and meaningful work. Many of these students go on to become valuable team members—making DIVD.works not just a project partner, but also a powerful recruitment channel for forward-thinking organizations.",
        },
        {
            title: "🤔 Who is DIVD.works for?",
            description: "We are here for:",
            tags: [
                "Students seeking internships or graduation projects",
                "Young professionals looking to develop tech skills",
                "Educational institutions seeking real-world learning opportunities for students",
                "Public and private organizations with digital challenges that serve the public good",
            ],
        },
        {
            title: "💰 Is this a paid internship?",
            description: "Some internships are unpaid, while others offer payment depending on project funding or client engagement. We support your growth with or without funding, and help you explore ways to monetize your own initiatives.",
        },
        {
            title: "🕰️ How long can an internship at DIVD.works last?",
            description: "We offer flexible durations. Internships can range from a few weeks to several months, depending on your school requirements or personal goals.",
        },
        {
            title: "💼 Can my DIVD.works internship lead to a job or paid freelance work?",
            description: "Yes. Many students continue working with clients or projects after their internship, and we help you build your portfolio and network.",
        },
        {
            title: "💭 What if I don’t have a project idea? Can I still apply?",
            description: "Absolutely. We have many open projects you can join, or we can brainstorm one together during your onboarding.",
        },
        {
            title: "📋 Can I work on a client project through DIVD.works?",
            description: "Yes. We regularly receive real-world client challenges. If you're ready, you can join a team working on these projects.",
        },
        {
            title: "💻 Are remote or hybrid internships possible?",
            description: "Yes. Many of our projects can be done remotely or in hybrid form. As long as you can communicate and collaborate, you can participate.",
        },
        {
            title: "🔐 Do I need cybersecurity or IT experience?",
            description: "No. We welcome learners of all levels. If you're eager to learn and contribute, we’ll support your growth through DIVD.academy and hands-on practice.",
        },
        {
            title: "👨‍💼 What kind of mentorship or supervision can I expect?",
            description: "You'll have access to experienced mentors, peer support, and feedback from professionals in the field. We guide you while giving you autonomy.",
        },
        {
            title: "🔧 What’s the difference between DIVD.academy and DIVD.works?",
            description: "The difference between those two are the following:",
            tags: [
                "DIVD.academy is your learning environment: tutorials, workshops, training and certifications.",
                "DIVD.works is your practical playground: projects, internships, challenges, and collaboration.",
            ],
        },
        {
            title: "🧠 What skills can I develop?",
            description: "The skills you can develop are:",
            tags: [
                "Ethical hacking & vulnerability research",
                "Responsible disclosure",
                "Teamwork, leadership & project ownership",
                "Open-source contribution",
                "Communication & documentation skills",
            ],
        },
        {
            title: "🌐 Are there certifications or credentials I can earn?",
            description: "Yes. Through DIVD.academy and real project work, you can earn digital badges and recognition for your contributions.",
        },
        {
            title: "🏦 How does DIVD.works prepare me for a real job or freelance work?",
            description: "We emphasize practical experience, personal initiative, and collaboration. You’ll build a portfolio, network, and confidence that employers and clients value.",
        },
        {
            title: "🫋 Can I work in a team or do I have to work solo?",
            description: "You choose. Many projects are team-based, but solo initiatives are welcome and supported too.",
        },
        {
            title: "⏳ Can I keep working on my project after my internship ends?",
            description: "Yes. We encourage continued contribution. You may even develop your project into a start-up, client service, or DIVD initiative.",
        },
        {
            title: "🙌 What kind of public impact do projects have?",
            description: "DIVD.works supports responsible disclosure, public digital safety, and open innovation. Your work can directly prevent cyberattacks or improve systems used by many.",
        },
        {
            title: "📚 Can I contribute to open-source or publish research?",
            description: "Yes. We support transparency and responsible publication. Many students have contributed to DIVD reports or developed open tools.",
        },
        {
            title: "🔗 Is DIVD.works part of the Dutch Institute for Vulnerability Disclosure (DIVD)?",
            description: "Yes. It is an experimental initiative aligned with DIVD’s mission, but focused on innovation, education, and student-driven projects.",
        },
        {
            title: '✨ What does "working in the open" mean?',
            description: "We prioritize transparency. Most communication and project progress is public (unless security-sensitive). This helps others learn and contributes to a culture of trust.",
        },
        {
            title: "🚫 Do I need to speak Dutch?",
            description: "No. English is our main language of communication. We welcome international students and collaborators.",
        },
        {
            title: "🙋‍♂️ Can I become an ambassador or community builder?",
            description: "Yes. We invite active students to take on leadership roles, represent DIVD.works, and help grow the community.",
        },
        {
            title: "🤝 What kind of people will I meet?",
            description: "You’ll work alongside ethical hackers, mentors, civic tech experts, students from various backgrounds, and digital professionals who care about making an impact.",
        },
        {
            title: "📥 How do I apply?",
            description: "Visit https://form.jotform.com/250672969917070. The more information you give, the more we can tailor your experience.",
        },
        {
            title: "📣 Can I share this with friends?",
            description: "Absolutely! If you know someone stressed about finding an internship or graduation project, send them to DIVD.works. Let’s create a future where everyone has a place to grow.",
        },
    ];

    let mouse_state: boolean = $state(false);
</script>

<svelte:head>
	<title>FAQ | DIVD.works</title>
    <meta name="description" content="DIVD.works is the bridge connector and a platform between students and companies. Explore your future internship and discover motivated talent today!" />
    <meta name="keywords" content="DIVD.works, platform, internship, talent" />
</svelte:head>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-black dark:text-white">FAQ</h1>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                There is a lot of information to navigate through, so that's why we have put together a list of 
                Frequent Asked Questions (FAQ). You can also ask us questions on Discord.
            </p>
            {#each faq as faq_item, index}
                <button
                    class="rounded-2xl bg-gray-200 dark:bg-gray-800 w-full flex flex-col items-start p-6 shadow-md 
                    text-left cursor-grab {index < faq.length ? "mb-5" : ""} {mouse_state ? "cursor-grabbing" : ""}" 
                    onclick={(): number | null => (faq_index = faq_index == index ? null : index)}
                    onmousedown={(): boolean => mouse_state = !mouse_state}
                    onmouseup={(): boolean => mouse_state = !mouse_state}
                >
                    <h2 class="text-xl md:text-2xl font-semibold text-black dark:text-white mb-4">
                        {index + 1}. {faq_item.title}
                    </h2>
                    {#if faq_index == index}
                        <Icon icon="mdi:arrow-up-drop-circle" font-size="28" class="text-black dark:text-white" />
                        <hr class="w-full my-4" />
                        <p class="text-base/7 md:text-lg/8 font-light w-full">
                            {faq_item.description || "No description provided."}
                        </p>
                        {#if (index == 7 || index == 16 || index == 17)}
                            <ol class="list-[square] list-inside text-base/6 md:text-lg/7 font-light mt-4">
                                {#each faq_item.tags as tag}
                                    <li class="marker:text-black dark:marker:text-white pb-2">
                                        {tag || "No tag provided."}
                                    </li>
                                {/each}
                            </ol>
                        {/if}
                    {:else}
                        <Icon icon="mdi:arrow-down-drop-circle" font-size="28" class="text-black dark:text-white" />
                    {/if}
                </button>
            {/each}
        </article>
    </section>
</main>
