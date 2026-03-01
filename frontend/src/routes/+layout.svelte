<script lang="ts">
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";
	import "./layout.css";
	import favicon from "$lib/assets/favicon.png";
	import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Home - DIVD.works</title>
</svelte:head>

<Navbar />
{@render children()}
<Footer />

<div style="display:none">
	{#each locales as locale}
		<a
			href={localizeHref(page.url.pathname, { locale })}
		>{locale}</a>
	{/each}
</div>

<style>
    :global(body) {
        background-color: oklch(98.5% 0 0);
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-color: oklch(14.1% 0.005 285.823);
        }
    }
</style>
