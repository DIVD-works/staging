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
