<script lang="ts">
    import type { Team } from "$lib/components/types";

    import Victor from "$lib/assets/team/victor.jpg";
    import Akiko from "$lib/assets/team/akiko.jpg"; 
    import Default from "$lib/assets/team/default.jpg";
    import Loek from "$lib/assets/team/loek.jpeg";
    import Nigel from "$lib/assets/team/nigel.png";
    import Ahmed from "$lib/assets/team/ahmed.jpg";
    import Michel from "$lib/assets/team/michel.jpg";
    import Roger from "$lib/assets/team/roger.jpg";
    import Tabitha from "$lib/assets/team/tabitha.jpg";

    const team: Team[] = [
        {
            source: Victor,
            title: "Victor Gevers",
            description: "CEO",
        },
        {
            source: Akiko,
            title: "Akiko Takashima",
            description: "Executive Assistant",
        },
        {
            source: Default,
            title: "Jared Hofman",
            description: "SVP, Business Operations",
        },
        {
            source: Loek,
            title: "Loek Ota",
            description: "SVP, Chief People Office",
        },
        {
            source: Nigel,
            title: "Nigel van Maanen",
            description: "Chief Creative Officer",
        },
        {
            source: Ahmed,
            title: "Ahmed Ezzammouri",
            description: "Chief Information Security Officer",
        },
        {
            source: Default,
            title: "Anoniem",
            description: "Chief Operating Officer",
        },
        {
            source: Michel,
            title: "Michel Verhagen",
            description: "Chief Public Private Partnerships",
        },
        {
            source: Roger,
            title: "Roger van der Zalm",
            description: "Customer Support Manager",
        },
        {
            source: Tabitha,
            title: "Tabitha Vogelaar",
            description: "Security Expert",
        },
    ];

    const draggable: boolean = false;
</script>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-black dark:text-white">About</h1>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                At DIVD.works, we have a team of dedicated professionals who are passionate about what they do. Our team 
                members bring a wealth of experience and expertise to the table, ensuring that we deliver high-quality 
                services to our stakeholders. We believe in collaboration, innovation, and continuous learning, which allows
                us to stay ahead in the industry and provide the best solutions for everyone.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 font-medium text-lg text-center">
                {#each team as team}
                    <article class="rounded-2xl bg-gray-200 dark:bg-gray-800 flex flex-col items-center px-4 py-8 
                        transition-all scale-100 hover:scale-105 shadow-md">
                        <figure>
                            <img src={team.source} {draggable} alt={team.title} class="w-44 h-44 mx-auto rounded-full mb-6 
                                md:mb-10 border-2" 
                            />
                        </figure>
                        <h2 class="text-4xl font-semibold text-black dark:text-white">{team.title}</h2>
                        <p class="text-lg/8 font-light my-3 md:my-5 w-full">{team.description}</p>
                        <li class="bg-black dark:bg-white h-px w-50 list-inside pl-4"></li>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
