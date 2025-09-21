<script lang="ts">
    import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";
    import PoweredByPurpose from "$lib/assets/powered-by-purpose.png";
    import Banner from "$lib/assets/banner.jpg";
    import type { Cards, TechnologyIcons } from "$lib/types";

    const home_cards: Cards<string>[] = [
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
            description: "Education prepares students for the future",
            icon: "mdi:education-outline",
        },
        {
            title: "Communities",
            description: "Communities connect, collaborate and innovate",
            icon: "mdi:connect-without-contact",
        },
        {
            title: "Workset",
            description: "Workset empowers mentorship and growth",
            icon: "mdi:computer",
        },
        {
            title: "Freedom",
            description: "Freedom embarks a journey of lifelong learning",
            icon: "mdi:bird",
        },
    ];

    const technology_icons: TechnologyIcons<string>[] = [
        {
            icon: "tabler:brand-svelte",
            style: "text-orange-600",
        },
        {
            icon: "mdi:language-typescript",
            style: "text-blue-500",
        },
        {
            icon: "mdi:tailwind",
            style: "text-sky-400",
        },
        {
            icon: "mdi:language-rust",
            style: "text-orange-500",
        },
        {
            icon: "mdi:database",
            style: "text-yellow-400",
        },
        {
            icon: "mdi:language-python",
            style: "text-green-500",
        },
        {
            icon: "tabler:brand-flutter",
            style: "text-blue-300",
        },
        {
            icon: "mdi:github",
            style: "text-black dark:text-white",
        },
        {
            icon: "mdi:linux",
            style: "text-black dark:text-white",
        },
        {
            icon: "mdi:google",
            style: "text-red-500",
        },
    ];
</script>

<Header />
<main>
    <!-- Banner section -->
    <section
        class="w-full h-[calc(100vh-5rem)] flex justify-start md:justify-center px-3 lg:px-0"
        style="background: linear-gradient(rgba(0, 0, 0, 0.9)), url({Banner}); bg-repeat: no-repeat;
        background-size: cover; z-index: 1;"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-4 sm:gap-8
            md:gap-20"
        >
            <h1
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Powered by Purpose
            </h1>
            <p class="text-white text-base sm:text-lg md:text-xl font-base">
                The goal of the DIVD.works project is to create a platform that
                brings together young digital talent and employers. We help you
                not only further develop your skills, but also find an
                internship or (part-time) job that suits you. Finding an
                internship or later a graduation internship turns out to be
                quite a challenge, causing more and more young people to give
                up. A shame, isn’t it? We aim to change that! Click the buttons
                below to get started and find your search for an internship or
                project.
            </p>
            <div
                class="w-full flex flex-col sm:flex-row text-white gap-5 md:gap-10 text-xl sm:text-2xl
                font-semibold"
            >
                <a
                    href="https://form.jotform.com/250672969917070"
                    class="bg-purple-600 w-full h-16 rounded-2xl cursor-pointer flex justify-center
                    items-center"
                    target="_blank"
                >
                    {"Apply now!".toUpperCase()}
                </a>
                <button
                    class="w-full h-16 rounded-2xl border-1 cursor-pointer hover:bg-gray-800 duration-200
                    ease-out hover:ease-in"
                    on:click={(): Promise<void> => goto("/internships")}
                >
                    {"Internships".toUpperCase()}
                </button>
            </div>
        </article>
    </section>
    <!-- Definement section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start flex-col gap-8"
        >
            <h2 class="text-purple-500 text-4xl md:text-5xl font-semibold">
                Our Definement
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                At DIVD.works we take our time to build meaningfull projects
                that really have an impact. No promises we know we can't make or
                half baked solutions. We are working with a set of experienced
                people who have a lot of experience in the field. Whether this
                are applications, Cyber Security, Databases or other IT related
                things, we have the experience. As the first profit organization
                from the DIVD family, we really want to stand out and change the
                way how the industry works. If you want to read more you can
                click the button below for more information about how work.
            </p>
            <button
                class="bg-purple-600 w-full sm:w-50 h-12 rounded-2xl cursor-pointer text-black
                dark:text-white text-xl font-semibold hover:bg-purple-700 duration-200 ease-out
                hover:ease-in"
                on:click={(): Promise<void> => goto("/workmethods")}
            >
                {"Learn more!".toUpperCase()}
            </button>
        </article>
    </section>
    <!-- Why choose us section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50
        dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2
                class="text-black dark:text-white text-4xl md:text-5xl font-semibold"
            >
                Why choose us?
            </h2>
            <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {#each home_cards as { title, description, icon }, _}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 place-items-center"
                    >
                        <h3
                            class="text-purple-500 text-3xl sm:text-4xl font-medium text-center"
                        >
                            {title}
                        </h3>
                        <p
                            class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-center"
                        >
                            {description}
                        </p>
                        <div class="w-full flex justify-center">
                            <Icon
                                {icon}
                                class="w-14 sm:w-16 h-14 sm:h-16 text-black dark:text-white scale-100
                                hover:scale-110 duration-200 ease-out hover:ease-in"
                            />
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
    <!-- Technlogy section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col md:flex-row gap-8"
        >
            <div class="w-full flex flex-col items-center">
                <img
                    src={PoweredByPurpose}
                    alt="Powered by Purpose"
                    class="hue-rotate-230 h-100 sm:h-130 md:h-160"
                    fetchpriority="high"
                />
            </div>
            <div class="w-full flex flex-col items-start">
                <h2
                    class="text-black dark:text-white text-4xl md:text-5xl font-semibold"
                >
                    Technlogy
                </h2>
                <p
                    class="text-gray-700 dark:text-gray-300 my-8 text-base sm:text-lg"
                >
                    We use the latest technologies and tools with we experience
                    in. To stay up to date with the latest trends and really be
                    able to stand out. The working in the open culture makes us
                    of the few that are transparent in what we do and how we do
                    things.
                </p>
                <article
                    class="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-4
                    xl:grid-cols-5 gap-4 sm:gap-6"
                >
                    {#each technology_icons as { icon, style }, _}
                        <Icon
                            {icon}
                            class="{style} w-16 sm:w-20 h-16 sm:h-20 bg-gray-200 dark:bg-gray-800
                            rounded-xl p-2 scale-100 hover:scale-110 duration-200 ease-out hover:ease-in"
                        />
                    {/each}
                </article>
            </div>
        </article>
    </section>
    <!-- Newsletter section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50
        dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start flex-col md:flex-row gap-8
            md:gap-12"
        >
            <div class="w-full flex flex-col items-start">
                <h2 class="text-purple-500 text-4xl md:text-5xl font-semibold">
                    Newsletter
                </h2>
                <p
                    class="text-gray-700 dark:text-gray-300 my-8 text-lg sm:text-xl"
                >
                    Welcome to the DIVD.works newsletter! Do you want to stay up
                    to date of the latest updates, new projects, inspiring
                    stories from students and companies? Then sign up for our
                    newsletter!
                </p>
                <a
                    href="https://newsroom.divd.works/"
                    class="bg-black dark:bg-white w-full sm:w-60 h-12 rounded-2xl cursor-pointer text-white
                    dark:text-black text-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200
                    duration-200 ease-out hover:ease-in flex justify-center items-center"
                    target="_blank"
                >
                    {"To newsletter!".toUpperCase()}
                </a>
            </div>
            <div
                class="w-full h-full bg-gray-200 dark:bg-gray-800 flex flex-col items-center p-8 rounded-3xl
                border border-purple-500"
            >
                <article>
                    <h3
                        class="text-black dark:text-white text-3xl sm:text-4xl font-medium mb-8"
                    >
                        DIVD.works
                    </h3>
                    {#each { length: 8 }}
                        <hr class="text-black dark:text-white h-6" />
                    {/each}
                </article>
            </div>
        </article>
    </section>
    <!-- Looking for opportunities section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2
                class="text-black dark:text-white text-4xl md:text-5xl font-semibold"
            >
                Looking for opportunities?
            </h2>
            <a
                href="https://discord.gg/uRTHZm9GgT"
                class="bg-purple-600 w-full sm:w-60 h-12 rounded-2xl cursor-pointer text-black
                dark:text-white text-xl font-semibold hover:bg-purple-700 duration-200 ease-out
                hover:ease-in flex justify-center items-center"
                target="_blank"
            >
                {"Ask on Discord!".toUpperCase()}
            </a>
        </article>
    </section>
</main>
<Footer />
