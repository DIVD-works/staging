<script lang="ts">
    import { page } from "$app/state";
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <section class="section bgcolor">
        <article class="article">
            <h1 class="h1">Conduct</h1>
            <p class="p mb-4">
                A Code of Conduct sets clear expectations for employee behavior,
                fostering a respectful, ethical, and professional workplace. It
                ensures accountability, protects confidential information,
                prevents conflicts of interest, and promotes compliance with
                laws and regulations. By adhering to these guidelines, employees
                contribute to a positive and productive work environment that
                upholds the values and integrity of the organization.
            </p>
            <p class="p">
                The <a
                    href="https://github.com/DIVD-works"
                    target="_blank"
                    class="font-semibold underline">DIVD.works project</a
                >
                is about creating an online platform to empower purpose. Connecting
                talent to new opportunities. Contribution guidelines:
                <a
                    href="https://news.victorgevers.com/working-in-the-open-c7517a513c07"
                    target="_blank"
                    class="font-semibold underline">Working in the open</a
                >, following our
                <a
                    href="https://docs.google.com/document/d/1egKSxMCJv-G7pxNGPC2hmB24m_iIM-hc1sQe97ZvGbM/edit?usp=sharing"
                    target="_blank"
                    class="font-semibold underline">Code of Ethics</a
                > and our project handbook, is how the community can get involved.
            </p>
        </article>
    </section>
    <section class="section !py-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h2 class="h2">Rules</h2>
            <div class="w-full flex flex-col gap-6">
                {#each page.data.conduct as { title, description }, index}
                    <h3 class="h3">0{index + 1}. {title}</h3>
                    <p class="p !text-sm sm:!text-base">
                        {description || "No description provided."}
                    </p>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
