<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { tos } from "$lib/types";
</script>

<Header />
<main>
    <!-- TOS section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                TOS
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4"
            >
                Last updated: August 31, 2025. Please read these terms and
                conditions carefully before using Our Service.
            </p>
        </article>
    </section>
    <!-- Conditions section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2
                class="text-purple-500 text-4xl md:text-5xl font-semibold text-center"
            >
                Conditions
            </h2>
            <div class="w-full flex flex-col gap-6">
                {#each tos as condition, index}
                    <h3
                        class="text-purple-500 text-3xl md:text-4xl font-medium"
                    >
                        {#if index < 9}0{/if}{index + 1}. {condition.title}
                    </h3>
                    <p
                        class="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                    >
                        {condition.description || "No description provided."}
                    </p>
                    <ol
                        class="text-gray-700 dark:text-gray-300 text-sm sm:text-base pl-4"
                        style="list-style-type:square"
                    >
                        {#each condition.tags as tag}
                            <li class="marker:text-purple-500 pb-2">
                                {tag}
                            </li>
                        {/each}
                    </ol>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
