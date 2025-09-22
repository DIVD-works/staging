<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";
</script>

<Header />
<main>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h1 class="h1">Services</h1>
            <div class="card my-4">
                {#each page.data.service_cards as { title, description, icon }}
                    <article class="card-item text-center">
                        <div class="w-full flex justify-center">
                            <Icon {icon} class="icon-medium card-icon" />
                        </div>
                        <h2 class="h2 !text-2xl md:!text-3xl my-3">
                            {title}
                        </h2>
                        <p class="p">{description}</p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
