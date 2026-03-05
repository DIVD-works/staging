<script lang="ts">
    import { Temporal } from "temporal-polyfill";
    import WorksLogo from "../assets/favicon.png";
    import Icon from "@iconify/svelte";
    import type { FooterLinks } from "./types";

    const browser_compatibility: string = navigator.userAgent;
    const copyright_year: number = browser_compatibility.match(/chrome|edg|firefox/i) ? 
        Temporal.Now.zonedDateTimeISO().year : 
        new Date().getFullYear();

    const item_links: FooterLinks[] = [
        {
            href: "/about",
            name: "About DIVD.works",
        },
        {
            href: "/workings",
            name: "How DIVD.works",
        },
        {
            href: "/privacy",
            name: "Privacy Statement",
        },
        {
            href: "/tos",
            name: "Terms & Conditions",
        },
        {
            href: "/conduct",
            name: "Code of Conduct",
        },
    ];

    const media_links: FooterLinks[] = [
        {
            href: "https://github.com/divd-works",
            name: "octicon:mark-github-24",
        },
        {
            href: "https://www.youtube.com/@DIVD-works",
            name: "tabler:brand-youtube-filled",
        },
        {
            href: "https://discord.com/invite/uRTHZm9GgT",
            name: "tabler:brand-discord-filled",
        },
        {
            href: "#",
            name: "mdi:email-fast",
        },
    ];
</script>
<footer class="bg-zinc-100 dark:bg-zinc-900 text-neutral-600 dark:text-neutral-400 w-full px-3 lg:px-0 py-10 flex 
    justify-center rounded-t-4xl">
    <section class="lg:w-[1100px] grid grid-cols-12 md:gap-5">
        <article class="w-auto col-span-12">
            <figure class="w-24">
                <a href="/"><img src={WorksLogo} alt="DIVD.works Logo" /></a>
            </figure>
        </article>
        <article class="w-auto col-span-12 md:col-span-6 mr-0 md:mr-8">
            <h3 class="text-3xl font-medium text-black dark:text-white">About DIVD.works</h3>
            <p class="text-lg font-light my-4">
                We connect young digital talent with employers to support skill development and career-aligned internships or 
                part-time roles. By simplifying the search process, it helps prevent talented individuals from feeling discouraged.
            </p>
            <p class="text-base font-light">
                Copyright &copy; {copyright_year} 
                <a href="/" class="font-semibold">DIVD.works.</a>
            </p>
        </article>
        <article class="w-auto col-span-12 md:col-span-6 lg:col-span-3 mt-8 md:mt-0">
            <h3 class="text-3xl font-medium text-black dark:text-white">Links</h3>
            <ul class="list-disc list-inside text-lg/7 font-light my-4">
                {#each item_links as link}
                    <li><a href={link.href} class="hover:text-neutral-800 dark:hover:text-neutral-200">{link.name}</a></li>
                {/each}
            </ul>
            <div class="w-full flex gap-3">
                {#each media_links as media}
                    <a href={media.href} target="_blank">
                        <Icon icon={media.name} font-size="28" class="hover:text-neutral-800 dark:hover:text-neutral-200 
                        transition-all" />
                    </a>
                {/each}
            </div>
        </article>
        <article class="w-auto col-span-12 md:col-span-12 lg:col-span-3 mt-8 md:mt-0">
            <h3 class="text-3xl font-medium text-black dark:text-white">Explore internship</h3>
            <div class="w-full my-4 text-lg font-light text-white dark:text-black">
                <a href="https://form.jotform.com/250672969917070" target="_blank">
                    <button class="cursor-pointer w-full sm:w-1/2 lg:w-full h-10 flex justify-center items-center rounded-3xl 
                        bg-black dark:bg-white content-center transition-all hover:bg-zinc-700 dark:hover:bg-zinc-300">
                        Signup for internship 
                        <Icon icon="mdi:computer" font-size="28" class="ml-3" />
                    </button>
                </a>
            </div>
        </article>
    </section>
</footer>
