<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main class="bg-default">
    <section class="section h-[53vh] !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h1 class="h1">
                {page.status}
                Page
                {page.error?.message}
            </h1>
            <p class="p">
                The page you are looking for doesn't exist. Check the url or
                navigate in the menu.
            </p>
        </article>
    </section>
</main>
<Footer />
