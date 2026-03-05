<script lang="ts">
    import type { Projects } from "$lib/components/types";
    import PGU from "$lib/assets/projects/project-global-universities.png";
    import ICY from "$lib/assets/projects/project-icy.png";
    import VLAM from "$lib/assets/projects/vlamai.png";

    const projects: Projects[] = [
        {
            location: "https://csirt.substack.com/p/project-global-universities-pgu",
            image: PGU,
            title: "Project Global Universities",
            description: "CSIRT.global's Global Universities project aims to identify and mitigate cybersecurity vulnerabilities affecting universities worldwide. We work closely with talented cybersecurity students who contribute their skills through hands-on research and analysis. These students investigate exposed systems, analyze threats, and support responsible disclosure processes. The goal is to enhance digital resilience in the academic sector while nurturing the next generation of cybersecurity professionals.",
        },
        {
            location: "https://github.com/SSC-ICT-Innovatie/ICY",
            image: ICY,
            title: "Project ICY",
            description: "An open-source survey application designed as an alternative solution for use by the Dutch Government.",
            tags: [
                "Programming Language: Dart",
                "Framework: Flutter",
                "Supported Platforms: Fully multi-platform, including mobile (iOS & Android), web, and desktop environments.",
            ],
        },
        {
            location: "https://vlam.ai/",
            image: VLAM,
            title: "vlam.ai",
            description: "Project vlam.ai (Veilige, Lokale AI Modellen – “Safe, Local AI Models”) is a Dutch government initiative by BZK, VRO, and SSC-ICT that delivers secure, locally hosted, and scalable AI solutions for the Dutch government, enabling private AI application deployment, confidential generative AI chat, and efficient AI-powered search across public-sector data.",
        },
    ];

    const draggable: boolean = false;
</script>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20">
            <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-yellow-500">Projects</h1>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                At DIVD.works, we build projects that help us learn and grow based on the open to work principle. We believe 
                in sharing our work to the outside world and learning from others. Open source projects is a great way to 
                do this. This makes us one of the first companies in the Netherlands to openly share about how we to things and 
                what makes us stand out.
            </p>
            <div class="w-full grid grid-cols-12 gap-5 font-medium text-lg">
                {#each projects as project}
                    <article class="col-span-12 rounded-2xl border-yellow-500 border grid grid-cols-12 items-center p-4 
                        md:p-8 gap-5 md:gap-8">
                        <a href={project.location} target="_blank" class="col-span-12 md:col-span-5 place-items-center
                            transition-all scale-100 hover:scale-105">
                            <img src={project.image} {draggable} alt={project.title} />
                        </a>
                        <div class="col-span-12 md:col-span-7">
                            <h2 class="text-4xl md:text-5xl font-semibold text-yellow-500">{project.title}</h2>
                            <p class="text-lg/8 font-light my-4 md:my-8 w-full">{project.description}</p>
                            <ol class="list-[square] list-inside text-lg/7 font-light">
                                {#each project.tags as tag}
                                    <li class="marker:text-yellow-500">{tag}</li>
                                {/each}
                            </ol>
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
