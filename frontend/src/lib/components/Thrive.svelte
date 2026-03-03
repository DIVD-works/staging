<script lang="ts">
    import Icon from "@iconify/svelte";
    import type { Card } from "./types";

    const card: Card[] = [
        {
            title: "Students",
            description: "Students gain Real-World experience",
            icon: "mdi:account-student",
        },
        {
            title: "Companies",
            description: "Companies discover motivated talent",
            icon: "mdi:company",
        },
        {
            title: "Education",
            description: "Education empowers knowledge",
            icon: "mdi:book-education",
        },
        {
            title: "Communities",
            description: "Communities connect and collaborate",
            icon: "mdi:discord",
        },
        {
            title: "Workset",
            description: "Workset empowers mentorship/growth",
            icon: "mdi:hammer-wrench",
        },
        {
            title: "Freedom",
            description: "Freedom embarks lifelong learning",
            icon: "mdi:bird",
        },
    ];
</script>

<section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
    <article class="lg:w-[1100px]">
        <h2 class="text-4xl md:text-5xl font-semibold text-black dark:text-white">
            Thrive with us
        </h2>
        <p class="text-lg/8 font-light my-6 md:my-10 w-full">
            DIVD.works provides benefits for both students, companies and those who are looking for a (parttime) job.
            The "working in the open principle" allows us to be transparant and we're one of the first who bridge the gap
            between students looking for an internship and companies who are offering jobs on the platform. Read all the
            benefits below.
        </p>
        <div class="grid grid-cols-12 w-full gap-5 font-medium text-lg text-center">
            {#each card as card}
                <article class="col-span-12 sm:col-span-6 md:col-span-4 rounded-2xl bg-purple-200 dark:bg-purple-800 flex 
                    flex-col items-center px-4 py-8 transition-all scale-100 hover:scale-105">
                    <h3 class="text-3xl font-medium text-black dark:text-white">{card.title}</h3>
                    <p class="text-lg/8 font-light my-4 w-full">{card.description}</p>
                    <Icon icon={card.icon} font-size="56" class="text-black dark:text-white" />
                </article>
            {/each}
        </div>
    </article>
</section>
