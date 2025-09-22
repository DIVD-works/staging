<script lang="ts">
    import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    import Workmethods from "$lib/assets/workmethods/workmethods.jpg";
    import Ambition from "$lib/assets/workmethods/ambition.webp";
    import WhatCanYouDo from "$lib/assets/workmethods/what-can-you-do.png";
    import JoinUs from "$lib/assets/workmethods/join-us.png";
</script>

<Header />
<main>
    <section class="section bgdefault">
        <article class="article lg:!flex-row">
            <div class="image-effect">
                <img src={Workmethods} alt="Workmethods" fetchpriority="high" />
            </div>
            <div class="w-full flex flex-col items-start">
                <h1 class="h1">Work methods</h1>
                <p class="p mt-8 mb-4">
                    Many young people today face the significant challenge of
                    finding internships or getting accepted into programs that
                    align with their career goals. This makes it harder for them
                    to gain the experience they need to succeed professionally.
                </p>
                <p class="p">
                    The DIVD.works was created to solve this problem. It
                    provides a platform where students can find numerous
                    opportunities to complete internships, work on projects, and
                    gain valuable hands-on experience.
                </p>
            </div>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article !items-start">
            <h2 class="h2">Bridging the Gap</h2>
            <p class="p">
                Isn't it a shame that it's so hard for students to find an
                internship? Despite their motivation, creativity, and fresh
                perspectives, countless students struggle to secure a place
                where they can put their skills to the test and gain real-world
                experience. This not only holds them back but also means that
                companies miss out on young talent eager to contribute and
                learn.
            </p>
            <p class="p">
                What if we could change that? Imagine a platform that bridges
                the gap between ambitious students and forward-thinking
                companies, offering opportunities that benefit both sides. A
                place where students can showcase their potential, and companies
                can discover motivated individuals ready to make a difference.
            </p>
            <p class="p">
                Let’s create that connection. Let’s make internships accessible,
                rewarding, and impactful—for students and businesses alike.
            </p>
        </article>
    </section>
    <section class="section bgdefault">
        <article class="article lg:!flex-row">
            <div class="w-full flex flex-col items-start">
                <h2 class="h2">Connecting Ambition</h2>
                <p class="p pt-8">
                    We aim to bridge the gap between companies and students by
                    creating a transparent, efficient platform. Currently, the
                    internship process is unclear and overwhelming, making it
                    difficult for students to find the right match.
                </p>
                <p class="p py-8">
                    Our solution is to enable clear filtering based on skills,
                    interests, and requirements, allowing both students and
                    companies to connect more effectively. This way, companies
                    gain access to motivated talent, and students find
                    internships that truly fit their abilities and ambitions.
                </p>
                <p class="p">
                    By fostering direct communication and clarity, we make
                    internships fair and accessible for everyone.
                </p>
            </div>
            <div class="image-effect">
                <img src={Ambition} alt="Ambition" fetchpriority="high" />
            </div>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article !items-start">
            <h2 class="h2">What we offer</h2>
            <ol class="p pl-4" style="list-style-type:square">
                <p class="p mb-4">At DIVD Works, you can:</p>
                <li>
                    Develop your own projects: If you have an idea or passion,
                    you can start working on it here. It’s similar to creating a
                    startup where your ideas are nurtured and developed.
                </li>
                <li class="py-2">
                    Collaborate on existing projects: If you’re unsure where to
                    begin, you can join projects that align with your interests
                    and work with others.
                </li>
                <li>
                    Complete your education: If your primary goal is to finish
                    your studies, DIVD Works allows you to do so while gaining
                    real-world experience.
                </li>
            </ol>
        </article>
    </section>
    <section class="section bgdefault">
        <article class="article lg:!flex-row">
            <div class="w-full flex flex-col items-start">
                <h2 class="h2">What can you do?</h2>
                <ol class="p pl-4 mt-8" style="list-style-type:square">
                    <p class="p mb-4">
                        There are several ways you can engage with DIVD Works:
                    </p>
                    <li>
                        Start a project or business: If you have an
                        entrepreneurial mindset, you can initiate your project
                        or business. If the project is successful, it could even
                        become monetizable.
                    </li>
                    <li class="py-2">
                        Work on client projects: You can also contribute to
                        projects provided by DIVD Works’ clients, allowing you
                        to apply your skills in real-world scenarios.
                    </li>
                    <li class="pb-2">
                        Create your project: If you have a unique idea, you’re
                        encouraged to bring it to life, which could lead to
                        further career opportunities.
                    </li>
                    <li>
                        Take courses: During your first few weeks at DIVD Works,
                        you can take courses to help you build the necessary
                        skills for your chosen career path.
                    </li>
                </ol>
            </div>
            <div class="image-effect">
                <img src={WhatCanYouDo} alt="What can you do" />
            </div>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article !items-start">
            <h2 class="h2">Why we stand out</h2>
            <p class="p mb-4">
                DIVD Works offers the highest number of internships in the
                Netherlands, making it one of the top platforms for students
                seeking real-world experience. Currently based in the
                Netherlands, DIVD Works has the potential to expand
                internationally, but that depends on the support and involvement
                of students and professionals.
            </p>
        </article>
    </section>
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article lg:!flex-row">
            <div class="image-effect">
                <img src={JoinUs} alt="Join us" class="hue-rotate-230" />
            </div>
            <div class="w-full flex flex-col items-start">
                <h2 class="!text-black dark:!text-white h2">Join us</h2>
                <p class="p mt-8 mb-4">
                    If you’re looking to gain experience, develop your ideas,
                    and take the next step in your professional journey, DIVD
                    Works is the place to be. With a variety of opportunities
                    and the possibility of working on exciting projects, it's an
                    excellent stepping stone for your future career.
                </p>
                <button
                    class="bg-purple-600 !text-black dark:!text-white
                    hover:!bg-purple-700 ctabutton block"
                    on:click={(): Promise<void> => goto("/workmethods")}
                >
                    {"Register now!".toUpperCase()}
                </button>
            </div>
        </article>
    </section>
</main>
<Footer />
