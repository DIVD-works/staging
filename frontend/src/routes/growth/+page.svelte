<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    import Sustainability from "$lib/assets/growth/sustainability.jpg";
    import Investors from "$lib/assets/growth/investors.jpg";
</script>

<Header />
<main>
    <!-- Growth section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div class="w-full flex flex-col items-center lg:items-start">
                <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                    Growth
                </h1>
                <p
                    class="text-gray-700 dark:text-gray-300 mt-8 text-base sm:text-lg text-center lg:text-left"
                >
                    At DIVD.works, we’re dedicated to shaping the future by
                    empowering individuals to build meaningful careers, pursue
                    lifelong learning, and contribute to a sustainable and
                    purposeful world. Our commitment extends beyond just
                    offering jobs. We focus on fostering education, mentorship,
                    and guidance that help individuals grow and make a lasting
                    impact. Together, we’re building a community that thrives on
                    personal and professional development with a clear sense of
                    purpose.
                </p>
            </div>
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src={Sustainability}
                    alt="Sustainability"
                    fetchpriority="high"
                />
            </div>
        </article>
    </section>
    <!-- Sustainability section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50
        dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center lg:items-start flex-col"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                Sustainability
            </h2>
            <p
                class="text-gray-700 dark:text-gray-300 mt-8 text-base sm:text-lg text-center lg:text-left"
            >
                At DIVD.works, we are dedicated to empowering individuals with
                purposeful careers that make a positive impact on society and
                the environment. Beginning in 2025, we began creating pathways
                for meaningful work, and by 2023, we expanded our efforts to
                include global education and mentorship opportunities. By 2026,
                we aim to offer comprehensive training programs to help people
                transition into sustainable, purpose-driven roles focusing on
                personal development, sustainability, and leadership. All our
                workforce and mentorship initiatives will be designed to
                cultivate careers contributing to a sustainable, equitable, and
                purpose-driven future.
            </p>
        </article>
    </section>
    <!-- Investors section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img src={Investors} alt="Investors" fetchpriority="high" />
            </div>
            <div class="w-full flex flex-col items-center lg:items-start">
                <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                    Investors
                </h2>
                <p
                    class="text-gray-700 dark:text-gray-300 mt-8 text-base sm:text-lg text-center lg:text-left"
                >
                    At DIVD.works, we are committed to driving innovation,
                    sustainability, and social impact. Here, we provide insights
                    into our mission, strategies, and opportunities for growth.
                    We invite you to explore how your investment can contribute
                    to building a more sustainable and purposeful world while
                    achieving long-term value.
                </p>
            </div>
        </article>
    </section>
</main>

<Footer />
