<script lang="ts">
    import Growth from "$lib/assets/workings/growth.jpg";
    import Investors from "$lib/assets/workings/investors.jpg";
    import Workings from "$lib/assets/workings/workings.jpg";
    import Ambition from "$lib/assets/workings/ambition.webp";
    import Engagement from "$lib/assets/workings/engagement.png";
    import Community from "$lib/components/Community.svelte";
    import Icon from "@iconify/svelte";

    const draggable: boolean = false;
</script>

<main class="bg-zinc-50 dark:bg-zinc-950 text-neutral-600 dark:text-neutral-400">
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] pt-12 md:pt-20 flex flex-col md:flex-row gap-5 items-center">
            <div class="w-full">
                <h1 class="text-5xl/14 md:text-6xl/18 font-bold text-purple-500">Growth</h1>
                <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                    At DIVD.works, we’re dedicated to shaping the future by empowering individuals to build meaningful 
                    careers, pursue lifelong learning, and contribute to a sustainable and purposeful world. Our commitment 
                    extends beyond just offering jobs. We focus on fostering education, mentorship, and guidance that help 
                    individuals grow and make a lasting impact. Together, we’re building a community that thrives on personal 
                    and professional development with a clear sense of purpose.
                </p>
            </div>
            <figure class="w-full transition-all scale-100 hover:scale-105">
                <img src={Growth} {draggable} alt="Growth" />
            </figure>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Sustainability</h2>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                At DIVD.works, we are dedicated to empowering individuals with purposeful careers that make a positive impact 
                on society and the environment. Beginning in 2025, we began creating pathways for meaningful work, and by 
                2023, we expanded our efforts to include global education and mentorship opportunities. By 2026, we aim to 
                offer comprehensive training programs to help people transition into sustainable, purpose-driven roles 
                focusing on personal development, sustainability, and leadership. 
            </p>
            <p class="text-lg/8 font-light w-full">
                All our workforce and mentorship initiatives will be designed to cultivate careers contributing to a 
                sustainable, equitable, and purpose-driven future.
            </p>
        </article>
    </section>
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px] flex flex-col md:flex-row gap-5 items-center">
            <figure class="w-full transition-all scale-100 hover:scale-105">
                <img src={Investors} {draggable} alt="Investors" />
            </figure>
            <div class="w-full">
                <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Investors</h2>
                <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                    At DIVD.works, we are committed to driving innovation, sustainability, and social impact. Here, we provide 
                    insights into our mission, strategies, and opportunities for growth. We invite you to explore how your 
                    investment can contribute to building a more sustainable and purposeful world while achieving long-term 
                    value.
                </p>
            </div>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px] flex flex-col md:flex-row gap-5 items-center">
            <figure class="w-full transition-all scale-100 hover:scale-105">
                <img src={Workings} {draggable} alt="Workings" />
            </figure>
            <div class="w-full">
                <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Workings</h2>
                <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                    Many young people today face the significant challenge of finding internships or getting accepted into 
                    programs that align with their career goals. This makes it harder for them to gain the experience they 
                    need to succeed professionally.
                </p>
                <p class="text-lg/8 font-light w-full">
                    The DIVD.works was created to solve this problem. It provides a platform where students can find numerous
                    opportunities to complete internships, work on projects, and gain valuable hands-on experience.
                </p>
            </div>
        </article>
    </section>
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Bridging the Gap</h2>
            <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                Isn't it a shame that it's so hard for students to find an internship? Despite their motivation, creativity, 
                and fresh perspectives, countless students struggle to secure a place where they can put their skills to the 
                test and gain real-world experience. This not only holds them back but also means that companies miss out on 
                young talent eager to contribute and learn.
            </p>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                What if we could change that? Imagine a platform that bridges the gap between ambitious students and 
                forward-thinking companies, offering opportunities that benefit both sides. A place where students can 
                showcase their potential, and companies can discover motivated individuals ready to make a difference.
            </p>
            <p class="text-lg/8 font-light w-full">
                Let’s create that connection. Let’s make internships accessible, rewarding, and impactful—for students and 
                businesses alike.
            </p>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px] flex flex-col md:flex-row gap-5 items-center">
            <div class="w-full">
                <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Connecting Ambition</h2>
                <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                    We aim to bridge the gap between companies and students by creating a transparent, efficient platform. 
                    Currently, the internship process is unclear and overwhelming, making it difficult for students to find 
                    the right match.
                </p>
                <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                    Our solution is to enable clear filtering based on skills, interests, and requirements, allowing both 
                    students and companies to connect more effectively. This way, companies gain access to motivated talent, 
                    and students find internships that truly fit their abilities and ambitions.
                </p>
                <p class="text-lg/8 font-light w-full">
                    By fostering direct communication and clarity, we make internships fair and accessible for everyone.
                </p>
            </div>
            <figure class="w-full transition-all scale-100 hover:scale-105">
                <img src={Ambition} {draggable} alt="Ambition" />
            </figure>
        </article>
    </section>
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">What we offer</h2>
            <p class="text-lg/8 font-light mt-6 md:mt-10 w-full mb-4">At DIVD Works, you can:</p>
            <ol class="list-[square] list-inside text-lg/7 font-light">
                <li class="marker:text-purple-500">
                    Develop your own projects: If you have an idea or passion, you can start working on it here. It’s similar 
                    to creating a startup where your ideas are nurtured and developed.
                </li>
                <li class="marker:text-purple-500 py-2">
                    Collaborate on existing projects: If you’re unsure where to begin, you can join projects that align with 
                    your interests and work with others.
                </li>
                <li class="marker:text-purple-500">
                    Complete your education: If your primary goal is to finish your studies, DIVD Works allows you to do so 
                    while gaining real-world experience.
                </li>
            </ol>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px] flex flex-col md:flex-row gap-5 items-center">
            <div class="w-full">
                <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">What can you do?</h2>
                <p class="text-lg/8 font-light mt-6 md:mt-10 w-full mb-4">
                    There are several ways you can engage with DIVD Works:
                </p>
                <ol class="list-[square] list-inside text-lg/7 font-light">
                    <li class="marker:text-purple-500">
                        Start a project or business: If you have an entrepreneurial mindset, you can initiate your project
                        or business. If the project is successful, it could even become monetizable.
                    </li>
                    <li class="marker:text-purple-500 py-2">
                        Work on client projects: You can also contribute to projects provided by DIVD Works’ clients, allowing 
                        you to apply your skills in real-world scenarios.
                    </li>
                    <li class="marker:text-purple-500 pb-2">
                        Create your project: If you have a unique idea, you’re encouraged to bring it to life, which could 
                        lead to further career opportunities.
                    </li>
                    <li class="marker:text-purple-500">
                        Take courses: During your first few weeks at DIVD Works, you can take courses to help you build the 
                        necessary skills for your chosen career path.
                    </li>
                </ol>
            </div>
            <figure class="w-full transition-all scale-100 hover:scale-105">
                <img src={Engagement} {draggable} alt="Engagement" />
            </figure>
        </article>
    </section>
    <section class="w-full px-3 lg:px-0 py-10 flex justify-center">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-purple-500">Why we stand out?</h2>
            <p class="text-lg/8 font-light mt-6 md:mt-10 w-full">
                DIVD Works offers the highest number of internships in the Netherlands, making it one of the top platforms 
                for students seeking real-world experience. Currently based in the Netherlands, DIVD Works has the potential 
                to expand internationally, but that depends on the support and involvement of students and professionals.
            </p>
        </article>
    </section>
    <section class="bg-zinc-100 dark:bg-zinc-900 w-full px-3 lg:px-0 py-10 flex justify-center rounded-l-4xl">
        <article class="lg:w-[1100px]">
            <h2 class="text-4xl md:text-5xl font-semibold text-black dark:text-white">Join us</h2>
            <p class="text-lg/8 font-light my-6 md:my-10 w-full">
                If you’re looking to gain experience, develop your ideas, and take the next step in your professional 
                journey, DIVD Works is the place to be. With a variety of opportunities and the possibility of working on 
                exciting projects, it's an excellent stepping stone for your future career.
            </p>
            <div class="grid grid-cols-12 w-full gap-5 text-white font-medium text-lg">
                <a href="https://form.jotform.com/250672969917070" target="_blank" class="col-span-12 sm:col-span-4 
                    lg:col-span-3 w-auto h-10 rounded-3xl bg-purple-500 content-center transition-all hover:bg-purple-400 
                    dark:hover:bg-purple-600">
                    <button class="cursor-pointer w-full flex justify-center items-center group">
                        {"Register now!".toUpperCase()}
                        <Icon icon="tabler:circle-arrow-right-filled" font-size="28" class="translate-x-3 
                            group-hover:translate-x-5 transition-all" 
                        />
                    </button>
                </a>
            </div>
        </article>
    </section>
    <Community />
</main>
