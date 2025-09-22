<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Careers from "$lib/assets/careers/careers.jpg";
</script>

<Header />
<main>
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article lg:!flex-row">
            <div class="image-effect">
                <img src={Careers} alt="Careers" fetchpriority="high" />
            </div>
            <div class="w-full flex flex-col items-start">
                <h1 class="h1">Careers</h1>
                <p class="p mt-8">
                    Explore exciting career opportunities at DIVD.works! Our
                    portal connects you with the latest job openings and
                    provides an easy way to apply for positions that align with
                    your skills and aspirations.
                </p>
                <p class="p my-4">
                    Start your journey with us today! You can find a list of
                    careers that match your position and apply for it. Click the
                    button to get started!
                </p>
                <a
                    href="https://people.divd.works/"
                    class="bg-black dark:bg-white ctabutton"
                    target="_blank"
                >
                    {"Explore careers!".toUpperCase()}
                </a>
            </div>
        </article>
    </section>
</main>
<Footer />
