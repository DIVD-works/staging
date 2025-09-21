<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import type { Team } from "$lib/types";

    import Victor from "$lib/assets/team/victor.jpg";
    import Akiko from "$lib/assets/team/akiko.jpeg";
    import Default from "$lib/assets/team/default.jpg";
    import Liam from "$lib/assets/team/liam.jpeg";
    import Baran from "$lib/assets/team/baran.jpeg";
    import Loek from "$lib/assets/team/loek.jpeg";
    import Luc from "$lib/assets/team/luc.jpeg";
    import Dirk from "$lib/assets/team/dirk.jpeg";
    import Nigel from "$lib/assets/team/nigel.png";
    import Ahmed from "$lib/assets/team/ahmed.jpg";
    import Marcel from "$lib/assets/team/marcel.jpg";
    import Michel from "$lib/assets/team/michel.jpg";

    const draggable: boolean = false;

    const team: Team<string>[] = [
        {
            source: Victor,
            title: "Victor Gevers",
            description: "CEO",
        },
        {
            source: Akiko,
            title: "Akiko Takashima",
            description: "Chief Financial Officer",
        },
        {
            source: Default,
            title: "Jared Hofman",
            description: "SVP, Business Operations",
        },
        {
            source: Liam,
            title: "Liam Plokkaar",
            description: "SVP, Sales",
        },
        {
            source: Baran,
            title: "Baran Canakci",
            description: "Chief Marketing Officer",
        },
        {
            source: Loek,
            title: "Loek Ota",
            description: "SVP, Chief People Office",
        },
        {
            source: Luc,
            title: "Luc van Kessel",
            description: "SVP, Support",
        },
        {
            source: Dirk,
            title: "Dirk Rijntalder",
            description: "SVP, Chief Legal Officer",
        },
        {
            source: Nigel,
            title: "Nigel van Maanen",
            description: "Chief Creative Officer (CCO)",
        },
        {
            source: Ahmed,
            title: "Ahmed Ezzammouri",
            description: "CISO",
        },
        {
            source: Marcel,
            title: "Marcel van der Kuil",
            description: "COO",
        },
        {
            source: Michel,
            title: "Michel Verhagen",
            description: "Chief Public Private Partnerships",
        },
    ];
</script>

<Header />
<main>
    <!-- About section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start md:items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                About
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-left md:text-center"
            >
                At DIVD.works, we have a team of dedicated professionals who are
                passionate about what they do. Our team members bring a wealth
                of experience and expertise to the table, ensuring that we
                deliver high-quality services to our stakeholders. We believe in
                collaboration, innovation, and continuous learning, which allows
                us to stay ahead in the industry and provide the best solutions
                for everyone.
            </p>
            <div
                class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {#each team as { source, title, description }, _}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md text-center flex flex-col items-center"
                    >
                        <figure>
                            <img
                                src={source}
                                {draggable}
                                alt={title}
                                class="w-56 xl:w-44 h-56 xl:h-44 mx-auto rounded-full mb-8 border-2 border-purple-500"
                            />
                        </figure>
                        <h2
                            class="text-black dark:text-white text-2xl sm:text-3xl font-semibold"
                        >
                            {title}
                        </h2>
                        <p
                            class="text-gray-700 dark:text-gray-300 mt-2 mb-4 text-base sm:text-lg text-center
                            font-medium"
                        >
                            {description}
                        </p>
                        <li
                            class="bg-purple-500 h-[1px] w-[233px] list-disc text-center list-inside pl-4
                            text-purple-500"
                        ></li>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
