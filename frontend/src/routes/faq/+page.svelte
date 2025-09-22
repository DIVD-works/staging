<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";

    let faq_index: number | null = null;
</script>

<Header />
<main>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article !items-start md:!items-center">
            <h1 class="h1">FAQ</h1>
            <p class="p my-3 text-left md:text-center">
                There is a lot of information to navigate through, so that's why
                we have put together a list of Frequent Asked Questions (FAQ).
                You can also ask us questions on Discord.
            </p>
            {#each page.data.faq as { title, description }, index}
                <button
                    class="w-full grid grid-cols-1 gap-4 bgcolor p-6 text-left rounded-2xl"
                    on:click={(): number =>
                        (faq_index = faq_index == index ? null : index)}
                >
                    <h2 class="h2 !text-base sm:!text-2xl">
                        {index + 1}. {title}
                    </h2>
                    {#if faq_index == index}
                        <Icon icon="mdi:arrow-up-drop-circle" class="icon" />
                        <hr class="text-black dark:text-white" />
                        <p class="p my-3">{description}</p>
                    {:else}
                        <Icon icon="mdi:arrow-down-drop-circle" class="icon" />
                    {/if}
                </button>
            {/each}
        </article>
    </section>
</main>
<Footer />
