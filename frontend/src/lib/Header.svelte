<script lang="ts">
    import Navigation from "./Navigation.svelte";
    import User from "./User.svelte";
    import Works from "./Works.svelte";
    import Menu from "./Menu.svelte";

    const icon_set: string = "mdi:hamburger-open";
    let menu_open: boolean = false;
    const toggleNavigation: () => boolean = (): boolean =>
        (menu_open = !menu_open);
</script>

<header
    class="w-full h-16 sm:h-20 flex items-center justify-between px-3 md:px-5 sticky top-0 bg-purple-500
    dark:bg-purple-950 z-10"
>
    <Works />
    <article>
        <User />
        <Menu {icon_set} on:toggle_navigation={toggleNavigation} />
    </article>
</header>
{#if menu_open}
    <Navigation menu_open on:toggle_navigation={toggleNavigation} />
{/if}
