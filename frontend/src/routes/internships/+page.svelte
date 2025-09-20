<script lang="ts">
    import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import { internship_cards } from "$lib/types";
    import Icon from "@iconify/svelte";
</script>

<Header />
<main>
    <!-- Internships section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col"
        >
            <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                Internships
            </h1>
            <p
                class="text-gray-700 dark:text-gray-300 mt-8 mb-4 text-base sm:text-lg"
            >
                At DIVD.works, we are committed to nurturing the next generation
                professionals through our comprehensive Internship Program. This
                initiative is designed to equip participants with essential
                skills, practical experience, and a global network, paving the
                way for a successful career in the digital world.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                Discover new skills, gain real-world experience, build
                international connections and take your first step toward an
                exciting career in the global digital landscape.
            </p>
        </article>
    </section>
    <!-- Skill trajectory section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                Skill trajectory
            </h2>
            <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {#each internship_cards as card}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 place-items-center"
                    >
                        <Icon
                            icon={card.icon}
                            class="w-20 sm:w-24 h-20 sm:h-24 text-black dark:text-white scale-100 hover:scale-110
                            duration-200 ease-out hover:ease-in"
                        />
                        <h3
                            class="text-purple-500 text-3xl sm:text-4xl font-medium my-3 text-center"
                        >
                            {card.title}
                        </h3>
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
    <!-- Benefits of joining section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start flex-col gap-8"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                Benefits of joining
            </h2>
            <ol
                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg list-decimal pl-4"
            >
                <li>
                    Acquire and enhance essential hard and soft skills vital for
                    a career in cybersecurity.
                </li>
                <li class="py-2">
                    Gain practical experience working within an international
                    organization.
                </li>
                <li>
                    Receive a certificate upon successful completion of the
                    program.
                </li>
                <li class="py-2">
                    Connect with a network of motivated and like-minded
                    individuals worldwide.
                </li>
                <li>
                    Improve your English proficiency in a professional setting.
                </li>
            </ol>
            <a
                href="https://form.jotform.com/250672969917070"
                class="bg-black dark:bg-white w-full sm:w-60 h-12 rounded-2xl cursor-pointer text-white
                dark:text-black text-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 duration-200
                ease-out hover:ease-in flex justify-center items-center"
                target="_blank"
            >
                {"Apply!".toUpperCase()}
            </a>
        </article>
    </section>
</main>
<Footer />
