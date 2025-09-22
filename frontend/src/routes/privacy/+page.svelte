<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <section class="section bgcolor">
        <article class="article">
            <h1 class="h1">Privacy</h1>
            <p class="p">Last updated: August 31, 2025</p>
            <p class="p">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and
                improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this
                Privacy Policy. This Privacy Policy has been created with the
                help of the Free Privacy Policy Generator.
            </p>
        </article>
    </section>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h2 class="h2 text-center">Conditions</h2>
            <div class="w-full flex flex-col gap-6">
                {#each page.data.privacy as { title, description, tags }, index}
                    <h3 class="h3">
                        {#if index < 9}0{/if}{index + 1}. {title}
                    </h3>
                    <p class="p">
                        {description || "No description provided."}
                    </p>
                    <ol
                        class="p !text-sm sm:!text-base pl-4"
                        style="list-style-type:square"
                    >
                        {#each tags as tag}
                            <li class="marker:text-purple-500 pb-2">
                                {tag || "No tag provided."}
                            </li>
                        {/each}
                    </ol>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
