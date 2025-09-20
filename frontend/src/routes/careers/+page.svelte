<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    const job_listings: string[] = [
        "Senior Vice President, Business Operations",
        "Senior Vice President, Chief Legal Officer",
        "Senior Vice President, Chief People Officer",
        "Senior Vice President, Communications & Public Policy",
        "Senior Vice President, Safety & Core Services",
        "Senior Vice President, Sales",
        "Senior Vice President, Support",
    ];
</script>

<Header />
<main>
    <!-- Careers section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src="src/lib/assets/careers.jpg"
                    alt="Careers"
                    fetchpriority="high"
                />
            </div>
            <div class="w-full flex flex-col items-start">
                <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                    Careers
                </h1>
                <p
                    class="text-gray-700 dark:text-gray-300 mt-8 text-base sm:text-lg"
                >
                    Explore exciting career opportunities at DIVD.works! Our
                    portal connects you with the latest job openings and
                    provides an easy way to apply for positions that align with
                    your skills and aspirations. Start your journey with us
                    today!
                </p>
            </div>
        </article>
    </section>
    <!-- Career opportunities section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div class="w-full flex flex-col items-start">
                <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                    Career opportunities
                </h2>
                <p
                    class="text-black dark:text-white mt-8 mb-4 text-base sm:text-lg"
                >
                    These are the current job listings:
                </p>
                <a
                    href="/careers"
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg
                    whitespace-pre underline"
                >
                    {job_listings.map((value: string) => value).join("\n")}
                </a>
            </div>
        </article>
    </section>
</main>
<Footer />
