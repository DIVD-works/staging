<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Growth from "$lib/assets/growth/growth.jpg";
    import Investors from "$lib/assets/growth/investors.jpg";
</script>

<Header />
<main>
    <section class="section bgdefault">
        <article class="article lg:!flex-row">
            <div class="w-full flex flex-col items-start">
                <h1 class="h1">Growth</h1>
                <p class="p mt-8">
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
            <div class="image-effect">
                <img src={Growth} alt="Growth" fetchpriority="high" />
            </div>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article !items-start !gap-0">
            <h2 class="h2">Sustainability</h2>
            <p class="p mt-8">
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
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article lg:!flex-row">
            <div class="image-effect">
                <img src={Investors} alt="Investors" fetchpriority="high" />
            </div>
            <div class="w-full flex flex-col items-start">
                <h2 class="h2">Investors</h2>
                <p class="p mt-8">
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
