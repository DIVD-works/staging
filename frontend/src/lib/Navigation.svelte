<script lang="ts">
    import User from "./User.svelte";
    import { navigation_routes } from "./types";
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
</script>

<section
    class="fixed inset-0 bg-[#D832E6] dark:bg-[#95389E] z-10"
    transition:slide
>
    {#if menu_open}
        <article
            class="w-full h-16 sm:h-20 flex items-center justify-between px-3 md:px-5"
        >
            <Works />
            <div>
                <User />
                <Menu {icon_set} on:toggle_navigation={toggleNavigation} />
            </div>
        </article>
        <nav
            class="w-full flex flex-col items-center px-5 text-black dark:text-white my-1 font-semibold text-2xl
            sm:text-3xl"
        >
            {#each navigation_routes as routes}
                <a
                    href={routes.url}
                    class="h-17.75 flex items-center duration-200 ease-out hover:ease-in hover:text-gray-700
                    dark:hover:text-gray-300"
                    data-sveltekit-reload
                >
                    {routes.item.toUpperCase()}
                </a>
            {/each}
        </nav>
    {/if}
</section>
