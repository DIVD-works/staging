<script lang="ts">
    import Community from "$lib/components/Community.svelte";
    import type { Card } from "$lib/components/types";
    import Icon from "@iconify/svelte";

    const internship_card: Card[] = [
        {
            title: "Skill Development",
            description: "Engage in hands-on projects that enhance both technical and soft skills crucial for the global " +
            "digital landscape.",
            icon: "mdi:tool-clock",
        },
        {
            title: "International Exposure",
            description:
            "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
            icon: "mdi:globe",
        },
        {
            title: "Career Advancement",
            description:
            "Build a robust foundation that prepares you for opportunities in international organizations and the broader " + 
            "digital economy.",
            icon: "mdi:stairs-up",
        },
    ];
</script>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-yellow-500">Careers</h1>
            <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                At DIVD.works, we are committed to nurturing the next generation professionals through our comprehensive 
                Internship Program. This initiative is designed to equip participants with essential skills, practical 
                experience, and a global network, paving the way for a successful career in the digital world.
            </p>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-yellow-500">Skill trajectory</h2>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">As a student and young professional you will achieve all the 
                necessary skills to broaden your personal career. At DIVD.works you have the freedom to learn the things that
                suits your career path. With years of experience we lead people to become a digital expert in the field. Read 
                all the benefits below.
            </p>
            <div class="grid grid-cols-12 w-full gap-5 font-medium text-lg text-center">
                {#each internship_card as card}
                    <article class="col-span-12 sm:col-span-6 md:col-span-4 rounded-2xl bg-gray-200 dark:bg-gray-800 flex 
                        flex-col items-center px-4 py-8 transition-all scale-100 hover:scale-105">
                        <div class="w-full flex justify-center">
                            <Icon icon={card.icon} font-size="56" class="text-black dark:text-white" />
                        </div>
                        <h3 class="text-3xl font-medium text-yellow-500 my-4">{card.title}</h3>
                        <p class="text-lg/8 font-light w-full">{card.description}</p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-black dark:text-white">Benefits of joining</h2>
            <ol class="list-decimal list-inside text-lg/10 font-light my-6 md:my-10 w-full">
                <li>Acquire and enhance essential hard and soft skills vital for a career in cybersecurity.</li>
                <li>Gain practical experience working within an international organization.</li>
                <li>Receive a certificate upon successful completion of the program.</li>
                <li>Connect with a network of motivated and like-minded individuals worldwide.</li>
                <li>Improve your English proficiency in a professional setting.</li>
            </ol>
            <div class="grid grid-cols-12 w-full gap-5 text-white font-medium text-lg">
                <a href="https://form.jotform.com/250672969917070" target="_blank" class="col-span-12 sm:col-span-4 
                    lg:col-span-3 w-auto h-10 rounded-3xl bg-yellow-500 content-center transition-all 
                    hover:bg-yellow-400 dark:hover:bg-yellow-600">
                    <button class="cursor-pointer w-full flex justify-center items-center">
                        {"Apply now!".toUpperCase()}
                        <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="ml-5" />
                    </button>
                </a>
            </div>
        </article>
    </section>
    <Community />
</main>
