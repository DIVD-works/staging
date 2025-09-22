<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    const draggable: boolean = false;
</script>

<Header />
<main>
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article !items-start md:!items-center">
            <h1 class="h1">About</h1>
            <p class="p my-3 text-left md:text-center">
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
                {#each page.data.team as { source, title, description }}
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
                            class="h2 !text-black dark:!text-white !text-2xl sm:!text-3xl"
                        >
                            {title}
                        </h2>
                        <p class="p my-3 text-center font-medium">
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
