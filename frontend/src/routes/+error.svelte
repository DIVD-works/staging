<script lang="ts">
    import WorksLogo from "../lib/assets/favicon.png";
    import { page } from "$app/state";
</script>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <figure class="w-24">
                <a href="/"><img src={WorksLogo} alt="DIVD.works Logo" /></a>
            </figure>
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-black dark:text-white my-4">{page.status} Error</h1>
            <h2 class="text-4xl md:text-5xl font-semibold">Page {page.error?.message}</h2>
            <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                The content you're looking for currently doesn't exist, has been deleted or moved. Check if the url you've put
                is correct, navigate the menu/footer to get more information or go 
                <a href="/" class="font-semibold text-black dark:text-white">back</a>.
            </p>
        </article>
    </section>
</main>
