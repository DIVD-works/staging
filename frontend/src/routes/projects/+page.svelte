<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import type { Projects } from "$lib/types";

    import PGU from "$lib/assets/projects/project-global-universities.png";
    import ICY from "$lib/assets/projects/project-icy.png";
    import VLAM from "$lib/assets/projects/vlamai.png";

    const projects: Projects<string>[] = [
        {
            location:
                "https://csirt.substack.com/p/project-global-universities-pgu",
            image: PGU,
            title: "Project Global Universities",
            description:
                "CSIRT.global's Global Universities project aims to identify and mitigate cybersecurity vulnerabilities affecting universities worldwide. We work closely with talented cybersecurity students who contribute their skills through hands-on research and analysis. These students investigate exposed systems, analyze threats, and support responsible disclosure processes. The goal is to enhance digital resilience in the academic sector while nurturing the next generation of cybersecurity professionals.",
        },
        {
            location: "https://github.com/SSC-ICT-Innovatie/ICY",
            image: ICY,
            title: "Project ICY",
            description:
                "An open-source survey application designed as an alternative solution for use by the Dutch Government.",
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
            description:
                "Project vlam.ai (Veilige, Lokale AI Modellen – “Safe, Local AI Models”) is a Dutch government initiative by BZK, VRO, and SSC-ICT that delivers secure, locally hosted, and scalable AI solutions for the Dutch government, enabling private AI application deployment, confidential generative AI chat, and efficient AI-powered search across public-sector data.",
        },
    ];
</script>

<Header />
<main>
    <!-- Projects section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start md:items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                Projects
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-left md:text-center"
            >
                At DIVD.works, we build projects that help us learn and grow
                with the open to work principle. We believe in sharing our work
                to the outside world and learning from others. Open source
                projects is a great way to do this. Making us on of the first
                companies in the Netherlands to openly share about how we to
                things and what makes us stand out.
            </p>
            <div class="w-full grid grid-cols-12 gap-8">
                {#each projects as { location, image, title, description, tags }, _}
                    <article
                        class="col-span-12 w-full grid grid-cols-12 gap-4 sm:gap-8 place-items-center border
                        sm:border-black dark:sm:border-white p-0 sm:p-6 rounded-2xl"
                    >
                        <a
                            href={location}
                            class="col-span-12 xl:col-span-4"
                            target="_blank"
                        >
                            <img src={image} alt={title} fetchpriority="high" />
                        </a>

                        <div class="col-span-12 xl:col-span-8">
                            <h2
                                class="text-purple-500 text-3xl md:text-4xl font-semibold"
                            >
                                {title}
                            </h2>
                            <p
                                class="text-gray-700 dark:text-gray-300 mt-8 mb-4 text-base sm:text-lg"
                            >
                                {description}
                            </p>
                            <ol
                                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg pl-4"
                                style="list-style-type:square"
                            >
                                {#each tags as tag}
                                    <li class="marker:text-purple-500">
                                        {tag}
                                    </li>
                                {/each}
                            </ol>
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
