<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { service_cards } from "$lib/types";
    import Icon from "@iconify/svelte";
</script>

<Header />
<main>
    <!-- Services section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                Services
            </h1>
            <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {#each service_cards as card}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 place-items-center"
                    >
                        <Icon
                            icon={card.icon}
                            class="w-20 sm:w-24 h-20 sm:h-24 text-black dark:text-white scale-100 hover:scale-110
                            duration-200 ease-out hover:ease-in"
                        />
                        <h2
                            class="text-purple-500 text-3xl sm:text-4xl font-semibold my-3 text-center"
                        >
                            {card.title}
                        </h2>
                        <p
                            class="text-gray-700 dark:text-gray-300 text-base sm:text-lg text-center"
                        >
                            {card.slogan}
                        </p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
