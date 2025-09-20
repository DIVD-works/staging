<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { projects } from "$lib/types";
</script>

<Header />
<main>
    <!-- Projects section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1
                class="text-purple-500 text-4xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Projects
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 my-3 text-base sm:text-lg text-center"
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
                        class="col-span-12 w-full grid grid-cols-12 gap-8 place-items-center border
                        border-black dark:border-white p-6 rounded-2xl"
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
