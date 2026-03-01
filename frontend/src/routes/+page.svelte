<script lang="ts">
    import Community from "$lib/components/Community.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Herosection from "$lib/components/Herosection.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Thrive from "$lib/components/Thrive.svelte";
</script>

<Navbar />
<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <Herosection />
    <Thrive />
    <Community />
</main>
<Footer />

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
