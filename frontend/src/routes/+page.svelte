<script lang="ts">
    import Community from "$lib/components/Community.svelte";
    import Herosection from "$lib/components/Herosection.svelte";
    import Thrive from "$lib/components/Thrive.svelte";
</script>

<svelte:head>
	<title>Home | DIVD.works</title>
    <meta name="description" content="DIVD.works is the bridge connector and a platform between students and companies. Explore your future internship and discover motivated talent today!" />
    <meta name="keywords" content="DIVD.works, platform, internship, talent" />
</svelte:head>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <Herosection />
    <Thrive />
    <Community />
</main>
