<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article !items-start md:!items-center">
            <h1 class="h1">Projects</h1>
            <p class="p my-3 text-left md:text-center">
                At DIVD.works, we build projects that help us learn and grow
                with the open to work principle. We believe in sharing our work
                to the outside world and learning from others. Open source
                projects is a great way to do this. Making us on of the first
                companies in the Netherlands to openly share about how we to
                things and what makes us stand out.
            </p>
            <div class="w-full grid grid-cols-12 gap-8">
                {#each page.data.projects as { location, image, title, description, tags }}
                    <article class="projects">
                        <a
                            href={location}
                            class="col-span-12 xl:col-span-4"
                            target="_blank"
                        >
                            <img src={image} alt={title} fetchpriority="high" />
                        </a>
                        <div class="col-span-12 xl:col-span-8">
                            <h2 class="h2 !text-3xl md:!text-4xl">{title}</h2>
                            <p class="p mt-8 mb-4">{description}</p>
                            <ol class="p pl-4" style="list-style-type:square">
                                {#each tags as tag}
                                    <li class="marker:text-purple-500">
                                        {tag}
                                    </li>
                                {/each}
                            </ol>
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
