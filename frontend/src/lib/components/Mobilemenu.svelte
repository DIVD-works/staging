<script lang="ts">
    import { fade } from "svelte/transition";
    import type { FooterLinks } from "./types";
    import Icon from "@iconify/svelte";

    const { WorksLogo, nav_links, toggle_menu }: {
        WorksLogo: string, 
        nav_links: FooterLinks[], 
        toggle_menu: () => boolean,
    } = $props();
</script>

<header class="w-full h-24 flex justify-center fixed inset-0">
    <nav class="bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 w-full rounded-4xl m-3 
        grid grid-cols-12 items-start px-6 shadow-md h-[calc(100dvh-24px)] grid-rows-[auto_1fr]" 
        transition:fade={{ duration: 300 }}>
        <article class="w-auto col-span-6">
            <figure class="w-18">
                <a href="/" data-sveltekit-reload><img src={WorksLogo} alt="DIVD.works Logo"/></a>
            </figure>
        </article>
        <article class="w-auto text-black dark:text-white hover:text-neutral-700 
            dark:hover:text-neutral-300 transition-all col-span-6 justify-self-end">
            <button aria-label="Close menu" onclick={toggle_menu} class="w-auto mt-[18px] -ml-1 
                cursor-pointer">
                &#x2715;
            </button>
        </article>
        <article class="col-span-12 my-4">
            {#each nav_links as link}
                <a href={link.href} data-sveltekit-reload>
                    <div class="hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all rounded-xl 
                        hover:text-neutral-800 dark:hover:text-neutral-200 my-1 py-3 px-6 flex items-center group">
                        {link.name.toUpperCase()}
                        <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="ml-3 group-hover:ml-5 
                            transition-all" 
                        />
                    </div>
                </a>
            {/each}
        </article>
    </nav>
</header>
