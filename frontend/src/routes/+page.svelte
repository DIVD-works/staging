<script lang="ts">
    import { goto } from "$app/navigation";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";
    import PoweredByPurpose from "$lib/assets/powered-by-purpose.png";
    import Banner from "$lib/assets/banner.jpg";
    import { page } from "$app/state";

    import { t } from "$lib/i18n/translations";
</script>

<Header />
<main>
    <section
        class="section h-[calc(100vh-5rem)] !py-0"
        style="background: linear-gradient(rgba(0, 0, 0, 0.9)), url({Banner}); bg-repeat: no-repeat;
        background-size: cover; z-index: 1;"
    >
        <article class="article !gap-4 sm:!gap-8 md:!gap-20">
            <h1 class="!text-3xl sm:!text-5xl h1">
                {$t("common.home.slogan")}
            </h1>
            <p class="p !text-white md:!text-xl font-base">
                {$t("common.home.banner_description")}
            </p>
            <div
                class="w-full flex flex-col sm:flex-row text-white gap-5 md:gap-10 text-xl sm:text-2xl
                font-semibold"
            >
                <a
                    href="https://form.jotform.com/250672969917070"
                    class="bg-purple-600 w-full h-16 rounded-2xl cursor-pointer flex justify-center
                    items-center"
                    target="_blank"
                >
                    {$t("common.home.apply").toUpperCase()}
                </a>
                <button
                    class="w-full h-16 rounded-2xl border-1 cursor-pointer hover:bg-gray-800 duration-200
                    ease-out hover:ease-in"
                    on:click={(): Promise<void> => goto("/internships")}
                >
                    {$t("common.home.internships").toUpperCase()}
                </button>
            </div>
        </article>
    </section>
    <section class="section bgdefault">
        <article class="article">
            <h2 class="h2">Our Definement</h2>
            <p class="p">
                At DIVD.works we take our time to build meaningfull projects
                that really have an impact. No promises we know we can't make or
                half baked solutions. We are working with a set of experienced
                people who have a lot of experience in the field. Whether this
                are applications, Cyber Security, Databases or other IT related
                things, we have the experience. As the first profit organization
                from the DIVD family, we really want to stand out and change the
                way how the industry works. If you want to read more you can
                click the button below for more information about how work.
            </p>
            <button
                class="bg-purple-600 sm:!w-50 !text-black dark:!text-white hover:!bg-purple-700 ctabutton"
                on:click={(): Promise<void> => goto("/workmethods")}
            >
                {"Learn more!".toUpperCase()}
            </button>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article">
            <h2 class="!text-black dark:!text-white h2">Why choose us?</h2>
            <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
                {#each page.data.homecards as { title, description, icon }}
                    <article
                        class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 place-items-center text-center"
                    >
                        <h3 class="h3">{title}</h3>
                        <p class="p my-3">{description}</p>
                        <div class="w-full flex justify-center">
                            <Icon
                                {icon}
                                class="w-14 sm:w-16 h-14 sm:h-16 text-black dark:text-white scale-100
                                hover:scale-110 duration-200 ease-out hover:ease-in"
                            />
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
    <section class="section bgdefault">
        <article class="article md:!flex-row">
            <div class="w-full flex flex-col items-center">
                <img
                    src={PoweredByPurpose}
                    alt="Powered by Purpose"
                    class="hue-rotate-230 h-100 sm:h-130 md:h-160"
                    fetchpriority="high"
                />
            </div>
            <div class="w-full flex flex-col items-start">
                <h2 class="!text-black dark:!text-white h2">Technlogy</h2>
                <p class="p my-8">
                    We use the latest technologies and tools with we experience
                    in. To stay up to date with the latest trends and really be
                    able to stand out. The working in the open culture makes us
                    of the few that are transparent in what we do and how we do
                    things.
                </p>
                <article
                    class="w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-4
                    xl:grid-cols-5 gap-4 sm:gap-6"
                >
                    {#each page.data.technologyicons as { icon, style }}
                        <Icon
                            {icon}
                            class="{style} w-16 sm:w-20 h-16 sm:h-20 bg-gray-200 dark:bg-gray-800
                            rounded-xl p-2 scale-100 hover:scale-110 duration-200 ease-out hover:ease-in"
                        />
                    {/each}
                </article>
            </div>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article !items-start md:!flex-row md:!gap-12">
            <div class="w-full flex flex-col items-start">
                <h2 class="h2">Newsletter</h2>
                <p class="p my-8 !text-lg sm:!text-xl">
                    Welcome to the DIVD.works newsletter! Do you want to stay up
                    to date of the latest updates, new projects, inspiring
                    stories from students and companies? Then sign up for our
                    newsletter!
                </p>
                <a
                    href="https://newsroom.divd.works/"
                    class="bg-black dark:bg-white ctabutton"
                    target="_blank"
                >
                    {"To newsletter!".toUpperCase()}
                </a>
            </div>
            <div
                class="w-full h-full bg-gray-200 dark:bg-gray-800 flex flex-col items-center p-8 rounded-3xl
                border border-purple-500 !text-black dark:!text-white"
            >
                <article>
                    <h3 class="h3 mb-8">DIVD.works</h3>
                    {#each { length: 8 }}
                        <hr class="h-6" />
                    {/each}
                </article>
            </div>
        </article>
    </section>
    <section class="section !py-0 !pt-5 lg:!pt10 bgdefault">
        <article class="article">
            <h2 class="!text-black dark:!text-white h2">
                Looking for opportunities?
            </h2>
            <a
                href="https://discord.gg/uRTHZm9GgT"
                class="bg-purple-600 ctabutton !text-black dark:!text-white hover:!bg-purple-700"
                target="_blank"
            >
                {"Ask on Discord!".toUpperCase()}
            </a>
        </article>
    </section>
</main>
<Footer />
