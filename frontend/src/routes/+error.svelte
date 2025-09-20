<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main class="bg-white dark:bg-black">
    <section
        class="w-full h-[53vh] flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1 class="text-black dark:text-white font-bold text-5xl">
                {page.status}
                Page
                {page.error?.message}
            </h1>
            <p class="text-gray-700 dark:text-gray-300">
                The page you are looking for doesn't exist. Check the url or
                navigate in the menu.
            </p>
        </article>
    </section>
</main>
<Footer />
