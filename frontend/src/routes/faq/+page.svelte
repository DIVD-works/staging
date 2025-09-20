<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { faq } from "$lib/types";
    import Icon from "@iconify/svelte";

    let faq_index: number | null = null;
</script>

<Header />
<main>
    <!-- FAQ section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1
                class="text-purple-500 text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
                FAQ
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-center"
            >
                There is a lot of information to navigate through, so that's why
                we have put together a list of Frequent Asked Questions (FAQ).
                You can also ask us questions on Discord.
            </p>
            {#each faq as faq_item, index}
                <button
                    class="w-full grid grid-cols-1 gap-4 bg-slate-50 dark:bg-slate-950 p-6 text-left
                    rounded-2xl"
                    on:click={(): number =>
                        (faq_index = faq_index == index ? null : index)}
                >
                    <h2 class="text-purple-500 text-2xl font-semibold">
                        {index + 1}. {faq_item.title}
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
                            {faq_item.description}
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
