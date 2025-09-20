<script lang="ts">
    import "../tailwind.css";
    import favicon from "$lib/assets/favicon.svg";
    import { page } from "$app/state";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <metadata>
        <title>{page.data.title}</title>
        <meta name="description" content={page.data.description} />
    </metadata>
</svelte:head>

{@render children?.()}

<style>
    :global(.banner) {
        background:
            linear-gradient(rgba(0, 0, 0, 0.9)),
            url("src/lib/assets/banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }
</style>
