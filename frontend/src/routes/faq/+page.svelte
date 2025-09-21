<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";
    import type { FAQ } from "$lib/types";

    let faq_index: number | null = null;

    const faq: FAQ<string>[] = [
        {
            title: "What is DIVD.works, and how does it differ from traditional internship platforms?",
            description:
                "DIVD.works is a purpose-driven talent platform where students work on real-world digital challenges with social impact. Unlike traditional internship platforms, we guarantee each student a placement and focus on meaningful work, ethical digital innovation, and personal growth—not just filling vacancies.",
        },
        {
            title: "How does DIVD.works guarantee internship placements for students?",
            description:
                "We design internships around the student, not the other way around. Every student who joins DIVD.works gets the chance to work on a real project—either one initiated by us or one they propose themselves—guided by experienced mentors from our community.",
        },
        {
            title: "Who can participate in DIVD.works—what types of students, talents, or backgrounds are welcome?",
            description:
                "We welcome curious and motivated students from all educational backgrounds, especially those with interest in cybersecurity, ethical hacking, design, software development, research, communication, or social impact. If you want to make a difference with your skills, you’re welcome here. ",
        },
        {
            title: "What kind of projects or learning opportunities does DIVD.works offer?",
            description:
                "Projects range from ethical hacking and vulnerability disclosure to building digital tools, public awareness campaigns, research, or the development d software that supports open-source and humanitarian efforts. All projects are connected to real-world problems and digital responsibility. ",
        },
        {
            title: "Can students propose their own project ideas, and how are those supported within the platform?",
            description:
                "Yes! Students are encouraged to propose their own ideas—whether it's a research topic, a digital product, or a social initiative. We help refine the concept, connect you with mentors, and create a structure that makes your idea a reality during your internship. ",
        },
        {
            title: "How does DIVD.works help students grow professionally and personally during their internship?",
            description:
                "We focus on real learning. That means building confidence, gaining hands-on experience, developing leadership skills, and working on things that matter. You’re not just an intern—you’re a contributor, and we support your growth every step of the way.",
        },
        {
            title: "What do companies or organizations gain by collaborating with DIVD.works?",
            description:
                "Organizations gain access to highly motivated, purpose-driven students who bring fresh ideas, real skills, and a strong sense of responsibility. It's an opportunity to co-create impactful solutions, contribute to social good, and engage with talent that values ethical and meaningful work. Many of these students go on to become valuable team members—making DIVD.works not just a project partner, but also a powerful recruitment channel for forward-thinking organizations.",
        },
    ];
</script>

<Header />
<main>
    <!-- FAQ section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start md:items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                FAQ
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-left md:text-center"
            >
                There is a lot of information to navigate through, so that's why
                we have put together a list of Frequent Asked Questions (FAQ).
                You can also ask us questions on Discord.
            </p>
            {#each faq as { title, description }, index}
                <button
                    class="w-full grid grid-cols-1 gap-4 bg-slate-50 dark:bg-slate-950 p-6 text-left
                    rounded-2xl"
                    on:click={(): number =>
                        (faq_index = faq_index == index ? null : index)}
                >
                    <h2
                        class="text-purple-500 text-base sm:text-2xl font-semibold"
                    >
                        {index + 1}. {title}
                    </h2>
                    {#if faq_index == index}
                        <Icon
                            icon="mdi:arrow-up-drop-circle"
                            class="w-10 h-10 text-black dark:text-white"
                        />
                        <hr class="text-black dark:text-white" />
                        <p
                            class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg"
                        >
                            {description}
                        </p>
                    {:else}
                        <Icon
                            icon="mdi:arrow-down-drop-circle"
                            class="w-10 h-10 text-black dark:text-white"
                        />
                    {/if}
                </button>
            {/each}
        </article>
    </section>
</main>
<Footer />
