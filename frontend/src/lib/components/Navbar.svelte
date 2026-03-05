<script lang="ts">
    import WorksLogo from "../assets/favicon.png";
    import Mobilemenu from "./Mobilemenu.svelte";
    import type { FooterLinks } from "./types";

    const nav_links: FooterLinks[] = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/about",
            name: "About",
        },
        {
            href: "#",
            name: "faq",
        },
        {
            href: "/projects",
            name: "Projects",
        },
        {
            href: "/workings",
            name: "Workings",
        },
        {
            href: "/careers",
            name: "Careers",
        },
        {
            href: "#",
            name: "Services",
        },
    ];

    let menu_state: boolean = $state(false);
    const toggle_menu: () => boolean = (): boolean => menu_state = !menu_state;
</script>

<header class="w-full h-24 flex justify-center fixed z-10">
    <nav class="bg-zinc-100 dark:bg-zinc-900 text-neutral-600 dark:text-neutral-400 w-full rounded-4xl m-3 flex 
        items-center justify-between px-6 shadow-md">
        <article class="w-auto">
            <figure class="w-18">
                <a href="/"><img src={WorksLogo} alt="DIVD.works Logo" fetchpriority="high" /></a>
            </figure>
        </article>
        <article class="w-auto text-3xl font-medium text-black dark:text-white hover:text-neutral-700 
            dark:hover:text-neutral-300 transition-all block md:hidden">
            <button aria-label="Open menu" onclick={toggle_menu} class="cursor-pointer">☰</button>
            {#if menu_state}
                <Mobilemenu {WorksLogo} {nav_links} {toggle_menu} />
            {/if}
        </article>
        <article class="w-auto hidden md:block">
            {#each nav_links as link}
                <a href={link.href} class="hover:text-neutral-800 dark:hover:text-neutral-200 ml-8">{link.name}</a>
            {/each}
        </article>
    </nav>
</header>
