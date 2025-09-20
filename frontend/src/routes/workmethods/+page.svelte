<script lang="ts">
    import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <!-- Workmethods section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src="src/lib/assets/workmethods.jpg"
                    alt="Workmethods"
                    fetchpriority="high"
                />
            </div>
            <div class="w-full flex flex-col items-start">
                <h1 class="text-purple-500 text-5xl md:text-6xl font-extrabold">
                    Workmethods
                </h1>
                <p
                    class="text-gray-700 dark:text-gray-300 mt-8 mb-4 text-base sm:text-lg"
                >
                    Many young people today face the significant challenge of
                    finding internships or getting accepted into programs that
                    align with their career goals. This makes it harder for them
                    to gain the experience they need to succeed professionally.
                </p>
                <p
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg"
                >
                    The DIVD.works was created to solve this problem. It
                    provides a platform where students can find numerous
                    opportunities to complete internships, work on projects, and
                    gain valuable hands-on experience.
                </p>
            </div>
        </article>
    </section>
    <!-- Bridging the Gap section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start flex-col gap-8"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                Bridging the Gap
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                Isn't it a shame that it's so hard for students to find an
                internship? Despite their motivation, creativity, and fresh
                perspectives, countless students struggle to secure a place
                where they can put their skills to the test and gain real-world
                experience. This not only holds them back but also means that
                companies miss out on young talent eager to contribute and
                learn.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                What if we could change that? Imagine a platform that bridges
                the gap between ambitious students and forward-thinking
                companies, offering opportunities that benefit both sides. A
                place where students can showcase their potential, and companies
                can discover motivated individuals ready to make a difference.
            </p>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                Let’s create that connection. Let’s make internships accessible,
                rewarding, and impactful—for students and businesses alike.
            </p>
        </article>
    </section>
    <!-- Connecting Ambition section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div class="w-full flex flex-col items-start">
                <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                    Connecting Ambition
                </h2>
                <p
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg pt-8"
                >
                    We aim to bridge the gap between companies and students by
                    creating a transparent, efficient platform. Currently, the
                    internship process is unclear and overwhelming, making it
                    difficult for students to find the right match.
                </p>
                <p
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg py-8"
                >
                    Our solution is to enable clear filtering based on skills,
                    interests, and requirements, allowing both students and
                    companies to connect more effectively. This way, companies
                    gain access to motivated talent, and students find
                    internships that truly fit their abilities and ambitions.
                </p>
                <p
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg"
                >
                    By fostering direct communication and clarity, we make
                    internships fair and accessible for everyone.
                </p>
            </div>
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src="src/lib/assets/connecting-ambition.webp"
                    alt="Connecting Ambition"
                    fetchpriority="high"
                />
            </div>
        </article>
    </section>
    <!-- What we offer -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-start flex-col gap-8"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                What we offer
            </h2>
            <ol
                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg"
                style="list-style-type:square"
            >
                <p
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4"
                >
                    At DIVD Works, you can:
                </p>
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
    <!-- What can you do? section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div class="w-full flex flex-col items-start">
                <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                    What can you do?
                </h2>
                <ol
                    class="text-gray-700 dark:text-gray-300 text-base sm:text-lg pl-4 mt-8"
                    style="list-style-type:square"
                >
                    <p
                        class="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4"
                    >
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
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src="src/lib/assets/what-can-you-do.png"
                    alt="What can you do"
                    fetchpriority="high"
                />
            </div>
        </article>
    </section>
    <!-- Why we stand out section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50 dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2 class="text-purple-500 text-5xl md:text-6xl font-semibold">
                Why we stand out
            </h2>
            <p
                class="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-4"
            >
                DIVD Works offers the highest number of internships in the
                Netherlands, making it one of the top platforms for students
                seeking real-world experience. Currently based in the
                Netherlands, DIVD Works has the potential to expand
                internationally, but that depends on the support and involvement
                of students and professionals.
            </p>
        </article>
    </section>
    <!-- Join us section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 pt-10 bg-white dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col lg:flex-row gap-8"
        >
            <div
                class="w-full flex flex-col items-center scale-100 hover:scale-105 duration-200 ease-out
                hover:ease-in"
            >
                <img
                    src="src/lib/assets/join-us.png"
                    alt="Join us"
                    class="hue-rotate-230"
                    fetchpriority="high"
                />
            </div>
            <div class="w-full flex flex-col items-start">
                <h2
                    class="text-black dark:text-white text-5xl md:text-6xl font-semibold"
                >
                    Join us
                </h2>
                <p
                    class="text-gray-700 dark:text-gray-300 mt-8 mb-4 text-base sm:text-lg"
                >
                    If you’re looking to gain experience, develop your ideas,
                    and take the next step in your professional journey, DIVD
                    Works is the place to be. With a variety of opportunities
                    and the possibility of working on exciting projects, it's an
                    excellent stepping stone for your future career.
                </p>
                <button
                    class="bg-purple-600 w-full sm:w-60 h-12 rounded-2xl cursor-pointer text-black dark:text-white
                    text-xl font-semibold hover:bg-purple-700 duration-200 ease-out
                    hover:ease-in"
                    on:click={(): Promise<void> => goto("/workmethods")}
                >
                    {"Register now!".toUpperCase()}
                </button>
            </div>
        </article>
    </section>
</main>
<Footer />
