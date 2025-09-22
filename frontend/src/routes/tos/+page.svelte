<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <section class="section bgcolor">
        <article class="article">
            <h1 class="h1">TOS</h1>
            <p class="p mb-4">
                Last updated: August 31, 2025. Please read these terms and
                conditions carefully before using Our Service.
            </p>
        </article>
    </section>
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h2 class="h2 text-center">Conditions</h2>
            <div class="w-full flex flex-col gap-6">
                {#each page.data.tos as { title, description, tags }, index}
                    <h3 class="h3">
                        {#if index < 9}0{/if}{index + 1}. {title}
                    </h3>
                    <p class="p !text-sm sm:!text-base">
                        {description || "No description provided."}
                    </p>
                    <ol
                        class="p !text-sm sm:!text-base pl-4"
                        style="list-style-type:square"
                    >
                        {#each tags as tag}
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
