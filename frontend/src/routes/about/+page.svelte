<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { team } from "$lib/types";

    const draggable: boolean = false;
</script>

<Header />
<main>
    <!-- About section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1
                class="text-purple-500 text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
                About
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-center"
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
                {#each team as { source, identifier, position }, _}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-md text-center flex flex-col items-center"
                    >
                        <figure>
                            <img
                                src={source}
                                {draggable}
                                alt={identifier}
                                class="w-56 xl:w-44 h-56 xl:h-44 mx-auto rounded-full mb-8 border-2 border-purple-500"
                            />
                        </figure>
                        <h2
                            class="text-black dark:text-white text-2xl sm:text-3xl font-semibold"
                        >
                            {identifier}
                        </h2>
                        <p
                            class="text-gray-700 dark:text-gray-300 mt-2 mb-4 text-base sm:text-lg text-center
                            font-medium"
                        >
                            {position}
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
