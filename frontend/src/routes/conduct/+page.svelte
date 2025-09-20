<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { conduct } from "$lib/types";
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
                {#each conduct as rule, index}
                    <h3
                        class="text-purple-500 text-3xl md:text-4xl font-medium"
                    >
                        0{index + 1}. {rule.title}
                    </h3>
                    <p
                        class="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                        {rule.description || "No description provided."}
                    </p>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
