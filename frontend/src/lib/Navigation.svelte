<script lang="ts">
    import User from "./User.svelte";
    import Works from "./Works.svelte";
    import { createEventDispatcher, type EventDispatcher } from "svelte";
    import { slide } from "svelte/transition";
    import Menu from "./Menu.svelte";

    export let menu_open: boolean;

    const icon_set: string = "mdi:hamburger-close";
    const dispatch: EventDispatcher<Record<string, unknown>> =
        createEventDispatcher();
    const toggleNavigation: () => boolean = (): boolean =>
        dispatch("toggle_navigation");

    const navigation_routes: string[] = [
        "Home",
        "Internships",
        "About",
        "Workmethods",
        "Growth",
        "Careers",
        "Faq",
        "Projects",
        "Services",
        "Apply",
    ];
</script>

<section
    class="sticky inset-0 h-screen bg-[#D832E6] dark:bg-[#95389E] z-10 overflow-y-scroll"
    transition:slide
>
    {#if menu_open}
        <article
            class="w-full h-16 sm:h-20 flex items-center justify-between px-3 md:px-5 sticky top-0 z-10
            bg-[#D832E6] dark:bg-[#95389E] border-b border-b-white"
        >
            <Works />
            <div>
                <User />
                <Menu {icon_set} on:toggle_navigation={toggleNavigation} />
            </div>
        </article>
        <nav
            class="w-full flex flex-col px-3 md:px-5
            text-black dark:text-white my-2 font-semibold text-2xl sm:text-3xl"
        >
            {#each navigation_routes as routes, _}
                <article
                    class="w-full hover:bg-[#CC14D9] dark:hover:bg-[#822F8A] duration-200 ease-out
                    hover:ease-in rounded-lg px-3"
                >
                    <a
                        href={routes === "Home"
                            ? "/"
                            : routes === "Apply"
                              ? "https://form.jotform.com/250672969917070"
                              : routes.toLowerCase()}
                        class="h-17.75 flex justify-start md:justify-center items-center"
                        data-sveltekit-reload
                    >
                        {routes.toUpperCase()}
                    </a>
                </article>
            {/each}
        </nav>
    {/if}
</section>
