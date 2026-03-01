<script lang="ts">
    import WorksLogo from "../assets/favicon.png";
    import type { FooterLinks } from "./types";

    const nav_links: FooterLinks[] = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "#",
            name: "About",
        },
        {
            href: "#",
            name: "Services",
        },
        {
            href: "#",
            name: "Workings",
        },
        {
            href: "#",
            name: "Register",
        },
    ];

    let menu_state: boolean = false;
    const toggle_menu: () => boolean = (): boolean => menu_state = !menu_state;
</script>

<header class="w-full h-24 flex justify-center fixed">
    <nav class="bg-zinc-100 dark:bg-zinc-900 text-neutral-600 dark:text-neutral-400 w-full rounded-4xl m-3 flex items-center 
        justify-between px-6 shadow-md">
        <article class="w-auto">
            <figure class="w-18">
                <a href="/"><img src={WorksLogo} alt="DIVD.works Logo" /></a>
            </figure>
        </article>
        <article class="w-auto text-3xl font-medium text-black dark:text-white hover:text-neutral-700 
            dark:hover:text-neutral-300 transition-all block md:hidden">
            <button aria-label="Open menu" on:click={toggle_menu} class="cursor-pointer">☰</button>
            {#if menu_state}
                <header class="w-full h-24 flex justify-center fixed inset-0">
                    <nav class="bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 w-full rounded-4xl m-3 grid 
                        grid-cols-12 items-start justify-between px-6 shadow-md h-[calc(100dvh-24px)]">
                        <article class="w-auto col-span-6">
                            <figure class="w-18">
                                <a href="/" data-sveltekit-reload><img src={WorksLogo} alt="DIVD.works Logo"/></a>
                            </figure>
                        </article>
                        <article class="w-auto text-black dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 
                            transition-all col-span-6 justify-self-end">
                            <button aria-label="Close menu" on:click={toggle_menu} class="w-auto mt-[18px] -ml-1 
                                cursor-pointer">
                                &#x2715;
                            </button>
                        </article>
                        <article class="col-span-12">
                            {#each nav_links as link}
                                <a href={link.href} data-sveltekit-reload>
                                    <div class="bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 
                                        transition-all rounded-xl hover:text-neutral-800 dark:hover:text-neutral-200 my-8 py-4 
                                        px-6">
                                        {link.name}
                                    </div>
                                </a>
                            {/each}
                        </article>
                    </nav>
                </header>
            {/if}
        </article>
        <article class="w-auto hidden md:block">
            {#each nav_links as link}
                <a href={link.href} class="hover:text-neutral-800 dark:hover:text-neutral-200 ml-8">{link.name}</a>
            {/each}
        </article>
    </nav>
</header>
