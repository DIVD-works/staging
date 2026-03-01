<script>
    import Icon from "@iconify/svelte";
</script>

<section class="w-full px-3 lg:px-0 py-10 flex justify-center">
    <article class="lg:w-[1100px]">
        <h2 class="text-4xl md:text-5xl font-semibold text-black dark:text-white">
            Find your people
        </h2>
        <p class="text-lg/8 font-light my-6 md:my-10 w-full">
            We provide a safe space for everyone ready to share there ideas and connect to the community. An innovative way
            build on the "working in the open principle". Don't miss out on the experience. Connect with your fellows and
            find your people who have already joined the community before you.
        </p>
        <div class="grid grid-cols-12 w-full gap-5 font-medium text-lg">
            <a href="https://discord.com/invite/uRTHZm9GgT" target="_blank" class="col-span-12 sm:col-span-6 w-auto h-10 
                rounded-3xl bg-zinc-900 dark:bg-zinc-100 content-center transition-all hover:bg-zinc-700 
                dark:hover:bg-zinc-300 text-white dark:text-black">
                <button class="cursor-pointer w-full flex justify-center items-center">
                    Join our Discord Server 
                    <Icon icon="tabler:brand-discord-filled" font-size="28" class="ml-3" />
                </button>
            </a>
            <button class="col-span-12 sm:col-span-6 w-auto h-10 content-center">
                <a href="https://newsroom.divd.works/" target="_blank" class="w-full sm:w-60 flex justify-center 
                    sm:justify-start font-semibold">
                    Explore our Substack
                    <Icon icon="mingcute:substack-fill" font-size="28" class="ml-3" />
                </a>
            </button>
        </div>
    </article>
</section>
