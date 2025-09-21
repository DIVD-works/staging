<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
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
</script>

<Header />
<main>
    <!-- Conduct section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                Conduct
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4"
            >
                A Code of Conduct sets clear expectations for employee behavior,
                fostering a respectful, ethical, and professional workplace. It
                ensures accountability, protects confidential information,
                prevents conflicts of interest, and promotes compliance with
                laws and regulations. By adhering to these guidelines, employees
                contribute to a positive and productive work environment that
                upholds the values and integrity of the organization.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                The <a
                    href="https://github.com/DIVD-works"
                    target="_blank"
                    class="font-semibold underline">DIVD.works project</a
                >
                is about creating an online platform to empower purpose. Connecting
                talent to new opportunities. Contribution guidelines:
                <a
                    href="https://news.victorgevers.com/working-in-the-open-c7517a513c07"
                    target="_blank"
                    class="font-semibold underline">Working in the open</a
                >, following our
                <a
                    href="https://docs.google.com/document/d/1egKSxMCJv-G7pxNGPC2hmB24m_iIM-hc1sQe97ZvGbM/edit?usp=sharing"
                    target="_blank"
                    class="font-semibold underline">Code of Ethics</a
                > and our project handbook, is how the community can get involved.
            </p>
        </article>
    </section>
    <!-- Rules section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2 class="text-purple-500 text-4xl md:text-5xl font-semibold">
                Rules
            </h2>
            <div class="w-full flex flex-col gap-6">
                {#each conduct as { title, description }, index}
                    <h3
                        class="text-purple-500 text-3xl md:text-4xl font-medium"
                    >
                        0{index + 1}. {title}
                    </h3>
                    <p
                        class="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                        {description || "No description provided."}
                    </p>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
